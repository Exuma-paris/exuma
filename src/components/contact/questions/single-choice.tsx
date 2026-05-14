"use client";

import { SelectTile } from "@/components/ui/select-tile";
import type { SingleChoiceQuestion } from "@/lib/contact/types";

export type SingleChoiceProps = {
  question: SingleChoiceQuestion;
  value: string | null;
  onChange: (next: string) => void;
};

export function SingleChoiceView({
  question,
  value,
  onChange,
}: SingleChoiceProps) {
  return (
    <div className="flex flex-col gap-2">
      {question.options.map((opt) => (
        <SelectTile
          key={opt.id}
          label={opt.label}
          selected={value === opt.id}
          showCheck={false}
          onToggle={() => onChange(opt.id)}
        />
      ))}
    </div>
  );
}
