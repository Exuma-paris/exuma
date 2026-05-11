"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type DiscoverItemCategory = "ile" | "hotel" | "experience" | "spot";

export type DiscoverItemRatio = "1x1" | "3x4" | "16x9";

export type DiscoverItem = {
  id: string;
  category: DiscoverItemCategory;
  eyebrow: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  imageRatio?: DiscoverItemRatio;
  lightboxImage?: { src: string; alt: string };
  cta?: { label: string; href: string };
};

const ASPECT_CLASS: Record<DiscoverItemRatio, string> = {
  "1x1": "aspect-square",
  "3x4": "aspect-3/4",
  "16x9": "aspect-16/9",
};

export type DiscoverModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  items: DiscoverItem[];
  bottomCta?: { label: string; href: string };
};

const CATEGORY_LABELS: Record<DiscoverItemCategory, string> = {
  ile: "Les îles",
  hotel: "Hotels",
  experience: "Expériences",
  spot: "Spots",
};

const CATEGORY_ORDER: DiscoverItemCategory[] = [
  "ile",
  "hotel",
  "experience",
  "spot",
];

type Filter = "all" | DiscoverItemCategory;

export function DiscoverModal({
  open,
  onOpenChange,
  title,
  items,
  bottomCta,
}: DiscoverModalProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!open) {
      setFilter("all");
      setLightboxIndex(null);
    }
  }, [open]);

  const filteredItems = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.category === filter)),
    [items, filter],
  );

  const availableCategories = useMemo(
    () =>
      CATEGORY_ORDER.filter((category) =>
        items.some((item) => item.category === category),
      ),
    [items],
  );

  const lightboxItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] ?? null : null;

  const goPrev = () => {
    setLightboxIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + filteredItems.length) % filteredItems.length,
    );
  };

  const goNext = () => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredItems.length,
    );
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex, filteredItems.length]);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Backdrop className="fixed inset-0 z-50 bg-foreground/30 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0 data-open:duration-300 data-closed:duration-200" />
        <DialogPrimitive.Popup className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-background outline-none md:inset-4 md:rounded-xl md:shadow-2xl">
          <header className="relative flex shrink-0 items-center justify-between border-b border-border px-6 py-5 md:px-10">
            {lightboxItem ? (
              <>
                <span aria-hidden className="invisible">
                  Fermer
                </span>
                <p className="absolute left-1/2 -translate-x-1/2 text-secondary-foreground">
                  {(lightboxIndex ?? 0) + 1} sur {filteredItems.length}
                </p>
              </>
            ) : (
              <DialogPrimitive.Title className="font-heading text-h4">
                {title}
              </DialogPrimitive.Title>
            )}
            <DialogPrimitive.Close
              className="flex cursor-pointer items-center gap-2 text-foreground transition-opacity hover:opacity-80"
              aria-label="Fermer la fenêtre"
            >
              <span>Fermer</span>
              <X className="size-5" />
            </DialogPrimitive.Close>
          </header>

          {!lightboxItem && bottomCta ? (
            <Link
              href={bottomCta.href}
              className={cn(
                buttonVariants(),
                "absolute bottom-6 left-1/2 z-30 -translate-x-1/2 bg-foreground text-background shadow-deep",
              )}
            >
              {bottomCta.label}
            </Link>
          ) : null}

          {lightboxItem ? (
            <LightboxView
              item={lightboxItem}
              fallbackCta={bottomCta}
              onPrev={goPrev}
              onNext={goNext}
              hasMultiple={filteredItems.length > 1}
            />
          ) : (
            <div className="flex-1 overflow-y-auto">
              <div className="px-6 py-6 md:px-10 md:py-8">
                <div className="flex flex-wrap gap-2">
                  <FilterChip
                    label="Tout voir"
                    active={filter === "all"}
                    onClick={() => setFilter("all")}
                  />
                  {availableCategories.map((category) => (
                    <FilterChip
                      key={category}
                      label={CATEGORY_LABELS[category]}
                      active={filter === category}
                      onClick={() => setFilter(category)}
                    />
                  ))}
                </div>
              </div>

              <div className="px-6 pb-24 md:columns-3 md:gap-6 md:px-10">
                {filteredItems.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    className="group/discover-card mb-8 flex w-full cursor-pointer flex-col gap-3 break-inside-avoid text-left outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:mb-6"
                  >
                    <div
                      className={cn(
                        "relative w-full overflow-hidden bg-muted",
                        ASPECT_CLASS[item.imageRatio ?? "1x1"],
                      )}
                    >
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover/discover-card:scale-[1.02]"
                      />
                    </div>
                    <p className="text-eyebrow text-primary">{item.eyebrow}</p>
                    <h3 className="text-h4">{item.title}</h3>
                    <p className="text-secondary-foreground">{item.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </DialogPrimitive.Popup>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "cursor-pointer rounded-full border px-4 py-2 text-[13px] transition-colors",
        active
          ? "border-foreground bg-foreground text-background"
          : "border-border text-foreground hover:border-foreground/40",
      )}
    >
      {label}
    </button>
  );
}

function LightboxView({
  item,
  fallbackCta,
  onPrev,
  onNext,
  hasMultiple,
}: {
  item: DiscoverItem;
  fallbackCta?: { label: string; href: string };
  onPrev: () => void;
  onNext: () => void;
  hasMultiple: boolean;
}) {
  const image = item.lightboxImage ?? item.image;
  const cta = item.cta ?? fallbackCta;
  return (
    <div className="relative flex flex-1 flex-col justify-center overflow-y-auto">
      <div className="grid w-full grid-cols-1 items-center gap-8 px-30 py-8 md:grid-cols-[1fr_320px] md:gap-12 md:px-34 md:py-12">
        <div className="relative aspect-16/9 w-full overflow-hidden bg-muted">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) calc(100vw - 320px - 12rem), 80vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="flex w-full max-w-[320px] flex-col items-center gap-4 text-center md:mx-auto md:max-w-none">
          <p className="text-eyebrow text-primary">{item.eyebrow}</p>
          <h3 className="text-h2">{item.title}</h3>
          <p className="text-secondary-foreground">{item.description}</p>
          {cta ? (
            <Link
              href={cta.href}
              className={cn(buttonVariants({ variant: "outline" }), "mt-4")}
            >
              {cta.label}
            </Link>
          ) : null}
        </div>
      </div>

      {hasMultiple ? (
        <>
          <button
            type="button"
            onClick={onPrev}
            aria-label="Précédent"
            className="absolute top-1/2 left-4 flex size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-background text-foreground transition-opacity hover:opacity-80 md:left-6"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Suivant"
            className="absolute top-1/2 right-4 flex size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-background text-foreground transition-opacity hover:opacity-80 md:right-6"
          >
            <ChevronRight className="size-5" />
          </button>
        </>
      ) : null}
    </div>
  );
}
