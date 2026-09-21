import type { Experience } from "@/lib/content/types";

// TODO: verify — disponibilité et opérateur du vol en hydravion à confirmer sur place
export const experience: Experience = {
  slug: "palawan-hydravion-prive",
  name: "Palawan vu du ciel en hydravion privé",
  blurb:
    "L'appareil décolle depuis l'eau, devant la plage. On survole à basse altitude les karsts de Bacuit et les bancs de sable de Linapacan, puis on se pose sur le lagon, juste devant l'hôtel.",
  keywords: ["philippines", "palawan", "hydravion", "el nido", "linapacan"],
  heroImage: {
    src: "/destination/philippines/xp-hydravion-palawan.webp",
    alt: "Hydravion amarré à un ponton sur le lagon, au nord de Palawan",
  },
  destinationSlugs: ["philippines"],
  sections: [],
};
