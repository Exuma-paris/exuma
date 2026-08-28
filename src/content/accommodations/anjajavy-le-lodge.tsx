import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "anjajavy-le-lodge",
  name: "Anjajavy le Lodge",
  blurb:
    "Vingt-cinq cases de bois sur une presqu'île de la côte ouest, entre la forêt sèche et le canal du Mozambique. Les sifakas passent dans les arbres au-dessus des terrasses, chaque matin.", // TODO: verify le nombre de cases
  keywords: ["madagascar", "anjajavy", "cote ouest", "sifaka", "foret seche"],
  heroImage: {
    src: "/destination/madagascar/hotel-anjajavy.webp",
    alt: "Case en bois d'Anjajavy le Lodge entre la forêt sèche et la plage, côte ouest de Madagascar",
  },
  destinationSlugs: ["madagascar"],
  sections: [],
};
