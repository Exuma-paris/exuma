import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "our-habitas-alula",
  name: "Our Habitas AlUla",
  blurb:
    "Des villas posées au fond du canyon d'Ashar, face à une paroi de grès de cent mètres. La piscine est taillée au pied de la falaise et les terrasses n'ont vue que sur la roche. Maraya est à quelques minutes de route.", // TODO: verify la hauteur de la paroi et la distance jusqu'à Maraya
  keywords: ["arabie-saoudite", "alula", "ashar", "canyon", "desert"],
  heroImage: {
    src: "/destination/arabie-saoudite/hotel-our-habitas-alula.png",
    alt: "Villa et piscine de Our Habitas AlUla au pied de la paroi de grès du canyon d'Ashar",
  },
  destinationSlugs: ["arabie-saoudite"],
  sections: [],
};
