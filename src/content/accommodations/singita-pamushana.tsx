import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "singita-pamushana",
  name: "Singita Pamushana",
  blurb:
    "Six suites au-dessus du lac Malilangwe, sur une réserve privée fermée au public dans le sud-est du pays. Les rhinocéros noirs y ont été réintroduits, et le domaine garde ses propres abris ornés de peintures San, que l'on rejoint à pied.", // TODO: verify (abris rupestres)
  keywords: ["zimbabwe", "malilangwe", "gonarezhou", "rhinoceros noir", "reserve privee"],
  heroImage: {
    src: "/destination/zimbabwe/hotel-pamushana.webp",
    alt: "Terrasse de Singita Pamushana surplombant le lac Malilangwe au coucher du soleil",
  },
  destinationSlugs: ["zimbabwe"],
  sections: [],
};
