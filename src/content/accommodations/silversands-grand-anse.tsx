import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "silversands-grand-anse",
  name: "Silversands Grand Anse",
  blurb:
    "Une maison de verre, de pierre et de teck posée sur la Grand Anse, dont le bassin d'eau claire file sur cent mètres jusqu'au sable. Très peu de clefs, aucune enseigne sur la plage, et Saint-Georges qui se dessine au bout de la courbe.", // TODO: verify la longueur du bassin et le nombre de clefs
  keywords: ["la-grenade", "grand anse", "saint-georges", "silversands"],
  heroImage: {
    src: "/destination/la-grenade/hotel-silversands.png",
    alt: "Le long bassin du Silversands Grand Anse ouvert sur la plage, à la Grenade",
  },
  destinationSlugs: ["la-grenade"],
  sections: [],
};
