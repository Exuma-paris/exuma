import type { Question, SingleChoiceQuestion } from "@/lib/contact/types";

const EYEBROW = "Nous écrire";

/**
 * The acquisition question in its all-terrain form. The leisure funnel asks a
 * private traveller ("un proche", "déjà client") and the professional ones ask
 * a peer ("un confrère", "déjà en relation"); this form is reached from pages
 * that serve both, so the two referral channels are merged rather than guessed.
 */
function sourceQuestion(): SingleChoiceQuestion {
  return {
    id: "source",
    type: "single",
    eyebrow: EYEBROW,
    heading: "Comment nous avez-vous connus ?",
    options: [
      { id: "recommandation", label: "La recommandation d'un proche ou d'un confrère" },
      { id: "relation", label: "Nous sommes déjà en relation" },
      { id: "recherche", label: "Une recherche en ligne" },
      { id: "reseaux", label: "Les réseaux sociaux" },
      { id: "presse", label: "La presse" },
      { id: "autre", label: "Autrement" },
    ],
  };
}

/**
 * Three screens, no branching, no assumption about who is writing. Meant for
 * the pages that describe what we do rather than where we go — someone reading
 * about the concierge service has a question, not an itinerary, and sending
 * them into the seven-screen brief funnel would lose them.
 */
export function getGeneralEnquiryQuestions(): Question[] {
  return [
    {
      id: "projet",
      type: "text",
      required: true,
      eyebrow: EYEBROW,
      heading: "Parlez-nous de votre projet",
      description:
        "Une envie, une question, un besoin précis. Écrivez-le comme vous nous le diriez au téléphone — nous n'attendons rien de formaté.",
      placeholder:
        "Par exemple : nous partons en Italie en mai et nous cherchons quelqu'un pour organiser les transferts et les réservations sur place.",
      rows: 6,
    },
    sourceQuestion(),
    {
      id: "contact",
      type: "contact",
      eyebrow: "Dernière étape",
      heading: "Comment vous joindre ?",
      description:
        "Un interlocuteur vous répond dans les 24 heures ouvrées.",
      marketingConsentLabel:
        "J'accepte d'être recontacté par Exuma au sujet de cette demande.",
    },
  ];
}
