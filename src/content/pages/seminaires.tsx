import type { Section } from "@/lib/content/types";
import { EXUMA_TEL_HREF } from "@/lib/exuma";

/**
 * Page `/professionnels/seminaires` : conventions, séminaires, team building et
 * events. Demandée par la dirigeante le 2026-10-14 (« Conventions & séminaires
 * d'entreprise : sur-mesure de A à Z » et « Team building & events :
 * conception, coordination, exécution »), avec un discours commercial.
 *
 * Elle prolonge le bloc « Séminaires » de la page Entreprises, qui y renvoie.
 * Le formulaire de demande reste `/professionnels/groupes`.
 *
 * Engagements repris d'ailleurs sur le site, sans en ajouter : interlocuteur
 * unique du premier devis au retour, listes et contraintes tenues à jour,
 * présence pendant l'événement, une seule facture, réponse sous 24 heures
 * ouvrées (formulaire de groupe).
 *
 * TODO témoignages : aucun tant qu'il n'y a pas de verbatim réel.
 * TODO images : toutes réemployées (bureaux, conciergerie, lifestyle), à
 * remplacer par des visuels de séminaire et de team building dédiés.
 */

export const meta = {
  title: "Séminaires, conventions et team building sur mesure",
  shortTitle: "Séminaires & events",
  description:
    "Exuma conçoit et organise vos séminaires, conventions, team buildings et événements d'entreprise, de A à Z : lieu, transport, hébergement, programme, présence le jour J, une seule facture.",
};

export const sections: Section[] = [
  {
    type: "hero",
    eyebrow: "Exuma · Séminaires & events",
    heading: "Vos séminaires, conventions et team buildings, conçus de A à Z",
    description:
      "Vous fixez l'objectif, nous construisons tout le reste : le lieu, les trajets, les nuits, le programme et le moment dont vos équipes reparleront. Un seul interlocuteur, du premier devis au retour.",
    images: [
      {
        src: "/professionnels/entreprises/salle-seminaire.jpg",
        alt: "Une salle de séminaire en session, autour d'une table en U",
      },
    ],
  },

  {
    type: "textColumns",
    eyebrow: "Ce que vous y gagnez",
    heading: "Un événement réussi se joue dans ce que personne ne voit",
    columns: [
      "Un séminaire, c'est une centaine de décisions : le lieu, les salles, les vols, les chambres, les régimes alimentaires, les horaires qui bougent la veille. Chacune est simple. C'est leur nombre qui épuise l'équipe qui organise en plus de son travail.",
      "Nous prenons l'ensemble, et vous gardez ce qui compte : le message, l'ordre du jour, les personnes à réunir. Vous validez les grandes étapes, nous tenons le reste, sans vous solliciter à chaque détail.",
      "Le jour J, nous sommes là, ou notre partenaire spécialement sélectionné pour votre événement. Les arrivées sont suivies une par une, les imprévus se règlent avant de vous parvenir, et vos participants ne voient qu'une chose : une organisation qui tient.",
    ],
    cta: {
      label: "Décrire votre projet",
      href: "/professionnels/groupes",
    },
  },

  {
    type: "featureRows",
    // Formats juxtaposés, pas une séquence : pas de numérotation.
    numbered: false,
    eyebrow: "Nos formats",
    heading: "Ce que nous organisons pour vos équipes",
    description:
      "Chaque format se construit sur mesure, à partir de votre objectif et de votre budget. Ils se combinent souvent : une convention le jour, une soirée le soir, une activité le lendemain.",
    items: [
      {
        title: "Conventions et séminaires d'entreprise",
        paragraphs: [
          "Séminaire de direction, convention commerciale, réunion annuelle : nous trouvons le lieu qui sert votre objectif, en France comme à l'étranger, et nous organisons tout, de A à Z.",
          "Salles et équipements, hébergement, restauration, transport de chaque participant depuis sa ville : un seul interlocuteur coordonne l'ensemble, du premier devis au dernier transfert retour.",
        ],
        image: {
          // Événement en plein air dans un site historique, kakémonos rendus
          // neutres (logos retirés).
          src: "/professionnels/seminaires/evenement.png",
          alt: "Une conférence en plein air dans un site historique, devant un public nombreux",
        },
      },
      {
        title: "Team building et events",
        paragraphs: [
          "Nous concevons l'activité, nous la coordonnons et nous l'exécutons : une sortie en pleine nature, un défi en équipe, un atelier, une soirée privatisée. Le format suit ce que vous voulez provoquer, de la cohésion à la célébration.",
          "Prestataires choisis et vérifiés, plan de repli en cas de mauvais temps, rythme pensé pour que chacun participe : rien n'est laissé au hasard, et personne ne reste sur le côté.",
        ],
        image: {
          // Photo Jules Despretz (départ de groupe en aéroport), écrans et
          // marques neutralisés. Source dans references/professionnels/seminaires/.
          src: "/professionnels/seminaires/depart-groupe.png",
          alt: "Un groupe de participants à l'enregistrement, au départ d'un voyage d'entreprise",
        },
      },
      {
        title: "Incentives et voyages de récompense",
        paragraphs: [
          "Pour remercier une équipe ou récompenser des résultats, nous montons des voyages qui marquent : une destination choisie pour vos participants, des expériences privées, des moments que personne n'aurait organisés seul.",
          "Vous fixez l'enveloppe et l'intention, nous proposons un programme et nous vous disons franchement ce qu'il permet. Les contraintes de chacun sont prises en compte, sans que le groupe en pâtisse.",
        ],
        image: {
          // Photo fournie (evolution2.com, ski géant en équipe), logos des
          // vestes retirés. Source dans references/professionnels/seminaires/.
          src: "/professionnels/seminaires/ski-geant.png",
          alt: "Une équipe réunie autour de skis géants en bois, au soleil sur la neige",
        },
      },
    ],
  },

  {
    type: "infoGrid",
    eyebrow: "De A à Z",
    heading: "Tout ce que nous prenons en charge",
    items: [
      {
        iconName: "star",
        title: "Le lieu et les salles",
        description:
          "Repérage, négociation et réservation du lieu, des salles et des équipements, selon votre objectif et votre effectif.",
      },
      {
        iconName: "plane",
        title: "Le transport de chacun",
        description:
          "Vols, trains et transferts de chaque participant, depuis sa ville, regroupés pour que tout le monde arrive à l'heure.",
      },
      {
        iconName: "sun",
        title: "L'hébergement",
        description:
          "Les chambres réservées et attribuées, les arrivées et départs décalés gérés un par un.",
      },
      {
        iconName: "sparkles",
        title: "Le programme",
        description:
          "Activités, team building, soirées et moments libres, conçus pour servir votre message.",
      },
      {
        iconName: "calendarDays",
        title: "Les listes qui bougent",
        description:
          "Participants, régimes alimentaires et contraintes médicales tenus à jour jusqu'au dernier moment.",
      },
      {
        iconName: "badgeCheck",
        title: "Des prestataires vérifiés",
        description:
          "Chaque intervenant choisi et contrôlé par nos soins, avec un plan de repli prévu à l'avance.",
      },
      {
        iconName: "phone",
        title: "Présents le jour J",
        description:
          "Nous suivons chaque arrivée et restons présents pendant l'événement, nous-mêmes ou notre partenaire sélectionné, pour régler l'imprévu avant qu'il ne se voie.",
      },
      {
        iconName: "fileText",
        title: "Une seule facture",
        description:
          "Un devis clair au départ, une facture unique à la fin, répartie selon vos centres de coût si besoin.",
      },
    ],
  },

  {
    type: "spotsList",
    eyebrow: "Comment nous travaillons",
    heading: "De votre première demande au retour de vos équipes",
    spots: [
      {
        title: "Le brief",
        description:
          "Vous nous décrivez votre objectif, vos dates, votre effectif et votre budget. Nous vous répondons sous 24 heures ouvrées.",
      },
      {
        title: "La proposition",
        description:
          "Un lieu, un programme et un devis détaillé, avec ce que votre budget permet et ce qu'il ne permet pas, dit franchement.",
      },
      {
        title: "L'organisation",
        description:
          "Une fois validé, nous réservons et coordonnons tout. Vous recevez un point d'étape régulier, sans avoir à le demander.",
      },
      {
        title: "Le jour J",
        description:
          "Nous sommes sur place ou joignables à chaque instant, selon ce qui a été convenu. Les imprévus se règlent sans vous.",
      },
      {
        title: "Le retour",
        description:
          "Les retours de chacun suivis jusqu'au bout, puis une facture unique et un bilan de ce qui a fonctionné.",
      },
    ],
  },

  {
    type: "faq",
    eyebrow: "Questions pratiques",
    heading: "Ce que l'on nous demande avant un séminaire",
    contact: {
      prefix: "Une question qui n'est pas ici ? ",
      label: "Appelez-nous",
      href: EXUMA_TEL_HREF,
      suffix: ", nous répondons directement.",
    },
    items: [
      {
        question: "À partir de combien de participants intervenez-vous ?",
        answer:
          "Il n'y a pas de seuil. Nous organisons aussi bien un séminaire de direction de quelques personnes qu'une convention qui réunit une entreprise entière, avec le même soin.",
      },
      {
        question: "Combien de temps à l'avance faut-il vous contacter ?",
        answer:
          "Le plus tôt possible, surtout en haute saison, où les lieux se réservent longtemps à l'avance. Mais une demande serrée n'est jamais refusée d'office : nous vous disons tout de suite ce qui reste possible dans le délai.",
      },
      {
        question: "Organisez-vous en France comme à l'étranger ?",
        answer:
          "Oui. Nous ne travaillons pas à partir d'un catalogue : là où votre événement a du sens, nous l'organisons, qu'il s'agisse d'un château à une heure de Paris ou d'une destination à l'autre bout du monde.",
      },
      {
        question: "Que se passe-t-il si la liste des participants change ?",
        answer:
          "C'est la règle plutôt que l'exception. Nous tenons la liste à jour jusqu'au dernier moment, avec les vols, les chambres et les contraintes de chacun, et nous vous signalons ce que chaque changement coûte avant de le faire.",
      },
      {
        question: "Comment se passe la facturation ?",
        answer:
          "Un devis détaillé au départ, puis une facture unique à la fin de l'événement. Elle peut être répartie selon vos entités ou vos centres de coût, si vous nous l'indiquez.",
      },
    ],
  },

  {
    type: "finalCta",
    eyebrow: "Votre prochain événement",
    heading: "Parlons de votre prochain séminaire",
    primaryCta: {
      label: "Décrire votre projet",
      href: "/professionnels/groupes",
    },
    secondaryCta: { label: "Appeler Exuma", href: EXUMA_TEL_HREF },
  },
];
