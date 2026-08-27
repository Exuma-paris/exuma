import type { AnswersMap, SingleChoiceQuestion } from "@/lib/contact/types";

/**
 * Who is asking, in the site's own words: the labels match the three doors on
 * /professionnels, so an answer prefilled from the page the visitor came from
 * reads as a continuation rather than as a new question.
 *
 * Shared by every professional form — they all start from the same four pages.
 */
export const PROFILE_OPTIONS = [
  { id: "family-office", label: "Family office ou assistante" },
  { id: "entreprise", label: "Entreprise ou cabinet" },
  { id: "dirigeant", label: "Dirigeant" },
  { id: "autre", label: "Autre" },
] as const;

export type ProfileId = (typeof PROFILE_OPTIONS)[number]["id"];

export const PROFILE_QUESTION_ID = "profil";

export function profileQuestion(
  eyebrow: string,
  description: string,
): SingleChoiceQuestion {
  return {
    id: PROFILE_QUESTION_ID,
    type: "single",
    eyebrow,
    heading: "À quel titre nous écrivez-vous ?",
    description,
    options: [...PROFILE_OPTIONS],
  };
}

/**
 * Turns `?profil=` into a first answer. Anything unrecognised is ignored
 * rather than guessed: an empty first screen is better than a wrong one.
 * Prefilled, never locked — the visitor can change it, and a wrong guess
 * costs one tap.
 */
export function proInitialAnswers(profile?: string): AnswersMap {
  if (!profile || !PROFILE_OPTIONS.some((o) => o.id === profile)) return {};
  return { [PROFILE_QUESTION_ID]: { type: "single", value: profile } };
}

/**
 * The professional counterpart of the acquisition question asked on
 * /votre-projet. The B2C version deliberately leaves out the referral channels
 * that matter here — a peer, a partner, a client of yours — because in front
 * of a private traveller they mean nothing. This is where they belong.
 */
export function sourceQuestion(eyebrow: string): SingleChoiceQuestion {
  return {
    id: "source",
    type: "single",
    eyebrow,
    heading: "Comment nous avez-vous connus ?",
    options: [
      { id: "confrere", label: "La recommandation d'un confrère ou d'un partenaire" },
      { id: "relation", label: "Nous sommes déjà en relation" },
      { id: "recherche", label: "Une recherche en ligne" },
      { id: "linkedin", label: "LinkedIn" },
      { id: "presse-evenement", label: "La presse ou un événement professionnel" },
      { id: "autre", label: "Autrement" },
    ],
  };
}
