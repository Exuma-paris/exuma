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
      "Vos déplacements professionnels, organisés comme vous travaillez",
    description:
      "Un référent qui prend tout en charge, une plateforme pour réserver en ligne, ou les deux selon le déplacement. Voyages d'affaires, séminaires et déplacements de groupe, depuis Paris et depuis 1991 : une seule équipe, une seule facture.",
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
    // Cœur de la page (refonte du 2026-10-14) : les deux voies de passage,
    // hors ligne et en ligne, ne sont jamais nommées comme telles. On montre
    // trois façons de travailler, et ce qui ne change pas entre elles.
    type: "featureCards",
    eyebrow: "À votre façon",
    heading: "Trois façons de travailler avec nous, une seule équipe",
    description:
      "Dans les trois cas : le même référent, votre politique voyages appliquée, une seule facture. Et vous changez de façon de faire quand vous voulez.",
    cards: [
      {
        title: "Tout confier à votre référent",
        description:
          "Un appel ou un message suffit. Votre référent réserve, ajuste et suit chaque déplacement, sans que vous ayez à vous en occuper.",
        image: {
          src: "/professionnels/family-offices/poste-travail.jpg",
          alt: "Un conseiller Exuma à son poste, dans les bureaux de l'agence",
        },
      },
      {
        title: "Réserver en ligne",
        description:
          "Vos collaborateurs réservent eux-mêmes sur notre plateforme, sans formation, avec les meilleurs tarifs disponibles.",
        image: {
          src: "/professionnels/hero-1.png",
          alt: "Une voyageuse consulte son itinéraire sur son ordinateur",
        },
      },
      {
        title: "Combiner les deux",
        description:
          "En ligne pour l'aller-retour simple, votre référent pour le déplacement qui demande du soin. Tout est centralisé au même endroit.",
        image: {
          src: "/professionnels/family-offices/poignee-de-main.jpg",
          alt: "Une poignée de main dans un bureau parisien",
        },
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
    // Offre Corporate Mobility, liste transmise par la dirigeante
    // (2026-10-14). Ses neuf services tiennent en cinq tuiles illustrées ; la
    // ligne d'introduction est la sienne, au mot près.
    type: "bento",
    eyebrow: "Corporate Mobility",
    heading: "Vos déplacements, pilotés de bout en bout",
    description:
      "Chaque déplacement est maîtrisé, sécurisé et aligné avec vos enjeux stratégiques.",
    cta: { label: "Découvrir tous nos services", href: "/services" },
    cards: [
      {
        title: "Pilotage des dépenses",
        description:
          "Optimisation continue des budgets, analyse des comportements de réservation et ajustement de votre politique voyages.",
        image: {
          src: "/professionnels/entreprises/reunion.jpg",
          alt: "Un point budgétaire autour d'un ordinateur, dans les bureaux d'Exuma",
        },
      },
      {
        title: "Reporting exécutif",
        description:
          "Une vision consolidée de tous vos flux de déplacement, analyse carbone comprise, prête pour votre direction.",
        image: {
          // Image générée (2026-10-14) : tableau de bord aux couleurs de la
          // maison, sans texte ni chiffre lisible à l'écran.
          src: "/professionnels/entreprises/reporting.png",
          alt: "Un tableau de bord de reporting des déplacements, sur un ordinateur portable",
        },
      },
      {
        // Pas de « 24/7 » : l'astreinte existe mais ses contours ne sont pas
        // fixés (arbitrage de la dirigeante, 2026-10-15).
        title: "Veille & astreinte",
        description:
          "Une équipe d'astreinte et une reprotection immédiate en cas d'imprévu : le service est le cœur de notre métier.",
        image: {
          src: "/service/securite/imprevus-3x4.png",
          alt: "Un conseiller d'Exuma suit un déplacement en cours",
        },
      },
      {
        title: "Formalités & sécurité",
        description:
          "Visas, formalités et traçabilité des voyageurs. Chauffeurs, sécurité et aviation privée si nécessaire.",
        image: {
          src: "/professionnels/family-offices/passeports-bureau.jpg",
          alt: "Des passeports préparés sur un bureau",
        },
      },
      {
        title: "Accès & privilèges",
        description:
          "Salons, fast track et coordination VIP, sièges et cabines stratégiques, statuts fidélité et miles.",
        image: {
          // Image générée (2026-10-14) : grand terminal européen, sans
          // logo ni signalétique lisible.
          src: "/professionnels/entreprises/acces-aeroport.png",
          alt: "Deux voyageurs d'affaires accompagnés vers un accès prioritaire, dans un grand terminal européen",
        },
      },
    ],
  },

  {
    // Plateforme de réservation (outil SBT). Facultative : elle accompagne le
    // référent, elle ne le remplace pas. Version courte, en points, sur fond
    // sombre (voir `dark` dans le gabarit de la page).
    type: "textImagesSplit",
    eyebrow: "Plateforme de réservation",
    heading: "Vos équipes réservent en ligne, votre référent reste là",
    paragraphs: [
      "Un outil d'achat de voyages à votre disposition, jamais imposé. Il accompagne le service, il ne le remplace pas.",
      {
        label: "Prise en main immédiate",
        text: "Sans formation, accessible partout. Réservations en ligne et confiées au référent, centralisées en temps réel.",
      },
      {
        label: "Le meilleur tarif",
        text: "NDC, GDS Sabre et Amadeus, rail européen, SNCF et Ouigo, hôtellerie multisourcée, location de voitures.",
      },
      {
        label: "Modifications en ligne",
        text: "Annulation ou changement en quelques clics. Dès que ça se complique, votre référent reprend la main.",
      },
      {
        label: "Facturation sur mesure",
        text: "Par entité, service, code projet, centre de coût ou bon de commande, à la fréquence de votre choix.",
      },
    ],
    cta: {
      label: "Découvrir la plateforme",
      href: "/professionnels/plateforme",
    },
    // Une seule image : l'interface de la plateforme, redessinée d'après
    // celle de l'éditeur WonderMiles (sans l'assistant), qui rejoue le geste du
    // voyageur. Source HTML dans references/professionnels/entreprises/.
    images: [
      {
        src: "/professionnels/entreprises/plateforme-reservation.png",
        alt: "La plateforme de réservation : vols Paris-Genève triés selon la politique voyages, offre recommandée réservée en un clic, confirmation envoyée au référent",
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
      heading: "Partir à 40 demande le même soin qu'à 1",
      columns: [
        "Séminaire de direction, convention, incentive, déplacement d'une équipe entière sur un même site : nous prenons l'ensemble, des vols au dernier transfert, avec un interlocuteur unique du premier devis au retour.",
        "Les listes de participants changent jusqu'au dernier moment, les contraintes alimentaires et médicales aussi. Nous les tenons à jour, nous suivons chaque arrivée, et nous restons présents pendant l'événement.",
      ],
      cta: { label: "Parler d'un projet de groupe", href: "/professionnels/groupes" },
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
    cta: { label: "Recevoir notre engagement écrit", href: "/professionnels/engagement?profil=entreprise" },
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
        question: "Pouvons-nous réserver nous-mêmes, ou tout vous confier ?",
        answer:
          "Les deux, et vous n'avez pas à choisir une fois pour toutes. Vos collaborateurs peuvent réserver sur notre plateforme, qui se prend en main sans formation, ou tout confier à votre référent par téléphone ou par message. Beaucoup combinent : en ligne pour les trajets simples, le référent pour ce qui demande du soin. Toutes les réservations sont centralisées, et votre référent reprend la main dès qu'un déplacement se complique.",
      },
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
    secondaryCta: { label: "Écrire à Ludivine", href: "/professionnels/contact?profil=entreprise" },
  },
];
