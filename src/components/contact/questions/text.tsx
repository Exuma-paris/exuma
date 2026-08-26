"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { TextQuestion } from "@/lib/contact/types";

export type TextQuestionProps = {
  question: TextQuestion;
  value: string;
  onChange: (next: string) => void;
};

export function TextQuestionView({
  question,
  value,
  onChange,
}: TextQuestionProps) {
  if (question.multiline === false) {
    return (
      <Input
        autoFocus
        label={question.placeholder ?? question.heading}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }

  return (
    <Textarea
      autoFocus
      rows={question.rows ?? 5}
      className="min-h-40 rounded-xl border-0 bg-background p-4 text-[15px] outline-1 -outline-offset-1 outline-border"
      placeholder={question.placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
