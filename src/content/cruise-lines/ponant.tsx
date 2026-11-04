import type { CruiseLine } from "@/lib/content/types";

export const cruiseLine: CruiseLine = {
  slug: "ponant",
  name: "Ponant",
  blurb:
    "La compagnie française de l'expédition. Des navires à taille humaine, un brise-glace capable d'atteindre le pôle Nord, et des escales que les grands paquebots ne peuvent pas faire.",
  keywords: ["ponant", "expedition", "croisiere polaire", "commandant charcot", "brise-glace", "arctique", "antarctique"],
  heroImage: {
    src: "/cruise-line/ponant/hero.png",
    alt: "Le Ponant, trois-mâts de la compagnie, toutes voiles dehors à contre-jour",
  },
  destinationSlugs: ["norvege", "islande", "polynesie", "grece", "croatie", "japon"],
  metaTitle: "Croisière Ponant : expédition polaire et petits navires",
  metaDescription:
    "Croisière Ponant avec Exuma : expédition polaire à bord du Commandant Charcot, Méditerranée et Polynésie en petit navire. Cabine et séjour à terre organisés par votre travel designer.",
  sections: [
    {
      type: "heroImageBackground",
      eyebrow: "Croisière d'exception",
      heading: "Ponant, de la Méditerranée à la banquise",
      description:
        "Une compagnie fondée à Marseille par des officiers de la marine marchande, devenue la référence française de la croisière d'expédition.",
      images: [
        {
          src: "/cruise-line/ponant/hero.png",
          alt: "Le Ponant, trois-mâts de la compagnie, toutes voiles dehors à contre-jour",
        },
      ],
    },
    {
      type: "textImagesSplit",
      eyebrow: "La maison",
      heading: "Des marins avant d'être des hôteliers",
      logo: { src: "/cruise-line/ponant/logo.png", alt: "Logo Ponant" },
      paragraphs: [
        "Ponant naît à Marseille en 1988, quand un groupe d'officiers de la marine marchande française décide de faire naviguer de petits navires là où les grands ne passent pas. Le premier est un trois-mâts, et l'idée n'a pas changé depuis : peu de passagers, un tirant d'eau qui permet d'entrer dans les criques, et un équipage qui connaît la mer avant de connaître le service.",
        "Depuis 2015, la compagnie appartient à Artémis, le groupe de la famille Pinault. La flotte compte aujourd'hui un brise-glace polaire, des voiliers, des navires d'expédition construits en série et, depuis 2019, le Paul Gauguin en Polynésie. À bord, la langue est le français, la cuisine aussi, et une équipe de naturalistes et de guides encadre chaque débarquement en zodiac.",
      ],
      images: [
        {
          src: "/cruise-line/ponant/split-1.png",
          alt: "Motu bordé de cocotiers et lagon turquoise d'Aitutaki, aux îles Cook",
        },
        {
          src: "/cruise-line/ponant/split-2.png",
          alt: "Zodiac et ses passagers en gilet orange devant Le Ponant sous voiles",
        },
      ],
    },
    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/cruise-line/ponant/charcot-1.png",
          alt: "Le Commandant Charcot dans la banquise arctique, montagnes au loin",
        },
        right: {
          src: "/cruise-line/ponant/charcot-2.png",
          alt: "Ours blanc assis sur la banquise au soleil bas, son reflet dans l'eau",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le Commandant Charcot, jusqu'au pôle Nord",
        columns: [
          "Le navire porte le nom de Jean-Baptiste Charcot, le médecin devenu explorateur qui cartographia l'Antarctique à bord du Pourquoi-Pas ? entre 1908 et 1910. Livré en 2021, c'est un brise-glace de classe polaire 2 : sa coque avance dans une glace de plusieurs mètres, par l'avant comme par l'arrière, et sa propulsion hybride associe électricité et gaz naturel liquéfié. Il conduit ses passagers jusqu'au pôle Nord géographique, là où aucun navire de croisière classique ne peut aller.",
          "Il accueille environ deux cent quarante passagers, ce qui en fait le plus grand navire de la flotte. L'hiver austral, il descend en Antarctique, jusqu'aux mers de Weddell et de Ross que peu de navires atteignent. L'été, il remonte vers le Groenland et le pôle. Les journées se règlent sur la glace : on s'arrête quand un ours apparaît sur la banquise, on débarque quand la glace est assez épaisse pour qu'on y marche.",
        ],
      },
    },
    {
      type: "textImagesSplit",
      eyebrow: "Le voilier des origines",
      heading: "Le Ponant, trente-deux cabines sous voiles",
      paragraphs: [
        {
          label: "Le navire",
          text: "Le trois-mâts qui a donné son nom à la compagnie, lancé en 1991 et rénové en 2021. Trente-deux cabines pour soixante-quatre passagers, et presque autant de membres d'équipage.",
        },
        {
          label: "À bord",
          text: "On hisse les voiles à la sortie du port, on mouille presque chaque soir, et l'on se baigne au mouillage avant le dîner. Le pont tient lieu de salon.",
        },
        {
          label: "Où il navigue",
          text: "Aux Caraïbes l'hiver, en Méditerranée l'été, sur des itinéraires courts qui laissent le temps de chaque escale.",
        },
      ],
      images: [
        {
          src: "/cruise-line/ponant/le-ponant.png",
          alt: "Le Ponant sous voiles au large d'un chapelet d'îles, eau bleu profond",
        },
      ],
    },
    {
      type: "featureCards",
      eyebrow: "La flotte Ponant",
      heading: "Les autres façons de naviguer avec Ponant",
      cards: [
        {
          title: "Spirit of Ponant",
          description:
            "Un catamaran à voile de vingt-quatre mètres, six cabines pour douze passagers, qui ne se réserve qu'en entier. L'itinéraire se décide avec le capitaine : la Corse au départ de Bonifacio pour sa première saison, les Seychelles autour de Mahé l'hiver suivant.",
          image: {
            src: "/cruise-line/ponant/card-spirit.png",
            alt: "Le catamaran Spirit of Ponant au mouillage dans une crique",
          },
        },
        {
          title: "Le Boréal et ses sister-ships",
          description:
            "Quatre navires identiques, Le Boréal, L'Austral, Le Soléal et Le Lyrial, mis en service entre 2010 et 2015. Assez robustes pour l'Antarctique et le Grand Nord, ils passent aussi par les mers chaudes le reste de l'année.",
          image: {
            src: "/cruise-line/ponant/card-boreal.png",
            alt: "L'Austral, sister-ship du Boréal, dans le fjord de Milford Sound en Nouvelle-Zélande",
            position: "38% center",
          },
        },
        {
          title: "Les navires Explorer",
          description:
            "Six navires de même plan, mis en service entre 2018 et 2020, qui portent chacun le nom d'un explorateur français, de Lapérouse à Jacques Cartier. Assez petits pour mouiller dans une crique dalmate ou au pied d'un glacier du Svalbard.",
          image: {
            src: "/cruise-line/ponant/card-explorer.png",
            alt: "Navire Explorer de Ponant au mouillage au large d'une plage de sable clair",
          },
        },
        {
          title: "Le Paul Gauguin",
          description:
            "Racheté par Ponant en 2019, il navigue toute l'année en Polynésie depuis Papeete. Les escales s'appellent Bora Bora, Taha'a, Moorea, et les nuits se passent dans le lagon.",
          image: {
            src: "/cruise-line/ponant/card-paul-gauguin.png",
            alt: "Le Paul Gauguin au mouillage dans un lagon de Polynésie",
          },
        },
      ],
    },
    {
      type: "featureCards",
      eyebrow: "Le service à bord",
      heading: "L'art de recevoir à la française, jusqu'à la banquise",
      description:
        "Un équipage où l'on trouve aussi des majordomes, des chefs accompagnés par Ducasse Conseil et un open bar à bord. Le reste tient à la façon de recevoir.",
      cards: [
        {
          title: "Le Nuna, signé Alain Ducasse",
          description:
            "À bord du Commandant Charcot, le seul restaurant gastronomique Alain Ducasse en mer. La table se réserve.",
          image: {
            src: "/cruise-line/ponant/service-nuna.png",
            alt: "Table dressée du Nuna, devant de grands panneaux bleus",
          },
        },
        {
          title: "Des chefs en collaboration avec Ducasse Conseil",
          description:
            "Pains et pâtisseries préparés à bord, caviar Kaviari, macarons Pierre Hermé, chocolat Valrhona, et des chefs invités sur certaines croisières.",
          image: {
            src: "/cruise-line/ponant/service-chefs.png",
            alt: "Chef présentant une assiette dressée, à bord",
          },
        },
        {
          title: "Un majordome, attentif et discret",
          description:
            "Il fait partie d'un équipage où chacun veille à votre tranquillité. Vous choisissez jusqu'à votre oreiller.",
          image: {
            src: "/cruise-line/ponant/service-majordome.png",
            alt: "Suite Armateur du Commandant Charcot",
          },
        },
        {
          title: "Open bar et Wi-Fi",
          description:
            "Une large sélection de boissons, le Wi-Fi par Starlink et une blanchisserie en 24 à 48 heures font partie des attentions du bord.",
          image: {
            src: "/cruise-line/ponant/service-bar.png",
            alt: "Passagère sur le pont arrière, près du pavillon français, au soleil couchant",
          },
        },
        {
          title: "Spa et piscine",
          description:
            "Spa, salle de fitness, piscine et théâtre, pour reprendre son souffle entre deux escales. Ici, la piscine intérieure du Commandant Charcot.",
          image: {
            src: "/cruise-line/ponant/service-spa.png",
            alt: "Piscine intérieure du Commandant Charcot, sous une verrière",
          },
        },
        {
          title: "Un guide d'expédition avec vous",
          description:
            "Sur les croisières d'expédition, les guides accompagnent les sorties à terre et expliquent ce que l'on voit, du Groenland à l'Antarctique.",
          image: {
            src: "/cruise-line/ponant/service-guides.png",
            alt: "Guide d'expédition de Ponant marchant sur la toundra, dans la région de Thulé",
          },
        },
      ],
    },
    {
      type: "entityList",
      kind: "destination",
      eyebrow: "Où naviguer avec Ponant",
      heading: "Les destinations à combiner avec la croisière",
      description:
        "Nous réservons la cabine, puis les nuits à terre avant l'embarquement et après le retour.",
      slugs: ["norvege", "islande", "polynesie", "grece", "croatie", "japon"],
    },
    {
      type: "finalCta",
      eyebrow: "Une cabine, puis le reste du voyage",
      heading: "Dites-nous jusqu'où vous voulez aller, nous choisirons le navire",
      primaryCta: { label: "Parler de votre projet de croisière", href: "/votre-projet" },
      secondaryCta: { label: "Nous écrire", href: "/nous-ecrire" },
    },
  ],
};
