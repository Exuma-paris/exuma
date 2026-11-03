import type { Subtheme } from "@/lib/content/types";

export const subtheme: Subtheme = {
  slug: "traditions-vivantes",
  name: "Traditions vivantes",
  themeSlug: "culture-visites",
  blockHeading:
    "Les traditions vivantes, quand quelqu'un ouvre sa porte",
  blurb:
    "À Navala, on offre la racine de yaqona au chef et l'on attend d'être accepté. Un keiko dans une écurie de sumo, le candombe dans une cour du barrio Sur, l'aube avec les chasseurs hadzabe au lac Eyasi. La rencontre est organisée sans être mise en scène.",
  bandIntent:
    "Des mains ou des visages pendant un geste précis, un métier ou un rite. Pas de mise en scène costumée.",
  heroImage: {
    src: "/destination/italie/xp-murano.webp",
    alt: "Main gantée d'un verrier travaillant le verre en fusion, à Murano",
  },
  thumbnailsIntro:
    "D'autres rencontres, dans des registres différents.",
  featuredDestinationSlugs: [
    "japon",
    "uruguay",
    "fidji",
    "tanzanie",
    "portugal",
    "maroc",
    "argentine",
    "nouvelle-zelande",
    "kenya",
    "polynesie",
    "rio-de-janeiro",
    "botswana",
  ],
  cards: [
    {
      slug: "japon",
      description:
        "Sur la terre battue, les lutteurs commencent leur entraînement pieds nus. Les corps se heurtent, les pas résonnent, puis le silence reprend sa place. Quelques bancs de bois, quelques privilégiés admis par l'écurie : rien n'est mis en scène.",
      image: {
        src: "/destination/japon/xp-sumo-tokyo.webp",
        alt: "Lutteur de sumo en garde sur la terre battue d'une écurie à Tokyo",
      },
    },
    {
      slug: "uruguay",
      description:
        "Dans une cour du barrio Sur, une comparsa accorde ses tambours avant de descendre dans la rue. Le candombe est né ici, porté par les familles afro-uruguayennes, et l'Unesco l'a inscrit au patrimoine de l'humanité.",
      image: {
        src: "/subtheme/traditions-vivantes/card-uruguay.png",
        alt: "Mains de joueurs sur les tambours de candombe, à Montevideo",
      },
    },
    {
      slug: "fidji",
      description:
        "La route monte dans les hautes terres de Ba jusqu'au dernier village entièrement bâti en bures de chaume. On offre la racine de yaqona au chef, on attend d'être accepté, puis la coupe circule dans l'ordre des rangs.",
      image: {
        src: "/destination/fidji/xp-sevusevu-navala.webp",
        alt: "Visiteurs dans le village de Navala, entre les bures de chaume",
      },
    },
    {
      slug: "tanzanie",
      description:
        "Deux chasseurs hadzabe partent à l'arc au lever du jour, sur quatre kilomètres de brousse sèche. Leur langue à clics n'est rattachée à aucune famille linguistique connue. Le gibier est parfois pris, souvent non.",
      image: {
        src: "/destination/tanzanie/xp-hadzabe.webp",
        alt: "Chasseur hadzabe tendant son arc dans la brousse, près du lac Eyasi",
      },
    },
    {
      slug: "portugal",
      image: {
        src: "/destination/portugal/xp-fado-alfama.webp",
        alt: "Chanteuse et guitaristes de fado sous les azulejos d'une petite salle de l'Alfama",
      },
    },
    {
      slug: "maroc",
      image: {
        src: "/destination/maroc/xp-sagesse-soufie.webp",
        alt: "Un maître soufi servant le thé à son invité, dans un palais de Fès",
      },
    },
    {
      slug: "nouvelle-zelande",
      image: {
        src: "/subtheme/traditions-vivantes/card-nouvelle-zelande.png",
        alt: "Haka d'un groupe maori, torses nus et jupes de lin, en Nouvelle-Zélande",
      },
    },
    {
      slug: "polynesie",
      image: {
        src: "/subtheme/traditions-vivantes/card-polynesie.png",
        alt: "Danseuse tahitienne en costume traditionnel, en Polynésie française",
      },
    },
    {
      slug: "rio-de-janeiro",
      image: {
        src: "/subtheme/traditions-vivantes/card-rio.png",
        alt: "Danseuse en costume de carnaval lors du défilé, à Rio de Janeiro",
      },
    },
    {
      slug: "argentine",
      image: {
        src: "/subtheme/traditions-vivantes/card-argentine.png",
        alt: "Masque et costume de diable du carnaval, dans le nord-ouest argentin",
      },
    },
    {
      slug: "botswana",
      image: {
        src: "/destination/botswana/xp-marche-san.webp",
        alt: "Guides Bushmen San et marcheurs en file au lever du soleil",
      },
    },
  ],
  sections: [],
};
