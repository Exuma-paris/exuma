"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TextBlock } from "@/components/blocks/text-block";
import {
  FeatureCard,
  type FeatureCardProps,
} from "@/components/blocks/feature-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type FeatureCardsSectionProps = {
  eyebrow?: string;
  heading: string;
  cta?: { label: string; href: string };
  cards: FeatureCardProps[];
  background?: string;
};

export function FeatureCardsSection({
  eyebrow,
  heading,
  cta,
  cards,
  background,
}: FeatureCardsSectionProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const hasControls = cards.length > 3;

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const track = el.firstElementChild as HTMLElement | null;
        if (!track) return;
        const padStart = parseFloat(
          getComputedStyle(track).paddingInlineStart,
        );
        const slides = el.querySelectorAll<HTMLElement>("[data-slide]");
        const target = el.scrollLeft + padStart;
        let closest = 0;
        let min = Infinity;
        slides.forEach((slide, i) => {
          const delta = Math.abs(slide.offsetLeft - target);
          if (delta < min) {
            min = delta;
            closest = i;
          }
        });
        setActive(closest);
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToIndex = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const slide = el.querySelectorAll<HTMLElement>("[data-slide]")[i];
    if (!slide) return;
    const padStart = parseFloat(
      getComputedStyle(el.firstElementChild as HTMLElement).paddingInlineStart,
    );
    el.scrollTo({ left: slide.offsetLeft - padStart, behavior: "smooth" });
  };

  const go = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (direction === 1 && el.scrollLeft >= maxScroll - 8) {
      scrollToIndex(0);
      return;
    }
    if (direction === -1 && el.scrollLeft <= 8) {
      scrollToIndex(cards.length - 1);
      return;
    }
    const next = (active + direction + cards.length) % cards.length;
    scrollToIndex(next);
  };

  return (
    <div className={cn("w-full overflow-hidden", background)}>
      <div className="mx-auto flex w-full max-w-layout flex-col items-start gap-6 section-px pt-16 md:flex-row md:items-end md:justify-between">
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

      <div
        ref={scrollerRef}
        className="mt-10 snap-x snap-mandatory overflow-x-auto scroll-smooth scroll-px-[max(var(--section-gutter),calc((100vw-var(--container-layout))/2+var(--section-gutter)))] [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
      >
        <div className="flex gap-3 px-[max(var(--section-gutter),calc((100vw-var(--container-layout))/2+var(--section-gutter)))]">
          {cards.map((card) => (
            <div
              key={card.title}
              data-slide
              className="w-[calc((min(100vw,var(--container-layout))-(var(--section-gutter)*2)-1.5rem)/3)] min-w-65 shrink-0 snap-start snap-always"
            >
              <FeatureCard {...card} />
            </div>
          ))}
          <div
            aria-hidden
            className="w-[max(var(--section-gutter),calc((100vw-var(--container-layout))/2+var(--section-gutter)))] shrink-0"
          />
        </div>
      </div>

      {hasControls ? (
        <div className="mx-auto flex w-full max-w-layout justify-end gap-2 section-px pt-10 pb-16">
          <Button
            variant="outline"
            className="aspect-square border-0 px-0 shadow-deep"
            aria-label="Voir la carte précédente"
            onClick={() => go(-1)}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            className="aspect-square border-0 px-0 shadow-deep"
            aria-label="Voir la carte suivante"
            onClick={() => go(1)}
          >
            <ChevronRight />
          </Button>
        </div>
      ) : (
        <div className="pb-16" />
      )}
    </div>
  );
}
