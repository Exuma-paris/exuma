import { findCountry } from "@/components/ui/phone-country-select";
import {
  nightsInPeriod,
  type AnswersMap,
  type Question,
} from "@/lib/contact/types";

/**
 * Traduit les réponses d'un formulaire en paramètres dataLayer : des
 * identifiants d'options, des nombres, des booléens. Jamais de texte libre ni
 * de coordonnées : ce qui est tapé dans un champ texte devient `has_<question>`
 * et les coordonnées ne partent que dans `user_data` (voir `contactUserData`).
 *
 * `upTo` limite l'encodage aux `upTo` premières questions : les `form.view_*`
 * portent ainsi les réponses déjà données jusqu'à l'écran affiché inclus (une
 * question non encore répondue n'a pas d'entrée dans `answers`, donc rien ne
 * part pour elle).
 */
export function encodeAnswers(
  questions: Question[],
  answers: AnswersMap,
  upTo: number = questions.length,
): Record<string, unknown> {
  const out: Record<string, unknown> = {};

  for (const question of questions.slice(0, upTo)) {
    const answer = answers[question.id];
    if (!answer) continue;
    const key = paramKey(question.id);

    switch (answer.type) {
      case "single":
        if (answer.value !== null) out[key] = answer.value;
        break;
      case "multi":
        if (answer.value.length > 0) out[key] = answer.value.join(",");
        break;
      case "boolean":
        if (answer.value !== null) out[key] = answer.value;
        break;
      case "count":
        if (answer.value !== null) out[key] = answer.value;
        break;
      case "text":
        out[`has_${key}`] = answer.value.trim().length > 0;
        break;
      case "calendar":
        out.travel_months = answer.value.months.join(",");
        out.months_no_preference = answer.value.noPreference;
        break;
      case "travelers":
        out.adults = answer.value.adults;
        out.children = answer.value.children;
        out.babies = answer.value.babies;
        break;
      case "period": {
        if (answer.value.mode) out.period_mode = answer.value.mode;
        const nights = nightsInPeriod(answer.value);
        if (nights !== null) out.nights = nights;
        break;
      }
      case "destination": {
        const matches = answer.value.matches;
        out.destination_recognized = matches.length > 0;
        if (matches.length > 0) {
          out.destination = matches.map((m) => m.slug).join(",");
          out.destination_kind = matches[0].kind;
        } else if (answer.value.text.trim()) {
          // Seulement quand rien n'est reconnu : c'est ce qui fait remonter les
          // destinations demandées qui n'ont pas encore de page. Nettoyé pour
          // écarter un numéro ou une adresse e-mail glissés dans le champ.
          out.destination_text = cleanFreeText(answer.value.text);
        }
        break;
      }
      case "contact":
        out.marketing_consent = answer.value.marketingConsent;
        out.phone_country = answer.value.phoneCountry;
        out.contact_preference = answer.value.contactPreference;
        if (answer.value.callSlot) out.call_slot = answer.value.callSlot;
        if (question.type === "contact" && question.withCompany) {
          out.has_company = answer.value.company.trim().length > 0;
        }
        break;
    }
  }

  return out;
}

/**
 * Coordonnées pour `form.submit`, dans le format que lit déjà la variable
 * « User-Provided Data » du conteneur GTM (conversions avancées) : quatre clés,
 * `firstname`, `lastname`, `email`, `phone`. Le téléphone est reconstruit au
 * format international à partir de l'indicatif du pays choisi.
 */
export function contactUserData(answers: AnswersMap):
  | { firstname: string; lastname: string; email: string; phone: string }
  | undefined {
  const contact = Object.values(answers).find((a) => a.type === "contact");
  if (!contact || contact.type !== "contact") return undefined;
  const { firstName, lastName, email, phone, phoneCountry } = contact.value;

  return {
    firstname: firstName.trim(),
    lastname: lastName.trim(),
    email: email.trim(),
    phone: internationalPhone(phone, phoneCountry),
  };
}

/** `source` et `profil` gardent les noms de paramètres du plan de tag. */
const PARAM_KEYS: Record<string, string> = {
  source: "lead_source",
  profil: "profile",
};

function paramKey(questionId: string): string {
  return PARAM_KEYS[questionId] ?? questionId.replace(/-/g, "_");
}

function cleanFreeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[0-9@]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 50);
}

function internationalPhone(phone: string, countryCode: string): string {
  const compact = phone.replace(/[^\d+]/g, "");
  if (!compact) return "";
  if (compact.startsWith("+")) return compact;
  const dial = findCountry(countryCode).dialCode;
  return `${dial}${compact.replace(/^0+/, "")}`;
}
