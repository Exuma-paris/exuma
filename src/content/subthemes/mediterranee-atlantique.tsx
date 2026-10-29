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
  ],
  sections: [],
};
