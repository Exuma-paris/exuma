import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "royal-scotsman",
  name: "Royal Scotsman, A Belmond Train",
  blurb:
    "Un train de nuit en acajou et tartan, parti de la gare de Waverley à Édimbourg. Il roule le jour, dort à quai la nuit, et il n'y a jamais plus d'une quarantaine de passagers à bord. Le wagon d'observation est ouvert sur la voie.", // TODO: verify le nombre de passagers
  keywords: ["ecosse", "highlands", "train", "belmond", "edimbourg"],
  heroImage: {
    src: "/destination/ecosse/hotel-royal-scotsman.png",
    alt: "Wagon d'observation du Royal Scotsman ouvert sur un paysage des Highlands",
  },
  destinationSlugs: ["ecosse"],
  sections: [],
};
