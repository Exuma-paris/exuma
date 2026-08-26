import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "arctic-bath",
  name: "Arctic Bath", // TODO: verify
  // TODO: verify room count
  blurb:
    "Posé sur la rivière Lule, ce spa flottant ne compte qu'une douzaine de chambres, la moitié sur l'eau, la moitié sur la rive. On y entre dans un bain glacé avant l'aube, sans un bruit autre que le courant.",
  keywords: [
    "suede",
    "laponie",
    "harads",
    "spa",
    "lule",
  ],
  heroImage: {
    src: "/destination/suede/hotel-arctic-bath.png",
    alt: "Spa flottant Arctic Bath sur la rivière Lule en Laponie suédoise",
  },
  destinationSlugs: ["suede"],
  sections: [],
};
