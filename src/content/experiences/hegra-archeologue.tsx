import type { Experience } from "@/lib/content/types";

// TODO: verify — disponibilité d'un archéologue lié aux fouilles de Hegra (à défaut, guide officiel « rawi »)
export const experience: Experience = {
  slug: "hegra-archeologue",
  name: "Hegra avec un archéologue, tombeau par tombeau",
  blurb:
    "Hegra était la deuxième ville des Nabatéens après Pétra. Plus d'une centaine de tombeaux sont taillés dans le grès, avec leurs façades, leurs aigles et leurs inscriptions. Un archéologue qui a travaillé sur les fouilles du site les lit avec vous, puis on termine devant Qasr al-Farid, le tombeau isolé, quand le soleil descend.",
  keywords: ["arabie-saoudite", "alula", "hegra", "nabateens", "archeologie", "qasr-al-farid"],
  heroImage: {
    src: "/destination/arabie-saoudite/xp-hegra.webp",
    alt: "Le tombeau nabatéen de Qasr al-Farid taillé dans un rocher de grès isolé, Hegra, au coucher du soleil",
  },
  destinationSlugs: ["arabie-saoudite"],
  sections: [],
};
