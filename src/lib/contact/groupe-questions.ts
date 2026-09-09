import type { Question } from "@/lib/contact/types";
import { buildDestinationIndex } from "@/lib/contact/destination-index";
import { sourceQuestion } from "@/lib/contact/pro-profile";

const EYEBROW = "Projet de groupe";

/**
 * The form behind "Parler d'un projet de groupe", reached only from the
 * corporate page — so the profile is known and never asked. Destination and
 * period follow the leisure funnel exactly: same free-text recognition, same
 * fixed-or-flexible dates. A seminar is planned like a trip, not like a
 * purchase order.
 */
export function getGroupeQuestions(): Question[] {
  return [
    {
      id: "societe",
      type: "text",
      multiline: false,
      required: true,
      eyebrow: EYEBROW,
      heading: "Pour quelle société organisez-vous ?",
      description:
        "Le nom suffit. Nous regardons ce que nous avons déjà pu faire pour vous avant de vous rappeler.",
      placeholder: "Nom de la société",
    },
    {
      id: "destination",
      type: "destination",
      eyebrow: EYEBROW,
      heading: "Où souhaitez-vous emmener vos équipes ?",
      description:
        "Un pays, une ville, ou juste une intention. Écrivez-le comme vous nous le diriez.",
      label: "Votre destination",
      index: buildDestinationIndex(),
    },
    {
      // Après la destination et avant la période, exactement comme sur le
      // formulaire loisir : où, combien, quand.
      id: "pax",
      type: "count",
      eyebrow: EYEBROW,
      heading: "Combien de personnes partent ?",
      description:
        "Une estimation suffit à ce stade. Le nombre décide de tout le reste : les vols, les hébergements, ce qu'on peut privatiser.",
      label: "Nombre de participants",
      min: 1,
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
        "Par exemple : un séminaire de trois jours à l'automne, hors vacances scolaires.",
    },
    {
      // Facultatif, et juste avant la question d'acquisition : une fois le
      // cadre posé, on laisse la parole — comme sur le formulaire loisir.
      id: "projet",
      type: "text",
      eyebrow: EYEBROW,
      heading: "Envie de nous en dire plus sur le projet ?",
      description:
        "Son objet, son déroulé, ce qui compte pour vous, ce qu'il ne faut surtout pas rater. Et si vous préférez en parler de vive voix, passez simplement à l'étape suivante.",
      placeholder:
        "Par exemple : un séminaire de direction, une soirée de gala le dernier soir, et une partie des participants qui arrivent de l'étranger.",
      rows: 5,
    },
    sourceQuestion(EYEBROW),
    {
      id: "contact",
      type: "contact",
      // La société est déjà le premier écran : la redemander ici sonnerait
      // comme un formulaire qui n'écoute pas.
      eyebrow: "Dernière étape",
      heading: "Comment vous joindre ?",
      description:
        "Un interlocuteur vous rappelle dans les 24 heures ouvrées pour cadrer le projet.",
      marketingConsentLabel:
        "J'accepte d'être recontacté par Exuma au sujet de ce projet.",
    },
  ];
}
