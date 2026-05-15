import type { Destination } from "@/lib/content/types";

export const destination: Destination = {
  slug: "kyoto",
  name: "Kyoto",
  country: "Japon",
  continentSlug: "asie",
  hidden: true,
  parentDestinationSlug: "japon",
  heroImage: {
    src: "/destination/japon/map-kyoto.png", // TODO: remplacer par une photo Kyoto dédiée
    alt: "Temple Kinkaku-ji reflété dans son étang, Kyoto, Japon",
  },
  blurb:
    "La capitale culturelle du Japon concentre ce que le pays a mis des siècles à affiner : cuisine kaiseki, jardins zen, quartier de Gion. Vingt-cinq millions de visiteurs par an, et des ruelles encore vides à sept heures du matin.",
  keywords: [
    "kyoto",
    "japon",
    "gion",
    "arashiyama",
    "fushimi-inari",
    "kaiseki",
    "ryokan",
  ],
  metaTitle: "Kyoto — Voyage sur mesure",
  metaDescription:
    "Voyage à Kyoto sur mesure : quartier de Gion, temples, cuisine kaiseki et ryokan hors réseaux. Itinéraire écrit par votre travel designer Exuma.",
  sections: [],
};
