import type { Experience } from "@/lib/content/types";

// TODO: verify — jours de débarquement sur Aride (certains jours seulement, selon l'état de la mer)
export const experience: Experience = {
  slug: "aride-gardes-reserve",
  name: "Aride, avec les gardes de la réserve",
  blurb:
    "Personne ne dort sur Aride. Les gardes viennent vous chercher en barque, vous montrent les paille-en-queue qui nichent au sol et le gardénia de Wright, qui ne pousse nulle part ailleurs, puis montent avec vous jusqu'à la falaise des frégates.",
  keywords: ["seychelles", "aride", "reserve naturelle", "oiseaux", "gardes"],
  heroImage: {
    src: "/destination/seychelles/xp-aride.webp",
    alt: "Garde de la réserve aidant un enfant à descendre d'une barque sur une plage de granit de l'île Aride",
  },
  destinationSlugs: ["seychelles"],
  sections: [],
};
