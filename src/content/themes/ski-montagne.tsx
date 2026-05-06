import type { Theme } from "@/lib/content/types";

export const theme: Theme = {
  slug: "ski-montagne",
  name: "Ski & montagne",
  blurb:
    "Pas le ski de station — la montagne comme exigence. L'accès à des zones et des guides que le grand public n'a pas.",
  intent:
    "Ce n'est pas le ski de station, c'est la montagne comme exigence. L'intention est de mettre en avant l'accès à des zones et des guides que le grand public n'a pas, dans un ton direct et physique.",
  keywords: ["ski", "montagne", "heliski", "freeride", "alpinisme", "guide"],
  sections: [
    {
      type: "hero",
      eyebrow: "Thématique",
      heading: "Ski & montagne",
      description: "La montagne comme exigence, pas comme décor.",
      images: [
        {
          src: "/destination/corse/hero-1.png",
          alt: "Montagne",
        },
      ],
    },
  ],
};
