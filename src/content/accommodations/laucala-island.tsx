import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "laucala-island",
  name: "Laucala Island",
  // TODO: verify le nombre de villas, la surface de l'île et celle de la ferme
  blurb:
    "Douze kilomètres carrés au large de Taveuni, vingt-cinq villas, et une ferme qui fournit la table du matin au soir. L'île se réserve en entier, et personne d'autre n'y débarque.",
  keywords: ["fidji", "taveuni", "laucala", "ile privee", "vanua levu"],
  heroImage: {
    src: "/destination/fidji/hotel-laucala.png",
    alt: "Villa de Laucala Island au bord du lagon, au large de Taveuni aux Fidji",
  },
  destinationSlugs: ["fidji"],
  sections: [],
};
