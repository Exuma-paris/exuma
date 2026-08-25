import type { Section } from "@/lib/content/types";
import { EXUMA_TEL_HREF } from "@/lib/exuma";

/**
 * Hub B2B `/professionnels`. Point d'entrée unique des trois cibles
 * professionnelles (family offices et assistantes, entreprises et cabinets,
 * dirigeants). L'ordre des sections suit le parcours client B2B : le visiteur
 * arrive déjà recommandé et vérifie une réputation, il ne découvre pas une
 * offre.
 *
 * Les pages filles (`/professionnels/family-offices`, `/entreprises`,
 * `/dirigeants`) ne sont pas encore produites : les trois portes pointent
 * provisoirement vers `/contact`.
 *
 * TODO chiffres : toutes les valeurs marquées TODO attendent le retour de
 * Ludivine (garanties, volumes, ancienneté, pays opérés, délai de réponse).
 * TODO images : les visuels sont provisoires, voir la liste des prises de vue
 * attendues dans les `alt` ci-dessous.
 */

export const meta = {
  title: "Professionnels",
  description:
    "Family offices, assistantes, entreprises et dirigeants : Exuma prend en charge l'organisation continue de vos déplacements professionnels et privés, avec un interlocuteur unique.",
};

export const sections: Section[] = [
  {
    type: "hero",
    eyebrow: "Exuma · Professionnels",
    heading:
      "Déléguez l'organisation de vos voyages, gardez un seul interlocuteur",
    description:
      "Depuis 1991, nous prenons en charge vos déplacements professionnels et privés. Un partenaire de conciergerie, joignable et réactif.",
    images: [
      {
        src: "/professionnels/hero-1.png",
        alt: "Préparation d'un déplacement dans les bureaux d'Exuma, tôt le matin",
      },
      {
        src: "/professionnels/hero-2.png",
        alt: "Chauffeur ouvrant la portière lors d'un transfert privé",
      },
      {
        src: "/professionnels/hero-3.png",
        alt: "Accueil à la réception de l'hôtel à l'arrivée",
      },
    ],
  },

  {
    type: "specialistSpotlight",
    eyebrow: "Un visage, pas un standard",
    heading:
      "Ludivine Gaudissard cerne votre besoin, puis compose votre dispositif",
    partners: { title: "" },
    specialist: {
      collaborateurSlug: "ludivine",
      // TODO : citation à valider avec Ludivine avant mise en ligne.
      quote:
        "Le besoin qu'on me décrit au premier appel n'est presque jamais le besoin réel. Mon travail commence là : comprendre comment vous fonctionnez, qui voyage, ce qui doit être anticipé, ce qui ne se délègue pas. Je compose ensuite le dispositif qui vous correspond, et je désigne la personne qui le tiendra. C'est pour cette raison qu'aucun de nos comptes ne ressemble au précédent.",
      role: "Directrice d'Exuma",
    },
    features: [
      {
        iconName: "badgeCheck",
        title: "Un interlocuteur unique",
        description:
          "Ludivine désigne votre référent et son suppléant. Ce sont les mêmes d'un voyage au suivant, vous n'avez jamais à vous répéter.",
      },
      {
        iconName: "clock",
        title: "Un engagement de délai",
        description:
          "Vous répondre passe avant le reste. Nous convenons ensemble d'un délai adapté à votre organisation, et nous nous y tenons.",
      },
      {
        iconName: "fileText",
        title: "La confidentialité par principe",
        description:
          "Elle ne se demande pas, elle est acquise. Aucun client n'est cité publiquement sans son accord préalable, où que ce soit.",
      },
    ],
  },

  {
    type: "featureCards",
    background: "bg-background-subtle",
    eyebrow: "Family offices · Entreprises · Dirigeants",
    heading: "Vous organisez pour vos clients, pour vos équipes, ou pour vous",
    description:
      "Vos attentes ne sont pas les mêmes : des garanties quand vous engagez votre responsabilité, un suivi quand ce sont vos équipes qui partent, du confort quand c'est vous qui voyagez. Prenez l'entrée qui vous ressemble.",
    cards: [
      {
        title: "Family office ou assistante",
        description:
          "Vous engagez votre crédibilité en nous recommandant. Nous prenons en charge les voyages de vos clients, professionnels comme privés, avec un référent stable, des garanties écrites et une discrétion totale.",
        image: {
          src: "/professionnels/porte-a.png",
          alt: "Organiser les voyages de vos clients depuis son bureau",
        },
        // TODO lien : /professionnels/family-offices une fois la page produite.
        link: { label: "Nous en parler", href: "/contact" },
      },
      {
        title: "Entreprise ou cabinet",
        description:
          "Vos collaborateurs partent souvent, parfois du jour au lendemain. Nous fiabilisons leurs déplacements, restons joignables pendant le voyage et regroupons tout sur une seule facture.",
        image: {
          src: "/professionnels/porte-b.png",
          alt: "Collaborateur en déplacement, au travail pendant le trajet",
        },
        // TODO lien : /professionnels/entreprises une fois la page produite.
        link: { label: "Nous en parler", href: "/contact" },
      },
      {
        title: "Dirigeant",
        description:
          "Vous déléguez déjà tout le reste. Un appel suffit pour partir, décaler ou tout annuler, vos habitudes sont connues, et vos voyages privés suivent les mêmes règles que les professionnels.",
        image: {
          src: "/professionnels/porte-c.png",
          alt: "Attablé seul en terrasse en fin de journée",
        },
        // TODO lien : /professionnels/dirigeants une fois la page produite.
        link: { label: "Nous en parler", href: "/contact" },
      },
    ],
  },

  {
    type: "infoGrid",
    eyebrow: "Le socle",
    heading: "Ce qui ne change pas d'un dossier à l'autre",
    description:
      "Ce que vous pouvez vérifier avant de nous confier quoi que ce soit. Chaque chiffre est daté et revu une fois par an.",
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
        // Rédaction finale : seules les valeurs en 000 restent à remplacer par
        // les vraies (attestation de garantie financière, attestation RCP du
        // courtier, immatriculation Atout France). Rien d'autre à réécrire.
        title: "Assurés, garantis, immatriculés",
        description:
          "Immatriculation Atout France n° IM000000000, garantie financière de 000 000 €, responsabilité civile professionnelle souscrite auprès de 000. Les attestations vous sont transmises avant le premier dossier, sans que vous ayez à les réclamer.",
      },
    ],
  },

  {
    type: "textColumns",
    background: "bg-background-subtle",
    eyebrow: "Confidentialité",
    heading: "Ce qui se passe chez vous ne sort pas d'ici",
    columns: [
      "La confidentialité n'est pas une option que l'on active à votre demande, c'est un principe de fonctionnement. Elle s'applique dès le premier échange, avant même qu'un dossier existe, et sans que vous ayez à le réclamer.",
      "Aucun de nos clients n'est cité publiquement sans son accord préalable, ni sur ce site, ni ailleurs. Et par principe, les témoignages que vous lirez plus bas restent anonymisés.",
      // Formulation à faire valider par Ludivine (règle interne, pas une promesse chiffrée).
      "En interne, l'information circule au strict nécessaire : votre référent, son suppléant, et personne d'autre.",
    ],
    cta: { label: "Recevoir notre engagement écrit", href: "/contact" },
  },

  {
    type: "featureCards",
    eyebrow: "Le service",
    heading: "Ce que nous prenons en charge",
    description:
      "Le voyage n'est que la partie visible. Voici les métiers que nous coordonnons, sous un seul interlocuteur.",
    cards: [
      {
        title: "Conciergerie privée & VIP",
        description:
          "Moments d'exception, personnel dédié, réservations de dernière minute.",
        image: {
          src: "/service/conciergerie/hero-1.png",
          alt: "Remise de clé à la réception d'un hôtel",
        },
        link: { label: "Découvrir", href: "/services/conciergerie" },
      },
      {
        title: "Mobilité & accès privilégié",
        description:
          "Jets privés, transferts, fast-track aéroport et bagages sensibles.",
        image: {
          src: "/service/mobilite/hero-1.png",
          alt: "Jet privé prêt à l'embarquement sur le tarmac",
        },
        link: { label: "Découvrir", href: "/services/mobilite" },
      },
      {
        title: "Sécurité & sérénité",
        description:
          "Gestion des imprévus, assistance pendant le voyage, veille sanitaire.",
        image: {
          src: "/service/securite/hero-1.png",
          alt: "Prise en charge en berline avec chauffeur",
        },
        link: { label: "Découvrir", href: "/services/securite" },
      },
      {
        title: "Ingénierie du voyage & support global",
        description:
          "Visas, assurances, optimisation des privilèges, coordination complète.",
        image: {
          src: "/service/ingenierie/hero-1.jpg",
          alt: "Coordination d'un déplacement depuis le bureau",
        },
        link: { label: "Découvrir", href: "/services/ingenierie" },
      },
      {
        title: "Expériences & lifestyle",
        description:
          "Accès réservés, tables confidentielles, excursions privées, yachts.",
        image: {
          src: "/service/lifestyle/hero-1.png",
          alt: "Table dressée dans une salle privée",
        },
        link: { label: "Découvrir", href: "/services/lifestyle" },
      },
    ],
  },

  {
    type: "testimonials",
    background: "bg-background-subtle",
    eyebrow: "Ils nous font confiance",
    heading: "Discrètement, depuis des années",
    testimonials: [
      {
        // TODO : témoignage à recueillir, porte A. Question à poser : qu'est-ce
        // qui vous a rassuré au point de nous confier vos clients ?
        quote:
          "Un seul interlocuteur pour tous les voyages de nos familles. En trois ans, jamais un imprévu qu'ils n'aient anticipé.",
        image: {
          // TODO image : visuel neutre, surtout pas un portrait identifiable.
          src: "/destination/polynesie/full-image.png",
          alt: "Témoignage anonymisé",
        },
        name: "Directeur",
        role: "Family office",
      },
      {
        // TODO : témoignage à recueillir, porte B. Question à poser : que
        // s'est-il passé la fois où ça ne s'est pas déroulé comme prévu ?
        quote:
          "Nos associés voyagent beaucoup, souvent en dernière minute. La réactivité est réelle, y compris le week-end.",
        image: {
          src: "/destination/polynesie/bento-huahine.png",
          alt: "Témoignage anonymisé",
        },
        name: "Office manager",
        role: "Cabinet d'avocats",
      },
      {
        // TODO : témoignage à recueillir, porte C. Question à poser : qu'est-ce
        // que vous ne faites plus depuis que vous travaillez avec nous ?
        quote:
          "Je délègue mes voyages comme je délègue au bureau. Je dis où et quand, le reste se règle sans moi.",
        image: {
          src: "/destination/polynesie/bento-homme.png",
          alt: "Témoignage anonymisé",
        },
        name: "Dirigeant",
        role: "Groupe industriel",
      },
    ],
  },

  {
    type: "finalCta",
    eyebrow: "Prendre contact",
    heading: "Un échange, pas un formulaire",
    primaryCta: { label: "Appeler Exuma", href: EXUMA_TEL_HREF },
    // TODO : remplacer par la ligne directe et le mail nominatif de Ludivine.
    secondaryCta: { label: "Écrire à Ludivine", href: "/contact" },
  },
];
