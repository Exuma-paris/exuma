"use client";

import Link from "next/link";
import { Fingerprint } from "@/components/blocks/fingerprint";
import { TextBlock } from "@/components/blocks/text-block";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { SectionMeta } from "@/lib/sections/meta-types";

export type InfoGridItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type InfoGridSectionProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  cta?: { label: string; href: string };
  items: InfoGridItem[];
  /** "dark" retourne la section sur le fond sombre de la marque. */
  theme?: "light" | "dark";
  background?: string;
};

export const infoGridMeta = {
  type: "infoGrid",
  intent: "Practical info grid — icon + short label + concise fact. Used for travel essentials (visa, flight time, currency, etc.).",
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
    theme: {
      role: "\"dark\" flips the section onto the brand's dark ground.",
      required: false,
    },
    items: {
      role: "Info cells, rendered in a 4-column grid on desktop.",
      required: true,
      itemCount: { exact: 8, min: 8, max: 8 },
      perItem: {
        role: "One info cell — icon + label + one factual sentence.",
        required: true,
        slots: {
          title: {
            role: "Cell label (e.g. 'Temps de vol', 'Visa et passeport').",
            required: true,
            length: { chars: { max: 30 } },
          },
          description: {
            role: "One short factual sentence answering the cell label.",
            required: true,
            length: { chars: { target: 100, max: 140, min: 50 } },
          },
        },
      },
    },
  },
} as const satisfies SectionMeta;

export function InfoGridSection({
  eyebrow,
  heading,
  description,
  cta,
  items,
  theme = "light",
  background,
}: InfoGridSectionProps) {
  const isDark = theme === "dark";
  return (
    <div
      className={cn(
        "relative w-full",
        isDark && "bg-foreground text-background",
        background,
      )}
    >
      <section className="section-px mx-auto flex w-full max-w-layout flex-col gap-10 section-py">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <TextBlock
            align="left"
            eyebrow={eyebrow}
            eyebrowTone={isDark ? "background" : "primary"}
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

        <div
          className={cn(
            "grid grid-cols-1 border-t border-l sm:grid-cols-2 lg:grid-cols-4",
            isDark ? "border-background/20" : "border-border",
          )}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col gap-3 border-r border-b p-6",
                isDark ? "border-background/20" : "border-border",
              )}
            >
              <div
                className={cn(
                  "[&>svg]:size-5",
                  isDark ? "text-background" : "text-foreground",
                )}
              >
                {item.icon}
              </div>
              <h3 className={isDark ? "text-background" : "text-foreground"}>
                {item.title}
              </h3>
              <p
                className={
                  isDark ? "text-background/70" : "text-secondary-foreground"
                }
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {isDark ? null : <Fingerprint />}
    </div>
  );
}
