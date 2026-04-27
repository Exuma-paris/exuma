# REFERENCE — Section data shapes

The authoritative `Section` discriminated union lives at `src/lib/destination/types.ts`. This file is a generation cheat sheet: one block per `type`, each showing the data-literal skeleton and the image filename convention.

A `Destination` looks like:

```tsx
import type { Destination } from "@/lib/destination/types";

export const destination: Destination = {
  slug: "<slug>",
  name: "<Destination name>",
  sections: [
    /* the 13 entries below, in order */
  ],
};
```

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

## 5. featureCards (experiences)

```tsx
{
  type: "featureCards",
  background: "bg-white",
  eyebrow: "Expériences & activités en <Destination>",
  heading: "Nos coups de cœur en <Destination>",
  description: "…",
  cta: { label: "Voir tous les coups de cœur", href: "/experiences" },
  cards: [
    {
      title: "…",
      description: "…",
      image: { src: "/destination/<slug>/xp-<slug-of-activity>.png", alt: "…" },
      link: { label: "Découvrir", href: "/experiences/<slug-of-activity>" },
    },
    // …2 more (3 total)
  ],
}
```

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

## 7. featureCards (hotels)

Same shape as section 5 with these differences:

```tsx
{
  type: "featureCards",
  background: "bg-background-soft",
  eyebrow: "Hébergements",
  heading: "Nos hébergements",
  description: "…",
  cta: { label: "Voir tous les hébergements", href: "/hebergements" },
  cards: [
    {
      title: "<Hotel name>", // TODO: verify
      description: "…",
      image: { src: "/destination/<slug>/hotel-<hotel-slug>.png", alt: "…" },
      link: { label: "Découvrir", href: "/hebergements/<hotel-slug>" },
    },
    // …2 more (3 total)
  ],
}
```

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
3. Use it in the destination's `data.tsx`

---

## page.tsx (always identical)

```tsx
import { DestinationPage } from "@/components/destination/destination-page";
import { destination } from "./data";

export default function Page() {
  return <DestinationPage destination={destination} />;
}
```

---

## Search-index entry

In `src/components/blocks/site-search.tsx`, locate `SEARCH_GROUPS` → `Destinations` → `items`. Append:

```ts
{
  label: "<Destination name>",
  description: "<one-line teaser>",
  href: "/destination/<slug>",
  icon: MapPin,
  keywords: ["<slug>", /* 3-5 notable places or region names in lowercase, no accents */],
}
```

`MapPin` is already imported.
