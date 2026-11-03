import type { CruiseLine } from "@/lib/content/types";

export const cruiseLine: CruiseLine = {
  slug: "scenic",
  name: "Scenic",
  blurb:
    "Deux yachts de découverte, Scenic Eclipse et Scenic Eclipse II, équipés de deux hélicoptères et d'un sous-marin. Un majordome pour chaque suite, de l'Antarctique au Pacifique Sud.",
  keywords: ["scenic", "scenic eclipse", "yacht de decouverte", "sous-marin", "helicoptere", "antarctique"],
  heroImage: {
    src: "/cruise-line/scenic/hero.png",
    alt: "Scenic Eclipse amarré à la banquise en Antarctique, passagers sur la glace",
  },
  destinationSlugs: ["nouvelle-zelande", "australie", "corse"],
  metaTitle: "Croisière Scenic Eclipse : yacht de découverte",
  metaDescription:
    "Croisière Scenic Eclipse avec Exuma : hélicoptères, sous-marin et majordome pour chaque suite, de l'Antarctique au Pacifique Sud. Organisée par votre travel designer.",
  sections: [
    {
      type: "heroImageBackground",
      eyebrow: "Croisière d'exception",
      heading: "Scenic Eclipse, le yacht qui va voir de plus près",
      description:
        "Un navire de luxe renforcé pour la glace, avec de quoi quitter le pont : par les airs, sous l'eau ou en zodiac.",
      images: [
        {
          src: "/cruise-line/scenic/hero.png",
          alt: "Scenic Eclipse amarré à la banquise en Antarctique, passagers sur la glace",
        },
      ],
    },
    {
      type: "textImagesSplit",
      logo: { src: "/cruise-line/scenic/logo.png", alt: "Logo Scenic" },
      eyebrow: "Le yacht de découverte",
      heading: "Deux hélicoptères et un sous-marin à bord",
      paragraphs: [
        "Scenic Eclipse II mesure cent soixante-huit mètres, pour cent quatorze suites et deux cent vingt-huit passagers au plus, deux cents seulement en Antarctique. Il est classé pour la navigation polaire, et le nombre d'employés approche celui des passagers.",
        "Ses deux hélicoptères et son sous-marin servent à sortir du navire, en supplément et selon la météo et la réglementation locale : ils ne sont pas autorisés partout, notamment dans une partie de l'Europe et de la Méditerranée. Chaque suite a son majordome, de la plus petite, trente-deux mètres carrés, au grand penthouse de deux cent quarante-sept.",
      ],
      images: [
        {
          src: "/cruise-line/scenic/split-1.png",
          alt: "Le sous-marin de Scenic Eclipse, phares allumés au-dessus d'un fond marin",
        },
        {
          src: "/cruise-line/scenic/split-2.png",
          alt: "Grande terrasse d'une suite de Scenic Eclipse, face à une côte aux falaises rouges",
        },
      ],
    },
    {
      type: "featureCards",
      eyebrow: "Le service à bord",
      heading: "Un majordome, quelle que soit la suite",
      description:
        "Toutes les suites ont leur majordome, sans distinction de catégorie. Le reste du bord suit la même idée.",
      cards: [
        {
          title: "Un majordome par suite",
          description:
            "Chaque suite a le sien, de la plus petite au grand penthouse. Il s'occupe de vous pendant tout le voyage.",
          image: {
            src: "/cruise-line/scenic/service-majordome.png",
            alt: "Majordome en gants blancs posant un plateau et des jumelles sur une table",
          },
        },
        {
          title: "Koko's",
          description:
            "Cuisine asiatique de fusion, dans une salle aux grands portraits. Le soir, le lieu se transforme pour ses Night Markets.",
          image: {
            src: "/cruise-line/scenic/service-koko.png",
            alt: "Tables dressées devant une grande fresque de portraits, chez Koko's",
          },
        },
        {
          title: "Lumière",
          description:
            "L'autre grande table du bord, à choisir selon l'humeur du soir, en alternance avec Koko's.",
          image: {
            src: "/cruise-line/scenic/service-lumiere.png",
            alt: "Serveur portant deux assiettes dressées, à Lumière",
          },
        },
        {
          title: "Le Senses Spa",
          description:
            "Salon de thérapie par le sel, sauna infrarouge et bassin de vitalité sur le pont supérieur. Les soins sont en supplément.",
          image: {
            src: "/cruise-line/scenic/service-spa.png",
            alt: "Bassin de vitalité sur le pont supérieur, face à la mer",
          },
        },
        {
          title: "Sous l'eau, sans bouteille",
          description:
            "Sur certains voyages en eaux chaudes, les seabobs sont compris : ces petits propulseurs permettent de glisser au-dessus du récif.",
          image: {
            src: "/cruise-line/scenic/service-seabob.png",
            alt: "Passager filant sous l'eau en seabob, au-dessus d'un récif",
          },
        },
        {
          title: "Le salon d'observation",
          description:
            "Une bibliothèque, de larges fauteuils et de grandes baies, pour suivre la route ou le passage d'un iceberg sans sortir.",
          image: {
            src: "/cruise-line/scenic/service-lounge.png",
            alt: "Salon d'observation, fauteuils arrondis et bibliothèque colorée",
          },
        },
      ],
    },
    {
      type: "entityList",
      kind: "destination",
      eyebrow: "Où il navigue",
      heading: "Les destinations à combiner avec votre croisière",
      description:
        "Scenic part de Hobart ou de Dunedin vers l'Antarctique de l'Est, puis navigue dans le Pacifique Sud, en Asie et en Méditerranée selon la saison.",
      slugs: ["nouvelle-zelande", "australie", "corse"],
      cardOverrides: [
        {
          slug: "nouvelle-zelande",
          image: {
            src: "/destination/nouvelle-zelande/map-milford-sound.webp",
            alt: "Milford Sound et ses sommets au-dessus de l'eau, en Nouvelle-Zélande",
          },
        },
      ],
    },
    {
      type: "finalCta",
      eyebrow: "Votre croisière Scenic",
      heading: "Dites-nous jusqu'où vous voulez aller, nous choisirons le voyage avec vous",
      primaryCta: { label: "Parler de votre projet de croisière", href: "/votre-projet" },
      secondaryCta: { label: "Nous écrire", href: "/nous-ecrire" },
    },
  ],
};
