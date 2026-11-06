"use client";

import { useMemo } from "react";
import { SelectTile } from "@/components/ui/select-tile";
import { Textarea } from "@/components/ui/textarea";
import {
  DateRangeCalendar,
  formatRange,
} from "@/components/ui/date-range-calendar";
import type { PeriodAnswer, PeriodQuestion } from "@/lib/contact/types";
import { cn } from "@/lib/utils";

export type PeriodQuestionProps = {
  question: PeriodQuestion;
  value: PeriodAnswer;
  onChange: (next: PeriodAnswer) => void;
};

const SEASONS = [
  { name: "Printemps", month: 3 },
  { name: "Été", month: 6 },
  { name: "Automne", month: 9 },
  { name: "Hiver", month: 12 },
];

/**
 * Les quatre prochaines saisons à partir d'aujourd'hui, puis quelques
 * raccourcis sans date. Un geste au lieu d'une phrase à taper, et le texte
 * reste libre pour préciser.
 */
function flexibleQuickPicks(today: Date): string[] {
  const seasons = SEASONS.map(({ name, month }) => {
    const year =
      month >= today.getMonth() + 1 ? today.getFullYear() : today.getFullYear() + 1;
    return { label: `${name} ${year}`, order: year * 12 + month };
  })
    .sort((a, b) => a.order - b.order)
    .map((s) => s.label);
  return [...seasons, "Vacances de Noël", "Hors vacances scolaires", "Une quinzaine de jours"];
}

/** Ajoute ou retire un raccourci dans le texte, séparé par des virgules. */
function toggleInText(detail: string, label: string): string {
  const parts = detail
    .split(/,\s*/)
    .map((p) => p.trim())
    .filter(Boolean);
  const next = parts.includes(label)
    ? parts.filter((p) => p !== label)
    : [...parts, label];
  return next.join(", ");
}

export function PeriodQuestionView({
  question,
  value,
  onChange,
}: PeriodQuestionProps) {
  const summary = formatRange(value.start, value.end);
  const quickPicks = useMemo(() => flexibleQuickPicks(new Date()), []);

  return (
    <div className="flex flex-col gap-2">
      <SelectTile
        label={question.fixedLabel ?? "Nos dates sont arrêtées"}
        selected={value.mode === "fixed"}
        showCheck={false}
        // Switching branch clears the other one's answer: a range of dates and
        // a period described in words are not the same reply, and carrying one
        // across reads as a bug.
        onToggle={() => onChange({ mode: "fixed", detail: "" })}
      />

      {value.mode === "fixed" ? (
        <div className="mt-1 mb-1 flex flex-col gap-2">
          <DateRangeCalendar
            start={value.start}
            end={value.end}
            onChange={(next) => onChange({ ...value, ...next })}
          />
          <p className="px-1 text-[14px] leading-[1.6] text-secondary-foreground">
            {summary
              ? value.end
                ? summary
                : `${summary} — choisissez la date de retour`
              : "Choisissez la date de départ, puis celle du retour."}
          </p>
        </div>
      ) : null}

      <SelectTile
        label={question.flexibleLabel ?? "La période reste à définir"}
        selected={value.mode === "flexible"}
        showCheck={false}
        onToggle={() =>
          onChange({ mode: "flexible", detail: "", start: undefined, end: undefined })
        }
      />

      {value.mode === "flexible" ? (
        <div className="mt-1 flex flex-col gap-2">
          <div className="flex flex-wrap gap-2 px-1">
            {quickPicks.map((label) => {
              const selected = value.detail.includes(label);
              return (
                <button
                  key={label}
                  type="button"
                  aria-pressed={selected}
                  onClick={() =>
                    onChange({ ...value, detail: toggleInText(value.detail, label) })
                  }
                  className={cn(
                    "cursor-pointer rounded-full border px-3 py-1.5 text-[13px] transition-colors",
                    selected
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-secondary-foreground hover:border-foreground hover:text-foreground",
                  )}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <Textarea
            autoFocus
            rows={3}
            className="min-h-24 rounded-xl border-0 bg-background p-4 text-[15px] outline-1 -outline-offset-1 outline-border"
            placeholder={
              question.flexiblePlaceholder ??
              "Par exemple : plutôt au printemps, deux semaines, hors vacances scolaires."
            }
            value={value.detail}
            onChange={(e) => onChange({ ...value, detail: e.target.value })}
          />
        </div>
      ) : null}
    </div>
  );
}
