import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "murtoli",
  name: "Domaine de Murtoli", // TODO: verify
  blurb:
    "Un domaine privé de 2 500 hectares dans le Sartenais, entre maquis et plages confidentielles.",
  keywords: ["murtoli", "corse", "sartenais", "domaine", "bergerie"],
  heroImage: {
    src: "/destination/corse/hotel-murtoli.png",
    alt: "Bergerie en pierre du Domaine de Murtoli au coucher du soleil",
  },
  destinationSlugs: ["corse"],
  sections: [],
};
