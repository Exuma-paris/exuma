---
name: destination-generator
description: Generate a new destination page for the Exuma travel site (Next.js, French content). Use when the user asks to create a destination page, add a new travel destination, scaffold a destination, or generate copy/structure/image prompts for a destination. Produces src/app/destination/<slug>/page.tsx (5-line wrapper), src/app/destination/<slug>/data.tsx (typed Destination object with all sections), public/destination/<slug>/PROMPTS.md with Google Image search queries + image-generation prompts, and appends an entry to the header search index.
metadata:
  short-description: Scaffold a destination page with copy, structure, and image prompts
---

# Destination Generator

Scaffold a new destination as a typed `Destination` data object that the generic `<DestinationPage>` renders. Mirror the canonical section list from the Polynésie reference at `src/app/destination/data.tsx`. The user provides ONLY the destination name (French). Everything else — structure, copy, factual placeholders, image prompts — is generated.

Always read `REFERENCE.md` in this same folder before writing data. It contains the exact `Section` discriminated-union shape and a skeleton for every section type.

## Workflow

### 1. Get the destination name

If the user already named a destination in their prompt, use it. Otherwise ask ONE question only: *"Quelle destination ? (en français, ex. Corse, Provence, Santorin)"*.

Do not ask for anything else. If the user volunteers extra details (places, hotels, vibe), incorporate them; otherwise invent plausible placeholders and mark them `// TODO: verify` next to the line.

### 2. Derive the slug + PascalName

```js
const slug = name
  .normalize("NFD")
  .replace(/\p{Diacritic}/gu, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "");
```

Examples: `Corse` → `corse`, `Polynésie française` → `polynesie-francaise`, `Saint-Barth` → `saint-barth`.

`PascalName` is unused now (no per-destination wrapper components anymore) but keep it mentally for the search-index `label`.

### 3. Read reference files

Before writing anything, read:
- `REFERENCE.md` (this folder) — `Section` shape per type, with skeletons
- `src/app/destination/data.tsx` — Polynésie reference (copy register + section ordering)
- `src/app/destination/corse/data.tsx` — Corse reference (a more recent generation, less polished copy)
- `src/lib/destination/types.ts` — authoritative `Section` and `Destination` types

### 4. Create files

Three files per invocation:

1. `src/app/destination/<slug>/page.tsx` — fixed 5-line wrapper, the only thing that varies between destinations is the import path:
   ```tsx
   import { DestinationPage } from "@/components/destination/destination-page";
   import { destination } from "./data";

   export default function Page() {
     return <DestinationPage destination={destination} />;
   }
   ```

2. `src/app/destination/<slug>/data.tsx` — typed `Destination` object:
   ```tsx
   import type { Destination } from "@/lib/destination/types";

   export const destination: Destination = {
     slug: "<slug>",
     name: "<Destination name>",
     sections: [
       { type: "hero", … },
       { type: "textColumns", … },
       // … 13 canonical sections
     ],
   };
   ```
   The file is `.tsx` because `tips` and `faq` items hold rich JSX content. Do NOT make it `.ts`.

3. `public/destination/<slug>/PROMPTS.md` — see "Image prompts" below.

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

`MapPin` is already imported — do not re-import.

### 6. Verify + report

After writing:

```
npx tsc --noEmit
```

Then report:
- Files created (list)
- That `PROMPTS.md` lists N images to generate
- Remind the user the page will 404 on images until they drop generated PNGs in `public/destination/<slug>/`

---

## Canonical section order

The 13 entries in `sections[]`, in this exact order:

1. `hero`
2. `textColumns` (intro — bg-white)
3. `fullImage`
4. `textImagesSplit`
5. `featureCards` (experiences — bg-white)
6. `imageDuoWithText` (cultural duo — composite type)
7. `featureCards` (hotels — bg-background-soft)
8. `infoGrid`
9. `bento`
10. `placesMap` (bg-background-soft)
11. `tips` (bg-background-soft)
12. `testimonials`
13. `faq` (bg-white)

A user-volunteered "extra section" (e.g. boat excursions for Corse) should be inserted as an additional entry at a sensible position — typically as another `featureCards` block, placed before or after the canonical experiences block.

---

## Copy voice

- **Language**: French. All copy, all alt text, all labels.
- **Tone**: editorial, poetic, sensory, understated luxury. Avoid marketing clichés ("paradis", "incontournable" used sparingly).
- **Paragraph length**: 2–3 sentences. Present tense. Concrete sensory verbs (effleurer, s'étirer, se poser, emporter).
- **Register**: mirror the Polynésie page. Example: *"Il existe des endroits qui ne se racontent pas vraiment : ils se reconnaissent, comme si l'âme les attendait depuis longtemps."*
- **Headings**: ≤ 70 characters, evocative, no all-caps.
- **CTAs**: reuse the project's two canonical CTAs — *"Créer votre voyage"* → `/reserver`, *"Contactez-nous"* → `/contact`.

---

## Placeholders policy

When inventing factual data (flight time, currency value, hotel names, map coordinates, testimonials), write plausible values but ALWAYS flag them with `// TODO: verify` on the same line.

For `infoGrid` items where the description is fabricated, prefix the description string with `TODO:` inside the string literal (e.g. `description: "TODO: 7h30 de vol depuis Paris"`).

For testimonials: every quote, name, and role must be flagged — testimonials are real-customer content and must never be silently invented.

---

## Image prompts

### Filename convention

Mirror the Polynésie/Corse set. Every image path is `/destination/<slug>/<filename>.png`. Canonical filenames:

```
hero-1.png          hero-2.png          hero-3.png
full-image.png
split-1.png         split-2.png
xp-<activity>.png   (one per experience card; 3 cards)
ceremony.png        image-homme.png     (cultural duo — or destination-adapted, e.g. polyphonie.png + berger.png for Corse)
hotel-<name>.png    (one per hotel card; 3 cards)
bento-<topic>.png   (one per bento card; 5 cards)
map-<place>.png     (one per map place; 6 places)
```

Testimonial portraits reuse `hero-1/2/3.png` — no separate files.

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

Write `public/destination/<slug>/PROMPTS.md` as follows. One block per UNIQUE image referenced by `data.tsx`:

```markdown
# Image prompts — <Destination name>

Workflow per image: (1) search Google Images with the query below, save a reference;
(2) feed the reference + the generation prompt to an image generator.

---

### hero-1.png

**Google Image search:** plage déserte <destination> sable blanc aube calme

**Generation prompt:**

<BASE PROMPT verbatim, all 10 lines>
Subject: A deserted white-sand beach in <destination> at early morning, a single figure walking along the shoreline in the distance, pale turquoise water, soft mist over the dunes.

---

### hero-2.png
…
```

**Rules for the "Subject" line:**
- One sentence in English (image models work best in English).
- Concrete: name the actual place/activity/object + one atmospheric detail (light, texture, gesture).
- Consistent with destination — don't describe palm trees for an alpine destination.
- For people: "a single figure in the distance" / "a silhouette" — no close-up portraits.
- For hotels / architecture: emphasize natural integration; no logos, no crowds, no pool-party vibes.

**Rules for the Google search query:**
- French, 5–8 words.
- Include destination name + subject noun + one atmospheric adjective.

### Image inventory

Count the unique `src: "/destination/<slug>/*.png"` strings in your generated `data.tsx` and produce one block per unique path. Typical count: ~20–25 images.

---

## Not in scope

- Do NOT modify `src/app/destination/page.tsx` or `src/app/destination/data.tsx` (Polynésie reference).
- Do NOT create local `info-grid.tsx` or `tips.tsx` files — that data goes inside the `data.tsx` `sections` array as `infoGrid` and `tips` entries.
- Do NOT update `src/app/sitemap.ts`.
- Do NOT generate actual images.
- Do NOT run the dev server. Type-check only.
