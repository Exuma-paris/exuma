import type { Destination } from "@/lib/content/types";

export const destination: Destination = {
  slug: "tohoku",
  name: "Tōhoku",
  country: "Japon",
  continentSlug: "asie",
  hidden: true,
  parentDestinationSlug: "japon",
  heroImage: {
    src: "/destination/japon/hero-2.png", // TODO: remplacer par une photo Tōhoku dédiée
    alt: "Forêt de cryptomères dans les montagnes du nord de Honshū, Tōhoku",
  },
  blurb:
    "Le nord de Honshū reste l'une des régions les moins balisées du Japon. Rizières en terrasses, onsen isolés dans les forêts de hêtres, festivals de nuit (Nebuta, Tanabata) : un Japon très différent de celui de Kyoto.",
  keywords: [
    "tohoku",
    "japon",
    "sendai",
    "yamagata",
    "nebuta",
    "onsen",
    "tanabata",
  ],
  metaTitle: "Tōhoku — Voyage sur mesure",
  metaDescription:
    "Voyage au Tōhoku sur mesure : rizières en terrasses, onsen isolés dans la forêt, festivals de nuit. Le nord de Honshū hors des circuits balisés, par Exuma.",
  sections: [],
};
