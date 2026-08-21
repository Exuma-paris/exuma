"use client";

import { useMemo } from "react";
import { MarkerPin01 as MapPin } from "@untitledui/icons";
import { Input } from "@/components/ui/input";
import { recognizeDestinations } from "@/lib/contact/recognize";
import type {
  DestinationAnswer,
  DestinationQuestion,
} from "@/lib/contact/types";

export type DestinationQuestionProps = {
  question: DestinationQuestion;
  value: DestinationAnswer;
  onChange: (next: DestinationAnswer) => void;
};

export function DestinationQuestionView({
  question,
  value,
  onChange,
}: DestinationQuestionProps) {
  const matches = useMemo(
    () => recognizeDestinations(value.text, question.index),
    [value.text, question.index],
  );

  return (
    <div className="flex flex-col gap-3">
      <Input
        label={question.label ?? "Votre destination"}
        type="text"
        autoComplete="off"
        value={value.text}
        onChange={(e) => {
          const text = e.target.value;
          onChange({ text, matches: recognizeDestinations(text, question.index) });
        }}
        helperText={matches.length === 0 ? question.hint : undefined}
      />

      {matches.length > 0 ? (
        <div
          aria-live="polite"
          className="flex flex-wrap items-center gap-2 px-1"
        >
          <MapPin
            className="size-4 shrink-0 text-primary"
            aria-hidden
          />
          <span className="text-[14px] leading-[1.6] text-secondary-foreground">
            Nous connaissons bien
          </span>
          {matches.map((m) => (
            <span
              key={`${m.kind}-${m.slug}`}
              className="rounded-full bg-background px-3 py-1 text-[14px] leading-[1.6] text-foreground shadow-[0_1px_2px_0_rgba(73,48,17,0.06)]"
            >
              {m.name}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
