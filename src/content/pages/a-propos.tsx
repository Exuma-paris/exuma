import type { Section } from "@/lib/content/types";
import { EXUMA_ADDRESS } from "@/lib/exuma";

/**
 * Page `/a-propos`. Qui nous sommes, d'où nous venons, qui fait le travail.
 *
 * Frontière avec `/approche` (« Pourquoi Exuma ») : celle-ci porte le
 * manifeste et la conviction. Ici, uniquement des faits : l'histoire, les
 * personnes, le lieu, les métiers.
 *
 * Sources : historique et équipe repris de l'ancien site
 * (exuma.paris/voyage-luxe-paris), adresse depuis `src/lib/exuma.ts`, citation
 * de Ludivine tirée de la trame de table ronde (question sur les ressources
 * humaines).
 *
 * Bloc « Ce qui nous engage » (immatriculation, garantie, assurance) retiré
 * tant que les valeurs réelles ne sont pas connues : le site n'affiche encore
 * que des valeurs provisoires dans les mentions légales.
 *
 * TODO citation : à valider avec Ludivine.
 */

export const meta = {
  title: "À propos d'Exuma",
  description:
    "Exuma, maison parisienne de conseils dédiée au déplacement depuis 1991 : son histoire, de GR Tourisme à Exuma, et l'équipe de la rue de Courcelles.",
};

export const sections: Section[] = [
  {
    type: "hero",
    eyebrow: "À propos d'Exuma",
    heading: "Une maison parisienne, depuis 1991",
    description:
      "Une équipe installée rue de Courcelles, qui prend en charge les déplacements de ses clients, du billet de train au tour du monde.",
    images: [
      {
        src: "/professionnels/family-offices/temoignage-bureau.jpg",
        alt: "Un conseiller Exuma à son bureau, dans les locaux de la rue de Courcelles",
      },
      {
        src: "/professionnels/entreprises/reunion.jpg",
        alt: "Deux collaboratrices d'Exuma préparent un dossier autour d'une table",
      },
      {
        src: "/professionnels/entreprises/bureau.jpg",
        alt: "Une collaboratrice d'Exuma à son poste, devant ses écrans",
      },
    ],
  },

  {
    type: "spotsList",
    eyebrow: "Notre histoire",
    heading: "De GR Tourisme à Exuma",
    description:
      "Trente-cinq ans, trois générations à la tête de la maison, et un même fil : connaître ses clients, puis les accompagner d'un voyage à l'autre.",
    spots: [
      {
        title: "1991",
        description:
          "À Paris, Gérard Goy et Hubert de Roquemaurel créent GR Tourisme. L'histoire de la maison commence avec une agence de voyages et ses premiers clients.",
      },
      {
        title: "2003",
        description:
          "Gilles Cotillon reprend l'agence et ouvre un nouveau chapitre. La même année arrive Ludivine Mercier Gaudissard. Elle ne quittera plus la maison.",
      },
      {
        title: "2015",
        description:
          "Douze ans après son arrivée, Ludivine Mercier Gaudissard rachète l'agence. Elle en connaît chaque client et chaque dossier : la transmission se fait de l'intérieur.",
      },
      {
        title: "2022",
        description:
          "GR Tourisme devient Exuma, une identité tournée vers l'excellence, l'expérience et l'exception. L'essentiel ne change pas : un interlocuteur de référence et un binôme pour chaque dossier.",
      },
    ],
  },

  {
    // TODO : verbatim à valider avec Ludivine. Repris de la trame de table
    // ronde (question 7, compétences et ressources humaines), tirets retirés.
    type: "specialistSpotlight",
    eyebrow: "L'équipe",
    heading: "Une compétence qui se construit avec le temps",
    specialist: {
      collaborateurSlug: "ludivine",
      quote:
        "Une destination, on l'apprend vite. Un client, il faut des années pour le connaître vraiment. Chaque dossier est donc tenu à deux : personne n'est jamais seul à savoir. Et quand nous recrutons, nous ne cherchons pas des passionnés de voyage, mais des gens que le détail empêche de dormir.",
      role: "Directrice d'Exuma",
    },
    features: [
      {
        iconName: "badgeCheck",
        title: "Un binôme par dossier",
        description:
          "Deux personnes connaissent chaque client. Pendant une absence, le relais est pris sans que rien ne soit à réexpliquer.",
      },
      {
        iconName: "phone",
        title: "Les mêmes interlocuteurs",
        description:
          "Le référent d'un client reste le même d'un voyage à l'autre. C'est lui qui garde la mémoire de ses habitudes.",
      },
      {
        iconName: "fileText",
        title: "Le goût de la vérification",
        description:
          "Un passeport se vérifie trois fois plutôt qu'une. Le détail fait partie du métier, pas de la routine.",
      },
    ],
  },

  {
    // Organisation par pôles transmise par la direction (octobre 2026), cartes
    // rangées dans cet ordre. Les personnes sans portrait ont le fauteuil vide
    // (`portrait-attente.png`) en attendant la séance photo. Sous le nom,
    // seulement le poste.
    type: "featureCards",
    eyebrow: "Qui fait le travail",
    heading: "Une équipe organisée en pôles, un interlocuteur pour chaque client",
    description:
      "Chaque client a son référent. Derrière lui, une équipe où chacun a son métier, et où un dossier passe d'un pôle à l'autre sans rien perdre en chemin.",
    cards: [
      {
        title: "Ludivine Gaudissard",
        description:
          "Directrice",
        image: {
          src: "/collaborateurs/ludivine-chair-hd.jpg",
          alt: "Portrait de Ludivine Gaudissard, Exuma",
        },
      },
      {
        // TODO : portrait et nom complet à venir.
        title: "Isabelle",
        description:
          "Responsable du pôle loisir et conciergerie",
        image: {
          src: "/collaborateurs/portrait-attente.png",
          alt: "Portrait à venir de Isabelle",
        },
      },
      {
        title: "Carole Galvier",
        description:
          "Luxury Travel Designer",
        image: {
          src: "/collaborateurs/carole-chair-hd.jpg",
          alt: "Portrait de Carole Galvier, Exuma",
        },
      },
      {
        title: "Stéphane Lasnier",
        description:
          "Luxury Travel Designer",
        image: {
          src: "/collaborateurs/stephane-chair-hd.jpg",
          alt: "Portrait de Stéphane Lasnier, Exuma",
        },
      },
      {
        title: "Tainà Dos Santos Papaleo",
        description:
          "Luxury Travel Designer",
        image: {
          src: "/collaborateurs/taina-chair-hd.jpg",
          alt: "Portrait de Tainà Dos Santos Papaleo, Exuma",
        },
      },
      {
        // TODO : portrait et nom complet à venir.
        title: "Clara Cochet",
        description:
          "Travel Designer",
        image: {
          src: "/collaborateurs/portrait-attente.png",
          alt: "Portrait à venir de Clara Cochet",
        },
      },
      {
        // TODO : portrait et nom complet à venir.
        title: "Hélène",
        description:
          "Travel Designer",
        image: {
          src: "/collaborateurs/portrait-attente.png",
          alt: "Portrait à venir de Hélène",
        },
      },
      {
        // TODO : portrait et nom complet à venir.
        title: "Caroline",
        description:
          "Expertise produit",
        image: {
          src: "/collaborateurs/portrait-attente.png",
          alt: "Portrait à venir de Caroline",
        },
      },
      {
        // TODO : portrait et nom complet à venir.
        title: "Gaëlle",
        description:
          "Responsable du pôle conciergerie et corporate",
        image: {
          src: "/collaborateurs/portrait-attente.png",
          alt: "Portrait à venir de Gaëlle",
        },
      },
      {
        title: "Cécile Borruto",
        description:
          "Conciergerie et grands comptes",
        image: {
          src: "/collaborateurs/cecile-chair-hd.jpg",
          alt: "Portrait de Cécile Borruto, Exuma",
        },
      },
      {
        title: "Calvin Nguyen",
        description:
          "Conciergerie et grands comptes",
        image: {
          src: "/collaborateurs/calvin-chair-hd.jpg",
          alt: "Portrait de Calvin Nguyen, Exuma",
        },
      },
      {
        // TODO : portrait et nom complet à venir.
        title: "Clara S.",
        description:
          "Conciergerie et grands comptes",
        image: {
          src: "/collaborateurs/portrait-attente.png",
          alt: "Portrait à venir de Clara S.",
        },
      },
      {
        title: "Rania Kahla",
        description:
          "Clientèle corporate",
        image: {
          src: "/collaborateurs/rania-chair-hd.jpg",
          alt: "Portrait de Rania Kahla, Exuma",
        },
      },
      {
        // TODO : portrait et nom complet à venir.
        title: "Marjorie",
        description:
          "Clientèle corporate",
        image: {
          src: "/collaborateurs/portrait-attente.png",
          alt: "Portrait à venir de Marjorie",
        },
      },
      {
        title: "Blanche Dupenloux",
        description:
          "Séminaires et groupes",
        image: {
          src: "/collaborateurs/blanche-chair-hd.jpg",
          alt: "Portrait de Blanche Dupenloux, Exuma",
        },
      },
      {
        // TODO : portrait et nom complet à venir.
        title: "Amélie",
        description:
          "Communication et marketing",
        image: {
          src: "/collaborateurs/portrait-attente.png",
          alt: "Portrait à venir de Amélie",
        },
      },
      {
        // TODO : portrait et nom complet à venir.
        title: "Sasha",
        description:
          "Office manager",
        image: {
          src: "/collaborateurs/portrait-attente.png",
          alt: "Portrait à venir de Sasha",
        },
      },
    ],
  },

  {
    type: "textImagesSplit",
    eyebrow: "Nos bureaux",
    heading: "Rue de Courcelles, dans le huitième arrondissement",
    paragraphs: [
      `Exuma reçoit ses clients au ${EXUMA_ADDRESS}, dans un immeuble haussmannien entre le parc Monceau et les Champs-Élysées. Les bureaux sont ouverts du lundi au vendredi, de 9 h à 19 h, et les visites se font sur rendez-vous.`,
      "C'est là que travaille toute l'équipe : les travel designers, les conseillers voyages d'affaires et la conciergerie. Quand un nouveau besoin appelle une autre expertise, le dossier passe d'une personne à l'autre sans que le client ait à répéter quoi que ce soit.",
    ],
    images: [
      {
        src: "/professionnels/entreprises/hero.jpg",
        alt: "L'équipe d'Exuma à son poste, dans les bureaux de la rue de Courcelles",
      },
      {
        src: "/professionnels/family-offices/poste-travail.jpg",
        alt: "Un conseiller Exuma à son poste, devant les hautes fenêtres du bureau",
      },
    ],
  },

  {
    type: "featureCards",
    eyebrow: "Nos métiers",
    heading: "Du voyage sur mesure au déplacement d'affaires",
    layout: "grid",
    cards: [
      {
        title: "Le voyage sur mesure",
        description:
          "Un voyage construit autour de ceux qui partent, proposé avant même d'être demandé. Vous validez, l'équipe s'occupe de tout le reste.",
        image: {
          src: "/theme/culture-visites/hero-1.png",
          alt: "Un couple et leur guide, de dos, seuls sur le chemin de ronde d'une muraille",
        },
        link: { label: "Créer votre voyage", href: "/votre-projet" },
      },
      {
        title: "La conciergerie",
        description:
          "Tout ce qui entoure un déplacement : les demandes de dernière minute, les accès, les imprévus réglés avant qu'ils ne deviennent les vôtres.",
        image: {
          src: "/service/conciergerie/hero-1.png",
          alt: "Une clé de chambre remise à la réception d'un hôtel",
        },
        link: { label: "La conciergerie", href: "/services/conciergerie" },
      },
      {
        title: "Les déplacements professionnels",
        description:
          "Les voyages d'affaires des entreprises, des dirigeants et des family offices, avec un interlocuteur qui décroche et règle en un appel.",
        image: {
          src: "/professionnels/entreprises/conseillere-en-ligne.jpg",
          alt: "Une conseillère Exuma au téléphone, à son poste",
        },
        link: { label: "Exuma pour les professionnels", href: "/professionnels" },
      },
      {
        title: "Séminaires et groupes",
        description:
          "Séminaires, incentives, conventions et voyages de groupe, professionnels comme familiaux, organisés avec la même attention qu'un départ individuel.",
        image: {
          src: "/professionnels/entreprises/salle-seminaire.jpg",
          alt: "Une salle de séminaire réunissant une équipe autour d'une grande table",
        },
        link: { label: "Les voyages de groupe", href: "/professionnels/groupes" },
      },
    ],
  },

  {
    type: "finalCta",
    eyebrow: "Prendre contact",
    heading: "Rencontrons-nous, rue de Courcelles ou au téléphone.",
    primaryCta: { label: "Nous écrire", href: "/nous-ecrire" },
    secondaryCta: { label: "Pourquoi Exuma", href: "/approche" },
  },
];
