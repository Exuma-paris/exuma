import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "rosewood-schloss-fuschl",
  name: "Rosewood Schloss Fuschl",
  blurb:
    "Un château du XVe siècle posé sur une presqu’île du Fuschlsee, rouvert en 2024 après des années de chantier. Salzbourg est à vingt minutes de route, et pourtant on n’entend ici que l’eau contre les pontons.", // TODO: verify date de réouverture
  keywords: ["autriche", "salzkammergut", "fuschlsee", "salzbourg", "lac"],
  heroImage: {
    src: "/destination/autriche/hotel-schloss-fuschl.png",
    alt: "Le château de Fuschl sur sa presqu’île, au bord du Fuschlsee près de Salzbourg",
  },
  destinationSlugs: ["autriche"],
  sections: [],
};
