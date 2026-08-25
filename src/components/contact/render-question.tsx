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
import { DestinationQuestionView } from "./questions/destination";
import { TravelersQuestionView } from "./questions/travelers";
import { PeriodQuestionView } from "./questions/period";

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
    case "destination":
      return (
        <DestinationQuestionView
          question={question}
          value={a.type === "destination" ? a.value : { text: "", matches: [] }}
          onChange={(value) => onChange({ type: "destination", value })}
        />
      );
    case "travelers":
      return (
        <TravelersQuestionView
          question={question}
          value={a.type === "travelers" ? a.value : { adults: 2, children: 0 }}
          onChange={(value) => onChange({ type: "travelers", value })}
        />
      );
    case "period":
      return (
        <PeriodQuestionView
          question={question}
          value={a.type === "period" ? a.value : { mode: null, detail: "" }}
          onChange={(value) => onChange({ type: "period", value })}
        />
      );
  }
}
