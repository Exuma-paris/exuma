import type { Experience } from "@/lib/content/types";

export const experience: Experience = {
  slug: "echappee-skeleton-coast",
  name: "Échappée sauvage jusqu'à la Skeleton Coast",
  blurb:
    "Le départ se fait à l'aube, en avion léger, puis en 4x4 par la vallée de la Hoanib et la source de Klein Oase. Sur la côte, les épaves, les colonies d'otaries et les dunes qui butent sur l'Atlantique. Déjeuner entre mer et désert, retour par les airs.", // TODO: verify le nom exact de la source (Klein Oase)
  keywords: [
    "namibie",
    "skeleton coast",
    "hoanib",
    "kaokoland",
    "avion leger",
  ],
  heroImage: {
    src: "/destination/namibie/xp-skeleton-coast.webp",
    alt: "Épave échouée et colonie d'otaries sur le sable de la Skeleton Coast, Namibie",
  },
  destinationSlugs: ["namibie"],
  sections: [],
};
