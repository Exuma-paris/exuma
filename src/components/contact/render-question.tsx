"use client";

import {
  emptyAnswer,
  type Answer,
  type Question,
} from "@/lib/contact/types";
import { BooleanQuestionView } from "./questions/boolean";
import { SingleChoiceView } from "./questions/single-choice";
import { MultiChoiceView } from "./questions/multi-choice";
import { CalendarQuestionView } from "./questions/calendar";
import { ContactQuestionView } from "./questions/contact";

export type RenderQuestionProps = {
  question: Question;
  answer: Answer | undefined;
  onChange: (next: Answer) => void;
};

export function RenderQuestion({
  question,
  answer,
  onChange,
}: RenderQuestionProps) {
  const a = answer ?? emptyAnswer(question);

  switch (question.type) {
    case "boolean":
      return (
        <BooleanQuestionView
          question={question}
          value={a.type === "boolean" ? a.value : null}
          onChange={(value) => onChange({ type: "boolean", value })}
        />
      );
    case "single":
      return (
        <SingleChoiceView
          question={question}
          value={a.type === "single" ? a.value : null}
          onChange={(value) => onChange({ type: "single", value })}
        />
      );
    case "multi":
      return (
        <MultiChoiceView
          question={question}
          value={a.type === "multi" ? a.value : []}
          onChange={(value) => onChange({ type: "multi", value })}
        />
      );
    case "calendar":
      return (
        <CalendarQuestionView
          question={question}
          value={
            a.type === "calendar"
              ? a.value
              : { months: [], noPreference: false }
          }
          onChange={(value) => onChange({ type: "calendar", value })}
        />
      );
    case "contact":
      return (
        <ContactQuestionView
          question={question}
          value={
            a.type === "contact"
              ? a.value
              : {
                  name: "",
                  email: "",
                  phoneCountry: "FR",
                  phone: "",
                  marketingConsent: false,
                }
          }
          onChange={(value) => onChange({ type: "contact", value })}
        />
      );
  }
}
