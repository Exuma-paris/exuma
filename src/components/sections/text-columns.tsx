import Link from "next/link";
import { TextBlock } from "@/components/blocks/text-block";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { SectionMeta } from "@/lib/sections/meta-types";

export type TextColumnsSectionProps = {
  eyebrow?: string;
  heading: string;
  cta?: { label: string; href: string };
  columns: string[];
  background?: string;
};

export const textColumnsMeta = {
  type: "textColumns",
  intent:
    "Editorial bridge or page intro — a heading and three short paragraphs that introduce a thesis.",
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
    columns: {
      role: "Editorial paragraphs (3-column grid on desktop).",
      required: true,
      itemCount: { exact: 3 },
      perItem: {
        role: "One editorial paragraph.",
        required: true,
        length: { chars: { target: 300, max: 480, min: 180 } },
      },
    },
  },
} as const satisfies SectionMeta;

export function TextColumnsSection({
  eyebrow,
  heading,
  cta,
  columns,
  background,
}: TextColumnsSectionProps) {
  return (
    <div className={cn("w-full", background)}>
      <section className="section-px mx-auto flex w-full max-w-layout flex-col gap-10 py-30">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <TextBlock
            align="left"
            eyebrow={eyebrow}
            heading={heading}
            headingLevel="h2"
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

        <div className="grid gap-6 md:grid-cols-3">
          {columns.map((text, i) => (
            <p key={i} className="text-secondary-foreground">
              {text}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
