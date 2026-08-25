import type { ServiceCategory } from "@/lib/content/types";

export const serviceCategory: ServiceCategory = {
  slug: "ingenierie",
  name: "Ingénierie du voyage & support global",
  blurb:
    "Visas, assurances premium, optimisation des privilèges et coordination 360°.",
  keywords: [
    "visa",
    "formalites",
    "assurance",
    "upgrade",
    "coordination",
    "logistique",
  ],
  serviceSlugs: [
    "formalites-administratives",
    "assurances-premium",
    "privileges-upgrades",
    "coordination-globale",
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Service",
      heading: "Ingénierie du voyage & support global",
      description:
        "Visas, autorisations, assurances sur-mesure, accès aux privilèges exclusifs et coordination de chaque étape du voyage.",
      images: [
        {
          src: "/service/ingenierie/hero-1.jpg",
          alt: "Conseillère Exuma au téléphone, casque sur les oreilles, à son bureau",
        },
      ],
    },
  ],
};
