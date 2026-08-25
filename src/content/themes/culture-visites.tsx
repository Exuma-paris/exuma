import type { Theme } from "@/lib/content/types";

export const theme: Theme = {
  slug: "culture-visites",
  name: "Culture, visites & patrimoine",
  blurb:
    "On ne visite pas, on comprend. L'accès humain : le conservateur qui ouvre sa réserve, le village que les guides ne mentionnent pas.",
  intent:
    "On ne visite pas, on comprend. L'intention est de mettre en avant l'accès humain. Ce n'est jamais un cours d'histoire, c'est toujours une rencontre.",
  keywords: ["culture", "patrimoine", "musee", "histoire", "rencontre", "conservateur"],
  cardImage: {
    src: "/theme/culture-visites/hero-1-1x1.png",
    alt: "Un couple et leur guide, de dos, seuls sur le chemin de ronde d'une muraille",
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Thématique",
      heading: "Culture, visites & patrimoine",
      description: "Comprendre par la rencontre, pas par le guide audio.",
      images: [
        {
          src: "/theme/culture-visites/hero-1.png",
          alt: "Un couple et leur guide, de dos, seuls sur le chemin de ronde d'une muraille",
        },
      ],
    },
  ],
};
