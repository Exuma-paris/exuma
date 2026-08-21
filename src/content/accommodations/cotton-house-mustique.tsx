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
    src: "/destination/caraibes/hotel-cotton-house.png",
    alt: "Terrasse de la Cotton House à Mustique sous les arbres, mobilier de rotin",
  },
  destinationSlugs: ["caraibes"],
  sections: [],
};
