import type { Collaborateur } from "@/lib/content/types";

export const collaborateur: Collaborateur = {
  slug: "antoine",
  name: "Antoine", // TODO: verify
  role: "Travel Designer Exuma spécialiste de la Corse", // TODO: verify
  image: {
    src: "/collaborateurs/antoine.jpg",
    alt: "Portrait d'Antoine, travel designer Exuma",
  },
  destinationSlugs: ["corse"],
  themeSlugs: [],
  sections: [],
};
