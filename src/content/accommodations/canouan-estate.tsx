import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  // TODO: verify — le domaine opère aujourd'hui sous l'enseigne Mandarin Oriental, Canouan
  slug: "canouan-estate",
  name: "Canouan Estate Resort & Villas",
  blurb:
    "Les villas descendent la colline au-dessus de la baie de Carenage, chacune avec sa piscine et son personnel. La plage est en bas, le parcours de golf derrière, et les familles y prennent leurs habitudes en deux jours.",
  keywords: [
    "saint-vincent-et-les-grenadines",
    "grenadines",
    "canouan",
    "villa",
    "famille",
  ],
  heroImage: {
    src: "/destination/saint-vincent-et-les-grenadines/hotel-canouan-estate.webp",
    alt: "Villa de Canouan Estate vue du ciel, sa piscine à débordement et ses jardins dans la forêt de la colline",
  },
  destinationSlugs: ["saint-vincent-et-les-grenadines"],
  sections: [],
};
