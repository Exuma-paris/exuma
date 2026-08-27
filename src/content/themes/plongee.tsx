import type { Theme } from "@/lib/content/types";

export const theme: Theme = {
  slug: "plongee",
  name: "Plongée & snorkeling",
  blurb:
    "Faire disparaître le monde du dessus. Des fonds que les autres ne voient pas.",
  intent:
    "L'intention est de faire disparaître le monde du dessus. Le texte doit donner la sensation du silence sous-marin avant même de parler du lieu.",
  keywords: ["plongee", "snorkeling", "dauphins", "raies", "recifs", "ocean"],
  cardImage: {
    src: "/theme/plongee/hero-1-1x1.png",
    alt: "Un plongeur seul en silhouette, à contre-jour de la surface, au-dessus d'un récif sombre",
  },
  sections: [
    {
      type: "hero",
      eyebrow: "Thématique",
      heading: "Plongée & snorkeling",
      description: "Le silence sous-marin avant tout.",
      images: [
        {
          src: "/theme/plongee/hero-1.png",
          alt: "Un plongeur seul en silhouette, à contre-jour de la surface, au-dessus d'un récif sombre",
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
