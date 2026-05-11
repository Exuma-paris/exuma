import Image from "next/image";
import type { SectionMeta } from "@/lib/sections/meta-types";

export type FullImageSectionProps = {
  image: { src: string; alt: string };
  height?: number;
};

export const fullImageMeta = {
  type: "fullImage",
  intent: "Full-bleed atmospheric image used as a visual breath between content blocks.",
  slots: {
    image: {
      role: "Full-bleed image.",
      required: true,
      image: { role: "atmospheric breath", ratio: "16:9" },
    },
  },
} as const satisfies SectionMeta;

export function FullImageSection({
  image,
  height = 600,
}: FullImageSectionProps) {
  return (
    <section
      className="relative w-full overflow-hidden bg-muted"
      style={{ height: `${height}px` }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
    </section>
  );
}
