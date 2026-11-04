import type { CruiseLine } from "@/lib/content/types";

export const cruiseLine: CruiseLine = {
  slug: "four-seasons-yachts",
  name: "Four Seasons Yachts",
  blurb:
    "Le service de la maison Four Seasons transposé en mer, sur un yacht de quatre-vingt-quinze suites entre Méditerranée et Caraïbes. Un second navire est annoncé pour 2028.",
  keywords: ["four seasons", "four seasons i", "four seasons ii", "yacht", "mediterranee", "caraibes"],
  heroImage: {
    src: "/cruise-line/four-seasons-yachts/hero.png",
    alt: "Le Four Seasons I en navigation au soleil bas, des îles à l'horizon",
  },
  destinationSlugs: ["grece", "croatie", "italie", "turquie", "montenegro", "espagne", "portugal", "saint-barthelemy", "sainte-lucie", "barbade", "saint-vincent-et-les-grenadines"],
  metaTitle: "Croisière Four Seasons Yachts",
  metaDescription:
    "Croisière Four Seasons Yachts avec Exuma : quatre-vingt-quinze suites, Méditerranée en été et Caraïbes en hiver. Organisée par votre travel designer.",
  sections: [
    {
      type: "heroImageBackground",
      eyebrow: "Croisière d'exception",
      heading: "Four Seasons Yachts, le palace prend la mer",
      description:
        "La maison hôtelière applique en mer ce qu'elle sait faire à terre : de grandes suites, un service attentif et des escales choisies.",
      images: [
        {
          src: "/cruise-line/four-seasons-yachts/hero.png",
          alt: "Le Four Seasons I en navigation au soleil bas, des îles à l'horizon",
        },
      ],
    },
    {
      type: "textImagesSplit",
      logo: { src: "/cruise-line/four-seasons-yachts/logo.png", alt: "Logo Four Seasons" },
      eyebrow: "Four Seasons I",
      heading: "Quatre-vingt-quinze suites sur deux cent sept mètres",
      paragraphs: [
        "Le Four Seasons I navigue depuis mars 2026. Il mesure deux cent sept mètres et accueille au plus deux cent vingt-deux passagers, dans des suites pensées comme des appartements. Les plus vastes se déploient sur deux niveaux, avec leur propre terrasse.",
        "À bord, onze restaurants et salons, une piscine d'eau de mer de vingt mètres et le spa L'Oceana. Sur les côtés du navire, une marina s'ouvre sur des plateformes rétractables pour se baigner ou partir en mer depuis le yacht.",
      ],
      images: [
        {
          src: "/cruise-line/four-seasons-yachts/split-1.png",
          alt: "Chambre d'une suite du Four Seasons I, boiseries et rideaux clairs",
        },
        {
          src: "/cruise-line/four-seasons-yachts/split-2.png",
          alt: "Tables dressées dans un restaurant du Four Seasons I",
        },
      ],
    },
    {
      type: "featureCards",
      eyebrow: "Le service à bord",
      heading: "Autant d'employés que de passagers",
      description:
        "Le navire compte près d'un membre d'équipage par passager. La maison transpose ainsi en mer le service de ses hôtels.",
      cards: [
        {
          title: "Un employé par passager",
          description:
            "Près d'un membre d'équipage pour un passager : c'est la proportion que la maison a retenue pour ses deux yachts.",
          image: {
            src: "/cruise-line/four-seasons-yachts/service-equipe.png",
            alt: "Chefs et passagers réunis autour d'un plan de travail, à bord",
          },
        },
        {
          title: "Onze restaurants et salons",
          description:
            "De Terrasse, cuisine côtière inspirée des escales, à Miuna, table omakase autour de produits locaux. De quoi changer de table chaque soir.",
          image: {
            src: "/cruise-line/four-seasons-yachts/service-table.png",
            alt: "Chef dressant des assiettes avec du caviar",
          },
        },
        {
          title: "La piscine et la marina",
          description:
            "Une piscine d'eau de mer de vingt mètres, puis, les jours de marina, une terrasse au ras de l'eau avec sports nautiques et bassin en mer.",
          image: {
            src: "/cruise-line/four-seasons-yachts/service-piscine.png",
            alt: "Passagère allongée au soleil, un grand chapeau de paille sur le visage",
          },
        },
        {
          title: "Le spa L'Oceana",
          description:
            "Un parcours thermal, des cabines de soins et une salle de sport.",
          image: {
            src: "/cruise-line/four-seasons-yachts/service-spa.png",
            alt: "Sauna de bois clair du spa, ouvert par de grands hublots",
          },
        },
        {
          title: "Horizon Lounge",
          description:
            "Le salon reprend l'esprit des clubs de plage de la Méditerranée : des mezzés à partager et des vins de l'Adriatique, face à la mer.",
          image: {
            src: "/cruise-line/four-seasons-yachts/service-horizon.png",
            alt: "La mer vue à travers une arche, depuis le salon Horizon",
          },
        },
        {
          title: "Des expériences à terre",
          description:
            "Chaque voyage prévoit des escales longues et des nuits au port, avec des sorties sur mesure à terre comme en mer.",
          image: {
            src: "/cruise-line/four-seasons-yachts/service-terre.png",
            alt: "Déjeuner dressé entre deux rangs de vigne, en Méditerranée",
          },
        },
      ],
    },
    {
      type: "textImagesSplit",
      eyebrow: "À venir",
      heading: "Four Seasons II, attendu en 2028",
      paragraphs: [
        "La maison prépare un second yacht de soixante-dix-neuf suites, avec de nouvelles suites résidentielles de deux à quatre chambres sur les ponts supérieurs. Il reprend les espaces du Four Seasons I, avec le même nombre d'employés pour un passager et onze tables et salons.",
        "Les voyages de sa première saison sont déjà ouverts à la réservation : nous pouvons vous les présenter.",
      ],
      images: [
        {
          src: "/cruise-line/four-seasons-yachts/four-seasons-2.png",
          alt: "Salon d'une suite Four Seasons, boiseries et canapés clairs",
        },
      ],
    },
    {
      type: "entityList",
      kind: "destination",
      layout: "spotlight",
      eyebrow: "Où il navigue",
      heading: "Les destinations à visiter à bord du Four Seasons I",
      description:
        "La Méditerranée à la belle saison, les Caraïbes et les Bahamas en hiver. Nous prolongeons la croisière à terre, avant ou après le voyage.",
      slugs: ["grece", "croatie", "saint-barthelemy", "sainte-lucie", "italie", "turquie", "montenegro", "espagne", "portugal", "barbade", "saint-vincent-et-les-grenadines"],
      cardOverrides: [
        {
          slug: "saint-vincent-et-les-grenadines",
          image: {
            src: "/subtheme/voilier/card-saint-vincent.png",
            alt: "Catamaran au mouillage près d'un récif, vu du ciel, dans les Grenadines",
          },
        },
      ],
    },
    {
      type: "finalCta",
      eyebrow: "Votre croisière Four Seasons",
      heading: "Dites-nous quand vous voulez partir, nous choisirons le voyage avec vous",
      primaryCta: { label: "Parler de votre projet de croisière", href: "/votre-projet" },
      secondaryCta: { label: "Nous écrire", href: "/nous-ecrire" },
    },
  ],
};
