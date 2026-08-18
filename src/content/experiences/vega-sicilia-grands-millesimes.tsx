import type { Experience } from "@/lib/content/types";

export const experience: Experience = {
  slug: "vega-sicilia-grands-millesimes",
  name: "Dégustation des grands millésimes à Vega Sicilia", // TODO: verify l'accès et l'accord du domaine
  blurb:
    "Dans les caves de Valbuena de Duero, le maître de chai aligne les millésimes d'un même vin et les sert lui-même, du plus jeune au plus ancien. Il raconte ceux qu'il a élevés et ceux dont il a hérité. On comprend alors ce que le temps apporte à un vin.",
  keywords: ["espagne", "ribera del duero", "vega sicilia", "vin", "castille"],
  heroImage: {
    src: "/destination/espagne/xp-vega-sicilia.png",
    alt: "Bouteilles anciennes alignées dans une cave de la Ribera del Duero",
  },
  destinationSlugs: ["espagne"],
  sections: [],
};
