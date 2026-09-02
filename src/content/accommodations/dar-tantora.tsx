import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "dar-tantora",
  name: "Dar Tantora The House Hotel",
  blurb:
    "Une trentaine de maisons de terre de la vieille ville d'AlUla, relevées une à une avec les techniques et les matériaux d'origine. Il n'y a pas de lumière électrique dans les chambres : le soir, on s'éclaire à la bougie.", // TODO: verify le nombre de maisons restaurées
  keywords: ["arabie-saoudite", "alula", "vieille-ville", "terre-crue", "oasis"],
  heroImage: {
    src: "/destination/arabie-saoudite/hotel-dar-tantora.webp",
    alt: "Bassin et lanternes du Dar Tantora au crépuscule, ouvert sur l'oasis d'AlUla",
  },
  destinationSlugs: ["arabie-saoudite"],
  sections: [],
};
