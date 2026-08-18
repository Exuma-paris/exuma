import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "nantipa",
  name: "Nantipa, A Tico Beach Experience", // TODO: verify nom commercial exact
  blurb:
    "Des casitas de bois posées en retrait de Playa Carmen, à Santa Teresa. La plage se rejoint pieds nus depuis la terrasse, et les planches de surf attendent au pied des marches. L'adresse tient en une vingtaine d'unités.", // TODO: verify nombre de casitas et implantation exacte
  keywords: ["costa-rica", "santa teresa", "playa carmen", "nicoya", "surf"],
  heroImage: {
    src: "/destination/costa-rica/hotel-nantipa.webp",
    alt: "Casita de bois du Nantipa ouverte sur la plage de Santa Teresa au coucher du soleil",
  },
  destinationSlugs: ["costa-rica"],
  sections: [],
};
