import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { SectionMeta } from "@/lib/sections/meta-types";

export type SpotsListItem = {
  title: string;
  description: string;
};

export type SpotsListSectionProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  cta?: { label: string; href: string };
  spots: SpotsListItem[];
  background?: string;
};

export const spotsListMeta = {
  type: "spotsList",
  intent: "Editorial list of named spots — title-on-left + description-on-right rows. No images. Used for short, dense itineraries or recommendation lists.",
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
    description: {
      role: "Optional sub-paragraph under the heading.",
      required: false,
      length: { chars: { target: 220, max: 320 } },
    },
    spots: {
      role: "List rows.",
      required: true,
      itemCount: { min: 4, max: 12 },
      perItem: {
        role: "One spot — short title + one-paragraph description.",
        required: true,
        slots: {
          title: {
            role: "Spot name.",
            required: true,
            length: { chars: { max: 50 } },
          },
          description: {
            role: "What this spot is and why it matters.",
            required: true,
            length: { chars: { target: 180, max: 320, min: 80 } },
          },
        },
      },
    },
  },
} as const satisfies SectionMeta;

export function SpotsListSection({
  eyebrow,
  heading,
  description,
  cta,
  spots,
  background,
}: SpotsListSectionProps) {
  return (
    <div className={cn("w-full", background)}>
      <section className="section-px mx-auto flex w-full max-w-layout flex-col gap-10 py-30">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            {eyebrow ? (
              <p className="text-eyebrow text-primary">{eyebrow}</p>
            ) : null}
            <h2 className="text-h2 max-w-180">{heading}</h2>
            {description ? (
              <p className="max-w-120 text-secondary-foreground">{description}</p>
            ) : null}
          </div>
          {cta ? (
            <Link href={cta.href} className={cn(buttonVariants())}>
              {cta.label}
            </Link>
          ) : null}
        </div>

        <ul className="flex flex-col gap-px border-t border-border">
          {spots.map((spot, i) => (
            <li
              key={i}
              className="flex flex-col gap-3 border-b border-border py-8 md:flex-row md:gap-16"
            >
              <h3 className="w-full shrink-0 text-[15px] font-medium text-foreground md:w-48">
                {spot.title}
              </h3>
              <p className="text-[14px] leading-[1.75] text-secondary-foreground">
                {spot.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
