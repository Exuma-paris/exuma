import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "hotel-sacher-vienna",
  name: "Hotel Sacher Vienna",
  blurb:
    "La maison fait face à l’Opéra depuis 1876 et appartient toujours à la même famille. Les couloirs sont tendus de rouge et couverts de tableaux, jusque devant les chambres. On rentre du concert à pied, en traversant la rue.", // TODO: verify année d’ouverture et propriété familiale
  keywords: ["autriche", "vienne", "opera", "ring", "sacher"],
  heroImage: {
    src: "/destination/autriche/hotel-sacher.webp",
    alt: "Chambre du Sacher, lustre de verre et fenêtre ouverte sur les façades viennoises",
  },
  destinationSlugs: ["autriche"],
  sections: [],
};
