import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "fabriken-furillen",
  name: "Fabriken Furillen", // TODO: verify
  // TODO: verify property details
  blurb:
    "Une ancienne usine de calcaire réhabilitée sur la péninsule de Furillen, à Gotland, gardée volontairement à l'état brut. On y dort dans un décor minéral, sans vis-à-vis, à quelques mètres de la Baltique.",
  keywords: [
    "suede",
    "gotland",
    "furillen",
    "design",
    "baltique",
  ],
  heroImage: {
    src: "/destination/suede/hotel-fabriken-furillen.png",
    alt: "Ancienne usine de calcaire réhabilitée en hôtel sur la péninsule de Furillen, Gotland",
  },
  destinationSlugs: ["suede"],
  sections: [],
};
