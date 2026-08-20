import type { Accommodation } from "@/lib/content/types";

// TODO: verify — établissement possiblement fermé définitivement, à confirmer avant publication
export const accommodation: Accommodation = {
  slug: "shangri-la-boracay",
  name: "Shangri-La Boracay",
  blurb:
    "Une forêt suspendue au-dessus de Punta Bunga, à l'écart de l'animation de White Beach. Deux plages privées se rejoignent en funiculaire, et le récif se devine juste au large.",
  keywords: ["philippines", "boracay", "punta bunga", "white beach", "visayas"],
  heroImage: {
    src: "/destination/philippines/hotel-shangri-la-boracay.png",
    alt: "Plage privée et forêt du Shangri-La Boracay à Punta Bunga",
  },
  destinationSlugs: ["philippines"],
  sections: [],
};
