import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "aurelio-lech",
  name: "Aurelio Lech",
  blurb:
    "Dix-neuf chambres à Lech am Arlberg, tenues comme un chalet privé plutôt que comme une maison ouverte. Le spa occupe tout un niveau sous la terrasse. On chausse devant la porte et l’on rentre de la même façon.", // TODO: verify nombre de chambres et accès direct aux pistes
  keywords: ["autriche", "lech", "arlberg", "vorarlberg", "ski"],
  heroImage: {
    src: "/destination/autriche/hotel-aurelio-lech.webp",
    alt: "Terrasse et tables de l’Aurelio Lech ouvertes sur les prés de l’Arlberg en été",
  },
  destinationSlugs: ["autriche"],
  sections: [],
};
