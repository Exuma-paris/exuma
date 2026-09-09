import Image from "next/image";
import Link from "next/link";
import { TextBlock } from "@/components/blocks/text-block";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { SectionMeta } from "@/lib/sections/meta-types";

/**
 * Rangées de prestations autonomes : une image et un bloc de texte par rangée,
 * lisibles sans interaction.
 *
 * Elle existe parce que `featureShowcase` replie ses items dans un accordéon
 * (une seule image visible à la fois) et que `featureCards` n'affiche que trois
 * cartes avant de basculer en carrousel à flèches. Les pages de service ont
 * besoin de 3 à 6 prestations toutes lisibles d'un coup.
 *
 * Le rythme vient de deux alternances combinées, indexées sur la position :
 * l'image change de côté, et son cadrage passe du paysage 3:2 au carré. Les
 * rangées ne se ressemblent donc jamais deux fois de suite.
 *
 * Le carré a remplacé un 4:5 le 2026-08-25 : en portrait, l'image dépassait
 * nettement la hauteur de son bloc de texte et déséquilibrait la rangée.
 */

export type FeatureRowsSectionProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  cta?: { label: string; href: string };
  items: {
    title: string;
    paragraphs: string[];
    image: { src: string; alt: string };
  }[];
  background?: string;
};

export const featureRowsMeta = {
  type: "featureRows",
  intent:
    "Standalone feature rows — one image plus a titled text block per row, all readable without interaction. Image side and crop alternate row to row.",
  slots: {
    eyebrow: {
      role: "Lead-in label above the heading.",
      required: false,
      length: { chars: { max: 60 } },
    },
    heading: {
      role: "Section <h2>.",
      required: true,
      length: { chars: { max: 70 } },
    },
    description: {
      role: "Optional sub-paragraph under the heading.",
      required: false,
      length: { chars: { target: 220, max: 320 } },
    },
    items: {
      role: "Feature rows, rendered full-width one under the other.",
      required: true,
      itemCount: { min: 3, max: 6 },
      perItem: {
        role: "One feature row — title, 1 to 3 paragraphs, one image.",
        required: true,
        slots: {
          title: {
            role: "Row heading.",
            required: true,
            length: { chars: { max: 50 } },
          },
          paragraphs: {
            role: "Row body paragraphs.",
            required: true,
            length: { chars: { target: 220, max: 400, min: 90 } },
          },
          image: {
            role: "Row image.",
            required: true,
            image: {
              role: "card",
              ratio: "3:2 on odd rows, 1:1 on even rows",
            },
          },
        },
      },
    },
  },
} as const satisfies SectionMeta;

export function FeatureRowsSection({
  eyebrow,
  heading,
  description,
  cta,
  items,
  background,
}: FeatureRowsSectionProps) {
  return (
    <div className={cn("w-full", background)}>
      <section className="section-px mx-auto flex w-full max-w-layout flex-col gap-16 section-py md:gap-24">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <TextBlock
            align="left"
            eyebrow={eyebrow}
            heading={heading}
            headingLevel="h2"
            paragraph={description}
          />
          {cta ? (
            <Link
              href={cta.href}
              className={cn(buttonVariants(), "bg-foreground text-background")}
            >
              {cta.label}
            </Link>
          ) : null}
        </div>

        <ul className="flex flex-col gap-16 md:gap-24">
          {items.map((item, i) => {
            const mirrored = i % 2 === 1;
            return (
              <li
                key={item.title}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
              >
                <div
                  className={cn(
                    "relative w-full overflow-hidden bg-muted",
                    mirrored ? "aspect-square md:order-2" : "aspect-3/2",
                  )}
                >
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    // One column of a two-column layout inside max-w-layout,
                    // so half the viewport on desktop and the full width below.
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div
                  className={cn(
                    "flex flex-col gap-4",
                    mirrored && "md:order-1",
                  )}
                >
                  <p className="text-eyebrow text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-h3 max-w-120">{item.title}</h3>
                  <div className="flex flex-col gap-4 text-secondary-foreground">
                    {item.paragraphs.map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
