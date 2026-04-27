---
name: destination-generator
description: Generate a new destination page for the Exuma travel site (Next.js, French content). Use when the user asks to create a destination page, add a new travel destination, scaffold a destination, or generate copy/structure/image prompts for a destination. Produces src/app/destination/<slug>/page.tsx with local info-grid + tips wrappers, public/destination/<slug>/PROMPTS.md with Google Image search queries + full image-generation prompts, and appends an entry to the header search index.
metadata:
  short-description: Scaffold a destination page with copy, structure, and image prompts
---

# Destination Generator

Scaffold a full destination page mirroring the Polynésie reference page at `src/app/destination/page.tsx`. The user provides ONLY the destination name (French). Everything else — structure, copy, factual placeholders, image prompts — is generated.

Always read `REFERENCE.md` in this same folder before writing code. It contains exact prop shapes and a skeleton for every section.

## Workflow

### 1. Get the destination name

If the user already named a destination in their prompt, use it. Otherwise ask ONE question only: *"Quelle destination ? (en français, ex. Corse, Provence, Santorin)"*.

Do not ask for anything else — no vibe, no places, no hotels. If the user volunteers extra details, incorporate them; otherwise invent plausible placeholders and mark them `{/* TODO: verify */}` in JSX or `// TODO: verify` in TS.

### 2. Derive the slug

```
const slug = name
  .normalize("NFD")
  .replace(/\p{Diacritic}/gu, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "");
```

Examples: `Corse` → `corse`, `Polynésie française` → `polynesie-francaise`, `Saint-Barth` → `saint-barth`.

Also derive a `PascalName` for local component wrappers: strip accents, title-case, strip non-alphanumeric. `Corse` → `Corse`, `Polynésie française` → `PolynesieFrancaise`.

### 3. Read reference files

Before writing anything, read:
- `REFERENCE.md` (this folder) — prop shapes for every section
- `src/app/destination/page.tsx` — canonical page structure to mirror
- `src/app/destination/info-grid.tsx` — local wrapper pattern
- `src/app/destination/tips.tsx` — local wrapper pattern

### 4. Create files

Create these four files in order:

1. `src/app/destination/<slug>/page.tsx` — mirror the Polynésie page section-by-section. Same section order, same prop shapes, new copy.
2. `src/app/destination/<slug>/info-grid.tsx` — exports `function <PascalName>InfoGrid()`, uses same 7–8 items as Polynésie (flight time, time zone, currency, visa, vaccine, best season, languages) with destination-specific values + `// TODO: verify` on each factual field.
3. `src/app/destination/<slug>/tips.tsx` — exports `function <PascalName>Tips()`, same 4 tip cards as Polynésie (*Dans ma valise*, *Santé*, *Meilleure période*, *Budget & Vie locale*) with stub content adapted to the destination.
4. `public/destination/<slug>/PROMPTS.md` — see "Image prompts" below.

### 5. Update the header search index

Edit `src/components/blocks/site-search.tsx`. Append a new entry to the Destinations group in `SEARCH_GROUPS`:

```ts
{
  label: "<Destination name>",
  description: "<one-line teaser, 4–8 words>",
  href: "/destination/<slug>",
  icon: MapPin,
  keywords: ["<slug>", /* notable places / activities / region */],
}
```

### 6. Verify + report

After writing:

```
npx tsc --noEmit
```

Then report to the user:
- Files created (list)
- That `PROMPTS.md` lists N images to generate
- Remind them the page will 404 on images until they drop generated PNGs in `public/destination/<slug>/`

---

## Copy voice

- **Language**: French. All copy, all alt text, all labels.
- **Tone**: editorial, poetic, sensory, understated luxury. Avoid marketing clichés ("paradis", "incontournable" used sparingly).
- **Paragraph length**: 2–3 sentences. Present tense. Concrete sensory verbs (effleurer, s'étirer, se poser, emporter).
- **Register**: mirror the Polynésie page. Example: *"Il existe des endroits qui ne se racontent pas vraiment : ils se reconnaissent, comme si l'âme les attendait depuis longtemps."*
- **Headings**: ≤ 70 characters, evocative, no all-caps.
- **Eyebrows**: short labels ("Découverte de la Corse", "Hébergements", "FAQ").
- **CTAs**: reuse the project's two canonical CTAs — *"Créer votre voyage"* → `/reserver`, *"Contactez-nous"* → `/contact`.

---

## Placeholders policy

When inventing factual data (flight time, currency value, hotel names, map coordinates), write plausible values but ALWAYS flag them:
- In `.tsx`: `// TODO: verify` on the line
- In `info-grid.tsx` descriptions: prefix the placeholder with `TODO:` inside the string if the value is entirely fabricated, e.g. `description: "TODO: 7h30 de vol depuis Paris"`

Never silently invent a hotel that doesn't exist. Use generic names when uncertain: "Hôtel de charme à <ville>", with `// TODO: choose hotel`.

---

## Image prompts

### Filename convention

Mirror the Polynésie set. Every image path is `/destination/<slug>/<filename>.png`. Canonical filenames:

```
hero-1.png          hero-2.png          hero-3.png
full-image.png
split-1.png         split-2.png
xp-<activity>.png   (one per experience card; 3 cards)
ceremony.png        image-homme.png     (the cultural duo)
hotel-<name>.png    (one per hotel card; 3 cards)
bento-<topic>.png   (one per bento card; 5 cards)
map-<place>.png     (one per map place; 6 places)
```

Experience / hotel / bento / map image subjects should be tailored to the destination (e.g. for Corse: `xp-randonnee-gr20.png`, `hotel-grain-de-sable.png`, `map-bonifacio.png`).

### Base prompt (verbatim, never edit)

```
Cinematic photograph conveying nostalgia, silence and calm.
Quiet luxury, non-ostentatious elegance, timeless atmosphere.
Natural light only, shot juste befor golden hour or early morning.
Soft shadows, low contrast, warm whites (never pure white), subtle film grain (analog texture).
Clear cloudless sky, soft Mediterranean atmosphere, smooth gradient from pale powder blue near the horizon to a slightly deeper azure blue higher up.
Wide shot with large negative space, small subject in frame.
Architecture blended with nature, subtle symmetry in composition.
Color palette: sand, beige, ochre tones, olive green, very desaturated blue, warm skin tones.
Minimalist environment, serene mood, stillness.
Shot on 35mm film, soft depth of field, refined framing, editorial photography.
```

### PROMPTS.md format

Write `public/destination/<slug>/PROMPTS.md` as follows. One section per image file referenced by `page.tsx`. Keep queries and subjects concise.

```markdown
# Image prompts — <Destination name>

Workflow per image: (1) search Google Images with the query below, save a reference;
(2) feed the reference + the generation prompt to an image generator.

---

### hero-1.png

**Google Image search:** plage déserte <destination> sable blanc aube calme

**Generation prompt:**

Cinematic photograph conveying nostalgia, silence and calm.
Quiet luxury, non-ostentatious elegance, timeless atmosphere.
Natural light only, shot juste befor golden hour or early morning.
Soft shadows, low contrast, warm whites (never pure white), subtle film grain (analog texture).
Clear cloudless sky, soft Mediterranean atmosphere, smooth gradient from pale powder blue near the horizon to a slightly deeper azure blue higher up.
Wide shot with large negative space, small subject in frame.
Architecture blended with nature, subtle symmetry in composition.
Color palette: sand, beige, ochre tones, olive green, very desaturated blue, warm skin tones.
Minimalist environment, serene mood, stillness.
Shot on 35mm film, soft depth of field, refined framing, editorial photography.
Subject: A deserted white-sand beach in <destination> at early morning, a single figure walking along the shoreline in the distance, pale turquoise water, soft mist over the dunes.

---

### hero-2.png
…
```

**Rules for the "Subject" line:**
- One sentence in English (image models work best in English).
- Concrete: name the actual place/activity/object in the scene + one atmospheric detail (light, texture, gesture).
- Consistent with destination (don't describe palm trees for a European alpine destination).
- For people: "a single figure in the distance" / "a silhouette" — no close-up portraits.
- For hotels / architecture: emphasize natural integration, never ostentatious luxury markers (no visible logos, no crowds, no pool-party vibes).

**Rules for the Google search query:**
- French, 5–8 words.
- Include destination name + subject noun + one atmospheric adjective.
- Examples: `"villa luxe Corse piscine débordement aube"`, `"marché Bonifacio ruelles pierres matin"`.

### Image inventory

List an entry in PROMPTS.md for EVERY image path the generated `page.tsx` references — count the `src: "/destination/<slug>/*.png"` strings in the file and make sure every unique path has an entry. Typical count is ~20 images.

---

## Not in scope

- Do NOT move or modify the existing Polynésie page at `src/app/destination/page.tsx`.
- Do NOT update `src/app/sitemap.ts` (separate cleanup).
- Do NOT generate actual images.
- Do NOT run the dev server — the user already has it running. Type-check only.
