import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "chable-yucatan",
  name: "Chablé Yucatán", // TODO: verify
  blurb:
    "Une ancienne hacienda du Yucatán, restaurée autour d'un cénote que les Mayas tenaient pour sacré. Le spa descend dans la roche jusqu'au niveau de l'eau. Les villas se dispersent sous la forêt, à l'écart de Mérida.",
  keywords: ["mexique", "yucatan", "chable", "hacienda", "cenote", "merida"],
  heroImage: {
    src: "/destination/mexique/hotel-chable.webp",
    alt: "Cour du Chablé Yucatán bordée de parasols et d'un bassin",
  },
  destinationSlugs: ["mexique"],
  sections: [],
};
