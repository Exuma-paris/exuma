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
    {
      type: "finalCta",
      eyebrow: "Aller plus loin",
      heading: "Dites-nous ce que vous avez en tête",
      primaryCta: { label: "Créer votre voyage", href: "/votre-projet" },
      secondaryCta: { label: "Nous écrire", href: "/nous-ecrire" },
    },
  ],
};
