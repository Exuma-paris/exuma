import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "aqua-mare",
  name: "Aqua Mare", // TODO: verify
  blurb:
    "Le yacht d'Aqua Expeditions embarque seize passagers dans neuf suites design. Le pont supérieur reste ouvert toute la nuit, sans lumière artificielle, pour observer le ciel au large de Fernandina.", // TODO: verify facts
  keywords: ["galapagos", "aqua mare", "yacht", "aqua expeditions", "croisiere"],
  heroImage: {
    src: "/destination/galapagos/hotel-aqua-mare.png",
    alt: "Yacht Aqua Mare mouillé au large d'une île des Galápagos",
  },
  destinationSlugs: ["galapagos"],
  sections: [],
};
