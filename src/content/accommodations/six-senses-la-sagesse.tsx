import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "six-senses-la-sagesse",
  name: "Six Senses La Sagesse",
  blurb:
    "La baie de La Sagesse, sur la côte au vent, n'accueillait rien avant 2024 : deux plages, une palmeraie, et des villas qui suivent la pente jusqu'à l'eau. On y vient pour des séjours longs, où les journées se vident d'elles-mêmes.", // TODO: verify l'année d'ouverture
  keywords: ["la-grenade", "la sagesse", "six senses", "cote au vent"],
  heroImage: {
    src: "/destination/la-grenade/hotel-six-senses-la-sagesse.png",
    alt: "La baie de La Sagesse et ses villas descendant vers la plage, à la Grenade",
  },
  destinationSlugs: ["la-grenade"],
  sections: [],
};
