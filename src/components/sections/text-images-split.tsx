import Image from "next/image";
import { TextBlock } from "@/components/blocks/text-block";
import { cn } from "@/lib/utils";
import type { SectionMeta } from "@/lib/sections/meta-types";

export type TextImagesSplitSectionProps = {
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
  images: [
    { src: string; alt: string },
    { src: string; alt: string },
  ];
  theme?: "light" | "dark";
  background?: string;
};

export const textImagesSplitMeta = {
  type: "textImagesSplit",
  intent: "Editorial spread — paired portrait + square image collage on one side, heading + 2 paragraphs on the other.",
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
                sizes="(min-width: 768px) 25vw, 60vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <TextBlock
            align="left"
            eyebrow={eyebrow}
            eyebrowTone={isDark ? "foreground" : "primary"}
            heading={heading}
            headingLevel="h2"
          />
          <div className="flex flex-col gap-6 text-secondary-foreground md:pl-25">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
