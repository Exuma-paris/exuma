"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TextBlock } from "@/components/blocks/text-block";
import { ProgressBar } from "@/components/ui/progress-bar";
import { cn } from "@/lib/utils";
import type { SectionMeta } from "@/lib/sections/meta-types";

export type HeroImageGalleryProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  cta?: React.ReactNode;
  images: { src: string; alt: string }[];
  autoScrollInterval?: number;
};

export const heroMeta = {
  type: "hero",
  intent: "Page opener — h1, optional subhead, and a square-ratio image gallery.",
  slots: {
    eyebrow: {
      role: "Lead-in label above the h1.",
      required: false,
      length: { chars: { max: 60 } },
    },
    heading: {
      role: "Page <h1>.",
      required: true,
      length: { chars: { target: 70, max: 120 } },
    },
    description: {
      role: "Optional subhead under the h1.",
      required: false,
      length: { chars: { target: 220, max: 280 } },
    },
    images: {
      role: "Hero gallery (auto-scrolls when length > 1).",
      required: true,
      itemCount: { exact: 3 },
      perItem: {
        role: "One hero image.",
        required: true,
        image: { role: "atmospheric", ratio: "1:1" },
      },
    },
  },
} as const satisfies SectionMeta;

/**
 * Largeurs réelles des tuiles, à garder alignées sur les classes `w-[…]` des
 * slides plus bas. Une valeur sous-estimée fait télécharger au navigateur une
 * image trop petite, qu'il agrandit ensuite : l'image paraît pixelisée.
 */
const CAROUSEL_SIZES =
  "(min-width: 1024px) calc((100vw - 3rem) / 3), (min-width: 768px) calc(100vw - 20rem), calc(100vw - 5rem)";
const SINGLE_SIZES = "calc(100vw - 1.5rem)";

function ImageTile({
  image,
  sizes,
}: {
  image: { src: string; alt: string };
  sizes: string;
}) {
  return (
    <div className="relative aspect-square w-full overflow-hidden bg-muted">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}

export function HeroImageGallery({
  eyebrow,
  heading,
  description,
  cta,
  images,
  autoScrollInterval = 4000,
}: HeroImageGalleryProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const hasCarousel = images.length > 1;

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    if (!hasCarousel) return;
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
  }, [hasCarousel]);

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

  useEffect(() => {
    if (!hasCarousel || autoScrollInterval <= 0) return;
    const id = window.setInterval(() => {
      const next = (activeRef.current + 1) % images.length;
      scrollToIndex(next);
    }, autoScrollInterval);
    return () => window.clearInterval(id);
  }, [hasCarousel, autoScrollInterval, images.length]);

  return (
    <section className="flex flex-col gap-10 pt-32 pb-6 md:pt-40 md:pb-16">
      <div className="section-px mx-auto flex w-full max-w-layout flex-col items-center">
        <TextBlock
          align="center"
          eyebrow={eyebrow}
          heading={heading}
          headingLevel="h1"
          paragraph={description}
          cta={cta}
        />
      </div>

      {hasCarousel ? (
        <div
          ref={scrollerRef}
          className="snap-x snap-mandatory overflow-x-auto scroll-smooth scroll-px-10 md:scroll-px-40 lg:scroll-px-3 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
        >
          <div className="flex gap-3 px-10 md:px-40 lg:px-3">
            {images.map((img, i) => (
              <div
                key={i}
                data-slide
                className="w-[calc(100vw-5rem)] shrink-0 snap-center snap-always md:w-[calc(100vw-20rem)] lg:w-[calc((100vw-3rem)/3)] lg:snap-start"
              >
                <ImageTile image={img} sizes={CAROUSEL_SIZES} />
              </div>
            ))}
            <div aria-hidden className="w-10 shrink-0 md:w-40 lg:w-3" />
          </div>
        </div>
      ) : (
        <div className="px-3">
          <ImageTile image={images[0]} sizes={SINGLE_SIZES} />
        </div>
      )}

      {hasCarousel ? (
        <div
          className={cn(
            "section-px mx-auto flex w-full max-w-layout justify-center",
            images.length === 3 && "lg:hidden",
          )}
        >
          <ProgressBar
            active={active}
            total={images.length}
            onSegmentSelect={scrollToIndex}
            segmentLabel={(i) => `Voir l'image ${i + 1}`}
          />
        </div>
      ) : null}
    </section>
  );
}
