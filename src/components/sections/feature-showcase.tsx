"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus } from "@untitledui/icons";
import { TextBlock } from "@/components/blocks/text-block";
import { cn } from "@/lib/utils";
import type { SectionMeta } from "@/lib/sections/meta-types";

export type FeatureShowcaseItem = {
  title: string;
  detail: React.ReactNode;
  image: { src: string; alt: string };
};

export type FeatureShowcaseProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  items: FeatureShowcaseItem[];
  background?: string;
};

export const featureShowcaseMeta = {
  type: "featureShowcase",
  intent:
    "Multi-item accordion on the left, image that swaps on the right. Used on experience pages to surface the role facets of the designated collaborateur.",
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
    items: {
      role: "Accordion items — typically 3 facets of a single role. Image is shared across all items on experience pages.",
      required: true,
      itemCount: { exact: 3, min: 2, max: 5 },
      perItem: {
        role: "One accordion item — title that toggles + rich detail block.",
        required: true,
        slots: {
          title: {
            role: "Accordion trigger label.",
            required: true,
            length: { chars: { max: 50 } },
          },
          image: {
            role: "Image displayed when this item is active. On experience pages, all 3 items reuse the collaborateur's portrait.",
            required: true,
            image: { role: "portrait or in-situ", ratio: "1:1" },
          },
        },
      },
    },
  },
} as const satisfies SectionMeta;

export function FeatureShowcase({
  eyebrow,
  heading,
  description,
  items,
  background,
}: FeatureShowcaseProps) {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <div className={cn("w-full", background)}>
      <section className="mx-auto grid w-full max-w-layout gap-10 section-px section-py md:grid-cols-2 md:gap-16 md:items-stretch">
        <div className="flex flex-col gap-10">
          <TextBlock
            align="left"
            eyebrow={eyebrow}
            heading={heading}
            headingLevel="h2"
            paragraph={description}
          />

          <ul className="flex flex-col">
            {items.map((item, i) => {
              const isActive = i === active;
              return (
                <li key={i} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-expanded={isActive}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left transition-colors hover:text-foreground/80"
                  >
                    <span>{item.title}</span>
                    {isActive ? (
                      <Minus className="size-6 shrink-0 text-primary" />
                    ) : (
                      <Plus className="size-6 shrink-0 text-primary" />
                    )}
                  </button>
                  <div
                    className={cn(
                      "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out",
                      isActive
                        ? "grid-rows-[1fr] pb-5 opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="min-h-0 text-secondary-foreground">
                      {item.detail}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Carré sur mobile, où l'image passe sous l'accordéon. Au-dessus de
            md, elle s'aligne sur la hauteur de la colonne de gauche plutôt que
            de déborder sous elle. */}
        <div className="relative aspect-square w-full overflow-hidden bg-muted md:aspect-auto md:h-full">
          {items.map((item, i) => (
            <Image
              key={i}
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className={cn(
                "object-cover transition-opacity duration-500",
                i === active ? "opacity-100" : "opacity-0",
              )}
              priority={i === 0}
            />
          ))}
          <span className="sr-only">{current?.image.alt}</span>
        </div>
      </section>
    </div>
  );
}
