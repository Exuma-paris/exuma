import type { Continent } from "@/lib/content/types";

export const continent: Continent = {
  slug: "ameriques",
  name: "Amériques",
  blurb: "De la Patagonie aux Rocheuses, des grands espaces à l'état pur.",
  keywords: [
    "ameriques",
    "argentine",
    "chili",
    "perou",
    "etats-unis",
    "canada",
    "mexique",
    "bresil",
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Continent",
      heading: "Amériques",
      description:
        "De la cordillère des Andes aux Rocheuses canadiennes, des cités mayas à l'Amazonie, les Amériques d'Exuma sont un terrain d'exploration pour ceux qui aiment l'horizon vaste.",
      images: [
        {
          src: "/destination/polynesie/hero-1.png",
          alt: "Paysage des Amériques",
        },
      ],
    },
  ],
};
