#!/usr/bin/env python3
"""Generate Exuma images by restyling references with the brand look.

Usage:
    pip install -r .claude/skills/destination-generator/requirements.txt
    GEMINI_API_KEY=… python3 .claude/skills/destination-generator/gen-images.py <slug> [--force]
    GEMINI_API_KEY=… python3 .claude/skills/destination-generator/gen-images.py --root experience <slug>
    GEMINI_API_KEY=… python3 .claude/skills/destination-generator/gen-images.py --root accommodation <slug>
    GEMINI_API_KEY=… python3 .claude/skills/destination-generator/gen-images.py --only hero-1 <slug>
    GEMINI_API_KEY=… python3 .claude/skills/destination-generator/gen-images.py --only hero-1 \
        --instruction "add a person in the foreground holding a camera" <slug>

`--only <name>` restricts the run to one output (e.g. `hero-1`), for the
one-image-at-a-time chain flow. `--instruction "<text>"` applies a per-image
composition correction beyond the color grade (requires `--only`, and always
overwrites that output). With no instruction the run is a pure preserve+grade.

`--root` selects the entity family the slug belongs to. Default is `destination`.
Supported values: `destination`, `experience`, `accommodation`, `service`. The flag drives
both the input and output paths:

    --root destination   →  references/destination/<slug>/  →  public/destination/<slug>/
    --root experience    →  references/experience/<slug>/   →  public/experience/<slug>/
    --root accommodation →  references/accommodation/<slug>/→  public/accommodation/<slug>/
    --root service       →  references/service/<slug>/      →  public/service/<slug>/

For each reference at <ref-dir>/<name>-ref.<ext>, sends the reference + the
shared "preserve + grade" prompt to Gemini 3 Pro Image (Nano Banana Pro), and
saves the result (re-cropped to a strict 16:9 master) to <out-dir>/<name>.png.

The 16:9 master is the source-of-truth aspect for the project. Output is
requested at 4K (~4096px on the long edge). The stored master is deliberately
larger than any rendered size: `next/image` derives and caches per-breakpoint
WebP/AVIF variants at request time, so master resolution buys sharpness on
large displays without adding page weight. The companion script
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
from __future__ import annotations

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
IMAGE_SIZE = "4K"  # "1K" | "2K" | "4K" — Pro respects this; Flash variants ignore it
ASPECT_RATIO = "16:9"
# Render at 4K, store narrower. The model resolves more real detail at 4K, but a
# 4K PNG master costs ~30 MB — 25 of those per destination would bloat the repo.
# Downscaling the 4K render to 2560px keeps the stored master at the ~7 MB of the
# existing pages while staying visibly sharper than a native-2K render.
STORE_WIDTH = 2560
ALLOWED_ROOTS = ("destination", "experience", "accommodation", "service")

EXUMA_STYLE = """Apply this Exuma photographic style:
- Quiet luxury, non-ostentatious elegance, timeless atmosphere; mood of nostalgia, silence and calm
- Low contrast, warm whites (never pure white), soft shadows
- Subtle film grain, 35mm analog texture, soft depth of field
- Color palette pulled toward sand, beige, ochre tones, olive green, very desaturated blue, warm skin tones
- Editorial photography finishing, refined framing"""

GRADE_ONLY_PROMPT = f"""Apply the visual style described below to this reference photograph as a color grade and post-processing treatment ONLY.

PRESERVE the reference exactly: composition, framing, perspective, subjects, objects, scale, time of day, weather, sky, and every element in the frame. Do not add or remove people. Do not reframe. Do not invent. The output must be a restyled version of the reference, not a new scene.

{EXUMA_STYLE}

Output: the same photograph with this look applied, framed as 16:9."""

# Used when the caller supplies a per-image correction (e.g. "add a person in
# the foreground holding a camera"). The strict "do not add/remove people / do
# not invent" rule is intentionally lifted so the requested change can happen,
# but everything NOT mentioned in the correction must still be preserved — the
# output stays an edited version of the reference, not a brand-new scene.
EDIT_PROMPT_TEMPLATE = """Edit this reference photograph, then apply the Exuma color grade described below.

First, apply these specific changes requested by the editor:
{instruction}

Then PRESERVE everything the changes do not touch: the overall composition, framing, perspective, location, the existing subjects and objects, scale, time of day, weather, and sky. Make the requested edit look natural and photographic — same lens, same light, same mood. Do not reframe or reinvent beyond what the correction asks for.

{style}

Output: the edited photograph with this look applied, framed as 16:9."""


# "Inspired by" mode (--inspire). The reference is treated as a mood and content
# brief, NOT as a frame to restyle: the model composes a new photograph of a
# comparable scene. Use this when the reference is a third-party photograph we
# have no licence for — a graded copy keeps the original's composition and is a
# derivative work, whereas this produces an original frame.
INSPIRE_PROMPT_TEMPLATE = """The attached photograph is a MOOD AND CONTENT BRIEF, not a source to reproduce.

Create a NEW, original photograph of a comparable scene. Read the reference for these qualities and carry them over: the subject and species, the type of action, the terrain and vegetation, the season, the time of day and the direction of the light, the weather, the lens character and shooting distance, the overall atmosphere.

Then compose it differently. Change the arrangement of the subjects, the camera position and angle, and the exact framing. The result must read as a different photograph, taken by a different photographer on a comparable day. Do NOT replicate the reference's composition, its subject placement, or any uniquely identifying detail of the original frame.

This is the test that matters: placed side by side with the reference, a viewer must see two clearly different photographs of a comparable subject, not the same photograph reworked. If any single object, ornament, piece of furniture or architectural feature would let someone identify the reference, replace it with a different one of the same kind. Distances, scale and light may match; specific identifying details must not.
{caption_block}
{style}

Output: a single original photograph, framed as 16:9."""


def build_prompt(
    instruction: str | None,
    inspire: bool = False,
    caption: str | None = None,
) -> str:
    if inspire:
        caption_block = (
            f"\nSubject of the new photograph: {caption.strip()}\n" if caption else ""
        )
        return INSPIRE_PROMPT_TEMPLATE.format(
            caption_block=caption_block, style=EXUMA_STYLE
        )
    if instruction and instruction.strip():
        return EDIT_PROMPT_TEMPLATE.format(
            instruction=instruction.strip(), style=EXUMA_STYLE
        )
    return GRADE_ONLY_PROMPT

MIME_BY_EXT = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".webp": "image/webp",
}


def generate(
    api_key: str,
    ref_path: Path,
    instruction: str | None = None,
    inspire: bool = False,
    caption: str | None = None,
) -> bytes:
    mime = MIME_BY_EXT.get(ref_path.suffix.lower())
    if not mime:
        raise ValueError(f"Unsupported reference extension: {ref_path.suffix}")
    ref_b64 = base64.b64encode(ref_path.read_bytes()).decode("ascii")
    payload = {
        "contents": [{
            "parts": [
                {"inlineData": {"mimeType": mime, "data": ref_b64}},
                {"text": build_prompt(instruction, inspire, caption)},
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
    """Center-crop to a strict 16:9 master, then downscale to STORE_WIDTH.

    Gemini may return a slightly different ratio when given image-to-image
    input. This guarantees the master output is exactly 16:9 and that its
    stored weight is predictable.
    """
    img = Image.open(io.BytesIO(image_bytes))
    if img.mode not in ("RGB", "RGBA"):
        img = img.convert("RGB")
    w, h = img.size
    current = w / h
    if abs(current - TARGET_RATIO) >= 0.005:
        if current > TARGET_RATIO:
            new_w = round(h * TARGET_RATIO)
            left = (w - new_w) // 2
            img = img.crop((left, 0, left + new_w, h))
        else:
            new_h = round(w / TARGET_RATIO)
            top = (h - new_h) // 2
            img = img.crop((0, top, w, top + new_h))
    # Never upscale: a smaller render is stored as-is rather than stretched.
    if img.width > STORE_WIDTH:
        img = img.resize(
            (STORE_WIDTH, round(STORE_WIDTH / TARGET_RATIO)), Image.LANCZOS
        )
    out = io.BytesIO()
    img.save(out, format="PNG", compress_level=9)
    return out.getvalue()


USAGE = (
    "usage: gen-images.py [--root destination|experience|accommodation] "
    "[--only <name>] [--instruction <text>] [--inspire] [--caption <text>] "
    "<slug> [--force]"
)


def _take_value(args: list[str], flag: str) -> str | None:
    """Pop `--flag value` from args in place, returning value or None."""
    if flag not in args:
        return None
    i = args.index(flag)
    if i + 1 >= len(args):
        raise ValueError(f"{flag} requires a value")
    value = args[i + 1]
    del args[i : i + 2]
    return value


def parse_args(
    argv: list[str],
) -> tuple[str, str, bool, str | None, str | None, bool, str | None]:
    """Return (root, slug, force, only, instruction, inspire, caption).

    Raises ValueError on bad input.

    `only` restricts the run to a single output by name (e.g. "hero-1") — used
    by the one-image-at-a-time chain flow. `instruction` carries a per-image
    composition correction beyond the color grade. `inspire` switches from
    "restyle this frame" to "compose a new frame of a comparable scene", with
    `caption` describing the subject the new frame must show.
    """
    args = [a for a in argv if a]
    force = "--force" in args
    inspire = "--inspire" in args
    args = [a for a in args if a not in ("--force", "--inspire")]

    root = _take_value(args, "--root") or "destination"
    only = _take_value(args, "--only")
    instruction = _take_value(args, "--instruction")
    caption = _take_value(args, "--caption")

    if root not in ALLOWED_ROOTS:
        raise ValueError(
            f"--root must be one of {ALLOWED_ROOTS}, got {root!r}"
        )
    if instruction and not only:
        raise ValueError("--instruction requires --only (corrections are per-image)")
    if instruction and inspire:
        raise ValueError("--instruction and --inspire are mutually exclusive modes")
    if caption and not inspire:
        raise ValueError("--caption only applies with --inspire")
    if len(args) != 1:
        raise ValueError("expected exactly one positional <slug>")
    return root, args[0], force, only, instruction, inspire, caption


def main() -> int:
    try:
        root, slug, force, only, instruction, inspire, caption = parse_args(sys.argv[1:])
    except ValueError as e:
        print(f"error: {e}", file=sys.stderr)
        print(USAGE, file=sys.stderr)
        return 2

    # A correction always replaces the previous output for that image.
    if instruction:
        force = True

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
    matched = False
    for ref in refs:
        if not ref.stem.endswith("-ref"):
            continue
        name = ref.stem[: -len("-ref")]
        if only and name != only:
            continue
        matched = True
        out_name = name + ".png"
        out_path = out_dir / out_name
        if out_path.exists() and not force:
            print(f"· {out_name} (exists, skip — pass --force to overwrite)")
            continue
        print(f"→ {out_name} (ref: {ref.name}) …", flush=True)
        try:
            data = generate(api_key, ref, instruction, inspire, caption)
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

    if only and not matched:
        print(
            f"No reference {only}-ref.<ext> in {ref_dir}", file=sys.stderr
        )
        return 1

    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
