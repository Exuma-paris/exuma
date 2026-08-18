import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "singita-sasakwa-lodge",
  name: "Singita Sasakwa Lodge",
  blurb:
    "Un manoir de style edwardien occupe la colline de Sasakwa, au-dessus de la concession de Grumeti. Neuf cottages, chacun avec sa piscine, aucun visible depuis un autre. Les plaines commencent au bas du perron.", // TODO: verify le nombre de cottages
  keywords: ["tanzanie", "grumeti", "serengeti", "singita", "concession privee"],
  heroImage: {
    src: "/destination/tanzanie/hotel-singita-sasakwa.webp",
    alt: "Salon lambrissé de Singita Sasakwa Lodge, gravures botaniques et cheminée allumée",
  },
  destinationSlugs: ["tanzanie"],
  sections: [],
};
