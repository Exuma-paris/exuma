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
    src: "/destination/suede/hotel-treehotel.png",
    alt: "Cabane d'architecte suspendue dans les arbres au Treehotel de Harads",
  },
  destinationSlugs: ["suede"],
  sections: [],
};
