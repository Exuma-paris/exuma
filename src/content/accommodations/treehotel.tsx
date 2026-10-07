import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "treehotel",
  name: "Treehotel", // TODO: verify
  // TODO: verify architects and cabin heights
  blurb:
    "Chaque chambre est signée par un architecte différent et suspendue dans la forêt de Harads. Aucune ne ressemble à la précédente.",
  keywords: [
    "suede",
    "laponie",
    "harads",
    "architecture",
    "foret",
  ],
  heroImage: {
    src: "/destination/suede/hotel-treehotel.webp",
    alt: "Suite The Oasis du Treehotel, ses murs de bois courbes et son bain chaud entre les pins de Harads",
  },
  destinationSlugs: ["suede"],
  sections: [],
};
