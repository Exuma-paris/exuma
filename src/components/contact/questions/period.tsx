"use client";

import { SelectTile } from "@/components/ui/select-tile";
import { Textarea } from "@/components/ui/textarea";
import {
  DateRangeCalendar,
  formatRange,
} from "@/components/ui/date-range-calendar";
import type { PeriodAnswer, PeriodQuestion } from "@/lib/contact/types";

export type PeriodQuestionProps = {
  question: PeriodQuestion;
  value: PeriodAnswer;
  onChange: (next: PeriodAnswer) => void;
};

export function PeriodQuestionView({
  question,
  value,
  onChange,
}: PeriodQuestionProps) {
  const summary = formatRange(value.start, value.end);

  return (
    <div className="flex flex-col gap-2">
      <SelectTile
        label={question.fixedLabel ?? "Nos dates sont arrêtées"}
        selected={value.mode === "fixed"}
        showCheck={false}
        // Switching branch clears the other one's answer: a range of dates and
        // a period described in words are not the same reply, and carrying one
        // across reads as a bug.
        onToggle={() => onChange({ mode: "fixed", detail: "" })}
      />

      {value.mode === "fixed" ? (
        <div className="mt-1 mb-1 flex flex-col gap-2">
          <DateRangeCalendar
            start={value.start}
            end={value.end}
            onChange={(next) => onChange({ ...value, ...next })}
          />
          <p className="px-1 text-[14px] leading-[1.6] text-secondary-foreground">
            {summary
              ? value.end
                ? summary
                : `${summary} — choisissez la date de retour`
              : "Choisissez la date de départ, puis celle du retour."}
          </p>
        </div>
      ) : null}

      <SelectTile
        label={question.flexibleLabel ?? "La période reste à définir"}
        selected={value.mode === "flexible"}
        showCheck={false}
        onToggle={() =>
          onChange({ mode: "flexible", detail: "", start: undefined, end: undefined })
        }
      />

      {value.mode === "flexible" ? (
        <Textarea
          autoFocus
          rows={3}
          className="mt-1 min-h-24 rounded-xl border-0 bg-background p-4 text-[15px] outline-1 -outline-offset-1 outline-border"
          placeholder={
            question.flexiblePlaceholder ??
            "Par exemple : plutôt au printemps, deux semaines, hors vacances scolaires."
          }
          value={value.detail}
          onChange={(e) => onChange({ ...value, detail: e.target.value })}
        />
      ) : null}
    </div>
  );
}
