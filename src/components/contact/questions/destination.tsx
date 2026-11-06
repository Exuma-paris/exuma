"use client";

import { useId, useMemo, useState, type KeyboardEvent } from "react";
import { MarkerPin01 as MapPin } from "@untitledui/icons";
import { Input } from "@/components/ui/input";
import { recognizeDestinations } from "@/lib/contact/recognize";
import type {
  DestinationAnswer,
  DestinationIndexEntry,
  DestinationQuestion,
} from "@/lib/contact/types";
import { cn } from "@/lib/utils";

export type DestinationQuestionProps = {
  question: DestinationQuestion;
  value: DestinationAnswer;
  onChange: (next: DestinationAnswer) => void;
};

/** Nombre de caractères avant de proposer, et nombre de propositions. */
const MIN_CHARS = 3;
const MAX_SUGGESTIONS = 5;

const strip = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/** "le Japon" / "l'Italie et Rome" / "le Japon, la Corse et Rome" */
function joinSubjects(subjects: string[]): string {
  if (subjects.length <= 1) return subjects[0] ?? "";
  return `${subjects.slice(0, -1).join(", ")} et ${subjects[subjects.length - 1]}`;
}

function toMatch(entry: DestinationIndexEntry): DestinationAnswer["matches"][number] {
  return {
    kind: entry.kind,
    slug: entry.slug,
    name: entry.name,
    subject: entry.subject,
    note: entry.note,
    highlights: entry.highlights,
  };
}

/**
 * Entrées dont le nom, ou un alias, a un mot qui commence par ce qui est tapé :
 * « pol » propose la Polynésie, « bora » la Polynésie si Bora Bora est un
 * alias. Pas de correspondance au milieu d'un mot : « pol » ne doit pas
 * remonter la Grèce parce qu'Acropole contient ces lettres. Le nom lui-même
 * passe devant un alias, les destinations devant les régions.
 */
function suggest(query: string, index: DestinationIndexEntry[]): DestinationIndexEntry[] {
  const q = strip(query);
  if (q.length < MIN_CHARS) return [];
  const wordStarts = (n: string) =>
    n.startsWith(q) || n.split(" ").some((word) => word.startsWith(q));
  const scored = index.flatMap((entry) => {
    const byName = wordStarts(strip(entry.name));
    const byAlias = (entry.aliases ?? []).some((a) => wordStarts(strip(a)));
    if (!byName && !byAlias) return [];
    return [{ entry, score: (byName ? 0 : 2) + (entry.kind === "continent" ? 1 : 0) }];
  });
  return scored
    .sort(
      (a, b) =>
        a.score - b.score || a.entry.name.localeCompare(b.entry.name, "fr"),
    )
    .slice(0, MAX_SUGGESTIONS)
    .map((s) => s.entry);
}

export function DestinationQuestionView({
  question,
  value,
  onChange,
}: DestinationQuestionProps) {
  const listId = useId();
  const [active, setActive] = useState(-1);
  // Fermée après un choix ou Échap, jusqu'à la prochaine frappe.
  const [dismissed, setDismissed] = useState(false);

  const suggestions = useMemo(
    () => suggest(value.text, question.index),
    [value.text, question.index],
  );
  // Rien à proposer quand ce qui est tapé est déjà exactement une destination
  // reconnue : la liste répéterait le champ.
  const exact = value.matches.some((m) => strip(m.name) === strip(value.text));
  const open = !dismissed && !exact && suggestions.length > 0;

  const popular = useMemo(
    () =>
      (question.suggestions ?? [])
        .map((slug) => question.index.find((e) => e.slug === slug))
        .filter((e): e is DestinationIndexEntry => Boolean(e)),
    [question.suggestions, question.index],
  );

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

    // Une seule destination reconnue : c'est sa propre phrase qui répond,
    // écrite sur la fiche (`projectNote`). Rien n'est fabriqué ici.
    const note = single ? shown[0].note?.trim() : undefined;
    if (note) return `${list}, ${lead}. ${note}`;

    // Filet, tant qu'une fiche n'a pas la sienne : les lieux de son `blurb`,
    // qui restent propres à l'endroit même si la tournure ne l'est pas.
    const highlights = single ? shown[0].highlights?.trim() : undefined;
    if (highlights) {
      const body = highlights.replace(/[.\s]+$/, "");
      return isRegion
        ? `${list}, ${lead}. ${body}. Dites-nous ce qui vous attire, nous construisons le reste.`
        : `${list}, ${lead}. Nous y connaissons ${body} : dites-nous ce qui vous attire, nous construisons le reste.`;
    }

    return `${list}, ${lead}. Nous aimons particulièrement ${noun} et nous avons hâte d'en parler avec vous.`;
  }, [shown]);

  const pick = (entry: DestinationIndexEntry) => {
    onChange({ text: entry.name, matches: [toMatch(entry)] });
    setDismissed(true);
    setActive(-1);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!open) {
      if (event.key === "Escape") setDismissed(true);
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((i) => (i + 1) % suggestions.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    } else if (event.key === "Enter") {
      // Entrée choisit la proposition en surbrillance, sinon la première :
      // elle ne passe pas à l'écran suivant tant que la liste est ouverte.
      event.preventDefault();
      event.stopPropagation();
      pick(suggestions[active >= 0 ? active : 0]);
    } else if (event.key === "Escape") {
      setDismissed(true);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <Input
          label={question.label ?? "Votre destination"}
          type="text"
          autoComplete="off"
          autoFocus
          required
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          aria-autocomplete="list"
          value={value.text}
          onKeyDown={onKeyDown}
          onChange={(e) => {
            const text = e.target.value;
            setDismissed(false);
            setActive(-1);
            onChange({
              text,
              matches: recognizeDestinations(text, question.index),
            });
          }}
        />

        {open ? (
          <ul
            id={listId}
            role="listbox"
            className="absolute inset-x-0 top-full z-20 mt-1 overflow-hidden rounded-xl border border-border bg-background py-1 shadow-deep"
          >
            {suggestions.map((entry, i) => (
              <li key={entry.slug} role="option" aria-selected={i === active}>
                <button
                  type="button"
                  // Garde le focus dans le champ : le clic ne doit pas
                  // déclencher le blur avant la sélection.
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => pick(entry)}
                  className={cn(
                    "flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-2.5 text-left text-[15px] text-foreground transition-colors hover:bg-background-soft",
                    i === active && "bg-background-soft",
                  )}
                >
                  <span>{entry.name}</span>
                  {entry.kind === "continent" ? (
                    <span className="text-[12px] text-secondary-foreground">
                      Région
                    </span>
                  ) : null}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {popular.length > 0 && value.text.trim() === "" ? (
        <div className="flex flex-wrap gap-2 px-1">
          {popular.map((entry) => (
            <button
              key={entry.slug}
              type="button"
              onClick={() => pick(entry)}
              className="cursor-pointer rounded-full border border-border px-3 py-1.5 text-[13px] text-secondary-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              {entry.name}
            </button>
          ))}
        </div>
      ) : null}

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
