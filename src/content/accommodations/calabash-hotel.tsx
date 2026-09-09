import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "calabash-hotel",
  name: "Calabash Hotel",
  blurb:
    "Trente suites basses réparties dans un jardin de L'Anse aux Épines, avec une plage privée au bout de la pelouse. Le petit déjeuner est préparé et servi sur la véranda de chaque suite, par la personne qui s'occupe d'elle toute la semaine.", // TODO: verify le nombre de suites
  keywords: ["la-grenade", "anse aux epines", "calabash", "prickly bay"],
  heroImage: {
    src: "/destination/la-grenade/hotel-calabash.png",
    alt: "Véranda d'une suite du Calabash Hotel ouverte sur le jardin, à la Grenade",
  },
  destinationSlugs: ["la-grenade"],
  sections: [],
};
