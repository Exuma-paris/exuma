import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "murtoli",
  name: "Domaine de Murtoli", // TODO: verify
  blurb:
    "Un domaine privé de 2 500 hectares dans le Sartenais, entre maquis et plages confidentielles.",
  keywords: ["murtoli", "corse", "sartenais", "domaine", "bergerie"],
  heroImage: {
    src: "/destination/corse/hotel-murtoli.webp",
    alt: "Chambre en pierre et bois ancien d’une bergerie du Domaine de Murtoli",
  },
  destinationSlugs: ["corse"],
  sections: [],
};
