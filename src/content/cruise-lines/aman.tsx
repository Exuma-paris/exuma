import type { CruiseLine } from "@/lib/content/types";

export const cruiseLine: CruiseLine = {
  slug: "aman",
  name: "Aman",
  blurb:
    "Deux façons de naviguer : l'Amandira, goélette de cinq cabines privatisée en entier en Indonésie, et l'Amangati, yacht de quarante-sept suites attendu en Méditerranée et aux Caraïbes à partir de 2027.",
  keywords: ["aman", "amandira", "amangati", "aman at sea", "phinisi", "goelette", "komodo", "raja ampat", "indonesie"],
  heroImage: {
    src: "/cruise-line/aman/hero.png",
    alt: "L'Amandira, goélette phinisi, en silhouette devant un volcan au coucher du soleil",
  },
  destinationSlugs: ["indonesie", "grece", "italie", "republique-dominicaine"],
  metaTitle: "Croisière Aman : l'Amandira et l'Amangati",
  metaDescription:
    "Croisière Aman avec Exuma : l'Amandira, goélette privatisée en Indonésie, ou l'Amangati, en Méditerranée et aux Caraïbes dès 2027. Organisée par votre travel designer.",
  sections: [
    {
      type: "heroImageBackground",
      eyebrow: "Croisière d'exception",
      heading: "Aman, la mer en privé",
      description:
        "La maison des hôtels les plus retirés d'Asie applique la même idée à la mer : peu de monde, beaucoup d'espace, un équipage qui connaît chaque mouillage.",
      images: [
        {
          src: "/cruise-line/aman/hero.png",
          alt: "L'Amandira, goélette phinisi, en silhouette devant un volcan au coucher du soleil",
        },
      ],
    },
    {
      type: "textImagesSplit",
      logo: { src: "/cruise-line/aman/logo.png", alt: "Logo Aman" },
      eyebrow: "L'Amandira, en Indonésie",
      heading: "Une goélette de bois pour cinq cabines",
      paragraphs: [
        "L'Amandira est un phinisi, la goélette traditionnelle des chantiers indonésiens, long de cinquante-deux mètres et gréé de deux mâts. Il avance à la voile ou au moteur et ne se réserve qu'en entier : cinq cabines, et un équipage qui compte un moniteur de plongée, un cuisinier et un thérapeute.",
        "Il navigue dans la mer de Flores, autour du parc national de Komodo, et descend jusqu'aux récifs de Raja Ampat. L'itinéraire s'écrit avec nous avant le départ, puis avec le capitaine chaque matin, selon la mer et les envies du bord.",
      ],
      images: [
        {
          src: "/cruise-line/aman/split-1.png",
          alt: "Le pont en bois de l'Amandira, ses matelas et son gréement, face à une île verte",
        },
        {
          src: "/cruise-line/aman/split-2.png",
          alt: "L'annexe de l'Amandira au-dessus d'un récif turquoise, vue à fleur d'eau",
        },
      ],
    },
    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/cruise-line/aman/amangati-1.png",
          alt: "Vue aérienne de l'Amangati, avec sa piscine, son héliport et sa marina",
        },
        right: {
          src: "/cruise-line/aman/amangati-2.png",
          alt: "Bain à remous et lit de repos face à la mer dans le spa de l'Amangati",
        },
      },
      text: {
        eyebrow: "L'Amangati, à partir de mai 2027",
        heading: "Un yacht de quarante-sept suites, entre Méditerranée et Caraïbes",
        columns: [
          "L'Amangati est le premier navire d'Aman at Sea, un yacht à moteur de cent quatre-vingts mètres dessiné par le studio SINOT et construit à Gênes. Il ne reçoit que quatre-vingt-quatorze passagers, dans des suites qui ont chacune leur terrasse. Le spa s'étend sur deux niveaux autour d'un jardin japonais, avec huit suites de soins face à la mer, et une marina donne un accès direct à l'eau.",
          "Son premier voyage quitte Palma de Majorque le 7 mai 2027 pour rejoindre Nice. La saison se poursuit en Méditerranée, de la Côte d'Azur à la mer Égée. À l'automne, le yacht traverse l'Atlantique pour passer l'hiver aux Caraïbes, et il revient en Méditerranée au printemps 2028.",
        ],
      },
    },
    {
      type: "featureCards",
      eyebrow: "Le service à bord",
      heading: "Deux navires, deux façons d'être reçu",
      description:
        "Les deux navires ne jouent pas dans la même catégorie. À bord de l'Amandira, l'équipage entier est à votre disposition. À bord de l'Amangati, les choix se multiplient.",
      cards: [
        {
          title: "Amandira : deux chefs à bord",
          description:
            "Deux chefs préparent une cuisine indonésienne, asiatique et internationale, servie à l'intérieur ou sur le pont.",
          image: {
            src: "/cruise-line/aman/service-table.png",
            alt: "Longue table de bois dressée dans le salon vitré de l'Amandira",
          },
        },
        {
          title: "Amandira : la mer, directement",
          description:
            "Le moniteur de plongée et son matériel sont à bord, avec le masque et tuba, le kayak et le paddle.",
          image: {
            src: "/cruise-line/aman/service-mer.png",
            alt: "Trois membres d'équipage en annexe sur une eau turquoise",
          },
        },
        {
          title: "Amandira : le soin en cabine",
          description:
            "Un thérapeute fait partie de l'équipage : les massages se reçoivent en cabine, et le yoga se pratique sur la plage.",
          image: {
            src: "/cruise-line/aman/service-cabine.png",
            alt: "Cabine principale de l'Amandira, boiseries et grand lit",
          },
        },
        {
          title: "Amangati : Alira",
          description:
            "Le restaurant de jour, ouvert sur l'air du large, sert une cuisine méditerranéenne dans une grande salle circulaire.",
          image: {
            src: "/cruise-line/aman/service-alira.png",
            alt: "Salle circulaire du restaurant Alira, face à la mer",
          },
        },
        {
          title: "Amangati : Aman Grill",
          description:
            "Viandes maturées cuites à la flamme, accords choisis par le sommelier. Avec les tables japonaises Akari et Hiori, le navire compte huit restaurants et salons.",
          image: {
            src: "/cruise-line/aman/service-grill.png",
            alt: "Salle de l'Aman Grill, avec vue sur la côte",
          },
        },
        {
          title: "Amangati : la marina",
          description:
            "Deux plateformes flottantes, des jouets nautiques et deux annexes de sport pour le ski nautique, avec le salon Selora en terrasse.",
          image: {
            src: "/cruise-line/aman/service-marina.png",
            alt: "L'Amangati vu de l'arrière, sa marina ouverte sur la mer",
          },
        },
      ],
    },
    {
      type: "entityList",
      kind: "accommodation",
      eyebrow: "Les combinés possibles",
      heading: "Une croisière Aman, puis quelques nuits dans une adresse Aman",
      description:
        "Les mêmes équipes vous reçoivent à terre, avant d'embarquer ou après le retour. Voici les adresses qui s'accordent le mieux avec chaque navire.",
      slugs: ["amankila", "amanzoe", "aman-venice", "amanera"],
      cardOverrides: [
        {
          slug: "amankila",
          description:
            "Avec l'Amandira. Sur la côte est de Bali, ses trois bassins descendent la falaise face au détroit de Lombok. Un séjour à terre avant ou après la mer de Flores.",
        },
        {
          slug: "amanzoe",
          description:
            "Avec l'Amangati, autour de ses voyages en mer Égée. Les pavillons à colonnades dominent Porto Heli, dans le Péloponnèse, et la plage privée se rejoint en contrebas.",
        },
        {
          slug: "aman-venice",
          description:
            "Avec l'Amangati, autour de ses voyages en Adriatique. Un palais du seizième siècle sur le Grand Canal, pour finir la croisière dans une autre façon de vivre sur l'eau.",
        },
        {
          slug: "amanera",
          description:
            "Avec l'Amangati, pendant sa saison aux Caraïbes, qui passe par la République dominicaine. Les casitas occupent une falaise de la côte nord, au-dessus de Playa Grande.",
        },
      ],
    },
    {
      type: "finalCta",
      eyebrow: "Votre croisière Aman",
      heading: "Dites-nous qui embarque, nous vous dirons quel navire vous convient",
      primaryCta: { label: "Parler de votre projet de croisière", href: "/votre-projet" },
      secondaryCta: { label: "Nous écrire", href: "/nous-ecrire" },
    },
  ],
};
