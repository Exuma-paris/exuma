import type { Experience } from "@/lib/content/types";

export const experience: Experience = {
  slug: "helicoptere-chutes-victoria",
  name: "Survol des chutes Victoria en hélicoptère",
  blurb:
    "Depuis le sol, on ne voit jamais la faille en entier. En l'air, elle apparaît d'un coup : le fleuve large et calme en amont, la cassure, puis les gorges en zigzag qui repartent vers l'aval. Quinze minutes suffisent.", // TODO: verify (durée du survol)
  keywords: ["zimbabwe", "victoria falls", "helicoptere", "zambeze", "survol"],
  heroImage: {
    src: "/destination/zimbabwe/xp-helico-chutes.png",
    alt: "Vue aérienne des chutes Victoria et des gorges en zigzag du Zambèze",
  },
  destinationSlugs: ["zimbabwe"],
  sections: [],
};
