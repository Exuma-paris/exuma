import type { Section } from "@/lib/content/types";
import { EXUMA_TEL_HREF } from "@/lib/exuma";

/**
 * Porte B du hub B2B : `/professionnels/entreprises`. Cible les directions dont
 * les équipes se déplacent régulièrement, les cabinets de conseil et d'avocats
 * n'en étant que le premier exemple.
 *
 * Registre de preuve de cette porte : fournisseur fiable, devoir de protection,
 * suivi des voyageurs, référençabilité, facturation et reporting. Là où la
 * porte Family offices engage la crédibilité d'une personne, celle-ci engage la
 * responsabilité d'une entreprise envers ses salariés.
 *
 * Périmètre arrêté avec Rémi le 2026-08-24 : déplacements individuels, mais
 * aussi séminaires et déplacements de groupe. D'où le bloc `imageDuoWithText`
 * qui n'existe pas sur la porte A.
 *
 * La structure suit celle de `family-offices.tsx`, volontairement : votre
 * problème, ce que nous prenons en charge, la preuve, la confidentialité, les
 * questions pratiques. Le bloc `infoGrid` est repris au mot près, c'est le
 * socle commun à toute la section B2B.
 *
 * TODO chiffres : les valeurs marquées TODO attendent le retour de Ludivine.
 * TODO témoignages : les trois sont des gabarits, à remplacer par de vrais.
 * TODO images : deux visuels sont empruntés à la porte A, voir les commentaires.
 * TODO référent : la page ne nomme volontairement personne côté conseillers,
 * plusieurs intervenant sur un même compte. La citation de Ludivine reste à
 * valider avec elle.
 */

export const meta = {
  // Porte les termes réellement tapés, que le H1 ne contient pas.
  title: "Voyages d'affaires et séminaires d'entreprise",
  // Repris dans le fil d'Ariane, où le titre complet serait trop long.
  shortTitle: "Entreprises & cabinets",
  description:
    "Exuma gère les déplacements de vos collaborateurs, vos séminaires et vos voyages de groupe. Agence de voyages immatriculée à Paris, interlocuteur dédié, assistance pendant le voyage, facturation centralisée.",
};

export const sections: Section[] = [
  {
    // Même gabarit que la porte A : une seule image plein cadre, titre
    // par-dessus, en-tête en thème sombre.
    type: "heroImageBackground",
    eyebrow: "Exuma · Entreprises & cabinets",
    heading:
      "Vos équipes partent, votre responsabilité les suit. Nous la tenons avec vous",
    description:
      "Déplacements individuels, séminaires, voyages de groupe. Agence de voyages immatriculée à Paris, interlocuteur dédié, assistance pendant le voyage, une seule facture.",
    images: [
      {
        // Photo réelle des bureaux (shooting marque employeur, Jules Despretz,
        // planche 197). Un dégradé sombre est cuit dans le haut du fichier :
        // le voile uniforme du gabarit ne suffit pas sur un mur clair.
        src: "/professionnels/entreprises/hero.jpg",
        alt: "L'équipe d'Exuma à son poste, en train de suivre des déplacements en cours",
      },
    ],
  },

  {
    // Volontairement dépersonnalisé, contrairement à la porte A : un compte
    // d'entreprise est tenu par un référent désigné et son suppléant, et
    // plusieurs conseillers y interviennent. C'est donc Ludivine qui parle, en
    // tant que celle qui compose l'équipe, et non l'un des conseillers.
    type: "specialistSpotlight",
    eyebrow: "Votre équipe dédiée",
    heading: "Un référent désigné, et une équipe qui connaît votre compte",
    partners: { title: "" },
    specialist: {
      collaborateurSlug: "ludivine",
      // TODO : citation à valider avec Ludivine avant mise en ligne.
      quote:
        "Une entreprise ne me demande pas un voyage, elle me demande que ses collaborateurs partent et reviennent sans que personne n'ait à s'en occuper. Je commence donc par apprendre vos règles : qui valide, quelles classes, quels plafonds, ce qui se décide sans vous. Je désigne ensuite le conseiller qui tiendra votre compte et son suppléant, et je choisis en fonction de ce que votre activité demande vraiment.",
      role: "Directrice d'Exuma",
    },
    features: [
      {
        iconName: "badgeCheck",
        title: "Votre politique voyages est appliquée",
        description:
          "Classes, plafonds, circuits de validation : nous les intégrons une fois, puis nous les faisons respecter à votre place, sans vous solliciter à chaque réservation.",
      },
      {
        iconName: "phone",
        title: "Vos voyageurs nous joignent directement",
        description:
          "Ils appellent, nous traitons. Quel que soit le conseiller qui décroche, il a votre compte sous les yeux et n'a pas besoin qu'on lui rappelle vos règles.",
      },
      {
        iconName: "fileText",
        title: "Une facture, un reporting mensuel",
        description:
          "Chaque mois, les dépenses sont regroupées sur une facture unique et présentées selon vos axes d'analyse. Vous savez qui est parti, où, à quel coût, sans rien reconstituer.",
      },
    ],
  },

  {
    type: "featureShowcase",
    background: "bg-background-soft",
    eyebrow: "Ce que nous anticipons pour vos équipes",
    heading: "Vos collaborateurs partent, vous n'avez rien à arbitrer",
    description:
      "Les déplacements professionnels se décident tard et se décalent souvent. Ces heures-là sont les nôtres : nous vous rendons une situation déjà remise en ordre.",
    items: [
      {
        title: "Le départ est avancé à demain matin",
        detail:
          "Un rendez-vous se déplace, le voyage suit. Nous reprenons les vols, l'hôtel et le transfert dans la foulée, dans les règles de votre politique voyages, et le collaborateur reçoit son nouveau plan avant d'avoir eu à le demander.",
        image: {
          src: "/professionnels/entreprises/anticipation-depart.jpg",
          alt: "Un conseiller Exuma reprend un déplacement en cours",
        },
      },
      {
        title: "L'escale saute, le rendez-vous tient",
        detail:
          "Correspondance manquée, grève, météo : nous cherchons une autre route pendant que votre collaborateur est encore en vol, et nous prévenons sur place si l'heure d'arrivée change.",
        image: {
          // Fichier partagé par les deux portes, d'où le dossier
          // `/professionnels` plutôt qu'un dossier de page.
          src: "/professionnels/hall-depart.jpg",
          alt: "Un voyageur devant les écrans de départs, tôt le matin",
        },
      },
      {
        title: "Un collaborateur part dans un pays sensible",
        detail:
          "Nous vérifions les conditions d'entrée et la situation locale avant le départ, nous transmettons les contacts utiles sur place, et nous restons joignables pendant tout le déplacement. Vous savez à tout moment où sont vos voyageurs.",
        image: {
          src: "/professionnels/entreprises/anticipation-veille.jpg",
          alt: "Suivi d'un déplacement depuis les bureaux d'Exuma",
        },
      },
      {
        title: "La dépense sort de la politique voyages",
        detail:
          "Nous vous le signalons avant la réservation, pas à la facture. Vous arbitrez en une phrase, la décision est tracée, et le récapitulatif du mois porte la mention.",
        image: {
          // Shooting marque employeur : une conseillère en ligne, casque sur
          // les oreilles. C'est nous qui décrochons, pas le voyageur qui se
          // débrouille.
          src: "/professionnels/entreprises/conseillere-en-ligne.jpg",
          alt: "Une conseillère d'Exuma en ligne, casque sur les oreilles",
        },
      },
    ],
  },

  {
    type: "featureCards",
    // Blanc franc, comme les blocs Confidentialité et Prendre contact.
    background: "bg-background",
    eyebrow: "Le périmètre",
    heading: "Vous transmettez une demande, nous tenons le reste",
    description:
      "Un départ, une équipe entière, un séminaire à l'autre bout du monde. Ce qui suit se traite ici, sous un seul interlocuteur.",
    cards: [
      {
        title: "Mobilité & accès privilégié",
        description:
          "Vols, chauffeurs, accueil en aéroport, transferts de groupe. Vos équipes voyagent sans avoir à s'occuper de la logistique.",
        image: {
          src: "/service/mobilite/hero-1.png",
          alt: "Jet privé prêt à l'embarquement sur le tarmac",
        },
        link: { label: "Voir le détail", href: "/services/mobilite" },
      },
      {
        title: "Ingénierie du voyage & support global",
        description:
          "Visas, autorisations, assurances, coordination des départs multiples. Les formalités ne remontent plus jusqu'à vous.",
        image: {
          src: "/service/ingenierie/hero-1.jpg",
          alt: "Coordination d'un déplacement depuis le bureau",
        },
        link: { label: "Voir le détail", href: "/services/ingenierie" },
      },
      {
        title: "Sécurité & sérénité",
        description:
          "Veille sanitaire et sécuritaire, suivi des voyageurs, assistance pendant le déplacement. Votre devoir de protection est instrumenté.",
        image: {
          src: "/service/securite/hero-1.png",
          alt: "Prise en charge en berline avec chauffeur",
        },
        link: { label: "Voir le détail", href: "/services/securite" },
      },
      {
        title: "Conciergerie privée & VIP",
        description:
          "Réservations de dernière minute, demandes hors cadre, prise en charge de vos invités et de vos clients.",
        image: {
          src: "/service/conciergerie/hero-1.png",
          alt: "Remise de clé à la réception d'un hôtel",
        },
        link: { label: "Voir le détail", href: "/services/conciergerie" },
      },
      {
        title: "Expériences & lifestyle",
        description:
          "Tables, accès réservés, soirées et activités. Ce qui transforme un déplacement collectif en moment dont on reparle.",
        image: {
          src: "/service/lifestyle/hero-1.png",
          alt: "Table dressée dans une salle privée",
        },
        link: { label: "Voir le détail", href: "/services/lifestyle" },
      },
    ],
  },

  {
    // Bloc propre à cette porte : les séminaires et les déplacements de groupe
    // sont dans le périmètre, décision du 2026-08-24.
    type: "imageDuoWithText",
    // Les deux visuels sont des images originales, composées à partir de
    // références d'ambiance fournies par Rémi : une salle de séminaire d'hôtel
    // et une file d'embarquement. Contraintes tenues : adultes uniquement,
    // tenue professionnelle, femmes et hommes, aucun enfant.
    duo: {
      left: {
        src: "/professionnels/entreprises/salle-seminaire.jpg",
        alt: "Une salle de séminaire en session, autour d'une table en U",
      },
      right: {
        src: "/professionnels/entreprises/groupe-profil.jpg",
        alt: "Une équipe en déplacement, valises à la main, dans un terminal",
      },
    },
    text: {
      eyebrow: "Séminaires & déplacements de groupe",
      heading: "Partir à quarante demande le même soin qu'à un",
      columns: [
        "Séminaire de direction, convention, incentive, déplacement d'une équipe entière sur un même site : nous prenons l'ensemble, des vols au dernier transfert, avec un interlocuteur unique du premier devis au retour.",
        "Les listes de participants changent jusqu'au dernier moment, les contraintes alimentaires et médicales aussi. Nous les tenons à jour, nous suivons chaque arrivée, et nous restons présents pendant l'événement.",
      ],
      cta: { label: "Parler d'un projet de groupe", href: "/contact" },
    },
  },

  {
    // Socle commun à toute la section B2B : ces quatre items sont formulés au
    // mot près comme sur le hub et sur la porte Family offices. Toute
    // correction ici doit être reportée là-bas, et inversement.
    type: "infoGrid",
    background: "bg-background-soft",
    eyebrow: "Le socle",
    heading: "Ce que vos achats peuvent vérifier avant de nous référencer",
    description:
      "Ce que vous transmettez à votre direction juridique sans avoir à nous le demander. Chaque chiffre est daté et revu une fois par an.",
    items: [
      {
        iconName: "fileText",
        // TODO : seules les valeurs en 000 restent à remplacer par les vraies
        // (garantie financière, RCP du courtier, immatriculation Atout France).
        title: "Assurés, garantis, immatriculés",
        description:
          "Immatriculation Atout France n° IM000000000, garantie financière de 000 000 €, responsabilité civile professionnelle souscrite auprès de 000. Les attestations vous sont transmises avant le premier dossier, sans que vous ayez à les réclamer.",
      },
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
          "Nous ne travaillons pas à partir d'un catalogue de destinations. Là où vos équipes doivent aller, nous organisons : la capitale évidente comme la ville qui n'est desservie qu'une fois par semaine.",
      },
      {
        iconName: "clock",
        title: "Une assistance calibrée",
        description:
          "Vous nous dites ce dont vous avez réellement besoin pendant les déplacements, nous définissons ensemble le mode de fonctionnement qui y répond. Aucun dispositif standard ne vous est imposé.",
      },
    ],
  },

  {
    type: "textColumns",
    // Blanc franc, comme sur la porte A : le bloc se détache par le haut.
    background: "bg-background",
    eyebrow: "Confidentialité & données",
    heading: "Ce qui concerne vos collaborateurs reste entre nous",
    columns: [
      "La confidentialité n'est pas une option que l'on active à votre demande, c'est un principe de fonctionnement. Elle couvre vos projets autant que les déplacements individuels de vos équipes, dès le premier échange.",
      "Les données de vos voyageurs servent à organiser et à sécuriser leurs déplacements, rien d'autre. Nous signons votre accord de confidentialité si vous en avez un, et nous vous transmettons le nôtre si vous n'en avez pas.",
      // Formulation à faire valider par Ludivine (règle interne).
      "En interne, l'information circule au strict nécessaire : votre interlocuteur, son suppléant, et personne d'autre. Ce que prépare votre direction ne se devine pas depuis un carnet de réservations.",
    ],
    cta: { label: "Recevoir notre engagement écrit", href: "/contact" },
  },

  {
    type: "textImagesSplit",
    background: "bg-background-soft",
    eyebrow: "Ce que vous n'arbitrez plus",
    heading: "Vos équipes voyagent, vos journées ne s'en ressentent pas",
    // Le troisième paragraphe porte le vocabulaire réellement tapé : voyages
    // d'affaires, gestion des déplacements, séminaire, Paris. Court
    // volontairement, la colonne de texte est décalée et se charge vite.
    paragraphs: [
      "Un vol supprimé un dimanche soir ne remonte pas jusqu'à vous. Il remonte jusqu'à nous, et votre collaborateur repart.",
      "Vous ne perdez plus de temps à réserver, à relancer, à vérifier une note de frais. Vous décidez qui part et pourquoi, nous tenons le reste.",
      "Voyages d'affaires, séminaires, déplacements de groupe : depuis Paris, nous prenons la gestion des déplacements de vos équipes. Que la demande vienne de vous, de votre assistante de direction ou du voyageur lui-même, elle arrive chez un interlocuteur qui connaît vos règles.",
    ],
    images: [
      {
        src: "/professionnels/entreprises/reunion.jpg",
        alt: "Un point de travail dans les bureaux d'Exuma",
      },
      {
        src: "/professionnels/entreprises/bureau.jpg",
        alt: "Un poste de travail d'Exuma en cours de journée",
      },
    ],
  },

  {
    type: "testimonials",
    eyebrow: "Ils nous confient leurs équipes",
    heading: "Discrètement, depuis des années",
    testimonials: [
      {
        // TODO : témoignage à recueillir. Question à poser : que s'est-il passé
        // la fois où ça ne s'est pas déroulé comme prévu ? GABARIT, ne pas
        // publier en l'état.
        quote:
          "Nos associés partent souvent la veille pour le lendemain. La réactivité est réelle, y compris le week-end.",
        image: {
          // Shooting marque employeur : deux conseillères en ligne. Cadrage
          // volontairement plus large que celui de la porte A, qui utilise la
          // même prise de vue serrée sur la conseillère du premier plan.
          src: "/professionnels/entreprises/temoignage-ligne.jpg",
          alt: "Deux conseillères d'Exuma en ligne, casque sur les oreilles",
        },
        name: "Office manager",
        role: "Cabinet d'avocats, Paris",
      },
      {
        // TODO : témoignage à recueillir. GABARIT, ne pas publier en l'état.
        quote:
          "Un séminaire de 60 personnes déplacé de trois semaines. Tout a été repris sans que nous ayons à rappeler nos contraintes.",
        image: {
          // Shooting marque employeur : un poste de travail, la personne qui
          // reprend le dossier. L'image du groupe est déjà prise par le bloc
          // Séminaires, plus haut sur la page.
          src: "/professionnels/entreprises/temoignage-poste.jpg",
          alt: "Une conseillère d'Exuma à son poste",
        },
        name: "Directrice des ressources humaines",
        role: "Groupe industriel",
      },
      {
        // TODO : témoignage à recueillir. GABARIT, ne pas publier en l'état.
        quote:
          "Une facture, un reporting par entité. Notre contrôle de gestion a arrêté de me demander des justificatifs.",
        image: {
          // Shooting marque employeur, planche 17 brute : les mains sur le
          // clavier, sur le marbre du bureau. Fichier partagé avec la porte
          // Dirigeants, d'où le dossier `/professionnels`. La porte A utilise
          // la même planche, mais retouchée et cadrée large pour son hero.
          src: "/professionnels/clavier.jpg",
          alt: "Les mains d'un conseiller Exuma sur son clavier",
        },
        name: "Directeur administratif et financier",
        role: "Cabinet de conseil",
      },
    ],
  },

  {
    type: "faq",
    background: "bg-background-soft",
    eyebrow: "Questions pratiques",
    heading: "Ce que l'on nous demande avant de nous référencer",
    contact: {
      prefix: "Une question qui n'est pas ici ? ",
      label: "Appelez-nous",
      href: EXUMA_TEL_HREF,
      suffix: ", nous répondons directement.",
    },
    items: [
      {
        // Fusion de trois questions qui tournaient autour du même sujet : qui
        // nous sollicite, à quelle heure, et ce qui se passe quand ça dérape.
        question: "Qui peut nous joindre, et à quel moment ?",
        answer:
          "Comme vous le décidez : soit tout passe par une personne, assistante de direction ou office manager, soit chaque voyageur nous joint directement. Dans les deux cas vos règles s'appliquent et vous gardez la visibilité sur ce qui a été réservé. Pendant les déplacements, nous convenons ensemble de ce qui doit être joignable le soir et le week-end : un vol supprimé, un hôtel à reprendre, une prise en charge médicale se traitent sans passer par vous. Une demande de réservation envoyée un dimanche, elle, est traitée dans le délai que nous avons arrêté ensemble.",
      },
      {
        question:
          "Nous avons déjà une agence, comment se passe le changement ?",
        answer:
          "Nous reprenons l'existant avant de démarrer : réservations en cours, profils voyageurs, cartes de fidélité, politique voyages. Vous n'avez pas à tout redonner, et vos collaborateurs ne subissent pas la bascule. Côté référencement, le dossier vous est transmis sans relance, attestations et immatriculation comprises, et nous répondons aux questionnaires achats et RSE que vos équipes utilisent.",
      },
      {
        question: "Comment fonctionne la facturation ?",
        answer:
          "Les déplacements sont regroupés sur une facture unique, détaillée par voyageur, par service ou par centre de coûts, selon la répartition que vous nous indiquez. Les justificatifs sont conservés et vous restent accessibles.",
      },
      {
        question: "Prenez-vous en charge les séminaires et les groupes ?",
        answer:
          "Oui. Séminaires de direction, conventions, incentives, déplacements d'équipes entières : nous prenons le projet du premier devis au retour, y compris la logistique sur place et la présence pendant l'événement.",
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
    // Blanc franc, comme sur la porte A.
    background: "bg-background",
    eyebrow: "Prendre contact",
    heading: "Besoin de déléguer différemment ? Contactez-nous",
    primaryCta: { label: "Appeler Exuma", href: EXUMA_TEL_HREF },
    // TODO : remplacer par la ligne directe du service entreprises.
    secondaryCta: { label: "Écrire à Exuma", href: "/contact" },
  },
];
