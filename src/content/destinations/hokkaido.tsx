import type { Destination } from "@/lib/content/types";

export const destination: Destination = {
  slug: "hokkaido",
  name: "Hokkaidō",
  country: "Japon",
  continentSlug: "asie",
  hidden: true,
  parentDestinationSlug: "japon",
  heroImage: {
    src: "/destination/japon/hero-1.png", // TODO: remplacer par une photo Hokkaidō dédiée
    alt: "Paysage naturel de l'île de Hokkaidō, nord du Japon",
  },
  blurb:
    "L'île du Nord change de visage selon la saison : poudreuse de classe mondiale à Niseko en hiver, parc national de Shiretoko et côte de fruits de mer en été. Le Japon le plus sauvage, à deux heures de Tokyo en avion.",
  keywords: [
    "hokkaido",
    "japon",
    "niseko",
    "sapporo",
    "shiretoko",
    "hakodate",
    "ski",
  ],
  metaTitle: "Hokkaidō — Voyage sur mesure",
  metaDescription:
    "Voyage à Hokkaidō sur mesure : ski de poudreuse à Niseko, nature sauvage de Shiretoko, gastronomie de fruits de mer à Hakodate. L'île du Nord par Exuma.",
  sections: [],
};
