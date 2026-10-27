import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { TextBlock } from "@/components/blocks/text-block";
import { cn } from "@/lib/utils";
import type { SectionMeta } from "@/lib/sections/meta-types";

export type TextImagesSplitSectionProps = {
  eyebrow?: string;
  heading: string;
  /** A paragraph may carry a short label, set above it as a sub-heading. */
  paragraphs: (string | { label: string; text: string })[];
  /** Two images form the stacked pair; a single image fills the column. */
  images:
    | [{ src: string; alt: string }, { src: string; alt: string }]
    | [{ src: string; alt: string }];
  /** Optional link under the paragraphs. */
  cta?: { label: string; href: string };
  theme?: "light" | "dark";
  background?: string;
};

export const textImagesSplitMeta = {
  type: "textImagesSplit",
  intent:
    "Editorial spread — paired portrait + square image collage on one side, heading + 2 paragraphs on the other.",
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
    paragraphs: {
      role: "Editorial paragraphs.",
      required: true,
      itemCount: { exact: 2 },
      perItem: {
        role: "One editorial paragraph.",
        required: true,
        length: { chars: { target: 280, max: 480, min: 180 } },
      },
    },
    images: {
      role: "Image pair (portrait foreground + square background).",
      required: true,
      itemCount: { exact: 2 },
      perItem: {
        role: "One image of the pair.",
        required: true,
        image: { role: "editorial pair (1: portrait 3:4, 2: square 1:1)" },
      },
    },
  },
} as const satisfies SectionMeta;

export function TextImagesSplitSection({
  eyebrow,
  heading,
  paragraphs,
  images,
  cta,
  theme = "light",
  background,
}: TextImagesSplitSectionProps) {
  const isDark = theme === "dark";
  return (
    <div
      className={cn(
        "w-full",
        isDark && "bg-foreground text-background",
        background,
      )}
    >
      <section className="section-px mx-auto grid w-full max-w-layout gap-5 section-py md:grid-cols-2">
        {images.length === 1 ? (
          <div className="relative aspect-4/5 w-full overflow-hidden md:self-center">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="relative aspect-square w-full md:aspect-4/5">
            <div className="absolute top-0 left-10 w-[55%]">
              <div className="relative aspect-3/4 w-full overflow-hidden bg-muted">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 55vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-[60%]">
              <div className="relative aspect-square w-full overflow-hidden bg-muted">
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  fill
                  // 60% of a half-width grid column ≈ 27vw, so 25vw fell just short
                  // and this tile upscaled slightly. Sibling above is 55% ≈ 25vw.
                  sizes="(min-width: 768px) 28vw, 60vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-6">
          <TextBlock
            align="left"
            eyebrow={eyebrow}
            eyebrowTone={isDark ? "background" : "primary"}
            heading={heading}
            headingLevel="h2"
          />
          <div
            className={cn(
              "flex flex-col items-start gap-6",
              // Le décalage sous le titre répond au collage de deux images ;
              // face à une seule image, le texte reste aligné sur le titre.
              images.length === 2 && "md:pl-25",
              isDark ? "text-background/70" : "text-secondary-foreground",
            )}
          >
            {paragraphs.map((p, i) =>
              typeof p === "string" ? (
                <p key={i}>{p}</p>
              ) : (
                <div key={i} className="flex flex-col gap-2">
                  {/* Même police que le texte, un cran plus grande et plus
                      appuyée, comme les intitulés de spotsList. Pas de cn() :
                      tailwind-merge confond taille et couleur `text-*`. */}
                  <h3
                    className={`text-[15px] font-medium ${isDark ? "text-background" : "text-foreground"}`}
                  >
                    {p.label}
                  </h3>
                  <p>{p.text}</p>
                </div>
              ),
            )}
            {cta ? (
              <Link
                href={cta.href}
                className={cn(
                  buttonVariants({ variant: isDark ? "secondary" : "default" }),
                  "mt-2",
                )}
              >
                {cta.label}
              </Link>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
