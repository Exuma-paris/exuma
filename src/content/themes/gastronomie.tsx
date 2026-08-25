import type { Theme } from "@/lib/content/types";

export const theme: Theme = {
  slug: "gastronomie",
  name: "Gastronomie & art de vivre",
  blurb:
    "On ne parle pas de restaurant, on parle de portes qui s'ouvrent. Manger quelque part, c'est comprendre cet endroit.",
  intent:
    "On ne parle pas de restaurant, on parle de portes qui s'ouvrent. La table d'un vigneron qui ne reçoit pas, un chef qui cuisine pour douze le vendredi soir.",
  keywords: ["gastronomie", "vin", "chef", "epicurien", "art de vivre", "vigneron"],
  cardImage: {
    src: "/theme/gastronomie/hero-1-1x1.png",
    alt: "Une table dressée aux chandelles dans une crayère de Champagne, entre les pupitres",
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Thématique",
      heading: "Gastronomie & art de vivre",
      description: "Des portes qui s'ouvrent, pas des étoiles à cocher.",
      images: [
        {
          src: "/theme/gastronomie/hero-1.png",
          alt: "Une table dressée aux chandelles dans une crayère de Champagne, entre les pupitres",
        },
      ],
    },
  ],
};
