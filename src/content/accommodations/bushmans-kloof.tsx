import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "bushmans-kloof",
  name: "Bushmans Kloof Wilderness Reserve",
  blurb:
    "La réserve occupe une vallée fermée du Cederberg, entre falaises de grès rouge et fynbos. Plus de 130 abris peints par les Bushmen s'y visitent à pied. Le soir, aucune lumière alentour ne vient troubler l'un des ciels les plus noirs du pays.", // TODO: verify le nombre de sites peints
  keywords: [
    "afrique du sud",
    "cederberg",
    "art rupestre",
    "bushmen",
    "clanwilliam",
  ],
  heroImage: {
    src: "/destination/afrique-du-sud/hotel-bushmans-kloof.webp",
    alt: "Terrasse de Bushmans Kloof face aux falaises de grès du Cederberg, Afrique du Sud",
  },
  destinationSlugs: ["afrique-du-sud"],
  sections: [],
};
