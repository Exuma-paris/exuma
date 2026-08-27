import type { ServiceCategory } from "@/lib/content/types";
import { EXUMA_TEL_HREF } from "@/lib/exuma";

/**
 * Troisième catégorie produite, sur le gabarit de `mobilite.tsx`, dans la
 * variante sans référent retenue pour `conciergerie.tsx` :
 *
 *   hero > textColumns > featureRows > tips > infoGrid > faq > finalCta
 *
 * Arbitrage éditorial de fond (Rémi, 2026-08-25) : la maison ne revendique pas
 * de réseau d'accès privilégié. Le stub de cette catégorie était le plus touché
 * de tous, il promettait « accès VIP », « tables étoilées confidentielles »,
 * « places privilégiées », « tables introuvables » et « expériences hors
 * circuit ». Tout a été réécrit sur ce qui est vrai : ces prestations
 * s'achètent et se réservent, une ouverture de musée se paie, un yacht
 * s'affrète, un guide se choisit. Notre valeur est de monter la journée et de
 * vérifier qui l'encadre, jamais de connaître une porte dérobée.
 *
 * Autres arbitrages, communs aux autres catégories :
 *   - Pas de page fille par prestation, d'où l'absence de `serviceSlugs`.
 *   - Registre B2C, porte B2B au seul `secondaryCta` du `finalCta`.
 *   - Aucun `testimonials` tant qu'aucun verbatim réel n'a été recueilli.
 *   - Ni `specialistSpotlight` ni `textImagesSplit` : aucun référent désigné
 *     pour cette catégorie.
 *
 * Images : les cinq rangées sont produites, ainsi que le hero. Traçabilité et
 * écarts avec les références dans `references/service/lifestyle/SOURCES.md`.
 */

export const serviceCategory: ServiceCategory = {
  slug: "lifestyle",
  name: "Expériences & lifestyle",
  blurb:
    "Visites privées, tables réservées à vos conditions, guides et moniteurs choisis, yachts affrétés avec leur équipage.",
  keywords: [
    "expériences",
    "gastronomie",
    "guides privés",
    "visites privées",
    "yachts",
    "golf",
    "plongée",
    "ski",
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Expériences & lifestyle",
      heading: "Le temps passé sur place vaut ce qu'on a préparé avant",
      description:
        "Un musée avant l'ouverture, une table qui a été prévenue de vos allergies, un guide qui parle votre langue, un bateau et son équipage. Tout cela se monte avant votre départ.",
      images: [
        {
          src: "/service/lifestyle/hero-1.png",
          alt: "Comptoir et cuisine ouverte d'un restaurant en service",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-background-soft",
      eyebrow: "Ce que vous y gagnez",
      heading: "Vous profitez du moment, pas de son organisation",
      columns: [
        "Une expérience qui marque tient rarement à sa rareté. Elle tient au fait qu'elle tombe au bon moment de la journée, avec la bonne personne en face, et sans que vous ayez eu à la construire vous-même.",
        "Ces prestations existent et se réservent. Le travail n'est pas d'en connaître le secret, c'est de savoir laquelle vaut le détour, de la placer au bon endroit dans votre séjour, et de vérifier qui va vous accompagner.",
        "Nous nous en occupons avant le départ, pas sur place. Vous arrivez, on vous attend, et vous n'avez ni réservation à confirmer, ni matériel à louer, ni horaire à surveiller.",
      ],
      cta: { label: "Nous dire ce qui vous fait envie", href: "/contact" },
    },

    {
      type: "featureRows",
      eyebrow: "Nos prestations",
      heading: "Ce que nous montons pour vous",
      description:
        "Cinq prestations, pensées d'abord pour les voyages d'agrément, qui laissent au séjour le temps de se dérouler. Elles se montent aussi sur un déplacement plus court, à condition d'en parler assez tôt.",
      items: [
        {
          title: "Visites privées et ouvertures hors horaires",
          paragraphs: [
            "Un musée avant l'ouverture, un monument après la fermeture, un atelier d'artisan qui ne reçoit pas le public. Ces créneaux existent, se réservent et se paient : nous les demandons pour vous, longtemps à l'avance quand il le faut.",
            "Nous choisissons aussi la personne qui vous accompagne. Un historien de l'art plutôt qu'un guide généraliste, dans votre langue, prévenu de ce qui vous intéresse et de ce qui vous ennuie.",
            "La durée compte autant que l'accès. Une heure et demie devant trois salles vaut mieux que trois heures devant trente, et c'est ce que nous calons avec le lieu.",
          ],
          image: {
            src: "/service/lifestyle/visites-privees.png",
            alt: "Galerie de musée vide avant l'ouverture, lumière rasante sur le parquet",
          },
        },
        {
          title: "Tables et expériences gastronomiques",
          paragraphs: [
            "Une table réservée à l'heure qui vous arrange, une cuisine prévenue de vos allergies, un dîner chez un chef qui ne fait que quelques couverts. Nous réservons, nous confirmons, et nous rappelons la veille.",
            "Nous vous disons aussi ce que vaut l'adresse au-delà de sa réputation. Une étoile ne dit rien du service, du bruit dans la salle, ni du temps qu'il faut y passer.",
            "Cours de cuisine, marché avec un chef, dégustation chez un producteur : ces formats se réservent également, et ils se placent mieux en début de séjour qu'à la fin.",
          ],
          image: {
            // Rangée paire, donc cadrage portrait : dérivé 3:4 recadré sur le
            // sujet, et non le master 16:9.
            src: "/service/lifestyle/gastronomie-3x4.png",
            alt: "Chef dressant une assiette au comptoir, la salle en fond",
          },
        },
        {
          title: "Excursions et guides privés",
          paragraphs: [
            "Une journée avec un guide pour vous seuls plutôt qu'un groupe de vingt. Nous choisissons la personne pour ce qu'elle sait, pour les langues qu'elle parle, et pour sa manière d'être avec des enfants si vous voyagez avec les vôtres.",
            "Le programme se cale sur votre rythme : départ retardé si la nuit a été courte, retour avancé si la chaleur tombe mal, étape supprimée si l'intérêt n'y est pas.",
            "Le véhicule, l'eau, les entrées, le déjeuner et les pourboires sont prévus à l'avance. Vous ne sortez rien de votre poche pendant la journée.",
          ],
          image: {
            src: "/service/lifestyle/excursions.png",
            alt: "Guide privé montrant quelque chose à deux voyageurs sur un chemin",
          },
        },
        {
          title: "Activités encadrées",
          paragraphs: [
            "Plongée, ski, golf, équitation, pêche. Nous réservons auprès de structures diplômées et assurées, et nous vérifions les brevets des moniteurs avant de confirmer quoi que ce soit.",
            "Le niveau est vérifié avec vous, pas supposé. Une sortie mal calibrée gâche une journée, et pour certaines activités elle fait courir un vrai risque.",
            "Le matériel est réservé à vos mesures avant l'arrivée, et les certificats médicaux ou brevets exigés vous sont demandés à temps, pas la veille au soir.",
          ],
          image: {
            // Rangée paire, donc cadrage portrait.
            src: "/service/lifestyle/activites-3x4.png",
            alt: "Moniteur vérifiant la sangle d'un bloc avant la mise à l'eau, sur le pont arrière",
          },
        },
        {
          title: "Yachts et navigation privée",
          paragraphs: [
            "Un voilier ou un motor-yacht avec son équipage, à la journée ou à la semaine. Nous affrétons auprès d'armateurs assurés, et vous recevez la fiche du bateau et le nom du skipper avant de confirmer.",
            "L'itinéraire se construit avec le skipper selon la météo de la semaine, pas selon une brochure. Les mouillages changent, les escales aussi, et c'est ce qui rend la semaine bonne.",
            "Restauration à bord, matériel nautique, transferts depuis le port et formalités de navigation : tout est calé avant l'embarquement.",
          ],
          image: {
            src: "/service/lifestyle/yachts.png",
            alt: "Voilier au mouillage en fin de journée, équipage au travail sur le pont",
          },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Ce qu'on apprend en montant ces journées",
      heading: "Ce que 35 ans de pratique nous ont appris",
      description:
        "Quatre situations qui décident de la réussite d'une expérience, et la façon dont nous les traitons.",
      items: [
        {
          title: "La visite qu'il faut demander des mois avant",
          cardEyebrow: "Cas vécu",
          modalEyebrow: "Ce qu'on apprend en montant ces journées",
          shortDescription:
            "Certaines ouvertures ne se décident pas dans la semaine. Elles se demandent au moment où l'on réserve le vol.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Une ouverture hors horaires n&apos;est pas un service à la
                demande : c&apos;est une décision que prend le lieu, souvent
                plusieurs mois à l&apos;avance, et parfois pour un seul créneau
                dans la semaine.
              </p>
              <h4 className="font-medium">Ce que nous faisons :</h4>
              <p>
                Nous identifions dès le premier échange ce qui, dans vos envies,
                relève de ce calendrier long, et nous déposons la demande avant
                de caler le reste du séjour. Le voyage se construit ensuite
                autour de ce créneau, pas l&apos;inverse.
              </p>
              <p>
                Quand la réponse est non, vous le savez tôt, avec ce que nous
                proposons à la place. Une réponse tardive vous priverait des
                deux.
              </p>
            </div>
          ),
        },
        {
          title: "Le guide qui fait la journée, ou qui la gâche",
          cardEyebrow: "Cas vécu",
          modalEyebrow: "Ce qu'on apprend en montant ces journées",
          shortDescription:
            "Le lieu compte moins que la personne qui vous y emmène. C'est le choix que nous soignons le plus.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Deux visites du même lieu, à la même heure, ne se ressemblent
                pas selon qui les mène. C&apos;est la variable qui décide de la
                journée, et c&apos;est aussi celle sur laquelle on vous laisse
                généralement sans information.
              </p>
              <h4 className="font-medium">Ce que nous vérifions :</h4>
              <p>
                La formation réelle et non le titre, les langues effectivement
                parlées, l&apos;habitude des enfants ou d&apos;un rythme lent, et
                les retours des voyageurs précédents.
              </p>
              <p>
                Nous transmettons aussi au guide ce qui vous intéresse et ce qui
                vous ennuie, avant la rencontre. Une journée réussie commence par
                une conversation à laquelle vous n&apos;assistez pas.
              </p>
            </div>
          ),
        },
        {
          title: "La sortie que la météo annule",
          cardEyebrow: "Cas vécu",
          modalEyebrow: "Ce qu'on apprend en montant ces journées",
          shortDescription:
            "En mer et en montagne, la question n'est pas si ça arrive, mais ce qui est prévu quand ça arrive.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Une sortie en mer, une plongée, une journée de ski : la météo
                décide, et aucun prestataire sérieux ne partira contre elle.
                C&apos;est une bonne nouvelle, mais elle laisse une journée
                vide.
              </p>
              <h4 className="font-medium">Ce que nous prévoyons :</h4>
              <p>
                Une alternative pour chaque activité dépendante du temps,
                arrêtée avant le départ et non improvisée sur place. Elle vous
                est proposée le matin même, dès que la décision tombe.
              </p>
              <p>
                Nous regardons aussi les conditions de report et de
                remboursement au moment de réserver, et nous vous les disons.
                Elles varient beaucoup d&apos;un prestataire à l&apos;autre.
              </p>
            </div>
          ),
        },
        {
          title: "Le niveau annoncé qui n'est pas le vrai",
          cardEyebrow: "Cas vécu",
          modalEyebrow: "Ce qu'on apprend en montant ces journées",
          shortDescription:
            "Personne n'aime se déclarer débutant. C'est pourtant la question qui évite les mauvaises journées.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Un niveau surestimé se paie tout de suite : une randonnée trop
                longue, une piste trop raide, une plongée au-delà du brevet. Et
                personne ne se sent à l&apos;aise de le dire au moment de
                réserver.
              </p>
              <h4 className="font-medium">Ce que nous demandons :</h4>
              <p>
                Des repères concrets plutôt qu&apos;une case à cocher : la
                dernière plongée et à quelle profondeur, le dénivelé de la
                dernière marche, le nombre de jours de ski dans l&apos;année.
              </p>
              <p>
                Nous calons ensuite la sortie sur le membre du groupe le moins
                à l&apos;aise, jamais sur le plus sportif. C&apos;est la seule
                façon que tout le monde en garde un bon souvenir.
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
      heading: "Ce sur quoi vous pouvez compter, d'une expérience à l'autre",
      items: [
        {
          iconName: "badgeCheck",
          title: "Nous vérifions qui vous encadre",
          description:
            "Brevets des moniteurs, diplômes des guides, assurance des structures et des armateurs. Vérifiés avant la réservation, pas après.",
        },
        {
          iconName: "calendarDays",
          title: "Nous plaçons chaque chose au bon moment",
          description:
            "Une visite tôt le matin, une sortie en mer avant que le vent ne monte, un cours de cuisine en début de séjour plutôt qu'à la veille du retour.",
        },
        {
          iconName: "languages",
          title: "Dans votre langue, et sur votre rythme",
          description:
            "La langue parlée est vérifiée, pas annoncée. Le programme se cale sur le membre du groupe le moins à l'aise.",
        },
        {
          iconName: "fileText",
          title: "Tout est réglé avant votre arrivée",
          description:
            "Entrées, matériel à vos mesures, repas, transferts et pourboires. Vous ne confirmez rien sur place et vous ne sortez rien de votre poche.",
        },
      ],
    },

    {
      type: "faq",
      eyebrow: "Questions fréquentes",
      heading: "Ce que l'on nous demande avant de monter une journée",
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
          question: "Ces expériences sont-elles réservées à vos clients voyage ?",
          answer: (
            <p>
              Non. Une journée peut se monter seule, sans que nous organisions le
              séjour autour. Cela dit, une expérience gagne à être placée au bon
              moment du voyage, ce qui est plus simple quand nous voyons
              l&apos;ensemble.
            </p>
          ),
        },
        {
          question:
            "Ces expériences s'organisent-elles aussi sur un déplacement professionnel ?",
          answer: (
            <p>
              Oui, mais disons-le franchement : elles donnent le meilleur sur un
              voyage d&apos;agrément, où le séjour laisse au programme le temps
              de respirer. Une ouverture hors horaires ou une journée en mer
              supposent un créneau dégagé et une marge si la météo tourne. Sur un
              déplacement court, entre deux rendez-vous, cela reste possible dès
              lors que nous en parlons en amont : nous retenons alors les formats
              qui tiennent dans une demi-journée et nous les calons autour de
              votre agenda, jamais l&apos;inverse.
            </p>
          ),
        },
        {
          question: "Combien de temps à l'avance faut-il s'y prendre ?",
          answer: (
            <p>
              Cela dépend entièrement de la prestation. Une table ou un guide se
              réservent dans la semaine. Une ouverture hors horaires, un chef
              privatisé ou un yacht en haute saison demandent souvent plusieurs
              mois. Nous vous disons dès le premier échange ce qui relève du
              calendrier long.
            </p>
          ),
        },
        {
          question: "Que se passe-t-il si la météo annule une sortie ?",
          answer: (
            <p>
              Une alternative est arrêtée avant le départ pour chaque activité
              dépendante du temps, et elle vous est proposée le matin même. Nous
              regardons aussi les conditions de report et de remboursement au
              moment de réserver, et nous vous les indiquons : elles varient
              beaucoup d&apos;un prestataire à l&apos;autre.
            </p>
          ),
        },
        {
          question: "Comment choisissez-vous les guides et les moniteurs ?",
          answer: (
            <p>
              Nous vérifions la formation réelle plutôt que le titre affiché, les
              langues effectivement parlées, l&apos;assurance de la structure et,
              pour les activités encadrées, les brevets en cours de validité.
              Nous transmettons ensuite au guide ce qui vous intéresse avant la
              rencontre.
            </p>
          ),
        },
        {
          question: "Peut-on partir avec des enfants ou un niveau débutant ?",
          answer: (
            <p>
              Oui, à condition de le dire. Nous demandons des repères concrets
              plutôt qu&apos;une case à cocher, puis nous calons la sortie sur la
              personne la moins à l&apos;aise du groupe. C&apos;est la seule
              façon que tout le monde en garde un bon souvenir.
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
