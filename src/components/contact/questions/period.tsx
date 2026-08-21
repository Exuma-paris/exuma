"use client";

import { SelectTile } from "@/components/ui/select-tile";
import { Input } from "@/components/ui/input";
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
  const fieldLabel =
    value.mode === "fixed"
      ? (question.fixedFieldLabel ?? "Vos dates")
      : (question.flexibleFieldLabel ?? "La période que vous avez en tête");

  return (
    <div className="flex flex-col gap-2">
      <SelectTile
        label={question.fixedLabel ?? "Nos dates sont arrêtées"}
        selected={value.mode === "fixed"}
        showCheck={false}
        // Switching mode clears the detail: dates and a loose period are not
        // the same answer, and carrying one into the other reads as a bug.
        onToggle={() => onChange({ mode: "fixed", detail: "" })}
      />
      <SelectTile
        label={question.flexibleLabel ?? "La période reste à définir"}
        selected={value.mode === "flexible"}
        showCheck={false}
        onToggle={() => onChange({ mode: "flexible", detail: "" })}
      />

      {value.mode ? (
        <Input
          className="mt-2"
          label={fieldLabel}
          type="text"
          autoComplete="off"
          value={value.detail}
          onChange={(e) => onChange({ ...value, detail: e.target.value })}
        />
      ) : null}
    </div>
  );
}
