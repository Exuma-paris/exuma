import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "dahabieh-privatisee-nil",
  name: "Dahabieh privatisée sur le Nil", // TODO: verify le nom du bateau retenu
  blurb:
    "Un voilier à fond plat de quatre à six cabines, privatisé en entier, avec équipage et cuisinier à bord. Il accoste là où les grands bateaux ne passent pas : un four à pain de village, une carrière de grès, une île sans quai. Les escales se décident le matin, selon le vent.",
  keywords: ["egypte", "nil", "dahabieh", "assouan", "louxor"],
  heroImage: {
    src: "/destination/egypte/hotel-dahabieh.webp",
    alt: "Dahabieh privatisée toutes voiles dehors sur le Nil entre Assouan et Louxor",
  },
  destinationSlugs: ["egypte"],
  sections: [],
};
