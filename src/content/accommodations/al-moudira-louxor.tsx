import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "al-moudira-louxor",
  name: "Al Moudira",
  blurb:
    "Une maison bâtie dans les cannes à sucre de la rive ouest, à l'écart des quais et des bus. Zeina Aboukheir l'a construite pièce par pièce avec des éléments chinés en Égypte, coupoles, portes anciennes, fresques peintes à la main. Aucune chambre ne ressemble à la suivante.", // TODO: verify fondatrice et mode de construction
  keywords: ["egypte", "louxor", "rive ouest", "maison", "necropole thebaine"],
  heroImage: {
    src: "/destination/egypte/hotel-al-moudira.webp",
    alt: "Cour et coupoles d'Al Moudira sur la rive ouest de Louxor, Égypte",
  },
  destinationSlugs: ["egypte"],
  sections: [],
};
