import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "ajia-hotel",
  name: "A'jia", // TODO: verify
  blurb:
    "Une ancienne maison de bois ottomane posée au bord du Bosphore, à Kanlıca. Les volets blancs s'ouvrent sur l'eau et le bateau de la maison vous emmène vers la vieille ville quand vous le souhaitez.",
  keywords: ["turquie", "istanbul", "bosphore", "kanlica", "yali"],
  heroImage: {
    src: "/destination/turquie/hotel-ajia.png",
    alt: "Terrasse d'un yalı ottoman au bord du Bosphore à Istanbul",
  },
  destinationSlugs: ["turquie"],
  sections: [],
};
