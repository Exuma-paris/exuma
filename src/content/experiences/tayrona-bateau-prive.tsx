import type { Experience } from "@/lib/content/types";

// TODO: verify — dates de fermeture du parc Tayrona pour 2027 et accès ouverts (restrictions depuis fin 2025)
export const experience: Experience = {
  slug: "tayrona-bateau-prive",
  name: "Tayrona par la mer, jusqu'à Playa Cristal",
  blurb:
    "Le parc Tayrona descend de la Sierra Nevada jusqu'à la mer des Caraïbes. Un bateau privé longe la côte au départ de Taganga et entre dans la baie de Neguanje, jusqu'à Playa Cristal, une crique au récif assez clair pour nager au masque. Le parc ferme quelques semaines par an, en février notamment : on construit le voyage autour.",
  keywords: ["colombie", "tayrona", "playa cristal", "neguanje", "taganga", "bateau prive"],
  heroImage: {
    src: "/destination/colombie/xp-tayrona.webp",
    alt: "Crique de Playa Cristal dans la baie de Neguanje, parc national Tayrona, Colombie",
  },
  destinationSlugs: ["colombie"],
  sections: [],
};
