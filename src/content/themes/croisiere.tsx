import type { Theme } from "@/lib/content/types";

export const theme: Theme = {
  slug: "croisiere",
  name: "Croisière d'exception",
  blurb:
    "La mer prise au sérieux. Un petit navire, peu de monde, des escales que personne ne fait.",
  intent:
    "Rien à voir avec la croisière de masse. La mer prise au sérieux, un petit navire, peu de monde. Le ton est lent et souverain.",
  keywords: ["croisiere", "yacht", "voilier", "mer", "navigation", "escales"],
  cardImage: {
    src: "/theme/croisiere/hero-1-1x1.png",
    alt: "Un navire à voiles seul devant une côte montagneuse déserte",
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Thématique",
      heading: "Croisière d'exception",
      description: "La mer, en petit comité, à l'écart des routes habituelles.",
      images: [
        {
          src: "/theme/croisiere/hero-1.png",
          alt: "Un navire à voiles seul devant une côte montagneuse déserte",
        },
      ],
    },
    {
      type: "finalCta",
      eyebrow: "Aller plus loin",
      heading: "Dites-nous ce que vous avez en tête",
      primaryCta: { label: "Créer votre voyage", href: "/votre-projet" },
      secondaryCta: { label: "Nous écrire", href: "/nous-ecrire" },
    },
  ],
};
