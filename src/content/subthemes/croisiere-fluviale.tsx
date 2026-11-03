import type { Subtheme } from "@/lib/content/types";

export const subtheme: Subtheme = {
  slug: "croisiere-fluviale",
  name: "Croisière fluviale",
  themeSlug: "croisiere",
  blockHeading:
    "La croisière fluviale, quand le fleuve sert de route",
  blurb:
    "Le sampan descend le Mékong au rythme du courant, moteur coupé sur les derniers kilomètres. Le Nil, le Zambèze au coucher du soleil, les canaux de l'Okavango en mokoro. On dort à bord ou sur la rive, on s'arrête dans les villages que la route contourne, et le paysage change à la vitesse de l'eau. Le fleuve n'est pas un décor, c'est le moyen d'avancer.",
  bandIntent:
    "Un bateau sur un fleuve, les deux berges dans le cadre. Le fleuve doit se lire comme une route, pas comme un décor.",
  heroImage: {
    src: "/destination/egypte/full-image.webp",
    alt: "Dahabieh à la voile sur le Nil entre Assouan et Louxor",
  },
  thumbnailsIntro:
    "D'autres fleuves à remonter.",
  featuredDestinationSlugs: [
    "egypte",
    "zimbabwe",
    "cambodge",
    "botswana",
  ],
  cards: [
    {
      slug: "egypte",
      description:
        "Quatre-vingt-quinze pour cent des Égyptiens vivent sur quatre pour cent du territoire, le long d'un fleuve qui n'excède parfois pas un kilomètre de large. Le reste est désert. Entre Louxor et Assouan, l'Oberoi Zahra navigue avec vingt-sept cabines et suites, un spa et une piscine sur le pont supérieur, d'où l'on regarde passer les deux rives.",
      image: {
        src: "/subtheme/croisiere-fluviale/card-egypte.png",
        alt: "L'Oberoi Zahra sur le Nil, au soleil bas, devant des rives de sable",
      },
    },
    {
      slug: "zimbabwe",
      description:
        "Le grondement des chutes porte à des kilomètres et la brume d'eau se repère depuis l'avion. Plus en aval, le Zambèze s'élargit en un lac immense, Kariba. L'African Dream n'y prend que seize passagers, et ses sorties mènent au parc de Matusadona, sur la rive sud, où vivent éléphants, hippopotames et buffles.",
      image: {
        src: "/subtheme/croisiere-fluviale/card-zimbabwe.png",
        alt: "L'African Dream au mouillage sur le lac Kariba, au coucher du soleil",
      },
    },
    {
      slug: "cambodge",
      description:
        "Le Cambodge se laisse apprivoiser lentement. À Siem Reap, la forêt s'ouvre sur des temples que l'on croyait connaître et qui se révèlent bien plus vastes. Depuis Phnom Penh, un sampan de bois remonte le Mékong vers Kampong Cham et s'arrête sur les îlots où l'on tisse encore la soie.",
      image: {
        src: "/destination/cambodge/xp-sampan-mekong.webp",
        alt: "Sampan de bois privatisé sur le Mekong entre Phnom Penh et Kampong Cham",
      },
    },
    {
      slug: "botswana",
      description:
        "La rivière Chobe sépare le Botswana de la Namibie et longe le parc national du même nom. Le Chobe Princess n'y compte que quatre ou cinq cabines et peut se privatiser en entier. Depuis le pont supérieur ou en annexe, on observe à l'écart des véhicules les animaux qui descendent boire.",
      image: {
        src: "/subtheme/croisiere-fluviale/card-botswana.png",
        alt: "Le Chobe Princess, bateau-maison, sur la rivière Chobe au soleil bas",
      },
    },
  ],
  sections: [],
};
