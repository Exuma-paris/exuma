// Builds public/destination/tanzanie/bento-map.webp from real OpenStreetMap
// boundaries, in the palette sampled from public/destination/maurice/bento-map.png.
// No AI: the coastline is the actual OSM relation geometry, only simplified.
import { readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const W = 1602, H = 828;
const LAND = "#f5f2ec", PIN = "#a5794c", INK = "#ffffff";
const OUT = "C:/Users/agent/Exuma Dropbox/Lya Bouthy/dev/exuma/public/destination/tanzanie/bento-map.webp";

// --- geometry -------------------------------------------------------------
const ringsOf = (geo) => {
  if (geo.type === "Polygon") return geo.coordinates;
  if (geo.type === "MultiPolygon") return geo.coordinates.flat();
  return [];
};
const GEO = "references/destination/tanzanie/geo";
const load = (f) => ringsOf(JSON.parse(readFileSync(`${GEO}/${f}`, "utf8"))[0].geojson);

const rings = [
  ...load("tz.json"),
  ...load("Unguja_Tanzania.json"),
  ...load("Pemba_Island_Tanzania.json"),
].filter((r) => r.length > 40);

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

const simplified = rings.map((r) => simplify(r, 0.004)).filter((r) => r.length > 12);

// --- projection: equirectangular, longitude corrected for mean latitude ----
const all = simplified.flat();
const lons = all.map((p) => p[0]), lats = all.map((p) => p[1]);
const lon0 = Math.min(...lons), lon1 = Math.max(...lons);
const lat0 = Math.min(...lats), lat1 = Math.max(...lats);
const kx = Math.cos((((lat0 + lat1) / 2) * Math.PI) / 180);

// The card overlays its title and copy bottom-left, so the landmass is inset to
// the right — same balance as the Maurice tile.
const BOX = { x: 600, y: 18, w: 980, h: 792 };
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
  { n: 1, name: "Arusha", lon: 36.683, lat: -3.3869 },
  { n: 2, name: "Grumeti", lon: 34.2, lat: -2.05 },
  { n: 3, name: "Ngorongoro", lon: 35.5833, lat: -3.1667 },
  { n: 4, name: "Zanzibar", lon: 39.2026, lat: -6.165 },
].map((p) => ({ ...p, xy: project([p.lon, p.lat]) }));

const at = (n) => stops.find((p) => p.n === n).xy.map(fmt);
const leg = (a, b) => `M${at(a).join(" ")}L${at(b).join(" ")}`;
const route = [leg(1, 2), leg(2, 3), leg(3, 4)].join(" ");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <path d="${paths}" fill="${LAND}" fill-rule="evenodd"/>
  <path d="${route}" fill="none" stroke="${INK}" stroke-width="3"
        stroke-dasharray="10 9" stroke-linecap="round" opacity="0.95"/>
  ${stops.map((p) => {
    const [x, y] = p.xy.map(fmt);
    return `<circle cx="${x}" cy="${y}" r="24" fill="${PIN}"/>
    <text x="${x}" y="${y + 9}" text-anchor="middle" fill="${INK}"
          font-family="Georgia, 'Times New Roman', serif" font-size="25">${p.n}</text>`;
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
