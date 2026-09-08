import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "linkwasha-camp",
  name: "Linkwasha Camp",
  blurb:
    "Neuf tentes sur la plaine de Ngamo, dans une concession privée du sud-est de Hwange. Le point d'eau se regarde depuis le lit : en fin de saison sèche, les éléphants viennent boire à quelques pas, et aucun autre véhicule ne partage le terrain.", // TODO: verify (nombre de tentes)
  keywords: ["zimbabwe", "hwange", "ngamo", "elephants", "concession privee"],
  heroImage: {
    src: "/destination/zimbabwe/hotel-linkwasha.webp",
    alt: "Tente sur pilotis de Linkwasha Camp ouverte sur la plaine de Ngamo, à Hwange",
  },
  destinationSlugs: ["zimbabwe"],
  sections: [],
};
