import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "cheval-blanc-st-barth",
  name: "Cheval Blanc St-Barth Isle de France", // TODO: verify
  blurb:
    "La maison occupe une plage de la baie des Flamands, avec un jardin de cocotiers qui descend jusqu'au sable. Les chambres s'ouvrent de plain-pied sur la mer, le personnel devance les demandes sans jamais se montrer, et les villas de plage laissent une famille s'installer vraiment.",
  keywords: [
    "caraibes",
    "saint-barthelemy",
    "flamands",
    "cheval blanc",
    "plage privee",
  ],
  heroImage: {
    src: "/destination/caraibes/hotel-cheval-blanc.png",
    alt: "Jardin de cocotiers du Cheval Blanc St-Barth descendant vers la plage des Flamands",
  },
  destinationSlugs: ["caraibes", "saint-barthelemy"],
  sections: [],
};
