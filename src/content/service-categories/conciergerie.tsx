import type { ServiceCategory } from "@/lib/content/types";
import { EXUMA_TEL_HREF } from "@/lib/exuma";

/**
 * Deuxième catégorie produite, sur le gabarit fixé par `mobilite.tsx` :
 *
 *   hero > textColumns > featureRows > tips > infoGrid > faq > finalCta
 *
 * Écart assumé avec le gabarit de `mobilite.tsx` : ni `textImagesSplit` ni
 * `specialistSpotlight`. Les deux blocs reposaient sur un réseau de maisons
 * partenaires que la maison ne revendique pas à ce stade (arbitrage Rémi,
 * 2026-08-25). Ils reviendront quand la promesse sera tenable.
 *
 * Les arbitrages de la page pilote s'appliquent à l'identique :
 *   - Pas de page fille par prestation. Les trois prestations vivent dans le
 *     `featureRows`, d'où l'absence de `serviceSlugs`.
 *   - Registre B2C. La porte B2B passe uniquement par le `secondaryCta` du
 *     `finalCta`, en bas de page.
 *   - Aucun bloc `testimonials` tant que de vrais verbatims n'ont pas été
 *     recueillis.
 *   - L'eyebrow du hero porte le nom de la catégorie, le h1 étant éditorial.
 *   - Alternance de fonds : soft, puis blanc sur le récit, soft sur les cas,
 *     et `infoGrid` en thème sombre.
 *
 * TODO images : quatre visuels réels, `/service/conciergerie/hero-1.png`,
 * `conseillere-3x4.png` (shooting Jules Despretz, image n°129),
 * `celebrations.png` (rangée 01) et `personnel-3x4.png` (rangée 02).
 * Restent provisoires la rangée 03 et le carré du récit.
 * Traçabilité dans `references/service/conciergerie/SOURCES.md`.
 *
 * TODO citation : la prise de parole de Cécile doit être validée avec elle
 * avant mise en ligne.
 */

export const serviceCategory: ServiceCategory = {
  slug: "conciergerie",
  name: "Conciergerie privée & VIP",
  blurb:
    "Célébrations mises en scène, personnel choisi et vérifié, demandes de dernière minute prises en charge de bout en bout.",
  keywords: [
    "conciergerie",
    "vip",
    "nanny",
    "majordome",
    "personnel",
    "réservations",
    "célébrations",
    "dernière minute",
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Conciergerie privée & VIP",
      heading: "Ce que vous n'avez pas le temps de chercher, nous le cherchons",
      description:
        "Une table un vendredi soir, une nounou anglophone pour dimanche, un anniversaire à monter à l'autre bout du monde. Vous formulez la demande, nous nous occupons du reste.",
      images: [
        {
          src: "/service/conciergerie/hero-1.png",
          alt: "Remise de clé à la réception d'un hôtel",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-background-soft",
      eyebrow: "Ce que vous y gagnez",
      heading: "Vous n'avez ni à chercher, ni à insister, ni à rappeler",
      columns: [
        "Obtenir une table le soir même, une place à un concert affiché complet, un guide qui parle votre langue un jour férié : chacun de ces gestes coûte des appels, des relances et souvent une réponse qui ne vient jamais. Nous les passons à votre place.",
        "Nous passons ces appels à votre place, et nous les passons jusqu'au bout. Quand une maison ne peut pas, nous en appelons une deuxième, puis une troisième, plutôt que de vous renvoyer une liste d'adresses à essayer vous-même.",
        "Une demande de dernière minute ne se traite pas comme les autres. Vous êtes rappelé dans la journée avec une réponse franche : ce que nous avons obtenu, ce que nous cherchons encore, et ce qui ne sera pas possible.",
      ],
      cta: { label: "Nous soumettre une demande", href: "/contact" },
    },

    {
      type: "featureRows",
      eyebrow: "Nos prestations",
      heading: "Ce que nous prenons en charge pour vous",
      description:
        "Trois façons d'intervenir, qui se combinent selon le moment. Vous formulez la demande, nous nous occupons de la suite.",
      items: [
        {
          title: "Moments d'exception et célébrations",
          paragraphs: [
            "Un anniversaire, une demande en mariage, un dîner qui doit rester en mémoire : nous construisons la scène et nous la répétons avant vous. Lieu privatisé, chef déplacé, musiciens, fleurs choisies le matin même.",
            "Nous nous occupons surtout de ce qui ne se voit pas : l'ordre des arrivées, le moment exact où la lumière baisse, la personne qui retient les autres convives le temps que vous vous installiez.",
            "Et nous prévoyons le repli. Si le vent se lève sur la terrasse, la salle est déjà dressée à l'intérieur et personne ne s'en aperçoit.",
          ],
          image: {
            src: "/service/conciergerie/celebrations.png",
            alt: "Table dressée sur une terrasse à l'heure bleue, avant l'arrivée des convives",
          },
        },
        {
          title: "Personnel dédié",
          paragraphs: [
            "Nounou anglophone, chef à demeure, majordome, professeur de ski, skipper. Nous choisissons la personne, vérifions ses références et ses habilitations, et vous la présentons avant le départ.",
            "Vous ne recevez pas un profil au hasard. Nous tenons compte de l'âge des enfants, des langues parlées chez vous, des allergies, et de ce qui vous met à l'aise ou non dans une maison.",
            "Sur les séjours longs, la même personne reste du premier au dernier jour, et nous restons son interlocuteur. Vous n'avez ni planning à tenir, ni salaire à gérer.",
          ],
          image: {
            src: "/service/conciergerie/personnel-3x4.png",
            alt: "Personnel de maison traversant un appartement avec des fleurs fraîches",
          },
        },
        {
          title: "Réservations de dernière minute",
          paragraphs: [
            "Une table affichée complète, une loge, un créneau au club, un billet pour ce soir. Nous passons les appels un par un, y compris ceux que vous n'auriez ni le temps ni l'envie de passer.",
            "Nous vous rappelons avec une réponse, pas avec une liste de possibilités à trancher vous-même. Si la première maison ne peut pas, la deuxième a déjà été jointe.",
            "Ces demandes arrivent rarement aux heures ouvrables. C'est précisément pour celles-là que nous convenons avec vous, à l'avance, du numéro à composer et de qui décroche.",
          ],
          image: {
            // TODO image : /service/conciergerie/reservations.png, le comptoir
            // d'une salle pleine, verres alignés et cuisine ouverte derrière.
            // Cadrage paysage.
            src: "/service/lifestyle/hero-1.png",
            alt: "Comptoir et cuisine ouverte d'un restaurant en service",
          },
        },
      ],
    },


    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Quand la demande sort de l'ordinaire",
      heading: "Ce que 35 ans de pratique nous ont appris",
      description:
        "Quatre demandes qui reviennent plus souvent qu'on ne le croit, et la façon dont nous les traitons.",
      items: [
        {
          title: "La table complète un vendredi soir",
          cardEyebrow: "Cas vécu",
          modalEyebrow: "Quand la demande sort de l'ordinaire",
          shortDescription:
            "Complet ne veut pas toujours dire fermé. Encore faut-il appeler, et appeler la bonne personne.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Une salle affichée complète garde parfois une marge : une
                table tenue pour un habitué qui n&apos;a pas confirmé, un
                premier service qui se libère, un comptoir que le site de
                réservation n&apos;ouvre pas au public.
              </p>
              <h4 className="font-medium">Ce que nous faisons :</h4>
              <p>
                Nous appelons la maison plutôt que de remplir un formulaire,
                et nous demandons la personne qui tient le plan de salle.
                C&apos;est elle qui décide, et un formulaire ne lui parle pas.
              </p>
              <p>
                Si la salle est réellement pleine, nous appelons dans la
                foulée deux adresses du même niveau et nous vous rappelons avec
                ce qu&apos;elles ont répondu. Vous choisissez, vous ne cherchez
                pas.
              </p>
            </div>
          ),
        },
        {
          title: "La nounou qu'il faut trouver pour dimanche",
          cardEyebrow: "Cas vécu",
          modalEyebrow: "Quand la demande sort de l'ordinaire",
          shortDescription:
            "Nous ne vous envoyons personne que nous n'aurions pas vérifié nous-mêmes.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Confier ses enfants à quelqu&apos;un qu&apos;on n&apos;a jamais
                vu est la demande qui inquiète le plus, et c&apos;est normal.
                Nous ne traitons donc jamais ce cas par un simple appel à une
                agence locale.
              </p>
              <h4 className="font-medium">Ce que nous vérifions :</h4>
              <p>
                Les références auprès des familles précédentes, les diplômes de
                garde d&apos;enfants et de premiers secours, les habilitations
                exigées par le pays. Vous recevez le nom, le parcours et un
                échange en visio avant l&apos;arrivée si vous le souhaitez.
              </p>
              <p>
                Sur place, nous restons l&apos;interlocuteur : horaires,
                remplacement en cas d&apos;empêchement, rémunération. Rien de
                tout cela ne remonte jusqu&apos;à vous.
              </p>
            </div>
          ),
        },
        {
          title: "L'anniversaire que personne ne doit deviner",
          cardEyebrow: "Cas vécu",
          modalEyebrow: "Quand la demande sort de l'ordinaire",
          shortDescription:
            "Une surprise tient à ce qui est caché, donc à qui sait quoi, et quand.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Une surprise se rate rarement sur le fond, presque toujours sur
                un détail : une confirmation envoyée à la mauvaise adresse
                mail, un prestataire qui appelle la personne concernée, une
                ligne repérée sur un relevé.
              </p>
              <h4 className="font-medium">Ce que nous mettons en place :</h4>
              <p>
                Un seul canal de contact, celui que vous nous indiquez. Aucun
                prestataire n&apos;a votre numéro. Les échanges passent par
                nous, et la facturation aussi si vous le demandez.
              </p>
              <p>
                Nous écrivons également le déroulé à la minute et nous le
                partageons avec les seules personnes qui doivent le connaître,
                chacune ne recevant que sa partie.
              </p>
            </div>
          ),
        },
        {
          title: "L'objet oublié à Paris qu'il faut à Tokyo demain",
          cardEyebrow: "Cas vécu",
          modalEyebrow: "Quand la demande sort de l'ordinaire",
          shortDescription:
            "Un oubli se règle par la logistique, pas par des excuses.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Des lunettes, un traitement, un dossier, un costume pour un
                rendez-vous du surlendemain. L&apos;oubli arrive, et il se règle
                souvent, à condition de s&apos;y prendre vite.
              </p>
              <h4 className="font-medium">Ce que nous organisons :</h4>
              <p>
                La récupération de l&apos;objet à votre domicile, son
                acheminement par le premier vol utile, les formalités
                douanières s&apos;il en faut, et la livraison à votre hôtel.
              </p>
              <p>
                Quand le délai ne tient pas, nous cherchons l&apos;équivalent
                sur place, à votre taille et à votre goût, et nous vous disons
                vite si nous l&apos;avons trouvé. Pour un traitement, nous
                passons par un médecin local plutôt que par un colis.
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
      heading: "Ce sur quoi vous pouvez compter, d'une demande à l'autre",
      items: [
        {
          iconName: "badgeCheck",
          title: "Nous vérifions qui entre chez vous",
          description:
            "Références, diplômes et habilitations de chaque personne que nous plaçons. Rien n'est délégué à un intermédiaire que nous ne connaissons pas.",
        },
        {
          iconName: "star",
          title: "Vous n'êtes jamais laissé sans réponse",
          description:
            "Même quand la réponse est non, elle vous parvient, avec ce que nous avons cherché et ce que nous proposons à la place.",
        },
        {
          iconName: "clock",
          title: "Une réponse, pas une mise en attente",
          description:
            "Vous convenez avec votre conseillère du délai qui correspond à votre demande. Il vaut aussi le soir et le week-end, quand ces demandes arrivent.",
        },
        {
          iconName: "fileText",
          title: "La discrétion ne se demande pas",
          description:
            "Elle est acquise. Ce que vous organisez ne sort pas d'ici, et aucun client n'est cité publiquement sans son accord préalable.",
        },
      ],
    },

    {
      type: "faq",
      eyebrow: "Questions fréquentes",
      heading: "Ce que l'on nous demande avant de nous confier une soirée",
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
          question:
            "Faut-il déjà voyager avec vous pour faire appel à la conciergerie ?",
          answer: (
            <p>
              Non. Une demande ponctuelle se traite comme les autres, qu&apos;il
              s&apos;agisse d&apos;une table à Paris ou d&apos;un anniversaire à
              organiser sans voyage autour. Beaucoup de nos clients nous ont
              d&apos;ailleurs connus par là.
            </p>
          ),
        },
        {
          question: "Jusqu'à quel délai une demande reste-t-elle jouable ?",
          answer: (
            <p>
              Cela dépend de ce que vous demandez, pas de nous. Une table ou
              une voiture se traitent le jour même. Une privatisation, un chef
              déplacé ou du personnel à demeure demandent quelques jours, le
              temps de choisir la personne et de vérifier ses références. Nous
              vous disons dès le premier échange ce qui tient et ce qui ne tient
              pas.
            </p>
          ),
        },
        {
          question:
            "Comment choisissez-vous le personnel que vous mettez chez nous ?",
          answer: (
            <p>
              Nous vérifions nous-mêmes les références auprès des familles ou
              des maisons précédentes, les diplômes, et les habilitations
              exigées par le pays. Vous recevez le nom et le parcours avant
              l&apos;arrivée, et un échange en visio si vous le souhaitez. Nous
              restons ensuite l&apos;interlocuteur sur place.
            </p>
          ),
        },
        {
          question: "Organisez-vous des surprises sans que la personne le sache ?",
          answer: (
            <p>
              Oui, et c&apos;est le cas le plus fréquent. Un seul canal de
              contact, celui que vous indiquez, aucun prestataire ne détient vos
              coordonnées, et la facturation peut passer par nous. Le déroulé
              est écrit, et chaque intervenant ne reçoit que la partie qui le
              concerne.
            </p>
          ),
        },
        {
          question: "Que se passe-t-il si un prestataire fait défaut ?",
          answer: (
            <p>
              Nous prévoyons systématiquement une solution de repli avant le
              jour J, et c&apos;est nous qui la déclenchons. Vous
              l&apos;apprenez une fois le remplacement en place, pas au moment
              où le problème survient.
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
