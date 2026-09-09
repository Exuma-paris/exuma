"use client";

import { Input } from "@/components/ui/input";
import type { CountQuestion } from "@/lib/contact/types";

export type CountQuestionProps = {
  question: CountQuestion;
  value: number | null;
  onChange: (next: number | null) => void;
};

export function CountQuestionView({
  question,
  value,
  onChange,
}: CountQuestionProps) {
  return (
    <Input
      autoFocus
      label={question.label ?? "Nombre de participants"}
      type="number"
      inputMode="numeric"
      min={question.min ?? 1}
      max={question.max}
      value={value === null ? "" : String(value)}
      onChange={(e) => {
        const raw = e.target.value.trim();
        // Un champ vidé redevient « pas encore répondu », pas zéro : sinon le
        // bouton se débloquerait sur un effacement.
        onChange(raw === "" ? null : Number(raw));
      }}
    />
  );
}
