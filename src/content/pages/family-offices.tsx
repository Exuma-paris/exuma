import type { Section } from "@/lib/content/types";
import { EXUMA_TEL_HREF } from "@/lib/exuma";

/**
 * Porte A du hub B2B : `/professionnels/family-offices`. Cible les family
 * offices et les assistantes personnelles, c'est-à-dire les personnes qui
 * organisent pour un client final et engagent leur propre crédibilité en nous
 * recommandant.
 *
 * Registre de preuve de cette porte : responsabilité, garanties, technicité,
 * rapidité d'exécution. Le confort n'apparaît qu'en fin de page (section
 * `textImagesSplit`) : ce n'est pas ce que le lecteur achète, c'est ce qui lui
 * revient ensuite, par les remerciements de son client.
 *
 * Ordre des sections : votre problème, ce que nous prenons en charge, la preuve
 * que nous pouvons le tenir, la confidentialité, les questions pratiques.
 *
 * TODO chiffres : les valeurs marquées TODO attendent le retour de Ludivine
 * (garanties, immatriculation, délai de réponse, facturation).
 * TODO images : tous les visuels sont provisoires. Les prises de vue attendues
 * sont décrites dans les `alt` ci-dessous.
 * TODO référent : la page ne nomme volontairement personne côté conseillers,
 * comme les deux autres portes. La citation de Ludivine reste à valider avec
 * elle.
 */

export const meta = {
  // `title` alimente la balise <title> via le gabarit `%s | Exuma` du layout,
  // et la carte de partage. Il porte les termes réellement tapés par la cible,
  // que le H1 ne contient pas volontairement.
  title: "Voyages des family offices et assistantes personnelles",
  // Repris tel quel dans le fil d'Ariane, où le titre complet serait trop long.
  shortTitle: "Family offices & assistantes",
  description:
    "Exuma prend en charge les voyages de vos clients, professionnels comme privés. Agence de voyages immatriculée à Paris, référent désigné, garanties écrites, confidentialité acquise.",
};

export const sections: Section[] = [
  {
    // `heroImageBackground` et non `hero` : le hub fait défiler trois images,
    // cette page en montre une seule, plein cadre, avec le titre par-dessus.
    // Le gabarit `hero` afficherait un carré plein largeur avec une image
    // unique, ce qui repousse le référent très bas dans la page.
    type: "heroImageBackground",
    eyebrow: "Exuma · Family offices & assistantes",
    heading:
      "Vous nous confiez les voyages de vos clients, nous les exécutons en votre nom",
    description:
      "Agence de voyages immatriculée et garantie, référent désigné, confidentialité acquise. Vous restez leur interlocuteur, nous tenons l'exécution.",
    images: [
      {
        // Photo réelle des bureaux (shooting marque employeur, Jules Despretz,
        // planche 17), recadrée en 16:9 puis retouchée : la pile de passeports
        // posée à gauche a été ajoutée par génération, et le téléphone qui
        // occupait le carnet a disparu dans l'opération. Tout le reste du
        // cliché est d'origine. Ce sont les passeports qui disent le métier :
        // plusieurs voyageurs délégués à la même personne. Aucun visage : c'est le geste
        // d'organiser qui est montré, pas la personne qui l'exécute.
        // Un dégradé sombre est cuit dans le haut du fichier : le gabarit
        // n'applique qu'un voile uniforme de 30 %, insuffisant sur un plan
        // aussi clair, et le renforcer toucherait toutes les pages Expérience.
        // Toute reprise du recadrage doit refaire ce dégradé.
        // Créditer le photographe si le site publie une page de crédits.
        src: "/professionnels/family-offices/hero-passeports.jpg",
        alt: "Préparation d'un départ sur le bureau d'un conseiller Exuma",
      },
    ],
  },

  {
    type: "specialistSpotlight",
    eyebrow: "Votre référent",
    heading:
      "Un référent désigné tient votre dossier, du premier appel au retour",
    partners: { title: "" },
    specialist: {
      collaborateurSlug: "ludivine",
      // TODO : citation à valider avec Ludivine avant mise en ligne.
      quote:
        "Ce que nous devons comprendre en premier, ce n'est pas la destination, c'est votre organisation. Qui voyage, qui valide, qui règle, ce qui doit arriver directement chez nous et ce qui passe par vous. Je désigne ensuite le référent qui tiendra vos dossiers et son suppléant, et je choisis en fonction de ce que vos familles demandent vraiment. Une fois que c'est en place, vous envoyez une date et une ville, et vous recevez un plan complet.",
      role: "Directrice d'Exuma",
    },
    features: [
      {
        iconName: "badgeCheck",
        title: "Nous apprenons votre organisation une fois",
        description:
          "Qui voyage, qui valide, qui règle, quelles habitudes ne se discutent pas. Nous le notons au premier dossier et vous n'y revenez plus.",
      },
      {
        iconName: "clock",
        title: "Une urgence passe devant le reste",
        description:
          "Un départ avancé, un vol supprimé, un passeport bloqué : nous traitons d'abord et nous vous expliquons ensuite.",
      },
      {
        iconName: "fileText",
        title: "Chaque dossier laisse une trace écrite",
        description:
          "Vous retrouvez ce qui a été réservé, modifié ou remboursé, sous une forme que vous pouvez présenter sans avoir à la reconstituer.",
      },
    ],
  },

  {
    type: "featureShowcase",
    // `bg-background-subtle` est déjà la couleur du corps de page : c'est
    // `bg-background-soft` qui marque réellement un bloc.
    background: "bg-background-soft",
    eyebrow: "Ce que nous anticipons pour vous",
    heading: "Vous l'apprenez une fois que c'est réglé",
    description:
      "Les départs se décalent, les documents arrivent à échéance, les vols disparaissent. Ces heures-là sont les nôtres : nous vous rendons une situation déjà remise en ordre.",
    items: [
      {
        title: "Le vol est annulé pendant que vous êtes en réunion",
        detail:
          "Nous reprenons la main sans attendre votre feu vert : nouvelle solution cherchée, place tenue, voyageur prévenu. À votre sortie de réunion, le nouveau plan vous attend, déjà confirmé.",
        image: {
          // Image originale composée à partir d'une photo de terminal trouvée
          // en ligne, utilisée comme brief d'ambiance et non recopiée : la
          // référence appartient à un tiers, une version simplement étalonnée
          // en serait une oeuvre dérivée. Cadrée en 4:5 pour la colonne.
          src: "/professionnels/hall-depart.jpg",
          alt: "Un voyageur seul devant les écrans de départs, tôt le matin",
        },
      },
      {
        title: "Le passeport expire dans moins de 6 mois",
        detail:
          "Nous suivons les échéances et nous engageons les démarches nous-mêmes : demande de visa, autorisation électronique, prise de rendez-vous, y compris pour les accompagnants. Vous n'intervenez que là où votre client doit signer ou se présenter en personne, et vous le savez des semaines à l'avance.",
        image: {
          // Planche 18 du shooting, retouchée : les trois passeports et le
          // stylo ont été ajoutés, le reste du bureau est d'origine. Aucune
          // couverture ne fait face à l'objectif, donc ni emblème ni pays
          // identifiable.
          src: "/professionnels/family-offices/passeports-bureau.jpg",
          alt: "Passeports et carnet sur le bureau, au moment de vérifier les formalités",
        },
      },
      {
        title: "Ils partent de deux villes et se retrouvent à l'arrivée",
        detail:
          "Départs séparés, horaires qui ne coïncident pas, transfert commun à l'arrivée : nous coordonnons l'ensemble et nous suivons chaque segment. Si l'un décale, l'autre est ajusté avant que vous l'appreniez.",
        image: {
          // Image originale composée à partir d'un visuel du site pris comme
          // brief d'ambiance. Le moment montré est l'arrivée, celui où les
          // deux trajets se rejoignent.
          src: "/professionnels/family-offices/arrivee-hotel.jpg",
          alt: "Une berline qui attend devant l'entrée d'un hôtel, à la tombée du jour",
        },
      },
      {
        title: "La dépense doit être ventilée entre plusieurs entités",
        // TODO facturation : formulation à valider avec Ludivine.
        detail:
          "Nous vous transmettons le détail poste par poste, selon la répartition que vous nous indiquez, et nous conservons les justificatifs. Vous n'avez pas à reconstituer un voyage six semaines après.",
        image: {
          // Planche 12 du shooting, recadrée en 4:5 : la personne au premier
          // plan sort du cadre, il ne reste que le poste de travail. Aucune
          // retouche. L'image dit l'envoi du récapitulatif, pas la comptabilité.
          src: "/professionnels/family-offices/poste-travail.jpg",
          alt: "Un conseiller Exuma devant son écran, au moment d'envoyer un récapitulatif",
        },
      },
    ],
  },

  {
    type: "featureCards",
    // Blanc franc, comme sur la porte Entreprises.
    background: "bg-background",
    eyebrow: "Le périmètre",
    heading: "Vous transmettez une demande, nous tenons le reste",
    description:
      "Vous donnez une date, une ville, une contrainte. Ce qui suit se traite ici, sous un seul interlocuteur.",
    cards: [
      {
        title: "Mobilité & accès privilégié",
        description:
          "Jets privés, chauffeurs, accueil en aéroport, bagages sensibles. Vous donnez une date, pas un itinéraire.",
        image: {
          src: "/service/mobilite/hero-1.png",
          alt: "Jet privé prêt à l'embarquement sur le tarmac",
        },
        link: { label: "Voir le détail", href: "/services/mobilite" },
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
      {
        title: "Sécurité & sérénité",
        description:
          "Imprévus, veille sanitaire, assistance pendant le voyage. Le vol annulé se règle sans que l'on vous appelle.",
        image: {
          src: "/service/securite/hero-1.png",
          alt: "Prise en charge en berline avec chauffeur",
        },
        link: { label: "Voir le détail", href: "/services/securite" },
      },
      {
        title: "Conciergerie privée & VIP",
        description:
          "Célébrations, personnel qualifié, réservations de dernière minute. Y compris les demandes qui ne sont pas des voyages.",
        image: {
          src: "/service/conciergerie/hero-1.png",
          alt: "Remise de clé à la réception d'un hôtel",
        },
        link: { label: "Voir le détail", href: "/services/conciergerie" },
      },
      {
        title: "Expériences & lifestyle",
        description:
          "Tables confidentielles, accès réservés, excursions privées, yachts. Ce qui est demandé la veille pour le lendemain.",
        image: {
          src: "/service/lifestyle/hero-1.png",
          alt: "Table dressée dans une salle privée",
        },
        link: { label: "Voir le détail", href: "/services/lifestyle" },
      },
    ],
  },

  {
    // Socle commun à toute la section B2B : ces quatre items sont formulés au
    // mot près comme sur le hub `/professionnels`. Toute correction ici doit
    // être reportée là-bas, et inversement.
    type: "infoGrid",
    background: "bg-background-soft",
    eyebrow: "Le socle",
    heading: "Ce que vous pouvez vérifier avant de nous confier un client",
    description:
      "Ce que vous transmettez à votre juriste sans avoir à nous le demander. Chaque chiffre est daté et revu une fois par an.",
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
          "Nous ne travaillons pas à partir d'un catalogue de destinations. Là où votre client doit aller, nous organisons : la capitale évidente comme la ville qui n'est desservie qu'une fois par semaine.",
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
    // Blanc franc, plus clair que le crème du corps de page : le bloc se
    // détache par le haut là où les autres se détachent par le bas.
    background: "bg-background",
    eyebrow: "Confidentialité",
    heading: "Ce qui se passe chez votre client ne sort pas d'ici",
    columns: [
      "La confidentialité n'est pas une option que l'on active à votre demande, c'est un principe de fonctionnement. Elle s'applique dès le premier échange, avant même qu'un dossier existe, et sans que vous ayez à le réclamer.",
      "Aucun de nos clients n'est cité publiquement sans son accord préalable, ni sur ce site, ni ailleurs. Nous signons votre accord de confidentialité si vous en avez un, et nous vous transmettons le nôtre si vous n'en avez pas.",
      // Formulation à faire valider par Ludivine (règle interne, pas une promesse chiffrée).
      "En interne, l'information circule au strict nécessaire : votre référent, son suppléant, et personne d'autre. Les voyages privés suivent exactement les mêmes règles que les professionnels.",
    ],
    cta: { label: "Recevoir notre engagement écrit", href: "/contact" },
  },

  {
    type: "textImagesSplit",
    background: "bg-background-soft",
    eyebrow: "Ce qui vous revient",
    heading: "Le merci arrive chez vous, pas chez nous",
    // Le troisième paragraphe porte le vocabulaire que la cible tape
    // réellement : family officer, assistante personnelle, assistante de
    // direction, gestion des déplacements, voyages d'affaires, Paris. Il reste
    // court volontairement, la colonne de texte est décalée et se charge vite.
    paragraphs: [
      "Votre client ne saura pas qui a rattrapé le vol annulé un dimanche soir. Il saura que vous vous en êtes occupée.",
      "Nous restons en retrait : nous ne prenons pas la relation, nous la servons. Vous restez son interlocuteur, nous restons le dispositif derrière vous.",
      "Family officer, assistante personnelle ou de direction : depuis Paris, nous prenons la gestion des déplacements de vos clients, voyages d'affaires comme séjours privés. Votre nom passe devant le nôtre.",
    ],
    images: [
      {
        // Image originale, composée à partir d'une photo des bureaux prise
        // comme brief d'ambiance. Cadrée sur les mains : aucun visage, donc
        // rien qui désigne un client.
        src: "/professionnels/family-offices/poignee-de-main.jpg",
        alt: "Une poignée de main dans les bureaux, à la lumière du jour",
      },
      {
        // Le visuel composé pour la porte Family office du hub. On le garde ici
        // pour que les deux pages se répondent : c'est la même scène de travail
        // qui ouvre le hub et qui referme cette page.
        src: "/professionnels/porte-a.png",
        alt: "Organiser les voyages de ses clients depuis son bureau",
      },
    ],
  },

  {
    type: "testimonials",
    eyebrow: "Ils nous confient leurs clients",
    heading: "Discrètement, depuis des années",
    testimonials: [
      {
        // TODO : témoignage à recueillir. Question à poser : qu'est-ce qui vous
        // a rassurée au point de nous confier vos clients ? GABARIT, ne pas
        // publier en l'état.
        quote:
          "Je transmets une date et une ville, je reçois un plan tenu. Je n'ai jamais eu à expliquer deux fois comment nous fonctionnons.",
        image: {
          // Soirée client (Jules Despretz), dominante chaude neutralisée.
          // Aucun visage dans le cadre.
          src: "/professionnels/family-offices/temoignage-document.jpg",
          alt: "Un dossier de voyage feuilleté à deux",
        },
        name: "Assistante privée",
        role: "Famille, Paris",
      },
      {
        // TODO : témoignage à recueillir. GABARIT, ne pas publier en l'état.
        quote:
          "Les attestations sont arrivées avant que je les demande. C'est la première fois que cela m'arrive.",
        image: {
          // Shooting marque employeur : un poste de travail vu de loin,
          // personne d'identifiable.
          src: "/professionnels/family-offices/temoignage-bureau.jpg",
          alt: "Un bureau d'Exuma, vu depuis le couloir",
        },
        name: "Directeur",
        role: "Family office, Genève",
      },
      {
        // TODO : témoignage à recueillir. GABARIT, ne pas publier en l'état.
        quote:
          "Un départ avancé de 24 heures un vendredi soir. Tout était recalé avant que j'aie fini de lire le message.",
        image: {
          // Shooting marque employeur : deux conseillères à leur poste. Seules
          // des personnes d'Exuma sont dans le cadre, aucun client.
          src: "/professionnels/family-offices/temoignage-conseillers.jpg",
          alt: "Deux conseillères d'Exuma à leur poste, casque sur les oreilles",
        },
        name: "Secrétaire général",
        role: "Family office, Luxembourg",
      },
    ],
  },

  {
    type: "faq",
    background: "bg-background-subtle",
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
        question: "Comment se passe une première demande ?",
        answer:
          "Vous appelez ou vous écrivez. Nous prenons le besoin, nous posons les questions qui manquent, et nous vous renvoyons une proposition complète avec les options tenues. Nous convenons ensemble du délai de réponse qui correspond à votre organisation, et nous nous y tenons.",
      },
      {
        question: "Travaillez-vous avec les assistantes de direction ?",
        answer:
          "Oui. Assistante de direction, assistante personnelle, secrétaire général, family officer : notre interlocuteur est la personne qui organise, quel que soit son titre. Le fonctionnement ne change pas, un référent désigné et un mode de validation convenu avec vous.",
      },
      {
        question:
          "Prenez-vous en charge la gestion complète des déplacements ?",
        answer:
          "Oui. Vols, hôtels, transferts, formalités, assistance pendant le voyage et récapitulatif au retour : la gestion des déplacements est prise de bout en bout, pour les voyages d'affaires comme pour les voyages privés. Vous gardez les arbitrages, nous tenons l'exécution.",
      },
      {
        question: "Que se passe-t-il si mon référent est absent ?",
        answer:
          "Son suppléant est désigné dès le premier dossier et connaît le vôtre. Vous n'avez ni à rappeler l'historique, ni à attendre un retour de congés.",
      },
      {
        question: "Pouvez-vous reprendre un dossier commencé ailleurs ?",
        answer:
          "Oui. Nous reprenons les réservations existantes, nous vérifions ce qui est modifiable et ce qui ne l'est pas, et nous vous disons clairement ce qui est perdu s'il y a lieu.",
      },
      {
        question: "Organisez-vous aussi les voyages privés ?",
        answer:
          "Oui, et c'est souvent là que nous sommes le plus utiles : anniversaires, vacances en famille, départs de dernière minute. Les mêmes règles de confidentialité s'appliquent.",
      },
      {
        question: "Comment êtes-vous rémunérés ?",
        // TODO rémunération : modèle à arbitrer avec Rémi (dossier au coup par
        // coup, convention annuelle, honoraires de gestion). Réponse
        // volontairement minimale d'ici là.
        answer:
          "Nos conditions vous sont transmises par écrit avant le premier dossier, et elles ne changent pas en cours de route.",
      },
    ],
  },

  {
    type: "finalCta",
    // Le gabarit sort par défaut sur `bg-background-soft` : on le ramène au
    // blanc, comme le bloc Confidentialité.
    background: "bg-background",
    eyebrow: "Prendre contact",
    heading: "Besoin de déléguer les voyages de vos clients ? Contactez-nous",
    primaryCta: { label: "Appeler Exuma", href: EXUMA_TEL_HREF },
    // TODO : remplacer par la ligne directe du service.
    secondaryCta: { label: "Écrire à Exuma", href: "/contact" },
  },
];
