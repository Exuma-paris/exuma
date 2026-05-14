import {
  TestimonialCard,
  type TestimonialCardProps,
} from "@/components/blocks/testimonial-card";
import {
  FeatureTrio,
  type FeatureTrioItem,
} from "@/components/blocks/feature-trio";
import { Recommended } from "@/components/blocks/recommended";
import { cn } from "@/lib/utils";
import type { SectionMeta } from "@/lib/sections/meta-types";

export type SpecialistSpotlightProps = {
  eyebrow?: string;
  heading: string;
  partners?: {
    title?: string;
    logos?: {
      src: string;
      alt: string;
      width: number;
      height: number;
    }[];
  };
  specialist: TestimonialCardProps;
  features?: FeatureTrioItem[];
  theme?: "light" | "dark";
  background?: string;
};

export const defaultSpotlightFeatures = [
  {
    iconName: "badgeCheck" as const,
    title: "Conciergerie 24/7",
    description:
      "Assistance discrète, transferts privés, accès rapide aux adresses fermées au public.",
  },
  {
    iconName: "sparkles" as const,
    title: "Sur mesure",
    description:
      "Un travel designer dédié façonne votre voyage selon vos envies.",
  },
  {
    iconName: "star" as const,
    title: "Exclusif",
    description:
      "Tables, ateliers, maisons : accès à des adresses qui ne sont pas dans les moteurs de réservation.",
  },
];

export const specialistSpotlightMeta = {
  type: "specialistSpotlight",
  intent: "Travel-designer spotlight — an eyebrow + heading, a quote card from a named collaborateur, and three feature bullets that sum up the agency's edge for this destination.",
  slots: {
    eyebrow: {
      role: "Lead-in label above the heading.",
      required: false,
      length: { chars: { max: 60 } },
    },
    heading: {
      role: "Section <h2>.",
      required: true,
      length: { chars: { max: 80 } },
    },
    specialist: {
      role: "Quote card — references a Collaborateur by slug for portrait + name + role.",
      required: true,
      slots: {
        collaborateurSlug: {
          role: "Slug of an existing Collaborateur entity (e.g. 'stephane', 'ludivine', 'taina').",
          required: true,
          length: { chars: { max: 40 } },
        },
        quote: {
          role: "First-person quote, signed verbatim. Concrete, slightly imperfect cadence.",
          required: true,
          length: { chars: { target: 320, max: 520, min: 160 } },
        },
        role: {
          role: "Optional role override (defaults to the Collaborateur's role).",
          required: false,
          length: { chars: { max: 60 } },
        },
      },
    },
    features: {
      role: "Three icon + title + description bullets that frame the agency's edge.",
      required: false,
      itemCount: { exact: 3 },
      perItem: {
        role: "One feature bullet.",
        required: true,
        slots: {
          title: {
            role: "Feature label (concrete, named — e.g. 'Hébergements hors réseaux').",
            required: true,
            length: { chars: { max: 40 } },
          },
          description: {
            role: "One-sentence elaboration. Concrete, named, no abstract guarantees.",
            required: true,
            length: { chars: { target: 130, max: 200, min: 60 } },
          },
        },
      },
    },
  },
} as const satisfies SectionMeta;

export function SpecialistSpotlight({
  eyebrow,
  heading,
  partners,
  specialist,
  features,
  theme = "light",
  background,
}: SpecialistSpotlightProps) {
  const isDark = theme === "dark";
  const resolvedBg = background ?? (isDark ? "bg-foreground" : undefined);

  return (
    <div
      className={cn(
        "w-full",
        isDark ? "text-background" : "text-foreground",
        resolvedBg,
      )}
    >
      <section className="section-px mx-auto flex w-full max-w-layout flex-col gap-12 section-py">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            {eyebrow ? (
              <p className="text-eyebrow text-primary">{eyebrow}</p>
            ) : null}
            <h2
              className={cn(
                "text-h2 max-w-180",
                isDark ? "text-background/70" : "text-foreground",
                "text-h2",
              )}
            >
              {heading}
            </h2>
          </div>
          {partners ? (
            <Recommended
              title={partners.title}
              logos={partners.logos}
              className="md:items-end"
            />
          ) : null}
        </div>

        <TestimonialCard
          {...specialist}
          className={cn(
            !isDark && "border border-border bg-background",
          )}
        />

        {features && features.length > 0 ? (
          <FeatureTrio
            items={features}
            theme={theme}
            className="mt-4"
          />
        ) : null}
      </section>
    </div>
  );
}
