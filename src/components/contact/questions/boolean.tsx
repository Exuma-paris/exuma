"use client";

import { SelectTile } from "@/components/ui/select-tile";
import type { BooleanQuestion } from "@/lib/contact/types";

export type BooleanQuestionProps = {
  question: BooleanQuestion;
  value: boolean | null;
  onChange: (next: boolean) => void;
};

export function BooleanQuestionView({
  question,
  value,
  onChange,
}: BooleanQuestionProps) {
  return (
    <div className="flex flex-col gap-2">
      <SelectTile
        label={question.yesLabel ?? "Oui"}
        selected={value === true}
        onToggle={() => onChange(true)}
      />
      <SelectTile
        label={question.noLabel ?? "Non"}
        selected={value === false}
        onToggle={() => onChange(false)}
      />
    </div>
  );
}
