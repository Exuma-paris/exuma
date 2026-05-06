import type { Theme } from "@/lib/content/types";

export const theme: Theme = {
  slug: "bien-etre",
  name: "Bien-être & reconnexion",
  blurb:
    "L'endroit où quelqu'un qui n'arrête jamais va enfin s'arrêter. Le lieu fait le travail à la place du visiteur.",
  intent:
    "On ne parle pas de spas ou de soins. On parle de l'endroit où quelqu'un qui n'arrête jamais va enfin s'arrêter. L'intention est de faire ressentir la coupure, pas de décrire les équipements.",
  keywords: ["bien-etre", "reconnexion", "ressourcement", "deconnexion", "retraite"],
  sections: [
    {
      type: "hero",
      eyebrow: "Thématique",
      heading: "Bien-être & reconnexion",
      description:
        "L'endroit où quelqu'un qui n'arrête jamais va enfin s'arrêter.",
      images: [
        {
          src: "/destination/polynesie/hero-1.png",
          alt: "Lieu de reconnexion",
        },
      ],
    },
  ],
};
