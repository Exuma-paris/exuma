import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "zannier-sonop",
  name: "Zannier Sonop",
  blurb:
    "Dix tentes montées sur des blocs de granit du Karas, à cinquante mètres au-dessus du Kalahari. Le décor rejoue une expédition des années vingt : malles de cuir, gramophone, billard sous la toile. On dîne à la lampe, sans autre lumière à l'horizon.", // TODO: verify nombre de tentes et hauteur des blocs
  keywords: ["namibie", "kalahari", "karas", "sonop", "zannier"],
  heroImage: {
    src: "/destination/namibie/hotel-sonop.webp",
    alt: "Tente du Zannier Sonop posée sur des blocs de granit au-dessus du Kalahari, Namibie",
  },
  destinationSlugs: ["namibie"],
  sections: [],
};
