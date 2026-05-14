#!/usr/bin/env python3
"""Upscale 16:9 master PNGs 2× using Real-ESRGAN + PIL downscale.

Usage:
    python3 .claude/skills/destination-generator/upscale-images.py <path> [--force]

`<path>` is either a directory of PNGs (e.g. public/accommodation/the-brando)
or a single PNG file. Files matching the crop-images.py derivative naming
convention (`*-3x4.png`, `*-1x1.png`, `*-9x16.png`) are skipped — only masters
are touched.

Pipeline per master:
  1. Run realesrgan-ncnn-vulkan with the photo model `realesrgan-x4plus` (4×).
  2. PIL-downscale the 4× result to 2× the source dimensions (Lanczos).
  3. Overwrite the source master with the 2× version.

The script is idempotent in practice: by default it skips a file if its long
edge is already ≥ UPSCALED_THRESHOLD_PX (1800). Pass --force to upscale anyway
(useful after re-running gen-images.py with a different reference).

Requires:
  - Real-ESRGAN binary at ~/.local/realesrgan/realesrgan-ncnn-vulkan
  - Models at ~/.local/realesrgan/models/
  - Pillow (`pip install -r .claude/skills/destination-generator/requirements.txt`)

Order in the pipeline:
  gen-images.py  →  upscale-images.py  →  crop-images.py
"""
import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

from PIL import Image

REALESRGAN_BIN = Path.home() / ".local/realesrgan/realesrgan-ncnn-vulkan"
REALESRGAN_MODELS = Path.home() / ".local/realesrgan/models"
MODEL_NAME = "realesrgan-x4plus"
UPSCALED_THRESHOLD_PX = 1800  # long edge above which we assume already upscaled

DERIV_SUFFIXES = {"-3x4", "-1x1", "-9x16"}


def is_master(p: Path) -> bool:
    if p.suffix.lower() != ".png":
        return False
    return not any(p.stem.endswith(s) for s in DERIV_SUFFIXES)


def list_masters(target: Path):
    if target.is_file():
        if is_master(target):
            yield target
        return
    for p in sorted(target.rglob("*.png")):
        if is_master(p):
            yield p


def upscale_one(master: Path, force: bool) -> bool:
    """Returns True if the file was upscaled, False if skipped."""
    with Image.open(master) as img:
        sw, sh = img.size
    if not force and max(sw, sh) >= UPSCALED_THRESHOLD_PX:
        print(f"· {master.name} (already {sw}×{sh}, skip — pass --force)")
        return False

    print(f"→ {master.name} ({sw}×{sh}) …", flush=True)
    with tempfile.TemporaryDirectory() as tmp:
        tmp_4x = Path(tmp) / "4x.png"
        result = subprocess.run(
            [
                str(REALESRGAN_BIN),
                "-i", str(master),
                "-o", str(tmp_4x),
                "-m", str(REALESRGAN_MODELS),
                "-n", MODEL_NAME,
                "-s", "4",
            ],
            capture_output=True,
            text=True,
        )
        if result.returncode != 0 or not tmp_4x.exists():
            err = (result.stderr or result.stdout or "").strip().splitlines()
            tail = "\n  ".join(err[-5:]) if err else "(no output)"
            print(f"  ✗ realesrgan failed (exit {result.returncode}):\n  {tail}")
            return False

        with Image.open(tmp_4x) as up4:
            target_w, target_h = sw * 2, sh * 2
            up2 = up4.resize((target_w, target_h), Image.LANCZOS)
            up2.save(master, format="PNG", optimize=True)

    new_size = os.path.getsize(master)
    print(f"  ✓ {master.name} → {sw*2}×{sh*2} ({new_size // 1024} KB)")
    return True


def main() -> int:
    args = [a for a in sys.argv[1:] if a]
    force = "--force" in args
    args = [a for a in args if a != "--force"]
    if len(args) != 1:
        print("usage: upscale-images.py <path> [--force]", file=sys.stderr)
        return 2

    target = Path(args[0]).resolve()
    if not target.exists():
        print(f"Path does not exist: {target}", file=sys.stderr)
        return 1

    if not REALESRGAN_BIN.exists():
        print(
            f"Real-ESRGAN binary not found at {REALESRGAN_BIN}.\n"
            "Install: download from https://github.com/xinntao/Real-ESRGAN/releases\n"
            "         (latest macOS bundle: realesrgan-ncnn-vulkan-20220424-macos.zip)\n"
            "         unzip into ~/.local/realesrgan/",
            file=sys.stderr,
        )
        return 2

    masters = list(list_masters(target))
    if not masters:
        print(f"No master PNGs found under {target}", file=sys.stderr)
        return 1

    failures = 0
    upscaled = 0
    for master in masters:
        try:
            if upscale_one(master, force):
                upscaled += 1
        except Exception as e:
            print(f"  ✗ {master.name}: {e}")
            failures += 1

    print(f"\n{upscaled}/{len(masters)} upscaled, {failures} failed")
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
