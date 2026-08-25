import type { Experience } from "@/lib/content/types";

export const experience: Experience = {
  slug: "vin-crmnica-lac-skadar",
  name: "Dégustation de vranac chez un vigneron de la Crmnica",
  blurb:
    "Au bord du lac de Skadar, un vigneron de la Crmnica sort ses cuvées de vranac, le cépage indigène du Monténégro. La dégustation se termine sur la terrasse, face aux pélicans qui nichent sur le lac.", // TODO: verify winemaker details
  keywords: ["montenegro", "crmnica", "vranac", "lac-skadar", "vin"],
  heroImage: {
    src: "/destination/montenegro/xp-vin-crmnica.png",
    alt: "Dégustation de vranac au bord du lac de Skadar, Monténégro",
  },
  destinationSlugs: ["montenegro"],
  sections: [],
};
