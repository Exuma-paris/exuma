import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "hotel-sacher-vienna",
  name: "Hotel Sacher Vienna",
  blurb:
    "La maison fait face à l’Opéra depuis 1876 et appartient toujours à la même famille. Les couloirs sont tendus de rouge et couverts de tableaux, jusque devant les chambres. On rentre du concert à pied, en traversant la rue.", // TODO: verify année d’ouverture et propriété familiale
  keywords: ["autriche", "vienne", "opera", "ring", "sacher"],
  heroImage: {
    src: "/destination/autriche/hotel-sacher.png",
    alt: "Façade de l’Hotel Sacher face à l’Opéra de Vienne à la tombée du jour",
  },
  destinationSlugs: ["autriche"],
  sections: [],
};
