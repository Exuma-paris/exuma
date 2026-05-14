"use client";

import { cn } from "@/lib/utils";
import { BlockSelect } from "@/components/ui/block-select";
import { Indicator } from "@/components/ui/indicator";
import type {
  CalendarAnswer,
  CalendarQuestion,
} from "@/lib/contact/types";

export type CalendarQuestionProps = {
  question: CalendarQuestion;
  value: CalendarAnswer;
  onChange: (next: CalendarAnswer) => void;
};

export function CalendarQuestionView({
  question,
  value,
  onChange,
}: CalendarQuestionProps) {
  const toggleMonth = (monthId: string) => {
    const isSelected = value.months.includes(monthId);
    const nextMonths = isSelected
      ? value.months.filter((id) => id !== monthId)
      : [...value.months, monthId];
    onChange({ months: nextMonths, noPreference: false });
  };

  const toggleNoPreference = () => {
    onChange({ months: [], noPreference: !value.noPreference });
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-3 gap-2">
        {question.months.map((m) => (
          <BlockSelect
            key={m.id}
            title={m.title}
            subtitle={m.subtitle}
            selected={value.months.includes(m.id)}
            onToggle={() => toggleMonth(m.id)}
            className="w-full py-3"
            indicator={m.weather ? <Indicator variant={m.weather} /> : undefined}
          />
        ))}
      </div>
      <NoPreferenceTile
        label={question.noPreferenceLabel ?? "Pas encore de période définie"}
        selected={value.noPreference}
        onToggle={toggleNoPreference}
      />
    </div>
  );
}

function NoPreferenceTile({
  label,
  selected,
  onToggle,
}: {
  label: string;
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={selected}
      style={{
        outline: selected
          ? "2px solid var(--foreground)"
          : "1px solid var(--background-soft)",
        outlineOffset: selected ? "-2px" : "-1px",
      }}
      className={cn(
        "flex w-full cursor-pointer items-center rounded-xl bg-background p-4 text-left text-[15px] leading-6 text-foreground transition-colors focus-visible:ring-3 focus-visible:ring-ring/50",
        selected &&
          "shadow-[0_6px_12px_0_rgba(156,103,36,0.05),0_2px_6px_0_rgba(73,48,17,0.06)]",
      )}
    >
      {label}
    </button>
  );
}
