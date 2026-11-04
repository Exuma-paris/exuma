import type { Subtheme } from "@/lib/content/types";

export const subtheme: Subtheme = {
  slug: "mediterranee-atlantique",
  name: "Méditerranée & Atlantique",
  themeSlug: "iles-lagons",
  blockHeading:
    "Méditerranée et Atlantique, le balnéaire à moins de six heures",
  blurb:
    "Le sable de Seixal est noir et la falaise tombe droit derrière. Les Lavezzi, les pins de Comporta, la Ponta da Piedade au lever du jour, la roche blanche de Sarakiniko à Milos, les îlots des Kornati. Un littoral balnéaire accessible sans traverser un océan.",
  bandIntent:
    "Une crique rocheuse, pins ou falaise ocre, eau claire. Registre méditerranéen, pas tropical.",
  thumbnailsIntro:
    "D'autres littoraux, à la même distance.",
  featuredDestinationSlugs: [
    "corse",
    "madere",
    "portugal",
    "croatie",
    "grece",
  ],
  cards: [
    {
      slug: "madere",
      image: {
        src: "/destination/madere/xp-plage-seixal.webp",
        alt: "Plage de sable noir de Seixal encadrée de falaises verdoyantes à Madère",
      },
    },
    {
      slug: "portugal",
      image: {
        src: "/destination/portugal/map-algarve.webp",
        alt: "Arches de grès et criques de la côte de l'Algarve près de Lagos",
      },
    },
    {
      slug: "croatie",
      image: {
        src: "/destination/croatie/full-image.webp",
        alt: "Vue aérienne des îles Kornati et de leurs eaux turquoise en Croatie",
      },
    },
    {
      slug: "grece",
      image: {
        src: "/destination/grece/map-milos.webp",
        alt: "Roches blanches lunaires de Sarakiniko sur l'île de Milos",
      },
    },
  ],
  sections: [],
};
