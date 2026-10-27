import type { Accommodation } from "@/lib/content/types";

// TODO: verify — distance et temps de bateau depuis Leticia, nombre de chambres
export const accommodation: Accommodation = {
  slug: "calanoa-amazonas",
  name: "Calanoa Amazonas",
  blurb:
    "Quelques maisons de bois sur pilotis, au bord de l'Amazone, en lisière du parc national Amacayacu. On y arrive en bateau depuis Leticia. Les sorties se font avec des guides des communautés voisines, en pirogue dans la forêt inondée ou à pied sous la canopée.",
  keywords: ["colombie", "amazonie", "leticia", "amacayacu", "fleuve amazone", "lodge"],
  heroImage: {
    src: "/destination/colombie/hotel-calanoa.webp",
    alt: "Le fleuve Amazone et la forêt d'Amacayacu au lever du jour, depuis la rive colombienne",
  },
  destinationSlugs: ["colombie"],
  sections: [],
};
