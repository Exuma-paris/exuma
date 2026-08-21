import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "belmond-sanctuary-lodge",
  name: "Belmond Sanctuary Lodge, Machu Picchu", // TODO: verify
  blurb:
    "Le seul hôtel aux portes du Machu Picchu. On y franchit les grilles dès l'ouverture, avant les premiers trains venus d'Aguas Calientes.",
  keywords: ["perou", "machu picchu", "sanctuary lodge", "belmond"],
  heroImage: {
    src: "/destination/perou/hotel-sanctuary-lodge.png",
    alt: "Façade du Belmond Sanctuary Lodge aux portes du Machu Picchu",
  },
  destinationSlugs: ["perou"],
  sections: [],
};
