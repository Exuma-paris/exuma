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
      eyebrow: "Destinations phares",
      heading: "Trois entrées dans les Amériques",
      description:
        "Un pays-continent, la ville la plus photographiée du sous-continent et un pays d'Amérique centrale entièrement tourné vers la nature.",
      cards: [
        {
          title: "Brésil",
          description:
            "Les dunes et lagunes des Lençóis Maranhenses, les façades du Pelourinho à Salvador, le rideau d'eau d'Iguaçu. Trois régions séparées par trois heures de vol chacune, que l'on assemble rarement en moins de douze nuits.",
          image: {
            src: "/destination/bresil/hero-2.webp",
            alt: "Façades colorées du Pelourinho à Salvador de Bahia en fin de journée",
          },
          link: { label: "Découvrir", href: "/destinations/bresil" },
        },
        {
          title: "Rio de Janeiro",
          description:
            "Copacabana, Ipanema, Santa Teresa et le Corcovado tiennent dans un rayon de quinze kilomètres. La ville ouvre ou referme la plupart de nos itinéraires brésiliens, avec trois nuits au minimum.",
          image: {
            src: "/destination/rio-de-janeiro/hero-2.png",
            alt: "Plage d'Ipanema et pic des Dois Irmãos au coucher du soleil",
          },
          link: { label: "Découvrir", href: "/destinations/rio-de-janeiro" },
        },
        {
          title: "Costa Rica",
          description:
            "De la forêt de Tortuguero au volcan Arenal puis à la péninsule de Nicoya, tout se fait par la route en quelques heures. Un guide naturaliste suit le voyage du premier au dernier jour.",
          image: {
            src: "/destination/costa-rica/hero-2.webp",
            alt: "Cône du volcan Arenal dégagé au-dessus de la forêt de La Fortuna",
          },
          link: { label: "Découvrir", href: "/destinations/costa-rica" },
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
