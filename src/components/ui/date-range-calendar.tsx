"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "@untitledui/icons";
import { cn } from "@/lib/utils";

const WEEKDAYS = ["L", "M", "M", "J", "V", "S", "D"];

const toKey = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate(),
  ).padStart(2, "0")}`;

const fromKey = (key: string) => {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d);
};

const startOfDay = (d: Date) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate());

/** Monday-first offset for the 1st of the month. */
function leadingBlanks(year: number, month: number) {
  const first = new Date(year, month, 1).getDay();
  return (first + 6) % 7;
}

export function formatRange(start?: string, end?: string) {
  if (!start) return "";
  const fmt = (key: string) =>
    fromKey(key).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  if (!end || end === start) return `Le ${fmt(start)}`;
  return `Du ${fmt(start)} au ${fmt(end)}`;
}

/**
 * Two-tap date range picker. Deliberately hand-rolled: the Base UI calendar
 * expects the Temporal API, which would mean a polyfill and an extra
 * dependency for one field.
 *
 * Only mounts after a user interaction (never during SSR), so reading the
 * current date at render time cannot cause a hydration mismatch.
 */
export function DateRangeCalendar({
  start,
  end,
  onChange,
}: {
  start?: string;
  end?: string;
  onChange: (next: { start?: string; end?: string }) => void;
}) {
  const today = useMemo(() => startOfDay(new Date()), []);
  const [view, setView] = useState(() =>
    start ? fromKey(start) : new Date(today.getFullYear(), today.getMonth(), 1),
  );

  const year = view.getFullYear();
  const month = view.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const blanks = leadingBlanks(year, month);

  const monthLabel = view.toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  });

  const atFirstMonth =
    year === today.getFullYear() && month === today.getMonth();

  const pick = (key: string) => {
    // First tap sets the start; second tap closes the range. Tapping a date
    // before the start restarts rather than producing a backwards range.
    if (!start || (start && end) || key < start) {
      onChange({ start: key, end: undefined });
      return;
    }
    onChange({ start, end: key });
  };

  const shift = (delta: number) =>
    setView(new Date(year, month + delta, 1));

  const navBtn =
    "flex size-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-background-soft disabled:cursor-not-allowed disabled:opacity-30";

  return (
    <div
      className="rounded-xl bg-background p-4"
      style={{ outline: "1px solid var(--border)", outlineOffset: "-1px" }}
    >
      <div className="flex items-center justify-between">
        <button
          type="button"
          className={navBtn}
          aria-label="Mois précédent"
          disabled={atFirstMonth}
          onClick={() => shift(-1)}
        >
          <ChevronLeft className="size-5 stroke-[1.5]" />
        </button>
        <p aria-live="polite" className="font-heading text-[16px] first-letter:uppercase">
          {monthLabel}
        </p>
        <button
          type="button"
          className={navBtn}
          aria-label="Mois suivant"
          onClick={() => shift(1)}
        >
          <ChevronRight className="size-5 stroke-[1.5]" />
        </button>
      </div>

      <div className="mt-3 grid grid-cols-7 gap-y-1">
        {WEEKDAYS.map((d, i) => (
          <span
            key={i}
            aria-hidden
            className="py-1 text-center text-[12px] text-secondary-foreground"
          >
            {d}
          </span>
        ))}

        {Array.from({ length: blanks }).map((_, i) => (
          <span key={`b${i}`} />
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const date = new Date(year, month, day);
          const key = toKey(date);
          const past = date < today;
          const isStart = key === start;
          const isEnd = key === end;
          const inRange =
            !!start && !!end && key > start && key < end;

          return (
            <button
              key={key}
              type="button"
              disabled={past}
              aria-label={date.toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              aria-pressed={isStart || isEnd}
              onClick={() => pick(key)}
              className={cn(
                "mx-auto flex size-9 items-center justify-center rounded-full text-[14px] transition-colors",
                past && "cursor-not-allowed text-secondary-foreground/40",
                !past && "cursor-pointer hover:bg-background-soft",
                inRange && "bg-background-soft",
                (isStart || isEnd) &&
                  "bg-foreground text-background hover:bg-foreground",
              )}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
