# REFERENCE — Experience page section data shapes

## Architecture

Section structure rules — **per-slot character limits, item counts, image ratios** — live alongside each section component as a `*Meta` export, not in this file. Examples:

- [src/components/sections/hero/image-background.tsx](../../../src/components/sections/hero/image-background.tsx) → `heroImageBackgroundMeta`
- [src/components/sections/text-images-split.tsx](../../../src/components/sections/text-images-split.tsx) → `textImagesSplitMeta`
- [src/components/sections/gallery.tsx](../../../src/components/sections/gallery.tsx) → `galleryMeta`
- [src/components/sections/feature-showcase.tsx](../../../src/components/sections/feature-showcase.tsx) → `featureShowcaseMeta`
- [src/lib/sections/composite-meta.ts](../../../src/lib/sections/composite-meta.ts) → `entityListMeta`
- [src/lib/sections/index.ts](../../../src/lib/sections/index.ts) → `sectionMetas` (central registry)

Chain of authority when generating data:

1. **Type** ([src/lib/destination/types.ts](../../../src/lib/destination/types.ts)) — what shapes are valid.
2. **Section meta** (`<componentDir>/*Meta`) — char/item/ratio rules per slot.
3. **STYLE.md** at `.claude/skills/destination-generator/STYLE.md` — voice, vocabulary, anti-clichés, SEO discipline.
4. **REFERENCE.md** (this file) — experience-specific *use* of each section: locked eyebrows, image filenames, copy patterns.

Length numbers in this file are illustrative — the source of truth is the component meta. If they disagree, the meta wins.

## Experience entity shape

```tsx
import type { Experience } from "@/lib/content/types";

export const experience: Experience = {
  slug: "<slug>",
  name: "<French name>",
  blurb:
    "<2–3 sentences, ~25 words target, ≤ 60 words hard cap. Same blurb the destination's entityList card displays.>",
  keywords: ["<destination-slug>", /* 3–5 lowercase no-accent strings */],
  heroImage: {
    src: "/experience/<slug>/card.png",          // new experience
    // src: "/destination/<dest>/xp-*.png",       // promoted stub — keep as-is
    alt: "<French alt — subject + place>",
  },
  destinationSlugs: ["<destination-slug>"],      // plural and required for experiences
  // optional: themeSlugs?: string[]
  // optional: collaborateurSlug?: string         // override the destination's spotlight
  metaTitle: "<Name> à <Destination>",            // pattern locked
  metaDescription:
    "<150–160 chars, primary keyword \"<name> à <Destination>\" + factual anchor, no CTA>",
  sections: [
    /* the 5 entries below, in order */
  ],
};
```

The two new fields (`metaTitle`, `metaDescription`, `collaborateurSlug`) wire SEO and the showcase. Read by `generateMetadata` on `/experiences/[slug]` and by the renderer when emitting JSON-LD. Optional in the type but should always be filled — empty `metaDescription` falls back to a generic template; empty `collaborateurSlug` inherits from the destination's spotlight.

---

## 1. heroImageBackground

```tsx
{
  type: "heroImageBackground",
  eyebrow: "Expérience à <Destination>",      // LOCKED format
  heading: "…",                                // h1, evocative, ≤120 chars
  description: "…",                            // optional subhead
  images: [
    { src: "/experience/<slug>/hero.png", alt: "…" },
    /* 1 image is the convention; up to 3 if you want a fade-cycling background */
  ],
}
```

Images: `hero.png` (1 image is canonical). If you ship multiple, use `hero-1.png`, `hero-2.png`, `hero-3.png` (max 3).

The hero is full-screen height (`h-screen`) with a dark overlay tint. Text is centred (`TextBlock align="center"`). No CTA on experience hero by default.

---

## 2. textImagesSplit

```tsx
{
  type: "textImagesSplit",
  eyebrow: "<lead-in label, often a place or moment>",
  heading: "…",                                // h2, ≤70 chars
  theme: "light",
  paragraphs: ["…", "…"],                      // exactly 2
  images: [
    { src: "/experience/<slug>/split-1.png", alt: "…" },  // portrait 3:4
    { src: "/experience/<slug>/split-2.png", alt: "…" },  // square 1:1
  ],
}
```

This is the **main editorial description** of the experience. Open the first paragraph on a moment (a gesture, a sound, a time of day). Close the second on a detail. The first sentence of `paragraphs[0]` must include the primary keyword `<name> à <Destination>` (or a near-variant) — see STYLE.md § SEO discipline.

---

## 3. gallery

```tsx
{
  type: "gallery",
  // NOTE: no `eyebrow` field — the component locks it to "Galerie".
  heading: "…",                                // h2, ≤70 chars, evocative
  description: "…",                            // optional, short
  images: [
    { src: "/experience/<slug>/gallery-1.png", alt: "…" },
    /* 3 to 6 images total, all square 1:1 */
  ],
}
```

Eyebrow is locked at the type/renderer level — the section's data shape doesn't include an `eyebrow` field, and the renderer always renders `"Galerie"`. There is no way to override.

The gallery is a carousel that fits 3 images side-by-side on desktop and scrolls on mobile/tablet. Same composition as the hero gallery, but with H2 register and an enforced eyebrow.

---

## 4. entityList kind: "experience"

```tsx
{
  type: "entityList",
  kind: "experience",
  background: "bg-background-soft",
  eyebrow: "Expériences et activités en <Destination>",  // LOCKED format (project-wide)
  heading: "Autres expériences à <Destination>",         // freely written, evocative
  description: "…",                                       // optional
  // NO `cta` — the `/experiences` index route does not exist (only `/experiences/[slug]`).
  // Do not introduce hrefs to routes that have no `page.tsx`. See "Linkable routes" note below.
  slugs: ["<exp-slug-1>", "<exp-slug-2>", "<exp-slug-3>"],
}
```

> **Linkable routes.** The site exposes per-slug dynamic routes only — `/experiences/[slug]`, `/hebergements/[slug]`, `/destinations/[slug]`. There is no index page at `/experiences`, `/hebergements`, or `/destinations`. Any `cta.href` pointing at an index route will 404. Canonical hrefs for CTA blocks: `/reserver`, `/contact`. Per-entity links generated by the entityList card itself (when the entity has `sections.length > 0`) resolve correctly — only the optional section-level `cta` is at risk.

Compute `slugs` at scaffold time:

```ts
// pseudo-code
const sameDest = experiences
  .filter(e => e.destinationSlugs?.includes(currentDestSlug))
  .filter(e => e.slug !== currentExperience.slug)
  .slice(0, 3)
  .map(e => e.slug);
```

Strictly same destination. No fallback to themes or continents. If fewer than 3 experiences exist for the same destination, ship what's available (1 or 2 cards) — the section still renders cleanly.

If zero same-destination experiences exist, **omit the section entirely**. A row of zero cards is meaningless.

---

## 5. featureShowcase

```tsx
{
  type: "featureShowcase",
  eyebrow: "Notre rôle dans cette expérience",
  heading: "<Prénom du collaborateur>, <rôle court> · <Destination>",  // freely written
  description: "…",                            // optional
  items: [
    {
      title: "<Facette 1 — ex: 'Sélection du créneau'>",
      detail: (
        <p>
          {/* 2–3 sentences explaining how the collaborateur handles this facet for THIS experience */}
        </p>
      ),
      image: {
        src: "/collaborateurs/<collaborateurSlug>.jpg",
        alt: "Portrait de <Prénom>",
      },
    },
    /* 3 items in total. All 3 share the SAME image (collaborateur portrait). */
  ],
}
```

Three editorial items, each a facet of the collaborateur's role *for this specific experience*. Default pattern (adapt freely):

- 1. Upstream — planning, sourcing, scouting before the visit
- 2. On-the-day — coordination during the experience
- 3. Downstream — follow-up, additional access opened by the experience

`image.src` always points to the existing collaborateur portrait. Resolution chain:

1. If `experience.collaborateurSlug` is set, use that slug.
2. Otherwise, read the destination's `specialistSpotlight.specialist.collaborateurSlug` and use that.
3. Bake the resolved slug into all 3 items' `image.src` at scaffold time.

Flag the entire `items` array with `// TODO: verify with the collaborateur` — the facet copy is editorial guesswork until validated by the real collaborateur.

---

## Adding extra sections

The 5-section list is the canonical experience page. **Do NOT add extras.** If a specific experience needs richer content, that's a signal to either:

- Promote one of the existing sections (e.g. extend the textImagesSplit to multiple paired blocks), or
- Defer the extra content to a sub-page (not yet supported).

The page is intentionally lean.

---

## Copy voice

Read [destination-generator's STYLE.md](../destination-generator/STYLE.md). Voice rules apply identically: forbidden vocabulary, anti-clichés, sentence rhythm, SEO discipline. The two locks specific to experiences:

- **Primary keyword pattern**: `<experience name> à <Destination>` (e.g. `Galerie Borghèse hors horaires à Rome`).
- **First-person sensorial register**: `textImagesSplit` paragraphs read as a slow walk-through. Open on a moment, close on a detail.

Length targets per slot live in the component's `*Meta` export — query `sectionMetas[<type>].slots[<slot>].length.chars` for the canonical numbers.

---

## No per-slug page.tsx

The dynamic route at `src/app/experiences/[slug]/page.tsx` reads from the registry and renders every entity. Do NOT create a per-slug `page.tsx`.

When `Experience.sections.length === 0`, the route renders a stub page (`<EntityStubPage>`: eyebrow "Bientôt", entity name + blurb, two CTAs). Once `sections[]` is non-empty, it renders the full editorial page emitted by this skill.
