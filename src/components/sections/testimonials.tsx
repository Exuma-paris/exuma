"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  TestimonialCard,
  type TestimonialCardProps,
} from "@/components/blocks/testimonial-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type TestimonialsSectionProps = {
  eyebrow?: string;
  heading: string;
  cta?: { label: string; href: string };
  testimonials: TestimonialCardProps[];
  background?: string;
};

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
      <div className="mx-auto flex w-full max-w-layout flex-col items-start gap-6 section-px pt-30 md:flex-row md:items-end md:justify-between">
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
        <div className="mx-auto flex w-full max-w-layout justify-end gap-2 section-px pt-10 pb-30">
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
        <div className="pb-30" />
      )}
    </div>
  );
}
