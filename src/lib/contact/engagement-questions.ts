import type { Question } from "@/lib/contact/types";
import { profileQuestion, sourceQuestion } from "@/lib/contact/pro-profile";

const EYEBROW = "Notre engagement";

/**
 * The short form behind "Recevoir notre engagement écrit". Four screens, but
 * the page it is reached from usually answers the first one and the second is
 * optional — most visitors are two taps from the end.
 */
export function getEngagementQuestions(): Question[] {
  return [
    profileQuestion(
      EYEBROW,
      "Nos engagements ne se formulent pas de la même façon selon que vous répondez de vos clients, de vos équipes ou de vous-même.",
    ),
    {
      id: "perimetre",
      type: "text",
      eyebrow: EYEBROW,
      heading: "Sur quoi porte votre besoin de confidentialité ?",
      description:
        "Un accord à signer, une clause précise, une situation particulière. Si vous préférez en parler de vive voix, passez simplement à l'étape suivante.",
      placeholder:
        "Par exemple : nous avons notre propre accord de confidentialité à faire signer avant tout échange de dossier.",
      rows: 4,
    },
    sourceQuestion(EYEBROW),
    {
      id: "contact",
      type: "contact",
      withCompany: true,
      eyebrow: "Dernière étape",
      heading: "Où vous l'envoyons-nous ?",
      description:
        "Vous recevez notre engagement écrit, et un interlocuteur vous répond dans les 24 heures ouvrées.",
      marketingConsentLabel:
        "J'accepte d'être recontacté par Exuma au sujet de cette demande.",
    },
  ];
}
