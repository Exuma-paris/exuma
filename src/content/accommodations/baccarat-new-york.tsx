import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "baccarat-new-york",
  name: "Baccarat Hotel New York",
  blurb:
    "La maison de cristal a bâti son propre hôtel : on y boit dans ses verres, sous ses lustres, dans un salon qui en compte des milliers. Les chambres regardent le jardin du Museum of Modern Art.", // TODO: verify le nombre de pièces de cristal du salon
  keywords: ["new-york", "manhattan", "midtown", "baccarat", "cristal"],
  heroImage: {
    src: "/destination/new-york/hotel-baccarat.webp",
    alt: "Le bar du Baccarat Hotel New York, son lustre de cristal et son mur de bouteilles",
  },
  destinationSlugs: ["new-york"],
  sections: [],
};
