import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "umi-hotel",
  name: "Umi Hotel",
  blurb:
    "Une maison basse posée dans un champ de lave, le long de la route qui suit la côte sud. Les chambres ouvrent sur le glacier de l'Eyjafjallajökull et sur la plaine. La cascade de Seljalandsfoss est à dix minutes de voiture.", // TODO: verify distance exacte à Seljalandsfoss
  keywords: ["islande", "hvolsvollur", "cote sud", "eyjafjallajokull", "umi"],
  heroImage: {
    src: "/destination/islande/hotel-umi.webp",
    alt: "Façade vitrée de l'Umi Hotel dans un champ de lave de la côte sud islandaise",
  },
  destinationSlugs: ["islande"],
  sections: [],
};
