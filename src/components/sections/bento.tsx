import Image from "next/image";
import Link from "next/link";
import { TextBlock } from "@/components/blocks/text-block";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { SectionMeta } from "@/lib/sections/meta-types";

type BentoCard = {
  title: string;
  description: string;
  image: { src: string; alt: string };
  tone?: "image" | "dark";
  /** When set, the whole tile becomes the link to that page. */
  href?: string;
};

export type BentoSectionProps = {
  eyebrow?: string;
  heading: string;
  description: string;
  cta?: { label: string; href: string };
  cards: BentoCard[];
  background?: string;
};

export const defaultBento = {
  eyebrow: "Comment nous travaillons",
  heading: "Notre rôle dans ce voyage",
  cards: [
    {
      title: "Création d'itinéraires",
      description:
        "Une logique de marche, de cuisine et de visites coordonnées. Nous écrivons l'itinéraire qui rend chaque journée juste.",
      tone: "dark" as const,
    },
    {
      title: "Adresses confidentielles",
      description:
        "Maisons, restaurants, ateliers d'artisans, palais privés. Des adresses qui ne se trouvent pas dans les moteurs de réservation.",
    },
    {
      title: "Hébergements hors réseaux",
      description:
        "Maisons d'hôtes, palais transformés, hôtels de famille. Le niveau se lit dans le choix des matériaux, des cuisiniers, des matins.",
    },
    {
      title: "Conciergerie 24/7",
      description:
        "Réponse sous 24h. Les ajustements de dernière minute, gérés. Les transferts, privés. Ce que nous mettons en place, vous n'avez pas à le vérifier.",
    },
    {
      title: "Expériences immersives",
      description:
        "Visites privées, ateliers de famille, tables de chefs. Trois moments inscrits qui justifient le voyage.",
    },
  ],
};

export const bentoMeta = {
  type: "bento",
  intent: "Asymmetric bento grid — 2 large tiles on top, 3 smaller tiles below — used to summarise capabilities or signature moments.",
  slots: {
    eyebrow: {
      role: "Lead-in label above the heading.",
      required: false,
      length: { chars: { max: 30 } },
    },
    heading: {
      role: "Section <h2>.",
      required: true,
      length: { chars: { max: 60 } },
    },
    description: {
      role: "Sub-paragraph under the heading. Required for bento.",
      required: true,
      length: { chars: { target: 130, max: 220 } },
    },
    cards: {
      role: "Bento tiles. First two render large; remaining render in a 3-up row.",
      required: true,
      itemCount: { exact: 5 },
      perItem: {
        role: "One bento tile.",
        required: true,
        slots: {
          title: {
            role: "Tile heading.",
            required: true,
            length: { chars: { max: 40 } },
          },
          description: {
            role: "Tile body — concrete, almost a tagline.",
            required: true,
            length: { chars: { target: 80, max: 140 } },
          },
          image: {
            role: "Tile image.",
            required: true,
            image: { role: "atmospheric or iconographic", ratio: "16:10" },
          },
        },
      },
    },
  },
} as const satisfies SectionMeta;

/**
 * Eased scrim behind the tile text. A plain two-stop gradient leaves the title
 * sitting on a near-transparent band, which is exactly where it needs cover;
 * these intermediate stops approximate an ease curve so the darkening reaches
 * the title without a visible edge across the image.
 */
const SCRIM =
  "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.85) 16%, rgba(0,0,0,0.66) 34%, rgba(0,0,0,0.38) 52%, rgba(0,0,0,0.14) 70%, rgba(0,0,0,0) 88%)";

function Card({ card, className }: { card: BentoCard; className?: string }) {
  const isDark = card.tone === "dark";

  const body = (
    <>
      <Image
        src={card.image.src}
        alt={card.image.alt}
        fill
        // The grid is uneven: the two wide cards reach ~40vw while the three
        // narrow ones sit near 26vw. Declaring 33vw under-served the wide pair by
        // ~1.2x. Sized for the widest card so nothing upscales.
        sizes="(min-width: 1024px) 40vw, 100vw"
        className={cn(
          "transition-transform duration-500 ease-out",
          isDark ? "object-contain object-right" : "object-cover",
          card.href && "group-hover/bento:scale-[1.03]",
        )}
      />
      {!isDark ? (
        <>
          <div aria-hidden className="absolute inset-0" style={{ background: SCRIM }} />
          {/* Hover darkens the whole tile rather than steepening the scrim, so
              the gradient keeps its shape and nothing shifts under the text. */}
          <div
            aria-hidden
            className={cn(
              "absolute inset-0 bg-black/0 transition-colors duration-300",
              card.href && "group-hover/bento:bg-black/15",
            )}
          />
        </>
      ) : null}
      <div className="relative mt-auto flex max-w-xs flex-col gap-2 p-6">
        {/* Last-resort legibility on a blown-out highlight the scrim cannot
            fully tame. Kept subtle so it never reads as a drop shadow. */}
        <h3 className="text-h4 [text-shadow:0_1px_3px_rgba(0,0,0,0.35)]">
          {card.title}
        </h3>
        <p className="text-[13px] opacity-90 [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]">
          {card.description}
        </p>
      </div>
    </>
  );

  const shell = cn(
    "group/bento relative flex h-80 overflow-hidden",
    isDark ? "bg-foreground text-background" : "bg-muted text-background",
    className,
  );

  // The whole tile is the target rather than a "Découvrir" link in the corner:
  // it is a far bigger hit area, and the title already names the destination.
  if (card.href) {
    return (
      <Link
        href={card.href}
        className={cn(
          shell,
          "outline-offset-2 focus-visible:outline-2 focus-visible:outline-foreground",
        )}
      >
        {body}
      </Link>
    );
  }

  return <article className={shell}>{body}</article>;
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
      <section className="mx-auto flex w-full max-w-layout flex-col gap-10 section-px section-py">
      <div className="flex flex-col items-start gap-6 text-left md:items-center md:text-center">
        <TextBlock
          align="left"
          mdAlign="center"
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
