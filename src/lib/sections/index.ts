import type { SectionMeta } from "./meta-types";
import { heroMeta } from "@/components/sections/hero/image-gallery";
import { heroImageBackgroundMeta } from "@/components/sections/hero/image-background";
import { heroLandingMeta } from "@/components/sections/hero/landing";
import { galleryMeta } from "@/components/sections/gallery";
import { featureShowcaseMeta } from "@/components/sections/feature-showcase";
import { textColumnsMeta } from "@/components/sections/text-columns";
import { fullImageMeta } from "@/components/sections/full-image";
import { textImagesSplitMeta } from "@/components/sections/text-images-split";
import { featureCardsMeta } from "@/components/sections/feature-cards";
import { bentoMeta } from "@/components/sections/bento";
import { placesMapMeta } from "@/components/sections/places-map";
import { infoGridMeta } from "@/components/sections/info-grid";
import { tipsMeta } from "@/components/sections/tips";
import { testimonialsMeta } from "@/components/sections/testimonials";
import { faqMeta } from "@/components/sections/faq";
import { spotsListMeta } from "@/components/sections/spots-list";
import { islandLinksMeta } from "@/components/sections/island-links";
import { imageTrioMeta } from "@/components/sections/image-trio";
import { finalCtaMeta } from "@/components/sections/final-cta";
import { specialistSpotlightMeta } from "@/components/sections/specialist-spotlight";
import { imageDuoWithTextMeta, entityListMeta } from "./composite-meta";

export type { SectionMeta, SlotRule, ArraySlotRule, LengthRule, ImageSpec } from "./meta-types";
export { isArraySlot } from "./meta-types";

export const sectionMetas = {
  hero: heroMeta,
  heroImageBackground: heroImageBackgroundMeta,
  heroLanding: heroLandingMeta,
  gallery: galleryMeta,
  featureShowcase: featureShowcaseMeta,
  textColumns: textColumnsMeta,
  fullImage: fullImageMeta,
  textImagesSplit: textImagesSplitMeta,
  featureCards: featureCardsMeta,
  bento: bentoMeta,
  placesMap: placesMapMeta,
  infoGrid: infoGridMeta,
  tips: tipsMeta,
  testimonials: testimonialsMeta,
  faq: faqMeta,
  spotsList: spotsListMeta,
  islandLinks: islandLinksMeta,
  imageTrio: imageTrioMeta,
  finalCta: finalCtaMeta,
  specialistSpotlight: specialistSpotlightMeta,
  imageDuoWithText: imageDuoWithTextMeta,
  entityList: entityListMeta,
} as const satisfies Record<string, SectionMeta>;

export type SectionType = keyof typeof sectionMetas;
