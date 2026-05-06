import type { Theme } from "@/lib/content/types";

export const theme: Theme = {
  slug: "plongee",
  name: "Plongée & snorkeling",
  blurb:
    "Faire disparaître le monde du dessus. Des fonds que les autres ne voient pas.",
  intent:
    "L'intention est de faire disparaître le monde du dessus. Le texte doit donner la sensation du silence sous-marin avant même de parler du lieu.",
  keywords: ["plongee", "snorkeling", "dauphins", "raies", "recifs", "ocean"],
  sections: [
    {
      type: "hero",
      eyebrow: "Thématique",
      heading: "Plongée & snorkeling",
      description: "Le silence sous-marin avant tout.",
      images: [
        {
          src: "/destination/polynesie/hero-1.png",
          alt: "Plongée sous-marine",
        },
      ],
    },
  ],
};
