import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "belmond-sanctuary-lodge",
  name: "Belmond Sanctuary Lodge, Machu Picchu", // TODO: verify
  blurb:
    "Le seul hôtel aux portes du Machu Picchu. On rejoint l'entrée à pied dès l'ouverture, avant l'arrivée des premières navettes d'Aguas Calientes, et l'on retrouve le soir une citadelle rendue au silence.",
  keywords: ["perou", "machu picchu", "sanctuary lodge", "belmond"],
  heroImage: {
    src: "/destination/perou/hotel-sanctuary-lodge.webp",
    alt: "Voyageuse dans le bain chaud d'une terrasse du Sanctuary Lodge, face au Huayna Picchu",
  },
  destinationSlugs: ["perou"],
  sections: [],
};
