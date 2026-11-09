import {
  nightsInPeriod,
  resolveQuestion,
  type AnswersMap,
  type Question,
} from "@/lib/contact/types";

/**
 * Les réponses telles qu'un conseiller les lit : des libellés, pas des
 * identifiants. C'est ce qui part vers Make (puis le CRM ou l'e-mail interne),
 * là où `encodeAnswers` (analytics) ne sort que des identifiants et des
 * booléens. Les coordonnées ne sont pas ici : voir `buildSubmission`.
 */
export type FormattedAnswer = {
  /** Identifiant de la question (`destination`, `budget`, `source`…). */
  id: string;
  /** Le titre de l'écran, tel qu'il a été posé. */
  question: string;
  /** La réponse en toutes lettres, vide si la question a été passée. */
  answer: string;
};

export function formatAnswers(
  questions: Question[],
  answers: AnswersMap,
): FormattedAnswer[] {
  const out: FormattedAnswer[] = [];
  for (const authored of questions) {
    if (authored.type === "contact") continue;
    // La grille de budget dépend de la durée : on relit la question comme
    // elle a été affichée, sinon un identifiant de l'autre grille n'aurait
    // pas de libellé.
    const question = resolveQuestion(authored, answers);
    const answer = answers[question.id];
    out.push({
      id: question.id,
      question: question.heading,
      answer: answer ? formatOne(question, answer) : "",
    });
  }
  return out;
}

function formatOne(question: Question, answer: AnswersMap[string]): string {
  switch (answer.type) {
    case "boolean": {
      if (answer.value === null) return "";
      const q = question.type === "boolean" ? question : null;
      return answer.value ? (q?.yesLabel ?? "Oui") : (q?.noLabel ?? "Non");
    }
    case "single": {
      if (answer.value === null) return "";
      const options = "options" in question ? question.options : [];
      return options.find((o) => o.id === answer.value)?.label ?? answer.value;
    }
    case "multi": {
      const options = "options" in question ? question.options : [];
      return answer.value
        .map((id) => options.find((o) => o.id === id)?.label ?? id)
        .join(", ");
    }
    case "count":
      return answer.value === null ? "" : String(answer.value);
    case "text":
      return answer.value.trim();
    case "calendar": {
      const { months, noPreference } = answer.value;
      if (noPreference) {
        const q = question.type === "calendar" ? question : null;
        return q?.noPreferenceLabel ?? "Sans préférence de mois";
      }
      return months.map(formatMonth).join(", ");
    }
    case "travelers": {
      const { adults, children, babies } = answer.value;
      const parts = [
        plural(adults, "adulte"),
        children > 0 ? plural(children, "enfant") : "",
        babies > 0 ? plural(babies, "bébé") : "",
      ];
      return parts.filter(Boolean).join(", ");
    }
    case "period": {
      const v = answer.value;
      if (v.mode === "fixed" && v.start && v.end) {
        const nights = nightsInPeriod(v);
        const span = `Du ${formatDay(v.start)} au ${formatDay(v.end)}`;
        return nights === null ? span : `${span} (${plural(nights, "nuit")})`;
      }
      if (v.mode === "flexible") {
        return v.detail.trim()
          ? `Période à définir : ${v.detail.trim()}`
          : "Période à définir";
      }
      return "";
    }
    case "destination": {
      const { text, matches } = answer.value;
      if (matches.length === 0) return text.trim();
      const names = matches.map((m) => m.name).join(", ");
      // Ce qui a été tapé reste visible quand il dit plus que le nom reconnu
      // (« Japon en automne » reconnu comme Japon).
      const typed = text.trim();
      return typed && typed.toLowerCase() !== names.toLowerCase()
        ? `${names} (saisi : ${typed})`
        : names;
    }
    case "contact":
      return "";
  }
}

const DAY_FORMAT = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const MONTH_FORMAT = new Intl.DateTimeFormat("fr-FR", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** `2027-05-12` → « 12 mai 2027 ». Une clé mal formée est rendue telle quelle. */
function formatDay(key: string): string {
  const [y, m, d] = key.split("-").map(Number);
  if (!y || !m || !d) return key;
  return DAY_FORMAT.format(new Date(Date.UTC(y, m - 1, d)));
}

/** `2027-05` → « mai 2027 ». */
function formatMonth(key: string): string {
  const [y, m] = key.split("-").map(Number);
  if (!y || !m) return key;
  return MONTH_FORMAT.format(new Date(Date.UTC(y, m - 1, 1)));
}

function plural(count: number, noun: string): string {
  return `${count} ${noun}${count > 1 ? "s" : ""}`;
}
