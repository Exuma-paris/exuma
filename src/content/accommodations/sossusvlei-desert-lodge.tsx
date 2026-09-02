import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "sossusvlei-desert-lodge",
  name: "andBeyond Sossusvlei Desert Lodge",
  blurb:
    "Dix suites de pierre et de verre posées dans la réserve du NamibRand, première réserve internationale de ciel étoilé d'Afrique. Une verrière s'ouvre au-dessus du lit et un télescope attend sur la terrasse. La lumière artificielle la plus proche est à des dizaines de kilomètres.", // TODO: verify nombre de suites
  keywords: ["namibie", "sossusvlei", "namibrand", "namib", "ciel etoile"],
  heroImage: {
    src: "/destination/namibie/hotel-sossusvlei-desert-lodge.webp",
    alt: "Suites de pierre et de verre du Sossusvlei Desert Lodge posées dans les plaines du NamibRand",
  },
  destinationSlugs: ["namibie"],
  sections: [],
};
