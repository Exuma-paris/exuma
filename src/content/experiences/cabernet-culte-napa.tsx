import type { Experience } from "@/lib/content/types";

export const experience: Experience = {
  slug: "cabernet-culte-napa",
  // TODO: verify domaine et conditions d'accès (propriété non nommée à ce stade)
  name: "Un cabernet culte de Napa, dans le chai",
  blurb:
    "Le domaine vend sur une liste d'attente fermée depuis longtemps et ne reçoit pas de visiteurs. On entre par le vigneron, on descend au chai, et l'on goûte les lots de l'année avant qu'ils ne soient assemblés.",
  keywords: ["etats-unis", "napa", "californie", "cabernet", "vin"],
  heroImage: {
    src: "/destination/etats-unis/xp-cabernet-napa.webp",
    alt: "Barriques alignées dans le chai d'un domaine de la Napa Valley",
  },
  destinationSlugs: ["etats-unis"],
  sections: [],
};
