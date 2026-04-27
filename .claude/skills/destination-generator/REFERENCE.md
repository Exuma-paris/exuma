# REFERENCE — section prop shapes

Cheat sheet consumed by `SKILL.md`. Every section in the order it appears on the Polynésie reference page.

All sections accept an optional `background?: string` (Tailwind class). Omit unless the Polynésie page passes one.

---

## 1. HeroImageGallery

- Import: `import { HeroImageGallery } from "@/components/sections/hero/image-gallery";`
- Props:
  ```ts
  {
    eyebrow?: string;
    heading: string;          // h1
    description?: string;
    cta?: React.ReactNode;    // rarely used
    images: { src: string; alt: string }[];   // 3 images, square aspect
    autoScrollInterval?: number;               // default 4000
  }
  ```
- Images: `hero-1.png`, `hero-2.png`, `hero-3.png`

Skeleton:
```tsx
<HeroImageGallery
  eyebrow="Voyage de luxe en <Destination>"
  heading="…"
  description="…"
  images={[
    { src: "/destination/<slug>/hero-1.png", alt: "…" },
    { src: "/destination/<slug>/hero-2.png", alt: "…" },
    { src: "/destination/<slug>/hero-3.png", alt: "…" },
  ]}
/>
```

---

## 2. TextColumnsSection (intro)

- Import: `import { TextColumnsSection } from "@/components/sections/text-columns";`
- Props:
  ```ts
  {
    eyebrow?: string;
    heading: string;
    cta?: { label: string; href: string };
    columns: string[];        // 3 paragraphs; \n\n supported inside a string
    background?: string;
  }
  ```

Skeleton:
```tsx
<TextColumnsSection
  background="bg-white"
  eyebrow="Découverte de <Destination>"
  heading="…"
  cta={{ label: "Créer votre voyage", href: "/reserver" }}
  columns={["…", "…", "…"]}
/>
```

---

## 3. FullImageSection

- Import: `import { FullImageSection } from "@/components/sections/full-image";`
- Props:
  ```ts
  {
    image: { src: string; alt: string };
    height?: number;   // default 600
  }
  ```
- Image: `full-image.png` (wide aerial or landscape)

Skeleton:
```tsx
<FullImageSection
  image={{ src: "/destination/<slug>/full-image.png", alt: "…" }}
  height={600}
/>
```

---

## 4. TextImagesSplitSection

- Import: `import { TextImagesSplitSection } from "@/components/sections/text-images-split";`
- Props:
  ```ts
  {
    eyebrow?: string;
    heading: string;
    paragraphs: string[];                                 // 2 paragraphs
    images: [{ src; alt }, { src; alt }];                 // exactly 2
    theme?: "light" | "dark";                             // default "light"
    background?: string;
  }
  ```
- Images: `split-1.png` (portrait 3/4), `split-2.png` (square)

Skeleton:
```tsx
<TextImagesSplitSection
  eyebrow="<Destination> — Le luxe et l'exclusif"
  heading="…"
  theme="light"
  paragraphs={["…", "…"]}
  images={[
    { src: "/destination/<slug>/split-1.png", alt: "…" },
    { src: "/destination/<slug>/split-2.png", alt: "…" },
  ]}
/>
```

---

## 5. FeatureCardsSection — Experiences

- Import: `import { FeatureCardsSection } from "@/components/sections/feature-cards";`
- Props:
  ```ts
  {
    eyebrow?: string;
    heading: string;
    description?: string;
    cta?: { label: string; href: string };
    cards: FeatureCardProps[];
    background?: string;
  }
  ```
- `FeatureCardProps`:
  ```ts
  {
    title: string;
    description: string;
    image: { src: string; alt: string };   // square
    link?: { label: string; href: string };
  }
  ```
- 3 cards. Images: `xp-<activity>.png`

Skeleton:
```tsx
<FeatureCardsSection
  background="bg-white"
  eyebrow="Expériences & activités en <Destination>"
  heading="Nos coups de cœur en <Destination>"
  description="…"
  cta={{ label: "Voir tous les coups de cœur", href: "/experiences" }}
  cards={[
    {
      title: "…",
      description: "…",
      image: { src: "/destination/<slug>/xp-<slug-of-activity>.png", alt: "…" },
      link: { label: "Découvrir", href: "/experiences/<slug-of-activity>" },
    },
    // …2 more
  ]}
/>
```

---

## 6. Cultural duo: ImageDuoSection + TextColumnsSection (wrapped)

The Polynésie page wraps these two sections in a `<div>` with Tailwind classes to collapse vertical spacing between them. Replicate the wrapper verbatim.

### 6a. ImageDuoSection

- Import: `import { ImageDuoSection } from "@/components/sections/image-duo";`
- Props:
  ```ts
  {
    left: { src: string; alt: string };    // aspect 3/2
    right: { src: string; alt: string };   // aspect 3/4
    background?: string;
  }
  ```
- Images: `ceremony.png`, `image-homme.png` (or destination-adapted subjects — e.g. for Corse: `chants-polyphonie.png`, `berger-mouflon.png`)

### 6b. TextColumnsSection — cultural coup de cœur

Same component as section 2, but without a CTA typically. 2 paragraphs.

Skeleton for the whole block:
```tsx
<div className="[&>div:first-child_section]:pb-0 [&>div:last-child_section]:pt-10">
  <ImageDuoSection
    left={{ src: "/destination/<slug>/ceremony.png", alt: "…" }}
    right={{ src: "/destination/<slug>/image-homme.png", alt: "…" }}
  />
  <TextColumnsSection
    eyebrow="Notre coup de cœur"
    heading="…"
    columns={["…", "…"]}
  />
</div>
```

---

## 7. FeatureCardsSection — Hotels

Same component as section 5 but `bg-background-soft` background. 3 hotel cards. Images: `hotel-<name>.png`.

```tsx
<FeatureCardsSection
  background="bg-background-soft"
  eyebrow="Hébergements"
  heading="Nos hébergements"
  description="…"
  cta={{ label: "Voir tous les hébergements", href: "/hebergements" }}
  cards={[
    {
      title: "<Hotel name>", // TODO: verify
      description: "…",
      image: { src: "/destination/<slug>/hotel-<hotel-slug>.png", alt: "…" },
      link: { label: "Découvrir", href: "/hebergements/<hotel-slug>" },
    },
    // …2 more
  ]}
/>
```

---

## 8. InfoGridSection (via local wrapper)

Create `src/app/destination/<slug>/info-grid.tsx` exporting `<PascalName>InfoGrid`.

- Import in the wrapper: `import { InfoGridSection } from "@/components/sections/info-grid";`
- Lucide icons: `Plane, Clock, Euro, FileText, Syringe, CalendarDays, Languages`
- Props:
  ```ts
  {
    eyebrow?: string;
    heading: string;
    description?: string;
    cta?: { label: string; href: string };
    items: { icon: React.ReactNode; title: string; description: string }[];
    background?: string;
  }
  ```
- 7 items (flight time, time zone, currency, visa, vaccine, best season, languages). All `description` strings are placeholder facts — prefix with `TODO:` inside the string where fabricated.

Skeleton:
```tsx
"use client";

import { Plane, Clock, Euro, FileText, Syringe, CalendarDays, Languages } from "lucide-react";
import { InfoGridSection } from "@/components/sections/info-grid";

export function <PascalName>InfoGrid() {
  return (
    <InfoGridSection
      background="bg-white"
      eyebrow="Ce qu'il faut savoir"
      heading="Préparer votre voyage en <Destination>"
      description="…"
      cta={{ label: "Créer votre voyage", href: "/reserver" }}
      items={[
        { icon: <Plane />, title: "Temps de vol", description: "TODO: Xh depuis Paris" },
        { icon: <Clock />, title: "Décalage horaire", description: "TODO: … avec la France" },
        { icon: <Euro />, title: "Monnaie et conversion", description: "TODO: monnaie locale" },
        { icon: <FileText />, title: "Visa et passeport", description: "TODO: formalités" },
        { icon: <Syringe />, title: "Vaccin", description: "TODO: vaccins" },
        { icon: <CalendarDays />, title: "Meilleure période", description: "TODO: mois" },
        { icon: <Languages />, title: "Langues parlées", description: "TODO: langues" },
      ]}
    />
  );
}
```

Then in `page.tsx`: `import { <PascalName>InfoGrid } from "./info-grid";` and `<<PascalName>InfoGrid />`.

---

## 9. BentoSection

- Import: `import { BentoSection } from "@/components/sections/bento";`
- Props:
  ```ts
  {
    eyebrow?: string;
    heading: string;
    description: string;    // REQUIRED (unlike most sections)
    cta?: { label: string; href: string };
    cards: {
      title: string;
      description: string;
      image: { src: string; alt: string };
      tone?: "image" | "dark";    // default "image"; first card typically "dark"
    }[];
    background?: string;
  }
  ```
- 5 cards. Images: `bento-<topic>.png`. First card `tone: "dark"`.

Skeleton:
```tsx
<BentoSection
  eyebrow="Exuma"
  heading="Voyage sur mesure en <Destination>"
  description="…"
  cta={{ label: "Créer votre voyage", href: "/reserver" }}
  cards={[
    {
      title: "Création d'itinéraires",
      description: "…",
      image: { src: "/destination/<slug>/bento-map.png", alt: "…" },
      tone: "dark",
    },
    {
      title: "Adresses confidentielles",
      description: "…",
      image: { src: "/destination/<slug>/bento-adresses.png", alt: "…" },
    },
    {
      title: "Hébergements de luxe",
      description: "…",
      image: { src: "/destination/<slug>/bento-aerien.png", alt: "…" },
    },
    {
      title: "Conciergerie 24/7",
      description: "…",
      image: { src: "/destination/<slug>/bento-conciergerie.png", alt: "…" },
    },
    {
      title: "Expériences immersives",
      description: "…",
      image: { src: "/destination/<slug>/bento-experience.png", alt: "…" },
    },
  ]}
/>
```

---

## 10. PlacesMapSection

- Import: `import { PlacesMapSection } from "@/components/sections/places-map";`
- Props:
  ```ts
  {
    eyebrow?: string;
    heading: string;
    description?: string;
    cta?: { label: string; href: string };
    places: {
      title: string;
      description: string;
      image: { src: string; alt: string };   // 80px square preview
      coordinates: { lat: number; lng: number };
    }[];
    mapStyle?: string;        // default openfreemap
    initialZoom?: number;     // default 5
    background?: string;
  }
  ```
- 6 places. Coordinates are fabricated → add `// TODO: verify coords` above each `coordinates` line.
- Images: `map-<place-slug>.png`

Skeleton:
```tsx
<PlacesMapSection
  background="bg-background-soft"
  eyebrow="Les incontournables en <Destination>"
  heading="…"
  description="…"
  cta={{ label: "Créer votre voyage", href: "/reserver" }}
  initialZoom={6}
  places={[
    {
      title: "<Place>",
      description: "…",
      image: { src: "/destination/<slug>/map-<place-slug>.png", alt: "…" },
      // TODO: verify coords
      coordinates: { lat: 0, lng: 0 },
    },
    // …5 more
  ]}
/>
```

---

## 11. TipsSection (via local wrapper)

Create `src/app/destination/<slug>/tips.tsx` exporting `<PascalName>Tips`.

- Import: `import { TipsSection } from "@/components/sections/tips";`
- Props:
  ```ts
  {
    eyebrow?: string;
    heading: string;
    description?: string;
    cta?: { label: string; href: string };
    items: {
      title: string;
      cardEyebrow?: string;
      modalEyebrow?: string;
      shortDescription?: string;
      content: React.ReactNode;     // rich JSX shown in modal
    }[];
    background?: string;
  }
  ```
- 4 items with canonical titles: *Dans ma valise*, *Santé*, *Meilleure période*, *Budget & Vie locale*. Each has a minimal `content` JSX block with 2 `<p>` + 1 `<h4>` stub.

Skeleton:
```tsx
"use client";

import { TipsSection } from "@/components/sections/tips";

export function <PascalName>Tips() {
  return (
    <TipsSection
      background="bg-background-soft"
      eyebrow="Guide pratique"
      heading="Les conseils de nos experts pour votre voyage en <Destination>"
      description="…"
      cta={{ label: "Créer votre voyage", href: "/reserver" }}
      items={[
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
        // …3 more (Santé / Meilleure période / Budget & Vie locale)
      ]}
    />
  );
}
```

---

## 12. TestimonialsSection

- Import: `import { TestimonialsSection } from "@/components/sections/testimonials";`
- Props:
  ```ts
  {
    eyebrow?: string;
    heading: string;
    cta?: { label: string; href: string };
    testimonials: {
      quote: string;
      image: { src: string; alt: string };   // portrait aspect 3/4
      name: string;
      role?: string;
    }[];
    background?: string;
  }
  ```
- 3 testimonials. Use `hero-1.png` / `hero-2.png` / `hero-3.png` as portraits (matches Polynésie's reuse pattern) — no new image files.
- **Always** mark quotes as fictional: `// TODO: replace with real testimonial` next to each `quote:`.

Skeleton:
```tsx
<TestimonialsSection
  eyebrow="Témoignages"
  heading="Ils ont vécu l'expérience Exuma"
  cta={{ label: "Créer mon voyage", href: "/reserver" }}
  testimonials={[
    {
      // TODO: replace with real testimonial
      quote: "…",
      image: { src: "/destination/<slug>/hero-1.png", alt: "Portrait" },
      name: "TODO",
      role: "TODO: contexte (Voyage de noces, octobre 2025)",
    },
    // …2 more
  ]}
/>
```

---

## 13. FaqSection

- Import: `import { FaqSection } from "@/components/sections/faq";`
- Props:
  ```ts
  {
    eyebrow?: string;
    heading: string;
    contact?: { prefix: string; label: string; href: string; suffix: string };
    items: { question: string; answer: React.ReactNode }[];
    background?: string;
  }
  ```
- 6 FAQ items. Canonical questions to cover: best season, flight duration from Paris, visa requirements, number of places to visit in 2 weeks, family-friendly, budget.

Skeleton:
```tsx
<FaqSection
  background="bg-white"
  eyebrow="FAQ"
  heading="Questions fréquentes"
  contact={{
    prefix: "Besoin d'un renseignement ? ",
    label: "Contactez votre travel designer",
    href: "/contact",
    suffix: " pour une réponse personnalisée.",
  }}
  items={[
    { question: "Quelle est la meilleure période pour partir ?", answer: "TODO: …" },
    { question: "Combien de temps dure le vol depuis Paris ?", answer: "TODO: …" },
    { question: "Faut-il un visa pour <Destination> ?", answer: "TODO: …" },
    { question: "Combien d'étapes peut-on faire en deux semaines ?", answer: "TODO: …" },
    { question: "Le voyage est-il adapté aux familles ?", answer: "TODO: …" },
    { question: "Quel budget prévoir ?", answer: "TODO: …" },
  ]}
/>
```

---

## Page skeleton

```tsx
import { Header } from "@/components/sections/header";
import { HeroImageGallery } from "@/components/sections/hero/image-gallery";
import { TextColumnsSection } from "@/components/sections/text-columns";
import { FullImageSection } from "@/components/sections/full-image";
import { TextImagesSplitSection } from "@/components/sections/text-images-split";
import { FeatureCardsSection } from "@/components/sections/feature-cards";
import { ImageDuoSection } from "@/components/sections/image-duo";
import { BentoSection } from "@/components/sections/bento";
import { PlacesMapSection } from "@/components/sections/places-map";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq";
import { <PascalName>InfoGrid } from "./info-grid";
import { <PascalName>Tips } from "./tips";

export default function <PascalName>DestinationPage() {
  return (
    <main className="flex-1">
      <div className="relative">
        <Header />
        {/* 1. Hero */}
      </div>
      {/* 2. Intro TextColumns */}
      {/* 3. FullImage */}
      {/* 4. TextImagesSplit */}
      {/* 5. Experiences FeatureCards */}
      {/* 6. Cultural duo (ImageDuo + TextColumns wrapped) */}
      {/* 7. Hotels FeatureCards */}
      {/* 8. <PascalName>InfoGrid */}
      {/* 9. Bento */}
      {/* 10. PlacesMap */}
      {/* 11. <PascalName>Tips */}
      {/* 12. Testimonials */}
      {/* 13. Faq */}
    </main>
  );
}
```

---

## Search-index entry

File: `src/components/blocks/site-search.tsx`. Locate `SEARCH_GROUPS` → `Destinations` → `items`. Append:

```ts
{
  label: "<Destination name>",
  description: "<one-line teaser>",
  href: "/destination/<slug>",
  icon: MapPin,
  keywords: ["<slug>", /* 3-5 notable places or region names in lowercase, no accents */],
}
```

`MapPin` is already imported in the file — do not re-import.
