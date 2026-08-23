import type { Theme } from "@/lib/content/types";

export const theme: Theme = {
  slug: "bien-etre",
  name: "Bien-être & reconnexion",
  blurb:
    "L'endroit où quelqu'un qui n'arrête jamais va enfin s'arrêter. Le lieu fait le travail à la place du visiteur.",
  intent:
    "On ne parle pas de spas ou de soins. On parle de l'endroit où quelqu'un qui n'arrête jamais va enfin s'arrêter. L'intention est de faire ressentir la coupure, pas de décrire les équipements.",
  keywords: ["bien-etre", "reconnexion", "ressourcement", "deconnexion", "retraite"],
  cardImage: {
    src: "/theme/bien-etre/hero-1-1x1.png",
    alt: "Une personne seule, de dos, un café à la main, face au lac au petit matin",
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Thématique",
      heading: "Bien-être & reconnexion",
      description:
        "L'endroit où quelqu'un qui n'arrête jamais va enfin s'arrêter.",
      images: [
        {
          src: "/theme/bien-etre/hero-1.png",
          alt: "Une personne seule, de dos, un café à la main, face au lac au petit matin",
        },
      ],
    },
  ],
};
