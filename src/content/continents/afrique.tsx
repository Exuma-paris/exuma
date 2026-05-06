import type { Continent } from "@/lib/content/types";

export const continent: Continent = {
  slug: "afrique",
  name: "Afrique",
  blurb: "Safaris confidentiels, déserts et côtes de l'océan Indien.",
  keywords: ["afrique", "kenya", "tanzanie", "namibie", "maroc", "afrique du sud"],
  sections: [
    {
      type: "hero",
      eyebrow: "Continent",
      heading: "Afrique",
      description:
        "Du Masai Mara au désert du Namib, l'Afrique d'Exuma s'éprouve dans des camps mobiles privés, avec des guides qui connaissent la brousse comme leur jardin.",
      images: [
        {
          src: "/destination/polynesie/hero-1.png",
          alt: "Paysage africain",
        },
      ],
    },
  ],
};
