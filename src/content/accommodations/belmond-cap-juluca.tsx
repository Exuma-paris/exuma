import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "belmond-cap-juluca",
  name: "Belmond Cap Juluca", // TODO: verify
  blurb:
    "Les maisons blanches suivent la courbe de Maundays Bay, basses et espacées, posées sur un sable très clair. On y marche longtemps le matin sans rencontrer personne, et la mer reste calme presque toute la journée.",
  keywords: [
    "caraibes",
    "anguilla",
    "maundays bay",
    "belmond",
    "plage blanche",
  ],
  heroImage: {
    src: "/destination/caraibes/hotel-cap-juluca.png",
    alt: "Maisons blanches du Belmond Cap Juluca le long de la plage de Maundays Bay à Anguilla",
  },
  destinationSlugs: ["caraibes"],
  sections: [],
};
