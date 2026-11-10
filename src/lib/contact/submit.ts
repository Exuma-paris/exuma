import { getAttribution, type Attribution } from "@/lib/analytics/attribution";
import { contactUserData, encodeAnswers } from "@/lib/analytics/encode-answers";
import { formatAnswers, type FormattedAnswer } from "@/lib/contact/format-answers";
import type { AnswersMap, Question } from "@/lib/contact/types";

/**
 * La demande telle qu'elle part vers `/api/contact`, puis vers Make. Les
 * noms sont en `snake_case` parce que c'est ce que Make et les CRM attendent ;
 * les réponses sont en toutes lettres (`answers`) et en identifiants (`raw`),
 * pour qu'un scénario puisse aussi bien écrire un e-mail lisible que remplir
 * des champs de CRM.
 */
export type ContactSubmission = {
  product: string;
  /** Horodatage côté navigateur, ISO 8601. */
  submitted_at: string;
  /** Page du formulaire au moment de l'envoi. */
  page_url: string;
  contact: {
    first_name: string;
    last_name: string;
    company: string;
    email: string;
    /** Au format international, `+33…`. */
    phone: string;
    phone_country: string;
    marketing_consent: boolean;
  };
  /** Une entrée par question, dans l'ordre du formulaire, coordonnées exclues. */
  answers: FormattedAnswer[];
  /** Les mêmes réponses, une ligne « Question : réponse » par question. */
  summary: string;
  /** Les réponses en identifiants, comme dans le dataLayer (`budget: "20-35"`). */
  raw: Record<string, unknown>;
  /** utm, gclid, page d'arrivée, référent : l'origine de la visite. */
  tracking: Attribution;
};

export function buildSubmission(
  product: string,
  questions: Question[],
  answers: AnswersMap,
): ContactSubmission {
  const contact = Object.values(answers).find((a) => a.type === "contact");
  const value = contact?.type === "contact" ? contact.value : null;
  const userData = contactUserData(answers);
  const formatted = formatAnswers(questions, answers);

  return {
    product,
    submitted_at: new Date().toISOString(),
    page_url: typeof window === "undefined" ? "" : window.location.href,
    contact: {
      first_name: userData?.firstname ?? "",
      last_name: userData?.lastname ?? "",
      company: value?.company.trim() ?? "",
      email: userData?.email ?? "",
      phone: userData?.phone ?? "",
      phone_country: value?.phoneCountry ?? "",
      marketing_consent: value?.marketingConsent ?? false,
    },
    answers: formatted,
    summary: formatted
      .map((a) => `${a.question} : ${a.answer || "—"}`)
      .join("\n"),
    raw: encodeAnswers(questions, answers),
    tracking: getAttribution(),
  };
}

export class SubmissionError extends Error {
  constructor(public readonly status: number) {
    super(`Envoi refusé (${status})`);
    this.name = "SubmissionError";
  }
}

/**
 * Envoie la demande à la route serveur du site, qui la relaie vers Make.
 * Lève en cas d'échec : c'est au formulaire de garder les réponses et de
 * proposer de réessayer, jamais de rediriger vers la page merci.
 */
/**
 * Nom du champ piège du formulaire : un champ invisible qu'un visiteur ne
 * remplit jamais et qu'un robot remplit toujours. La route serveur ignore en
 * silence toute demande où il est rempli. Le nom évite les mots que les
 * navigateurs complètent d'eux-mêmes (e-mail, téléphone, adresse).
 */
export const HONEYPOT_FIELD = "company_fax";

export async function submitContact(
  submission: ContactSubmission,
  honeypot = "",
): Promise<void> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...submission, [HONEYPOT_FIELD]: honeypot }),
    // L'envoi survit à la navigation qui suit, au cas où elle partirait tôt.
    keepalive: true,
  });
  if (!response.ok) throw new SubmissionError(response.status);
}
