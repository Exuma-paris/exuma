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
  const resolvedBg = background ?? (isDark ? "bg-foreground" : "bg-background-soft");

  return (
    <div
      className={cn(
        "w-full",
        isDark ? "text-background" : "text-foreground",
        resolvedBg,
      )}
    >
      <section className="section-px mx-auto flex w-full max-w-layout flex-col gap-12 py-30">
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
