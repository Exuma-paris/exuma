import Link from "next/link";
import { TextBlock } from "@/components/blocks/text-block";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type TextColumnsSectionProps = {
  eyebrow?: string;
  heading: string;
  cta?: { label: string; href: string };
  columns: string[];
  background?: string;
};

export function TextColumnsSection({
  eyebrow,
  heading,
  cta,
  columns,
  background,
}: TextColumnsSectionProps) {
  return (
    <div className={cn("w-full", background)}>
      <section className="section-px mx-auto flex w-full max-w-layout flex-col gap-10 py-16">
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
