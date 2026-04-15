"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { TextBlock } from "@/components/blocks/text-block";
import { cn } from "@/lib/utils";

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
};

export function FeatureShowcase({
  eyebrow,
  heading,
  description,
  items,
}: FeatureShowcaseProps) {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <div className="w-full">
      <section className="mx-auto grid w-full max-w-layout gap-10 section-px py-16 md:grid-cols-2 md:gap-16 md:items-start">
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

        <div className="relative aspect-square w-full overflow-hidden bg-muted">
          {items.map((item, i) => (
            <Image
              key={item.image.src}
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
