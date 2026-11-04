import type { Subtheme } from "@/lib/content/types";

export const subtheme: Subtheme = {
  slug: "tables-chefs",
  name: "Tables & chefs",
  themeSlug: "gastronomie",
  blockHeading:
    "Le voyage gastronomique commence à la table du chef",
  blurb:
    "À Central, à Lima, chaque assiette correspond à une altitude, jusqu'à plus de 4 000 mètres. Un kaiseki dans une maison de thé de Gion, une nonna du Trastevere, le mole noir dans une cuisine d'Oaxaca. Le repas justifie le détour.",
  bandIntent:
    "Une passe de cuisine ou un comptoir dressé avant le service, sans clients.",
  heroImage: {
    src: "/subtheme/tables-chefs/band.png",
    alt: "Comptoir de cuisine dressé avant le service, sans clients",
  },
  thumbnailsIntro:
    "D'autres tables, pour qui a déjà fait les premières.",
  featuredDestinationSlugs: [
    "perou",
    "japon",
    "rome",
    "mexique",
    "italie",
    "argentine",
    "coree-du-sud",
    "vietnam",
    "singapour",
    "paris",
    "thailande",
  ],
  cards: [
    {
      slug: "perou",
      description:
        "À Lima, le chef Virgilio Martínez imagine le menu de Central comme un voyage à travers les écosystèmes du pays, des profondeurs du Pacifique jusqu'aux hauteurs andines. Chaque assiette correspond à une altitude et aux produits qui y vivent, jusqu'à plus de 4 000 mètres.",
      image: {
        src: "/destination/perou/xp-table-central-lima.webp",
        alt: "Un chef dressant des assiettes en salle, à Lima",
      },
    },
    {
      slug: "japon",
      description:
        "Un chef étoilé imagine huit services dans une maison de thé de Gion, où une geiko accueille encore quelques invités. Chaque plat suit le rythme de la saison, pensé pour le jour présent plutôt que répété d'un soir à l'autre.",
      image: {
        src: "/destination/japon/xp-kaiseki-gion.webp",
        alt: "Plateau de kaiseki laqué, petits plats de saison",
      },
    },
    {
      slug: "rome",
      description:
        "Marcella prépare la pasta à la main dans sa cuisine du Vicolo del Cinque. Quatre couverts, une recette par soirée, le poivre concassé au mortier. Le repas est servi vers vingt heures.",
      image: {
        src: "/destination/rome/xp-trastevere.webp",
        alt: "Une nonna pétrissant ses pâtes dans sa cuisine du Trastevere",
      },
    },
    {
      slug: "mexique",
      description:
        "Le mole noir demande une longue préparation et se transmet de mère en fille. À Oaxaca, on le prépare avec elle, dans sa cuisine, avant de le partager à sa table. Les mezcals de la famille arrivent au moment du café.",
      image: {
        src: "/subtheme/tables-chefs/card-mexique.png",
        alt: "Mole noir mijotant dans une marmite de terre, dans une cuisine d'Oaxaca",
      },
    },
    {
      slug: "italie",
      image: {
        src: "/destination/italie/xp-truffe-blanche.webp",
        alt: "Un trifolao et son chien cherchant la truffe blanche dans les bois d'Alba",
      },
    },
    {
      slug: "argentine",
      image: {
        src: "/destination/argentine/xp-mallmann-uco.webp",
        alt: "Vignes de la vallée de Uco devant les Andes enneigées",
      },
    },
    {
      slug: "coree-du-sud",
      image: {
        src: "/destination/coree-du-sud/xp-balwoo-gongyang.webp",
        alt: "Table de cuisine des temples coréenne, au Balwoo Gongyang",
      },
    },
    {
      slug: "vietnam",
      image: {
        src: "/destination/vietnam/xp-diner-chef-hanoi.webp",
        alt: "Un chef dans sa cuisine ouverte, à Hanoï",
      },
    },
    {
      slug: "singapour",
      image: {
        src: "/destination/singapour/xp-diner-candlenut.webp",
        alt: "Table de Candlenut, à Singapour",
      },
    },
    {
      slug: "paris",
      image: {
        src: "/subtheme/tables-chefs/card-paris.png",
        alt: "Salle du restaurant Plénitude, à Cheval Blanc Paris",
      },
    },
    {
      slug: "thailande",
      image: {
        src: "/destination/thailande/xp-blue-elephant.webp",
        alt: "Barques chargées de fruits sur un marché flottant de Thaïlande",
      },
    },
  ],
  sections: [],
};
