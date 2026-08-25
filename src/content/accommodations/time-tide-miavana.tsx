import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "time-tide-miavana",
  name: "Time + Tide Miavana",
  blurb:
    "Quatorze villas sur Nosy Ankao, une île du nord-est que l'on rejoint en hélicoptère. Chaque villa a sa piscine et son équipe. La barrière de corail commence à la sortie de la plage.", // TODO: verify le nombre de villas
  keywords: ["madagascar", "nosy ankao", "ile privee", "helicoptere", "nord"],
  heroImage: {
    src: "/destination/madagascar/hotel-miavana.png",
    alt: "Villa de Time + Tide Miavana ouverte sur le lagon de Nosy Ankao",
  },
  destinationSlugs: ["madagascar"],
  sections: [],
};
