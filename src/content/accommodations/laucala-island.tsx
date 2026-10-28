import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "laucala-island",
  name: "Laucala Island",
  // TODO: verify le nombre de villas, la surface de l'île et celle de la ferme
  blurb:
    "Douze kilomètres carrés au large de Taveuni, vingt-cinq villas, et une ferme qui fournit la table du matin au soir. Seuls les hôtes y débarquent, et l'on peut aussi privatiser l'île entière.",
  keywords: ["fidji", "taveuni", "laucala", "ile privee", "vanua levu"],
  heroImage: {
    src: "/destination/fidji/hotel-laucala.webp",
    alt: "Piscine de Laucala Island vue du ciel, entre rochers de lave et cocotiers, au large de Taveuni",
  },
  destinationSlugs: ["fidji"],
  sections: [],
};
