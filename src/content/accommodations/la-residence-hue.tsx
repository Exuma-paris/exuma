import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "la-residence-hue",
  name: "La Résidence Hué Hotel & Spa", // TODO: verify
  blurb:
    "L'ancienne résidence du Résident supérieur français en Annam, sur les rives de la rivière des Parfums. Les salons Art déco regardent la Cité impériale, à cinq minutes à pied.", // TODO: verify facts
  keywords: [
    "vietnam",
    "hue",
    "residence coloniale",
    "riviere des parfums",
    "annam",
  ],
  heroImage: {
    src: "/destination/vietnam/hotel-la-residence-hue.png",
    alt: "Façade Art déco de La Résidence Hué Hotel & Spa au bord de la rivière des Parfums",
  },
  destinationSlugs: ["vietnam"],
  sections: [],
};
