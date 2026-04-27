import type { ReactNode } from "react";
import { HeroImageGallery } from "@/components/sections/hero/image-gallery";
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
import { FaqSection } from "@/components/sections/faq";
import type { Section } from "@/lib/destination/types";
import { renderIcon } from "./icons";

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
          background={section.background}
        />
      );

    case "imageDuoWithText":
      return (
        <div
          key={key}
          className="[&>div:first-child_section]:pb-0 [&>div:last-child_section]:pt-10"
        >
          <ImageDuoSection
            left={section.duo.left}
            right={section.duo.right}
          />
          <TextColumnsSection
            eyebrow={section.text.eyebrow}
            heading={section.text.heading}
            columns={section.text.columns}
            cta={section.text.cta}
          />
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
  }
}
