import Image from "next/image";
import Link from "next/link";
import { TextBlock } from "@/components/blocks/text-block";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type BentoCard = {
  title: string;
  description: string;
  image: { src: string; alt: string };
  tone?: "image" | "dark";
};

export type BentoSectionProps = {
  eyebrow?: string;
  heading: string;
  description: string;
  cta?: { label: string; href: string };
  cards: BentoCard[];
  background?: string;
};

function Card({ card, className }: { card: BentoCard; className?: string }) {
  const isDark = card.tone === "dark";
  return (
    <article
      className={cn(
        "relative flex h-80 overflow-hidden",
        isDark ? "bg-foreground text-background" : "bg-muted text-background",
        className,
      )}
    >
      <Image
        src={card.image.src}
        alt={card.image.alt}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className={cn(
          isDark ? "object-contain object-right" : "object-cover",
        )}
      />
      {!isDark ? (
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"
        />
      ) : null}
      <div className="relative mt-auto flex max-w-xs flex-col gap-2 p-6">
        <h3 className="text-h4">{card.title}</h3>
        <p className="text-[13px] opacity-80">{card.description}</p>
      </div>
    </article>
  );
}

export function BentoSection({
  eyebrow,
  heading,
  description,
  cta,
  cards,
  background,
}: BentoSectionProps) {
  const [first, second, ...rest] = cards;

  return (
    <div className={cn("w-full", background)}>
      <section className="mx-auto flex w-full max-w-layout flex-col gap-10 section-px py-30">
      <div className="flex flex-col items-center gap-6 text-center">
        <TextBlock
          align="center"
          eyebrow={eyebrow}
          heading={heading}
          headingLevel="h2"
          paragraph={description}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="grid gap-2 md:grid-cols-2">
          {first ? <Card card={first} /> : null}
          {second ? <Card card={second} /> : null}
        </div>
        {rest.length > 0 ? (
          <div className="grid gap-2 md:grid-cols-3">
            {rest.map((card) => (
              <Card key={card.title} card={card} />
            ))}
          </div>
        ) : null}
      </div>

      {cta ? (
        <div className="flex justify-center">
          <Link
            href={cta.href}
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            {cta.label}
          </Link>
        </div>
        ) : null}
      </section>
    </div>
  );
}
