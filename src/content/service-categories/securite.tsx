import type { ServiceCategory } from "@/lib/content/types";

export const serviceCategory: ServiceCategory = {
  slug: "securite",
  name: "Sécurité & sérénité",
  blurb:
    "Sécurité rapprochée, gestion des imprévus, assistance 24/7 et veille sanitaire.",
  keywords: [
    "securite",
    "protection",
    "imprevus",
    "assistance",
    "sante",
    "vaccins",
  ],
  serviceSlugs: [
    "securite-rapprochee",
    "gestion-imprevus",
    "assistance-247",
    "veille-sanitaire",
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Service",
      heading: "Sécurité & sérénité",
      description:
        "Protection sur-mesure, réactivité face aux imprévus, disponibilité continue et anticipation des contraintes locales.",
      images: [
        {
          src: "/service/securite/hero-1.png",
          alt: "Chauffeur tenant la portière d'une berline à l'arrivée d'une voyageuse",
        },
      ],
    },
    {
      type: "finalCta",
      eyebrow: "Aller plus loin",
      heading: "Une question sur ce service ? Écrivez-nous",
      primaryCta: { label: "Nous écrire", href: "/nous-ecrire" },
      secondaryCta: { label: "Créer votre voyage", href: "/votre-projet" },
    },
  ],
};
