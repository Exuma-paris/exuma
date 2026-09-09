import type { ServiceCategory } from "@/lib/content/types";
import { EXUMA_TEL_HREF } from "@/lib/exuma";

/**
 * Cinquième et dernière catégorie, sur le gabarit de `mobilite.tsx` dans sa
 * variante sans référent :
 *
 *   hero > textColumns > featureRows > tips > infoGrid > faq > finalCta
 *
 * Deux réécritures de fond par rapport au stub :
 *
 *   1. « Optimisation des privilèges » et « accès aux privilèges exclusifs »
 *      relevaient de la promesse de réseau écartée le 2026-08-25. Un
 *      surclassement ne s'obtient pas, il se demande. La rangée 03 le dit
 *      franchement et ne promet aucun résultat.
 *   2. « Assurances premium » est aligné sur ce qui a été arbitré pour
 *      `securite.tsx` : nous pouvons souscrire dans le cadre du voyage, avec
 *      votre accord demandé systématiquement pour éviter les doublons.
 *
 * Partage de périmètre avec `securite.tsx`, volontaire et sans recoupement :
 * sécurité traite les formalités de SANTÉ et ce que couvre un contrat existant,
 * ingénierie traite les formalités d'ENTRÉE et la souscription elle-même.
 *
 * Arbitrages communs :
 *   - Pas de page fille par prestation, d'où l'absence de `serviceSlugs`.
 *   - Registre B2C, porte B2B au seul `secondaryCta` du `finalCta`.
 *   - Aucun `testimonials` tant qu'aucun verbatim réel n'a été recueilli.
 *
 * Images : hero et rangées 01, 02, 03 produits. Reste la rangée 04.
 * Traçabilité dans `references/service/ingenierie/SOURCES.md`.
 */

export const serviceCategory: ServiceCategory = {
  slug: "ingenierie",
  name: "Ingénierie du voyage & support global",
  blurb:
    "Formalités d'entrée réunies et vérifiées, assurances souscrites avec votre accord, un seul interlocuteur et une seule facture.",
  keywords: [
    "visa",
    "formalités",
    "ESTA",
    "assurance",
    "fidélité",
    "surclassement",
    "coordination",
    "logistique",
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Ingénierie du voyage & support global",
      heading: "La partie administrative du voyage ne devrait pas vous revenir",
      description:
        "Les visas et les autorisations à demander, les documents à vérifier pour chaque voyageur, les contrats à souscrire et les dizaines de réservations à faire tenir ensemble. C'est notre travail, pas le vôtre.",
      images: [
        {
          // Shooting Jules Despretz n°9, bande 21:9 prise sous le filigrane.
          // Le bureau en situation de travail, pas en pose : n°197, la vue
          // large et symétrique des trois postes, est délibérément réservée à
          // la future page cabinet, dont elle sera le portrait.
          // L'ancien `hero-1.jpg` était un portrait 1600×2400 dont la bande ne
          // gardait que 29 % de la hauteur, coupant le visage sous le front.
          src: "/service/ingenierie/hero-poste.png",
          alt: "Conseillère Exuma à son poste, écrans et dossiers autour d'elle",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-background-soft",
      eyebrow: "Ce que vous y gagnez",
      heading: "Un seul interlocuteur, et plus aucun formulaire à remplir",
      columns: [
        "Un voyage un peu construit, c'est une trentaine de réservations, quatre ou cinq prestataires, autant de conditions d'annulation différentes, et des documents à réunir pour chaque voyageur. Chacune de ces lignes est simple, c'est leur nombre qui épuise.",
        "Nous les tenons ensemble. Si un vol bouge, nous savons immédiatement ce qui tombe derrière : le transfert, la première nuit, la visite du lendemain matin. Vous n'avez pas à faire ce raisonnement, et surtout pas à le faire dans l'urgence.",
        "Et vous n'avez qu'un interlocuteur, qu'un dossier et qu'une facture. Ce que vous auriez passé plusieurs soirées à assembler tient dans un échange, puis dans un document que vous recevez avant de partir.",
      ],
      cta: { label: "Nous confier votre prochain voyage", href: "/contact" },
    },

    {
      type: "featureRows",
      eyebrow: "Nos prestations",
      heading: "Ce que nous prenons en charge à votre place",
      description:
        "Quatre volets qui se combinent selon la destination et le nombre de voyageurs. Vous n'en choisissez aucun à l'avance.",
      items: [
        {
          title: "Formalités d'entrée et documents",
          paragraphs: [
            "Visa, ESTA, AVE, autorisation électronique, invitation à faire établir : nous identifions ce qu'exige le pays pour votre nationalité et pour ce motif de voyage précis, puis nous montons les demandes.",
            "Nous vérifions ce qui bloque le plus souvent au comptoir d'embarquement : la validité du passeport après la date de retour, le nombre de pages libres, l'autorisation de sortie du territoire pour un mineur qui ne voyage pas avec ses deux parents.",
            "Les délais sont la vraie contrainte, pas la difficulté. Nous vous disons dès le premier échange ce qui doit être lancé tout de suite et ce qui peut attendre, pour qu'aucun document ne se joue à quelques jours près.",
          ],
          image: {
            src: "/service/ingenierie/formalites.png",
            alt: "Salle d'attente d'un service administratif, guichets et bancs vides",
          },
        },
        {
          title: "Assurances du voyage",
          paragraphs: [
            "Nous pouvons souscrire pour vous une assurance dans le cadre du voyage que nous organisons : annulation, frais médicaux, rapatriement, bagages, selon ce que le voyage demande.",
            "Nous vous demandons systématiquement votre accord avant de le faire. Votre carte bancaire ou un contrat que vous détenez déjà couvre parfois une partie de ces garanties, et il serait absurde de vous faire payer deux fois.",
            "Nous vous disons aussi ce que le contrat ne couvre pas, parce que c'est là que se jouent les mauvaises surprises : les plafonds, la durée maximale de séjour, les activités exclues et les conditions d'âge.",
          ],
          image: {
            // Shooting Jules Despretz n°89, recadrée en carré. Le sujet a été
            // déplacé du contrat vers la conversation : cette rangée parle de
            // l'accord qu'on vous demande, pas du document qu'on vous fait
            // signer.
            src: "/service/ingenierie/assurances-1x1.png",
            alt: "Deux conseillères passant en revue un dossier ensemble",
          },
        },
        {
          title: "Programmes de fidélité et demandes de surclassement",
          paragraphs: [
            "Nous enregistrons vos numéros de fidélité sur chaque réservation, aérienne comme hôtelière, pour que le voyage compte là où il doit compter. C'est mécanique, et c'est pourtant ce qui s'oublie le plus souvent.",
            "Quand un statut, une occasion particulière ou simplement la disponibilité s'y prêtent, nous formulons la demande de surclassement. Disons-le franchement : nous la demandons, nous ne la promettons pas. La décision appartient à la compagnie ou à l'hôtel, le jour même.",
            "Nous signalons en revanche systématiquement ce qui, lui, s'obtient : un anniversaire, une lune de miel, une allergie, une préférence d'étage ou de siège. Ce sont des mentions au dossier, et elles changent souvent plus la journée qu'une catégorie de chambre.",
          ],
          image: {
            // Une chambre, pas une suite : le texte ne promet aucun
            // surclassement, l'image ne doit pas le faire à sa place.
            src: "/service/ingenierie/fidelite.png",
            alt: "Chambre préparée avant l'arrivée, une carte posée sur le lit",
          },
        },
        {
          title: "Coordination de bout en bout",
          paragraphs: [
            "Un voyage tient rarement à une seule réservation. Vols, transferts, hôtels, guides, restaurants, activités : nous assemblons l'ensemble et nous vérifions que chaque maillon laisse assez de marge au suivant.",
            "Vous recevez avant le départ un carnet unique, jour par jour, avec les horaires, les adresses, les contacts et ce qui est déjà réglé. Un seul document, plutôt qu'une trentaine de confirmations dans votre boîte mail.",
            "Et vous n'avez qu'une facture. Nous réglons les prestataires, nous suivons les acomptes et les échéances d'annulation, et nous vous prévenons avant chaque date qui vous engage.",
          ],
          image: {
            // TODO image : /service/ingenierie/coordination.png, le carnet de
            // voyage relié posé sur une table avec un billet, aucun texte
            // lisible. Cadrage CARRÉ.
            src: "/professionnels/porte-b.png",
            alt: "Carnet de voyage remis avant le départ",
          },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Ce qui coince, et quand",
      heading: "Ce que 35 ans de pratique nous ont appris",
      description:
        "Quatre points qui font rater un départ, et qui se règlent tous en amont.",
      items: [
        {
          title: "Le passeport valide, mais pas assez",
          cardEyebrow: "Cas vécu",
          modalEyebrow: "Ce qui coince, et quand",
          shortDescription:
            "C'est le motif de refus d'embarquement le plus fréquent, et le plus facile à éviter.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Beaucoup de pays exigent un passeport encore valide six mois
                après la date de retour, pas au moment du départ. Un passeport
                qui expire dans quatre mois est donc parfaitement valide, et
                pourtant refusé à l&apos;embarquement.
              </p>
              <h4 className="font-medium">Ce que nous vérifions :</h4>
              <p>
                La date d&apos;expiration de chaque voyageur au regard de la
                règle du pays, le nombre de pages libres quand un visa doit y
                être apposé, et l&apos;état matériel du document, qu&apos;une
                page décollée suffit à faire rejeter.
              </p>
              <p>
                Nous le faisons dès le premier échange, parce qu&apos;un
                renouvellement demande des semaines en haute saison. Découvrir
                le problème un mois avant le départ change tout.
              </p>
            </div>
          ),
        },
        {
          title: "L'enfant qui ne voyage pas avec ses deux parents",
          cardEyebrow: "Cas vécu",
          modalEyebrow: "Ce qui coince, et quand",
          shortDescription:
            "Une situation banale qui demande des documents que peu de familles connaissent.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Un enfant qui part avec un seul parent, avec ses grands-parents
                ou avec une nounou déclenche des exigences particulières :
                autorisation de sortie du territoire, pièce d&apos;identité du
                parent signataire, parfois livret de famille ou acte de
                naissance traduit.
              </p>
              <h4 className="font-medium">Ce que nous préparons :</h4>
              <p>
                La liste exacte pour votre configuration familiale et pour le
                pays concerné, les formulaires à remplir, et les traductions
                assermentées quand elles sont exigées.
              </p>
              <p>
                Les règles diffèrent d&apos;un pays à l&apos;autre et changent
                régulièrement. C&apos;est précisément le genre de vérification
                qu&apos;il vaut mieux ne pas faire soi-même la veille.
              </p>
            </div>
          ),
        },
        {
          title: "Le visa demandé trop tard",
          cardEyebrow: "Cas vécu",
          modalEyebrow: "Ce qui coince, et quand",
          shortDescription:
            "Le délai n'est pas la difficulté du visa, c'est sa seule vraie contrainte.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Certaines autorisations s&apos;obtiennent en ligne en quelques
                minutes. D&apos;autres demandent un rendez-vous en consulat, une
                prise d&apos;empreintes, et plusieurs semaines de traitement qui
                s&apos;allongent selon la saison.
              </p>
              <h4 className="font-medium">Comment nous procédons :</h4>
              <p>
                Nous classons, dès le premier échange, ce qui doit être lancé
                immédiatement et ce qui peut attendre. Le calendrier du voyage
                se construit ensuite autour des démarches longues, jamais
                l&apos;inverse.
              </p>
              <p>
                Pendant l&apos;instruction, votre passeport peut rester au
                consulat plusieurs semaines. Nous en tenons compte si un autre
                déplacement est prévu entre-temps, ce que l&apos;on oublie
                presque toujours.
              </p>
            </div>
          ),
        },
        {
          title: "L'échéance d'annulation qui passe inaperçue",
          cardEyebrow: "Cas vécu",
          modalEyebrow: "Ce qui coince, et quand",
          shortDescription:
            "Chaque prestataire a ses propres dates. Elles ne tombent jamais le même jour.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Sur un voyage un peu construit, chaque prestation a ses
                conditions : un hôtel gratuit jusqu&apos;à trente jours, un
                yacht avec un acompte non remboursable, un billet modifiable
                contre pénalité. Ces dates ne coïncident jamais.
              </p>
              <h4 className="font-medium">Ce que nous tenons :</h4>
              <p>
                Le calendrier complet des échéances de votre dossier, et un
                avertissement avant chacune de celles qui vous engagent
                financièrement.
              </p>
              <p>
                C&apos;est ce qui permet de décaler ou d&apos;annuler au bon
                moment plutôt qu&apos;au mauvais, et de savoir exactement ce que
                coûte un changement avant de le décider.
              </p>
            </div>
          ),
        },
      ],
    },

    {
      type: "infoGrid",
      theme: "dark",
      eyebrow: "Nos engagements",
      heading: "Ce sur quoi vous pouvez compter, d'un dossier à l'autre",
      items: [
        {
          iconName: "fileText",
          title: "Vos documents sont vérifiés voyageur par voyageur",
          description:
            "Validité, pages libres, exigences du pays, situation des mineurs. Vérifiés au premier échange, pas à la veille du départ.",
        },
        {
          iconName: "calendarDays",
          title: "Les délais commandent le calendrier",
          description:
            "Ce qui demande des semaines est lancé en premier, et le voyage se construit autour. Vous savez tout de suite ce qui est urgent.",
        },
        {
          iconName: "euro",
          title: "Une seule facture, et les échéances tenues",
          description:
            "Nous réglons les prestataires, nous suivons les acomptes, et nous vous prévenons avant chaque date qui vous engage.",
        },
        {
          iconName: "badgeCheck",
          title: "Votre accord avant toute souscription",
          description:
            "Aucune assurance n'est ajoutée à votre dossier sans que vous l'ayez validée, pour éviter de payer deux fois une garantie détenue.",
        },
      ],
    },

    {
      type: "faq",
      eyebrow: "Questions fréquentes",
      heading: "Ce que l'on nous demande sur la partie administrative",
      contact: {
        // Les espaces font partie des chaînes : le composant concatène sans
        // séparateur, comme sur les pages destination.
        prefix: "Une question qui n'est pas ici ? ",
        label: "Appelez-nous",
        href: EXUMA_TEL_HREF,
        suffix: ", nous y répondrons directement.",
      },
      items: [
        {
          question: "Obtenez-vous les visas à notre place ?",
          answer: (
            <p>
              Nous montons et déposons les demandes, nous réunissons les pièces
              et nous suivons l&apos;instruction. La décision appartient en
              revanche toujours à l&apos;autorité du pays, et certaines
              démarches exigent votre présence, notamment pour une prise
              d&apos;empreintes. Nous vous disons dès le départ ce qui vous
              incombe.
            </p>
          ),
        },
        {
          question: "Pouvez-vous nous garantir un surclassement ?",
          answer: (
            <p>
              Non, et méfiez-vous de qui vous l&apos;affirme. Nous enregistrons
              vos statuts, nous signalons l&apos;occasion et nous formulons la
              demande, mais la décision revient à la compagnie ou à
              l&apos;hôtel, le jour même. Ce qui s&apos;obtient réellement, ce
              sont les mentions au dossier : une préférence de siège ou
              d&apos;étage, une allergie, un anniversaire.
            </p>
          ),
        },
        {
          question: "Que se passe-t-il si un visa est refusé ?",
          answer: (
            <p>
              Nous reprenons le dossier pour comprendre le motif, et nous
              redéposons quand c&apos;est possible. En parallèle, nous regardons
              ce que le refus déclenche sur le reste du voyage : les échéances
              d&apos;annulation, ce que couvre l&apos;assurance souscrite, et
              les alternatives si la date ne peut plus être tenue.
            </p>
          ),
        },
        {
          question: "Souscrivez-vous l'assurance à notre place ?",
          answer: (
            <p>
              Nous pouvons la souscrire dans le cadre du voyage, après vous avoir
              demandé votre accord. Cette étape n&apos;est pas une formalité :
              votre carte bancaire ou un contrat existant couvre parfois déjà une
              partie des garanties, et nous préférons le vérifier avant plutôt
              que de vous faire payer deux fois.
            </p>
          ),
        },
        {
          question: "Recevons-nous un document récapitulatif ?",
          answer: (
            <p>
              Oui, un carnet unique remis avant le départ : le déroulé jour par
              jour, les horaires, les adresses, les contacts sur place et ce qui
              est déjà réglé. Il remplace la trentaine de confirmations qui
              s&apos;accumulent autrement dans une boîte mail.
            </p>
          ),
        },
      ],
    },

    {
      type: "finalCta",
      eyebrow: "Prendre contact",
      heading: "Nos services vous intéressent ? Prenons contact.",
      primaryCta: { label: "Contacter Exuma", href: EXUMA_TEL_HREF },
      // Porte B2B : unique passerelle vers /professionnels sur cette page.
      secondaryCta: {
        label: "Vous organisez pour d'autres",
        href: "/professionnels",
      },
    },
  ],
};
