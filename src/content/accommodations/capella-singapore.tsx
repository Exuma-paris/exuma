import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "capella-singapore",
  name: "Capella Singapore, Sentosa",
  blurb:
    "L'ancien mess des officiers britanniques de Sentosa, restauré dans son architecture coloniale d'origine. C'est ici que Kim Jong-un et Donald Trump se sont rencontrés en 2018. La jungle commence à la lisière de la piscine.", // TODO: verify architect attribution
  keywords: ["singapour", "sentosa", "capella", "sommet", "colonial"],
  heroImage: {
    src: "/destination/singapour/hotel-capella-singapore.png",
    alt: "Bâtiment colonial restauré de l'hôtel Capella Singapore sur l'île de Sentosa",
  },
  destinationSlugs: ["singapour"],
  sections: [],
};
