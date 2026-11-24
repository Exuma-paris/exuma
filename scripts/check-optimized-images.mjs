import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

// Run against `next start` or an accessible Vercel preview:
// node scripts/check-optimized-images.mjs http://localhost:3000
const base = process.argv[2];
if (!base) throw new Error("Pass the URL of the running site.");
const paths = JSON.parse(
  await readFile(new URL("../optimized-image-paths.json", import.meta.url), "utf8"),
);

for (const [oldPath, newPath] of Object.entries(paths)) {
  for (const path of [oldPath, newPath]) {
    const response = await fetch(new URL(path, base), {
      method: "HEAD",
      redirect: "manual",
      signal: AbortSignal.timeout(30_000),
    });
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get("content-type") ?? "", /^image\/webp/, path);
  }
}

// Cached HTML can still request the old PNG through Next's image optimizer.
// A redirect passes a direct browser test but fails this internal request.
const [oldPath, newPath] = Object.entries(paths)[0];
for (const path of [oldPath, newPath]) {
  const url = new URL("/_next/image", base);
  url.search = new URLSearchParams({ url: path, w: "1080", q: "75" }).toString();
  const response = await fetch(url, { signal: AbortSignal.timeout(30_000) });
  assert.equal(response.status, 200, `Image optimizer: ${path}`);
  assert.match(response.headers.get("content-type") ?? "", /^image\//);
  assert.ok((await response.arrayBuffer()).byteLength > 0);
}

console.log(`${Object.keys(paths).length * 2} image URLs and both optimizer URLs passed.`);
