import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "four-seasons-papagayo",
  name: "Four Seasons Resort Costa Rica at Peninsula Papagayo",
  blurb:
    "Le resort occupe un isthme étroit de la péninsule de Papagayo, avec une plage de chaque côté : le lever du soleil sur l'une, le coucher sur l'autre. C'est la seule adresse de la région à tenir ce standard de service.", // TODO: verify configuration des deux plages
  keywords: [
    "costa-rica",
    "papagayo",
    "guanacaste",
    "four seasons",
    "pacifique nord",
  ],
  heroImage: {
    src: "/destination/costa-rica/hotel-four-seasons-papagayo.webp",
    alt: "Baie et plage du Four Seasons sur la péninsule de Papagayo, Guanacaste, Costa Rica",
  },
  destinationSlugs: ["costa-rica"],
  sections: [],
};
