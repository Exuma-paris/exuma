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

/**
 * Free-text destination. The visitor writes wherever they have in mind and the
 * field quietly recognises it against the registry — we never make them pick
 * from a list they did not ask for.
 */
export type DestinationIndexEntry = {
  kind: "destination" | "continent";
  slug: string;
  name: string;
  /**
   * The name with its French definite article, lowercase: "le Japon",
   * "l'Italie", "les Seychelles", "Rome". Lowercase so it can be dropped into
   * the middle of a sentence; the first letter is capitalised in CSS when it
   * lands at the start of one.
   */
  subject: string;
  /** Extra spellings worth matching (keywords from the registry entry). */
  aliases?: string[];
};

export type DestinationQuestion = QuestionBase & {
  type: "destination";
  label?: string;
  /**
   * Name/slug index built on the server. Deliberately not the registry itself:
   * this component is client-side, and shipping every destination, experience
   * and hotel body to the browser to match a few names would be absurd.
   */
  index: DestinationIndexEntry[];
};

/** Head count, split adults / children. */
export type TravelersQuestion = QuestionBase & {
  type: "travelers";
  adultsLabel?: string;
  childrenLabel?: string;
  maxPerGroup?: number;
};

/**
 * Either the dates are settled, or the period is still open — in which case
 * the visitor describes it in their own words.
 */
export type PeriodQuestion = QuestionBase & {
  type: "period";
  fixedLabel?: string;
  flexibleLabel?: string;
  /** Placeholder for the free-text field shown on the flexible branch. */
  flexiblePlaceholder?: string;
};

export type Question =
  | BooleanQuestion
  | SingleChoiceQuestion
  | MultiChoiceQuestion
  | CalendarQuestion
  | ContactQuestion
  | DestinationQuestion
  | TravelersQuestion
  | PeriodQuestion;

export type ContactAnswer = {
  name: string;
  email: string;
  phoneCountry: string;
  phone: string;
  marketingConsent: boolean;
};

export type DestinationAnswer = {
  /** Exactly what the visitor typed. */
  text: string;
  /** Registry slugs recognised in that text, best match first. */
  matches: {
    kind: "destination" | "continent";
    slug: string;
    name: string;
    subject: string;
  }[];
};

export type TravelersAnswer = {
  adults: number;
  children: number;
};

export type PeriodAnswer = {
  mode: "fixed" | "flexible" | null;
  /** ISO day keys, set when `mode` is "fixed". */
  start?: string;
  end?: string;
  /** The period in the visitor's own words, set when `mode` is "flexible". */
  detail: string;
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
  | { type: "contact"; value: ContactAnswer }
  | { type: "destination"; value: DestinationAnswer }
  | { type: "travelers"; value: TravelersAnswer }
  | { type: "period"; value: PeriodAnswer };

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
    case "destination":
      return { type: "destination", value: { text: "", matches: [] } };
    case "travelers":
      return { type: "travelers", value: { adults: 2, children: 0 } };
    case "period":
      return { type: "period", value: { mode: null, detail: "" } };
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
    case "destination":
      // Recognition is a convenience, never a gate: any text moves on.
      return answer.type === "destination" && answer.value.text.trim().length > 0;
    case "travelers":
      return (
        answer.type === "travelers" &&
        answer.value.adults + answer.value.children > 0
      );
    case "period": {
      if (answer.type !== "period") return false;
      const v = answer.value;
      if (v.mode === "fixed") return Boolean(v.start && v.end);
      if (v.mode === "flexible") return v.detail.trim().length > 0;
      return false;
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
