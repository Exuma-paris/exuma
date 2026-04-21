import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type FeatureCardProps = {
  title: string;
  description: string;
  image: { src: string; alt: string };
  link?: { label: string; href: string };
  className?: string;
};

export function FeatureCard({
  title,
  description,
  image,
  link,
  className,
}: FeatureCardProps) {
  return (
    <article className={cn("flex flex-col gap-4 pb-4", className)}>
      <div className="relative aspect-square w-full overflow-hidden bg-muted">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-h4">{title}</h3>
        <p className="max-w-120 text-secondary-foreground">{description}</p>
      </div>
      {link ? (
        <Link
          href={link.href}
          className={cn(buttonVariants({ variant: "link" }), "mt-2 self-start")}
        >
          {link.label}
        </Link>
      ) : null}
    </article>
  );
}
