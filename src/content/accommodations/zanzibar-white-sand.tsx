import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "zanzibar-white-sand",
  name: "Zanzibar White Sand Luxury Villas & Spa", // TODO: verify
  blurb:
    "Des villas indépendantes sur la plage de Paje, chacune avec son jardin, sa piscine et son équipe. Le lagon se retire le matin et laisse un plateau de sable clair, puis le vent se lève et les voiles de kitesurf apparaissent au large.",
  keywords: ["zanzibar", "paje", "villa privee", "piscine", "famille", "kitesurf"],
  heroImage: {
    src: "/destination/zanzibar/hotel-white-sand.webp",
    alt: "Villa avec piscine privée ouverte sur la plage de Paje, côte sud-est de Zanzibar",
  },
  destinationSlugs: ["zanzibar"],
  sections: [],
};
