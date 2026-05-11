import type { Continent } from "@/lib/content/types";

export const continent: Continent = {
  slug: "proche-orient",
  name: "Proche & Moyen-Orient",
  blurb: "Déserts, médinas, palais, l'art d'une hospitalité ancienne.",
  keywords: [
    "proche orient",
    "moyen orient",
    "jordanie",
    "oman",
    "emirats",
    "arabie",
    "iran",
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Continent",
      heading: "Proche & Moyen-Orient",
      description:
        "Des dunes du Wadi Rum aux fjords d'Oman, des palais omanais aux souks d'Ispahan, une région où l'hospitalité est un art transmis depuis des siècles.",
      images: [
        {
          src: "/destination/polynesie/hero-1.png",
          alt: "Paysage du Proche-Orient",
        },
      ],
    },
  ],
};
