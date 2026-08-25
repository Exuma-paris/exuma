import type { Section } from "@/lib/content/types";
import { EXUMA_TEL_HREF } from "@/lib/exuma";

/**
 * Porte C du hub B2B : `/professionnels/dirigeants`. Cible les dirigeants qui
 * achètent pour eux-mêmes, et non pour le compte d'un tiers.
 *
 * Registre de preuve de cette porte : confort, service, reconnaissance. C'est
 * la seule des trois qui ne vend pas de la couverture de risque. Le socle de
 * garanties y reste présent, mais il passe après la promesse au lieu de la
 * porter : ce lecteur ne référence pas un fournisseur, il délègue.
 *
 * Structure alignée sur les deux autres portes, avec une inversion assumée :
 * le confort ouvre la page au lieu d'arriver en fin de parcours.
 *
 * TODO chiffres : les valeurs marquées TODO attendent le retour de Ludivine.
 * TODO témoignages : les trois sont des gabarits, à remplacer par de vrais.
 * TODO images : plusieurs visuels viennent du shooting bureaux, faute de prises
 * de vue côté voyageur. Voir les commentaires.
 * TODO référent : la page ne nomme volontairement personne côté conseillers.
 * La citation de Ludivine reste à valider avec elle.
 */

export const meta = {
  // Porte les termes réellement tapés, que le H1 ne contient pas.
  title: "Voyages des dirigeants et conciergerie privée",
  // Repris dans le fil d'Ariane.
  shortTitle: "Dirigeants",
  description:
    "Exuma prend en charge vos déplacements professionnels et vos voyages privés. Agence de voyages immatriculée à Paris, interlocuteur unique, habitudes connues, arbitrages en un appel.",
};

export const sections: Section[] = [
  {
    type: "heroImageBackground",
    eyebrow: "Exuma · Dirigeants",
    heading: "Un appel suffit pour partir, décaler ou tout annuler",
    description:
      "Vos déplacements professionnels et vos voyages privés, pris en charge par quelqu'un qui connaît déjà vos habitudes. Agence de voyages immatriculée à Paris.",
    images: [
      {
        // TODO image : à produire, un départ tôt le matin, vu de dos. Prévoir le
        // dégradé sombre cuit dans le haut du fichier, comme sur les deux
        // autres portes, sinon le titre ne passe pas.
        src: "/professionnels/hall-depart.jpg",
        alt: "Un départ tôt le matin, avant les écrans d'affichage",
      },
    ],
  },

  {
    // Dépersonnalisé comme sur la porte Entreprises : la page promet une
    // personne dédiée, mais ne dit pas laquelle. C'est Ludivine qui parle, en
    // tant que celle qui la désigne.
    type: "specialistSpotlight",
    eyebrow: "Votre interlocuteur",
    heading: "Une personne connaît vos habitudes, vous ne les redonnez jamais",
    partners: { title: "" },
    specialist: {
      collaborateurSlug: "ludivine",
      // TODO : citation à valider avec Ludivine avant mise en ligne.
      quote:
        "Vous ne nous appelez pas seulement pour un vol. Dans une même semaine, il peut y avoir un aller-retour à Singapour avancé de deux jours, une table introuvable un samedi soir, un anniversaire à préparer sans que personne le sache, et un médecin à trouver quand un voyage tourne mal. C'est la même personne qui prend tout cela chez nous, professionnel comme privé. C'est aussi pour cette raison qu'elle finit par vous connaître.",
      role: "Directrice d'Exuma",
    },
    features: [
      {
        iconName: "phone",
        title: "Un appel, pas une procédure",
        description:
          "Vous demandez, nous exécutons. Décaler un départ, ajouter une étape ou tout annuler se règle en une conversation, sans formulaire ni justification.",
      },
      {
        iconName: "star",
        title: "Vos préférences sont acquises",
        description:
          "Sièges, horaires, hôtels, table, chauffeur : ce que vous aimez est noté une fois. Vous ne le redonnez jamais, ni à nous, ni à personne.",
      },
      {
        iconName: "badgeCheck",
        title: "Le privé suit les mêmes règles",
        description:
          "Vos vacances, vos week-ends et les voyages de vos proches sont traités avec le même soin et la même discrétion que vos déplacements professionnels.",
      },
    ],
  },

  {
    type: "featureShowcase",
    background: "bg-background-soft",
    eyebrow: "Ce que vous ne faites plus",
    heading: "Vous dites où et quand, le reste se règle sans vous",
    description:
      "Rien de ce qui suit ne devrait vous occuper. Ce sont pourtant les heures qui vous coûtent le plus.",
    items: [
      {
        title: "Vous décalez un départ entre deux réunions",
        detail:
          "Un mot suffit. Vols, hôtel, chauffeur et rendez-vous sur place sont repris ensemble, et vous recevez le nouveau plan une fois qu'il tient. Personne d'autre n'a besoin d'être prévenu.",
        image: {
          // TODO image : à produire côté voyageur. Emprunt provisoire.
          src: "/professionnels/entreprises/conseillere-en-ligne.jpg",
          alt: "Une conseillère d'Exuma en ligne, casque sur les oreilles",
        },
      },
      {
        title: "Vous ne redonnez jamais vos préférences",
        detail:
          "Le siège, l'étage, l'oreiller, la voiture, l'heure du petit-déjeuner : c'est noté et appliqué. Quand un établissement ne suit pas, c'est nous qui le reprenons, pas vous.",
        image: {
          // TODO image : à produire côté voyageur, une chambre préparée aux
          // habitudes du client. En attendant, le carnet où ces habitudes sont
          // notées, planche 18 du shooting.
          src: "/professionnels/dirigeants/preferences.jpg",
          alt: "Le carnet où sont notées les habitudes d'un client",
        },
      },
      {
        title: "Vos voyages privés se traitent comme les professionnels",
        detail:
          "Un anniversaire, une semaine en famille, un week-end décidé le jeudi : même interlocuteur, même exigence, même confidentialité. Vous n'avez pas deux façons de nous parler.",
        image: {
          // TODO image : à produire côté privé. Emprunt provisoire.
          src: "/professionnels/family-offices/arrivee-hotel.jpg",
          alt: "Une arrivée en fin de journée devant l'entrée d'un hôtel",
        },
      },
      {
        title: "Un imprévu à l'étranger se règle sans vous réveiller",
        detail:
          "Vol supprimé, bagage perdu, souci de santé : nous traitons d'abord et nous vous racontons ensuite. Vous n'apprenez l'incident qu'une fois qu'il est réglé.",
        image: {
          src: "/professionnels/entreprises/anticipation-veille.jpg",
          alt: "Suivi d'un déplacement depuis les bureaux d'Exuma",
        },
      },
    ],
  },

  {
    type: "featureCards",
    // Blanc franc, comme sur les deux autres portes.
    background: "bg-background",
    eyebrow: "Le périmètre",
    heading: "Vous transmettez une demande, nous tenons le reste",
    description:
      "Un déplacement, un week-end, une table impossible à obtenir. Ce qui suit se traite ici, sous un seul interlocuteur.",
    cards: [
      {
        title: "Mobilité & accès privilégié",
        description:
          "Jets privés, chauffeurs, accueil en aéroport, fast-track. Vous arrivez, on vous attend.",
        image: {
          src: "/service/mobilite/hero-1.png",
          alt: "Jet privé prêt à l'embarquement sur le tarmac",
        },
        link: { label: "Voir le détail", href: "/services/mobilite" },
      },
      {
        title: "Conciergerie privée & VIP",
        description:
          "Célébrations, personnel dédié, réservations de dernière minute. Y compris les demandes qui n'ont rien à voir avec un voyage.",
        image: {
          src: "/service/conciergerie/hero-1.png",
          alt: "Remise de clé à la réception d'un hôtel",
        },
        link: { label: "Voir le détail", href: "/services/conciergerie" },
      },
      {
        title: "Expériences & lifestyle",
        description:
          "Tables confidentielles, accès réservés, excursions privées, yachts. Ce qui se demande la veille pour le lendemain.",
        image: {
          src: "/service/lifestyle/hero-1.png",
          alt: "Table dressée dans une salle privée",
        },
        link: { label: "Voir le détail", href: "/services/lifestyle" },
      },
      {
        title: "Sécurité & sérénité",
        description:
          "Imprévus, veille sanitaire, assistance pendant le voyage. Ce qui se règle sans que vous soyez appelé.",
        image: {
          src: "/service/securite/hero-1.png",
          alt: "Prise en charge en berline avec chauffeur",
        },
        link: { label: "Voir le détail", href: "/services/securite" },
      },
      {
        title: "Ingénierie du voyage & support global",
        description:
          "Visas, autorisations, assurances, statuts et surclassements. Les formalités ne remontent plus jusqu'à vous.",
        image: {
          src: "/service/ingenierie/hero-1.jpg",
          alt: "Coordination d'un déplacement depuis le bureau",
        },
        link: { label: "Voir le détail", href: "/services/ingenierie" },
      },
    ],
  },

  {
    // Le socle est commun à la section B2B, mais son cadrage change ici : un
    // dirigeant ne référence pas un fournisseur, il délègue. Les quatre items
    // gardent donc leur texte au mot près, et c'est l'ordre qui bouge, la
    // preuve administrative passant en dernier.
    type: "infoGrid",
    background: "bg-background-soft",
    eyebrow: "Le socle",
    heading: "Ce qui ne change pas, quel que soit le départ",
    description: "Vous le vérifiez une fois, puis vous n'y revenez plus.",
    items: [
      {
        iconName: "badgeCheck",
        // Le compte d'années est à réviser une fois par an, comme les chiffres.
        title: "35 ans de pratique",
        description:
          "Depuis 1991, nous organisons des déplacements dans des conditions rarement simples. Ce que vous nous confierez, nous l'avons déjà rencontré : la grève, le visa refusé, l'hospitalisation à l'étranger, le vol annulé la veille.",
      },
      {
        iconName: "plane",
        title: "Le monde entier, sans exception",
        description:
          "Nous ne travaillons pas à partir d'un catalogue de destinations. Là où vous devez aller, nous organisons : la capitale évidente comme la ville qui n'est desservie qu'une fois par semaine.",
      },
      {
        iconName: "clock",
        title: "Une assistance calibrée",
        description:
          "Vous nous dites ce dont vous avez réellement besoin pendant les déplacements, nous définissons ensemble le mode de fonctionnement qui y répond. Aucun dispositif standard ne vous est imposé.",
      },
      {
        iconName: "fileText",
        // TODO : seules les valeurs en 000 restent à remplacer par les vraies
        // (garantie financière, RCP du courtier, immatriculation Atout France).
        title: "Assurés, garantis, immatriculés",
        description:
          "Immatriculation Atout France n° IM000000000, garantie financière de 000 000 €, responsabilité civile professionnelle souscrite auprès de 000. Les attestations vous sont transmises avant le premier dossier, sans que vous ayez à les réclamer.",
      },
    ],
  },

  {
    type: "textColumns",
    // Blanc franc, comme sur les deux autres portes.
    background: "bg-background",
    eyebrow: "Confidentialité",
    heading: "Ce que vous nous dites ne sort pas d'ici",
    columns: [
      "La confidentialité n'est pas une option que l'on active à votre demande, c'est un principe de fonctionnement. Elle s'applique dès le premier échange, avant même qu'un dossier existe.",
      "Aucun de nos clients n'est cité publiquement sans son accord préalable, ni sur ce site, ni ailleurs. Vos déplacements, vos accompagnants et vos habitudes ne se commentent pas.",
      // Formulation à faire valider par Ludivine (règle interne).
      "En interne, l'information circule au strict nécessaire : votre interlocuteur, son suppléant, et personne d'autre. Ce que vous préparez ne se devine pas depuis un carnet de réservations.",
    ],
    cta: { label: "Recevoir notre engagement écrit", href: "/contact" },
  },

  {
    type: "textImagesSplit",
    background: "bg-background-soft",
    eyebrow: "Ce que vous récupérez",
    heading: "Le temps que vous ne passez plus à organiser",
    // Le troisième paragraphe porte le vocabulaire réellement tapé :
    // conciergerie privée, voyages sur mesure, Paris. Court volontairement.
    paragraphs: [
      "Trois quarts d'heure par déplacement, à chercher, comparer, rappeler, corriger. Multipliés par le nombre de fois où vous partez dans l'année.",
      "Ce temps-là ne se rattrape pas, il se délègue. Vous gardez la décision, nous prenons l'exécution.",
      "Déplacements professionnels, voyages privés, conciergerie au quotidien : depuis Paris, une seule personne connaît vos habitudes et répond quand vous appelez.",
    ],
    images: [
      {
        // TODO image : à produire côté voyageur. Emprunt provisoire.
        src: "/professionnels/family-offices/poignee-de-main.jpg",
        alt: "Une poignée de main dans les bureaux, à la lumière du jour",
      },
      {
        src: "/professionnels/entreprises/temoignage-poste.jpg",
        alt: "Une conseillère d'Exuma à son poste",
      },
    ],
  },

  {
    type: "testimonials",
    eyebrow: "Ils nous confient leurs départs",
    heading: "Discrètement, depuis des années",
    testimonials: [
      {
        // TODO : témoignage à recueillir. Question à poser : qu'est-ce que vous
        // ne faites plus depuis que vous travaillez avec nous ? GABARIT, ne pas
        // publier en l'état.
        quote:
          "Je délègue mes voyages comme je délègue au bureau. Je dis où et quand, le reste se règle sans moi.",
        image: {
          src: "/professionnels/entreprises/temoignage-ligne.jpg",
          alt: "Deux conseillères d'Exuma en ligne, casque sur les oreilles",
        },
        name: "Dirigeant",
        role: "Groupe industriel",
      },
      {
        // TODO : témoignage à recueillir. GABARIT, ne pas publier en l'état.
        quote:
          "Un départ annulé le matin même, sans un mot de plus. Personne ne m'a demandé pourquoi.",
        image: {
          src: "/professionnels/family-offices/temoignage-bureau.jpg",
          alt: "Un bureau d'Exuma, vu depuis le couloir",
        },
        name: "Président",
        role: "Société de gestion",
      },
      {
        // TODO : témoignage à recueillir. GABARIT, ne pas publier en l'état.
        quote:
          "Ils connaissent mes habitudes mieux que moi. Je n'ai rien redemandé depuis des années.",
        image: {
          // Les mains sur le clavier, planche 17 brute du shooting. Fichier
          // partagé avec la porte Entreprises.
          src: "/professionnels/clavier.jpg",
          alt: "Les mains d'un conseiller Exuma sur son clavier",
        },
        name: "Fondateur",
        role: "Groupe familial",
      },
    ],
  },

  {
    type: "faq",
    background: "bg-background-soft",
    eyebrow: "Questions pratiques",
    heading: "Ce que l'on nous demande avant de commencer",
    contact: {
      prefix: "Une question qui n'est pas ici ? ",
      label: "Appelez-nous",
      href: EXUMA_TEL_HREF,
      suffix: ", nous répondons directement.",
    },
    items: [
      {
        question: "Comment vous joint-on, et à quel moment ?",
        answer:
          "Directement, sans passer par un standard. Vous avez la ligne directe de votre interlocuteur et celle de son suppléant. Pendant vos déplacements, nous convenons ensemble de ce qui doit être joignable le soir et le week-end, et vous appelez sans vous demander si c'est le bon moment.",
      },
      {
        question: "Organisez-vous aussi les voyages de mes proches ?",
        answer:
          "Oui, et avec les mêmes règles. Un conjoint qui part d'une autre ville, des enfants majeurs à l'étranger, des parents à accompagner : nous coordonnons l'ensemble sans que vous ayez à faire l'intermédiaire.",
      },
      {
        question: "Puis-je annuler ou décaler à la dernière minute ?",
        answer:
          "C'est même ce que nous faisons le mieux. Nous reprenons ce qui peut l'être, nous vous disons franchement ce qui est perdu, et nous ne vous demandons pas de justifier la décision.",
      },
      {
        question: "Travaillez-vous avec mon assistante ?",
        answer:
          "Comme vous le décidez. Elle peut nous parler à votre place, en copie, ou pas du tout. Dans tous les cas, elle reçoit ce dont elle a besoin pour tenir votre agenda, et rien de plus.",
      },
      {
        question: "Comment êtes-vous rémunérés ?",
        // TODO rémunération : modèle à arbitrer avec Rémi. Réponse
        // volontairement minimale d'ici là.
        answer:
          "Nos conditions vous sont transmises par écrit avant le premier dossier, et elles ne changent pas en cours de route.",
      },
    ],
  },

  {
    type: "finalCta",
    // Blanc franc, comme sur les deux autres portes.
    background: "bg-background",
    eyebrow: "Prendre contact",
    heading: "Envie qu'on s'en occupe ? Contactez-nous",
    primaryCta: { label: "Appeler Exuma", href: EXUMA_TEL_HREF },
    // TODO : remplacer par la ligne directe et le mail nominatif du référent.
    secondaryCta: { label: "Écrire à Exuma", href: "/contact" },
  },
];
