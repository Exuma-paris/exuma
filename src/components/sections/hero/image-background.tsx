"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { TextBlock } from "@/components/blocks/text-block";
import { cn } from "@/lib/utils";
import type { SectionMeta } from "@/lib/sections/meta-types";

export type HeroImageBackgroundProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  cta?: React.ReactNode;
  images: { src: string; alt: string }[];
  interval?: number;
};

export const heroImageBackgroundMeta = {
  type: "heroImageBackground",
  intent:
    "Full-screen hero with a single (or cycling) background image and centred text overlay. Used as the page opener on experience pages.",
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
      role: "Full-bleed background image (1) or cross-fade pair/trio.",
      required: true,
      itemCount: { exact: 1, min: 1, max: 3 },
      perItem: {
        role: "One full-bleed background image.",
        required: true,
        image: { role: "atmospheric full-bleed", ratio: "16:9" },
      },
    },
  },
} as const satisfies SectionMeta;

export function HeroImageBackground({
  eyebrow,
  heading,
  description,
  cta,
  images,
  interval = 5000,
}: HeroImageBackgroundProps) {
  const [active, setActive] = useState(0);
  const hasCarousel = images.length > 1;

  useEffect(() => {
    if (!hasCarousel) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [hasCarousel, images.length, interval]);

  return (
    <section className="dark relative h-screen w-full overflow-hidden bg-background text-foreground">
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={cn(
            "object-cover transition-opacity duration-1000 ease-in-out",
            i === active ? "opacity-100" : "opacity-0",
          )}
        />
      ))}

      <div aria-hidden className="absolute inset-0 bg-background/30" />

      <div className="section-px relative z-10 flex h-full w-full flex-col items-center pt-32 md:pt-40">
        <TextBlock
          align="center"
          eyebrow={eyebrow}
          eyebrowTone="foreground"
          heading={heading}
          headingLevel="h1"
          paragraph={description}
          cta={cta}
        />
      </div>

      {hasCarousel ? (
        <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Voir l'image ${i + 1}`}
              className={cn(
                "size-2 cursor-pointer rounded-full border border-foreground/80 transition-colors",
                i === active ? "bg-foreground" : "bg-transparent",
              )}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
