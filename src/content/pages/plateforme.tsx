import type { Section } from "@/lib/content/types";

/**
 * Page `/professionnels/plateforme` : la plateforme de réservation en ligne
 * (SBT de l'éditeur WonderMiles) mise à disposition des clients entreprises.
 * Demandée par la dirigeante le 2026-10-14, appelée depuis le bloc
 * « Plateforme de réservation » de la page Entreprises.
 *
 * Fil conducteur : partir du problème de chaque profil (office manager,
 * direction financière et achats, voyageur), puis montrer le geste, puis le
 * détail. La plateforme est présentée comme un outil à disposition, jamais
 * comme une obligation : le référent reste l'interlocuteur.
 *
 * Sources : wondermiles.com (accueil, /new-generation-obt/, /wonderhotel/),
 * consultées le 2026-10-14. Rien n'est affirmé qui n'y figure pas, à
 * l'exception de ce que la page Entreprises engage déjà côté Exuma (référent,
 * facture unique). Les chiffres « plus de 50 sources » et « plus de 30
 * consolidateurs » sont ceux de l'éditeur.
 *
 * TODO à valider avec la dirigeante : la mention de l'éditeur (nommé une fois,
 * dans le premier bloc), et que toutes ces fonctions sont bien ouvertes aux
 * clients Exuma (paiement par carte logée, options écoresponsables).
 */

export const meta = {
  title: "Plateforme de réservation pour les entreprises",
  shortTitle: "Plateforme de réservation",
  description:
    "La plateforme de réservation en ligne d'Exuma : vos collaborateurs réservent en un clic, dans le respect de votre politique voyages, avec plus de 50 sources de contenu, une facturation centralisée et un référent qui reste joignable.",
};

export const sections: Section[] = [
  {
    type: "hero",
    eyebrow: "Exuma · Plateforme de réservation",
    heading: "Réserver en un clic, sans sortir de votre politique voyages",
    description:
      "Un outil d'achat de voyages simple, que nous recommandons dès que vos déplacements se multiplient. Vos équipes gagnent en autonomie, vous gardez la maîtrise, et votre référent reste là.",
    images: [
      {
        src: "/professionnels/entreprises/bureau.jpg",
        alt: "Une collaboratrice prépare un déplacement sur son ordinateur",
      },
    ],
  },

  {
    // Le problème de chaque profil, puis ce que la plateforme y change.
    type: "spotsList",
    eyebrow: "Pour qui",
    heading: "Ce que la plateforme change pour chacun",
    // Logo redessiné en texte d'après celui de l'éditeur, faute du fichier
    // officiel : à remplacer par le fichier fourni par WonderMiles.
    logo: {
      src: "/professionnels/plateforme/wondermiles-logo.png",
      alt: "WonderMiles",
    },
    description:
      "Exuma met à votre disposition la plateforme de réservation WonderMiles, conçue pour relier le voyageur, celui qui gère les déplacements et son agence.",
    spots: [
      {
        title: "Office manager, assistante de direction",
        description:
          "Vous réservez pour toute une équipe, souvent la veille, et chaque changement vous revient. Ici, chacun peut réserver lui-même, sans formation, et modifier son voyage en ligne. Les profils des voyageurs sont centralisés, invités compris, et vous gardez la vue sur tout ce qui est réservé.",
      },
      {
        title: "Direction financière, achats",
        description:
          "Vous découvrez les écarts à la facture. Ici, la politique voyages s'applique avant l'achat : seules les offres conformes sont proposées, les tarifs non remboursables peuvent être bloqués, et tout arrive sur une facturation centralisée, réglée par carte logée si vous le souhaitez.",
      },
      {
        title: "Collaborateur en déplacement",
        description:
          "Près d'une réservation professionnelle sur trois change après coup. Ici, vous choisissez votre siège, modifiez votre billet, demandez un remboursement ou acceptez un changement d'horaire de la compagnie, sans appeler personne. Et dès que ça se complique, votre référent reprend la main.",
      },
    ],
  },

  {
    // Le geste du voyageur, rejoué sur l'interface de l'éditeur. Une seule
    // image ; le texte reste aligné sur le titre (pas de décalage).
    type: "textImagesSplit",
    eyebrow: "Comment ça se passe",
    heading: "Quatre étapes, un seul clic pour réserver",
    paragraphs: [
      {
        label: "1. Vous cherchez",
        text: "Un trajet, des dates. La plateforme interroge toutes ses sources en une seule recherche : compagnies aériennes, trains, hôtels.",
      },
      {
        label: "2. Vous voyez ce qui est conforme",
        text: "Les offres sont triées selon votre politique voyages. Ce qui en sort est signalé, pour que personne ne réserve hors cadre par erreur.",
      },
      {
        label: "3. Vous réservez en un clic",
        text: "L'offre recommandée est déjà mise en avant. Un clic suffit, le billet est émis.",
      },
      {
        label: "4. Tout le monde est informé",
        text: "Votre référent voit la réservation, la facture est centralisée, et vous êtes prévenu si la compagnie change un horaire.",
      },
    ],
    images: [
      {
        src: "/professionnels/entreprises/plateforme-reservation.png",
        alt: "La plateforme de réservation : vols Paris-Genève triés selon la politique voyages, offre recommandée réservée en un clic, confirmation envoyée au référent",
      },
    ],
  },

  {
    type: "spotsList",
    eyebrow: "Toutes les sources",
    heading: "Une seule recherche, plus de 50 sources de contenu",
    description:
      "La plateforme compare des offres que l'on ne trouve jamais réunies au même endroit, pour vous proposer le meilleur tarif disponible.",
    spots: [
      {
        title: "Aérien",
        description:
          "Tarifs NDC en direct des compagnies, GDS Sabre et Amadeus, compagnies à bas coût : les grandes compagnies européennes et internationales, sur un seul écran.",
      },
      {
        title: "Rail",
        description:
          "Le rail européen, dont SNCF et Ouigo, réservé dans le même parcours que l'avion, pour comparer les deux sur un même trajet.",
      },
      {
        title: "Hôtellerie",
        description:
          "Plus de 30 consolidateurs hôteliers, les GDS et les grandes plateformes, avec vos tarifs négociés et des options écoresponsables.",
      },
      {
        title: "Voitures et services",
        description:
          "Location de voitures et services complémentaires, dans la même réservation et sur la même facture.",
      },
    ],
  },

  {
    type: "infoGrid",
    eyebrow: "En détail",
    heading: "Ce que la plateforme fait pour vous",
    items: [
      {
        iconName: "sparkles",
        title: "Aucune formation",
        description:
          "Une expérience aussi simple qu'un site grand public : vos collaborateurs réservent dès la première connexion.",
      },
      {
        iconName: "badgeCheck",
        title: "Des choix déjà filtrés",
        description:
          "Votre politique voyages ne montre que les options adaptées, au lieu d'un catalogue qui noie le voyageur.",
      },
      {
        iconName: "euro",
        title: "Le non-remboursable sous contrôle",
        description:
          "Les tarifs non remboursables peuvent être bloqués avant l'achat, pour éviter les réservations irréversibles.",
      },
      {
        iconName: "calendarDays",
        title: "Modifications en libre-service",
        description:
          "Siège, changement de billet, remboursement, changement d'horaire de la compagnie : tout se règle en ligne.",
      },
      {
        iconName: "plane",
        title: "Plus de 50 sources",
        description:
          "NDC, GDS, compagnies à bas coût, rail et hôtellerie, comparés dans une seule recherche.",
      },
      {
        iconName: "fileText",
        title: "Facturation centralisée",
        description:
          "Une refacturation mensuelle, paramétrée selon vos axes, et le paiement par carte logée si vous le souhaitez.",
      },
      {
        iconName: "sun",
        title: "Options écoresponsables",
        description:
          "Des hébergements et des solutions écoresponsables proposés au moment du choix, pour votre démarche RSE.",
      },
      {
        iconName: "phone",
        title: "Votre référent reste là",
        description:
          "La plateforme ne remplace personne : dès qu'un déplacement se complique, votre référent Exuma reprend la main.",
      },
    ],
  },

  {
    type: "faq",
    eyebrow: "Questions pratiques",
    heading: "Ce que l'on nous demande sur la plateforme",
    items: [
      {
        question: "La plateforme est-elle obligatoire ?",
        answer:
          "Non, mais nous la recommandons fortement à partir d'un certain volume de déplacements : au-delà, elle fait gagner du temps à tout le monde et rend le pilotage des dépenses bien plus fin. En dessous, beaucoup de clients passent simplement par leur référent, et d'autres combinent les deux selon le déplacement.",
      },
      {
        question: "Faut-il former nos collaborateurs ?",
        answer:
          "Non. L'expérience est aussi simple qu'un site de réservation grand public, et vos collaborateurs réservent dès leur première connexion.",
      },
      {
        question: "Les réservations faites par téléphone y apparaissent-elles ?",
        answer:
          "Oui. Les réservations faites en ligne et celles confiées à votre référent sont centralisées au même endroit, en temps réel, et figurent sur la même facture.",
      },
      {
        question: "Que se passe-t-il si un vol est modifié ou annulé ?",
        answer:
          "Le voyageur est prévenu sur la plateforme et peut accepter le changement ou en demander un autre en ligne. S'il préfère, ou si la situation se complique, votre référent reprend le dossier.",
      },
      {
        question: "Comment la mettre en place ?",
        answer:
          "Avec votre référent : nous paramétrons ensemble votre politique voyages, les profils de vos voyageurs et votre facturation, puis nous ouvrons les accès. Demandez une démonstration pour la voir fonctionner sur vos propres trajets.",
      },
    ],
  },

  {
    type: "finalCta",
    eyebrow: "La voir fonctionner",
    heading: "Envie de l'essayer sur vos propres trajets ? Demandez une démo.",
    primaryCta: {
      label: "Demander une démo",
      href: "/professionnels/contact?profil=entreprise",
    },
    secondaryCta: {
      label: "Revenir à l'offre entreprises",
      href: "/professionnels/entreprises",
    },
  },
];
