import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "patina-osaka",
  name: "Patina Osaka", // TODO: verify
  blurb:
    "Face au château d'Ōsaka, Patina tient une signature urbaine précise : plusieurs restaurants aux concepts distincts, du teppanyaki aux saveurs basques saisonnières. Le spa occupe un étage entier, piscines chauffées avec vue sur la ville, hydrothérapie, sauna. Une adresse pensée pour vivre la ville et s'en extraire le même soir.",
  keywords: ["osaka", "japon", "chateau", "spa", "gastronomie", "urbain"],
  heroImage: {
    src: "/destination/japon/hotel-patina-osaka.png",
    alt: "Patina Osaka face au château historique, vue sur la ville depuis les piscines du spa",
  },
  destinationSlug: "japon",
  sections: [],
};
