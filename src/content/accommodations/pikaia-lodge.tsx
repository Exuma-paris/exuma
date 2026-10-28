import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "pikaia-lodge",
  name: "Pikaia Lodge", // TODO: verify
  blurb:
    "Le lodge occupe le rebord d'un cratère éteint dans les hauts de Santa Cruz, sur un domaine de trente et un hectares où vivent des tortues géantes. Son propre yacht emmène ses hôtes vers les autres îles à la journée.", // TODO: verify facts
  keywords: ["galapagos", "pikaia lodge", "santa cruz", "cratere volcanique"],
  heroImage: {
    src: "/destination/galapagos/hotel-pikaia-lodge.webp",
    alt: "Façade de verre et de bois du Pikaia Lodge sur le rebord de son cratère, Santa Cruz",
  },
  destinationSlugs: ["galapagos"],
  sections: [],
};
