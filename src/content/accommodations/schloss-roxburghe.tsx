import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "schloss-roxburghe",
  name: "Schloss Roxburghe",
  blurb:
    "L'ancienne maison de campagne des ducs de Roxburghe, dans les Borders, rouverte après une longue restauration. Son parcours de golf occupe la boucle de la Teviot. Le château de Floors est de l'autre côté de la rivière.", // TODO: verify la date de réouverture
  keywords: ["ecosse", "kelso", "borders", "golf", "roxburghe"],
  heroImage: {
    src: "/destination/ecosse/hotel-schloss-roxburghe.webp",
    alt: "Le Schloss Roxburghe éclairé au crépuscule, dans les Borders",
  },
  destinationSlugs: ["ecosse"],
  sections: [],
};
