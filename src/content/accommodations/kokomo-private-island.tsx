import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "kokomo-private-island",
  name: "Kokomo Private Island Fiji",
  // TODO: verify le nombre de villas et la durée du vol en hydravion
  blurb:
    "Vingt et une villas posées sur l'île de Yaukuve, à quarante-cinq minutes d'hydravion de Nadi. Le Great Astrolabe Reef commence devant la plage, et un biologiste marin accompagne les sorties.",
  keywords: ["fidji", "kadavu", "kokomo", "great astrolabe reef", "ile privee"],
  heroImage: {
    src: "/destination/fidji/hotel-kokomo.png",
    alt: "Villa de plage de Kokomo Private Island face au Great Astrolabe Reef aux Fidji",
  },
  destinationSlugs: ["fidji"],
  sections: [],
};
