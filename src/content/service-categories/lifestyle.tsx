import type { ServiceCategory } from "@/lib/content/types";

export const serviceCategory: ServiceCategory = {
  slug: "lifestyle",
  name: "Expériences & lifestyle",
  blurb:
    "Accès VIP, tables étoilées confidentielles, excursions privées, yachts et activités spécialisées.",
  keywords: [
    "vip",
    "evenements",
    "gastronomie",
    "yachts",
    "golf",
    "plongee",
    "ski",
  ],
  serviceSlugs: [
    "acces-vip",
    "gastronomie-exception",
    "excursions-privees",
    "activites-specialisees",
    "yachts-navigation",
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Service",
      heading: "Expériences & lifestyle",
      description:
        "Places privilégiées, tables introuvables, guides experts et navigation privée, l'accès aux expériences hors circuit.",
      images: [
        {
          src: "/service/lifestyle/hero-1.png",
          alt: "Table dressée à la bougie sur une terrasse creusée dans la falaise, à la tombée du jour",
        },
      ],
    },
  ],
};
