import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "ecoventura-theory",
  name: "Theory", // TODO: verify
  blurb:
    "Le yacht d'Ecoventura, membre de Relais & Châteaux, reçoit vingt passagers, avec un guide naturaliste pour dix voyageurs. Les navigations de nuit rejoignent les sites les plus reculés sans perdre une heure de jour.", // TODO: verify facts
  keywords: ["galapagos", "theory", "ecoventura", "yacht", "expedition"],
  heroImage: {
    src: "/destination/galapagos/hotel-theory.webp",
    alt: "Pont soleil du Theory avec ses lits de jour rayés et sa table face à l'océan",
  },
  destinationSlugs: ["galapagos"],
  sections: [],
};
