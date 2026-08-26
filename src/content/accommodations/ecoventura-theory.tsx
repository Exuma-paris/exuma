import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "ecoventura-theory",
  name: "Theory", // TODO: verify
  blurb:
    "Le yacht d'Ecoventura reçoit vingt passagers sur trois ponts, avec un ratio d'un guide naturaliste pour dix voyageurs. Les navigations de nuit rejoignent les sites les plus reculés sans perdre une heure de jour.", // TODO: verify facts
  keywords: ["galapagos", "theory", "ecoventura", "yacht", "expedition"],
  heroImage: {
    src: "/destination/galapagos/hotel-theory.png",
    alt: "Yacht Theory d'Ecoventura naviguant entre deux îles des Galápagos",
  },
  destinationSlugs: ["galapagos"],
  sections: [],
};
