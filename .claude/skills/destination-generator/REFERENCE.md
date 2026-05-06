# REFERENCE — Section data shapes

The authoritative `Destination` type lives at `src/lib/content/types.ts`; the `Section` discriminated union lives at `src/lib/destination/types.ts` and is re-exported from `src/lib/content/types.ts`. Always import both from `@/lib/content/types`. This file is a generation cheat sheet: one block per `type`, each showing the data-literal skeleton and the image filename convention.

A `Destination` looks like:

```tsx
import type { Destination } from "@/lib/content/types";

export const destination: Destination = {
  slug: "<slug>",
  name: "<Destination name>",
  country: "<French country name>",
  continentSlug: "<one of: europe, afrique, asie, ameriques, proche-orient, iles-oceanie>",
  blurb: "<one-line teaser, 4–8 words>",
  keywords: [
    "<slug>",
    /* 3–8 lowercase, no-accent strings: notable places, regions, activities */
  ],
  sections: [
    /* the 13 entries below, in order */
  ],
};
```

The four new top-level fields (`country`, `continentSlug`, `blurb`, `keywords`) are what wire the destination into the menu's continent → country grouping, the footer's continent listing, and the site-search results. They are technically optional in the type but should always be filled in — leaving them out means the destination won't appear in those surfaces.

Every section accepts an optional `background?: string` (Tailwind class). Pass it only when the canonical sequence does (noted per section).

---

## 1. hero

```tsx
{
  type: "hero",
  eyebrow: "Voyage de luxe en <Destination>",
  heading: "…",                      // h1, ≤70 chars
  description: "…",                  // optional
  images: [
    { src: "/destination/<slug>/hero-1.png", alt: "…" },
    { src: "/destination/<slug>/hero-2.png", alt: "…" },
    { src: "/destination/<slug>/hero-3.png", alt: "…" },
  ],
}
```

Images: `hero-1.png`, `hero-2.png`, `hero-3.png` (square aspect, 3 images).

---

## 2. textColumns (intro)

```tsx
{
  type: "textColumns",
  background: "bg-white",
  eyebrow: "Découverte de <Destination>",
  heading: "…",
  cta: { label: "Créer votre voyage", href: "/reserver" },
  columns: ["…", "…", "…"],          // 3 paragraphs; \n\n supported inside a string
}
```

---

## 3. fullImage

```tsx
{
  type: "fullImage",
  image: { src: "/destination/<slug>/full-image.png", alt: "…" },
  height: 600,
}
```

---

## 4. textImagesSplit

```tsx
{
  type: "textImagesSplit",
  eyebrow: "<Destination> — Le luxe et l'exclusif",
  heading: "…",
  theme: "light",
  paragraphs: ["…", "…"],            // 2 paragraphs
  images: [                          // tuple of exactly 2
    { src: "/destination/<slug>/split-1.png", alt: "…" },  // portrait 3/4
    { src: "/destination/<slug>/split-2.png", alt: "…" },  // square
  ],
}
```

---

## 5. entityList (experiences)

This block references 3 experience slugs. The cards' display data (title, blurb, image) comes from each `Experience` entity file under `src/content/experiences/`. See "Experience entity stub" below for the entity shape.

```tsx
{
  type: "entityList",
  kind: "experience",
  background: "bg-white",
  eyebrow: "Expériences & activités en <Destination>",
  heading: "Nos coups de cœur en <Destination>",
  description: "…",
  cta: { label: "Voir tous les coups de cœur", href: "/experiences" },
  slugs: ["<exp-slug-1>", "<exp-slug-2>", "<exp-slug-3>"],
}
```

Cards on the page render unlinked while the referenced entities have `sections: []` (the default state when the skill creates a fresh stub). Once an entity grows a non-empty `sections[]`, its card on this destination is automatically linked to `/experiences/<exp-slug>`. No edit to this block is required when an entity is promoted.

---

## 6. imageDuoWithText (cultural duo)

```tsx
{
  type: "imageDuoWithText",
  duo: {
    left: { src: "/destination/<slug>/ceremony.png", alt: "…" },
    right: { src: "/destination/<slug>/image-homme.png", alt: "…" },
  },
  text: {
    eyebrow: "Notre coup de cœur",
    heading: "…",                    // evocative, e.g. "L'éveil au cœur du Mana sacré"
    columns: ["…", "…"],             // 2 paragraphs, no CTA
  },
}
```

The renderer wraps the two pieces in a div with collapsed vertical spacing — do not try to model that wrapper in data.

For destination-specific subjects, you may rename the images (e.g. `polyphonie.png` + `berger.png` for Corse).

---

## 7. entityList (hotels)

This block references 3 accommodation slugs. The cards' display data comes from each `Accommodation` entity file under `src/content/accommodations/`. See "Accommodation entity stub" below for the entity shape.

```tsx
{
  type: "entityList",
  kind: "accommodation",
  background: "bg-background-soft",
  eyebrow: "Hébergements",
  heading: "Nos hébergements",
  description: "…",
  cta: { label: "Voir tous les hébergements", href: "/hebergements" },
  slugs: ["<hotel-slug-1>", "<hotel-slug-2>", "<hotel-slug-3>"],
}
```

Same linkability rule as section 5: cards are unlinked while the referenced entities have empty `sections[]`, automatically linked once sections are added.

---

## 8. infoGrid

```tsx
{
  type: "infoGrid",
  background: "bg-white",
  eyebrow: "Ce qu'il faut savoir",
  heading: "Préparer votre voyage en <Destination>",
  description: "…",
  cta: { label: "Créer votre voyage", href: "/reserver" },
  items: [
    { iconName: "plane",        title: "Temps de vol",          description: "TODO: …" },
    { iconName: "clock",        title: "Décalage horaire",      description: "TODO: …" },
    { iconName: "euro",         title: "Monnaie et conversion", description: "TODO: …" },
    { iconName: "fileText",     title: "Visa et passeport",     description: "TODO: …" },
    { iconName: "syringe",      title: "Vaccin",                description: "TODO: …" },
    { iconName: "calendarDays", title: "Meilleure période",     description: "TODO: …" },
    { iconName: "languages",    title: "Langues parlées",       description: "TODO: …" },
  ],
}
```

`IconName` values: `"plane" | "clock" | "euro" | "fileText" | "syringe" | "calendarDays" | "languages"`. The renderer translates these to Lucide icons via `src/components/destination/icons.tsx`. To add a new icon, extend `IconName` in `types.ts` and the switch in `icons.tsx`.

---

## 9. bento

```tsx
{
  type: "bento",
  eyebrow: "Exuma",
  heading: "Voyage sur mesure en <Destination>",
  description: "…",                  // REQUIRED (unlike most sections)
  cta: { label: "Créer votre voyage", href: "/reserver" },
  cards: [
    {
      title: "Création d'itinéraires",
      description: "…",
      image: { src: "/destination/<slug>/bento-map.png", alt: "…" },
      tone: "dark",                  // first card typically dark
    },
    { title: "Adresses confidentielles", description: "…", image: { src: "/destination/<slug>/bento-adresses.png", alt: "…" } },
    { title: "Hébergements de luxe",     description: "…", image: { src: "/destination/<slug>/bento-aerien.png",   alt: "…" } },
    { title: "Conciergerie 24/7",        description: "…", image: { src: "/destination/<slug>/bento-conciergerie.png", alt: "…" } },
    { title: "Expériences immersives",   description: "…", image: { src: "/destination/<slug>/bento-experience.png", alt: "…" } },
  ],
}
```

---

## 10. placesMap

```tsx
{
  type: "placesMap",
  background: "bg-background-soft",
  eyebrow: "Les incontournables en <Destination>",
  heading: "…",
  description: "…",
  cta: { label: "Créer votre voyage", href: "/reserver" },
  initialZoom: 6,
  places: [
    {
      title: "<Place>",
      description: "…",
      image: { src: "/destination/<slug>/map-<place-slug>.png", alt: "…" },
      // TODO: verify coords
      coordinates: { lat: 0, lng: 0 },
    },
    // …5 more (6 total)
  ],
}
```

---

## 11. tips

```tsx
{
  type: "tips",
  background: "bg-background-soft",
  eyebrow: "Guide pratique",
  heading: "Les conseils de nos experts pour votre voyage en <Destination>",
  description: "…",
  cta: { label: "Créer votre voyage", href: "/reserver" },
  items: [
    {
      title: "Dans ma valise",
      cardEyebrow: "Tips",
      modalEyebrow: "Guide pratique",
      shortDescription: "…",
      content: (
        <div className="flex flex-col gap-4">
          <p>TODO: formalités passeport / visa pour <Destination>.</p>
          <h4 className="font-medium">Conseil :</h4>
          <p>TODO: checklist bagages adaptée à la destination.</p>
        </div>
      ),
    },
    // …3 more: "Santé", "Meilleure période", "Budget & Vie locale"
  ],
}
```

The `content` is `React.ReactNode` — `data.tsx` MUST be `.tsx` for this to compile.

---

## 12. testimonials

```tsx
{
  type: "testimonials",
  eyebrow: "Témoignages",
  heading: "Ils ont vécu l'expérience Exuma",
  cta: { label: "Créer mon voyage", href: "/reserver" },
  testimonials: [
    {
      // TODO: replace with real testimonial
      quote: "…",
      image: { src: "/destination/<slug>/hero-1.png", alt: "Portrait" },  // reuse hero
      name: "TODO",
      role: "TODO: contexte (Voyage de noces, octobre 2025)",
    },
    // …2 more, reusing hero-2.png and hero-3.png
  ],
}
```

Reusing hero images for portraits matches both reference pages — no new image files needed.

---

## 13. faq

```tsx
{
  type: "faq",
  background: "bg-white",
  eyebrow: "FAQ",
  heading: "Questions fréquentes",
  contact: {
    prefix: "Besoin d'un renseignement ? ",
    label: "Contactez votre travel designer",
    href: "/contact",
    suffix: " pour une réponse personnalisée.",
  },
  items: [
    { question: "Quelle est la meilleure période pour partir ?",          answer: "TODO: …" },
    { question: "Combien de temps dure le vol depuis Paris ?",            answer: "TODO: …" },
    { question: "Faut-il un visa pour <Destination> ?",                   answer: "TODO: …" },
    { question: "Combien d'étapes peut-on faire en deux semaines ?",      answer: "TODO: …" },
    { question: "Le voyage est-il adapté aux familles ?",                 answer: "TODO: …" },
    { question: "Quel budget prévoir ?",                                  answer: "TODO: …" },
  ],
}
```

`answer` is `React.ReactNode` — typically just a string, but a JSX `<p>` block works too.

---

## Adding an extra section to one destination

If the user mentions a per-destination block (e.g. "Corse should also have a section about boat excursions"), insert another entry into that destination's `sections` array at a sensible position. Most one-offs are best modeled as another `featureCards` block:

```tsx
{
  type: "featureCards",
  eyebrow: "Excursions en mer",
  heading: "Sorties en bateau privé",
  description: "…",
  cards: [ /* 3 cards */ ],
}
```

If the layout is genuinely new (not expressible as any existing `Section` variant), the pattern is:
1. Add a new variant to the `Section` union in `src/lib/destination/types.ts`
2. Add a `case` for it in `src/components/destination/render-section.tsx`
3. Use it in the destination's `<slug>.tsx`

---

## No per-slug page.tsx

The dynamic routes at `src/app/destinations/[slug]/page.tsx`, `src/app/experiences/[slug]/page.tsx` and `src/app/hebergements/[slug]/page.tsx` read from the registry and render every entity. Do NOT create a per-slug `page.tsx`.

When an experience or accommodation has empty `sections[]`, the dynamic route renders a stub page (`<EntityStubPage>`: eyebrow "Bientôt", entity name + blurb, two CTAs). The card on the destination page rendering this entity is unlinked while sections are empty, and becomes linked automatically once at least one section is added.

---

## Experience entity stub

Each card in a destination's `entityList kind: "experience"` section comes from a file at `src/content/experiences/<exp-slug>.tsx`:

```tsx
import type { Experience } from "@/lib/content/types";

export const experience: Experience = {
  slug: "<exp-slug>",
  name: "<Experience name — French>",
  blurb:
    "<2–3 sentence editorial blurb following STYLE.md per-section rules. Same copy that used to live as the inline card description on the destination page.>",
  keywords: ["<destination-slug>", /* 3–5 lowercase no-accent strings */],
  heroImage: {
    src: "/destination/<destination-slug>/xp-<activity>.png",
    alt: "<French alt text>",
  },
  destinationSlugs: ["<destination-slug>"],
  // optional: themeSlugs?: string[], subthemeSlugs?: string[]
  sections: [],
};
```

`destinationSlugs` is **plural and optional**. An experience can belong to multiple destinations (e.g. the same Polynesian fishing experience referenced from `polynesie` AND `polynesie-2`). When you discover this is the case during step 4 (reading existing experience files), edit the existing file's `destinationSlugs` array — don't create a duplicate.

---

## Accommodation entity stub

Each card in a destination's `entityList kind: "accommodation"` section comes from a file at `src/content/accommodations/<hotel-slug>.tsx`:

```tsx
import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "<hotel-slug>",
  name: "<Hotel name>", // // TODO: verify if invented
  blurb:
    "<2–3 sentence editorial blurb following STYLE.md per-section rules.>",
  keywords: ["<destination-slug>", /* 3–5 strings */],
  heroImage: {
    src: "/destination/<destination-slug>/hotel-<name>.png",
    alt: "<French alt text>",
  },
  destinationSlug: "<destination-slug>",
  sections: [],
};
```

`destinationSlug` is **singular and required** — a hotel sits at one destination.

---

## Registry entry

In `src/lib/content/registry.ts`, up to three groups of edits depending on whether you created new entity stubs:

### Destination (always)

1. Add an import alongside the other destination imports near the top of the file:

   ```ts
   import { destination as <camelSlug> } from "@/content/destinations/<slug>";
   ```

   `<camelSlug>` is the slug with hyphens removed and the next letter uppercased (`saint-barth` → `saintBarth`).

2. Add the identifier inside the `toMap([...])` call assigned to `destinations`, alphabetically.

### Experience stubs (one per new file in step 5b)

For each new experience file, add an import next to the other experience imports and add the identifier to the `experiences: Record<string, Experience> = toMap([...])` array, alphabetically:

```ts
import { experience as <camelExpSlug> } from "@/content/experiences/<exp-slug>";
```

### Accommodation stubs (one per new file in step 5b)

Same pattern next to the other accommodation imports:

```ts
import { accommodation as <camelHotelSlug> } from "@/content/accommodations/<hotel-slug>";
```

The registry is the only place that decides whether the dynamic `/destinations/[slug]`, `/experiences/[slug]` and `/hebergements/[slug]` routes pick up the new files. The site search, header menu, footer, and sitemap are all driven from this registry. There is no additional registration step.
