import type { Subtheme } from "@/lib/content/types";

export const subtheme: Subtheme = {
  slug: "cure-thermale",
  name: "Thermes & sources chaudes",
  themeSlug: "bien-etre",
  blockHeading:
    "Thermes et sources chaudes, là où la terre chauffe l'eau",
  blurb:
    "Une rivière tiède au pied d'un camp islandais, des bassins sous la forêt de l'Arenal, un onsen extérieur à Hakone, des thermes taillés dans la montagne à Vals. Ici, l'eau arrive chaude et l'on ne fait que s'y installer.",
  bandIntent:
    "Un bassin d'eau chaude naturelle, vapeur au petit matin, roche ou bois autour.",
  heroImage: {
    src: "/subtheme/cure-thermale/band.png",
    alt: "Bassin d'eau chaude naturelle entre les roches, vapeur au petit matin",
  },
  thumbnailsIntro:
    "D'autres eaux chaudes, moins attendues.",
  featuredDestinationSlugs: [
    "japon",
    "islande",
    "costa-rica",
    "suisse",
  ],
  cards: [
    {
      slug: "japon",
      description:
        "Le mont Fuji n'est visible depuis Tokyo qu'un jour sur trois, selon l'humidité. Les sources chaudes de Hakone permettent de l'observer depuis un onsen extérieur, quand il veut bien apparaître.",
      image: {
        src: "/subtheme/cure-thermale/card-japon.png",
        alt: "Bain extérieur en bois d'un onsen de Hakone, ouvert sur la forêt",
      },
    },
    {
      slug: "islande",
      description:
        "On marche sur un glacier le matin et l'on se baigne dans une source chaude l'après-midi. À Landmannalaugar, une rivière tiède coule au pied du camp, au milieu des roches colorées, sur une piste ouverte seulement une partie de l'année.",
      image: {
        src: "/subtheme/cure-thermale/card-islande.png",
        alt: "Quelques baigneurs au loin dans la rivière chaude de Landmannalaugar, vapeur sur les rochers",
      },
    },
    {
      slug: "costa-rica",
      description:
        "Le soir, à Tabacón, l'eau chaude descend des flancs du volcan Arenal et alimente des bassins naturels sous la forêt. Les lodges de la région ont aussi leurs piscines thermales privées.",
      image: {
        src: "/subtheme/cure-thermale/card-costa-rica.png",
        alt: "Cascades et bassins d'eau chaude de Tabacón sous la forêt tropicale",
      },
    },
    {
      slug: "suisse",
      description:
        "Au fond d'une vallée des Grisons, Peter Zumthor a bâti les thermes de Vals en quartzite local, ouverts en 1996. L'hôtel 7132 partage leur eau, et les enfants peuvent skier pendant que d'autres restent au bain.",
      image: {
        src: "/destination/suisse/hotel-7132-vals.webp",
        alt: "Bassin extérieur des thermes de Vals, murs de quartzite face à la montagne",
      },
    },
  ],
  sections: [],
};
