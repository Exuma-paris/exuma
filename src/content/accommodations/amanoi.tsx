import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "amanoi",
  name: "Amanoi, baie de Vinh Hy", // TODO: verify
  blurb:
    "Un vallon de savane sèche dans le parc national de Nui Chua, à l'écart de toute route côtière. Depuis les pavillons, la baie de Vinh Hy n'apparaît qu'au détour d'un sentier.", // TODO: verify facts
  keywords: ["vietnam", "amanoi", "ninh thuan", "parc national", "vinh hy"],
  heroImage: {
    src: "/destination/vietnam/hotel-amanoi.png",
    alt: "Vue aérienne des pavillons d'Amanoi dans le parc national de Nui Chua",
  },
  destinationSlugs: ["vietnam"],
  sections: [],
};
