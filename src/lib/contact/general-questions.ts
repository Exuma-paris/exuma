import { continents, destinations } from "@/lib/content/registry";
import type { DestinationIndexEntry, Question } from "@/lib/contact/types";

const EYEBROW = "Votre projet";

/**
 * Names and slugs only — enough for the free-text field to recognise a place,
 * without shipping any page content to the browser. See DestinationQuestion.
 *
 * Keywords make good aliases when they are place names ("polynesie" on the
 * Polynésie entry) and terrible ones when they are themes: "safari" sits on a
 * dozen destinations, so using it would answer "un safari en Afrique du Sud"
 * with Botswana and Tanzanie — visibly not reading what was just written.
 * Keeping only keywords unique to one entry separates the two cases without
 * anyone having to curate a list.
 */
function buildDestinationIndex(): DestinationIndexEntry[] {
  const entries = [
    ...Object.values(destinations).map((d) => ({
      kind: "destination" as const,
      slug: d.slug,
      name: d.name,
      keywords: d.keywords ?? [],
    })),
    ...Object.values(continents).map((c) => ({
      kind: "continent" as const,
      slug: c.slug,
      name: c.name,
      keywords: c.keywords ?? [],
    })),
  ];

  const uses = new Map<string, number>();
  for (const e of entries) {
    for (const k of new Set(e.keywords.map((k) => k.toLowerCase()))) {
      uses.set(k, (uses.get(k) ?? 0) + 1);
    }
  }

  return entries.map(({ kind, slug, name, keywords }) => ({
    kind,
    slug,
    name,
    aliases: keywords.filter((k) => uses.get(k.toLowerCase()) === 1),
  }));
}

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
      heading: "Où souhaitez-vous partir ?",
      description:
        "Un pays, une région, une envie encore vague : écrivez-le comme vous le diriez.",
      label: "Votre destination",
      hint: "Rien d'arrêté ? Décrivez plutôt l'atmosphère que vous cherchez.",
      index: buildDestinationIndex(),
    },
    {
      id: "travelers",
      type: "travelers",
      eyebrow: EYEBROW,
      heading: "Qui sera du voyage ?",
      description:
        "Nous adaptons les hébergements et le rythme à la composition du groupe.",
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
      fixedFieldLabel: "Vos dates",
      flexibleFieldLabel: "La période que vous avez en tête",
    },
    {
      id: "budget",
      type: "single",
      eyebrow: EYEBROW,
      heading: "Quel budget envisagez-vous pour ce voyage ?",
      description:
        "Pour l'ensemble du séjour. Cette fourchette nous évite de vous proposer ce qui ne vous conviendrait pas.",
      options: [
        { id: "10-15", label: "10 000 € – 15 000 €" },
        { id: "15-20", label: "15 000 € – 20 000 €" },
        { id: "20-25", label: "20 000 € – 25 000 €" },
        { id: "25-30", label: "25 000 € – 30 000 €" },
        { id: "30-plus", label: "Plus de 30 000 €" },
        { id: "open", label: "Je préfère en parler de vive voix" },
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
