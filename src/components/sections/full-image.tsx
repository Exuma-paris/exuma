import Image from "next/image";
import type { SectionMeta } from "@/lib/sections/meta-types";

export type FullImageSectionProps = {
  image: { src: string; alt: string; position?: string };
  height?: number;
  /** Proportions de la bande (« 1024 / 375 »). Remplace `height` : la bande
   * suit la largeur de l'écran et l'image n'est jamais recadrée. Pour une
   * photo déjà recadrée au plus juste, quand rien ne doit sortir du cadre. */
  aspectRatio?: string;
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
  aspectRatio,
}: FullImageSectionProps) {
  return (
    <section
      className="relative w-full overflow-hidden bg-muted"
      style={aspectRatio ? { aspectRatio } : { height: `${height}px` }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="100vw"
        className="object-cover"
        style={image.position ? { objectPosition: image.position } : undefined}
      />
    </section>
  );
}
