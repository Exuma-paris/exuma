import type { Continent } from "@/lib/content/types";

export const continent: Continent = {
  slug: "ameriques",
  name: "Amériques",
  genitive: "des Amériques",
  blurb: "De la Patagonie aux Rocheuses, des grands espaces à l'état pur.",
  keywords: [
    "ameriques",
    "argentine",
    "chili",
    "perou",
    "etats-unis",
    "canada",
    "mexique",
    "bresil",
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Continent",
      heading: "Amériques",
      description:
        "Quinze mille kilomètres du Yukon à la Terre de Feu, et toutes les saisons disponibles en même temps. Les Amériques sont le continent où l'on choisit son hémisphère avant de choisir son itinéraire.",
      images: [
        {
          src: "/destination/bresil/hero-1.webp",
          alt: "Dunes blanches et lagunes turquoise des Lençóis Maranhenses au Brésil",
        },
        {
          src: "/destination/rio-de-janeiro/hero-1c.png",
          alt: "Pain de Sucre et baie de Guanabara au lever du jour, Rio de Janeiro",
        },
        {
          src: "/destination/bresil/hero-3.webp",
          alt: "Rideau d'eau des chutes d'Iguaçu vu depuis la passerelle brésilienne",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Deux hémisphères, donc deux saisons hautes par an",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Le continent s'étend sur les deux hémisphères, et c'est sa principale qualité pratique : il y a toujours une partie des Amériques en pleine saison. Décembre et janvier ouvrent la Patagonie et les plages brésiliennes quand l'hiver s'installe en Europe. Juillet et août ramènent la lumière sur les Rocheuses, l'Alaska et les parcs de l'Ouest américain.",
        "Les distances y sont réelles et se planifient. Rio et les Lençóis Maranhenses sont séparés par trois heures de vol, Santiago et la Patagonie par autant. Nos itinéraires américains tiennent rarement plus de trois régions dans un même voyage, et prévoient systématiquement une nuit d'arrivée en ville avant l'étape nature.",
        "L'Amérique centrale et les Caraïbes hispanophones fonctionnent autrement, sur des distances courtes. Au Costa Rica, on passe de la forêt de Tortuguero au volcan Arenal puis à la péninsule de Nicoya en quelques heures de route, avec un guide naturaliste qui reste le même du premier au dernier jour.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/bresil/full-image.webp",
        alt: "Lagunes d'eau douce entre les dunes des Lençóis Maranhenses, Brésil",
      },
      height: 560,
    },

    {
      type: "featureCards",
      layout: "seasons",
      eyebrow: "Quand partir",
      heading: "Quand et où partir dans les Amériques",
      description:
        "Quatre moments de l'année, et la destination que nous choisirions pour chacun.",
      cards: [
        {
          title: "Novembre à mars",
          description:
            "L'été en Patagonie et ses très longues journées. Mars est souvent moins fréquenté.",
          image: {
            src: "/destination/argentine/hero-1.webp",
            alt: "Route de Patagonie menant vers le massif du Fitz Roy",
          },
          link: { label: "Argentine", href: "/destinations/argentine" },
          months: { full: [11, 12, 1, 2, 3] },
        },
        {
          title: "Juin à septembre",
          description:
            "Les lagunes des Lençóis Maranhenses sont au plus haut entre les dunes.",
          image: {
            src: "/destination/bresil/xp-lencois-2.webp",
            alt: "Dunes blanches et lagunes des Lençóis Maranhenses, vues du ciel",
          },
          link: { label: "Brésil", href: "/destinations/bresil" },
          months: { full: [6, 7, 8, 9] },
        },
        {
          title: "Décembre à avril",
          description:
            "La saison sèche, de la forêt au volcan Arenal.",
          image: {
            src: "/destination/costa-rica/hero-2.webp",
            alt: "Le volcan Arenal au-dessus de la forêt",
          },
          link: { label: "Costa Rica", href: "/destinations/costa-rica" },
          months: { full: [12, 1, 2, 3, 4] },
        },
        {
          title: "Janvier à mars",
          description:
            "La neige de l'Ouest canadien et l'héliski.",
          image: {
            src: "/destination/canada/xp-heliski-bugaboos-1.webp",
            alt: "Skieurs et hélicoptère posés sur un sommet enneigé des Bugaboos",
          },
          link: { label: "Canada", href: "/destinations/canada" },
          months: { full: [1, 2, 3] },
        },
      ],
    },

    {
      type: "finalCta",
      eyebrow: "Aller plus loin",
      heading: "Dites-nous ce que vous avez en tête",
      primaryCta: { label: "Créer votre voyage", href: "/votre-projet" },
      secondaryCta: { label: "Nous écrire", href: "/nous-ecrire" },
    },
  ],
};
