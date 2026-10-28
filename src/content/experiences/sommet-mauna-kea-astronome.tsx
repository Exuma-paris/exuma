import type { Experience } from "@/lib/content/types";

// TODO: verify — astronome privé à mi-pente, à trouver via le réceptif
export const experience: Experience = {
  slug: "sommet-mauna-kea-astronome",
  name: "Le coucher de soleil au Mauna Kea, puis les étoiles avec un astronome",
  blurb:
    "On monte en fin d'après-midi jusqu'au sommet, pour voir le soleil se coucher sur la mer de nuages. À la nuit, on redescend à mi-pente, où un astronome installe son télescope pour vous seuls et nomme les étoiles des deux hémisphères.",
  keywords: ["hawai", "mauna kea", "big island", "astronomie", "volcan"],
  heroImage: {
    src: "/destination/hawai/xp-mauna-kea.webp",
    alt: "Voie lactée au-dessus d'un observatoire du sommet du Mauna Kea, Big Island",
  },
  destinationSlugs: ["hawai"],
  sections: [],
};
