import { continents } from "@/lib/content/registry";
import type { Question } from "@/lib/contact/types";

const EYEBROW = "Votre projet";

/**
 * The site-wide brief funnel behind `/votre-projet`, i.e. the destination
 * every "Créer votre voyage" button points to.
 *
 * Deliberately different from a per-destination funnel: the visitor arriving
 * here has not chosen where to go, so the first question opens the map rather
 * than narrowing it. Regions come from the registry so adding a continent
 * never leaves this list behind.
 */
export function getGeneralContactQuestions(): Question[] {
  return [
    {
      id: "regions",
      type: "multi",
      eyebrow: EYEBROW,
      heading: "Où souhaitez-vous partir ?",
      description:
        "Plusieurs réponses possibles. Rien d'arrêté ? Dites-le nous, c'est souvent le meilleur point de départ.",
      options: [
        ...Object.values(continents).map((c) => ({
          id: c.slug,
          label: c.name,
        })),
        { id: "a-definir", label: "Je n'ai pas encore d'idée précise" },
      ],
      min: 1,
    },
    {
      id: "travelers",
      type: "single",
      eyebrow: EYEBROW,
      heading: "Qui voyage ?",
      options: [
        { id: "couple", label: "En couple" },
        { id: "famille", label: "En famille" },
        { id: "amis", label: "Entre amis" },
        { id: "solo", label: "Seul ou seule" },
        { id: "groupe", label: "Groupe privé ou événement" },
      ],
    },
    {
      id: "horizon",
      type: "single",
      eyebrow: EYEBROW,
      heading: "Pour quand ?",
      description:
        "Une estimation suffit à ce stade, les dates se précisent ensemble.",
      options: [
        { id: "3-mois", label: "Dans les trois prochains mois" },
        { id: "6-mois", label: "Dans trois à six mois" },
        { id: "12-mois", label: "Dans six à douze mois" },
        { id: "plus-tard", label: "Plus tard, ou pas encore décidé" },
        { id: "dates-fixees", label: "Mes dates sont déjà fixées" },
      ],
    },
    {
      id: "budget",
      type: "single",
      eyebrow: EYEBROW,
      heading: "Quel budget par personne envisagez-vous ?",
      description:
        "Cette fourchette nous évite de vous proposer ce qui ne vous conviendrait pas.",
      options: [
        { id: "tier-1", label: "Moins de 5 000 €" },
        { id: "tier-2", label: "5 000 € – 10 000 €" },
        { id: "tier-3", label: "10 000 € – 20 000 €" },
        { id: "tier-4", label: "Plus de 20 000 €" },
        { id: "tier-open", label: "Je préfère en parler de vive voix" },
      ],
    },
    {
      // Asked at first contact on purpose: it is the only way to find out
      // whether word of mouth is a real acquisition channel, and who to thank.
      id: "source",
      type: "single",
      eyebrow: EYEBROW,
      heading: "Comment avez-vous entendu parler de nous ?",
      options: [
        { id: "proche", label: "La recommandation d'un proche" },
        { id: "professionnel", label: "Un professionnel nous a recommandés" },
        { id: "client", label: "Je suis déjà client" },
        { id: "recherche", label: "Une recherche en ligne" },
        { id: "presse", label: "La presse" },
        { id: "reseaux", label: "Les réseaux sociaux" },
        { id: "autre", label: "Autrement" },
      ],
    },
    {
      id: "contact",
      type: "contact",
      eyebrow: "Dernière étape",
      heading: "Comment vous joindre ?",
      // TODO: state the response commitment here once the SLA is settled.
      // Two promises must never be conflated: time to answer an incoming
      // request, and 24/7 assistance *during* the trip.
      description:
        "Un travel designer vous rappelle pour en parler de vive voix.",
    },
  ];
}
