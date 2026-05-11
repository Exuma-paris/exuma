import type { Continent } from "@/lib/content/types";

export const continent: Continent = {
  slug: "asie",
  name: "Asie",
  blurb: "Du Japon aux Maldives, des cultures qui se livrent par initiation.",
  keywords: ["asie", "japon", "chine", "vietnam", "bali", "maldives"],
  sections: [
    {
      type: "hero",
      eyebrow: "Continent",
      heading: "Asie",
      description:
        "Une mosaïque de civilisations vivantes, temples confidentiels, ryokans isolés, traversées en jonque privée. L'Asie d'Exuma se découvre par la rencontre.",
      images: [
        {
          src: "/destination/polynesie/hero-1.png",
          alt: "Paysage asiatique",
        },
      ],
    },
  ],
};
