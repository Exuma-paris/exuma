import type { Subtheme } from "@/lib/content/types";

export const subtheme: Subtheme = {
  slug: "sites-historiques",
  name: "Villes & sites historiques",
  themeSlug: "culture-visites",
  blockHeading:
    "Les sites historiques, aux heures les plus calmes",
  blurb:
    "L'Acropole se visite en petit groupe, tôt, avant que la chaleur et la foule ne montent. À Pompéi, on entre en fin d'après-midi, quand les rues se vident. À Hegra, un archéologue lit les tombeaux avec vous, et dans la Vallée Sacrée, un autre explique les terrasses circulaires de Moray. Selon les sites, ces accès se négocient à l'avance, et un spécialiste vous accompagne.",
  bandIntent:
    "Une colonnade ou un site archéologique désert, lumière rasante du matin. L'absence de foule est le sujet.",
  heroImage: {
    src: "/subtheme/sites-historiques/band.png",
    alt: "Grande colonnade de Palmyre déserte, dans la lumière rasante du matin",
  },
  thumbnailsIntro:
    "D'autres sites, moins fréquentés et tout aussi bien tenus.",
  featuredDestinationSlugs: [
    "grece",
    "italie",
    "perou",
    "arabie-saoudite",
    "jordanie",
    "cambodge",
    "chine",
    "ile-de-paques",
    "mexique",
    "inde",
    "france",
    "oman",
  ],
  cards: [
    {
      slug: "grece",
      description:
        "On monte en petit groupe, tôt le matin, à l'heure la plus calme. Un archéologue raconte le Parthénon avant que la chaleur et la foule ne montent. À Delphes, un autre lit les stèles et l'emplacement de l'oracle, à flanc du mont Parnasse.",
      image: {
        src: "/destination/grece/xp-acropole.webp",
        alt: "Odéon d'Hérode Atticus et Athènes dans la lumière du matin, depuis l'Acropole",
      },
    },
    {
      slug: "italie",
      description:
        "En fin d'après-midi, les rues de Pompéi se vident peu à peu. Selon les autorisations du moment, un archéologue vous ouvre des maisons que le public voit rarement, et raconte la journée qui s'est arrêtée là.",
      image: {
        src: "/subtheme/sites-historiques/card-italie.png",
        alt: "Forum de Pompéi désert et statues de bronze, sous le Vésuve enneigé",
      },
    },
    {
      slug: "perou",
      description:
        "Un archéologue accompagne la journée, en voiture privée depuis Cusco. À Moray, il explique comment les Incas ont pu se servir de ces terrasses circulaires pour tester leurs cultures à différentes températures. Aux salines de Maras, les familles du village récoltent encore le sel à la main.",
      image: {
        src: "/destination/perou/xp-vallee-sacree.webp",
        alt: "Guide et deux voyageurs devant les murs de pierre des terrasses de Moray, dans la Vallée Sacrée",
      },
    },
    {
      slug: "arabie-saoudite",
      description:
        "Hegra était la deuxième ville des Nabatéens après Pétra. Plus d'une centaine de tombeaux sont taillés dans le grès. Un archéologue qui a travaillé sur les fouilles les lit avec vous, puis on termine devant Qasr al-Farid, le tombeau isolé.",
      image: {
        src: "/destination/arabie-saoudite/xp-hegra.webp",
        alt: "Qasr al-Farid, tombeau nabatéen taillé dans un rocher isolé, à Hegra",
      },
    },
    {
      slug: "jordanie",
      image: {
        src: "/destination/jordanie/split-1.webp",
        alt: "Façade rose du Trésor de Pétra, vue depuis le Sîq",
      },
    },
    {
      slug: "oman",
      image: {
        src: "/subtheme/sites-historiques/card-oman.png",
        alt: "Fort de Nakhal sur son rocher, à Oman",
      },
    },
    {
      slug: "cambodge",
      image: {
        src: "/subtheme/sites-historiques/card-cambodge.png",
        alt: "Temple d'Angkor Vat et son reflet dans le bassin, au Cambodge",
      },
    },
    {
      slug: "inde",
      image: {
        src: "/subtheme/sites-historiques/card-inde.png",
        alt: "Temple d'Or d'Amritsar et son bassin sacré, en Inde",
      },
    },
    {
      slug: "france",
      image: {
        src: "/subtheme/sites-historiques/card-france.png",
        alt: "Le Mont-Saint-Michel entouré par la mer, au crépuscule",
      },
    },
    {
      slug: "mexique",
      image: {
        src: "/subtheme/sites-historiques/card-mexique.png",
        alt: "La pyramide du Devin dans la cité maya d'Uxmal, au Yucatán",
      },
    },
  ],
  sections: [],
};
