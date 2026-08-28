import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "villa-sheherezade",
  // TODO: verify — disponibilité à la location à reconfirmer
  name: "Villa Sheherezade",
  blurb:
    "À dix minutes des remparts de Dubrovnik, la villa aligne plusieurs chambres autour d'une piscine à débordement face à la mer. Le personnel vient avec la maison, cuisinier compris.", // TODO: verify room count and staff details
  keywords: ["croatie", "dubrovnik", "villa-privee", "piscine", "famille"],
  heroImage: {
    src: "/destination/croatie/hotel-villa-sheherezade.png",
    alt: "Villa Sheherezade et sa piscine à débordement près de Dubrovnik",
  },
  destinationSlugs: ["croatie"],
  sections: [],
};
