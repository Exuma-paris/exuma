import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "dar-ahlam",
  name: "Dar Ahlam", // TODO: verify
  blurb:
    "Une kasbah restaurée dans la palmeraie de Skoura, vallée du Dadès. Pas de menu affiché, pas d'horaire fixe : chaque repas est une mise en scène improvisée dans un lieu différent de la propriété. On ne choisit pas sa table. On la découvre.",
  keywords: ["marrakech", "dar ahlam", "skoura", "kasbah", "dades"],
  heroImage: {
    src: "/destination/marrakech/hotel-dar-ahlam.webp",
    alt: "Kasbah Dar Ahlam et son bassin dans la palmeraie de Skoura",
  },
  destinationSlugs: ["marrakech", "maroc"],
  sections: [],
};
