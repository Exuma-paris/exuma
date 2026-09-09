#!/usr/bin/env node
/**
 * Node port of gen-images.py — same CLI, same model, same prompts, same output.
 *
 * Exists because Windows machines in this project ship with Node (it comes with
 * the Next.js install) but not with Python. Behaviour is intentionally identical
 * to the Python script so either can be used interchangeably:
 *
 *   node .claude/skills/destination-generator/gen-images.mjs <slug>
 *   node .claude/skills/destination-generator/gen-images.mjs --only hero-1 <slug>
 *   node .claude/skills/destination-generator/gen-images.mjs --only hero-1 <slug> \
 *     --instruction "retire les véhicules à l'arrière-plan"
 *
 * Flags: [--root destination|experience|accommodation] [--only <name>]
 *        [--instruction <text>] <slug> [--force]
 *
 * ⚠️  The model id, IMAGE_SIZE, and the two prompt templates below are DUPLICATED
 * from gen-images.py. They are the pipeline's visual contract: if you change one
 * file you MUST mirror the change in the other, or the same reference will grade
 * differently depending on which script ran it.
 *
 * Reads  references/<root>/<slug>/<name>-ref.{jpg,jpeg,png,webp}
 * Writes public/<root>/<slug>/<name>.png  (strict 16:9 master)
 *
 * GEMINI_API_KEY is read from the environment, falling back to the repo .env.
 */
import { readFile, writeFile, mkdir, readdir, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, "../../..");

const MODEL = "gemini-3-pro-image-preview";
const TARGET_RATIO = 16 / 9;
const IMAGE_SIZE = "4K"; // "1K" | "2K" | "4K" — keep in sync with gen-images.py
const ASPECT_RATIO = "16:9";
// Store the full 4K render, as WebP. PNG is the wrong container for photographs:
// a 4K PNG master costs ~17-30 MB, so keeping full resolution used to mean either
// bloating the repo or downscaling to 2560px. WebP at quality 96 stores the same
// 4K frame in ~1.6 MB — more pixels than a 2560px PNG and roughly 5x lighter.
// STORE_WIDTH only caps runaway renders; it never upscales.
const STORE_WIDTH = 4096;
const STORE_FORMAT = "webp"; // "webp" | "png" — drives the output file extension
const WEBP_QUALITY = 96;
const ALLOWED_ROOTS = ["destination", "experience", "accommodation"];
const REQUEST_TIMEOUT_MS = 600_000; // 4K renders regularly exceed 5 minutes

const EXUMA_STYLE = `Apply this Exuma photographic style:
- Quiet luxury, non-ostentatious elegance, timeless atmosphere; mood of nostalgia, silence and calm
- Gentle, low contrast, but with rich depth: keep shadows dense and midtones full. Do NOT wash out, fade, bleach or lift the image. No milky, hazy or pastel look. Overall exposure sits on the deeper, denser side rather than bright and airy
- Warm whites (never pure white), soft but clearly readable shadows, blacks that stay black
- Subtle film grain, 35mm analog texture, soft depth of field
- Color palette pulled toward sand, beige, ochre tones, olive green, deep desaturated blue, warm skin tones. Hues stay muted, but the colours remain saturated and dense, never pale
- Editorial photography finishing, refined framing`;

const GRADE_ONLY_PROMPT = `Apply the visual style described below to this reference photograph as a color grade and post-processing treatment ONLY.

PRESERVE the reference exactly: composition, framing, perspective, subjects, objects, scale, time of day, weather, sky, and every element in the frame. Do not add or remove people. Do not reframe. Do not invent. The output must be a restyled version of the reference, not a new scene.

${EXUMA_STYLE}

Output: the same photograph with this look applied, framed as 16:9.`;

const editPrompt = (instruction) => `Edit this reference photograph, then apply the Exuma color grade described below.

First, apply these specific changes requested by the editor:
${instruction}

Then PRESERVE everything the changes do not touch: the overall composition, framing, perspective, location, the existing subjects and objects, scale, time of day, weather, and sky. Make the requested edit look natural and photographic — same lens, same light, same mood. Do not reframe or reinvent beyond what the correction asks for.

${EXUMA_STYLE}

Output: the edited photograph with this look applied, framed as 16:9.`;

/**
 * "Inspired by" mode (--inspire). The reference is treated as a mood and content
 * brief, NOT as a frame to restyle: the model composes a new photograph of a
 * comparable scene. Use this when the reference is a third-party photograph we
 * have no licence for — a graded copy keeps the original's composition and is a
 * derivative work, whereas this produces an original frame.
 */
const inspirePrompt = (caption) => `The attached photograph is a MOOD AND CONTENT BRIEF, not a source to reproduce.

Create a NEW, original photograph of a comparable scene. Read the reference for these qualities and carry them over: the subject and species, the type of action, the terrain and vegetation, the season, the time of day and the direction of the light, the weather, the lens character and shooting distance, the overall atmosphere.

Then compose it differently. Change the arrangement of the subjects, the camera position and angle, and the exact framing. The result must read as a different photograph, taken by a different photographer on a comparable day. Do NOT replicate the reference's composition, its subject placement, or any uniquely identifying detail of the original frame.

This is the test that matters: placed side by side with the reference, a viewer must see two clearly different photographs of a comparable subject, not the same photograph reworked. If any single object, ornament, piece of furniture or architectural feature would let someone identify the reference, replace it with a different one of the same kind. Distances, scale and light may match; specific identifying details must not.
${caption ? `\nSubject of the new photograph: ${caption}\n` : ""}
${EXUMA_STYLE}

Output: a single original photograph, framed as 16:9.`;

const buildPrompt = ({ instruction, inspire, caption }) => {
  if (inspire) return inspirePrompt(caption);
  if (instruction && instruction.trim()) return editPrompt(instruction.trim());
  return GRADE_ONLY_PROMPT;
};

const MIME_BY_EXT = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

const USAGE =
  "usage: gen-images.mjs [--root destination|experience|accommodation] " +
  "[--only <name>] [--instruction <text>] [--inspire] [--caption <text>] " +
  "<slug> [--force]";

function takeValue(args, flag) {
  const i = args.indexOf(flag);
  if (i === -1) return null;
  if (i + 1 >= args.length) throw new Error(`${flag} requires a value`);
  const [value] = args.splice(i, 2).slice(1);
  return value;
}

function parseArgs(argv) {
  let args = argv.filter(Boolean);
  const force = args.includes("--force");
  const inspire = args.includes("--inspire");
  args = args.filter((a) => a !== "--force" && a !== "--inspire");

  const root = takeValue(args, "--root") ?? "destination";
  const only = takeValue(args, "--only");
  const instruction = takeValue(args, "--instruction");
  const caption = takeValue(args, "--caption");

  if (!ALLOWED_ROOTS.includes(root))
    throw new Error(`--root must be one of ${ALLOWED_ROOTS.join(", ")}, got '${root}'`);
  if (instruction && !only)
    throw new Error("--instruction requires --only (corrections are per-image)");
  if (instruction && inspire)
    throw new Error("--instruction and --inspire are mutually exclusive modes");
  if (caption && !inspire) throw new Error("--caption only applies with --inspire");
  if (args.length !== 1) throw new Error("expected exactly one positional <slug>");

  return { root, slug: args[0], force, only, instruction, inspire, caption };
}

/** GEMINI_API_KEY from the environment, falling back to the repo .env file. */
async function resolveApiKey() {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY;
  try {
    const env = await readFile(path.join(REPO, ".env"), "utf8");
    const line = env
      .split(/\r?\n/)
      .find((l) => l.trimStart().startsWith("GEMINI_API_KEY="));
    if (!line) return null;
    return line.slice(line.indexOf("=") + 1).trim().replace(/^["']|["']$/g, "");
  } catch {
    return null;
  }
}

async function generate(apiKey, refPath, mode) {
  const mime = MIME_BY_EXT[path.extname(refPath).toLowerCase()];
  if (!mime) throw new Error(`Unsupported reference extension: ${path.extname(refPath)}`);

  const payload = {
    contents: [
      {
        parts: [
          { inlineData: { mimeType: mime, data: (await readFile(refPath)).toString("base64") } },
          { text: buildPrompt(mode) },
        ],
      },
    ],
    generationConfig: {
      responseModalities: ["IMAGE"],
      imageConfig: { imageSize: IMAGE_SIZE, aspectRatio: ASPECT_RATIO },
    },
  };

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    },
  );

  if (!res.ok) {
    const detail = (await res.text()).slice(0, 600);
    const err = new Error(`HTTP ${res.status}: ${detail}`);
    // 429 (rate limit) and 5xx (model overloaded) are transient — the caller retries.
    err.retryable = res.status === 429 || res.status >= 500;
    throw err;
  }

  const body = await res.json();
  const parts = body?.candidates?.[0]?.content?.parts ?? [];
  for (const part of parts) {
    if (part.inlineData?.data) return Buffer.from(part.inlineData.data, "base64");
  }
  throw new Error(`No image in response: ${JSON.stringify(body).slice(0, 500)}`);
}

/**
 * Center-crop to a strict 16:9 master, then downscale to STORE_WIDTH. Gemini may
 * return a slightly different ratio for image-to-image input; this guarantees the
 * stored aspect and a predictable stored weight.
 */
async function enforce16x9(buffer) {
  let img = sharp(buffer);
  const { width: w, height: h } = await img.metadata();
  const current = w / h;

  if (Math.abs(current - TARGET_RATIO) >= 0.005) {
    const box =
      current > TARGET_RATIO
        ? (() => {
            const newW = Math.round(h * TARGET_RATIO);
            return { left: Math.floor((w - newW) / 2), top: 0, width: newW, height: h };
          })()
        : (() => {
            const newH = Math.round(w / TARGET_RATIO);
            return { left: 0, top: Math.floor((h - newH) / 2), width: w, height: newH };
          })();
    img = img.extract(box);
  }

  // Never upscale: a smaller render is stored as-is rather than stretched.
  img = img.resize({ width: STORE_WIDTH, withoutEnlargement: true });
  return STORE_FORMAT === "webp"
    ? img.webp({ quality: WEBP_QUALITY }).toBuffer()
    : img.png({ compressionLevel: 9 }).toBuffer();
}

const exists = async (p) => access(p).then(() => true).catch(() => false);

async function main() {
  let opts;
  try {
    opts = parseArgs(process.argv.slice(2));
  } catch (e) {
    console.error(`error: ${e.message}\n${USAGE}`);
    return 2;
  }
  const { root, slug, only, instruction, inspire, caption } = opts;
  // A correction always replaces the previous output for that image.
  const force = opts.force || Boolean(instruction);
  const mode = { instruction, inspire, caption };

  const apiKey = await resolveApiKey();
  if (!apiKey) {
    console.error("GEMINI_API_KEY not set (checked the environment and the repo .env)");
    return 2;
  }

  const refDir = path.join(REPO, "references", root, slug);
  const outDir = path.join(REPO, "public", root, slug);
  if (!(await exists(refDir))) {
    console.error(`No reference dir: ${refDir}`);
    return 1;
  }
  await mkdir(outDir, { recursive: true });

  const refs = (await readdir(refDir))
    .filter((f) => MIME_BY_EXT[path.extname(f).toLowerCase()])
    .sort();
  if (refs.length === 0) {
    console.error(`No reference images in ${refDir}`);
    return 1;
  }

  let failures = 0;
  let matched = false;

  for (const ref of refs) {
    const stem = path.basename(ref, path.extname(ref));
    if (!stem.endsWith("-ref")) continue;
    const name = stem.slice(0, -"-ref".length);
    if (only && name !== only) continue;
    matched = true;

    const outName = `${name}.${STORE_FORMAT}`;
    const outPath = path.join(outDir, outName);
    if ((await exists(outPath)) && !force) {
      console.log(`· ${outName} (exists, skip — pass --force to overwrite)`);
      continue;
    }

    console.log(`→ ${outName} (ref: ${ref}) …`);
    // Nano Banana Pro returns 503 under load often enough that a single attempt
    // makes long batches unreliable. Back off and retry the transient codes only.
    const ATTEMPTS = 4;
    for (let attempt = 1; ; attempt++) {
      try {
        const data = await enforce16x9(
          await generate(apiKey, path.join(refDir, ref), mode),
        );
        await writeFile(outPath, data);
        console.log(`  saved ${Math.floor(data.length / 1024)} KB → ${outPath}`);
        break;
      } catch (e) {
        if (e.retryable && attempt < ATTEMPTS) {
          const wait = 15 * 2 ** (attempt - 1);
          console.log(`  ${e.message.slice(0, 80)} — nouvelle tentative dans ${wait}s`);
          await new Promise((r) => setTimeout(r, wait * 1000));
          continue;
        }
        console.log(`  Error: ${e.message}`);
        failures += 1;
        break;
      }
    }
  }

  if (only && !matched) {
    console.error(`No reference ${only}-ref.<ext> in ${refDir}`);
    return 1;
  }
  return failures ? 1 : 0;
}

// Set the code rather than calling process.exit(): sharp's libuv worker handles
// are still closing at this point, and forcing exit trips an assertion on Windows
// ("!(handle->flags & UV_HANDLE_CLOSING)"). Letting the loop drain avoids it.
process.exitCode = await main();
