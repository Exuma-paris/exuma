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

/** "le Japon" / "l'Italie et Rome" / "le Japon, la Corse et Rome" */
function joinSubjects(subjects: string[]): string {
  if (subjects.length <= 1) return subjects[0] ?? "";
  return `${subjects.slice(0, -1).join(", ")} et ${subjects[subjects.length - 1]}`;
}

export function DestinationQuestionView({
  question,
  value,
  onChange,
}: DestinationQuestionProps) {
  // Naming a country and its continent back at someone who wrote the country
  // is noise, so the continent only speaks when nothing narrower matched.
  // It stays in the answer either way, for routing the lead later.
  const shown = useMemo(() => {
    const precise = value.matches.filter((m) => m.kind === "destination");
    return precise.length > 0 ? precise : value.matches;
  }, [value.matches]);

  const praise = useMemo(() => {
    if (shown.length === 0) return null;
    const list = joinSubjects(shown.map((m) => m.subject));
    const single = shown.length === 1;
    // A continent is a region, not a destination: calling "l'Asie" a
    // destination would undercut the expertise the sentence is meant to show.
    const isRegion = shown.every((m) => m.kind === "continent");
    const noun = isRegion
      ? single
        ? "cette région du monde"
        : "ces régions du monde"
      : single
        ? "cette destination"
        : "ces destinations";
    const lead = single ? "très beau choix" : "très beau programme";
    return `${list}, ${lead}. Nous aimons particulièrement ${noun} et nous avons hâte d'en parler avec vous.`;
  }, [shown]);

  return (
    <div className="flex flex-col gap-3">
      <Input
        label={question.label ?? "Votre destination"}
        type="text"
        autoComplete="off"
        value={value.text}
        onChange={(e) => {
          const text = e.target.value;
          onChange({
            text,
            matches: recognizeDestinations(text, question.index),
          });
        }}
      />

      {praise ? (
        <p
          aria-live="polite"
          className="flex gap-2 px-1 text-[14px] leading-[1.6] text-secondary-foreground"
        >
          <MapPin className="mt-1 size-4 shrink-0 text-primary" aria-hidden />
          {/* The subject carries a lowercase article so it can sit mid-sentence;
              it only needs a capital because it happens to open this one. */}
          <span className="first-letter:uppercase">{praise}</span>
        </p>
      ) : null}
    </div>
  );
}
