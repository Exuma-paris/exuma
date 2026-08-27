import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "six-senses-duxton",
  name: "Six Senses Duxton, Tanjong Pagar",
  blurb:
    "Quarante-neuf chambres dans des shophouses restaurées de Duxton Hill, à Tanjong Pagar. Pas de hall démonstratif : un escalier étroit, un bar en sous-sol, la ville chinoise du dix-neuvième siècle intacte au-dehors.", // TODO: verify room count
  keywords: ["singapour", "tanjong pagar", "shophouse", "boutique", "duxton hill"],
  heroImage: {
    src: "/destination/singapour/hotel-six-senses-duxton.png",
    alt: "Façade de shophouse restaurée de l'hôtel Six Senses Duxton à Tanjong Pagar",
  },
  destinationSlugs: ["singapour"],
  sections: [],
};
