import type { Theme } from "@/lib/content/types";

export const theme: Theme = {
  slug: "safaris-aventure",
  name: "Safaris, trek & aventure",
  blurb:
    "L'intensité sans glamouriser l'inconfort. Le Serengeti avant les autres jeeps, le camp qui n'accueille que six personnes.",
  intent:
    "Raconter l'intensité sans glamouriser l'inconfort. Le confort est sous-entendu, jamais décrit. Ce qui compte c'est l'accès. Ton documentaire, pas lyrique.",
  keywords: ["safari", "trek", "aventure", "brousse", "serengeti", "masai mara"],
  sections: [
    {
      type: "hero",
      eyebrow: "Thématique",
      heading: "Safaris, trek & aventure",
      description: "L'accès au terrain, pas la mise en scène.",
      images: [
        {
          src: "/destination/polynesie/hero-1.png",
          alt: "Safari",
        },
      ],
    },
  ],
};
