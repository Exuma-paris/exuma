import type { Experience } from "@/lib/content/types";

// TODO: verify — présence de l'astronome résident de Soneva Jani toute l'année
export const experience: Experience = {
  slug: "astronome-soneva-jani",
  name: "La nuit des Maldives, avec l'astronome de Soneva Jani",
  blurb:
    "Loin des villes, le ciel de Noonu est l'un des plus noirs de l'océan Indien. L'astronome de Soneva Jani règle le télescope de l'observatoire et nomme Saturne et les constellations du Sud. Les enfants repartent avec leur ciel à eux.",
  keywords: ["maldives", "noonu", "soneva jani", "astronomie", "etoiles", "observatoire"],
  heroImage: {
    src: "/destination/maldives/xp-astronome-soneva.webp",
    alt: "Parent et enfant à l'oculaire d'un télescope sur une terrasse en bois au-dessus du lagon, sous la Voie lactée",
  },
  destinationSlugs: ["maldives"],
  sections: [],
};
