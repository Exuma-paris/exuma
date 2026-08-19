import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "chateau-st-gerlach",
  name: "Château St. Gerlach",
  blurb:
    "Un hameau entier dans les collines du Limbourg : la ferme, les jardins en terrasses, l'église et la table. Le potager fournit la cuisine et l'on déjeune de ce qui a été coupé le matin. Autour, les vergers et les vignes se parcourent à pied.", // TODO: verify le potager et les vignes autour du domaine
  keywords: ["pays-bas", "limbourg", "valkenburg", "maastricht", "domaine"],
  heroImage: {
    src: "/destination/pays-bas/hotel-st-gerlach.png",
    alt: "Cour et jardins en terrasses du domaine de St. Gerlach à Valkenburg, Limbourg",
  },
  destinationSlugs: ["pays-bas"],
  sections: [],
};
