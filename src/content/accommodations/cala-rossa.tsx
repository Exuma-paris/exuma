import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "cala-rossa",
  name: "Grand Hôtel de Cala Rossa", // TODO: verify
  blurb:
    "Une villa familiale les pieds dans l'eau, jardin de pins parasols et plage privée.",
  keywords: ["cala rossa", "corse", "porto vecchio", "plage privee", "pins parasols"],
  heroImage: {
    src: "/destination/corse/hotel-cala-rossa.webp",
    alt: "Terrasse du restaurant du Grand Hôtel de Cala Rossa sous les pins, face à la baie",
  },
  destinationSlugs: ["corse"],
  sections: [],
};
