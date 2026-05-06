import Image from "next/image";
import { cn } from "@/lib/utils";

export type ImageTrioProps = {
  eyebrow?: string;
  heading?: string;
  description?: string;
  images: [
    { src: string; alt: string },
    { src: string; alt: string },
    { src: string; alt: string },
  ];
  background?: string;
};

export function ImageTrioSection({
  eyebrow,
  heading,
  description,
  images,
  background,
}: ImageTrioProps) {
  return (
    <div className={cn("w-full", background)}>
      {(eyebrow || heading || description) && (
        <div className="section-px mx-auto w-full max-w-layout pb-8 pt-30">
          <div className="flex flex-col gap-3">
            {eyebrow ? (
              <p className="text-eyebrow text-primary">{eyebrow}</p>
            ) : null}
            {heading ? <h2 className="text-h2 max-w-180">{heading}</h2> : null}
            {description ? (
              <p className="max-w-120 text-secondary-foreground">{description}</p>
            ) : null}
          </div>
        </div>
      )}
      <div className="grid grid-cols-3 gap-px pb-30">
        {images.map((img, i) => (
          <div key={i} className="relative aspect-3/4 overflow-hidden bg-muted">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
