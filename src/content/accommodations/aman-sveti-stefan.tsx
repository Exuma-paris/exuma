import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "aman-sveti-stefan",
  name: "Aman Sveti Stefan",
  blurb:
    "Un village de pêcheurs du XVe siècle, reconstruit ruelle par ruelle sur son îlot et relié à la terre par une seule jetée. On y arrive en golfette, jamais en voiture. La chapelle au sommet sert encore aux mariages des familles de la côte.", // TODO: verify chapel detail
  keywords: ["montenegro", "sveti-stefan", "aman", "budva", "adriatique"],
  heroImage: {
    src: "/destination/montenegro/hotel-aman-sveti-stefan.png",
    alt: "Vue aérienne du village-hôtel Aman Sveti Stefan au Monténégro",
  },
  destinationSlugs: ["montenegro"],
  sections: [],
};
