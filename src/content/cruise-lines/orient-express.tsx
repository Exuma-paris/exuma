import type { CruiseLine } from "@/lib/content/types";

export const cruiseLine: CruiseLine = {
  slug: "orient-express",
  name: "Orient Express",
  blurb:
    "Le plus grand voilier du monde, cinquante-quatre suites et des voiles rigides. L'Orient Express Corinthian navigue l'été en Méditerranée et l'hiver aux Caraïbes.",
  keywords: ["orient express", "corinthian", "voilier", "yacht", "mediterranee", "caraibes"],
  heroImage: {
    src: "/cruise-line/orient-express/hero.png",
    alt: "L'Orient Express Corinthian sous voiles devant des falaises calcaires, au soleil couchant",
  },
  destinationSlugs: [
    "italie",
    "corse",
    "grece",
    "croatie",
    "saint-barthelemy",
    "saint-vincent-et-les-grenadines",
    "antigua",
    "barbade",
    "france",
    "turquie",
    "espagne",
    "portugal",
    "maroc",
  ],
  metaTitle: "Croisière Orient Express Corinthian",
  metaDescription:
    "Croisière à bord de l'Orient Express Corinthian avec Exuma : cinquante-quatre suites, Méditerranée l'été, Caraïbes l'hiver. Organisée par votre travel designer.",
  sections: [
    {
      type: "heroImageBackground",
      eyebrow: "Croisière d'exception",
      heading: "Orient Express Corinthian, le voilier en grand",
      description:
        "Le nom du train de légende, porté cette fois par un voilier de deux cent vingt mètres construit à Saint-Nazaire.",
      images: [
        {
          src: "/cruise-line/orient-express/hero.png",
          alt: "L'Orient Express Corinthian sous voiles devant des falaises calcaires, au soleil couchant",
        },
      ],
    },
    {
      type: "textImagesSplit",
      logo: { src: "/cruise-line/orient-express/logo.png", alt: "Logo Orient Express" },
      eyebrow: "Le navire",
      heading: "Trois mâts, des voiles rigides et cinquante-quatre suites",
      paragraphs: [
        "L'Orient Express Corinthian a été baptisé à Saint-Nazaire en avril 2026, aux Chantiers de l'Atlantique. Il porte trois voiles rigides qui se replient sur leurs mâts, un système conçu pour faire avancer un navire de cette taille au vent quand les conditions le permettent. C'est le premier voilier de la marque Orient Express, qui appartient au groupe Accor.",
        "À bord, cinquante-quatre suites pour cent dix passagers, toutes avec majordome. Les intérieurs sont signés Maxime d'Angeac, dans l'esprit Art déco des voitures du train. L'été se passe en Méditerranée, entre la Riviera, l'Italie et la Grèce ; l'hiver aux Caraïbes.",
      ],
      images: [
        {
          src: "/cruise-line/orient-express/split-1.png",
          alt: "Pont en teck et voile rigide de l'Orient Express Corinthian",
        },
        {
          src: "/cruise-line/orient-express/split-2.png",
          alt: "Salon de la suite Agatha Christie à bord de l'Orient Express Corinthian",
        },
      ],
    },
    {
      type: "featureCards",
      eyebrow: "Le service à bord",
      heading: "Un palace à la voile, avec un majordome pour chaque suite",
      description:
        "Les vins et spiritueux, la blanchisserie et les transferts depuis l'aéroport sont compris. Ce qui surprend à bord tient moins au luxe qu'à ce qu'on n'attend pas sur un voilier : un studio d'enregistrement, un cabaret, une marina.",
      cards: [
        {
          title: "Un majordome par suite",
          description:
            "Il vous accueille dans la suite, réserve les tables et les excursions, garnit le minibar selon vos goûts et se charge du linge. Le service en suite fonctionne jour et nuit, avec la carte des restaurants du bord.",
          image: {
            src: "/cruise-line/orient-express/service-majordome.png",
            alt: "Suite de l'Orient Express Corinthian, plateau posé au pied du lit",
          },
        },
        {
          title: "La Table de Yannick Alléno",
          description:
            "Vingt couverts sous six mètres de plafond et une verrière d'Emmanuel Barrois, pour un menu dégustation en six services. C'est la seule table du bord hors forfait. Les autres, dont L'Écrin et le comptoir de L'Encre, servent à la carte, sans buffet.",
          image: {
            src: "/cruise-line/orient-express/service-table-alleno.png",
            alt: "Salle de La Table de l'Orient Express, tables dressées et lampes allumées",
          },
        },
        {
          title: "Le Speakeasy et le Wagon Bar",
          description:
            "Le Speakeasy se cache derrière le salon du barbier et joue du jazz. Le Wagon Bar mêle l'Art déco du train à l'esprit des clubs des années 1970. Le bord compte aussi un bar de bibliothèque et un bar de marina.",
          image: {
            src: "/cruise-line/orient-express/service-bars.png",
            alt: "Le Speakeasy de l'Orient Express Corinthian, lumière ambrée et photographies au mur",
          },
        },
        {
          title: "Le premier spa Guerlain en mer",
          description:
            "Cinq cents mètres carrés avec saunas, hammam, tepidarium et suite de soins double. À côté, un couloir de nage de seize mètres, une salle de sport et des cours de yoga et de Pilates. Les soins restent en supplément.",
          image: {
            src: "/cruise-line/orient-express/service-spa.png",
            alt: "Le couloir de nage de l'Orient Express Corinthian, entre deux parois métalliques",
          },
        },
        {
          title: "La marina à la poupe",
          description:
            "Au mouillage, la plateforme s'ouvre juste au-dessus de l'eau. On en part en planche à voile, en kayak, en paddle, en wing foil ou sur un dériveur Tiwal, et l'on remonte prendre un verre au bar de la marina.",
          image: {
            src: "/cruise-line/orient-express/service-marina.png",
            alt: "Tables dressées sur la plateforme de la marina, au-dessus de la mer",
          },
        },
        {
          title: "Un studio d'enregistrement",
          description:
            "Le salon de musique sert aussi de studio, avec piano, batterie, guitares et une quarantaine d'instruments, ouvert aux amateurs comme aux professionnels. Un trio y joue le soir, et le cabaret voisin reçoit ses artistes à quelques mètres du public.",
          image: {
            src: "/cruise-line/orient-express/service-studio.png",
            alt: "Batterie, guitares et tapis rouges dans le studio d'enregistrement du bord",
          },
        },
        {
          title: "Le cinéma et la bibliothèque",
          description:
            "Une petite salle dont les fauteuils reprennent ceux du train, et qu'on peut privatiser pour une séance. La bibliothèque prête environ mille cinq cents livres, avec son rayon Agatha Christie. La salle des cartes attend à côté, pour les échecs ou le poker.",
          image: {
            src: "/cruise-line/orient-express/service-cinema.png",
            alt: "Fauteuils capitonnés du cinéma de bord et deux coupes de champagne",
          },
        },
      ],
    },
    {
      type: "entityList",
      kind: "destination",
      layout: "spotlight",
      eyebrow: "Où naviguer avec Orient Express",
      heading: "Les destinations à visiter à bord du Corinthian",
      description:
        "La Méditerranée à la belle saison, les Caraïbes l'hiver, avec de longues escales et des nuits au mouillage. Les itinéraires changent chaque saison : nous vous indiquons ceux qui passent par où vous voulez aller, puis nous réservons les nuits à terre.",
      thumbnailsIntro:
        "Les Caraïbes l'hiver, et les autres escales de Méditerranée.",
      slugs: [
        "italie",
        "corse",
        "grece",
        "croatie",
        "saint-barthelemy",
        "saint-vincent-et-les-grenadines",
        "antigua",
        "barbade",
        "france",
        "turquie",
        "espagne",
        "portugal",
        "maroc",
      ],
      cardOverrides: [
        {
          slug: "italie",
          description:
            "La Riviera ligure de Portofino à Portovenere, la Sicile de Syracuse à Palerme par Taormine et les îles Éoliennes, et Venise, d'où part la route de l'Adriatique.",
        },
        {
          slug: "corse",
          description:
            "Le voilier s'arrête devant les falaises de Bonifacio, puis la côte remonte jusqu'à Saint-Florent et Calvi, sur la route qui relie la Riviera italienne à Marseille.",
        },
        {
          slug: "grece",
          description:
            "De Pylos à Athènes par Monemvasia et Hydra, ou à travers les Cyclades jusqu'à Mykonos et Samos. Le voilier passe ici d'une île à l'autre, et l'on vit la Grèce depuis la mer.",
        },
        {
          slug: "croatie",
          description:
            "La traversée de l'Adriatique, de Venise à Split, s'arrête à Rovinj et à Korčula. Une croisière courte, qu'on prolonge volontiers à terre.",
        },
        {
          slug: "saint-vincent-et-les-grenadines",
          image: {
            src: "/destination/saint-vincent-et-les-grenadines/map-tobago-cays.webp",
            alt: "Voiliers au mouillage devant une plage des Tobago Cays",
          },
        },
      ],
    },
    {
      type: "finalCta",
      eyebrow: "Une suite, puis le reste du voyage",
      heading: "Dites-nous quelle mer vous tente, nous trouverons la traversée",
      primaryCta: { label: "Parler de votre projet de croisière", href: "/votre-projet" },
      secondaryCta: { label: "Nous écrire", href: "/nous-ecrire" },
    },
  ],
};
