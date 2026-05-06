---
name: destination-generator
description: Generate a new destination page for the Exuma travel site (Next.js, French content). Use when the user asks to create a destination page, add a new travel destination, or scaffold a destination. Produces src/content/destinations/<slug>.tsx (typed Destination object with all sections), 0–6 stub entity files in src/content/experiences/ and src/content/accommodations/ (one per referenced experience or hotel that doesn't already exist), public/destination/<slug>/PROMPTS.md (image manifest with reference-search queries), references/destination/<slug>/SOURCES.md (empty traceability log), and registers all new files in src/lib/content/registry.ts so the dynamic /destinations/[slug] route picks them up. Images are produced separately by gen-images.py — the skill does NOT generate them.
metadata:
  short-description: Scaffold a destination page with copy, structure, entity stubs, and image manifest
---

# Destination Generator

Scaffold a new destination as a typed `Destination` data object that the dynamic route at `src/app/destinations/[slug]/page.tsx` renders via `<DestinationPage>`. Mirror the canonical section list from the Polynésie reference at `src/content/destinations/polynesie.tsx`. The user provides ONLY the destination name (French). Everything else — slug, continent, country, structure, copy, factual placeholders, the image manifest, the entity stubs — is generated. The actual image binaries are produced separately by the user (download references → run `gen-images.py`).

Always read `STYLE.md` and `REFERENCE.md` in this same folder before writing data. STYLE.md owns the editorial voice; REFERENCE.md owns the `Section` discriminated-union shape and the entity stub shape.

## Bound-entity model (read this first)

Experiences and accommodations referenced from a destination page are **separate entities**, not inline cards. Each card displayed on the destination page comes from a file under `src/content/experiences/` or `src/content/accommodations/` that owns the title, blurb, and hero image. The destination just references them by slug via two `entityList` sections.

This means: every destination page generation produces both the destination file *and* up to six small entity stub files (3 experiences + 3 accommodations). The stubs ship with `sections: []` — they're metadata-only until promoted to a full page later. The destination's card shows the stub's `name`/`blurb`/`heroImage`. Cards are unlinked while sections are empty; they become linked automatically once the entity is fleshed out.

If a referenced experience or hotel **already exists** under `src/content/experiences/` or `src/content/accommodations/` (e.g. a new Polynésie page mentioning "The Brando"), reuse the existing slug — do NOT create a duplicate. The destination simply references the existing entity.

## Workflow

### 1. Get the destination name

If the user already named a destination in their prompt, use it. Otherwise ask: *"Quelle destination ? (en français, ex. Corse, Provence, Santorin)"*.

If the user volunteers extra details about the destination itself (places, vibe, anchors), incorporate them. For experience and hotel selection, see step 1b — that's a separate question.

### 1b. Confirm the experience and hotel selection

The destination page references **3 experiences and 3 accommodations**. Confirm the selection with the user before generating any file.

**Skip this question if the user already volunteered a list in their initial prompt** (e.g. "make a Bora Bora page including The Brando, the Four Seasons, and a yacht charter"). Their volunteered items become the selection.

Otherwise, ask: *"Avez-vous une liste d'expériences et d'hébergements à intégrer, ou je propose une sélection ?"*

#### Branch A — the user provides a list

The list can be names, descriptions, or slugs. For each item:

1. Derive a kebab-case slug (`The Brando` → `the-brando`, `Vol en hélicoptère sur Bora Bora` → `vol-helico-bora-bora`).
2. Check whether the slug already exists in `src/content/experiences/` or `src/content/accommodations/`. If yes, reuse it (no new file in step 5b). If no, the destination references it and you create a stub later.

If the user gives fewer than 3 of either kind, ask once: *"Vous voulez que je complète à 3 ?"* Don't pad silently.

#### Branch B — the user asks you to propose

Use general knowledge to propose 3 experiences + 3 accommodations that fit Exuma's voice (STYLE.md: hors réseaux, exclusive, terrain access, named real places, no mass-market). Anchor each to specific places, named operators when possible, no generic "tour de la baie" entries.

Present the proposal compactly, exactly in this format:

```
Sélection proposée pour <Destination> :

Expériences :
1. <slug-1> · <Nom> — <une ligne de justification>
2. <slug-2> · <Nom> — <une ligne de justification>
3. <slug-3> · <Nom> — <une ligne de justification>

Hébergements :
1. <slug-1> · <Nom> — <une ligne de justification>
2. <slug-2> · <Nom> — <une ligne de justification>
3. <slug-3> · <Nom> — <une ligne de justification>

On part sur cette sélection, ou vous voulez remplacer / ajuster ?
```

Wait for confirmation. Accept partial edits ("remplace #2 par X", "drop #3 hôtels", "ajoute Maupiti à la place de Tetiaroa") and re-confirm if substantial. Once the user says go, lock the selection and proceed to step 2.

#### Either way

Once the selection is locked (volunteered, branch A confirmed, or branch B confirmed), you have:
- 3 experience slugs (some may exist, some new)
- 3 accommodation slugs (some may exist, some new)

Carry these into step 5 — they drive the destination's `entityList` `slugs` arrays AND determine which entity stub files step 5b creates.

For factual placeholders that may sneak in (a hotel name you can't verify, a coordinate, a flight time): flag with `// TODO: verify` on the same line.

### 2. Derive the slug

```js
const slug = name
  .normalize("NFD")
  .replace(/\p{Diacritic}/gu, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "");
```

Examples: `Corse` → `corse`, `Polynésie française` → `polynesie-francaise`, `Saint-Barth` → `saint-barth`.

### 3. Pick `continentSlug` and `country` from general knowledge

The destination must be associated with one of the 6 continents whose slugs are fixed:

```
europe              afrique             asie
ameriques           proche-orient       iles-oceanie
```

Use general geographic knowledge to pick one. Examples: `corse` → `europe`, `marrakech` → `afrique`, `kyoto` → `asie`, `patagonie` → `ameriques`, `wadi-rum` → `proche-orient`, `polynesie-francaise` → `iles-oceanie`. If genuinely ambiguous, pick the most likely and add `// TODO: verify continent` on the same line.

`country` is a free-form French country name. Examples: `France`, `Maroc`, `Japon`, `Argentine`, `Polynésie française`. If the destination spans multiple countries (e.g. Patagonie covers Argentine + Chili), pick the dominant one or use `Argentine et Chili` and flag with `// TODO: verify country`.

### 4. Read reference files

Before writing anything, read:
- `STYLE.md` (this folder) — **the editorial voice spec.** Single source of truth for sentence rhythm, allowed/forbidden vocabulary, anti-cliché rewrites, per-section copy rules, and three proof-of-voice excerpts. Mandatory for every paragraph you write (including entity blurbs).
- `REFERENCE.md` (this folder) — `Section` shape per type, plus the Experience and Accommodation entity stub shapes.
- `src/content/destinations/polynesie.tsx` — Polynésie reference (copy register + section ordering, with bound `entityList` sections)
- `src/content/destinations/polynesie-2.tsx` — Polynésie v2 reference (most recent, tightest voice — closest match to STYLE.md)
- `src/content/destinations/corse.tsx` — Corse reference (alternate voice, useful for section structure)
- **`ls src/content/experiences/`** — list the existing experience slugs. You'll reuse them where applicable in step 5b instead of creating duplicates.
- **`ls src/content/accommodations/`** — same for accommodations.
- One existing experience stub (e.g. `src/content/experiences/peche-moorea.tsx`) and one accommodation stub (e.g. `src/content/accommodations/the-brando.tsx`) — to copy the exact stub shape.
- `src/lib/content/types.ts` — authoritative `Destination`, `Experience`, `Accommodation`, and re-exported `Section` types
- `src/lib/content/registry.ts` — to know exactly where to register the new files

### 5. Create files

The selection is already locked from step 1b — you have 3 experience slugs and 3 accommodation slugs, each marked as either *existing* (reuse) or *new* (will be stubbed in 5b). Don't reopen the question here. If the locked selection includes a slug you can't tell whether it exists, run `ls` once and proceed.

#### 5a. Create `src/content/destinations/<slug>.tsx`

```tsx
import type { Destination } from "@/lib/content/types";

export const destination: Destination = {
  slug: "<slug>",
  name: "<Destination name>",
  country: "<French country name>",
  continentSlug: "<one of the 6 continent slugs>",
  blurb: "<one-line teaser, 4–8 words>",
  keywords: [
    "<slug>",
    /* 3–8 lowercase, no-accent strings: notable places, regions, activities */
  ],
  sections: [
    { type: "hero", … },
    { type: "textColumns", … },
    // … the 13 canonical sections, in order
    // slot 5 is `entityList kind: "experience"`, slot 7 is `entityList kind: "accommodation"` —
    // see REFERENCE.md for the skeleton.
  ],
};
```

The two `entityList` sections look like:

```tsx
{
  type: "entityList",
  kind: "experience",          // or "accommodation"
  background: "bg-white",      // or "bg-background-soft" for hotels
  eyebrow: "...",
  heading: "...",
  description: "...",
  cta: { label: "Voir tous les coups de cœur", href: "/experiences" },
  slugs: ["<slug-1>", "<slug-2>", "<slug-3>"],
}
```

The file is `.tsx` because `tips` and `faq` items hold rich JSX content. Do NOT make it `.ts`.

#### 5b. Create stub entity files for new experiences and accommodations

For every experience slug referenced in 5a's `entityList kind: "experience"` that does NOT already exist in `src/content/experiences/`:

```tsx
// src/content/experiences/<exp-slug>.tsx
import type { Experience } from "@/lib/content/types";

export const experience: Experience = {
  slug: "<exp-slug>",
  name: "<Experience name — French>",
  blurb: "<2–3 sentence editorial blurb following STYLE.md per-section rules for cards>",
  keywords: ["<destination-slug>", /* 3–5 lowercase no-accent strings */],
  heroImage: {
    src: "/destination/<destination-slug>/xp-<activity>.png",
    alt: "<French alt text>",
  },
  destinationSlugs: ["<destination-slug>"],
  sections: [],
};
```

For every accommodation slug referenced in 5a's `entityList kind: "accommodation"` that does NOT already exist in `src/content/accommodations/`:

```tsx
// src/content/accommodations/<hotel-slug>.tsx
import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "<hotel-slug>",
  name: "<Hotel name>",
  blurb: "<2–3 sentence editorial blurb>",
  keywords: ["<destination-slug>", /* 3–5 strings */],
  heroImage: {
    src: "/destination/<destination-slug>/hotel-<name>.png",
    alt: "<French alt text>",
  },
  destinationSlug: "<destination-slug>",  // singular, REQUIRED for accommodations
  sections: [],
};
```

Note the asymmetry:
- `Experience.destinationSlugs` is plural and optional (an experience can belong to multiple destinations).
- `Accommodation.destinationSlug` is singular and required (a hotel sits at one destination).

The `blurb` field is what the destination's card displays — it must follow the same editorial standard the old card descriptions did (see STYLE.md per-section rule for `featureCards.cards[].description`: 2–3 sentences, opens on a moment, closes on a detail, ≤ 60 words).

#### 5c. Create `public/destination/<slug>/PROMPTS.md`

See "Images" below.

#### 5d. Create `references/destination/<slug>/SOURCES.md`

See "Images" below. The `references/destination/<slug>/` folder is also where the user will drop reference photos (`*-ref.jpg`) for the gen-images.py script. Do not create the `*-ref` files yourself; create the folder and `SOURCES.md` only.

### 6. Register everything in `src/lib/content/registry.ts`

Read it first. Then make the following edits:

a) **Destination import + entry** — alongside the other destination imports:

```ts
import { destination as <camelSlug> } from "@/content/destinations/<slug>";
```

`<camelSlug>` is the slug with hyphens removed and the next letter uppercased: `saint-barth` → `saintBarth`, `polynesie-francaise` → `polynesieFrancaise`. Single-word slugs are unchanged: `corse` → `corse`. Add the identifier to the `destinations: Record<string, Destination> = toMap([...])` array, alphabetically.

b) **For each new experience stub created in 5b**, add an import next to the other experience imports and add the identifier to the `experiences: Record<string, Experience> = toMap([...])` array, alphabetically.

```ts
import { experience as <camelExpSlug> } from "@/content/experiences/<exp-slug>";
```

c) **For each new accommodation stub created in 5b**, add an import next to the other accommodation imports and add the identifier to the `accommodations: Record<string, Accommodation> = toMap([...])` array, alphabetically.

```ts
import { accommodation as <camelHotelSlug> } from "@/content/accommodations/<hotel-slug>";
```

The registry is the only place that decides whether the dynamic `/destinations/[slug]`, `/experiences/[slug]` and `/hebergements/[slug]` routes pick up the new files — type-checking will pass without it but pages will 404.

### 7. Do NOT touch search, header, sitemap, or footer

Site search ([site-search.tsx](src/components/blocks/site-search.tsx)), the side menu ([menu-panel.tsx](src/components/blocks/menu-panel.tsx)), the sitemap ([sitemap.ts](src/app/sitemap.ts)) and the footer ([footer.tsx](src/components/sections/footer.tsx)) are all driven from the registry plus the entity fields you set in steps 5–6. They will pick the new destination, experiences, and accommodations up automatically.

### 8. Verify + report

After writing:

```
npx tsc --noEmit
```

Then report:
- Files created (destination + N experience stubs + M accommodation stubs)
- Entities **reused** vs. entities **newly stubbed** — so the user knows which ones already exist and which now need content next
- Registry edits (destination import, experience imports, accommodation imports — list each)
- That `PROMPTS.md` lists N images to generate, with one row per image showing its filename + reference search query
- Next step the user takes:
  1. For each image, find a reference photo (Google Images / Wikimedia Commons) and save it as `references/destination/<slug>/<filename>-ref.{jpg,png}` (e.g. `hero-1-ref.jpg`).
  2. Add an entry for each reference in `references/destination/<slug>/SOURCES.md` (output filename + URL + license).
  3. Run `GEMINI_API_KEY=… python3 .claude/skills/destination-generator/gen-images.py <slug>` — it iterates the references folder and writes restyled outputs to `public/destination/<slug>/`.
- Remind: the page will render with broken images until step 3 has run, the URL is `/destinations/<slug>` (plural), and every newly-stubbed experience/accommodation has unlinked cards on the destination page until a `sections[]` is added to its file.

---

## Canonical section order

The 13 entries in `sections[]`, in this exact order:

1. `hero`
2. `textColumns` (intro — bg-white)
3. `fullImage`
4. `textImagesSplit`
5. **`entityList`** (`kind: "experience"` — bg-white) — references 3 experience slugs
6. `imageDuoWithText` (cultural duo — composite type)
7. **`entityList`** (`kind: "accommodation"` — bg-background-soft) — references 3 accommodation slugs
8. `infoGrid`
9. `bento`
10. `placesMap` (bg-background-soft)
11. `tips` (bg-background-soft)
12. `testimonials`
13. `faq` (bg-white)

A user-volunteered "extra section" (e.g. boat excursions for Corse) should be inserted as an additional entry at a sensible position — typically as another `entityList kind: "experience"` block, placed before or after the canonical experiences block.

---

## Copy voice

**Read [STYLE.md](STYLE.md) before writing any copy.** It is the single source of truth for the editorial voice — sentence rhythm, allowed/forbidden vocabulary, anti-cliché rewrites, per-section rules (including for entity blurbs), and three proof-of-voice excerpts to match for cadence.

Quick summary (full rules in STYLE.md): French, present tense, third person or impersonal `on`, never `vous` outside CTAs/FAQ. Open paragraphs on a concrete observation — never on "Découvrez/Imaginez/Plongez". Show register by detail, not by adjective. The words "luxe", "paradis", "exceptionnel", "authentique", "incontournable" are forbidden in body copy. Use real names and specific numbers. End paragraphs on an observation, not a CTA. Two canonical CTAs project-wide: *"Construire ce voyage"* (preferred) or *"Créer votre voyage"* → `/reserver`, *"Contactez-nous"* → `/contact`.

**Entity blurbs follow the same voice.** Each `Experience.blurb` and `Accommodation.blurb` is the editorial copy that used to live as the inline card description on the destination page. Same rules — same anti-cliché list — same cadence.

---

## Placeholders policy

When inventing factual data (flight time, currency value, hotel names, map coordinates, testimonials), write plausible values but ALWAYS flag them with `// TODO: verify` on the same line.

For `infoGrid` items where the description is fabricated, prefix the description string with `TODO:` inside the string literal (e.g. `description: "TODO: 7h30 de vol depuis Paris"`).

For testimonials: every quote, name, and role must be flagged — testimonials are real-customer content and must never be silently invented.

The new top-level fields follow the same rule: if `country` or `continentSlug` are uncertain, flag them with `// TODO: verify` on the same line.

For new entity stubs: if the hotel name is invented, flag the `name:` line with `// TODO: verify`.

---

## Images

### Approach: restyle a reference, do not invent a scene

Images are produced by a "preserve + grade" pipeline: the user finds a reference photograph that already shows the composition they want, and `gen-images.py` sends that reference + a fixed Exuma style brief to Gemini 2.5 Flash Image. The output is the SAME composition as the reference, only restyled — same framing, same subjects, same time of day. Gemini never invents the scene.

This means the **reference choice is the creative decision**: pick a reference whose composition, framing, and mood you'd be happy to ship as-is — the model will only adjust the look (low contrast, warm whites, film grain, the Exuma palette).

### Filename convention

Every image path on the page is `/destination/<slug>/<filename>.png` (singular `destination/` — keep it that way; this is the public-asset path, NOT the page URL). The reference for that output lives at `references/destination/<slug>/<filename>-ref.<ext>` (the `.ext` matches the downloaded source: `.jpg`, `.jpeg`, `.png`, `.webp`).

The experience and accommodation entity files store their `heroImage.src` as `/destination/<destination-slug>/xp-*.png` and `/destination/<destination-slug>/hotel-*.png` — i.e. under the destination's public folder. This is intentional: the gen-images pipeline runs per-destination, and a stub experience created for a specific destination keeps its image colocated with that destination. If, later, an experience is shared across multiple destinations (e.g. promoted to a multi-destination feature), its image stays under whichever destination it was originally created with.

Canonical output filenames (mirror Polynésie/Corse):

```
hero-1.png          hero-2.png          hero-3.png
full-image.png
split-1.png         split-2.png
xp-<activity>.png   (one per experience card; 3 cards — the matching xp-*.png is the entity's heroImage)
ceremony.png        image-homme.png     (cultural duo — or destination-adapted, e.g. polyphonie.png + berger.png for Corse)
hotel-<name>.png    (one per hotel card; 3 cards — the matching hotel-*.png is the entity's heroImage)
bento-<topic>.png   (one per bento card; 5 cards)
map-<place>.png     (one per map place; 6 places)
```

Testimonial portraits reuse `hero-1/2/3.png` — no separate files.

### Generation script

The canonical image-gen script lives in this folder: `.claude/skills/destination-generator/gen-images.py`. It is destination-agnostic — pass a slug and it processes every `*-ref.<ext>` file in `references/destination/<slug>/`.

```
GEMINI_API_KEY=… python3 .claude/skills/destination-generator/gen-images.py <slug>
```

- Reads `references/destination/<slug>/<name>-ref.<ext>`
- Sends the reference + a fixed style brief (the "preserve + grade" prompt baked into the script — do NOT re-describe the prompt elsewhere)
- Writes `public/destination/<slug>/<name>.png`
- Skips outputs that already exist; pass `--force` to overwrite

The style brief is intentionally not duplicated outside the script — it is part of the script's contract.

### PROMPTS.md format

`public/destination/<slug>/PROMPTS.md` is a compact image manifest, NOT a copy of the generation prompt. Format:

```markdown
# Images — <Destination name>

Each output is produced by `gen-images.py` from a reference saved at `references/destination/<slug>/<name>-ref.<ext>`. Do not edit the style brief in this file — it lives in `.claude/skills/destination-generator/gen-images.py`.

For each image below: (1) search Google Images / Wikimedia Commons with the suggested query, (2) save the chosen image to the references folder with the matching `-ref` filename, (3) add a row to `references/destination/<slug>/SOURCES.md`, (4) run `gen-images.py`.

| Output                  | Reference search                                  | Notes                                                       |
| ----------------------- | ------------------------------------------------- | ----------------------------------------------------------- |
| hero-1.png              | falaises Bonifacio Corse calcaire mer aube        | citadel + cliffs, sea or aerial perspective                 |
| hero-2.png              | plage Palombaggia Corse pins parasols sable blanc | wide bay shot framed by umbrella pines                      |
| hero-3.png              | villa luxe Corse piscine débordement golfe       | infinity pool foreground, sea + horizon background          |
| full-image.png          | …                                                 | …                                                           |
| xp-randonnee-gr20.png   | randonneurs crête granitique GR20 Corse aube     | hikers on a granite ridge, dawn light                        |
| hotel-murtoli.png       | bergerie pierre Sartenais Corse coucher soleil   | restored stone bergerie, golden-hour                         |
| …                       | …                                                 | …                                                           |
```

Rules for each row:
- **Output**: every unique image path the generated `<slug>.tsx` AND every entity stub file references. Count the `src: "/destination/<slug>/*.png"` strings across all generated files (destination + new entity stubs).
- **Reference search**: French query, 5–8 words. Destination name + subject noun + one atmospheric adjective.
- **Notes**: a one-line hint about what to look for in the reference (composition, perspective, content) — this is what the user will use to pick the right photo. Concrete and short.

### SOURCES.md format

`references/destination/<slug>/SOURCES.md` is the traceability log for which reference was used for each output. Initial scaffold (the user fills in URL + license as they download references):

```markdown
# Reference images — <Destination name>

Each generated image in `public/destination/<slug>/` was produced by feeding the prompt baked into `.claude/skills/destination-generator/gen-images.py` to Gemini 2.5 Flash Image alongside the corresponding reference photograph below.

| Output         | Reference file       | Source URL                    | License     |
| -------------- | -------------------- | ----------------------------- | ----------- |
| `hero-1.png`   | `hero-1-ref.jpg`     | TODO                          | TODO        |
| `hero-2.png`   | `hero-2-ref.jpg`     | TODO                          | TODO        |
| …              | …                    | …                             | …           |
```

Reference binaries are gitignored (`references/**/*.{jpg,jpeg,png,webp}`); `SOURCES.md` is tracked.

---

## Not in scope

- Do NOT create or modify a per-slug `page.tsx` — the dynamic routes at `src/app/destinations/[slug]/page.tsx`, `src/app/experiences/[slug]/page.tsx` and `src/app/hebergements/[slug]/page.tsx` already handle every entity.
- Do NOT modify any other content file (other destinations / continents / themes / services / experiences / accommodations) unless reusing a slug requires an additional `destinationSlugs` entry on an existing experience — in which case, edit only that array.
- Do NOT inline experience or accommodation cards on the destination page. Use `entityList` sections referencing slugs.
- Do NOT fill in `sections: []` on the entity stubs you create. They ship empty; cards on the destination page will render unlinked until sections are added later. This is intentional.
- Do NOT create local `info-grid.tsx` or `tips.tsx` files — that data goes inside the `<slug>.tsx` `sections` array as `infoGrid` and `tips` entries.
- Do NOT update `src/app/sitemap.ts`, the header, the menu, the footer, or `site-search.tsx`. They are all registry-driven.
- Do NOT download reference photos or run `gen-images.py` yourself unless the user explicitly asks. The user does the reference-picking step; you only scaffold the manifest (`PROMPTS.md`) and the empty `SOURCES.md`.
- Do NOT duplicate or rewrite the style brief inside `PROMPTS.md` — it lives in `gen-images.py`.
- Do NOT run the dev server. Type-check only.
