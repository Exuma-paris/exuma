import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type FeatureCardProps = {
  title: string;
  description: React.ReactNode;
  image: { src: string; alt: string; position?: string };
  link?: { label: string; href: string };
  /** Frise des douze mois sous l'image : mois entiers et mois en partie. */
  months?: { full: number[]; partial?: number[] };
  /** Cadrage de l'image. Carré par défaut, comme dans le carrousel. */
  ratio?: string;
  /** Largeur rendue, à ajuster selon le conteneur (carrousel ou grille). */
  sizes?: string;
  className?: string;
};

const MONTH_INITIALS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

function MonthStrip({ full, partial = [] }: { full: number[]; partial?: number[] }) {
  return (
    // Décoratif pour un lecteur d'écran : le titre de la carte dit déjà la période.
    <div aria-hidden className="grid grid-cols-12 gap-0.5">
      {MONTH_INITIALS.map((initial, i) => (
        <span
          key={i}
          className={cn(
            "text-center text-[10px] leading-5",
            full.includes(i + 1)
              ? "bg-primary text-primary-foreground"
              : partial.includes(i + 1)
                ? "bg-primary/30 text-foreground"
                : "bg-background-soft text-secondary-foreground",
          )}
        >
          {initial}
        </span>
      ))}
    </div>
  );
}

export function FeatureCard({
  title,
  description,
  image,
  link,
  months,
  ratio = "aspect-square",
  sizes = "(min-width: 1024px) 33vw, 100vw",
  className,
}: FeatureCardProps) {
  return (
    // h-full + mt-auto : dans une rangée de cartes, les liens « Découvrir »
    // s'alignent en bas quelle que soit la longueur des descriptions.
    <article className={cn("flex h-full flex-col gap-4 pb-4", className)}>
      <div className={cn("relative w-full overflow-hidden bg-muted", ratio)}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          className="object-cover"
          style={image.position ? { objectPosition: image.position } : undefined}
        />
      </div>
      {months ? <MonthStrip {...months} /> : null}
      <div className="flex flex-col gap-2">
        <h3 className="text-h4">{title}</h3>
        <p className="max-w-120 text-secondary-foreground">{description}</p>
      </div>
      {link ? (
        <Link
          href={link.href}
          className={cn(buttonVariants({ variant: "link" }), "mt-auto self-start pt-2")}
        >
          {link.label}
        </Link>
      ) : null}
    </article>
  );
}
