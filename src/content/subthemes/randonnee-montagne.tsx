import type { Subtheme } from "@/lib/content/types";

export const subtheme: Subtheme = {
  slug: "randonnee-montagne",
  name: "Randonnée en montagne",
  themeSlug: "ski-montagne",
  blockHeading:
    "La randonnée en montagne, à la journée, depuis une base fixe",
  blurb:
    "Trois heures le long de la levada du Caldeirão Verde à Madère, la via ferrata Ivano Dibona au-dessus de Cortina, une étape du GR20 en Corse. On part le matin, on rentre le soir, et l'altitude se pratique sans engagement d'expédition.",
  bandIntent:
    "Un sentier de crête ou de flanc parcouru à la journée, sans équipement d'expédition. Une vallée visible en contrebas.",
  heroImage: {
    src: "/subtheme/randonnee-montagne/band.png",
    alt: "Un sentier de crête parcouru à la journée, la vallée visible en contrebas",
    position: "center 85%",
  },
  thumbnailsIntro:
    "D'autres sentiers, à la journée eux aussi.",
  featuredDestinationSlugs: [
    "madere",
    "italie",
    "corse",
    "canada",
  ],
  cards: [
    {
      slug: "madere",
      description:
        "Les levadas sont des canaux construits pour conduire l'eau des montagnes du nord vers les cultures du sud. Celle du Caldeirão Verde part de Queimadas, sous des arbres couverts de mousse, passe entre les fougères et par quelques tunnels, puis aboutit à une cascade qui tombe dans un cirque. Comptez environ trois heures de marche.",
      image: {
        src: "/destination/madere/split-1.webp",
        alt: "Sentier le long d'une levada, au pied d'une paroi couverte de mousse",
      },
    },
    {
      slug: "italie",
      description:
        "La via ferrata Ivano Dibona suit l'ancien front de la Grande Guerre sur le massif du Cristallo. Un guide de montagne vous accompagne jusqu'au pont suspendu, tendu au-dessus du vide face à la vallée de Cortina.",
      image: {
        src: "/destination/italie/xp-via-ferrata.webp",
        alt: "Marcheur sur le pont suspendu de la via ferrata Ivano Dibona, contre la paroi",
      },
    },
    {
      slug: "corse",
      description:
        "Une journée d'altitude avec un guide local, sur l'un des plus beaux tronçons du GR20. Le sentier passe au pied des aiguilles de granit de Bavella, entre les pins laricio.",
      image: {
        src: "/destination/corse/xp-randonnee-gr20.webp",
        alt: "Randonneuse sur un sentier au pied des aiguilles de granit de Bavella",
      },
    },
    {
      slug: "canada",
      description:
        "On monte au lac Moraine avant l'ouverture de la navette, quand l'eau reste parfaitement lisse et que les sommets passent du bleu au cuivre. Le canoë attend sur la berge. Dans l'arrière-pays de Banff, deux jours de selle mènent à un chalet de rondins sans électricité.",
      image: {
        src: "/destination/canada/xp-canoe-moraine.webp",
        alt: "Canoë sur l'eau turquoise du lac Moraine, au pied des parois",
      },
    },
  ],
  sections: [],
};
