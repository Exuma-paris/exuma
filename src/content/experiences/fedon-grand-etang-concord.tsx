import type { Experience } from "@/lib/content/types";

// TODO: verify — durée exacte du sentier Grand Étang, camp de Fédon, chutes de Concord (estimée à quatre ou cinq heures)
export const experience: Experience = {
  slug: "fedon-grand-etang-concord",
  name: "Sur les traces de Fédon, du Grand Étang aux chutes de Concord",
  blurb:
    "Un guide part du lac du Grand Étang jusqu'au camp où Julien Fédon tint tête aux Anglais en 1795, puis redescend dans les fougères arborescentes jusqu'aux chutes de Concord, où l'on se baigne. Quatre à cinq heures de marche.",
  keywords: ["la-grenade", "randonnee", "grand etang", "fedon", "concord", "cascade", "foret"],
  heroImage: {
    src: "/destination/la-grenade/xp-fedon-concord.webp",
    alt: "Guide grenadien et marcheur sur un sentier entre les fougères arborescentes de la forêt du Grand Étang",
  },
  destinationSlugs: ["la-grenade"],
  sections: [],
};
