import type { Experience } from "@/lib/content/types";

export const experience: Experience = {
  slug: "remparts-kotor-aube",
  name: "Ascension des remparts de Kotor avant l'ouverture",
  blurb:
    "Avant l'ouverture, on grimpe seul les 1 350 marches de la forteresse Saint-Jean. La baie de Kotor se découvre par paliers, jusqu'à ce que la vieille ville entière tienne dans un seul cadre.", // TODO: verify step count
  keywords: ["montenegro", "kotor", "remparts", "forteresse-saint-jean", "aube"],
  heroImage: {
    src: "/destination/montenegro/xp-remparts-kotor.webp",
    alt: "Escalier des remparts au-dessus des toits de Kotor et de la baie",
  },
  destinationSlugs: ["montenegro"],
  sections: [],
};
