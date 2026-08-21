import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "hacienda-san-jose",
  name: "Hacienda San José, Quindío", // TODO: verify
  blurb:
    "Une hacienda caféière du XIXe siècle, toujours en activité, au pied de la cordillère centrale. On dort dans les anciennes chambres des propriétaires, et le café du petit-déjeuner vient des rangs visibles depuis la terrasse.",
  keywords: ["colombie", "quindio", "hacienda", "cafe", "zone cafeiere"],
  heroImage: {
    src: "/destination/colombie/hotel-hacienda-san-jose.png",
    alt: "Façade coloniale de l'Hacienda San José entourée de caféiers, Quindío",
  },
  destinationSlugs: ["colombie"],
  sections: [],
};
