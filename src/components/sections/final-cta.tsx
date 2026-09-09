import Link from "next/link";
import { Phone } from "@untitledui/icons";
import { cn } from "@/lib/utils";
import type { SectionMeta } from "@/lib/sections/meta-types";

export type FinalCtaProps = {
  eyebrow?: string;
  heading: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  background?: string;
};

export const finalCtaMeta = {
  type: "finalCta",
  intent: "Closing call-to-action — short italic editorial line above a primary CTA and optional secondary CTA. Usually the last section of a page.",
  slots: {
    eyebrow: {
      role: "Lead-in label above the heading.",
      required: false,
      length: { chars: { max: 30 } },
    },
    heading: {
      role: "Italic closing line — terse, evocative.",
      required: true,
      length: { chars: { target: 80, max: 140 } },
    },
  },
} as const satisfies SectionMeta;

export function FinalCtaSection({
  eyebrow,
  heading,
  primaryCta,
  secondaryCta,
  background = "bg-background-soft",
}: FinalCtaProps) {
  return (
    <div className={cn("w-full", background)}>
      <section className="section-px mx-auto flex w-full max-w-layout flex-col items-center gap-8 section-py text-center">
        {eyebrow ? (
          <p className="text-eyebrow text-primary">{eyebrow}</p>
        ) : null}
        <h2 className="font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-light italic leading-[1.3] text-secondary-foreground max-w-xl">
          {heading}
        </h2>
        <div className="flex flex-col items-center gap-3">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-[13px] tracking-wide text-background transition-opacity hover:opacity-75"
          >
            {/* Un CTA qui pointe vers un `tel:` porte son icône, sans que la
                page ait à la déclarer. */}
            {primaryCta.href.startsWith("tel:") ? (
              <Phone aria-hidden className="size-4" />
            ) : null}
            {primaryCta.label}
          </Link>
          {secondaryCta ? (
            <Link
              href={secondaryCta.href}
              className="text-[13px] tracking-wide text-secondary-foreground transition-colors hover:text-foreground"
            >
              {secondaryCta.label}
            </Link>
          ) : null}
        </div>
      </section>
    </div>
  );
}
