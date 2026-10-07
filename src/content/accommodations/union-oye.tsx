import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "union-oye",
  name: "Hotel Union Øye",
  blurb:
    "Une maison de bois de 1891 au fond du Norangsfjord, entre les sommets des Alpes de Sunnmøre. Les rois et les écrivains qui y ont séjourné donnent leur nom aux chambres, meublées d'époque. Le parc descend jusqu'à l'eau.", // TODO: verify date et détails
  keywords: ["norvege", "union oye", "norangsfjord", "hjorundfjord", "sunnmore", "hotel historique"],
  heroImage: {
    src: "/destination/norvege/hotel-union-oye.webp",
    alt: "Façade de bois de l'Hotel Union Øye et son parc au pied des Alpes de Sunnmøre",
  },
  destinationSlugs: ["norvege"],
  sections: [],
};
