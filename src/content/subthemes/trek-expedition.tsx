import type { Subtheme } from "@/lib/content/types";

export const subtheme: Subtheme = {
  slug: "trek-expedition",
  name: "Trek & expédition",
  themeSlug: "safaris-aventure",
  blockHeading:
    "Trek et expédition, quand le terrain décide de la journée",
  blurb:
    "La piste de Landmannalaugar ne s'ouvre qu'à l'été, selon la fonte. Les canaux d'Última Esperanza n'ont plus ni route ni village. Sur la moraine de l'Upsala, un glaciologue ouvre la marche. Le rythme vient du terrain, et la logistique se prépare à l'avance. La montagne à base fixe relève du ski et de la montagne.",
  bandIntent:
    "Des marcheurs en file, sac au dos, dans un paysage vide et grand. L'effort et la distance doivent se lire.",
  heroImage: {
    src: "/subtheme/trek-expedition/band.png",
    alt: "Marcheurs en file, sac au dos, dans un grand paysage vide",
  },
  thumbnailsIntro:
    "D'autres itinéraires, pour qui a déjà marché ailleurs.",
  featuredDestinationSlugs: [
    "islande",
    "chili",
    "argentine",
    "vietnam",
    "corse",
    "jordanie",
    "emirats-arabes-unis",
    "egypte",
    "indonesie",
    "madagascar",
    "perou",
    "nouvelle-zelande",
  ],
  cards: [
    {
      slug: "islande",
      description:
        "La piste des Hautes Terres s'ouvre entre la mi-juin et le début juillet, selon la fonte, et ne se pratique qu'en super jeep. On passe des rivières à gué et des déserts de cendre noire, puis l'on marche deux ou trois heures entre la coulée d'obsidienne de Laugahraun et les crêtes de Brennisteinsalda, où la terre fume encore.",
      image: {
        src: "/destination/islande/xp-landmannalaugar-1.webp",
        alt: "Montagnes de rhyolite ocre, rouge et verte de Landmannalaugar",
      },
    },
    {
      slug: "chili",
      description:
        "Cinq jours au départ de Puerto Natales, par les canaux d'Última Esperanza jusqu'aux glaciers Balmaceda et Serrano, là où il n'y a plus de route ni de village. Le zodiac approche les fronts de glace, et le soir on dîne de la centolla achetée le matin aux pêcheurs.",
      image: {
        src: "/destination/chili/xp-fjords-kawesqar.webp",
        alt: "Voilier au mouillage devant un glacier, dans les canaux de Patagonie",
      },
    },
    {
      slug: "argentine",
      description:
        "Le bras nord du lac Argentino reste fermé aux circuits réguliers, si bien que l'on remonte seuls entre les icebergs jusqu'au front de l'Upsala. La marche sur la moraine se fait ensuite avec un glaciologue, qui lit dans la glace ce que l'œil ne voit pas.",
      image: {
        src: "/destination/argentine/xp-glacier-upsala.webp",
        alt: "Front du glacier Upsala au-dessus de l'eau turquoise du lac Argentino",
      },
    },
    {
      slug: "vietnam",
      description:
        "Un guide Hmong conduit la marche entre les rizières en terrasses des hauts plateaux du nord-ouest. La nuit se passe chez une famille, au son du torrent qui descend vers la vallée.",
      image: {
        src: "/destination/vietnam/xp-trekking-sapa.webp",
        alt: "Deux marcheurs sur un sentier entre les rizières en terrasses de Sapa",
      },
    },
    {
      slug: "corse",
      image: {
        src: "/destination/corse/xp-randonnee-gr20.webp",
        alt: "Randonneuse sur un sentier au pied des aiguilles de granit de Bavella",
      },
    },
    {
      slug: "emirats-arabes-unis",
      image: {
        src: "/destination/emirats-arabes-unis/xp-bivouac-rub-al-khali.webp",
        alt: "Tentes éclairées derrière une dune de Liwa, à la nuit tombée",
      },
    },
    {
      slug: "egypte",
      image: {
        src: "/destination/egypte/xp-siwa.webp",
        alt: "Tente de campement éclairée dans la Grande Mer de Sable, près de Siwa",
      },
    },
    {
      slug: "nouvelle-zelande",
      image: {
        src: "/destination/nouvelle-zelande/map-milford-sound.webp",
        alt: "Fjord de Milford Sound entouré de falaises abruptes, dans le Fiordland",
      },
    },
  ],
  sections: [],
};
