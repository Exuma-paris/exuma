"use client";

import { Minus, Plus } from "@untitledui/icons";
import { cn } from "@/lib/utils";
import type {
  TravelersAnswer,
  TravelersQuestion,
} from "@/lib/contact/types";

export type TravelersQuestionProps = {
  question: TravelersQuestion;
  value: TravelersAnswer;
  onChange: (next: TravelersAnswer) => void;
};

function Stepper({
  label,
  count,
  min,
  max,
  onChange,
}: {
  label: string;
  count: number;
  min: number;
  max: number;
  onChange: (next: number) => void;
}) {
  const btn =
    "flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-background-soft disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <div
      className="flex items-center justify-between rounded-xl bg-background p-4"
      style={{ outline: "1px solid var(--border)", outlineOffset: "-1px" }}
    >
      <span className="text-[15px] leading-6 text-foreground">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label={`Diminuer : ${label}`}
          className={cn(btn)}
          disabled={count <= min}
          onClick={() => onChange(Math.max(min, count - 1))}
        >
          <Minus className="size-4" />
        </button>
        <span
          aria-live="polite"
          className="w-6 text-center font-heading text-[18px] text-foreground tabular-nums"
        >
          {count}
        </span>
        <button
          type="button"
          aria-label={`Augmenter : ${label}`}
          className={cn(btn)}
          disabled={count >= max}
          onClick={() => onChange(Math.min(max, count + 1))}
        >
          <Plus className="size-4" />
        </button>
      </div>
    </div>
  );
}

export function TravelersQuestionView({
  question,
  value,
  onChange,
}: TravelersQuestionProps) {
  const max = question.maxPerGroup ?? 12;

  return (
    <div className="flex flex-col gap-2">
      <Stepper
        label={question.adultsLabel ?? "Adultes"}
        count={value.adults}
        min={1}
        max={max}
        onChange={(adults) => onChange({ ...value, adults })}
      />
      <Stepper
        label={question.childrenLabel ?? "Enfants (3 à 17 ans)"}
        count={value.children}
        min={0}
        max={max}
        onChange={(children) => onChange({ ...value, children })}
      />
      {/* Les moins de trois ans sont comptés à part : lits, sièges auto,
          nacelles en cabine et tarifs aériens ne se décident pas comme pour
          un enfant plus grand. */}
      <Stepper
        label={question.babiesLabel ?? "Bébés (0 à 2 ans)"}
        count={value.babies}
        min={0}
        max={max}
        onChange={(babies) => onChange({ ...value, babies })}
      />
    </div>
  );
}
