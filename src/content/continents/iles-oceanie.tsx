import type { Continent } from "@/lib/content/types";

export const continent: Continent = {
  slug: "iles-oceanie",
  name: "Îles & Océanie",
  blurb: "Polynésie, Fidji, Australie, des archipels qui imposent le silence.",
  keywords: [
    "iles",
    "oceanie",
    "polynesie",
    "fidji",
    "australie",
    "nouvelle-zelande",
    "pacifique",
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Continent",
      heading: "Îles & Océanie",
      description:
        "Des motus polynésiens aux fjords de Nouvelle-Zélande, des récifs des Fidji à l'outback australien, une géographie qui se savoure lentement.",
      images: [
        {
          src: "/destination/polynesie/hero-1.png",
          alt: "Atoll polynésien",
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
