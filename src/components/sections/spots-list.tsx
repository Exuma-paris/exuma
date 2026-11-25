import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { SectionMeta } from "@/lib/sections/meta-types";

export type SpotsListItem = {
  title: string;
  description: string;
};

export type SpotsListSectionProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  cta?: { label: string; href: string };
  spots: SpotsListItem[];
  /** Logo posé à droite de l'en-tête (partenaire, éditeur). */
  logo?: { src: string; alt: string };
  /**
   * "list" (défaut) : une ligne par élément, titre à gauche.
   * "timeline" : frise horizontale, un point par élément, le titre (une heure,
   * une date) au-dessus et une phrase courte en dessous. Pour 4 à 6 moments
   * courts ; sur téléphone, la frise devient verticale.
   */
  layout?: "list" | "timeline";
  background?: string;
};

export const spotsListMeta = {
  type: "spotsList",
  intent: "Editorial list of named spots — title-on-left + description-on-right rows. No images. Used for short, dense itineraries or recommendation lists. layout \"timeline\" turns 4 to 6 short moments into a horizontal timeline.",
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
    spots: {
      role: "List rows.",
      required: true,
      itemCount: { min: 4, max: 12 },
      perItem: {
        role: "One spot — short title + one-paragraph description.",
        required: true,
        slots: {
          title: {
            role: "Spot name.",
            required: true,
            length: { chars: { max: 50 } },
          },
          description: {
            role: "What this spot is and why it matters.",
            required: true,
            length: { chars: { target: 180, max: 320, min: 80 } },
          },
        },
      },
    },
  },
} as const satisfies SectionMeta;

export function SpotsListSection({
  eyebrow,
  heading,
  description,
  cta,
  spots,
  logo,
  layout = "list",
  background,
}: SpotsListSectionProps) {
  return (
    <div className={cn("w-full", background)}>
      <section className="section-px mx-auto flex w-full max-w-layout flex-col gap-10 section-py">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            {eyebrow ? (
              <p className="text-eyebrow text-primary">{eyebrow}</p>
            ) : null}
            <h2 className="text-h2 max-w-180">{heading}</h2>
            {description ? (
              <p className="max-w-120 text-secondary-foreground">{description}</p>
            ) : null}
          </div>
          {logo ? (
            <Image
              src={logo.src}
              alt={logo.alt}
              width={300}
              height={64}
              className="h-10 w-auto md:h-12"
            />
          ) : null}
          {cta ? (
            <Link href={cta.href} className={cn(buttonVariants())}>
              {cta.label}
            </Link>
          ) : null}
        </div>

        {layout === "timeline" ? (
          <ol
            className="grid md:grid-cols-[repeat(var(--cols),minmax(0,1fr))]"
            style={{ "--cols": spots.length } as React.CSSProperties}
          >
            {spots.map((spot, i) => (
              <li
                key={i}
                className={cn(
                  "relative flex flex-col gap-2 border-l border-border pb-8 pl-6",
                  "md:gap-4 md:border-l-0 md:pr-6 md:pb-0 md:pl-0",
                  i === spots.length - 1 && "pb-0",
                )}
              >
                {/* Point de la frise verticale (téléphone). */}
                <span
                  aria-hidden
                  className="absolute top-1.5 -left-[5px] size-[9px] rounded-full bg-primary md:hidden"
                />
                <h3 className="text-[15px] font-medium text-foreground">
                  {spot.title}
                </h3>
                {/* Frise horizontale (grand écran) : le trait court d'une
                    colonne à l'autre, le point marque le moment. */}
                <div aria-hidden className="relative hidden h-[9px] md:block">
                  {/* La colonne a une marge à droite : le trait la franchit
                      pour rejoindre le point suivant. */}
                  <span
                    className={cn(
                      "absolute top-1/2 left-0 h-px -translate-y-1/2 bg-border",
                      i === spots.length - 1 ? "w-full" : "w-[calc(100%+1.5rem)]",
                    )}
                  />
                  <span className="absolute top-0 left-0 size-[9px] rounded-full bg-primary" />
                </div>
                <p className="text-[14px] leading-[1.6] text-secondary-foreground">
                  {spot.description}
                </p>
              </li>
            ))}
          </ol>
        ) : (
          <ul className="flex flex-col gap-px border-t border-border">
            {spots.map((spot, i) => (
              <li
                key={i}
                className="flex flex-col gap-3 border-b border-border py-8 md:flex-row md:gap-16"
              >
                <h3 className="w-full shrink-0 text-[15px] font-medium text-foreground md:w-48">
                  {spot.title}
                </h3>
                <p className="text-[14px] leading-[1.75] text-secondary-foreground">
                  {spot.description}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
