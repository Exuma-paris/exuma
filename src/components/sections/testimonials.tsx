"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "@untitledui/icons";
import {
  TestimonialCard,
  type TestimonialCardProps,
} from "@/components/blocks/testimonial-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { SectionMeta } from "@/lib/sections/meta-types";

export type TestimonialsSectionProps = {
  eyebrow?: string;
  heading: string;
  cta?: { label: string; href: string };
  testimonials: TestimonialCardProps[];
  background?: string;
};

export const testimonialsMeta = {
  type: "testimonials",
  intent: "Customer testimonials carousel — first-person voice with a portrait, name, and trip context.",
  slots: {
    eyebrow: {
      role: "Lead-in label above the heading.",
      required: false,
      length: { chars: { max: 30 } },
    },
    heading: {
      role: "Section <h2>.",
      required: true,
      length: { chars: { max: 60 } },
    },
    testimonials: {
      role: "Customer testimonials.",
      required: true,
      itemCount: { exact: 3, min: 1, max: 6 },
      perItem: {
        role: "One testimonial — real customer voice.",
        required: true,
        slots: {
          quote: {
            role: "First-person quote with small details and slightly imperfect rhythm.",
            required: true,
            length: { chars: { target: 280, max: 480, min: 140 } },
          },
          name: {
            role: "Customer first name (or first name + initial).",
            required: true,
            length: { chars: { max: 30 } },
          },
          role: {
            role: "Trip context (e.g. 'Voyage de noces, octobre 2025').",
            required: false,
            length: { chars: { max: 60 } },
          },
          image: {
            role: "Customer portrait. May reuse a hero image when no real portrait exists.",
            required: true,
            image: { role: "portrait", ratio: "1:1" },
          },
        },
      },
    },
  },
} as const satisfies SectionMeta;

export function TestimonialsSection({
  eyebrow,
  heading,
  cta,
  testimonials,
  background,
}: TestimonialsSectionProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const hasCarousel = testimonials.length > 1;

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const slides = el.querySelectorAll<HTMLElement>("[data-slide]");
        const center = el.scrollLeft + el.clientWidth / 2;
        let closest = 0;
        let min = Infinity;
        slides.forEach((slide, i) => {
          const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
          const delta = Math.abs(slideCenter - center);
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
    const left = slide.offsetLeft - (el.clientWidth - slide.offsetWidth) / 2;
    el.scrollTo({ left, behavior: "smooth" });
  };

  const go = (direction: 1 | -1) => {
    const next =
      (active + direction + testimonials.length) % testimonials.length;
    scrollToIndex(next);
  };

  return (
    <div className={cn("w-full overflow-hidden", background)}>
      <div className="mx-auto flex w-full max-w-layout flex-col items-start gap-6 section-px section-pt md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-3">
          {eyebrow ? (
            <p className="text-eyebrow text-primary">{eyebrow}</p>
          ) : null}
          <h2 className="text-h2 max-w-180">{heading}</h2>
        </div>
        {cta ? (
          <Link href={cta.href} className={cn(buttonVariants())}>
            {cta.label}
          </Link>
        ) : null}
      </div>

      {hasCarousel ? (
        <div
          ref={scrollerRef}
          className="mt-10 snap-x snap-mandatory overflow-x-auto scroll-smooth scroll-px-[max(var(--section-gutter),calc((100vw-var(--container-layout))/2+var(--section-gutter)))] [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
        >
          <div className="flex gap-3 px-[max(var(--section-gutter),calc((100vw-var(--container-layout))/2+var(--section-gutter)))]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                data-slide
                className="w-[calc(100vw-(var(--section-gutter)*2))] max-w-[calc(var(--container-layout)-(var(--section-gutter)*2))] shrink-0 snap-center snap-always"
              >
                <TestimonialCard {...t} />
              </div>
            ))}
            <div
              aria-hidden
              className="w-[max(var(--section-gutter),calc((100vw-var(--container-layout))/2+var(--section-gutter)))] shrink-0"
            />
          </div>
        </div>
      ) : (
        <div className="section-px mx-auto mt-10 w-full max-w-layout">
          <TestimonialCard {...testimonials[0]} />
        </div>
      )}

      {hasCarousel ? (
        <div className="mx-auto flex w-full max-w-layout justify-end gap-2 section-px pt-10 section-pb">
          <Button
            variant="outline"
            className="aspect-square border-0 px-0 shadow-deep"
            aria-label="Témoignage précédent"
            onClick={() => go(-1)}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            className="aspect-square border-0 px-0 shadow-deep"
            aria-label="Témoignage suivant"
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
