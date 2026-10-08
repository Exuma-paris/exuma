// Builds public/destination/egypte/bento-map.webp from real OpenStreetMap
// boundaries, in the palette sampled from public/destination/maurice/bento-map.png.
// No AI: the coastline is the actual OSM relation geometry, only simplified.
import { readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const W = 1602, H = 828;
const LAND = "#f5f2ec", PIN = "#a5794c", INK = "#ffffff";
const OUT = "public/destination/egypte/bento-map.webp";

// --- geometry -------------------------------------------------------------
const ringsOf = (geo) => {
  if (geo.type === "Polygon") return geo.coordinates;
  if (geo.type === "MultiPolygon") return geo.coordinates.flat();
  return [];
};
const GEO = "references/destination/egypte/geo";
const load = (f) => ringsOf(JSON.parse(readFileSync(`${GEO}/${f}`, "utf8"))[0].geojson);

const rings = [...load("country.json")].filter((r) => r.length > 6);

// Perpendicular-distance simplification: at 1602px wide, sub-pixel vertices are
// wasted bytes. Tolerance is in degrees (~0.004° ≈ 0.45 km).
const simplify = (pts, tol) => {
  const out = [pts[0]];
  let [px, py] = pts[0];
  for (let i = 1; i < pts.length - 1; i++) {
    const [x, y] = pts[i];
    if (Math.hypot(x - px, y - py) >= tol) { out.push(pts[i]); px = x; py = y; }
  }
  out.push(pts[pts.length - 1]);
  return out;
};

const simplified = rings.map((r) => simplify(r, 0.0015)).filter((r) => r.length > 4);

// --- projection: equirectangular, longitude corrected for mean latitude ----
const all = simplified.flat();
const lons = all.map((p) => p[0]), lats = all.map((p) => p[1]);
const lon0 = Math.min(...lons), lon1 = Math.max(...lons);
const lat0 = Math.min(...lats), lat1 = Math.max(...lats);
const kx = Math.cos((((lat0 + lat1) / 2) * Math.PI) / 180);

// The card overlays its title and copy bottom-left, so the landmass is inset to
// the right — same balance as the Maurice tile.
const BOX = { x: 1010, y: 24, w: 570, h: 540 };
const spanX = (lon1 - lon0) * kx, spanY = lat1 - lat0;
const s = Math.min(BOX.w / spanX, BOX.h / spanY);
const offX = BOX.x + (BOX.w - spanX * s) / 2;
const offY = BOX.y + (BOX.h - spanY * s) / 2;
const project = ([lon, lat]) => [
  offX + (lon - lon0) * kx * s,
  offY + (lat1 - lat) * s,
];
const fmt = (n) => Math.round(n * 10) / 10;

const paths = simplified
  .map((r) => "M" + r.map((p) => project(p).map(fmt).join(" ")).join("L") + "Z")
  .join(" ");

// --- itinerary pins -------------------------------------------------------
// The stops mirror the page's own itinerary and are spaced far enough apart to
// read at this scale. Karatu and the Ngorongoro crater sit ~20 km apart, so
// pinning both collides at 1602px wide; the crater alone carries the step.
const stops = [
  { n: 1, name: "Abou Simbel", lon: 31.6258, lat: 22.3372 },
  { n: 2, name: "Assouan et l'\u00eele de Philae", lon: 32.8845, lat: 24.0254 },
  { n: 3, name: "Louxor, rive est : Karnak", lon: 32.6573, lat: 25.7188 },
  { n: 4, name: "Louxor, rive ouest : la Vall\u00e9e des Rois", lon: 32.6014, lat: 25.7402 },
  { n: 5, name: "Gizeh et le Grand Egyptian Museum", lon: 31.1325, lat: 29.9773 },
  { n: 6, name: "L'oasis de Siwa", lon: 25.5195, lat: 29.2041 },
].map((p) => ({ ...p, xy: project([p.lon, p.lat]) }));


// Écarte les pins trop proches pour qu'ils restent lisibles.
for (let it = 0; it < 60; it++) for (const a of stops) for (const b of stops) {
  if (a === b) continue;
  const dx = b.xy[0] - a.xy[0], dy = b.xy[1] - a.xy[1], d = Math.hypot(dx, dy) || 1;
  if (d < 46) { const k = (46 - d) / 2 / d; a.xy = [a.xy[0] - dx * k, a.xy[1] - dy * k]; b.xy = [b.xy[0] + dx * k, b.xy[1] + dy * k]; }
}
const at = (n) => stops.find((p) => p.n === n).xy.map(fmt);
const leg = (a, b) => `M${at(a).join(" ")}L${at(b).join(" ")}`;
const route = [leg(1, 2), leg(2, 3), leg(3, 4), leg(4, 5), leg(5, 6)].join(" ");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <path d="${paths}" fill="${LAND}" fill-rule="evenodd"/>
  <path d="${route}" fill="none" stroke="${PIN}" stroke-width="5"
        stroke-dasharray="14 10" stroke-linecap="round" opacity="1"/>
  ${stops.map((p) => {
    const [x, y] = p.xy.map(fmt);
    return `<circle cx="${x}" cy="${y}" r="20" fill="${PIN}"/>
    <text x="${x}" y="${y + 8}" text-anchor="middle" fill="${INK}"
          font-family="Georgia, 'Times New Roman', serif" font-size="21">${p.n}</text>`;
  }).join("\n  ")}
</svg>`;


await sharp(Buffer.from(svg), { density: 96 })
  .webp({ quality: 96, alphaQuality: 100 })
  .toFile(OUT);

const meta = await sharp(OUT).metadata();
console.log(`anneaux retenus : ${simplified.length}`);
console.log(`points apres simplification : ${all.length}`);
console.log(`ecrit : ${OUT}`);
console.log(`${meta.width}x${meta.height}, alpha ${meta.hasAlpha}`);
