import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "dar-ahlam",
  name: "Dar Ahlam", // TODO: verify
  blurb:
    "Une kasbah restaurée dans la palmeraie de Skoura, vallée du Dadès. Pas de menu affiché, pas d'horaire fixe — chaque repas est une mise en scène improvisée dans un lieu différent de la propriété. On ne choisit pas sa table. On la découvre.",
  keywords: ["marrakech", "dar ahlam", "skoura", "kasbah", "dades"],
  heroImage: {
    src: "/destination/marrakech/hotel-dar-ahlam.png",
    alt: "Kasbah Dar Ahlam dans la palmeraie de Skoura au coucher du soleil",
  },
  destinationSlugs: ["marrakech", "maroc"],
  sections: [],
};
