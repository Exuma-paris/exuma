#!/usr/bin/env python3
"""Generate destination images by restyling references with the Exuma look.

Usage:
    GEMINI_API_KEY=… python3 .claude/skills/destination-generator/gen-images.py <slug> [--force]

For each reference at references/destination/<slug>/<name>-ref.<ext>, sends the
reference + the shared "preserve + grade" prompt to Gemini 2.5 Flash Image, and
saves the result to public/destination/<slug>/<name>.png.

Skips outputs that already exist unless --force is passed.
"""
import base64
import json
import os
import sys
import urllib.error
import urllib.request
from pathlib import Path

REPO = Path(__file__).resolve().parents[3]
MODEL = "gemini-2.5-flash-image"

PROMPT = """Apply the visual style described below to this reference photograph as a color grade and post-processing treatment ONLY.

PRESERVE the reference exactly: composition, framing, perspective, subjects, objects, scale, time of day, weather, sky, and every element in the frame. Do not add or remove people. Do not reframe. Do not invent. The output must be a restyled version of the reference, not a new scene.

Apply this Exuma photographic style:
- Quiet luxury, non-ostentatious elegance, timeless atmosphere; mood of nostalgia, silence and calm
- Low contrast, warm whites (never pure white), soft shadows
- Subtle film grain, 35mm analog texture, soft depth of field
- Color palette pulled toward sand, beige, ochre tones, olive green, very desaturated blue, warm skin tones
- Editorial photography finishing, refined framing

Output: the same photograph with this look applied."""

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
