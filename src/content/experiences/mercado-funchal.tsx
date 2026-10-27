import type { Experience } from "@/lib/content/types";

// TODO: verify — chef de Funchal qui accompagne au marché et reçoit en cuisine (piste : Benoît Sinthon, Il Gallo d'Oro)
export const experience: Experience = {
  slug: "mercado-funchal",
  name: "Le marché du matin avec un chef de Funchal, puis le déjeuner en cuisine",
  blurb:
    "Le chef vous attend à l'ouverture du Mercado dos Lavradores. Il choisit l'espada chez son poissonnier, goûte les fruits à l'étage, puis remonte avec vous dans sa cuisine. Le déjeuner se prépare avec ce que vous avez rapporté.",
  keywords: ["madere", "funchal", "mercado dos lavradores", "marche", "chef", "cuisine"],
  heroImage: {
    src: "/destination/madere/xp-mercado-chef.webp",
    alt: "Chef montrant un espada noir à un couple devant un étal du Mercado dos Lavradores, à Funchal",
  },
  destinationSlugs: ["madere"],
  sections: [],
};
