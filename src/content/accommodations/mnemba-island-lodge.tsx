import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "mnemba-island-lodge",
  name: "Mnemba Island Lodge", // TODO: verify
  blurb:
    "Un îlot privé posé au large de Matemwe, que l'on fait entièrement le tour à pied avant le petit déjeuner. Les bandas de bois et de palme ouvrent sur la plage, la réserve marine commence au bord de l'eau, et l'on ne croise jamais que les autres invités.",
  keywords: ["zanzibar", "mnemba", "ile privee", "matemwe", "recif", "andbeyond"],
  heroImage: {
    src: "/destination/zanzibar/hotel-mnemba.webp",
    alt: "Banda de plage et palmiers de l'île privée de Mnemba, au large de Zanzibar",
  },
  destinationSlugs: ["zanzibar"],
  sections: [],
};
