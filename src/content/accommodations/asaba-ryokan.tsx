import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "asaba-ryokan",
  name: "Asaba Ryokan", // TODO: verify
  blurb:
    "Auberge installée à Shuzenji depuis le XVIe siècle, au bord de la rivière Katsura. Dix-sept chambres. Une scène de nō suspendue au-dessus de l'eau, visible depuis le bain en plein air.",
  keywords: ["shuzenji", "izu", "ryokan", "no", "shizuoka", "japon"],
  heroImage: {
    src: "/destination/japon/hotel-asaba.png",
    alt: "Scène de nō de l'Asaba Ryokan au-dessus de la rivière Katsura, Shuzenji, Izu",
  },
  destinationSlug: "japon",
  sections: [],
};
