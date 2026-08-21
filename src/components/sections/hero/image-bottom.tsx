import Image from "next/image";
import Link from "next/link";
import { TextBlock } from "@/components/blocks/text-block";
import { DestinationSearch } from "@/components/blocks/destination-search";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Cta = { label: string; href: string };

export function HeroImageBottom({
  eyebrow = "Agence voyage de luxe sur mesure",
  heading = "Créateur d'itinéraires et d'expérience inoubliables depuis 1991",
  paragraph = "Vivez l'inaccessible avec un voyage sur mesure, conçu par un travel designer. Suggestions sur mesure selon la saison, nos goûts et vos envies.",
  image = {
    src: "/hero.jpg",
    alt: "Paysage de Bora Bora avec lagon turquoise et bungalows sur pilotis",
  },
  ctas,
}: {
  eyebrow?: string;
  heading?: string;
  paragraph?: string;
  image?: { src: string; alt: string };
  /**
   * When provided, the hero offers a delegation path (talk to us) instead of
   * the self-service destination search. A conciergerie is handed a project,
   * it is not browsed — so the home passes CTAs and keeps the search in the
   * header, where looking something up actually belongs.
   */
  ctas?: { primary: Cta; secondary?: Cta };
}) {
  return (
    <section className="flex flex-col items-center gap-10 pt-32 pb-16 md:pt-40">
      <div className="section-px mx-auto flex w-full max-w-layout flex-col items-center gap-8">
        <TextBlock
          align="center"
          eyebrow={eyebrow}
          heading={heading}
          headingLevel="h1"
          paragraph={paragraph}
        />
        {ctas ? (
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href={ctas.primary.href}
              className={cn(buttonVariants({ variant: "secondary" }))}
            >
              {ctas.primary.label}
            </Link>
            {ctas.secondary ? (
              <Link
                href={ctas.secondary.href}
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                {ctas.secondary.label}
              </Link>
            ) : null}
          </div>
        ) : (
          <DestinationSearch />
        )}
      </div>

      <div className="section-px w-full">
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
