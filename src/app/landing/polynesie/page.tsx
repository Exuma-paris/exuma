import type { Metadata } from "next";
import { renderSection } from "@/components/destination/render-section";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import type { DiscoverItem } from "@/components/sections/hero/discover-modal";
import {
  accommodations,
  destinations,
  experiences,
} from "@/lib/content/registry";
import type { Section } from "@/lib/content/types";

function deriveDiscoverItems(destinationSlug: string): DiscoverItem[] {
  const destination = destinations[destinationSlug];
  if (!destination) return [];

  const places: DiscoverItem[] = [];
  const hotels: DiscoverItem[] = [];
  const exps: DiscoverItem[] = [];

  const placesSection = destination.sections.find(
    (s) => s.type === "placesMap",
  );
  if (placesSection && placesSection.type === "placesMap") {
    for (const place of placesSection.places) {
      places.push({
        id: `place-${place.title}`,
        category: "ile",
        eyebrow: "DESTINATION",
        title: place.title,
        description: place.description,
        image: place.image,
        imageRatio: "3x4",
      });
    }
  }

  const hotelSection = destination.sections.find(
    (s) => s.type === "entityList" && s.kind === "accommodation",
  );
  if (hotelSection && hotelSection.type === "entityList") {
    for (const slug of hotelSection.slugs) {
      const acc = accommodations[slug];
      if (!acc?.heroImage) continue;
      hotels.push({
        id: `hotel-${slug}`,
        category: "hotel",
        eyebrow: "HOTELS",
        title: acc.name,
        description: typeof acc.blurb === "string" ? acc.blurb : "",
        image: acc.heroImage,
        imageRatio: "1x1",
        cta: { label: "Créez votre voyage", href: "/reserver" },
      });
    }
  }

  const expSection = destination.sections.find(
    (s) => s.type === "entityList" && s.kind === "experience",
  );
  if (expSection && expSection.type === "entityList") {
    for (const slug of expSection.slugs) {
      const exp = experiences[slug];
      if (!exp?.heroImage) continue;
      exps.push({
        id: `exp-${slug}`,
        category: "experience",
        eyebrow: "ACTIVITÉS",
        title: exp.name,
        description: typeof exp.blurb === "string" ? exp.blurb : "",
        image: exp.heroImage,
        imageRatio: "16x9",
        cta: { label: "Créez votre voyage", href: "/reserver" },
      });
    }
  }

  // Round-robin interleave so consecutive items have different ratios.
  // First 3 positions become [3x4, 1x1, 16x9] — one per column on desktop.
  const buckets = [places, hotels, exps];
  const interleaved: DiscoverItem[] = [];
  let cursor = 0;
  while (buckets.some((b) => cursor < b.length)) {
    for (const b of buckets) {
      if (cursor < b.length) interleaved.push(b[cursor]);
    }
    cursor++;
  }
  return interleaved;
}

export const metadata: Metadata = {
  title: "Voyage de luxe en Polynésie",
  description:
    "Créateur de voyages d'exception façonnés selon vos aspirations, entre atolls préservés et adresses confidentielles de Polynésie.",
  alternates: { canonical: "/landing/polynesie" },
};

const sections: Section[] = [
  {
    type: "heroLanding",
    eyebrow: "Voyage de luxe en Polynésie",
    heading: "Vivez l'inaccessible",
    description:
      "Créateur de voyages d'exception façonnés selon vos aspirations, entre atolls préservés et adresses confidentielles de Polynésie.",
    cta: { label: "Créez votre voyage", href: "/reserver" },
    // TODO: verify rating numbers
    rating: { score: 4.9, label: "247 voyages créés en 2025" },
    features: defaultSpotlightFeatures,
    contactCta: {
      label: "Contactez-nous",
      href: "/landing/polynesie/contact",
      // TODO: replace with /collaborateurs/stephane.jpg when available on disk
      avatar: {
        src: "/destination/polynesie/hero-1.png",
        alt: "Stéphane, votre travel designer",
      },
      statusOnline: true,
    },
    floatingCta: { label: "Découvrir la Polynésie", href: "/destinations/polynesie" },
    discover: {
      title: "Découvrir la Polynésie",
      bottomCta: { label: "Créez votre voyage", href: "/reserver" },
      items: deriveDiscoverItems("polynesie"),
    },
    slides: [
      {
        image: {
          src: "/destination/polynesie/hero-1.png",
          alt: "Plage de sable blanc bordée de cocotiers en Polynésie française",
        },
      },
      {
        image: {
          src: "/destination/polynesie/hero-2.png",
          alt: "Bungalows sur pilotis face au mont Otemanu à Bora Bora",
        },
      },
      {
        image: {
          src: "/destination/polynesie/hero-3.png",
          alt: "Lagon de Fakarava vu du ciel, archipel des Tuamotu",
        },
      },
      {
        image: {
          src: "/destination/polynesie/full-image.png",
          alt: "Vue panoramique d'un atoll polynésien",
        },
      },
    ],
  },
];

export default function Page() {
  return (
    <main className="flex-1">
      {sections.map((section, i) => renderSection(section, String(i)))}
    </main>
  );
}
