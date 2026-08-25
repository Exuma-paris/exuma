import type { Experience } from "@/lib/content/types";

export const experience: Experience = {
  slug: "atelier-verre-smaland",
  name: "Atelier privé avec un maître verrier en Småland",
  // TODO: verify foundation date of the workshop
  blurb:
    "Dans un atelier du Småland, un maître verrier façonne la pâte incandescente au bout d'une canne, devant un four resté allumé depuis le dix-huitième siècle. On repart avec une pièce soufflée sous ses yeux, unique.",
  keywords: [
    "suede",
    "smaland",
    "verre",
    "artisanat",
    "kosta",
  ],
  heroImage: {
    src: "/destination/suede/xp-atelier-verre.png",
    alt: "Maître verrier façonnant une pièce de cristal dans un atelier du Småland",
  },
  destinationSlugs: ["suede"],
  sections: [],
};
