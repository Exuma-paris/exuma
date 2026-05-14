#!/usr/bin/env python3
"""Generate Exuma images by restyling references with the brand look.

Usage:
    pip install -r .claude/skills/destination-generator/requirements.txt
    GEMINI_API_KEY=… python3 .claude/skills/destination-generator/gen-images.py <slug> [--force]
    GEMINI_API_KEY=… python3 .claude/skills/destination-generator/gen-images.py --root experience <slug>
    GEMINI_API_KEY=… python3 .claude/skills/destination-generator/gen-images.py --root accommodation <slug>

`--root` selects the entity family the slug belongs to. Default is `destination`.
Supported values: `destination`, `experience`, `accommodation`. The flag drives
both the input and output paths:

    --root destination   →  references/destination/<slug>/  →  public/destination/<slug>/
    --root experience    →  references/experience/<slug>/   →  public/experience/<slug>/
    --root accommodation →  references/accommodation/<slug>/→  public/accommodation/<slug>/

For each reference at <ref-dir>/<name>-ref.<ext>, sends the reference + the
shared "preserve + grade" prompt to Gemini 3 Pro Image (Nano Banana Pro), and
saves the result (re-cropped to a strict 16:9 master) to <out-dir>/<name>.png.

The 16:9 master is the source-of-truth aspect for the project. Output is
requested at 2K (~2048px on the long edge) — high enough for hero / full-bleed
web use without the post-hoc Real-ESRGAN upscale step. The companion script
`crop-images.py` derives 3:4 / 1:1 / 9:16 variants from the master, anchored
on the dominant subject as detected by Gemini Vision. `crop-images.py` takes a
path, not a slug — it works on any directory regardless of `--root`.

Skips outputs that already exist unless --force is passed.

Model history:
  - gemini-2.5-flash-image (Nano Banana, default until May 2026): output capped
    at ~1024-1408px on the long edge — too soft for hero use. Required a
    Real-ESRGAN post-pass via upscale-images.py.
  - gemini-3-pro-image-preview (Nano Banana Pro, current): native 2K/4K output
    + explicit composition preservation. ~3.4× more expensive ($0.134 vs
    $0.039 per 2K image) but no upscale step needed and substantially sharper.
"""
import base64
import io
import json
import os
import sys
import urllib.error
import urllib.request
from pathlib import Path

from PIL import Image

REPO = Path(__file__).resolve().parents[3]
MODEL = "gemini-3-pro-image-preview"
TARGET_RATIO = 16 / 9
IMAGE_SIZE = "2K"  # "1K" | "2K" | "4K" — Pro respects this; Flash variants ignore it
ASPECT_RATIO = "16:9"
ALLOWED_ROOTS = ("destination", "experience", "accommodation")

PROMPT = """Apply the visual style described below to this reference photograph as a color grade and post-processing treatment ONLY.

PRESERVE the reference exactly: composition, framing, perspective, subjects, objects, scale, time of day, weather, sky, and every element in the frame. Do not add or remove people. Do not reframe. Do not invent. The output must be a restyled version of the reference, not a new scene.

Apply this Exuma photographic style:
- Quiet luxury, non-ostentatious elegance, timeless atmosphere; mood of nostalgia, silence and calm
- Low contrast, warm whites (never pure white), soft shadows
- Subtle film grain, 35mm analog texture, soft depth of field
- Color palette pulled toward sand, beige, ochre tones, olive green, very desaturated blue, warm skin tones
- Editorial photography finishing, refined framing

Output: the same photograph with this look applied, framed as 16:9."""

MIME_BY_EXT = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".webp": "image/webp",
}


def generate(api_key: str, ref_path: Path) -> bytes:
    mime = MIME_BY_EXT.get(ref_path.suffix.lower())
    if not mime:
        raise ValueError(f"Unsupported reference extension: {ref_path.suffix}")
    ref_b64 = base64.b64encode(ref_path.read_bytes()).decode("ascii")
    payload = {
        "contents": [{
            "parts": [
                {"inlineData": {"mimeType": mime, "data": ref_b64}},
                {"text": PROMPT},
            ]
        }],
        "generationConfig": {
            "responseModalities": ["IMAGE"],
            "imageConfig": {
                "imageSize": IMAGE_SIZE,
                "aspectRatio": ASPECT_RATIO,
            },
        },
    }
    endpoint = (
        "https://generativelanguage.googleapis.com/v1beta/models/"
        f"{MODEL}:generateContent?key={api_key}"
    )
    req = urllib.request.Request(
        endpoint,
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=180) as resp:
        body = json.loads(resp.read())
    for part in body["candidates"][0]["content"]["parts"]:
        if "inlineData" in part:
            return base64.b64decode(part["inlineData"]["data"])
    raise RuntimeError(f"No image in response: {json.dumps(body)[:500]}")


def enforce_16x9(image_bytes: bytes) -> bytes:
    """Center-crop the image to a strict 16:9 aspect ratio.

    Gemini may return a slightly different ratio when given image-to-image
    input. This guarantees the master output is exactly 16:9.
    """
    img = Image.open(io.BytesIO(image_bytes))
    if img.mode not in ("RGB", "RGBA"):
        img = img.convert("RGB")
    w, h = img.size
    current = w / h
    if abs(current - TARGET_RATIO) < 0.005:
        out = io.BytesIO()
        img.save(out, format="PNG")
        return out.getvalue()
    if current > TARGET_RATIO:
        new_w = round(h * TARGET_RATIO)
        left = (w - new_w) // 2
        img = img.crop((left, 0, left + new_w, h))
    else:
        new_h = round(w / TARGET_RATIO)
        top = (h - new_h) // 2
        img = img.crop((0, top, w, top + new_h))
    out = io.BytesIO()
    img.save(out, format="PNG")
    return out.getvalue()


USAGE = (
    "usage: gen-images.py [--root destination|experience|accommodation] <slug> [--force]"
)


def parse_args(argv: list[str]) -> tuple[str, str, bool]:
    """Return (root, slug, force). Raises ValueError on bad input."""
    args = [a for a in argv if a]
    force = "--force" in args
    args = [a for a in args if a != "--force"]

    root = "destination"
    if "--root" in args:
        i = args.index("--root")
        if i + 1 >= len(args):
            raise ValueError("--root requires a value")
        root = args[i + 1]
        del args[i : i + 2]

    if root not in ALLOWED_ROOTS:
        raise ValueError(
            f"--root must be one of {ALLOWED_ROOTS}, got {root!r}"
        )
    if len(args) != 1:
        raise ValueError("expected exactly one positional <slug>")
    return root, args[0], force


def main() -> int:
    try:
        root, slug, force = parse_args(sys.argv[1:])
    except ValueError as e:
        print(f"error: {e}", file=sys.stderr)
        print(USAGE, file=sys.stderr)
        return 2

    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("GEMINI_API_KEY not set", file=sys.stderr)
        return 2

    ref_dir = REPO / "references" / root / slug
    out_dir = REPO / "public" / root / slug
    if not ref_dir.is_dir():
        print(f"No reference dir: {ref_dir}", file=sys.stderr)
        return 1
    out_dir.mkdir(parents=True, exist_ok=True)

    refs = sorted(p for p in ref_dir.iterdir() if p.suffix.lower() in MIME_BY_EXT)
    if not refs:
        print(f"No reference images in {ref_dir}", file=sys.stderr)
        return 1

    failures = 0
    for ref in refs:
        if not ref.stem.endswith("-ref"):
            continue
        out_name = ref.stem[: -len("-ref")] + ".png"
        out_path = out_dir / out_name
        if out_path.exists() and not force:
            print(f"· {out_name} (exists, skip — pass --force to overwrite)")
            continue
        print(f"→ {out_name} (ref: {ref.name}) …", flush=True)
        try:
            data = generate(api_key, ref)
            data = enforce_16x9(data)
        except urllib.error.HTTPError as e:
            body = e.read().decode("utf-8", errors="replace")[:600]
            print(f"  HTTPError {e.code}: {body}")
            failures += 1
            continue
        except (urllib.error.URLError, RuntimeError, ValueError) as e:
            print(f"  Error: {e}")
            failures += 1
            continue
        out_path.write_bytes(data)
        print(f"  saved {len(data) // 1024} KB → {out_path}")

    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
