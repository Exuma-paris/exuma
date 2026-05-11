import type { Continent } from "@/lib/content/types";

export const continent: Continent = {
  slug: "europe",
  name: "Europe",
  blurb: "Méditerranée, Atlantique, Alpes, un continent d'art de vivre.",
  keywords: ["europe", "italie", "espagne", "portugal", "grece"],
  sections: [
    {
      type: "hero",
      eyebrow: "Continent",
      heading: "Europe",
      description:
        "De la Corse à la Toscane, des îles grecques aux fjords nordiques, l'Europe d'Exuma se vit hors saison, hors foule, au plus près des artisans qui en font la richesse.",
      images: [
        {
          src: "/destination/corse/hero-1.png",
          alt: "Falaises de Bonifacio en Corse",
        },
      ],
    },
  ],
};
