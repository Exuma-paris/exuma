import type { ServiceCategory } from "@/lib/content/types";
import { EXUMA_TEL_HREF } from "@/lib/exuma";

/**
 * Sixième catégorie, demandée par la dirigeante le 2026-10-14 (account
 * management à la demande ajouté le même jour), sur le gabarit
 * de `ingenierie.tsx` sans le bloc `tips` :
 *
 *   hero > textColumns > featureRows > infoGrid > faq > finalCta
 *
 * Seule catégorie réservée aux professionnels (`proOnly`) : elle n'apparaît ni
 * dans la mosaïque Conciergerie de l'accueil ni dans le menu Conciergerie,
 * mais en tête de la grille /services et du carrousel du hub Professionnels.
 *
 * Le contenu ne reprend que des engagements déjà écrits ailleurs sur le site
 * (page Entreprises, liste Corporate Mobility de la dirigeante) : facture
 * unique, reporting mensuel selon vos axes, facturation paramétrable, pilotage
 * des budgets, analyse des réservations, alerte hors politique avant la
 * réservation, analyse carbone, questionnaires achats et RSE. Rien sur un
 * tableau de bord en accès libre : ce n'est pas confirmé.
 *
 * TODO images : le hero est l'image générée du tableau de bord ; les rangées
 * empruntent des photos des bureaux. Traçabilité dans
 * `references/professionnels/entreprises/SOURCES.md`.
 */

export const serviceCategory: ServiceCategory = {
  slug: "reporting",
  name: "Reporting & pilotage",
  proOnly: true,
  blurb:
    "Facture unique, reporting mensuel, pilotage des budgets et vision consolidée de vos déplacements professionnels.",
  keywords: [
    "reporting",
    "pilotage",
    "budget",
    "facturation",
    "centre de coût",
    "politique voyages",
    "empreinte carbone",
    "RSE",
    "achats",
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Reporting & pilotage",
      heading: "Vos déplacements, lisibles d'un coup d'œil",
      description:
        "Une facture unique, un reporting mensuel selon vos propres axes, et une politique voyages ajustée à partir de ce que vos équipes réservent vraiment.",
      images: [
        {
          // Photo des bureaux (même prise de vue que le hero Ingénierie),
          // retouchée le 2026-10-15 : une cliente office manager est ajoutée
          // à côté de la conseillère, et l'écran du premier plan montre des
          // statistiques sans rien de lisible. Illustre l'account management.
          src: "/service/reporting/hero-account.png",
          alt: "Une conseillère Exuma et une cliente passent en revue des statistiques de déplacement à l'écran",
        },
      ],
    },

    {
      type: "textColumns",
      eyebrow: "Ce que vous y gagnez",
      heading: "Savoir qui part, où, et à quel coût, sans rien reconstituer",
      columns: [
        "Sans pilotage, les dépenses de déplacement se découvrent après coup : des notes de frais éparses, des factures par prestataire, des billets réservés hors de tout cadre. Personne ne sait vraiment ce que coûtent les déplacements de l'entreprise.",
        "Chez nous, tout converge au même endroit, que vos équipes réservent en ligne ou passent par leur référent. Chaque mois, vous recevez une facture unique et un reporting présenté selon vos axes d'analyse.",
        "Ce reporting sert à décider. Nous l'analysons avec vous pour ajuster la politique voyages là où elle ne tient pas, et pour optimiser les budgets d'une année sur l'autre.",
      ],
      cta: {
        label: "Parler de votre reporting",
        href: "/professionnels/contact?profil=entreprise",
      },
    },

    {
      type: "featureRows",
      eyebrow: "Nos prestations",
      heading: "Ce que nous mettons en place pour vous",
      description:
        "Les trois premiers volets se règlent une fois, au démarrage, puis tournent chaque mois sans que vous ayez à les relancer. Le dernier se déclenche quand vous le demandez.",
      items: [
        {
          title: "Une facturation paramétrée comme vous travaillez",
          paragraphs: [
            "Les déplacements sont regroupés sur une facture unique, détaillée par voyageur. La répartition suit votre organisation : par entité, par service, par code projet, par centre de coût ou par bon de commande.",
            "La fréquence se configure selon votre cahier des charges. Les justificatifs sont conservés et vous restent accessibles, pour que votre contrôle de gestion n'ait rien à réclamer.",
          ],
          image: {
            src: "/professionnels/clavier.jpg",
            alt: "Les mains d'un conseiller Exuma sur son clavier",
          },
        },
        {
          title: "Un reporting prêt pour votre direction",
          paragraphs: [
            "Chaque mois, une vision consolidée de tous vos flux de déplacement : qui est parti, où, quand, à quel coût, et dans quelles conditions.",
            "L'analyse carbone en fait partie, pour alimenter votre démarche RSE. Et quand vos achats nous soumettent leurs questionnaires, nous y répondons sans relance.",
          ],
          image: {
            src: "/professionnels/entreprises/reunion.jpg",
            alt: "Un point budgétaire autour d'un ordinateur, dans les bureaux d'Exuma",
          },
        },
        {
          title: "Une politique voyages qui se pilote",
          paragraphs: [
            "Classes, plafonds, circuits de validation : nous intégrons vos règles une fois, puis nous les faisons respecter. Une dépense qui sort du cadre vous est signalée avant la réservation, pas à la facture.",
            "Nous analysons ensuite les comportements de réservation pour repérer ce qui se répète : les trajets réservés trop tard, les hôtels hors grille, les classes surclassées. La politique s'ajuste sur ces constats, et les budgets s'optimisent en continu.",
          ],
          image: {
            src: "/professionnels/family-offices/temoignage-bureau.jpg",
            alt: "Un conseiller Exuma à son bureau, dans les locaux de l'agence",
          },
        },
        {
          // Ajout demandé par la dirigeante (2026-10-14) : accompagnement
          // ponctuel, à la demande, et non une prestation mensuelle.
          title: "Un account management à la demande",
          paragraphs: [
            "Quand vous voulez prendre du recul, un interlocuteur dédié analyse vos dépenses de déplacement avec vous et identifie les axes d'optimisation : les trajets qui reviennent, les fournisseurs qui pèsent le plus, les postes qui dérivent.",
            "Il vous accompagne ensuite dans la négociation de vos contrats et dans la réflexion sur les cartes d'abonnement et de réduction, pour vos voyageurs les plus fréquents. Vous décidez, nous préparons le terrain. Cet accompagnement fait l'objet d'une proposition à part, en dehors du service courant.",
          ],
          image: {
            src: "/professionnels/family-offices/poignee-de-main.jpg",
            alt: "Une poignée de main dans un bureau parisien",
          },
        },
      ],
    },

    {
      type: "infoGrid",
      theme: "dark",
      eyebrow: "Nos engagements",
      heading: "Ce sur quoi votre contrôle de gestion peut compter",
      items: [
        {
          iconName: "fileText",
          title: "Une facture, pas trente",
          description:
            "Tous les déplacements du mois sur une facture unique, répartie selon vos axes et à la fréquence de votre choix.",
        },
        {
          iconName: "calendarDays",
          title: "Un reporting chaque mois",
          description:
            "Une vision consolidée de vos flux, analyse carbone comprise, sans que vous ayez à la demander.",
        },
        {
          iconName: "badgeCheck",
          title: "Le hors politique signalé avant",
          description:
            "Vous arbitrez en une phrase avant la réservation, la décision est tracée et figure au récapitulatif du mois.",
        },
        {
          iconName: "euro",
          title: "Des budgets qui s'optimisent",
          description:
            "Nous analysons vos réservations avec vous et ajustons la politique voyages là où elle coûte sans raison.",
        },
      ],
    },

    {
      type: "faq",
      eyebrow: "Questions fréquentes",
      heading: "Ce que l'on nous demande sur le reporting",
      contact: {
        prefix: "Une question qui n'est pas ici ? ",
        label: "Appelez-nous",
        href: EXUMA_TEL_HREF,
        suffix: ", nous y répondrons directement.",
      },
      items: [
        {
          question: "Comment la facturation est-elle répartie ?",
          answer: (
            <p>
              Selon votre organisation : par entité, par service, par code
              projet, par centre de coût ou par bon de commande. Vous nous
              indiquez la répartition et la fréquence au démarrage, et nous
              nous y tenons. Chaque ligne reste détaillée par voyageur.
            </p>
          ),
        },
        {
          question: "Les réservations faites en ligne sont-elles incluses ?",
          answer: (
            <p>
              Oui. Que vos collaborateurs réservent sur notre plateforme ou
              passent par leur référent, tout est centralisé au même endroit.
              Le reporting couvre l&apos;ensemble, sans double saisie.
            </p>
          ),
        },
        {
          question: "Fournissez-vous des données pour notre bilan carbone ?",
          answer: (
            <p>
              L&apos;analyse carbone fait partie du reporting. Nous répondons
              aussi aux questionnaires achats et RSE que vos équipes utilisent
              pour référencer leurs fournisseurs.
            </p>
          ),
        },
        {
          question: "Que se passe-t-il quand une dépense sort de la politique ?",
          answer: (
            <p>
              Nous vous la signalons avant la réservation, pas à la facture.
              Vous arbitrez en une phrase, la décision est tracée, et le
              récapitulatif du mois porte la mention.
            </p>
          ),
        },
      ],
    },

    {
      type: "finalCta",
      eyebrow: "Prendre contact",
      heading: "Vous voulez y voir clair sur vos déplacements ? Parlons-en.",
      primaryCta: { label: "Contacter Exuma", href: EXUMA_TEL_HREF },
      secondaryCta: {
        label: "Découvrir l'offre entreprises",
        href: "/professionnels/entreprises",
      },
    },
  ],
};
