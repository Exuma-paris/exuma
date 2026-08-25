---
name: destination-generator
description: Generate a new destination page for the Exuma travel site (Next.js, French content). Use when the user asks to create a destination page, add a new travel destination, or scaffold a destination. Runs a strict seven-question interview first (one at a time, all answered before any production): name, place type (pays/région/ville — sets placeKind + tree position), primary persona(s), 3 accommodations, 4 experiences (1 coup-de-cœur focus), the spotlight collaborateur, and 3 related destinations. Then produces src/content/destinations/<slug>.tsx (typed Destination object with all sections), up to 7 stub entity files in src/content/experiences/ and src/content/accommodations/ (4 experiences + 3 hotels not already present), references/destination/<slug>/SOURCES.md, and registers everything in src/lib/content/registry.ts. After the page type-checks and the copy is corrected, runs a chained image phase: re-lists every caption in display order and, one image at a time, asks for a reference link (plus optional non-colour correction), generates it via gen-images.py, and previews it in the rendered page before the next.
metadata:
  short-description: Scaffold a destination page with copy, structure, entity stubs, and image manifest
---

# Destination Generator

Scaffold a new destination as a typed `Destination` data object that the dynamic route at `src/app/destinations/[slug]/page.tsx` renders via `<DestinationPage>`. Mirror the canonical section list from the Polynésie reference at `src/content/destinations/polynesie.tsx`. A short seven-question interview (see below) gathers the name, place type, persona(s), the hotel/experience selection, the specialist, and related destinations; everything else — slug, continent, structure, copy, factual placeholders, the entity stubs — is generated from those answers. The image binaries are produced afterward in the chained image phase (reference → `gen-images.py` → preview), one at a time.

Always read `STYLE.md` and `REFERENCE.md` in this same folder before writing data. STYLE.md owns the editorial voice; REFERENCE.md owns the `Section` discriminated-union shape and the entity stub shape.

## Bound-entity model (read this first)

Experiences and accommodations referenced from a destination page are **separate entities**, not inline cards. Each card displayed on the destination page comes from a file under `src/content/experiences/` or `src/content/accommodations/` that owns the title, blurb, and hero image. The destination just references them by slug via two `entityList` sections.

This means: every destination page generation produces both the destination file *and* up to six small entity stub files (3 experiences + 3 accommodations) — the « coup de cœur » experience is a 4th experience that is inlined into the `imageDuoWithText` section and gets **no stub**. The stubs ship with `sections: []` — they're metadata-only until promoted to a full page later. The destination's card shows the stub's `name`/`blurb`/`heroImage`. Cards are unlinked while sections are empty; they become linked automatically once the entity is fleshed out.

If a referenced experience or hotel **already exists** under `src/content/experiences/` or `src/content/accommodations/` (e.g. a new Polynésie page mentioning "The Brando"), reuse the existing slug — do NOT create a duplicate. The destination simply references the existing entity.

## Workflow

### 0. Pick the mode

This skill handles two distinct jobs. **Always ask first** unless the user's prompt clearly names the mode (e.g. "scaffold Corse from scratch" → mode A; "add a landing flow to Polynésie" → mode B).

Ask: *"Vous voulez (a) scaffolder une nouvelle destination, ou (b) ajouter un funnel `/landing/<slug>` à une destination existante ?"*

- **Mode A — new destination.** Continue with step 1 below. The full canonical workflow runs (~14 sections, image manifest, entity stubs, registry edits). Optionally includes a landing flow at the end if the user opts in.
- **Mode B — add landing to existing destination.** Skip to **§ Mode B (landing only)** at the end of this file. Much shorter — only the landing block + questions, patched into an existing destination file.

### The questionnaire runs in strict sequence — ask one question at a time

Before producing anything, walk the user through **seven questions, in this exact order**, one at a time. Ask a question, wait for the answer, then ask the next. Do **not** batch several into one message, do not jump ahead, and do not start producing (slug, copy, files, images) until all seven are answered. Each answer feeds the next — the place type fixes the tree position, the persona shapes the voice *and* the hotel/experience picks, so a skipped question yields a page aimed at no one.

| # | Question | Drives | Detail |
|---|----------|--------|--------|
| Q1 | Destination name | `name`, `slug` | step 1 |
| Q2 | Place type (pays / région / ville) | `placeKind`, `country`, tree position | step 1a |
| Q3 | Primary persona(s) | editorial voice + Q4/Q5 picks | step 1b |
| Q4 | Accommodations — retain **3** | `entityList kind: "accommodation"` + stubs | step 1c |
| Q5 | Experiences — retain **4**, incl. 1 focus | `imageDuoWithText` + `entityList kind: "experience"` | step 1d |
| Q6 | Destination expert (collaborateur) | `specialistSpotlight` | step 1e |
| Q7 | Related destinations (pays) — **3** | inspiration carousel | step 1f |

Exception: if the user's opening prompt already answers a question explicitly (e.g. "fais une page **ville** de Marrakech pour **Édouard** avec **La Mamounia**"), treat it as answered and don't re-ask. A bare destination name or a smoke-test prompt pre-answers nothing.

### 1. Get the destination name (Q1)

If the user already named a destination in their prompt, use it. Otherwise ask: *"Quelle destination ? (en français, ex. Corse, Provence, Santorin)"*.

If the user volunteers extra details about the destination itself (places, vibe, anchors), incorporate them.

### 1a. Place type — pays / région / ville (Q2)

Ask: *"Est-ce un pays, une région ou une ville ? (ça la positionne dans l'arborescence du menu : Continents › Pays › Villes/Régions)"*

This sets two fields on the destination:

- `placeKind`: `"country"`, `"region"`, or `"city"`.
- `country`: the parent country it nests under (filled in production step 3).

Why it matters: the menu nests **Continent › Pays › Villes/Régions**. The Pays is the visible, deployable node inside the continent; villes and régions are hidden underneath it until the user expands the country. A `placeKind: "country"` destination *becomes* that deployable Pays header and links to its own page; a `"region"` or `"city"` destination sits under its `country` and is hidden until expanded. Everything stays findable in the search menu regardless. Get this wrong and the page surfaces at the wrong level (a city showing as a top-level country, or a region never appearing under its country).

Examples: `Marrakech` → `placeKind: "city"`, `country: "Maroc"`. `Corse` → `placeKind: "region"`, `country: "France"`. `Maroc` → `placeKind: "country"`, `country: "Maroc"`.

### 1b. Primary persona(s) (Q3)

Read [PERSONAS.md](PERSONAS.md) in this folder — the seven EXUMA personas and the targeting table. Based on the destination's nature (and Q2's place type), propose **1–2 primary personas** and have the user confirm. Always state, up front, who the page is being written for — this is a project-wide rule (see PERSONAS.md).

Ask, e.g.: *"Cette destination colle surtout à **P4 Édouard** (accès rare) et **P1 Frédéric** (décompression). On rédige en priorité pour eux, ou vous visez d'autres personas ?"*

The confirmed personas drive the editorial voice (tone, vocabulary, anti-clichés per STYLE.md) **and** the hotel/experience selection in Q4–Q5 — pick accommodations and experiences that answer those personas' motivations and avoid their turn-offs. Skip the proposal only if the user already named the target persona(s) in their opening prompt.

### 1c. Accommodations — retain 3 (Q4)

The destination page references **3 accommodations**. **Always ask** — never bundle this into a proactive proposal, never assume the user "implicitly" volunteered a list. Test invocations ("smoke test", "scaffold a Roma page") and naked destination names do NOT count. Only skip the ask when the user named at least one specific hotel in their opening prompt.

Ask: *"Avez-vous une liste d'hébergements (on en retient 3), ou je propose une sélection ?"*

#### Branch A — the user provides a list

Names, descriptions, or slugs. For each: derive a kebab-case slug (`The Brando` → `the-brando`), then check whether it already exists in `src/content/accommodations/`. If yes, reuse it (no new file in step 5b). If no, the destination references it and you create a stub later. If fewer than 3, ask once *"Vous voulez que je complète à 3 ?"* — don't pad silently.

#### Branch B — the user asks you to propose

Propose **3 accommodations** that fit Exuma's voice (STYLE.md: hors réseaux, exclusive, terrain access, named real places, no mass-market) **and** answer the personas confirmed in Q3. When you have no first-hand data, research accommodations that match the positioning and the primary personas — named properties anchored to specific places, never a generic "hôtel 5 étoiles". Present compactly:

```
Hébergements proposés pour <Destination> (personas : <P…>) :
1. <slug-1> · <Nom> — <une ligne de justification>
2. <slug-2> · <Nom> — <une ligne de justification>
3. <slug-3> · <Nom> — <une ligne de justification>

On part là-dessus, ou vous remplacez / ajustez ?
```

Wait for confirmation. Accept partial edits and re-confirm if substantial. Once locked, you have 3 accommodation slugs (some may exist, some new) — they drive `entityList kind: "accommodation"` and which stubs step 5b creates. Flag any unverifiable hotel name with `// TODO: verify`.

### 1d. Experiences — retain 4, including 1 focus (Q5)

The destination page uses **4 experiences**: 1 is the **focus** spotlighted in "Notre coup de cœur" (`imageDuoWithText`, slot 6), and 3 fill the `entityList kind: "experience"` block (slot 7, directly below the focus). The focus experience is **not** repeated in the `entityList` and gets **no stub file**. **Always ask** unless the user already named experiences in their opening prompt.

Ask: *"Avez-vous une liste d'expériences (on en retient 4), ou je propose ? Et laquelle met-on en avant dans « Notre coup de cœur » ?"*

#### Branch A — the user provides a list

Same slug-derive + existence check as accommodations, against `src/content/experiences/`. If fewer than 4, ask once *"Vous voulez que je complète à 4 ?"*.

#### Branch B — the user asks you to propose

Propose **4 experiences** that fit Exuma's voice **and** the confirmed personas. When you have no first-hand data, research experiences that are plausible for the destination and aligned with the positioning and the primary personas' motivations. Anchor each to specific places / named operators — no generic "tour de la baie". Present compactly:

```
Expériences proposées pour <Destination> (personas : <P…>) :
1. <slug-1> · <Nom> — <une ligne de justification>
2. <slug-2> · <Nom> — <une ligne de justification>
3. <slug-3> · <Nom> — <une ligne de justification>
4. <slug-4> · <Nom> — <une ligne de justification>

Laquelle en « coup de cœur » ? Et on garde cette sélection ?
```

Wait for confirmation, including **which experience is the focus**. Skip the coup-de-cœur ask only if the user already indicated a preferred experience ("focus on the helicopter ride").

#### Either way

Once locked you have **4 experience slugs** (1 marked as the focus) and **3 accommodation slugs**, each tagged *existing* or *new*. Carry them into step 5: the focus drives `imageDuoWithText` only, the other 3 drive `entityList kind: "experience"`, and the accommodations drive `entityList kind: "accommodation"`. Only the 3 non-focus experiences and the 3 accommodations create stub files in step 5b.

The focus experience fills the `imageDuoWithText` section in step 5a:

- **Images (`duo.left` / `duo.right`)**: two filenames illustrating the focus experience (e.g. `xp-vol-helico-lagon.png` + `xp-vol-helico-cockpit.png`). They appear in the expected-images list.
- **Copy (`text.eyebrow`, `text.heading`, `text.columns`)**: eyebrow `"Notre coup de cœur"`, heading + two columns built from what makes the experience special (its name, blurb, keywords, general knowledge), per STYLE.md and aimed at the confirmed personas.

### 1e. Pick the spotlight collaborateur (Q6)

The `specialistSpotlight` section (slot 2 — right after the hero) features a named travel designer from `src/content/collaborateurs/`. The destination references that collaborateur by slug; the section's body data (`specialist.collaborateurSlug`, `specialist.quote`, the 3 `features`) describes what *this* destination owes to *this* designer.

Run `ls src/content/collaborateurs/` to list existing collaborateurs (each file exports a `Collaborateur` with `name`, `role`, `image`, `profileImage?`). The collaborateur → destination relationship lives on the destination side: a destination claims its specialist by setting `specialistSpotlight.specialist.collaborateurSlug`. To know which collaborateur "already serves" a region, grep existing destinations for `collaborateurSlug:` and read their slugs.

**Always ask** — never bundle the collaborateur into a proactive proposal. Test invocations and naked destination names do NOT count as volunteering. Only skip when the user explicitly named a collaborateur in their initial prompt (e.g. "Antoine should be the specialist for this Provence page").

Ask: *"Quel collaborateur incarne ce voyage ? (ex. stephane pour la Corse, ludivine pour Paris, taina pour Rome)"*

If no existing collaborateur fits, use `// TODO: verify collaborateurSlug` next to the slug and pick the closest match — do NOT create a new collaborateur stub from this skill.

Carry the chosen slug into step 5a — it fills `specialist.collaborateurSlug` in the slot-2 section. The quote and three features are written in step 5a per STYLE.md voice; flag the quote with `// TODO: verify quote attribution` since collaborateur quotes are real-person verbatims.

### 1f. Related destinations (pays) — 3, for the inspiration carousel (Q7)

The bottom of the page carries an inspiration carousel — a "destinations similaires" section (after FAQ) showing up to **3 other destinations as feature cards** (each one's first hero image, name, and blurb). Ask the user for **3 related destinations, ideally country-level (`placeKind: "country"`)**, to populate it.

Ask: *"Quelles 3 destinations (pays) relier en bas de page pour le carrousel d'inspiration ? Vous avez une liste, ou je propose les 3 plus pertinentes ?"*

**Skip this question if the user already volunteered related destinations in their opening prompt.** If the user explicitly declines the carousel, omit the section and move on.

#### Branch A — the user provides a list

Check that each destination slug exists in `src/content/destinations/`. Only existing destinations can be referenced — this section does NOT create stubs. If a slug doesn't exist, tell the user and ask for a replacement.

#### Branch B — the user asks you to choose

Run `ls src/content/destinations/` to see what's available. Prefer **country-level** destinations that share the same continent or thematic affinity; fall back to any existing destination if too few countries exist yet. Present the proposal:

```
Destinations similaires proposées :
1. <slug> · <Nom>
2. <slug> · <Nom>
3. <slug> · <Nom>

Ça vous convient ?
```

Wait for confirmation.

#### Either way

You have up to 3 destination slugs (all must already exist). Carry these into step 5a — they drive the `entityList kind: "destination"` section placed after `faq` in the `sections[]` array (canonical slot 15):

```tsx
{
  type: "entityList",
  kind: "destination",
  background: "bg-background-soft",
  eyebrow: "Inspirations",
  heading: "Destinations similaires",
  description: "...",
  cta: { label: "Voir toutes les destinations", href: "/destinations" },
  slugs: ["<slug-1>", "<slug-2>", "<slug-3>"],
}
```

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

`country` is a free-form French country name **and the tree parent** (set together with `placeKind` from Q2):

- `placeKind: "city"` or `"region"` → `country` is the **parent country** the page nests under (Marrakech → `Maroc`, Corse → `France`). The page hides under that country in the menu.
- `placeKind: "country"` → `country` is the country's own name, identical to `name` (Maroc → `Maroc`). The page becomes the deployable Pays header.

Examples: `France`, `Maroc`, `Japon`, `Argentine`, `Polynésie française`. If the destination spans multiple countries (e.g. Patagonie covers Argentine + Chili), pick the dominant one as the parent and flag with `// TODO: verify country`. Two destinations sharing a `country` string land in the same Pays group — that is how cities/régions collect under their country.

### 3b. Pick the French `genitive`

Templated pages render labels like `Spécialiste {destination.genitive}` (the merci page after the contact form, future per-destination tags, etc.). French grammar can't be derived from the name alone — the destination author writes the genitive form once.

Format: pre-prefixed with `de`/`du`/`d'` so it slots straight into "Spécialiste …", "Voyage …", etc.

| Article shape | Examples |
|---|---|
| `de la <X>` | feminine + consonant: `de la Polynésie`, `de la Corse`, `de la Provence` |
| `de l'<X>` | feminine/masculine + vowel: `de l'Italie`, `de l'Inde`, `de l'Argentine` |
| `du <X>` | masculine: `du Maroc`, `du Brésil`, `du Japon` |
| `de <X>` | cities + most countries treated as proper nouns: `de Paris`, `de Marrakech`, `de Rome`, `de Cuba` |

If genuinely uncertain (e.g. invented destination), pick the most likely article and flag with `// TODO: verify genitive` on the same line.

### 4. Read reference files

Before writing anything, read:
- `STYLE.md` (this folder) — **the editorial voice spec.** Single source of truth for sentence rhythm, allowed/forbidden vocabulary, anti-cliché rewrites, per-section copy rules, and three proof-of-voice excerpts. Mandatory for every paragraph you write (including entity blurbs).
- `REFERENCE.md` (this folder) — `Section` shape per type, plus the Experience and Accommodation entity stub shapes.
- `src/content/destinations/polynesie.tsx` — Polynésie reference (copy register + section ordering, with bound `entityList` sections)
- `src/content/destinations/polynesie-2.tsx` — Polynésie v2 reference (most recent, tightest voice — closest match to STYLE.md)
- `src/content/destinations/corse.tsx` — Corse reference (alternate voice, useful for section structure)
- **`ls src/content/experiences/`** — list the existing experience slugs. You'll reuse them where applicable in step 5b instead of creating duplicates.
- **`ls src/content/accommodations/`** — same for accommodations.
- **`ls src/content/collaborateurs/`** — list the existing travel-designer slugs (referenced by the slot-2 `specialistSpotlight`). The skill never creates new collaborateurs; it only references existing ones.
- **[src/lib/sections/index.ts](../../../src/lib/sections/index.ts)** — the central `sectionMetas` registry. Each `Section` type has a co-located `*Meta` export (e.g. `heroMeta`, `bentoMeta`) that owns the per-slot character limits, item counts, and image ratios. When you write data for a slot, the meta is the source of truth for length and structure; STYLE.md owns voice; REFERENCE.md owns destination-specific copy patterns.
- One existing experience stub (e.g. `src/content/experiences/peche-moorea.tsx`) and one accommodation stub (e.g. `src/content/accommodations/the-brando.tsx`) — to copy the exact stub shape.
- `src/lib/content/types.ts` — authoritative `Destination`, `Experience`, `Accommodation`, and re-exported `Section` types
- `src/lib/content/registry.ts` — to know exactly where to register the new files

### 5. Create files

The selection is already locked from the questionnaire (steps 1c–1f) — you have **1 « coup de cœur » experience slug** (drives `imageDuoWithText`, no stub), **3 experience slugs** for `entityList kind: "experience"`, **3 accommodation slugs** (each marked *existing* or *new*), and up to 3 related destination slugs (all existing). Don't reopen the question here. If the locked selection includes a slug you can't tell whether it exists, run `ls` once and proceed.

#### 5a. Create `src/content/destinations/<slug>.tsx`

```tsx
import type { Destination } from "@/lib/content/types";

export const destination: Destination = {
  slug: "<slug>",
  name: "<Destination name>",
  placeKind: "<country | region | city — from Q2>",
  country: "<parent country (French) — see step 3>",
  genitive: "<French genitive — see step 3b>",
  continentSlug: "<one of the 6 continent slugs>",
  blurb: "<one-line teaser, 4–8 words>",
  keywords: [
    "<slug>",
    /* 3–8 lowercase, no-accent strings: notable places, regions, activities */
  ],
  metaTitle: "<Destination> — Voyage sur mesure",   // optional; this is the default
  metaDescription:
    "<150–160 chars, primary keyword (\"voyage en <Destination>\") + geographic anchor, no CTA — see STYLE.md § SEO discipline>",
  // landing + contactQuestions: optional pair. Only set when this destination
  // needs the marketing funnel at `/landing/<slug>/*`. See "Landing flow"
  // below. Both must be present (or both absent) — the dynamic route
  // requires landing for the page to render and contactQuestions for the
  // funnel to function.
  // landing: { ... },
  // contactQuestions: [ ... ],
  sections: [
    { type: "hero", … },
    { type: "specialistSpotlight", … },
    { type: "textColumns", … },
    // … the 14 canonical sections, in order
    // slot 2 is `specialistSpotlight`, slot 6 is `entityList kind: "experience"`,
    // slot 8 is `entityList kind: "accommodation"`
    // optional slot 15 is `entityList kind: "destination"` (related destinations, after faq) —
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
  // NO `cta` — `/experiences` and `/hebergements` have no index page (only `/[slug]` exists).
  // See REFERENCE.md § "Linkable routes" before adding any href.
  // experiences: 4 slugs (the focus one included); accommodations: 3 slugs.
  slugs: ["<slug-1>", "<slug-2>", "<slug-3>", "<slug-4>"],
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
  destinationSlugs: ["<destination-slug>"],
  sections: [],
};
```

Note the symmetry: both `Experience.destinationSlugs` and `Accommodation.destinationSlugs` are plural arrays. A hotel typically sits in one destination (length-1 array) but the schema allows more (border properties, hotel chains, multi-island lodges).

The `blurb` field is what the destination's card displays — it must follow the same editorial standard the old card descriptions did (see STYLE.md per-section rules for `Experience.blurb` / `Accommodation.blurb`: 2–3 sentences, ~25 words target, ≤ 60 words hard cap, opens on a moment, closes on a detail). Length is editorial only — the FeatureCard does not truncate; over-long blurbs just create uneven card heights.

#### 5c. Create `references/destination/<slug>/SOURCES.md`

Create the folder and the `SOURCES.md` scaffold (see "Images" below). Leave the Source URL column as `TODO` — it will be filled in when the user provides the reference links. Do not download any reference files at this stage.

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
- Files created (destination + 4 experience stubs + 3 accommodation stubs)
- Entities **reused** vs. entities **newly stubbed** — so the user knows which ones already exist and which now need content next
- Registry edits (destination import, experience imports, accommodation imports — list each)
- Confirm `metaTitle` + `metaDescription` are filled.
- Next step: the chained image phase (see "## Images" below). Don't dump the full image list here — the image phase re-lists every caption in display order and walks the user through them one at a time.
- Remind: the page will render with broken images until step 3 has run, the URL is `/destinations/<slug>` (plural), and every newly-stubbed experience/accommodation has unlinked cards on the destination page until a `sections[]` is added to its file.
- SEO surfaces auto-emitted by [src/lib/destination/seo.ts](../../../src/lib/destination/seo.ts): per-destination `<title>` + `<meta description>` + Open Graph + canonical (via `generateMetadata`), and three JSON-LD blocks (`TouristDestination`, `BreadcrumbList`, `FAQPage`). Confirm `metaTitle` + `metaDescription` are filled on the new destination — empty fields fall back to generic templates.

---

## Canonical section order

The 14 mandatory entries in `sections[]`, in this exact order, plus one optional entry:

1. `hero`
2. **`specialistSpotlight`** — references one collaborateur slug from `src/content/collaborateurs/` (see step 1e)
3. `textColumns` (intro — bg-white)
4. `fullImage`
5. `textImagesSplit`
6. `imageDuoWithText` (**« Notre coup de cœur »** — spotlights the 1 focus experience; composite type)
7. **`entityList`** (`kind: "experience"` — bg-white) — references the 3 non-focus experience slugs; placed directly under the focus section
8. **`entityList`** (`kind: "accommodation"` — bg-background-soft) — references 3 accommodation slugs
9. `infoGrid`
10. `bento`
11. `placesMap` (bg-background-soft)
12. `tips` (bg-background-soft)
13. `testimonials`
14. `faq` (bg-white) — see "FAQ is the destination's source of truth" below
15. *(optional)* **`entityList`** (`kind: "destination"` — bg-background-soft) — references up to 3 related destination slugs. Rendered as feature cards using each destination's first hero image. See step 1f.

A user-volunteered "extra section" (e.g. boat excursions for Corse) should be inserted as an additional entry at a sensible position — typically as another `entityList kind: "experience"` block, placed before or after the canonical experiences block.

---

## Canonical defaults — locked content per section

Several slots are **locked to canonical defaults** across every destination. Do NOT generate new copy for them — import or copy the defaults verbatim. The destination only customises images and a few destination-specific surfaces.

### `specialistSpotlight.features` — locked

Always use the 3 canonical features exported as `defaultSpotlightFeatures` from [src/components/sections/specialist-spotlight.tsx](../../../src/components/sections/specialist-spotlight.tsx). Do not customise titles or descriptions per destination. Import and use:

```tsx
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";

// in the section:
features: defaultSpotlightFeatures,
```

The canonical trio is `Conciergerie 24/7` / `Sur mesure` / `Exclusif` with destination-agnostic descriptions.

### `entityList kind: "experience"` eyebrow — locked

Always exactly: `"Expériences et activités en <Nom de la destination>"`. No variations like "Trois expériences" or "Nos coups de cœur".

### `bento` — eyebrow, heading, and cards locked

Use `defaultBento` exported from [src/components/sections/bento.tsx](../../../src/components/sections/bento.tsx) — provides the canonical `eyebrow`, `heading`, and 5 `cards` (each with `title` + `description` + `tone` for card 0). Only the section's `description` (the subtitle under the heading) and each card's `image` are destination-specific.

```tsx
import { defaultBento } from "@/components/sections/bento";

// in the section:
{
  type: "bento",
  eyebrow: defaultBento.eyebrow,
  heading: defaultBento.heading,
  description: "Plusieurs expertises se mobilisent sur chaque dossier <Destination>. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
  cta: { label: "Construire ce voyage", href: "/votre-projet" },
  cards: defaultBento.cards.map((card, i) => ({
    ...card,
    image: {
      src: `/destination/<slug>/bento-${["map","adresses","hebergements","conciergerie","experiences"][i]}.png`,
      alt: "<French alt>",
    },
  })),
}
```

Canonical card filenames: `bento-map.png`, `bento-adresses.png`, `bento-hebergements.png`, `bento-conciergerie.png`, `bento-experiences.png`.

### `infoGrid` — exactly 8 items, icons + titles locked

Always ship the 8 canonical cells in this order, with these exact `iconName` + `title` pairs:

| # | iconName       | title                  |
|---|----------------|------------------------|
| 1 | `plane`        | Temps de vol           |
| 2 | `clock`        | Décalage horaire       |
| 3 | `euro`         | Monnaie et conversion  |
| 4 | `fileText`     | Visa et passeport      |
| 5 | `syringe`      | Vaccin                 |
| 6 | `calendarDays` | Meilleure période      |
| 7 | `languages`    | Langues parlées        |
| 8 | `sun`          | Climat                 |

Only the `description` is destination-specific. The grid renders 4 columns × 2 rows on desktop — 7 items leaves an empty cell, so 8 is mandatory. The `Climat` cell summarises year-round weather (temperature range, dominant seasons) and complements `Meilleure période` (the recommended travel window). Flag fabricated facts with the `TODO:` prefix inside the description string, per the Placeholders policy below.

### `faq` — destination-scoped, automatically reused across all destination-related pages

Author the FAQ **once**, inside the destination file's `sections[]` (slot 14). Do NOT create a sibling file like `<slug>-faq.ts` and do NOT spread shared data into the section — the destination file IS the source of truth.

Other pages tied to this destination (the marketing landing at `/landing/<slug>`, the post-form `/landing/<slug>/merci`, any future variants) read the FAQ back via:

```ts
import { getDestinationFaq } from "@/lib/content/queries";

const faq = getDestinationFaq("<slug>");
{faq ? <FaqSection {...faq} background="bg-background" /> : null}
```

The `getDestinationFaq` helper is typed via `Extract<Section, { type: "faq" }>` — TypeScript guarantees the shape matches `<FaqSection>`'s props. Editing the destination's FAQ items propagates everywhere instantly. There is no second copy to keep in sync.

Every destination scaffolded via this skill ships with this section, so the helper always returns a value for any registered destination.

### `tips` — minimum 8 items

Every destination ships with **at least 8 tips** (`tipsMeta.itemCount.min` is 8). Aim for 8–12. The 4-tip pattern from older Polynésie/Corse pages is deprecated.

### Landing flow — optional, when the destination has a paid-traffic funnel

Setting **both** `landing` and `contactQuestions` on the destination unlocks the dynamic routes:

- `/landing/<slug>` — marketing landing with hero carousel + brand pitch + specialist contact pill
- `/landing/<slug>/contact` — multi-step questionnaire
- `/landing/<slug>/merci` — post-submit thank-you with inspirations grid + FAQ + footer

All three pages live as one shared dynamic route under `src/app/landing/[slug]/*` — adding a new landing flow is a content task, not a code task. The shared layout pre-renders only destinations that have the funnel set; missing destinations 404.

#### `landing` block

```ts
landing: {
  metaTitle: "Voyage de luxe en <Destination>",
  metaDescription: "<150–160 chars, primary keyword + geographic anchor>",
  heroEyebrow: "Voyage de luxe en <Destination>",
  heroHeading: "<3–5 word brand pitch>",   // e.g. "Vivez l'inaccessible"
  heroDescription: "<2 sentences, ~30 words, sets the brand tone>",
  rating: { score: 4.9, label: "<count> voyages créés en <year>" },  // optional
  floatingCtaLabel: "Découvrir <Destination>",   // optional, default "Découvrir <name>"
  slides: [
    { image: { src: "/destination/<slug>/hero-1.png", alt: "..." } },
    { image: { src: "/destination/<slug>/hero-2.png", alt: "..." } },
    { image: { src: "/destination/<slug>/hero-3.png", alt: "..." } },
    { image: { src: "/destination/<slug>/full-image.png", alt: "..." } },
  ],   // 2–8 slides
}
```

The slides reuse the destination's existing hero images (already produced by the gen-images pipeline for the canonical destination page). No additional image generation needed — the landing page just borrows them.

#### `contactQuestions` array

The `Question` discriminated union lives in [src/lib/contact/types.ts](../../../src/lib/contact/types.ts). Each entry needs `{ id, type, heading }` plus type-specific fields:

| `type` | Required extras | Optional |
|---|---|---|
| `"boolean"` | — | `yesLabel`, `noLabel` (default "Oui"/"Non") |
| `"single"` | `options: { id, label }[]` | — |
| `"multi"` | `options: { id, label }[]` | `min` (default 1), `max` (default ∞) |
| `"calendar"` | `months: { id, title, subtitle, weather? }[]` | `noPreferenceLabel` |
| `"contact"` | — | `marketingConsentLabel` |

All questions can also include `eyebrow?`, `description?`. The `contact` type **must be the last question** — submitting it triggers the redirect to `/landing/<slug>/merci`.

**The number of questions is per-destination — there is no fixed count.** Author as few as 2 (a single qualifier + the contact step) or as many as 15+. The `StepProgress` indicator scales linearly and stays comfortable up to ~40 questions inside the 440px form column.

Polynésie's funnel ([polynesie.tsx](../../../src/content/destinations/polynesie.tsx)) is the canonical reference for what each question type looks like in practice. Use it as a SHAPE reference, not a count target.

#### When asked to scaffold a destination WITH a landing flow

After the canonical destination data + sections are defined, ASK the user:
1. Hero copy — heading, description, eyebrow.
2. Rating numbers (or skip if unverified).
3. Floating CTA label (or accept the `Découvrir <Destination>` default).
4. Which slides to use from the destination's existing hero images (typically `hero-1`, `hero-2`, `hero-3`, `full-image` — verify they exist).
5. Which questions to ask in the funnel and in what order. Do not propose a default count.

Do NOT scaffold any files under `src/app/landing/`. The `[slug]` route is already in place.

---

## Copy voice

**Read [STYLE.md](STYLE.md) before writing any copy.** It is the single source of truth for the editorial voice — sentence rhythm, allowed/forbidden vocabulary, anti-cliché rewrites, per-section rules (including for entity blurbs), and three proof-of-voice excerpts to match for cadence.

Quick summary (full rules in STYLE.md): French, present tense, third person or impersonal `on`, never `vous` outside CTAs/FAQ. Open paragraphs on a concrete observation — never on "Découvrez/Imaginez/Plongez". Show register by detail, not by adjective. The words "luxe", "paradis", "exceptionnel", "authentique", "incontournable" are forbidden in body copy. Use real names and specific numbers. End paragraphs on an observation, not a CTA. Two canonical CTAs project-wide: *"Construire ce voyage"* (preferred) or *"Créer votre voyage"* → `/votre-projet`, *"Contactez-nous"* → `/contact`.

**Entity blurbs follow the same voice.** Each `Experience.blurb` and `Accommodation.blurb` is the editorial copy that used to live as the inline card description on the destination page. Same rules — same anti-cliché list — same cadence.

**SEO discipline is a STYLE.md block, not a separate concern.** See [STYLE.md § SEO discipline](STYLE.md). Headlines: each destination has one primary keyword (`voyage en <Destination>`); it must appear in the eyebrow, the first sentence of the intro, the metaDescription, ≥ 1 H2, and the hero+fullImage alts. The H1 stays evocative — the eyebrow above it carries the keyword. Named-entity density (places, hotels, dishes, regions) beats keyword density. FAQ questions mirror Google "People Also Ask" — verbatim, as a user would type. Meta description is 150–160 chars, factual, no CTA.

---

## Placeholders policy

When inventing factual data (flight time, currency value, hotel names, map coordinates, testimonials), write plausible values but ALWAYS flag them with `// TODO: verify` on the same line.

For `infoGrid` items where the description is fabricated, prefix the description string with `TODO:` inside the string literal (e.g. `description: "TODO: 7h30 de vol depuis Paris"`).

For testimonials: every quote, name, and role must be flagged — testimonials are real-customer content and must never be silently invented.

The new top-level fields follow the same rule: if `country` or `continentSlug` are uncertain, flag them with `// TODO: verify` on the same line.

For new entity stubs: if the hotel name is invented, flag the `name:` line with `// TODO: verify`.

---

## Images — chained, one at a time

This phase runs **after** the page is scaffolded, type-checks, and the copy has been corrected. It is interactive and visual: you walk the user through every image of the page **in display order**, producing and integrating each one before moving to the next, so the user sees the page fill in progressively rather than receiving a giant batch at the end.

### Approach: restyle a reference, do not invent a scene

Images are produced by a "preserve + grade" pipeline: the user supplies a reference photograph that already shows the composition they want, and `gen-images.py` sends that reference + a fixed Exuma style brief to Gemini 3 Pro Image (Nano Banana Pro). The output is the SAME composition as the reference, only restyled — same framing, same subjects, same time of day. Gemini never invents the scene.

The **reference choice is the creative decision**: a reference whose composition, framing, and mood is shippable as-is — the model only adjusts the look (low contrast, warm whites, film grain, the Exuma palette).

The user may also request **a composition change beyond colour** — e.g. *"ajoute un être humain en premier plan avec un appareil photo"*. Those go through `--instruction` (see below), which lifts the no-add/no-remove rule for that one image and applies the requested edit, then the grade, while preserving everything untouched. With no instruction the default is grade-only (composition locked).

### The chained loop

1. **Re-list every caption in display order.** Walk the finished `sections[]` top to bottom (hero → spotlight → … → faq, then the experience/accommodation stubs' `heroImage`). For each image output a numbered line: the output filename, the section it belongs to, and its caption/alt text. This is the running checklist the user follows.

2. **For the current image, ask the user for two things in one message:**
   - the **reference link** (the photo to restyle), and
   - any **correction beyond colour** (optional — leave empty for a plain grade).

   Ask for one image at a time, never a batch. Show which number out of the total you're on (e.g. *"Image 3 / 18 — `split-1.png`"*).

3. **Download** the reference to `references/<root>/<slug>/<name>-ref.<ext>` (ext matches the source) and record the URL in `SOURCES.md`.

4. **Generate just that one image:**
   ```
   GEMINI_API_KEY=… python3 .claude/skills/destination-generator/gen-images.py --only <name> <slug> \
     [--instruction "<correction beyond colour>"]
   ```
   `--only <name>` targets the single output; `--instruction` is passed only when the user gave a non-colour correction. The file lands at `public/<root>/<slug>/<name>.png` and is **already wired** into the page via the filename convention — no code edit needed to integrate it.

5. **Preview the rendered result in the page.** Make sure the dev server is running (start it if needed), then screenshot the section that now contains the new image so the user sees it in context — not the raw file. If the user wants a tweak, collect the new reference/instruction and re-run step 4 with `--force` before moving on.

6. **Move to the next image** and repeat from step 2 until the checklist is exhausted.

### Filename convention

Every image path on the page is `/destination/<slug>/<filename>.png` (singular `destination/` — keep it that way; this is the public-asset path, NOT the page URL). The reference for that output lives at `references/destination/<slug>/<filename>-ref.<ext>` (the `.ext` matches the downloaded source: `.jpg`, `.jpeg`, `.png`, `.webp`).

The experience and accommodation entity files store their `heroImage.src` as `/destination/<destination-slug>/xp-*.png` and `/destination/<destination-slug>/hotel-*.png` — i.e. under the destination's public folder. This is intentional: the gen-images pipeline runs per-destination, and a stub experience created for a specific destination keeps its image colocated with that destination. If, later, an experience is shared across multiple destinations (e.g. promoted to a multi-destination feature), its image stays under whichever destination it was originally created with.

Canonical output filenames (mirror Polynésie/Corse):

```
hero-1.png          hero-2.png          hero-3.png
full-image.png
split-1.png         split-2.png
xp-<activity>.png   (one per experience card; 3 cards — the matching xp-*.png is the entity's heroImage)
xp-<focus>-1.png    xp-<focus>-2.png    (the « coup de cœur » experience — duo.left / duo.right of the imageDuoWithText section)
hotel-<name>.png    (one per hotel card; 3 cards — the matching hotel-*.png is the entity's heroImage)
bento-<topic>.png   (one per bento card; 5 cards)
map-<place>.png     (one per map place; 6 places)
```

Testimonial portraits reuse `hero-1/2/3.png` — no separate files.

### Generation script

The canonical image-gen script lives in this folder: `.claude/skills/destination-generator/gen-images.py`. It is entity-agnostic — pass a slug (and optionally `--root`) and it processes every `*-ref.<ext>` file in the matching references folder.

```
# Whole folder (batch — every *-ref.<ext>)
GEMINI_API_KEY=… python3 .claude/skills/destination-generator/gen-images.py <slug>
GEMINI_API_KEY=… python3 .claude/skills/destination-generator/gen-images.py --root experience <slug>

# Single image (the chained-loop default)
GEMINI_API_KEY=… python3 .claude/skills/destination-generator/gen-images.py --only <name> <slug>

# Single image with a composition change beyond colour
GEMINI_API_KEY=… python3 .claude/skills/destination-generator/gen-images.py --only <name> <slug> \
  --instruction "ajoute un être humain en premier plan avec un appareil photo"
```

- `--root` defaults to `destination`. Allowed values: `destination`, `experience`, `accommodation`.
- `--only <name>` processes just that one output (matches the `<name>` of `<name>-ref.<ext>`). This is what the chained loop uses.
- `--instruction "<text>"` lifts the grade-only rule for that image and applies the requested edit, then the grade, preserving untouched elements. **Requires `--only`** (the script errors otherwise) — a composition instruction is per-image, never folder-wide.
- Reads `references/<root>/<slug>/<name>-ref.<ext>`
- Sends the reference + a fixed style brief (the "preserve + grade" prompt baked into the script — do NOT re-describe the prompt elsewhere)
- Writes `public/<root>/<slug>/<name>.png`
- Skips outputs that already exist; pass `--force` to overwrite. (`--instruction` implies `--force` so re-runs of the same image take effect.)

The style brief is intentionally not duplicated outside the script — it is part of the script's contract.

### SOURCES.md format

`references/destination/<slug>/SOURCES.md` is the traceability log. The skill scaffolds it with one row per expected output image, Source URL as `TODO`. As the chained loop progresses, Claude fills in the URL column for each image it processes (and notes any `--instruction` correction applied).

```markdown
# Reference images — <Destination name>

Each generated image in `public/destination/<slug>/` was produced by feeding the prompt baked into `.claude/skills/destination-generator/gen-images.py` to Gemini 3 Pro Image (Nano Banana Pro) alongside the corresponding reference photograph below.

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
- Do NOT download reference photos or run `gen-images.py` during the scaffolding step — that happens later, in the chained image phase, one image at a time.
- The **scaffolding** step is type-check only — do NOT run the dev server while writing files. The dev server IS started later, during the chained image phase, so each generated image can be previewed in the rendered page (see "## Images — chained, one at a time").

---

## Mode B (landing only) — add a `/landing/<slug>` funnel to an existing destination

Use this branch when **step 0** picked mode B. The destination already exists with a complete `sections[]`; we're only adding the `landing` block + `contactQuestions` array. No new files are scaffolded — the dynamic route at `src/app/landing/[slug]/*` handles everything.

### B1. Pick the destination

Run `ls src/content/destinations/` to list current destinations. Ask the user which slug to extend if not already named.

Read the chosen file. Confirm it does NOT already declare `landing:` or `contactQuestions:` — if it does, surface that and ask whether to overwrite or abort.

### B2. Confirm a specialist exists

The merci page renders the destination's specialist (photo + name + role). The relationship lives on the destination's existing `specialistSpotlight` section — `specialist.collaborateurSlug`. Verify that field is present and points at a real Collaborateur in `src/content/collaborateurs/`. If missing, abort and tell the user to first set the spotlight collaborateur (this is a step-1d concern from mode A).

### B3. Verify hero images exist on disk

The landing's slides reuse the destination's existing hero images — typically:

```
public/destination/<slug>/hero-1.png
public/destination/<slug>/hero-2.png
public/destination/<slug>/hero-3.png
public/destination/<slug>/full-image.png
```

Run `ls public/destination/<slug>/` to confirm. If any are missing, **flag them with `// TODO: image not on disk`** in the `slides[]` entries — do NOT generate images from this skill (that's a separate skill / pipeline).

### B4. Ask the 5 landing questions

Ask the user, one block at a time:

1. **Hero pitch.**
   - *"Eyebrow ? (ex. `Voyage de luxe en <Destination>`)"*
   - *"Heading H1 ? (3–5 mots, voix marketing — ex. `Vivez l'inaccessible`)"*
   - *"Description (≈ 30 mots, 2 phrases) ?"*

2. **Rating** (optional). *"Avez-vous des chiffres pour le rating ? (ex. score 4.9, label `247 voyages créés en 2025`). Sinon, on saute."*

3. **Floating CTA label.** *"Label du bouton flottant en bas de la carrousel ? (défaut : `Découvrir <Destination>`)"*

4. **Slides.** Default to the 4 canonical hero filenames (verified in step B3). Confirm: *"On part sur ces 4 slides ? `hero-1`, `hero-2`, `hero-3`, `full-image` — sinon donnez-moi la liste."*

5. **`contactQuestions`.** This is the multi-step questionnaire. Ask for the full list:
   *"Quelles questions pour le funnel et dans quel ordre ? (les types disponibles : boolean / single / multi / calendar / contact — voir Polynésie pour des exemples). Le `contact` doit être la dernière. Aucun nombre par défaut."*

   Walk through each question collecting `id`, `type`, `heading`, options/months/etc. The `contact` step at the end has no extras beyond optional `marketingConsentLabel`.

### B5. Patch the destination file

Insert two new top-level fields into the destination object — by convention, place them **between the canonical fields and `sections:`**:

```tsx
export const destination: Destination = {
  slug: "...",
  name: "...",
  country: "...",
  genitive: "...",
  continentSlug: "...",
  // ... blurb, keywords, metaTitle, metaDescription ...

  landing: {
    metaTitle: "...",
    metaDescription: "...",
    heroEyebrow: "...",
    heroHeading: "...",
    heroDescription: "...",
    rating: { score: ..., label: "..." }, // optional
    floatingCtaLabel: "...",              // optional
    slides: [
      { image: { src: "/destination/<slug>/hero-1.png", alt: "..." } },
      // ... 2-8 entries
    ],
  },
  contactQuestions: [
    // ... typed Question entries, contact must be last
  ],

  sections: [ /* existing — do NOT touch */ ],
};
```

### B6. Verify + report

Run `npx tsc --noEmit`. Report:

- The destination patched and the two new field blocks added.
- That `/landing/<slug>`, `/landing/<slug>/contact`, `/landing/<slug>/merci` are now live (no other files were touched).
- Any TODOs flagged (missing images, unverified rating, etc.).
- That the next step is to test the URL in the browser.

### Mode B — Not in scope

- Do NOT touch `src/app/landing/[slug]/*` files. The dynamic route is shared across all destinations.
- Do NOT modify the destination's existing `sections[]`. The landing is purely additive.
- Do NOT run the dev server.
