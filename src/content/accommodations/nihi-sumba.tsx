import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "nihi-sumba",
  name: "NIHI Sumba",
  blurb:
    "La propriété s'étend sur deux kilomètres et demi de plage privée, sur la côte ouest de Sumba. Les villas sont construites en bois et en chaume, face à l'océan. Les chevaux sandalwood de l'île sortent sur le sable au petit matin.", // TODO: verify longueur de la plage
  keywords: ["indonesie", "sumba", "nihiwatu", "surf", "marapu"],
  heroImage: {
    src: "/destination/indonesie/hotel-nihi-sumba.webp",
    alt: "Villa de bois et de chaume au-dessus de la plage de Nihiwatu, ouest de Sumba",
  },
  destinationSlugs: ["indonesie"],
  sections: [],
};
