import type { Experience } from "@/lib/content/types";

export const experience: Experience = {
  slug: "sossusvlei-deadvlei",
  name: "Sossusvlei et Deadvlei, avant la chaleur",
  blurb:
    "Depuis la porte de Sesriem, la route file une soixantaine de kilomètres entre les montagnes du Naukluft et les premières dunes. Halte à Dune 45, puis marche jusqu'à Deadvlei : argile blanche, acacias noircis, sable ocre. On monte sur les crêtes pendant que l'ombre tient encore.", // TODO: verify distance Sesriem-Sossusvlei (source client : 50 km)
  keywords: ["namibie", "sossusvlei", "deadvlei", "dune 45", "sesriem"],
  heroImage: {
    src: "/destination/namibie/xp-sossusvlei.webp",
    alt: "Quatre marcheurs traversant une plaine du Namib dans la lumière du soir, Namibie",
  },
  destinationSlugs: ["namibie"],
  sections: [],
};
