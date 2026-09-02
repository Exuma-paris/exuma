import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "aman-new-york",
  name: "Aman New York",
  blurb:
    "Chaque chambre a sa cheminée et sa terrasse plantée, ce qui ne se trouve nulle part ailleurs à Manhattan. Le cœur de la maison est un jardin intérieur suspendu au-dessus de la ville, et le spa occupe trois niveaux entiers.", // TODO: verify la cheminée dans chaque chambre et les trois niveaux de spa
  keywords: ["new-york", "manhattan", "cinquieme-avenue", "midtown", "aman"],
  heroImage: {
    src: "/destination/new-york/hotel-aman.webp",
    alt: "Jardin intérieur et cheminée de l'Aman New York, suspendus au-dessus de Manhattan",
  },
  destinationSlugs: ["new-york"],
  sections: [],
};
