import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type FeatureCardProps = {
  title: string;
  description: React.ReactNode;
  image: { src: string; alt: string };
  link?: { label: string; href: string };
  /** Cadrage de l'image. Carré par défaut, comme dans le carrousel. */
  ratio?: string;
  /** Largeur rendue, à ajuster selon le conteneur (carrousel ou grille). */
  sizes?: string;
  className?: string;
};

export function FeatureCard({
  title,
  description,
  image,
  link,
  ratio = "aspect-square",
  sizes = "(min-width: 1024px) 33vw, 100vw",
  className,
}: FeatureCardProps) {
  return (
    <article className={cn("flex flex-col gap-4 pb-4", className)}>
      <div className={cn("relative w-full overflow-hidden bg-muted", ratio)}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
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
