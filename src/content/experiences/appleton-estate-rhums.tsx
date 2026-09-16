import type { Experience } from "@/lib/content/types";

export const experience: Experience = {
  slug: "appleton-estate-rhums",
  name: "Dégustation de rhums chez Appleton Estate",
  blurb:
    "Le domaine distille dans la vallée de Nassau depuis 1749. La dégustation remonte la gamme jusqu'aux millésimes les plus anciens, commentée par l'équipe de Joy Spence, première maîtresse assembleuse au monde.", // TODO: verify que la dégustation des vieux millésimes est accessible sur demande
  keywords: ["jamaique", "appleton estate", "rhum", "nassau valley", "degustation"],
  heroImage: {
    src: "/destination/jamaique/xp-appleton-rhum.webp",
    alt: "Alambics de cuivre alignés sous la charpente d'une distillerie de rhum jamaïcaine",
  },
  destinationSlugs: ["jamaique"],
  sections: [],
};
