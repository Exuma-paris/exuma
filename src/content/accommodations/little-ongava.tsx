import type { Accommodation } from "@/lib/content/types";

// TODO: verify — nombre de suites et piscines privées
export const accommodation: Accommodation = {
  slug: "little-ongava",
  name: "Little Ongava",
  blurb:
    "Trois suites seulement, au sommet d'une colline de la réserve d'Ongava, contre la frontière sud d'Etosha. Chacune a sa piscine et regarde le point d'eau en contrebas. Le matin, les pisteurs partent d'ici, à pied, sur la trace des rhinocéros blancs.",
  keywords: ["namibie", "ongava", "etosha", "rhinocéros", "lodge", "wilderness"],
  heroImage: {
    src: "/destination/namibie/hotel-little-ongava.webp",
    alt: "Suite au toit de chaume de Little Ongava, terrasse et piscine privée accrochées à la colline, Namibie",
  },
  destinationSlugs: ["namibie"],
  sections: [],
};
