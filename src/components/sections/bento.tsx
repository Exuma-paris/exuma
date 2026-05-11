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
