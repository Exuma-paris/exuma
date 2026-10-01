import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "our-habitas-alula",
  name: "Our Habitas AlUla",
  blurb:
    "Des villas de toile et de bois posées dans le sable, au fond du canyon d'Ashar. Les terrasses n'ont vue que sur la paroi de grès, qui monte droit derrière les tentes. Maraya est à quelques minutes de route.", // TODO: verify la hauteur de la paroi et la distance jusqu'à Maraya
  keywords: ["arabie-saoudite", "alula", "ashar", "canyon", "desert"],
  heroImage: {
    src: "/destination/arabie-saoudite/hotel-our-habitas-alula.webp",
    alt: "Villa de toile et de bois de Our Habitas AlUla, au pied des parois du canyon d'Ashar",
  },
  destinationSlugs: ["arabie-saoudite"],
  sections: [],
};
