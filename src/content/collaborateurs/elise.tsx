import type { Collaborateur } from "@/lib/content/types";

export const collaborateur: Collaborateur = {
  slug: "elise",
  name: "Élise", // TODO: verify
  role: "Travel Designer Exuma spécialiste de Paris", // TODO: verify
  image: {
    src: "/collaborateurs/elise.jpg",
    alt: "Portrait d'Élise, travel designer Exuma",
  },
  destinationSlugs: ["paris"],
  themeSlugs: [],
  sections: [],
};
