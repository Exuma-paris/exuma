import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "pikaia-lodge",
  name: "Pikaia Lodge", // TODO: verify
  blurb:
    "Le lodge occupe le sommet d'un ancien cône volcanique éteint, à Santa Cruz, avec une vue dégagée sur la baie. Chaque excursion part et revient en Land Rover privé, sans jamais croiser un groupe de croisiéristes.", // TODO: verify facts
  keywords: ["galapagos", "pikaia lodge", "santa cruz", "cratere volcanique"],
  heroImage: {
    src: "/destination/galapagos/hotel-pikaia-lodge.png",
    alt: "Piscine à débordement du Pikaia Lodge dominant la baie de Santa Cruz",
  },
  destinationSlugs: ["galapagos"],
  sections: [],
};
