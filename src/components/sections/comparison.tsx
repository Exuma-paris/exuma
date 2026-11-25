import Link from "next/link";
import { TextBlock } from "@/components/blocks/text-block";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { SectionMeta } from "@/lib/sections/meta-types";

export type ComparisonSectionProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  /** Intitulés des deux offres comparées, dans l'ordre des colonnes. */
  columns: [string, string];
  /** Colonne mise en valeur (0 ou 1). Par défaut, la seconde. */
  highlight?: 0 | 1;
  rows: { label: string; detail?: string; values: [string, string] }[];
  /** Petite ligne sous le tableau (source, conditions). */
  note?: string;
  cta?: { label: string; href: string };
  background?: string;
};

export const comparisonMeta = {
  type: "comparison",
  intent:
    "Side-by-side comparison of two offers, one row per criterion, the featured offer highlighted. For showing what a higher tier adds, not for listing features.",
  slots: {
    eyebrow: {
      role: "Lead-in label above the heading.",
      required: false,
      length: { chars: { max: 60 } },
    },
    heading: {
      role: "Section <h2>.",
      required: true,
      length: { chars: { max: 70 } },
    },
    rows: {
      role: "Criteria compared, one per row.",
      required: true,
      itemCount: { min: 3, max: 12 },
      perItem: {
        role: "Criterion label and the value of each offer.",
        required: true,
        length: { chars: { max: 120 } },
      },
    },
  },
} as const satisfies SectionMeta;

/**
 * Tableau à deux offres. Sur grand écran, une ligne par critère et une colonne
 * par offre, la colonne mise en valeur sur un fond plus soutenu qui court du
 * haut en bas. Sur téléphone, chaque critère s'empile et chaque valeur porte
 * le nom de son offre, puisque les en-têtes ne sont plus visibles.
 */
export function ComparisonSection({
  eyebrow,
  heading,
  description,
  columns,
  highlight = 1,
  rows,
  note,
  cta,
  background,
}: ComparisonSectionProps) {
  const cell = (i: number) =>
    i === highlight
      ? "bg-foreground text-background"
      : "text-secondary-foreground";

  return (
    <div className={cn("w-full", background)}>
      <section className="section-px mx-auto flex w-full max-w-layout flex-col gap-10 section-py">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <TextBlock
            align="left"
            eyebrow={eyebrow}
            heading={heading}
            headingLevel="h2"
            paragraph={description}
          />
          {cta ? (
            <Link
              href={cta.href}
              className={cn(buttonVariants(), "bg-foreground text-background")}
            >
              {cta.label}
            </Link>
          ) : null}
        </div>

        <div role="table" aria-label={heading} className="flex flex-col">
          {/* En-têtes de colonnes, grand écran seulement. */}
          <div
            role="row"
            className="hidden md:grid md:grid-cols-[1fr_1.3fr_1.3fr]"
          >
            <span role="columnheader" className="sr-only">
              Critère
            </span>
            {columns.map((label, i) => (
              <span
                key={label}
                role="columnheader"
                className={cn(
                  "px-6 pt-6 pb-4 text-eyebrow",
                  i === highlight
                    ? "bg-foreground text-background/70"
                    : "text-primary",
                  i === 0 && "md:col-start-2",
                )}
              >
                {label}
              </span>
            ))}
          </div>

          {rows.map((row, r) => (
            <div
              key={row.label}
              role="row"
              className={cn(
                "grid gap-3 border-t border-border py-5 md:grid-cols-[1fr_1.3fr_1.3fr] md:gap-0 md:py-0",
                r === rows.length - 1 && "border-b",
              )}
            >
              <div role="rowheader" className="flex flex-col gap-1 md:py-5 md:pr-6">
                <span className="text-[15px] font-medium text-foreground">
                  {row.label}
                </span>
                {row.detail ? (
                  <span className="text-[13px] text-secondary-foreground">
                    {row.detail}
                  </span>
                ) : null}
              </div>
              {row.values.map((value, i) => (
                <div
                  key={i}
                  role="cell"
                  className={cn(
                    "flex flex-col gap-1 px-4 py-3 md:px-6 md:py-5",
                    cell(i),
                    i === highlight && "font-medium",
                  )}
                >
                  <span
                    className={cn(
                      "text-[11px] tracking-wide uppercase md:hidden",
                      i === highlight ? "text-background/60" : "text-primary",
                    )}
                  >
                    {columns[i]}
                  </span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {note ? (
          <p className="text-[13px] text-secondary-foreground">{note}</p>
        ) : null}
      </section>
    </div>
  );
}
