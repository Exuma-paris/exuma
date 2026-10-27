import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "jumby-bay-island",
  name: "Jumby Bay Island", // TODO: verify
  blurb:
    "Une île entière à cinq minutes de navette du continent, sans une seule voiture. On y arrive par bateau et on n'entend plus rien de l'île voisine.",
  keywords: ["antigua", "jumby bay", "ile privee", "famille"],
  heroImage: {
    src: "/destination/antigua/hotel-jumby-bay.webp",
    alt: "Villa et piscine au bord de l'eau sur l'île privée de Jumby Bay, vue du ciel, Antigua",
  },
  destinationSlugs: ["antigua"],
  sections: [],
};
