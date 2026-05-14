"use client";

import { SelectTile } from "@/components/ui/select-tile";
import type { MultiChoiceQuestion } from "@/lib/contact/types";

export type MultiChoiceProps = {
  question: MultiChoiceQuestion;
  value: string[];
  onChange: (next: string[]) => void;
};

export function MultiChoiceView({
  question,
  value,
  onChange,
}: MultiChoiceProps) {
  const max = question.max ?? Infinity;

  const toggle = (id: string) => {
    if (value.includes(id)) {
      onChange(value.filter((v) => v !== id));
    } else {
      if (value.length >= max) return;
      onChange([...value, id]);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {question.options.map((opt) => {
        const selected = value.includes(opt.id);
        const atMax = value.length >= max && !selected;
        return (
          <SelectTile
            key={opt.id}
            label={opt.label}
            selected={selected}
            disabled={atMax}
            onToggle={() => toggle(opt.id)}
          />
        );
      })}
    </div>
  );
}
