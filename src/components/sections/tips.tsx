"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "@untitledui/icons";
import { TextBlock } from "@/components/blocks/text-block";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { SectionMeta } from "@/lib/sections/meta-types";

export type TipsItem = {
  title: string;
  cardEyebrow?: string;
  modalEyebrow?: string;
  shortDescription?: string;
  content: React.ReactNode;
};

export type TipsSectionProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  cta?: { label: string; href: string };
  items: TipsItem[];
  background?: string;
};

export const tipsMeta = {
  type: "tips",
  intent: "Practical tips carousel — small cards that open a modal with rich content. Used for travel-prep advice (packing, health, season, budget).",
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
      role: "Tip cards (carousel beyond what fits on screen).",
      required: true,
      itemCount: { min: 8, max: 12 },
      perItem: {
        role: "One tip card with a modal for long-form content.",
        required: true,
        slots: {
          title: {
            role: "Tip card heading.",
            required: true,
            length: { chars: { max: 40 } },
          },
          shortDescription: {
            role: "One-line teaser shown on the closed card. No period required.",
            required: false,
            length: { chars: { target: 90, max: 140 } },
          },
          cardEyebrow: {
            role: "Eyebrow on the closed card (e.g. 'Tips').",
            required: false,
            length: { chars: { max: 20 } },
          },
          modalEyebrow: {
            role: "Eyebrow inside the modal (e.g. 'Guide pratique').",
            required: false,
            length: { chars: { max: 30 } },
          },
        },
      },
    },
  },
} as const satisfies SectionMeta;

function TipCard({ item }: { item: TipsItem }) {
  return (
    <Dialog>
      <article className="flex h-full flex-col gap-3 bg-background p-6 pb-8">
        {item.cardEyebrow ? (
          <p className="text-eyebrow text-primary">{item.cardEyebrow}</p>
        ) : null}
        <h3 className="text-h4">{item.title}</h3>
        {item.shortDescription ? (
          <p className="text-secondary-foreground">{item.shortDescription}</p>
        ) : null}
        <DialogTrigger
          className={cn(
            buttonVariants({ variant: "link" }),
            "mt-2 cursor-pointer self-start",
          )}
        >
          Découvrir plus
        </DialogTrigger>
      </article>
      <DialogContent className="max-w-lg p-6">
        <DialogHeader className="gap-3">
          {item.modalEyebrow ? (
            <p className="text-eyebrow text-primary">{item.modalEyebrow}</p>
          ) : null}
          <DialogTitle className="text-h3">{item.title}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-secondary-foreground">
          {item.content}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

export function TipsSection({
  eyebrow,
  heading,
  description,
  cta,
  items,
  background,
}: TipsSectionProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [hasControls, setHasControls] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const check = () => setHasControls(el.scrollWidth > el.clientWidth + 1);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [items.length]);

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
    const track = el.firstElementChild as HTMLElement | null;
    if (!track) return;
    const padStart = parseFloat(getComputedStyle(track).paddingInlineStart);
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
      scrollToIndex(items.length - 1);
      return;
    }
    const next = (active + direction + items.length) % items.length;
    scrollToIndex(next);
  };

  return (
    <div className={cn("w-full overflow-hidden", background)}>
      <div className="mx-auto flex w-full max-w-layout flex-col items-start gap-6 section-px section-pt md:flex-row md:items-end md:justify-between">
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

      <div
        ref={scrollerRef}
        className="mt-10 snap-x snap-mandatory overflow-x-auto scroll-smooth scroll-px-[max(var(--section-gutter),calc((100vw-var(--container-layout))/2+var(--section-gutter)))] [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
      >
        <div className="flex gap-3 px-[max(var(--section-gutter),calc((100vw-var(--container-layout))/2+var(--section-gutter)))]">
          {items.map((item, i) => (
            <div
              key={i}
              data-slide
              className="w-[calc((min(100vw,var(--container-layout))-(var(--section-gutter)*2)-2.25rem)/4)] min-w-65 shrink-0 snap-start snap-always"
            >
              <TipCard item={item} />
            </div>
          ))}
          <div
            aria-hidden
            className="w-[max(var(--section-gutter),calc((100vw-var(--container-layout))/2+var(--section-gutter)))] shrink-0"
          />
        </div>
      </div>

      {hasControls ? (
        <div className="mx-auto flex w-full max-w-layout justify-end gap-2 section-px pt-10 section-pb">
          <Button
            variant="outline"
            className="aspect-square border-0 px-0 shadow-deep"
            aria-label="Conseil précédent"
            onClick={() => go(-1)}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            className="aspect-square border-0 px-0 shadow-deep"
            aria-label="Conseil suivant"
            onClick={() => go(1)}
          >
            <ChevronRight />
          </Button>
        </div>
      ) : (
        <div className="section-pb" />
      )}
    </div>
  );
}
