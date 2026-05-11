import type { Experience } from "@/lib/content/types";

export const experience: Experience = {
  slug: "survol-atlas-biplan",
  name: "Survol de l'Atlas en biplan — Marrakech",
  blurb:
    "Décollage depuis l'aérodrome de Marrakech-Ménara dans un biplan biplace. La ligne de crête du Haut Atlas apparaît à quatre mille mètres — Toubkal, Ouanoukrim, Angour — avant le retour par la vallée de l'Ourika. Quarante-cinq minutes sans vitre entre soi et la montagne.", // TODO: verify
  keywords: ["marrakech", "atlas", "biplan", "survol", "toubkal"],
  heroImage: {
    src: "/destination/marrakech/xp-biplan.png",
    alt: "Biplan survolant les crêtes enneigées du Haut Atlas",
  },
  destinationSlugs: ["marrakech"],
  sections: [],
};
