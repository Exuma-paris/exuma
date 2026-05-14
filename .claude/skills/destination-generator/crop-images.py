#!/usr/bin/env python3
"""Derive aspect-ratio crops (3:4, 1:1, 9:16) from 16:9 master images.

Usage:
    pip install -r .claude/skills/destination-generator/requirements.txt
    GEMINI_API_KEY=… python3 .claude/skills/destination-generator/crop-images.py <path> [--force]

`<path>` is either a directory of PNGs or a single PNG file. It works for any
entity family — destinations, experiences, accommodations — because it operates
on a filesystem path, not on an entity slug. Pass whichever folder holds your
masters:

    public/destination/<slug>      # masters from gen-images.py --root destination
    public/experience/<slug>       # masters from gen-images.py --root experience
    public/accommodation/<slug>    # masters from gen-images.py --root accommodation

For each master image (any *.png that is NOT already a derivative named
*-3x4.png / *-1x1.png / *-9x16.png), the script:

  1. Asks Gemini 2.5 Flash to identify the dominant visual subject and return a
     bounding box as JSON percentages of the image dimensions: {x, y, w, h}.
  2. Centers a crop window on the bbox center for each target ratio.
  3. Sizes the crop window to the largest possible rectangle of that ratio that
     fits inside the source image.
  4. Clamps the window to the source bounds (clipping the bbox if necessary —
     this is the documented "clip the subject" policy).
  5. Saves the derivative next to the master with a -<ratio> suffix.

Naming convention:
  - Master:    <name>.png            (16:9, written by gen-images.py)
  - Derivative: <name>-3x4.png       (portrait card)
  - Derivative: <name>-1x1.png       (square card)
  - Derivative: <name>-9x16.png      (story / mobile portrait)

Skips derivatives that already exist unless --force is passed.
"""
import base64
import io
import json
import os
import sys
import urllib.error
import urllib.request
from pathlib import Path
from typing import Iterable

from PIL import Image

VISION_MODEL = "gemini-2.5-flash"

# (suffix, target_ratio_w_over_h)
TARGETS = [
    ("3x4", 3 / 4),
    ("1x1", 1.0),
    ("9x16", 9 / 16),
]

DERIV_SUFFIXES = {f"-{suffix}" for suffix, _ in TARGETS}

VISION_PROMPT = (
    "Identify the dominant visual subject of this photograph — the place, "
    "person, object, gesture, or architectural element a viewer's eye is most "
    "drawn to. Return a tight bounding box as percentages of image dimensions, "
    "where (x, y) is the top-left corner and (w, h) are the box dimensions. "
    "Use values 0–100. The bounding box must be inside the image."
)

VISION_SCHEMA = {
    "type": "object",
    "properties": {
        "x": {"type": "number"},
        "y": {"type": "number"},
        "w": {"type": "number"},
        "h": {"type": "number"},
    },
    "required": ["x", "y", "w", "h"],
}


def detect_subject_bbox(api_key: str, image_path: Path) -> dict:
    """Call Gemini Vision and return the subject bbox as {x, y, w, h} percentages."""
    image_b64 = base64.b64encode(image_path.read_bytes()).decode("ascii")
    payload = {
        "contents": [{
            "parts": [
                {"inlineData": {"mimeType": "image/png", "data": image_b64}},
                {"text": VISION_PROMPT},
            ]
        }],
        "generationConfig": {
            "responseMimeType": "application/json",
            "responseSchema": VISION_SCHEMA,
        },
    }
    endpoint = (
        "https://generativelanguage.googleapis.com/v1beta/models/"
        f"{VISION_MODEL}:generateContent?key={api_key}"
    )
    req = urllib.request.Request(
        endpoint,
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=120) as resp:
        body = json.loads(resp.read())
    text = body["candidates"][0]["content"]["parts"][0]["text"]
    bbox = json.loads(text)
    for k in ("x", "y", "w", "h"):
        if k not in bbox:
            raise RuntimeError(f"Bbox response missing '{k}': {bbox}")
    return bbox


def crop_for_ratio(
    img: Image.Image,
    bbox_pct: dict,
    target_ratio: float,
) -> Image.Image:
    """Return a cropped image with the given target_ratio, anchored on the bbox center.

    The crop window is the largest rectangle of `target_ratio` that fits inside
    the image. It's centered on the bbox center and clamped to image bounds.
    If the bbox is taller/wider than the window, the subject is clipped — this
    is the documented behaviour.
    """
    W, H = img.size
    cx_pct = bbox_pct["x"] + bbox_pct["w"] / 2
    cy_pct = bbox_pct["y"] + bbox_pct["h"] / 2
    cx = cx_pct * W / 100
    cy = cy_pct * H / 100

    image_ratio = W / H
    if image_ratio > target_ratio:
        crop_h = H
        crop_w = round(H * target_ratio)
    else:
        crop_w = W
        crop_h = round(W / target_ratio)

    left = round(cx - crop_w / 2)
    top = round(cy - crop_h / 2)
    left = max(0, min(left, W - crop_w))
    top = max(0, min(top, H - crop_h))
    return img.crop((left, top, left + crop_w, top + crop_h))


def list_masters(target: Path) -> Iterable[Path]:
    """Yield master PNGs (anything not already a derivative) under `target`."""
    if target.is_file():
        if not is_master(target):
            return
        yield target
        return
    for p in sorted(target.rglob("*.png")):
        if is_master(p):
            yield p


def is_master(p: Path) -> bool:
    if not p.suffix.lower() == ".png":
        return False
    for suffix in DERIV_SUFFIXES:
        if p.stem.endswith(suffix):
            return False
    return True


def main() -> int:
    args = [a for a in sys.argv[1:] if a]
    force = "--force" in args
    args = [a for a in args if a != "--force"]
    if len(args) != 1:
        print("usage: crop-images.py <path> [--force]", file=sys.stderr)
        return 2

    target = Path(args[0]).resolve()
    if not target.exists():
        print(f"Path does not exist: {target}", file=sys.stderr)
        return 1

    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("GEMINI_API_KEY not set", file=sys.stderr)
        return 2

    masters = list(list_masters(target))
    if not masters:
        print(f"No master PNGs found under {target}", file=sys.stderr)
        return 1

    failures = 0
    for master in masters:
        # Decide which derivatives still need writing.
        pending = []
        for suffix, ratio in TARGETS:
            out = master.with_name(f"{master.stem}-{suffix}.png")
            if out.exists() and not force:
                print(f"· {out.name} (exists, skip)")
                continue
            pending.append((out, ratio))
        if not pending:
            continue

        print(f"→ {master.relative_to(target.parent if target.is_file() else target)} …", flush=True)
        try:
            bbox = detect_subject_bbox(api_key, master)
        except urllib.error.HTTPError as e:
            body = e.read().decode("utf-8", errors="replace")[:600]
            print(f"  HTTPError {e.code} during vision call: {body}")
            failures += 1
            continue
        except (urllib.error.URLError, RuntimeError, ValueError, KeyError, json.JSONDecodeError) as e:
            print(f"  Error during vision call: {e}")
            failures += 1
            continue

        print(
            f"  subject bbox: x={bbox['x']:.1f}% y={bbox['y']:.1f}% "
            f"w={bbox['w']:.1f}% h={bbox['h']:.1f}%"
        )

        try:
            with Image.open(master) as img:
                if img.mode not in ("RGB", "RGBA"):
                    img = img.convert("RGB")
                for out_path, ratio in pending:
                    cropped = crop_for_ratio(img, bbox, ratio)
                    buf = io.BytesIO()
                    cropped.save(buf, format="PNG")
                    out_path.write_bytes(buf.getvalue())
                    print(f"  saved {out_path.name} ({cropped.size[0]}×{cropped.size[1]})")
        except (OSError, ValueError) as e:
            print(f"  Error during crop: {e}")
            failures += 1
            continue

    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
