"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Star } from "lucide-react";
import { TextBlock } from "@/components/blocks/text-block";
import { Recommended } from "@/components/blocks/recommended";
import {
  FeatureTrio,
  type FeatureTrioItem,
} from "@/components/blocks/feature-trio";
import { Button, buttonVariants } from "@/components/ui/button";
import { IconPillButton } from "@/components/ui/icon-pill-button";
import { SimpleHeader } from "@/components/sections/simple-header";
import { cn } from "@/lib/utils";
import type { SectionMeta } from "@/lib/sections/meta-types";
import { DiscoverModal, type DiscoverItem } from "./discover-modal";

export type HeroLandingProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  cta: { label: string; href: string };
  rating?: { score: number; label: string };
  partners?: {
    title?: string;
    logos?: { src: string; alt: string; width: number; height: number }[];
  };
  features?: FeatureTrioItem[];
  slides: { image: { src: string; alt: string } }[];
  contactCta?: {
    label: string;
    href: string;
    avatar?: { src: string; alt: string };
    statusOnline?: boolean;
  };
  floatingCta?: { label: string; href: string };
  discover?: {
    title: string;
    items: DiscoverItem[];
    bottomCta?: { label: string; href: string };
  };
  background?: string;
};

export const heroLandingMeta = {
  type: "heroLanding",
  intent:
    "Homepage hero — postcard-style brand card overlaid on a horizontal-scroll destination carousel. The card content is brand-level (fixed); slides are destination teasers each carrying their own 'Découvrir <X>' CTA.",
  slots: {
    eyebrow: {
      role: "Brand-level eyebrow above the h1.",
      required: false,
      length: { chars: { max: 60 } },
    },
    heading: {
      role: "Page <h1> — the brand pitch line.",
      required: true,
      length: { chars: { target: 30, max: 80 } },
    },
    description: {
      role: "Brand description under the h1.",
      required: false,
      length: { chars: { target: 180, max: 280 } },
    },
    slides: {
      role: "Carousel slides — each a destination teaser.",
      required: true,
      itemCount: { min: 2, max: 8 },
      perItem: {
        role: "One destination slide.",
        required: true,
        slots: {
          image: {
            role: "Slide background image.",
            required: true,
            image: { role: "atmospheric destination shot", ratio: "1:1" },
          },
        },
      },
    },
  },
} as const satisfies SectionMeta;

const STAMP_EDGE_STYLE: React.CSSProperties = {
  WebkitMaskImage: `radial-gradient(circle 6px at 14px 0, transparent 6px, black 6.5px), radial-gradient(circle 6px at 14px 12px, transparent 6px, black 6.5px), linear-gradient(black, black)`,
  WebkitMaskSize: `28px 12px, 28px 12px, 100% calc(100% - 12px)`,
  WebkitMaskRepeat: `repeat-x, repeat-x, no-repeat`,
  WebkitMaskPosition: `0 0, 0 100%, 0 6px`,
  maskImage: `radial-gradient(circle 6px at 14px 0, transparent 6px, black 6.5px), radial-gradient(circle 6px at 14px 12px, transparent 6px, black 6.5px), linear-gradient(black, black)`,
  maskSize: `28px 12px, 28px 12px, 100% calc(100% - 12px)`,
  maskRepeat: `repeat-x, repeat-x, no-repeat`,
  maskPosition: `0 0, 0 100%, 0 6px`,
  boxShadow:
    "0 0 12px 0 rgba(54, 46, 38, 0.05), 0 0 4px 0 rgba(94, 50, 6, 0.05)",
};

function RatingBlock({ score, label }: { score: number; label: string }) {
  return (
    <div className="flex items-center gap-2 text-secondary-foreground">
      <div className="flex items-center gap-0.5">
        <Star
          className="size-4 text-primary"
          fill="currentColor"
          strokeWidth={0}
        />
        <span className="font-medium text-foreground">
          {score.toLocaleString("fr-FR", { minimumFractionDigits: 1 })}
        </span>
      </div>
      <span aria-hidden>·</span>
      <span>{label}</span>
    </div>
  );
}

function BrandContent({
  eyebrow,
  heading,
  description,
  cta,
  rating,
}: Pick<HeroLandingProps, "eyebrow" | "heading" | "description" | "cta" | "rating">) {
  return (
    <>
      <TextBlock
        align="center"
        eyebrow={eyebrow}
        heading={heading}
        headingLevel="h1"
        headingSize="h2"
        paragraph={description}
      />
      <Link
        href={cta.href}
        className={cn(buttonVariants(), "bg-foreground text-background")}
      >
        {cta.label}
      </Link>
      {rating ? <RatingBlock score={rating.score} label={rating.label} /> : null}
    </>
  );
}

function Card({
  eyebrow,
  heading,
  description,
  cta,
  rating,
  partners,
  features,
  className,
}: Pick<
  HeroLandingProps,
  "eyebrow" | "heading" | "description" | "cta" | "rating" | "partners" | "features"
> & { className?: string }) {
  return (
    <div
      className={cn(
        "bg-background pt-14 pb-10 px-10 flex flex-col gap-6 items-center text-center",
        className,
      )}
      style={STAMP_EDGE_STYLE}
    >
      <BrandContent
        eyebrow={eyebrow}
        heading={heading}
        description={description}
        cta={cta}
        rating={rating}
      />
      <Recommended
        title={partners?.title ?? ""}
        logos={partners?.logos}
        className="w-full"
      />
      {features && features.length > 0 ? (
        <>
          <div
            aria-hidden
            className="w-full border-t border-dashed border-border"
          />
          <FeatureTrio
            items={features}
            className="w-full text-left md:grid-cols-1"
          />
        </>
      ) : null}
    </div>
  );
}

export function HeroLanding({
  eyebrow,
  heading,
  description,
  cta,
  rating,
  partners,
  features,
  slides,
  contactCta,
  floatingCta,
  discover,
  background,
}: HeroLandingProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [discoverOpen, setDiscoverOpen] = useState(false);
  const hasCarousel = slides.length > 1;

  useEffect(() => {
    if (!hasCarousel) return;
    const el = scrollerRef.current;
    if (!el) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const slidesEls = el.querySelectorAll<HTMLElement>("[data-slide]");
        const target = el.scrollLeft;
        let closest = 0;
        let min = Infinity;
        slidesEls.forEach((slide, i) => {
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

  const computeSlideScrollLeft = (slide: HTMLElement, scroller: HTMLElement) => {
    const snapAlign = getComputedStyle(slide).scrollSnapAlign;
    if (snapAlign.includes("center")) {
      return slide.offsetLeft + slide.offsetWidth / 2 - scroller.clientWidth / 2;
    }
    return slide.offsetLeft;
  };

  const scrollToIndex = (i: number, behavior: ScrollBehavior = "smooth") => {
    const el = scrollerRef.current;
    if (!el) return;
    const slide = el.querySelectorAll<HTMLElement>("[data-slide]")[i];
    if (!slide) return;
    el.scrollTo({ left: computeSlideScrollLeft(slide, el), behavior });
  };

  useLayoutEffect(() => {
    if (slides.length < 2) return;
    const el = scrollerRef.current;
    if (!el) return;
    const slide = el.querySelectorAll<HTMLElement>("[data-slide]")[1];
    if (!slide) return;
    el.scrollTo({
      left: computeSlideScrollLeft(slide, el),
      behavior: "instant",
    });
    setActive(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goNext = () => {
    if (!hasCarousel) return;
    const next = (active + 1) % slides.length;
    scrollToIndex(next);
  };

  return (
    <section className={cn("relative w-full md:h-screen", background)}>
      {contactCta ? <SimpleHeader contactCta={contactCta} /> : null}

      <div className="flex flex-col items-center gap-6 px-6 pt-12 text-center md:hidden">
        <BrandContent
          eyebrow={eyebrow}
          heading={heading}
          description={description}
          cta={cta}
          rating={rating}
        />
      </div>

      <div className="mt-10 md:mt-0 md:absolute md:inset-x-0 md:top-40 md:bottom-20">
        <div className="relative md:h-full">
          <div
            ref={scrollerRef}
            data-hero-landing-scroller
            className="snap-x snap-mandatory overflow-x-auto scroll-smooth scroll-px-[7.5vw] [&::-webkit-scrollbar]:hidden [scrollbar-width:none] md:scroll-px-0 md:h-full"
          >
            <div className="flex gap-3 px-[7.5vw] md:px-0 md:h-full">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  data-slide
                  className="relative aspect-square w-[85vw] shrink-0 snap-center overflow-hidden bg-muted md:h-full md:w-auto md:snap-start"
                >
                  <Image
                    src={slide.image.src}
                    alt={slide.image.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    priority={i <= 1}
                  />
                </div>
              ))}
            </div>
          </div>

          {slides.length > 1 ? (
            <script
              // Pre-hydration: snap to slide index 1 before React loads, so the
              // server-painted state never shows slide 0 first. useLayoutEffect
              // runs again on hydration as a belt-and-suspenders check.
              dangerouslySetInnerHTML={{
                __html: `(function(){var s=document.querySelector('[data-hero-landing-scroller]');if(!s)return;var i=s.querySelectorAll('[data-slide]')[1];if(!i)return;var a=window.getComputedStyle(i).scrollSnapAlign;var prev=s.style.scrollBehavior;s.style.scrollBehavior='auto';s.scrollLeft=a.indexOf('center')!==-1?i.offsetLeft+i.offsetWidth/2-s.clientWidth/2:i.offsetLeft;s.style.scrollBehavior=prev;})();`,
              }}
            />
          ) : null}

          {hasCarousel ? (
            <Button
              type="button"
              variant="outline"
              aria-label="Voir la destination suivante"
              onClick={goNext}
              className="absolute top-1/2 right-6 z-20 hidden aspect-square size-12 -translate-y-1/2 border-0 px-0 shadow-deep md:flex"
            >
              <ChevronRight className="size-5" />
            </Button>
          ) : null}

          {floatingCta ? (
            discover ? (
              <IconPillButton
                onClick={() => setDiscoverOpen(true)}
                className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 md:right-6 md:left-auto md:translate-x-0"
              >
                {floatingCta.label}
              </IconPillButton>
            ) : (
              <IconPillButton
                href={floatingCta.href}
                className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 md:right-6 md:left-auto md:translate-x-0"
              >
                {floatingCta.label}
              </IconPillButton>
            )
          ) : null}

          <div className="pointer-events-none absolute inset-x-0 -inset-y-10 z-10 hidden md:flex">
            <div className="section-px mx-auto flex w-full max-w-layout">
              <div className="pointer-events-auto w-[clamp(360px,32vw,440px)]">
                <Card
                  className="h-full"
                  eyebrow={eyebrow}
                  heading={heading}
                  description={description}
                  cta={cta}
                  rating={rating}
                  partners={partners}
                  features={features}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center px-6 pb-12 md:hidden">
        <Recommended title="" logos={partners?.logos} />
      </div>

      {discover ? (
        <DiscoverModal
          open={discoverOpen}
          onOpenChange={setDiscoverOpen}
          title={discover.title}
          items={discover.items}
          bottomCta={discover.bottomCta}
        />
      ) : null}
    </section>
  );
}
