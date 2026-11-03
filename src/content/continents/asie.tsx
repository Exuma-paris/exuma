import type { Continent } from "@/lib/content/types";

export const continent: Continent = {
  slug: "asie",
  name: "Asie",
  genitive: "d'Asie",
  blurb: "Du Japon aux Maldives, des cultures qui se livrent par initiation.",
  keywords: ["asie", "japon", "chine", "vietnam", "bali", "maldives"],
  sections: [
    {
      type: "hero",
      eyebrow: "Continent",
      heading: "Asie",
      description:
        "Temples ouverts avant l'arrivée du public, ryokans de huit chambres, traversées en voilier traditionnel. En Asie, l'accès compte autant que le lieu, et il se prépare longtemps à l'avance.",
      images: [
        {
          src: "/destination/japon/hero-3.png",
          alt: "Mont Fuji enneigé vu depuis les rives du lac Kawaguchiko, Japon",
        },
        {
          src: "/destination/indonesie/hero-2.webp",
          alt: "Phinisi à voiles carguées mouillé devant les collines sèches du parc national de Komodo",
        },
        {
          src: "/destination/thailande/hero-2.webp",
          alt: "Toits de tuiles vernissées et chedis dorés du temple de Wat Pho à Bangkok",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Un continent où l'accès se réserve des mois à l'avance",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "L'Asie est la région où l'anticipation change le plus le voyage. Les meilleures chambres des ryokans japonais partent six mois avant la saison des érables, les phinisi du parc de Komodo se bloquent une année à l'avance pour les fêtes, et une ouverture privée de temple se négocie avec l'établissement religieux, pas avec un guichet. Les voyages que nous préparons le plus tôt sont presque toujours asiatiques.",
        "Les distances y sont longues et les climats se contredisent d'une île à l'autre. La mousson touche la côte d'Andaman de mai à octobre et le golfe de Thaïlande de septembre à décembre, ce qui permet de rester dans le pays en changeant simplement de côte. Au Japon, la floraison des cerisiers monte du sud au nord sur six semaines, et les érables redescendent en sens inverse à l'automne.",
        "Nos itinéraires asiatiques alternent presque toujours une ville et un terrain plus calme. Tokyo puis les rives du lac Kawaguchiko, Bangkok puis la baie de Phang Nga, Ubud puis Sumba. La ville sert d'acclimatation après un vol de nuit, la suite se fait à un rythme plus lent.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/japon/full-image.png",
        alt: "Tunnel de torii rouges du sanctuaire Fushimi Inari à Kyoto, Japon",
      },
      height: 560,
    },

    {
      type: "featureCards",
      layout: "seasons",
      eyebrow: "Quand partir",
      heading: "Quand et où partir en Asie",
      description:
        "Quatre moments de l'année, et la destination que nous choisirions pour chacun.",
      cards: [
        {
          title: "Fin mars, début avril",
          description:
            "Les cerisiers fleurissent à Tokyo, puis à Kyoto quelques jours plus tard. La date varie chaque année.",
          image: {
            src: "/destination/japon/hero-3.png",
            alt: "Le mont Fuji derrière un lac, encadré de cerisiers en fleurs",
          },
          link: { label: "Japon", href: "/destinations/japon" },
          months: { full: [], partial: [3, 4] },
        },
        {
          title: "Novembre à mars",
          description:
            "La côte d'Andaman au sec, de Bangkok à la baie de Phang Nga.",
          image: {
            src: "/destination/thailande/hero-1.webp",
            alt: "Pitons calcaires et mangroves de la baie de Phang Nga",
          },
          link: { label: "Thaïlande", href: "/destinations/thailande" },
          months: { full: [11, 12, 1, 2, 3] },
        },
        {
          title: "Mai à septembre",
          description:
            "Saison sèche à Komodo, avec une mer calme en mai, juin et septembre.",
          image: {
            src: "/destination/indonesie/hero-2.webp",
            alt: "Les baies de l'île de Padar, dans le parc national de Komodo",
          },
          link: { label: "Indonésie", href: "/destinations/indonesie" },
          months: { full: [5, 6, 7, 8, 9] },
        },
        {
          title: "Octobre et novembre",
          description:
            "Après la mousson, l'air clair dégage l'Himalaya.",
          image: {
            src: "/destination/bhoutan/hero-1.webp",
            alt: "Le monastère de Taktsang accroché à sa falaise",
          },
          link: { label: "Bhoutan", href: "/destinations/bhoutan" },
          months: { full: [10, 11] },
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
