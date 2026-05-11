#!/usr/bin/env python3
"""Generate destination images by restyling references with the Exuma look.

Usage:
    pip install -r .claude/skills/destination-generator/requirements.txt
    GEMINI_API_KEY=… python3 .claude/skills/destination-generator/gen-images.py <slug> [--force]

For each reference at references/destination/<slug>/<name>-ref.<ext>, sends the
reference + the shared "preserve + grade" prompt to Gemini 2.5 Flash Image, and
saves the result (re-cropped to a strict 16:9 master) to
public/destination/<slug>/<name>.png.

The 16:9 master is the source-of-truth aspect for the project. The companion
script `crop-images.py` derives 3:4 / 1:1 / 9:16 variants from the master,
anchored on the dominant subject as detected by Gemini Vision.

Skips outputs that already exist unless --force is passed.
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
MODEL = "gemini-2.5-flash-image"
TARGET_RATIO = 16 / 9

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
        "generationConfig": {"responseModalities": ["IMAGE"]},
        "imageConfig": {"aspectRatio": "16:9"},
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


def main() -> int:
    args = [a for a in sys.argv[1:] if a]
    force = "--force" in args
    args = [a for a in args if a != "--force"]
    if len(args) != 1:
        print("usage: gen-images.py <slug> [--force]", file=sys.stderr)
        return 2
    slug = args[0]

    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("GEMINI_API_KEY not set", file=sys.stderr)
        return 2

    ref_dir = REPO / "references" / "destination" / slug
    out_dir = REPO / "public" / "destination" / slug
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
