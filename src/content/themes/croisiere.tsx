import type { Theme } from "@/lib/content/types";

export const theme: Theme = {
  slug: "croisiere",
  name: "Croisière d'exception",
  blurb:
    "La mer prise au sérieux. Un petit navire, peu de monde, des escales que personne ne fait.",
  intent:
    "Rien à voir avec la croisière de masse. La mer prise au sérieux, un petit navire, peu de monde. Le ton est lent et souverain.",
  keywords: ["croisiere", "yacht", "voilier", "mer", "navigation", "escales"],
  sections: [
    {
      type: "hero",
      eyebrow: "Thématique",
      heading: "Croisière d'exception",
      description: "La mer, en petit comité, à l'écart des routes habituelles.",
      images: [
        {
          src: "/destination/polynesie/hero-1.png",
          alt: "Croisière",
        },
      ],
    },
  ],
};
