import type { ReactNode } from "react";
import { Fingerprint } from "@/components/blocks/fingerprint";
import { HeroImageGallery } from "@/components/sections/hero/image-gallery";
import { HeroImageBackground } from "@/components/sections/hero/image-background";
import { HeroLanding } from "@/components/sections/hero/landing";
import { GallerySection } from "@/components/sections/gallery";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { FeatureRowsSection } from "@/components/sections/feature-rows";
import { TextColumnsSection } from "@/components/sections/text-columns";
import { FullImageSection } from "@/components/sections/full-image";
import { TextImagesSplitSection } from "@/components/sections/text-images-split";
import { FeatureCardsSection } from "@/components/sections/feature-cards";
import { ImageDuoSection } from "@/components/sections/image-duo";
import { BentoSection } from "@/components/sections/bento";
import { PlacesMapSection } from "@/components/sections/places-map";
import { InfoGridSection } from "@/components/sections/info-grid";
import { TipsSection } from "@/components/sections/tips";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { SpotsListSection } from "@/components/sections/spots-list";
import { IslandLinksSection } from "@/components/sections/island-links";
import { ImageTrioSection } from "@/components/sections/image-trio";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { SpecialistSpotlight } from "@/components/sections/specialist-spotlight";
import { FaqSection } from "@/components/sections/faq";
import type { Section } from "@/lib/destination/types";
import {
  accommodations,
  collaborateurs,
  destinations,
  experiences,
} from "@/lib/content/registry";
import { entityRoute } from "@/lib/content/types";
import { renderIcon } from "./icons";

const ENTITY_PLACEHOLDER_IMAGE = {
  src: "/destination/polynesie/hero-1.png", // TODO: replace with proper neutral placeholder
  alt: "",
};

export function renderSection(section: Section, key: string): ReactNode {
  switch (section.type) {
    case "hero":
      return (
        <HeroImageGallery
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          description={section.description}
          images={section.images}
          autoScrollInterval={section.autoScrollInterval}
        />
      );

    case "heroImageBackground":
      return (
        <HeroImageBackground
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          description={section.description}
          images={section.images}
          interval={section.interval}
        />
      );

    case "heroLanding":
      return (
        <HeroLanding
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          description={section.description}
          cta={section.cta}
          rating={section.rating}
          partners={section.partners}
          features={section.features?.map((f) => ({
            icon: renderIcon(f.iconName),
            title: f.title,
            description: f.description,
          }))}
          slides={section.slides}
          contactCta={section.contactCta}
          floatingCta={section.floatingCta}
          discover={section.discover}
          background={section.background}
        />
      );

    case "gallery":
      return (
        <GallerySection
          key={key}
          heading={section.heading}
          description={section.description}
          images={section.images}
          autoScrollInterval={section.autoScrollInterval}
          background={section.background}
        />
      );

    case "featureShowcase":
      return (
        <FeatureShowcase
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          description={section.description}
          items={section.items}
          background={section.background}
        />
      );

    case "featureRows":
      return (
        <FeatureRowsSection
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          description={section.description}
          cta={section.cta}
          items={section.items}
          background={section.background}
        />
      );

    case "textColumns":
      return (
        <TextColumnsSection
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          columns={section.columns}
          cta={section.cta}
          background={section.background}
        />
      );

    case "fullImage":
      return (
        <FullImageSection
          key={key}
          image={section.image}
          height={section.height}
        />
      );

    case "textImagesSplit":
      return (
        <TextImagesSplitSection
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          paragraphs={section.paragraphs}
          images={section.images}
          theme={section.theme}
          background={section.background}
        />
      );

    case "featureCards":
      return (
        <FeatureCardsSection
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          description={section.description}
          cta={section.cta}
          cards={section.cards}
          layout={section.layout}
          background={section.background}
        />
      );

    case "imageDuoWithText":
      return (
        <div key={key} className="image-duo-with-text relative">
          <ImageDuoSection left={section.duo.left} right={section.duo.right} />
          <TextColumnsSection
            eyebrow={section.text.eyebrow}
            heading={section.text.heading}
            columns={section.text.columns}
            cta={section.text.cta}
          />
          <Fingerprint />
        </div>
      );

    case "bento":
      return (
        <BentoSection
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          description={section.description}
          cta={section.cta}
          cards={section.cards}
          background={section.background}
        />
      );

    case "placesMap":
      return (
        <PlacesMapSection
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          description={section.description}
          cta={section.cta}
          places={section.places}
          initialZoom={section.initialZoom}
          background={section.background}
        />
      );

    case "infoGrid":
      return (
        <InfoGridSection
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          description={section.description}
          cta={section.cta}
          items={section.items.map((item) => ({
            icon: renderIcon(item.iconName),
            title: item.title,
            description: item.description,
          }))}
          theme={section.theme}
          background={section.background}
        />
      );

    case "tips":
      return (
        <TipsSection
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          description={section.description}
          cta={section.cta}
          items={section.items}
          background={section.background}
        />
      );

    case "testimonials":
      return (
        <TestimonialsSection
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          cta={section.cta}
          testimonials={section.testimonials}
          background={section.background}
        />
      );

    case "spotsList":
      return (
        <SpotsListSection
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          description={section.description}
          cta={section.cta}
          spots={section.spots}
          background={section.background}
        />
      );

    case "islandLinks":
      return (
        <IslandLinksSection
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          links={section.links}
          background={section.background}
        />
      );

    case "imageTrio":
      return (
        <ImageTrioSection
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          description={section.description}
          images={section.images}
          background={section.background}
        />
      );

    case "finalCta":
      return (
        <FinalCtaSection
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          primaryCta={section.primaryCta}
          secondaryCta={section.secondaryCta}
          background={section.background}
        />
      );

    case "specialistSpotlight": {
      const c = collaborateurs[section.specialist.collaborateurSlug];
      if (!c) return null;
      return (
        <SpecialistSpotlight
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          partners={section.partners}
          specialist={{
            quote: section.specialist.quote,
            image: c.image,
            name: c.name,
            role: section.specialist.role ?? c.role,
          }}
          features={section.features?.map((f) => ({
            icon: renderIcon(f.iconName),
            title: f.title,
            description: f.description,
          }))}
          background={section.background}
        />
      );
    }

    case "faq":
      return (
        <FaqSection
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          contact={section.contact}
          items={section.items}
          background={section.background}
        />
      );

    case "entityList": {
      const lookup =
        section.kind === "experience"
          ? experiences
          : section.kind === "destination"
            ? destinations
            : accommodations;
      const cards = section.slugs
        .map((slug) => lookup[slug])
        .filter((entity) => entity !== undefined)
        .map((entity) => {
          const heroImage =
            "heroImage" in entity && entity.heroImage
              ? entity.heroImage
              : (entity.sections.find((s) => s.type === "hero")?.images?.[0] ??
                ENTITY_PLACEHOLDER_IMAGE);
          return {
            title: entity.name,
            description: entity.blurb ?? "",
            image: heroImage,
            link:
              entity.sections.length > 0
                ? {
                    label: "Découvrir",
                    href: entityRoute[section.kind](entity.slug),
                  }
                : undefined,
          };
        });

      return (
        <FeatureCardsSection
          key={key}
          eyebrow={section.eyebrow}
          heading={section.heading}
          description={section.description}
          cta={section.cta}
          cards={cards}
          background={section.background}
        />
      );
    }
  }
}
