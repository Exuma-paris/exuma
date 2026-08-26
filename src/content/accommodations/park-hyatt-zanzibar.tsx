import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "park-hyatt-zanzibar",
  name: "Park Hyatt Zanzibar", // TODO: verify
  blurb:
    "Le Mambo Msiige, ancienne demeure omanaise, tient le front de mer de Stone Town depuis des générations. On prend le petit déjeuner face aux boutres, et la vieille ville commence au bout de la rue.",
  keywords: ["zanzibar", "stone town", "mambo msiige", "front de mer", "patrimoine"],
  heroImage: {
    src: "/destination/zanzibar/hotel-park-hyatt.png",
    alt: "Façade blanche du Mambo Msiige sur le front de mer de Stone Town, Zanzibar",
  },
  destinationSlugs: ["zanzibar"],
  sections: [],
};
