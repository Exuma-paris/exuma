import type { Experience } from "@/lib/content/types";

export const experience: Experience = {
  slug: "voiles-de-saint-barth-regate",
  // TODO: verify — transposée de l'« Expérience de Course de Voile » du catalogue (fiche Saint-Martin)
  name: "À la barre d'un voilier de régate au large de Gustavia",
  blurb:
    "Le voilier sort de Gustavia sous grand-voile et l'équipage confie la barre à qui veut la prendre. On tire des bords le long de la côte au vent, et le bateau gîte assez pour que tout le monde s'en souvienne.",
  keywords: [
    "saint-barthelemy",
    "gustavia",
    "voile",
    "regate",
    "navigation",
  ],
  heroImage: {
    src: "/destination/saint-barthelemy/xp-regate.png",
    alt: "Voilier de régate sous grand-voile au large de Gustavia à Saint-Barthélemy",
  },
  destinationSlugs: ["saint-barthelemy"],
  sections: [],
};
