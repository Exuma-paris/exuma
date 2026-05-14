"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TextBlock } from "@/components/blocks/text-block";
import { ProgressBar } from "@/components/ui/progress-bar";
import { cn } from "@/lib/utils";
import type { SectionMeta } from "@/lib/sections/meta-types";

export type GallerySectionProps = {
  heading: string;
  description?: string;
  images: { src: string; alt: string }[];
  autoScrollInterval?: number;
  background?: string;
};

export const galleryMeta = {
  type: "gallery",
  intent:
    "Mid-page image gallery — same composition as the hero gallery but with an H2 register. Used inside experience pages to deepen the visual narrative.",
  slots: {
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
    images: {
      role: "Square-ratio gallery images (carousel beyond what fits on screen).",
      required: true,
      itemCount: { min: 3, max: 6 },
      perItem: {
        role: "One gallery image.",
        required: true,
        image: { role: "atmospheric", ratio: "1:1" },
      },
    },
  },
} as const satisfies SectionMeta;

function ImageTile({ image }: { image: { src: string; alt: string } }) {
  return (
    <div className="relative aspect-square w-full overflow-hidden bg-muted">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}

const LOCKED_EYEBROW = "Galerie";

export function GallerySection({
  heading,
  description,
  images,
  autoScrollInterval = 4000,
  background,
}: GallerySectionProps) {
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
    <div className={cn("w-full", background)}>
      <section className="flex flex-col gap-10 section-py">
        <div className="section-px mx-auto flex w-full max-w-layout flex-col items-center">
          <TextBlock
            align="center"
            eyebrow={LOCKED_EYEBROW}
            heading={heading}
            headingLevel="h2"
            paragraph={description}
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
                  <ImageTile image={img} />
                </div>
              ))}
              <div aria-hidden className="w-10 shrink-0 md:w-40 lg:w-3" />
            </div>
          </div>
        ) : (
          <div className="px-3">
            <ImageTile image={images[0]} />
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
    </div>
  );
}
