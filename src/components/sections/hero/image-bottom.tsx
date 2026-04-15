import Image from "next/image";
import { TextBlock } from "@/components/blocks/text-block";
import { DestinationSearch } from "@/components/blocks/destination-search";

export function HeroImageBottom({
  eyebrow = "Agence voyage de luxe sur mesure",
  heading = "Créateur d'itinéraires et d'expérience inoubliables depuis 1991",
  paragraph = "Vivez l'inaccessible avec un voyage sur mesure, conçu par un travel designer. Suggestions sur mesure selon la saison, nos goûts et vos envies.",
  image = {
    src: "/hero.jpg",
    alt: "Paysage de Bora Bora avec lagon turquoise et bungalows sur pilotis",
  },
}: {
  eyebrow?: string;
  heading?: string;
  paragraph?: string;
  image?: { src: string; alt: string };
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
        <DestinationSearch />
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
