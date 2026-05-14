export type QuestionBase = {
  id: string;
  eyebrow?: string;
  heading: string;
  description?: string;
};

export type BooleanQuestion = QuestionBase & {
  type: "boolean";
  yesLabel?: string;
  noLabel?: string;
};

export type ChoiceOption = { id: string; label: string };

export type SingleChoiceQuestion = QuestionBase & {
  type: "single";
  options: ChoiceOption[];
};

export type MultiChoiceQuestion = QuestionBase & {
  type: "multi";
  options: ChoiceOption[];
  min?: number;
  max?: number;
};

export type CalendarMonth = {
  id: string;
  title: string;
  subtitle: string;
  weather?: import("@/components/ui/indicator").IndicatorVariant;
};

export type CalendarQuestion = QuestionBase & {
  type: "calendar";
  months: CalendarMonth[];
  noPreferenceLabel?: string;
};

export type ContactQuestion = QuestionBase & {
  type: "contact";
  marketingConsentLabel?: string;
};

export type Question =
  | BooleanQuestion
  | SingleChoiceQuestion
  | MultiChoiceQuestion
  | CalendarQuestion
  | ContactQuestion;

export type ContactAnswer = {
  name: string;
  email: string;
  phoneCountry: string;
  phone: string;
  marketingConsent: boolean;
};

export type CalendarAnswer = {
  months: string[];
  noPreference: boolean;
};

export type Answer =
  | { type: "boolean"; value: boolean | null }
  | { type: "single"; value: string | null }
  | { type: "multi"; value: string[] }
  | { type: "calendar"; value: CalendarAnswer }
  | { type: "contact"; value: ContactAnswer };

export type AnswersMap = Record<string, Answer>;

export function emptyAnswer(question: Question): Answer {
  switch (question.type) {
    case "boolean":
      return { type: "boolean", value: null };
    case "single":
      return { type: "single", value: null };
    case "multi":
      return { type: "multi", value: [] };
    case "calendar":
      return { type: "calendar", value: { months: [], noPreference: false } };
    case "contact":
      return {
        type: "contact",
        value: {
          name: "",
          email: "",
          phoneCountry: "FR",
          phone: "",
          marketingConsent: false,
        },
      };
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isAnswered(question: Question, answer: Answer | undefined): boolean {
  if (!answer) return false;
  switch (question.type) {
    case "boolean":
      return answer.type === "boolean" && answer.value !== null;
    case "single":
      return answer.type === "single" && answer.value !== null;
    case "multi": {
      if (answer.type !== "multi") return false;
      const min = question.min ?? 1;
      const max = question.max ?? Infinity;
      return answer.value.length >= min && answer.value.length <= max;
    }
    case "calendar": {
      if (answer.type !== "calendar") return false;
      return answer.value.noPreference || answer.value.months.length > 0;
    }
    case "contact": {
      if (answer.type !== "contact") return false;
      const v = answer.value;
      return (
        v.name.trim().length > 0 &&
        EMAIL_REGEX.test(v.email) &&
        v.phone.trim().length > 0
      );
    }
  }
}
