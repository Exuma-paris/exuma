import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { renderSection } from "@/components/destination/render-section";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { deriveDiscoverItems } from "@/lib/landing/inspiration";
import { getDestinationSpecialist } from "@/lib/content/queries";
import { destinations } from "@/lib/content/registry";
import { EXUMA_PHONE } from "@/lib/exuma";
import type { Section } from "@/lib/content/types";

type Props = { params: Promise<{ slug: string }> };

// generateStaticParams lives on the parent layout — covers all 3 nested routes.

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations[slug];
  if (!destination?.landing) return {};
  return {
    title: destination.landing.metaTitle,
    description: destination.landing.metaDescription,
    alternates: { canonical: `/landing/${slug}` },
  };
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  const destination = destinations[slug];
  if (!destination?.landing) notFound();

  const { landing } = destination;
  const specialist = getDestinationSpecialist(slug);
  const specialistAvatar = specialist?.profileImage ?? specialist?.image;
  const contactHref = `/landing/${slug}/contact`;
  const destinationHref = `/destinations/${slug}`;
  const floatingCtaLabel =
    landing.floatingCtaLabel ?? `Découvrir ${destination.name}`;

  const sections: Section[] = [
    {
      type: "heroLanding",
      eyebrow: landing.heroEyebrow,
      heading: landing.heroHeading,
      description: landing.heroDescription,
      cta: { label: "Créez votre voyage", href: contactHref },
      rating: landing.rating,
      features: defaultSpotlightFeatures,
      contactCta: {
        label: "Contactez-nous",
        phone: EXUMA_PHONE,
        avatar: specialistAvatar,
        statusOnline: true,
      },
      floatingCta: { label: floatingCtaLabel, href: destinationHref },
      discover: {
        title: floatingCtaLabel,
        bottomCta: { label: "Créez votre voyage", href: contactHref },
        items: deriveDiscoverItems(slug),
      },
      slides: landing.slides,
    },
  ];

  return (
    <main className="flex-1">
      {sections.map((section, i) => renderSection(section, String(i)))}
    </main>
  );
}
