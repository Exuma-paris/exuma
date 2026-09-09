import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "eagles-nest",
  name: "Eagles Nest, Baie des Îles",
  blurb:
    "Des villas indépendantes au-dessus de la Baie des Îles, chacune avec sa piscine à débordement. Depuis la terrasse, Russell et ses cent quarante-quatre îlots tiennent dans un seul plan d'eau.", // TODO: verify villa count
  keywords: ["nouvelle-zelande", "baie des iles", "russell", "villas privees", "ile du nord"],
  heroImage: {
    src: "/destination/nouvelle-zelande/hotel-eagles-nest.png",
    alt: "Villa privée d'Eagles Nest surplombant la Baie des Îles, en Nouvelle-Zélande",
  },
  destinationSlugs: ["nouvelle-zelande"],
  metaTitle: "Eagles Nest, Baie des Îles, Nouvelle-Zélande",
  metaDescription:
    "Eagles Nest en Baie des Îles : villas privées avec piscine à débordement, vue sur les cent quarante-quatre îlots. Séjour en Nouvelle-Zélande organisé par votre travel designer Exuma.",
  sections: [],
};
