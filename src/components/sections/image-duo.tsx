import Image from "next/image";
import { cn } from "@/lib/utils";

export type ImageDuoSectionProps = {
  left: { src: string; alt: string };
  right: { src: string; alt: string };
  background?: string;
};

export function ImageDuoSection({
  left,
  right,
  background,
}: ImageDuoSectionProps) {
  return (
    <div className={cn("w-full", background)}>
      <section className="section-px mx-auto flex w-full max-w-layout gap-3 section-py">
        <div className="relative aspect-3/2 flex-[2] overflow-hidden bg-muted">
          <Image
            src={left.src}
            alt={left.alt}
            fill
            // flex-[2] of a full-width container: ≈60vw, not 50vw. Under-declaring
            // makes the browser upscale a too-small variant.
            sizes="(min-width: 768px) 60vw, 66vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-3/4 flex-1 overflow-hidden bg-muted">
          <Image
            src={right.src}
            alt={right.alt}
            fill
            // flex-1 of the same container: ≈30vw, not 25vw.
            sizes="(min-width: 768px) 30vw, 33vw"
            className="object-cover"
          />
        </div>
      </section>
    </div>
  );
}
