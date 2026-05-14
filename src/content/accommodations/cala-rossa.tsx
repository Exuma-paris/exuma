import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "cala-rossa",
  name: "Grand Hôtel de Cala Rossa", // TODO: verify
  blurb:
    "Une villa familiale les pieds dans l'eau, jardin de pins parasols et plage privée.",
  keywords: ["cala rossa", "corse", "porto vecchio", "plage privee", "pins parasols"],
  heroImage: {
    src: "/destination/corse/hotel-cala-rossa.png",
    alt: "Plage privée et pins parasols du Grand Hôtel de Cala Rossa",
  },
  destinationSlugs: ["corse"],
  sections: [],
};
