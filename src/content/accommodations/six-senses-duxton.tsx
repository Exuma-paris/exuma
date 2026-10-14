import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "six-senses-duxton",
  name: "Six Senses Duxton, Tanjong Pagar",
  blurb:
    "Quarante-neuf chambres dans des shophouses restaurées de Duxton Hill, à Tanjong Pagar. Pas de hall démonstratif : un escalier étroit, un bar en sous-sol, la ville chinoise du dix-neuvième siècle intacte au-dehors.", // TODO: verify room count
  keywords: ["singapour", "tanjong pagar", "shophouse", "boutique", "duxton hill"],
  heroImage: {
    src: "/destination/singapour/hotel-six-senses-duxton.webp",
    alt: "Chambre à baldaquin noir et or du Six Senses Duxton, dessinée par Anouska Hempel, Singapour",
  },
  destinationSlugs: ["singapour"],
  sections: [],
};
