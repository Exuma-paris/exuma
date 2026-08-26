import type { Question } from "@/lib/contact/types";
import { profileQuestion, sourceQuestion } from "@/lib/contact/pro-profile";

const EYEBROW = "Écrire à Ludivine";

/**
 * The form behind "Écrire à Ludivine", reached from the professional hub and
 * its three audience pages. Same first screen as the engagement form, and the
 * same prefill: whoever arrives has already said who they are by clicking.
 */
export function getLudivineQuestions(): Question[] {
  return [
    profileQuestion(
      EYEBROW,
      "Pour que Ludivine sache à qui elle répond avant même de vous lire.",
    ),
    {
      id: "message",
      type: "text",
      eyebrow: EYEBROW,
      // Le seul écran vraiment obligatoire du formulaire : « écrire à
      // quelqu'un » sans message n'a pas de sens, et un envoi vide ferait
      // perdre un aller-retour à tout le monde.
      required: true,
      heading: "Que pouvons-nous faire pour vous ?",
      description:
        "Écrivez-le comme vous le diriez au téléphone. Un besoin précis, une question, ou simplement l'envie de savoir comment nous travaillons.",
      placeholder:
        "Par exemple : nous cherchons un partenaire pour les déplacements de nos clients, et nous aimerions comprendre comment vous facturez.",
      rows: 6,
    },
    sourceQuestion(EYEBROW),
    {
      id: "contact",
      type: "contact",
      withCompany: true,
      eyebrow: "Dernière étape",
      heading: "Comment vous joindre ?",
      description:
        "Ludivine vous répond dans les 24 heures ouvrées.",
      marketingConsentLabel:
        "J'accepte d'être recontacté par Exuma au sujet de cette demande.",
    },
  ];
}
