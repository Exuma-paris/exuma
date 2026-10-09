import type { Section } from "@/lib/content/types";

/**
 * Page `/approche` (« Pourquoi Exuma »). Le pourquoi de la maison, au sens de
 * Simon Sinek : la conviction d'abord, la façon de travailler ensuite, ceux
 * pour qui nous travaillons enfin.
 *
 * Source unique : le manifeste Exuma (MANIFESTE EXUMA.docx), repris presque mot
 * pour mot, et les « why » par profil du même document. Le positionnement
 * (« maison privée de conseils ») et le socle permanent viennent du référentiel
 * d'offre interne : rien d'autre n'en est repris (ni grille, ni code d'offre,
 * ni mention « à valider »).
 *
 * Frontière avec `/a-propos` : cette page dit ce que nous croyons et comment
 * nous travaillons. L'histoire (depuis 1991), les équipes, les visages et les
 * chiffres appartiennent à À propos et n'apparaissent pas ici.
 *
 * Pas de « Nous croyons » général : le pourquoi de la maison est la première
 * phrase du manifeste, en ouverture. Les « why » par profil vivent dans les
 * cartes par profil. Assistantes et COMEX n'ont pas encore de « why » propre :
 * ils partagent la carte des family offices et celle des dirigeants.
 *
 * TODO images : toutes provisoires, reprises des pages Professionnels et
 * Services après vérification visuelle. Shooting dédié à prévoir.
 */

export const meta = {
  title: "Pourquoi Exuma",
  description:
    "Exuma est une maison privée de conseils dédiée au déplacement. Un interlocuteur de référence, une discrétion sans exception, et une seule mesure du succès : votre tranquillité.",
};

export const sections: Section[] = [
  {
    type: "heroImageBackground",
    eyebrow: "Pourquoi Exuma",
    heading: "Pour que rien ne vous préoccupe",
    description:
      "Nous sommes le prestataire auquel vous faites confiance. Ce que nous organisons peut se passer n'importe où dans le monde. Ce qui ne change pas, c'est la façon dont nous travaillons et pour qui.",
    images: [
      {
        // Photo réelle des bureaux (shooting Jules Despretz), déjà en tête de
        // la page Entreprises. Le dégradé sombre cuit dans le haut du fichier
        // garde le titre lisible sur le mur clair.
        src: "/professionnels/entreprises/hero.jpg",
        alt: "L'équipe d'Exuma à son poste, dans les bureaux de la maison",
      },
    ],
  },

  {
    type: "textColumns",
    eyebrow: "Notre métier",
    heading: "Une maison privée de conseils dédiée au déplacement",
    columns: [
      "Exuma n'est pas une agence de voyage de luxe. **Nous sommes une maison privée de conseils** : un partenaire qui pense et qui se soucie, au quotidien, des déplacements de ses clients, quelles que soient leur taille et leur destination. **Un aller-retour en train compte autant qu'un tour du monde.**",
      "Notre métier, c'est de prendre en charge. Entièrement. Durablement. Avec la certitude que ce qui a été dit sera fait, exactement comme convenu. Notre rôle est toujours le même : être ceux qui gèrent, pour que vous soyez celui qui décide, ou celui qui profite.",
    ],
  },

  {
    // TODO : verbatim à valider avec Ludivine. Repris de la trame de table
    // ronde (ouverture et réponse sur la définition du luxe), tirets retirés.
    type: "specialistSpotlight",
    eyebrow: "La conviction de la maison",
    heading:
      "Le luxe n'est plus une catégorie de prix, c'est une qualité d'attention",
    specialist: {
      collaborateurSlug: "ludivine",
      quote:
        "Ce que nous prenons en charge, ce n'est pas le grand départ annuel, c'est l'ensemble des mouvements d'une vie et d'une organisation. Dans mon métier, le luxe se définit par ce qu'on n'a plus à faire, et surtout par ce qu'on n'a plus besoin de demander.",
      role: "Directrice d'Exuma",
    },
  },

  {
    type: "featureRows",
    eyebrow: "Le manifeste",
    heading: "Ce qui ne change pas, d'un voyage à l'autre",
    items: [
      {
        title: "Un interlocuteur de référence",
        paragraphs: [
          "Toujours le même. Qui connaît vos habitudes, vos contraintes, vos silences. Qui sait ce que vous ne dites pas parce que vous l'avez déjà dit une fois, il y a deux ans, en passant.",
          "Quand un nouveau besoin appelle une expertise différente, nos équipes s'organisent, sans que vous ayez à tout réexpliquer, sans perte de mémoire.",
        ],
        image: {
          src: "/professionnels/entreprises/conseillere-en-ligne.jpg",
          alt: "Une conseillère Exuma au téléphone, à son poste",
        },
      },
      {
        title: "Ce que vous nous confiez reste entre nous",
        paragraphs: [
          "Les noms, les itinéraires, les détails de votre vie ne deviennent jamais notre argument commercial.",
          "La discrétion n'est pas une valeur que nous affichons, c'est une exigence que nous respectons, parce qu'elle est au fondement de toute relation durable.",
        ],
        image: {
          src: "/professionnels/family-offices/passeports-bureau.jpg",
          alt: "Des passeports posés près d'un clavier, sur un bureau",
        },
      },
      {
        title: "Nous disons non quand c'est la bonne réponse",
        paragraphs: [
          "Nous proposons ce qui vous correspond, pas ce qui est attendu, pas ce qui est réputé. Et nous vous disons franchement quand quelque chose ne vous convient pas, ou quand d'autres sont mieux placés que nous pour y répondre. Un partenaire qui dit oui à tout n'est pas un partenaire. C'est un fournisseur.",
        ],
        image: {
          src: "/professionnels/family-offices/temoignage-conseillers.jpg",
          alt: "Deux conseillères Exuma à leur bureau, casque sur les oreilles",
        },
      },
      {
        title: "Notre mesure du succès, c'est votre tranquillité",
        paragraphs: [
          "Le silence opérationnel n'est pas un accident. C'est le résultat d'un travail préparatoire rigoureux, d'une connaissance du terrain, et d'une capacité à anticiper ce qui pourrait arriver avant que ça arrive.",
          "Quand tout se passe bien, vous ne pensez pas à nous. C'est exactement ce que nous cherchons.",
        ],
        image: {
          // Même photo que la famille Bien-être & reconnexion.
          src: "/theme/bien-etre/hero-1.png",
          alt: "Une personne seule attablée devant un café, de dos, face au lac au petit matin",
        },
      },
    ],
  },

  {
    type: "infoGrid",
    eyebrow: "Le travail invisible",
    heading: "Ce qui est fait à chaque dossier, sans qu'on le demande",
    description:
      "Le silence d'un voyage réussi tient à un travail que l'on ne voit pas. Voici ce qu'il recouvre, pour chaque voyageur et à chaque départ.",
    items: [
      {
        iconName: "badgeCheck",
        title: "Un interlocuteur, un binôme",
        description:
          "Toujours le même, doublé d'un binôme qui connaît votre dossier et prend le relais sans rupture.",
      },
      {
        iconName: "phone",
        title: "Quelqu'un décroche",
        description:
          "Une voix humaine qui règle, sans formulaire, sans ticket, sans file d'attente.",
      },
      {
        iconName: "star",
        title: "La mémoire des préférences",
        description:
          "Sièges, étages, literie, rythme : ce que chaque voyageur a dit une fois est consigné et réutilisé.",
      },
      {
        iconName: "calendarDays",
        title: "Les dates qui comptent",
        description:
          "Anniversaires, dates de mariage, échéances familiales et professionnelles : elles entrent dans le calendrier du voyage.",
      },
      {
        iconName: "fileText",
        title: "Le contrôle avant le départ",
        description:
          "Passeports, visas, transits, documents des mineurs, exigences sanitaires : tout est vérifié avant de partir.",
      },
      {
        iconName: "plane",
        title: "Le choix technique",
        description:
          "Classe de réservation, temps de correspondance réel, vol opéré derrière un partage de code : choisis pour vous.",
      },
      {
        iconName: "clock",
        title: "La veille jusqu'au retour",
        description:
          "Vous apprenez l'incident en même temps que sa solution. Annulation ou retard, la reprogrammation suit.",
      },
      {
        iconName: "sparkles",
        title: "Après le retour",
        description:
          "Justificatifs complets, programmes de fidélité crédités, dossier mis à jour pour le voyage suivant.",
      },
    ],
  },

  {
    type: "featureCards",
    eyebrow: "Pour qui",
    heading: "Ceux qui savent ce que vaut un prestataire de confiance",
    layout: "grid",
    cards: [
      {
        title: "Ceux qui prennent le temps",
        description:
          "Le soin véritable s'anticipe. Chaque détail est pensé avant que vous ayez à y penser, le rythme vous ressemble, et une présence discrète veille si quelque chose arrive. Voyager avec Exuma, c'est être entre de bonnes mains. Les mêmes, du début à la fin.",
        image: {
          // Image générée (--inspire) d'après une photo de salle de restaurant
          // parisien : scène recomposée, vue sur Notre-Dame et la Seine gardée.
          src: "/service/pourquoi-exuma/couple-diner.png",
          alt: "Un couple âgé déjeune face à la baie vitrée, avec vue sur Notre-Dame et la Seine",
        },
        link: { label: "Créer votre voyage", href: "/votre-projet" },
      },
      {
        title: "Les familles",
        description:
          "Les plus beaux souvenirs de famille se construisent, avec soin, en pensant à chaque personne du groupe. Ce travail, vous le portez depuis des années pour tout le monde. Exuma le prend à sa charge, et vous voilà enfin en vacances au même titre que les autres.",
        image: {
          src: "/home-hero.png",
          alt: "Une famille au-dessus d'une mer de nuages, sur un belvédère",
        },
        link: { label: "Créer votre voyage", href: "/votre-projet" },
      },
      {
        title: "Les family offices et les assistantes",
        description:
          "Nous croyons qu'un prestataire de confiance se reconnaît à son silence. Une exécution irréprochable, un interlocuteur dédié, stable, joignable, une discrétion contractuelle. Référencer Exuma, c'est choisir un partenaire dont vous serez fiers.",
        image: {
          // Image générée (--inspire) depuis une photo réelle des bureaux.
          src: "/service/pourquoi-exuma/bureau-rendez-vous.png",
          alt: "Un conseiller reçoit deux clients dans un bureau haussmannien",
        },
        link: {
          label: "Exuma pour les family offices",
          href: "/professionnels/family-offices",
        },
      },
      {
        title: "Les dirigeants et les membres de comité exécutif",
        description:
          "Les meilleures décisions sont parfois celles qu'on vous soumet. Exuma construit la proposition avant que vous ayez à la demander. Vous validez, nous gérons tout le reste. On se laisse convaincre, et l'on rentre en voulant recommencer.",
        image: {
          src: "/professionnels/porte-b.png",
          alt: "Un dirigeant relit un document entre deux rendez-vous",
        },
        link: {
          label: "Exuma pour les dirigeants",
          href: "/professionnels/dirigeants",
        },
      },
    ],
  },

  {
    type: "finalCta",
    eyebrow: "Prendre contact",
    heading: "Pas un prestataire qu'on teste.\nUn partenaire qu'on garde.",
    primaryCta: { label: "Nous écrire", href: "/nous-ecrire" },
    secondaryCta: { label: "À propos d'Exuma", href: "/a-propos" },
  },
];
