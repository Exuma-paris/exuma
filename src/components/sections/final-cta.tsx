import Link from "next/link";
import { cn } from "@/lib/utils";

export type FinalCtaProps = {
  eyebrow?: string;
  heading: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  background?: string;
};

export function FinalCtaSection({
  eyebrow,
  heading,
  primaryCta,
  secondaryCta,
  background = "bg-background-soft",
}: FinalCtaProps) {
  return (
    <div className={cn("w-full", background)}>
      <section className="section-px mx-auto flex w-full max-w-layout flex-col items-center gap-8 py-30 text-center">
        {eyebrow ? (
          <p className="text-eyebrow text-primary">{eyebrow}</p>
        ) : null}
        <h2 className="font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-light italic leading-[1.3] text-secondary-foreground max-w-xl">
          {heading}
        </h2>
        <div className="flex flex-col items-center gap-3">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-[11px] tracking-widest uppercase text-background transition-opacity hover:opacity-75"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta ? (
            <Link
              href={secondaryCta.href}
              className="text-[11px] tracking-wide text-secondary-foreground transition-colors hover:text-foreground"
            >
              {secondaryCta.label}
            </Link>
          ) : null}
        </div>
      </section>
    </div>
  );
}
