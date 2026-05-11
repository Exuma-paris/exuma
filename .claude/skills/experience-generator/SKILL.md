---
name: experience-generator
description: Generate (or promote a stub of) an experience page for the Exuma travel site (Next.js, French content). Use when the user asks to create an experience page, add a new experience, or promote an existing experience stub to a full page. Produces or updates src/content/experiences/<slug>.tsx (typed Experience object with all sections), public/experience/<slug>/PROMPTS.md (image manifest with reference-search queries), references/experience/<slug>/SOURCES.md (empty traceability log), and registers the file in src/lib/content/registry.ts if newly created. Images are produced separately by gen-images.py — the skill does NOT generate them.
metadata:
  short-description: Scaffold or promote an experience page with copy, structure, and image manifest
---

# Experience Generator

Scaffold a new experience page or promote an existing stub at `src/content/experiences/<slug>.tsx`. The dynamic route at `src/app/experiences/[slug]/page.tsx` renders the entity: when `sections: []` it shows a `<EntityStubPage>`; when `sections[]` is non-empty it renders the full editorial page.

Always read the destination skill's `STYLE.md` (at `.claude/skills/destination-generator/STYLE.md`) before writing copy. Voice rules — sentence rhythm, forbidden vocabulary, anti-clichés, SEO discipline — are identical for experiences. Same anti-cliché list, same structural rules, same primary-keyword discipline (with a different keyword pattern, see below).

Always read `REFERENCE.md` in this same folder before writing data. It owns the per-section data shape for experiences and the image filename convention.

## Stub-or-create model (read this first)

`src/content/experiences/<slug>.tsx` is a single file with two states:

- **Stub state** — `sections: []`. Created by the destination-generator when it scaffolds a destination that references this experience. The file holds metadata only (`name`, `blurb`, `keywords`, `heroImage`, `destinationSlugs`). The `/experiences/<slug>` route renders a `<EntityStubPage>` with name + blurb + a "Bientôt" eyebrow.
- **Full-page state** — non-empty `sections[]`. The file gains the editorial sections defined in REFERENCE.md and `/experiences/<slug>` renders a full editorial page.

The skill behaves differently depending on which state it finds:

- **Stub exists**: read `destinationSlugs`, `themeSlugs`, `heroImage`, `name`, `blurb`. Promote to full-page state by filling `sections[]` and (if missing) `metaTitle`/`metaDescription`/`collaborateurSlug`. Do NOT create new entries in `registry.ts` — already registered.
- **Stub does not exist**: ask the user for the destination (since `destinationSlugs` is required), create the file from scratch with both metadata fields and `sections[]`, and add it to `registry.ts`.

## Workflow

### 1. Get the experience name

The skill is invoked with the name in the prompt: e.g. `/experience-generator cours de samba à Mangueira`. If the name is not supplied, ask: *"Quel est le nom de l'expérience ? (en français, ex. Cours de cuisine chez une nonna)"*.

### 2. Derive the slug

```js
const slug = name
  .normalize("NFD")
  .replace(/\p{Diacritic}/gu, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "");
```

Examples: `Galerie Borghèse hors horaires` → `galerie-borghese-hors-horaires`, `Cours de samba à Mangueira` → `cours-de-samba-a-mangueira`.

### 3. Check if the stub already exists

```bash
ls src/content/experiences/<slug>.tsx
```

If it exists, read it to extract:
- `destinationSlugs` (required for related-experiences and inherited collaborator)
- `themeSlugs` (carries through to the new file)
- `heroImage` (kept as-is; do NOT regenerate the card image)
- `name`, `blurb`, `keywords` (kept as-is unless the user says otherwise)

If it doesn't exist, you will create it — ask step 4a.

### 4a. Ask the destination (only if stub does not exist)

*"À quelle destination cette expérience est-elle rattachée ? (slug existant, ex. rome, marrakech, polynesie)"*

Run `ls src/content/destinations/` to confirm the slug. The destination must already exist in the registry. If the user names a destination that doesn't exist, tell them and ask for an existing one.

Optionally also ask: *"Y a-t-il un thème (gastronomie, plongée, etc.) à associer ?"* — themes are optional.

### 4b. Confirm the gallery image count

Always ask: *"Combien d'images dans la galerie (3 à 6) ?"* — the gallery section accepts 3 to 6 images. Default to 4 if the user says "tu choisis".

### 4c. Confirm the collaborateur (optional override)

The featureShowcase section spotlights the **destination's** collaborateur by default — i.e. the same one the destination's `specialistSpotlight` references. Only ask the user if they want to override:

*"Veut-on conserver le collaborateur de la destination, ou en désigner un autre spécifiquement pour cette expérience ?"*

If the user picks override, ask which collaborateur slug. Run `ls src/content/collaborateurs/` to list. Flag with `// TODO: verify collaborateurSlug` if the slug doesn't perfectly fit. The skill never creates a new collaborateur stub.

If the user keeps the default, leave `experience.collaborateurSlug` undefined — the page will derive it at render time from `destinationSlugs[0]`'s spotlight (this derivation is done by the skill at scaffold time: read the destination's `specialistSpotlight.specialist.collaborateurSlug` and bake it into the showcase items' image path).

### 4d. Confirm the 3 facets for FeatureShowcase

The featureShowcase section uses 3 accordion items (titles + details), each with the same collaborateur portrait. Items are written **per experience** — they describe the role this collaborateur plays in *this specific* experience.

Default proposal pattern:
- Item 1: a title for the **upstream** facet (planning, sourcing, scouting before the visit)
- Item 2: a title for the **on-the-day** facet (coordination during the experience)
- Item 3: a title for the **downstream** facet (follow-up, additional access opened by the experience)

Adapt to the experience nature. Example for `galerie-borghese-prive`:
- 1. "Sélection du créneau" — choosing the right opening hour, calling the gallery
- 2. "Accompagnement de l'historien d'art" — what the guide does during the visit
- 3. "Suite du parcours" — extending into another Caravaggio church afterwards

Propose 3 titles + 3 short details (≤ 200 chars each). Wait for confirmation before writing.

### 5. Read reference files

Before writing anything, read:

- `STYLE.md` at `.claude/skills/destination-generator/STYLE.md` — voice rules, forbidden vocabulary, SEO discipline. **Mandatory** for every paragraph.
- `REFERENCE.md` (this folder) — the 5 section data shapes for an experience page.
- `src/lib/sections/index.ts` — the `sectionMetas` registry. Each section's per-slot character limits live with the component (e.g. `galleryMeta`, `heroImageBackgroundMeta`, `featureShowcaseMeta`). Meta wins on length/structure; STYLE.md owns voice; REFERENCE.md owns experience-specific copy patterns.
- `src/content/destinations/<destination-slug>.tsx` — the parent destination, to extract its `specialistSpotlight.specialist.collaborateurSlug` (used in the featureShowcase image path).
- `src/lib/content/types.ts` — authoritative `Experience` type (note the new fields: `metaTitle?`, `metaDescription?`, `collaborateurSlug?`).

### 6. Create or update files

#### 6a. `src/content/experiences/<slug>.tsx`

Skeleton for a **new** experience (no prior stub):

```tsx
import type { Experience } from "@/lib/content/types";

export const experience: Experience = {
  slug: "<slug>",
  name: "<Experience name — French>",
  blurb:
    "<2–3 sentence editorial blurb following STYLE.md rules — same blurb the destination's entityList card displays>",
  keywords: [
    "<destination-slug>",
    /* 3–5 lowercase no-accent strings: place, technique, named operator */
  ],
  heroImage: {
    src: "/experience/<slug>/card.png",
    alt: "<French alt text — name of subject + place>",
  },
  destinationSlugs: ["<destination-slug>"],
  // optional: themeSlugs?: string[]
  // optional: collaborateurSlug?: string  (only if overriding the destination's default)
  metaTitle: "<Experience name> à <Destination>",   // pattern locked: "<name> à <Destination>"
  metaDescription:
    "<150–160 chars, primary keyword (\"<name> à <Destination>\") + factual anchor, no CTA — see STYLE.md § SEO discipline>",
  sections: [
    /* the 5 entries below, in order */
  ],
};
```

When **promoting an existing stub**, edit the file in place: keep the existing fields (don't overwrite `name`, `blurb`, `keywords`, `heroImage`, `destinationSlugs`), add `metaTitle` + `metaDescription`, optionally `collaborateurSlug`, and replace `sections: []` with the canonical 5 sections.

The file is `.tsx` because some sections may include rich JSX content. Do NOT make it `.ts`.

#### 6b. `public/experience/<slug>/PROMPTS.md`

See "Images" below.

#### 6c. `references/experience/<slug>/SOURCES.md`

See "Images" below.

### 7. Register in `src/lib/content/registry.ts` (only if new)

If the file is new, add an import alongside the other experience imports and add the identifier to the `experiences` `toMap([...])` array, alphabetically:

```ts
import { experience as <camelSlug> } from "@/content/experiences/<slug>";
```

`<camelSlug>` is the slug with hyphens removed and the next letter uppercased: `cours-de-samba-a-mangueira` → `coursDeSambaAMangueira`. Single-word slugs are unchanged.

If you're promoting an existing stub, the registry entry already exists. Do not duplicate.

### 8. Do NOT touch the destination

Updating an experience does NOT modify the destination it belongs to. The destination already references this experience via its `entityList kind: "experience"` slugs array. Once the experience's `sections[]` is non-empty, the destination's card automatically becomes linked (via the `entity.sections.length > 0` check in `render-section.tsx`).

### 9. Verify + report

After writing:

```
npx tsc --noEmit
```

Then report:

- File created or promoted: `src/content/experiences/<slug>.tsx` (state: NEW vs PROMOTED).
- Whether the destination was already wired to this experience (yes if the destination's `entityList` `slugs` includes this slug, no otherwise).
- Registry edit (only if new file): the import + alphabetical entry.
- That `PROMPTS.md` lists N images, each with filename + reference-search query.
- Next step:
  1. For each image, find a reference photo and save it as `references/experience/<slug>/<filename>-ref.{jpg,png}`.
  2. Add an entry for each reference in `references/experience/<slug>/SOURCES.md`.
  3. Run `GEMINI_API_KEY=… python3 .claude/skills/destination-generator/gen-images.py --root experience <slug>` (the destination-generator's gen-images.py is destination-agnostic; pass `--root experience` to point at `public/experience/<slug>/`).
- SEO surfaces auto-emitted: per-experience `<title>` + `<meta description>` + Open Graph + canonical (via `generateMetadata` on `/experiences/[slug]`), and two JSON-LD blocks (`TouristAttraction`, `BreadcrumbList`).
- Voice cap: confirm `metaDescription` is 150–160 chars and includes the locked keyword pattern `<name> à <Destination>`.

---

## Canonical section order

The 5 sections in `sections[]`, in this exact order:

1. **`heroImageBackground`** — full-bleed hero with single background image, eyebrow auto: `Expérience à <Destination>`, H1 evocative.
2. **`textImagesSplit`** — main editorial description, 2 paragraphs + 2 images (portrait + square pair).
3. **`gallery`** — 3 to 6 atmospheric square images, eyebrow **always** `Galerie` (locked at the type/renderer level — no need to set it), H2 register.
4. **`entityList kind: "experience"`** — strictly same-destination experiences (filtered from registry at scaffold time, max 3, current experience excluded), eyebrow **always** `Expériences et activités en <Destination>` (the project-wide locked format).
5. **`featureShowcase`** — 3 editorial accordion items + collaborateur portrait. Items written per experience, image path is the destination collaborateur's portrait (or the override if `collaborateurSlug` is set on the experience).

No optional sections. No FAQ. No testimonials. No final CTA. The page is intentionally lean — it's an experience surface, not a destination overview.

---

## Canonical defaults — locked content per section

### `heroImageBackground.eyebrow` — locked

Always exactly: `"Expérience à <Nom de la destination>"`. Example: `"Expérience à Rome"`.

### `gallery.eyebrow` — locked at the type level

The `gallery` section variant in the Section discriminated union does NOT have an `eyebrow` field. The component renders `"Galerie"` automatically. There's no way to write something else.

### `entityList kind:"experience".eyebrow` — locked (project-wide)

Always exactly: `"Expériences et activités en <Nom de la destination>"`. Same rule as on destination pages.

### `featureShowcase.items[].image` — locked to one source

All 3 accordion items reuse the same image: the collaborateur's portrait. Path: `/collaborateurs/<collaborateurSlug>.jpg` — the `Collaborateur.image.src` field. Do NOT generate a new image for the showcase.

---

## Copy voice

**Read [destination-generator's STYLE.md](../destination-generator/STYLE.md) before writing any copy.** It is the single source of truth for the editorial voice. The voice rules apply identically to experiences.

The two locks specific to experiences:

1. **Primary keyword pattern**: `<experience name> à <Destination>` (e.g. `Galerie Borghèse hors horaires à Rome`, `Cours de samba à Mangueira à Rio de Janeiro` — yes, the name may already include the location; preserve it). Place this keyword in: hero eyebrow, first sentence of `textImagesSplit.paragraphs[0]`, `metaDescription`, and the alts of `hero.images[0]` and `split-1.png`.
2. **First-person register**: experience pages are sensorial. The `textImagesSplit` paragraphs and gallery description should read like a slow walk-through. Open on a moment. Close on a detail. Same anti-cliché list as destinations.

---

## Placeholders policy

When inventing factual data (operator name, hourly schedule, price, the collaborateur's exact role), write plausible values but ALWAYS flag them with `// TODO: verify` on the same line.

For the featureShowcase items, the collaborateur's "facets" are inherently editorial — flag the entire `items` array with `// TODO: verify with the collaborateur` on the line above.

For `metaDescription`, if you fall back to the generated default (when no explicit description is written), no TODO flag is needed — the default is structurally correct.

---

## Images

### Filename convention

Every image path on an experience page is `/experience/<slug>/<filename>.png` (singular `experience/`).

Canonical output filenames (5 sections):

```
hero.png                                  (1 — full-bleed background)
split-1.png    split-2.png                (2 — portrait 3:4 + square 1:1)
gallery-1.png  …  gallery-N.png           (3 to 6 — squares)
card.png                                  (1 — square 1:1, only if creating from scratch — the entity's heroImage)
```

Total per new experience: 1 + 2 + N(gallery) + 1 = **6 to 9 images**.
Total for a promoted stub: 1 + 2 + N(gallery) = **6 to 9 images**, the stub's existing `heroImage` stays.

### `card.png` vs `heroImage`

- For a **new** experience (no prior stub), the entity's `heroImage.src` points to `/experience/<slug>/card.png`. Add `card.png` to PROMPTS.md.
- For a **promoted** existing stub, the `heroImage.src` already points to its origin path (e.g. `/destination/<dest>/xp-*.png` written by destination-generator). Do NOT regenerate or move the card image. Do NOT add `card.png` to the new PROMPTS.md.

### `featureShowcase` image path

All 3 showcase items reuse the collaborateur's existing portrait: `/collaborateurs/<collaborateurSlug>.jpg`. No new image to add to PROMPTS.md.

### PROMPTS.md format

`public/experience/<slug>/PROMPTS.md` mirrors the destination version, scoped to the experience folder:

```markdown
# Images — <Experience name>

Each output is produced by `gen-images.py` from a reference saved at `references/experience/<slug>/<name>-ref.<ext>`. Do not edit the style brief in this file — it lives in `.claude/skills/destination-generator/gen-images.py`.

For each image below: (1) search Google Images / Wikimedia Commons with the suggested query, (2) save the chosen image to the references folder with the matching `-ref` filename, (3) add a row to `references/experience/<slug>/SOURCES.md`, (4) run `gen-images.py --root experience <slug>`.

| Output                  | Reference search                                  | Notes                                                       |
| ----------------------- | ------------------------------------------------- | ----------------------------------------------------------- |
| hero.png                | <French query, 5–8 words>                         | full-bleed atmospheric, the experience's signature shot     |
| split-1.png             | <…>                                               | portrait 3:4, the gesture / the technique                   |
| split-2.png             | <…>                                               | square 1:1, the place / the operator                        |
| gallery-1.png           | <…>                                               | square; mood, light, palette                                |
| …                       | …                                                 | …                                                           |
```

### SOURCES.md format

`references/experience/<slug>/SOURCES.md` is the traceability log:

```markdown
# Reference images — <Experience name>

Each generated image in `public/experience/<slug>/` was produced by feeding the prompt baked into `.claude/skills/destination-generator/gen-images.py` to Gemini 2.5 Flash Image alongside the corresponding reference photograph below.

| Output         | Reference file       | Source URL                    | License     |
| -------------- | -------------------- | ----------------------------- | ----------- |
| `hero.png`     | `hero-ref.jpg`       | TODO                          | TODO        |
| `split-1.png`  | `split-1-ref.jpg`    | TODO                          | TODO        |
| …              | …                    | …                             | …           |
```

---

## Not in scope

- Do NOT modify the parent destination — the destination already wires to this experience via slug. The card on the destination page links automatically once `sections[]` is non-empty.
- Do NOT create or modify a collaborateur file. The skill only references existing collaborateurs.
- Do NOT add JSX to the gallery section — it's images-only.
- Do NOT add an FAQ, testimonials, or finalCta section. The 5-section list is the entire page.
- Do NOT update `src/app/sitemap.ts`, the header, the menu, the footer, or `site-search.tsx`. They are all registry-driven and pick up the new experience automatically once it's in `registry.ts`.
- Do NOT download reference photos or run `gen-images.py` yourself unless the user explicitly asks.
- Do NOT run the dev server. Type-check only.
