import type { Continent } from "@/lib/content/types";

export const continent: Continent = {
  slug: "caraibes",
  name: "Caraïbes",
  blurb: "Un chapelet d'îles où la journée se décide au matin.",
  keywords: [
    "caraibes",
    "antilles",
    "saint-barthelemy",
    "anguilla",
    "mustique",
    "grenadines",
    "sainte-lucie",
    "grenade",
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Continent",
      heading: "Caraïbes",
      description:
        "De Saint-Barthélemy aux Grenadines, les Caraïbes d'Exuma sont un archipel que l'on parcourt par la mer, en laissant à chaque île le temps de se faire aimer.",
      images: [
        {
          src: "/destination/caraibes/hero-1.png",
          alt: "Mouillage dans les Grenadines, voilier sur une eau turquoise",
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
