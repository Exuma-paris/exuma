import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "anantara-stanley-livingstone",
  name: "Anantara Stanley & Livingstone Victoria Falls", // TODO: verify
  blurb:
    "Une maison de dix-sept suites posée sur sa propre réserve, à vingt minutes des chutes. Les rhinocéros y sont suivis à pied avec les gardes, et le grondement du fleuve s'entend depuis la véranda.", // TODO: verify (nombre de suites)
  keywords: ["zimbabwe", "victoria falls", "zambeze", "reserve privee", "rhinoceros"],
  heroImage: {
    src: "/destination/zimbabwe/hotel-stanley-livingstone.png",
    alt: "Véranda et jardins de l'Anantara Stanley & Livingstone, près des chutes Victoria",
  },
  destinationSlugs: ["zimbabwe"],
  sections: [],
};
