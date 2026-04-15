import Image from "next/image";

export type FullImageSectionProps = {
  image: { src: string; alt: string };
  height?: number;
};

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
