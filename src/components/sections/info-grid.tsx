"use client";

import Link from "next/link";
import { TextBlock } from "@/components/blocks/text-block";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
  background?: string;
};

export function InfoGridSection({
  eyebrow,
  heading,
  description,
  cta,
  items,
  background,
}: InfoGridSectionProps) {
  return (
    <div className={cn("w-full", background)}>
      <section className="section-px mx-auto flex w-full max-w-layout flex-col gap-10 py-30">
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

        <div className="grid grid-cols-1 border-t border-l border-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 border-r border-b border-border p-6"
            >
              <div className="text-foreground [&>svg]:size-5">{item.icon}</div>
              <h3 className="text-foreground">{item.title}</h3>
              <p className="text-secondary-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
