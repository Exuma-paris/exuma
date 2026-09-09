import type { Theme } from "@/lib/content/types";

export const theme: Theme = {
  slug: "gastronomie",
  name: "Gastronomie & art de vivre",
  blurb:
    "On ne parle pas de restaurant, on parle de portes qui s'ouvrent. Manger quelque part, c'est comprendre cet endroit.",
  intent:
    "On ne parle pas de restaurant, on parle de portes qui s'ouvrent. La table d'un vigneron qui ne reçoit pas, un chef qui cuisine pour douze le vendredi soir.",
  keywords: ["gastronomie", "vin", "chef", "epicurien", "art de vivre", "vigneron"],
  cardImage: {
    src: "/theme/gastronomie/hero-1-1x1.png",
    alt: "Une table dressée aux chandelles dans une crayère de Champagne, entre les pupitres",
  },
  metaTitle: "Voyage gastronomique sur mesure",
  metaDescription:
    "Voyage gastronomique sur mesure : tables de chefs, vignobles et spiritueux visités au chai, ateliers d'artisans ouverts. Conçu par votre travel designer.",
  sections: [
    {
      type: "hero",
      eyebrow: "Expérience",
      heading: "Gastronomie & art de vivre",
      description: "Des portes qui s'ouvrent, pas des étoiles à cocher.",
      images: [
        {
          src: "/theme/gastronomie/hero-1.png",
          alt: "Une table dressée aux chandelles dans une crayère de Champagne, entre les pupitres",
        },
      ],
    },
    {
      type: "textColumns",
      eyebrow: "Comment choisir",
      heading: "Voyage gastronomique sur mesure",
      columns: [
        "Un voyage gastronomique tient rarement dans une seule table. Il y a le repas qui justifie le détour, le chai où l'on goûte avant l'assemblage, et l'atelier où l'on regarde travailler une main. Trois registres, trois façons d'organiser une journée. Le premier se réserve des mois à l'avance, le deuxième dépend de la saison du vigneron, le troisième d'un artisan qui accepte d'ouvrir. Ce ne sont pas les mêmes contraintes.",
        "À table, la réservation ne suffit pas toujours. Central, à Lima, sert par étages d'altitude, de la côte à quatre mille mètres. Un kaiseki se prend dans une maison de geisha de Gion, où l'on n'entre pas sans être présenté. Un txoko de Saint-Sébastien est une société gastronomique fermée au public, et c'est un membre qui cuisine. Une nonna du Trastevere fait ses pâtes chez elle et n'a jamais eu d'enseigne.",
        "Au chai, la date compte plus que le nom. Les vins clairs de Champagne se goûtent en janvier avec le chef de cave, avant l'assemblage, quand rien n'est encore décidé. Islay ouvre des fûts fermés au public. Vega Sicilia sort ses grands millésimes. L'atelier, lui, prolonge le repas : le crochet de Lunéville chez Lesage, le four d'un maître verrier de Murano, la criée aux fleurs d'Aalsmeer à l'aube.",
      ],
    },
    {
      type: "finalCta",
      eyebrow: "Une table ne fait pas un voyage",
      heading: "Dites-nous quelle cuisine vous voulez suivre, nous bâtirons l'itinéraire",
      primaryCta: { label: "Créer votre voyage", href: "/votre-projet" },
      secondaryCta: { label: "Nous écrire", href: "/nous-ecrire" },
    },
  ],
};
