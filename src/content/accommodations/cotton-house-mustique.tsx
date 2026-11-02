import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "cotton-house-mustique",
  name: "Cotton House", // TODO: verify
  blurb:
    "L'ancienne maison de plantation est devenue le point de rendez-vous de Mustique, une île que gère une compagnie privée. On y dîne sous les arbres, on emprunte une voiturette pour rejoindre une plage, et l'on ne croise que ceux qui séjournent là.",
  keywords: [
    "caraibes",
    "mustique",
    "grenadines",
    "cotton house",
    "ile privee",
  ],
  heroImage: {
    src: "/destination/caraibes/hotel-cotton-house.webp",
    alt: "La maison de plantation blanche de la Cotton House sur sa pelouse au-dessus de la plage, à Mustique",
  },
  destinationSlugs: ["caraibes", "saint-vincent-et-les-grenadines"],
  sections: [],
};
