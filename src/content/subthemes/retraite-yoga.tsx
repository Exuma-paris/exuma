import type { Subtheme } from "@/lib/content/types";

export const subtheme: Subtheme = {
  slug: "retraite-yoga",
  name: "Yoga & relaxation",
  themeSlug: "bien-etre",
  blockHeading:
    "Le yoga et la cure, quand on accepte de rester",
  blurb:
    "Au Kerala, le médecin écrit le programme dès l'arrivée, pour quatorze nuits au moins. Sur la côte sud du Sri Lanka, la cure dure deux semaines chez un médecin de famille. Au-dessus de l'Ayung, près d'Ubud, le COMO Shambhala ouvre la journée par le yoga du lever du soleil.",
  bandIntent:
    "Une plateforme de bois ouverte sur la végétation, tapis posés, personne ou presque. Lumière du tout début de journée.",
  heroImage: {
    src: "/subtheme/retraite-yoga/band.png",
    alt: "Plateforme de bois ouverte sur la forêt au petit matin, trois tapis posés",
  },
  thumbnailsIntro:
    "D'autres retraites, dans d'autres écoles.",
  featuredDestinationSlugs: [
    "inde",
    "sri-lanka",
    "indonesie",
  ],
  cards: [
    {
      slug: "inde",
      description:
        "Dans le palais de Kalari Kovilakom, au nord du Kerala, un médecin établit votre programme dès l'arrivée : soins aux huiles, yoga, cuisine végétarienne. La cure dure au moins quatorze nuits, sans télévision ni alcool.",
      image: {
        src: "/destination/inde/xp-ayurveda-kerala.webp",
        alt: "Véranda à colonnes de bois d'une maison du Kerala, table de soins à l'ombre",
      },
    },
    {
      slug: "sri-lanka",
      description:
        "Sur la côte sud, une famille exerce depuis quatre générations et cultive ses plantes derrière la maison. Consultation le premier jour, massage à quatre mains, décoctions amères, puis deux semaines sans café.",
      image: {
        src: "/destination/sri-lanka/xp-ayurveda-cote-sud.webp",
        alt: "Filet d'huile versé sur le front pendant un soin ayurvédique",
      },
    },
    {
      slug: "indonesie",
      description:
        "À vingt minutes d'Ubud, le COMO Shambhala Estate surplombe la vallée de l'Ayung. Le yoga du lever du soleil fait partie du programme quotidien, et chaque retraite commence par une consultation personnelle.",
      image: {
        src: "/subtheme/retraite-yoga/card-indonesie.png",
        alt: "Piscine à débordement et pavillon de bois du COMO Shambhala Estate, au-dessus de la forêt de l'Ayung",
      },
    },
  ],
  sections: [],
};
