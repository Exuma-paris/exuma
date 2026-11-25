import type { Section } from "@/lib/content/types";

/**
 * Page `/private-office`. Le niveau d'accompagnement le plus haut de la
 * maison : un personal assistant dédié et son binôme prennent toute la
 * charge mentale, pour une personne, sa famille ou ses associés.
 *
 * Source : la présentation « Exuma Private Office · Découverte » (novembre
 * 2026). N'en sont repris ni les prix, ni les éléments marqués « à valider »
 * dans ses notes (taux de fidélité, accord Expedia, citations), ni la colonne
 * « agence de voyage classique » : on ne se compare pas à la concurrence sur
 * le site. Le comparatif oppose nos services habituels au Private Office,
 * avec les délais de la slide « Nos engagements ».
 *
 * Pas d'ancienneté chiffrée ni de nom de direction ici tant que la
 * présentation et le site ne disent pas la même chose.
 *
 * La mosaïque des services n'est pas une section de contenu : la page la pose
 * entre `intro` et `rest`, avec les liens vers chaque page de service.
 *
 * TODO images : visuels repris du site en attendant des prises de vue
 * dédiées. Le haut de page est une photo carrée de 1 200 px, un peu juste en
 * pleine largeur.
 */

export const meta = {
  title: "Private Office",
  description:
    "Exuma Private Office : un personal assistant dédié et son binôme anticipent vos déplacements, votre conciergerie et votre vie privée, jusqu'au moindre détail. Toute la charge mentale passe chez nous.",
};

export const servicesBlock = {
  eyebrow: "Ce que votre Private Office coordonne",
  heading: "Tous nos services, réunis autour de vous",
  description:
    "Votre personal assistant mobilise chaque pôle de la maison à votre place : vous ne passez plus d'un interlocuteur à l'autre.",
};

export const intro: Section[] = [
  {
    // Titre posé au-dessus de l'image, sur fond clair, pour qu'il se lise
    // quelle que soit la photo. La photo montre la relation : une
    // conseillère au téléphone, dans les bureaux de la maison.
    type: "hero",
    eyebrow: "Exuma Private Office",
    heading: "Le jour où vous ne voulez plus penser à rien",
    description:
      "Quand l'excellence ne suffit plus, il reste l'exception. Votre personal assistant et son binôme connaissent votre vie dans ses moindres détails : ils anticipent, proposent et coordonnent, pour vous, votre famille ou vos associés.",
    images: [
      {
        src: "/professionnels/entreprises/temoignage-ligne.jpg",
        alt: "Une conseillère Exuma au téléphone avec un client, dans les bureaux de la maison",
        position: "center 35%",
      },
    ],
  },

  {
    type: "textColumns",
    eyebrow: "Le principe",
    heading: "Vous décidez. Nous orchestrons. Vous n'y pensez plus.",
    cta: {
      label: "Parler avec un Private Office",
      href: "/private-office/contact",
    },
    columns: [
      "**Tout anticiper, jusqu'au moindre détail.** Votre personal assistant et son binôme connaissent vos habitudes, vos proches et vos exigences : le siège, la chambre, la table, l'heure à laquelle vous préférez être rappelé. Ils préparent ce que vous n'avez pas encore demandé.",
      "**Des services singuliers.** Un jet affrété en quelques heures, un transfert en hélicoptère jusqu'à la villa, un lieu d'exception privatisé, un accueil sur mesure dans l'établissement qui vous reçoit. Ce qui ne se réserve sur aucune plateforme, nous savons l'obtenir.",
      "**Le professionnel et le personnel, d'un seul tenant.** La réunion à Milan, puis le week-end en famille sur le lac de Côme : un seul interlocuteur pour les deux, et deux factures distinctes. Pour vous, votre famille, votre family office ou vos associés.",
    ],
  },

  {
    type: "spotsList",
    layout: "timeline",
    eyebrow: "Une journée avec votre Private Office",
    heading: "Tout est prêt avant que vous le demandiez",
    description:
      "Chaque moment est une demande que vous n'avez pas eu à formuler.",
    spots: [
      {
        title: "7 h 10",
        description:
          "Le chauffeur attend. Votre vol est à l'heure, il le sait déjà.",
      },
      {
        title: "9 h 30",
        description:
          "Trois associés arrivent de Londres, Milan et New York : chacun est attendu.",
      },
      {
        title: "13 h 00",
        description: "La table du déjeuner client : au calme, côté fenêtre.",
      },
      {
        title: "18 h 45",
        description:
          "Un vol décalé : votre collaborateur l'apprend avec la solution.",
      },
      {
        title: "21 h 30",
        description:
          "Dans la suite, les fleurs préférées de votre épouse l'attendent.",
      },
      {
        title: "22 h 00",
        description:
          "Votre assistante lit le récapitulatif. Elle n'a rien eu à relancer.",
      },
    ],
  },

  {
    type: "comparison",
    eyebrow: "Deux niveaux d'attention",
    heading: "L'excellence pour tous. L'exception pour quelques-uns.",
    description:
      "Nos services sont déjà pensés pour les plus exigeants. Le Private Office va plus loin : voici, point par point, ce qui change.",
    cta: {
      label: "Parler avec un Private Office",
      href: "/private-office/contact",
    },
    columns: ["Services Exuma", "Private Office"],
    // Quatre points, ceux qui comptent pour un dirigeant, une famille ou un
    // family office : qui s'occupe de vous, de quoi, quand on vous joint, en
    // combien de temps. Le reste (confidentialité, facturation) est dans la
    // FAQ et la proposition écrite.
    rows: [
      {
        label: "Qui s'occupe de vous",
        values: [
          "Un conseiller privilégié, qui connaît votre dossier",
          "Un personal assistant dédié et son binôme, qui connaissent votre vie, et un point régulier avec la direction d'Exuma",
        ],
      },
      {
        label: "Ce que vous nous confiez",
        values: [
          "Vos voyages et vos déplacements",
          "Vos déplacements, votre conciergerie, votre vie privée et vos événements, pour vous et vos proches",
        ],
      },
      {
        label: "Quand nous joindre",
        detail: "Contact et astreinte",
        values: [
          "Du lundi au vendredi de 9 h à 19 h, puis une astreinte jusqu'à 22 h en semaine et de 10 h à 21 h le week-end",
          "WhatsApp instantané, rappel sous 30 minutes, et une astreinte à la carte, jusqu'à jour et nuit",
        ],
      },
      {
        label: "En combien de temps",
        detail: "Urgence et demande courante",
        values: [
          "Urgence prise en charge dans l'heure, réponse dans la journée",
          "Urgence traitée immédiatement, en priorité ; toute demande prise en charge sous 2 heures",
        ],
      },
    ],
    note: "Ce tableau n'est qu'un aperçu. Le périmètre, les délais et l'astreinte de votre Private Office se construisent avec vous, et sont écrits dans votre proposition.",
  },

  {
    type: "featureCards",
    eyebrow: "Ce que nous orchestrons",
    heading: "Ce qui ne se réserve sur aucune plateforme",
    description:
      "Quelques exemples parmi d'autres : ce que vous imaginez, nous savons l'obtenir.",
    cards: [
      {
        title: "Un jet affrété en quelques heures",
        description:
          "Pour vous, votre famille ou votre comité de direction, au départ de l'aéroport le plus proche.",
        image: {
          src: "/service/mobilite/hero-1.png",
          alt: "Un jet privé sur le tarmac, la passerelle dépliée",
        },
      },
      {
        title: "Un transfert en hélicoptère",
        description:
          "De l'aéroport à la villa, sans la route. Ou au-dessus des falaises, pour le seul plaisir du vol.",
        image: {
          src: "/destination/irlande/xp-helicoptere-1.webp",
          alt: "Un hélicoptère survole la mer au pied de hautes falaises",
        },
      },
      {
        title: "Un lieu d'exception privatisé",
        description:
          "Un château écossais pour Noël, avec son personnel, rien que pour vous et vos proches.",
        image: {
          src: "/destination/ecosse/xp-chateau-floors.webp",
          alt: "La façade d'un château écossais aux nombreuses tourelles, dans la lumière du soir",
        },
      },
      {
        title: "Un voilier et son équipage",
        description:
          "Réservé avant que la saison ne s'ouvre, avec le skipper et le chef qui vous ressemblent.",
        image: {
          src: "/service/lifestyle/yachts.png",
          alt: "Un grand voilier au mouillage dans une crique, son équipage à bord",
        },
      },
      {
        title: "Un accueil sur mesure",
        description:
          "L'établissement qui vous reçoit connaît vos habitudes avant votre arrivée : la chambre, l'étage, l'oreiller.",
        image: {
          src: "/service/conciergerie/hero-1.png",
          alt: "Remise de clé à la réception d'un hôtel",
        },
      },
      {
        title: "Une visite à huis clos",
        description:
          "Un musée ouvert pour vous seuls, avant l'arrivée du public ou après sa fermeture.",
        image: {
          src: "/service/lifestyle/visites-privees.png",
          alt: "Une galerie de musée vide, baignée de lumière",
        },
      },
    ],
  },
];

export const rest: Section[] = [
  {
    type: "textColumns",
    eyebrow: "La suite",
    heading: "Trois étapes, et vous n'y pensez plus",
    cta: { label: "Parler de votre Private Office", href: "/private-office/contact" },
    columns: [
      "**01 · Un échange.** Vos habitudes, vos exigences, ceux qui vous entourent : nous prenons le temps de comprendre ce que vous ne voulez plus avoir à porter.",
      "**02 · Une proposition écrite.** Le périmètre, l'équipe et le forfait, construits sur votre besoin réel. Chaque frais est détaillé : rien n'est caché.",
      "**03 · Le démarrage.** Votre personal assistant prend le relais dès le premier jour. Si vous voyagez déjà avec nous, votre interlocuteur actuel peut le devenir.",
    ],
  },

  {
    type: "faq",
    eyebrow: "Questions fréquentes",
    heading: "Ce que l'on nous demande avant de confier son Private Office",
    items: [
      {
        question: "Pour qui le Private Office est-il pensé ?",
        answer:
          "Pour les dirigeants, les familles, les family offices et les assistantes privées qui veulent déléguer entièrement, pas seulement un voyage. Un même Private Office peut suivre une personne, sa famille et ses associés.",
      },
      {
        question: "Quelle différence avec la conciergerie ?",
        answer:
          "La conciergerie répond à une demande : une table, une nounou, une célébration. Le Private Office anticipe celles que vous n'avez pas encore formulées, avec une personne dédiée qui connaît votre vie et coordonne tous nos services pour vous.",
      },
      {
        question: "Comment le Private Office est-il facturé ?",
        answer:
          "Par un forfait d'accompagnement construit sur votre besoin réel, qui rémunère votre personal assistant, son binôme et leur disponibilité. Les frais de prestation suivent une grille fixe, remise avec votre proposition.",
      },
      {
        question:
          "Mes déplacements professionnels et ma vie privée peuvent-ils être suivis ensemble ?",
        answer:
          "Oui, c'est le principe. Un seul interlocuteur pour les deux, et une facturation séparée, professionnelle et personnelle.",
      },
      {
        question:
          "Nous travaillons déjà avec Exuma. Comment passer au Private Office ?",
        answer:
          "Il suffit d'en parler à votre interlocuteur. Après un échange sur vos besoins, nous vous adressons une proposition, et il peut devenir votre personal assistant.",
      },
    ],
  },

  {
    type: "finalCta",
    eyebrow: "Prendre contact",
    heading: "Parlons de ce que vous ne voulez plus avoir à porter",
    primaryCta: {
      label: "Parler de votre Private Office",
      href: "/private-office/contact",
    },
    secondaryCta: {
      label: "Découvrir la conciergerie",
      href: "/services/conciergerie",
    },
  },
];
