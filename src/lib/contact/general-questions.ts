import type { Question } from "@/lib/contact/types";
import { buildDestinationIndex } from "@/lib/contact/destination-index";

const EYEBROW = "Votre projet";

/**
 * The site-wide brief funnel behind `/votre-projet`, i.e. the destination
 * every "Créer votre voyage" button points to.
 *
 * Tone note: these are questions a travel designer would ask across a desk,
 * not form fields. Nothing here should read as an interrogation.
 */
export function getGeneralContactQuestions(): Question[] {
  return [
    {
      id: "destination",
      type: "destination",
      eyebrow: EYEBROW,
      heading: "Où avez-vous envie d'aller ?",
      description:
        "Un pays, une région, ou juste une envie encore floue. Écrivez-le comme vous nous le diriez.",
      label: "Votre destination",
      index: buildDestinationIndex(),
    },
    {
      id: "travelers",
      type: "travelers",
      eyebrow: EYEBROW,
      heading: "Qui part avec vous ?",
      description:
        "Le nombre de voyageurs change beaucoup de choses : les hébergements, le rythme, ce qu'on vous proposera sur place.",
      adultsLabel: "Adultes",
      childrenLabel: "Enfants",
    },
    {
      id: "period",
      type: "period",
      eyebrow: EYEBROW,
      heading: "Avez-vous une période en tête ?",
      description:
        "Des dates arrêtées ou une simple intention, les deux nous vont.",
      fixedLabel: "Nos dates sont arrêtées",
      flexibleLabel: "La période reste à définir",
      flexiblePlaceholder:
        "Par exemple : plutôt au printemps, deux semaines, hors vacances scolaires.",
    },
    {
      id: "budget",
      type: "single",
      eyebrow: EYEBROW,
      heading: "Quel budget avez-vous en tête ?",
      description:
        "Pour l'ensemble du séjour. Le savoir tôt nous évite de vous proposer ce qui ne vous conviendrait pas.",
      // Les paliers s'élargissent vers le haut à dessein : le centre de la
      // liste est ce qui se lit comme la norme, et des tranches égales le
      // tireraient vers le bas.
      options: [
        { id: "0-20", label: "Jusqu'à 20 000 €" },
        { id: "20-35", label: "20 000 € – 35 000 €" },
        { id: "35-50", label: "35 000 € – 50 000 €" },
        { id: "50-80", label: "50 000 € – 80 000 €" },
        { id: "80-plus", label: "Plus de 80 000 €" },
        { id: "open", label: "Je préfère en parler de vive voix" },
      ],
      // Sous une semaine, la grille longue ferait fuir sans raison. Le haut
      // reste ouvert : un court séjour n'est pas un petit budget — quatre
      // jours à Marrakech en jet privé dépassent la moitié de cette échelle.
      optionsWhen: {
        questionId: "period",
        when: "nightsUnder",
        nights: 7,
        options: [
          { id: "0-10", label: "Moins de 10 000 €" },
          { id: "10-18", label: "10 000 € – 18 000 €" },
          { id: "18-30", label: "18 000 € – 30 000 €" },
          { id: "30-50", label: "30 000 € – 50 000 €" },
          { id: "50-plus", label: "Plus de 50 000 €" },
          // Même identifiant que sur la grille longue : ce choix-là survit à
          // un changement de dates, il ne dépend d'aucun montant.
          { id: "open", label: "Je préfère en parler de vive voix" },
        ],
      },
    },
    {
      // Asked at first contact on purpose: it is the only way to find out
      // whether word of mouth is a real acquisition channel, and who to thank.
      // No "a professional recommended us" option here — that is a B2B path
      // and it belongs on /professionnels, not in front of a private client.
      id: "source",
      type: "single",
      eyebrow: EYEBROW,
      heading: "Comment nous avez-vous connus ?",
      options: [
        { id: "proche", label: "La recommandation d'un proche" },
        { id: "client", label: "Je suis déjà client" },
        { id: "recherche", label: "Une recherche en ligne" },
        { id: "presse", label: "La presse" },
        { id: "reseaux", label: "Les réseaux sociaux" },
        { id: "autre", label: "Autrement" },
      ],
    },
    {
      // Facultatif, et placé juste avant les coordonnées : une fois le cadre
      // pratique posé, on laisse la parole. Personne n'est retenu ici — le
      // bouton reste actif sur un champ vide.
      id: "envies",
      type: "text",
      eyebrow: EYEBROW,
      heading: "Envie de nous en dire plus ?",
      description:
        "Ce qui vous ferait plaisir, ce que vous voulez éviter, une occasion à fêter. Tout ce que vous écrivez ici nous sert. Et si vous préférez en parler de vive voix, passez simplement à l'étape suivante.",
      placeholder:
        "Par exemple : nous fêtons nos vingt ans de mariage, nous aimons marcher, et nous détestons les hôtels où tout le monde parle français.",
      rows: 5,
    },
    {
      id: "contact",
      type: "contact",
      eyebrow: "Dernière étape",
      heading: "Comment vous joindre ?",
      // Le délai porte sur la réponse à une demande entrante. Il ne dit rien
      // de l'assistance pendant le voyage : ce sont deux promesses distinctes
      // et les confondre serait un engagement qu'on ne tient pas.
      description:
        "Un travel designer vous rappelle dans les 24 heures ouvrées pour en parler de vive voix.",
    },
  ];
}
