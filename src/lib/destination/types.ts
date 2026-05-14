import type { ReactNode } from "react";

export type ImageRef = { src: string; alt: string };

export type Cta = { label: string; href: string };

export type IconName =
  | "plane"
  | "clock"
  | "euro"
  | "fileText"
  | "syringe"
  | "calendarDays"
  | "languages"
  | "sun"
  | "badgeCheck"
  | "sparkles"
  | "star";

export type Section =
  | {
      type: "hero";
      eyebrow?: string;
      heading: string;
      description?: string;
      images: ImageRef[];
      autoScrollInterval?: number;
    }
  | {
      type: "textColumns";
      eyebrow?: string;
      heading: string;
      columns: string[];
      cta?: Cta;
      background?: string;
    }
  | {
      type: "fullImage";
      image: ImageRef;
      height?: number;
    }
  | {
      type: "textImagesSplit";
      eyebrow?: string;
      heading: string;
      paragraphs: string[];
      images: [ImageRef, ImageRef];
      theme?: "light" | "dark";
      background?: string;
    }
  | {
      type: "featureCards";
      eyebrow?: string;
      heading: string;
      description?: string;
      cta?: Cta;
      cards: {
        title: string;
        description: string;
        image: ImageRef;
        link?: Cta;
      }[];
      background?: string;
    }
  | {
      type: "imageDuoWithText";
      duo: { left: ImageRef; right: ImageRef };
      text: {
        eyebrow?: string;
        heading: string;
        columns: string[];
        cta?: Cta;
      };
    }
  | {
      type: "bento";
      eyebrow?: string;
      heading: string;
      description: string;
      cta?: Cta;
      cards: {
        title: string;
        description: string;
        image: ImageRef;
        tone?: "image" | "dark";
      }[];
      background?: string;
    }
  | {
      type: "placesMap";
      eyebrow?: string;
      heading: string;
      description?: string;
      cta?: Cta;
      places: {
        title: string;
        description: string;
        image: ImageRef;
        coordinates: { lat: number; lng: number };
      }[];
      initialZoom?: number;
      background?: string;
    }
  | {
      type: "infoGrid";
      eyebrow?: string;
      heading: string;
      description?: string;
      cta?: Cta;
      items: {
        iconName: IconName;
        title: string;
        description: string;
      }[];
      background?: string;
    }
  | {
      type: "tips";
      eyebrow?: string;
      heading: string;
      description?: string;
      cta?: Cta;
      items: {
        title: string;
        cardEyebrow?: string;
        modalEyebrow?: string;
        shortDescription?: string;
        content: ReactNode;
      }[];
      background?: string;
    }
  | {
      type: "testimonials";
      eyebrow?: string;
      heading: string;
      cta?: Cta;
      testimonials: {
        quote: string;
        image: ImageRef;
        name: string;
        role?: string;
      }[];
      background?: string;
    }
  | {
      type: "spotsList";
      eyebrow?: string;
      heading: string;
      description?: string;
      cta?: Cta;
      spots: { title: string; description: string }[];
      background?: string;
    }
  | {
      type: "islandLinks";
      eyebrow?: string;
      heading: string;
      links: { label: string; href: string }[];
      background?: string;
    }
  | {
      type: "imageTrio";
      eyebrow?: string;
      heading?: string;
      description?: string;
      images: [ImageRef, ImageRef, ImageRef];
      background?: string;
    }
  | {
      type: "finalCta";
      eyebrow?: string;
      heading: string;
      primaryCta: Cta;
      secondaryCta?: Cta;
      background?: string;
    }
  | {
      type: "specialistSpotlight";
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
      specialist: {
        collaborateurSlug: string;
        quote: string;
        role?: string;
      };
      features?: {
        iconName: IconName;
        title: string;
        description: string;
      }[];
      background?: string;
    }
  | {
      type: "faq";
      eyebrow?: string;
      heading: string;
      contact?: {
        prefix: string;
        label: string;
        href: string;
        suffix: string;
      };
      items: { question: string; answer: ReactNode }[];
      background?: string;
    }
  | {
      type: "entityList";
      kind: "experience" | "accommodation" | "destination";
      eyebrow?: string;
      heading: string;
      description?: string;
      cta?: Cta;
      slugs: string[];
      background?: string;
    }
  | {
      type: "heroImageBackground";
      eyebrow?: string;
      heading: string;
      description?: string;
      images: ImageRef[];
      interval?: number;
      background?: string;
    }
  | {
      type: "gallery";
      heading: string;
      description?: string;
      images: ImageRef[];
      autoScrollInterval?: number;
      background?: string;
    }
  | {
      type: "featureShowcase";
      eyebrow?: string;
      heading: string;
      description?: string;
      items: {
        title: string;
        detail: ReactNode;
        image: ImageRef;
      }[];
      background?: string;
    }
  | {
      type: "heroLanding";
      eyebrow?: string;
      heading: string;
      description?: string;
      cta: Cta;
      rating?: { score: number; label: string };
      partners?: {
        title?: string;
        logos?: {
          src: string;
          alt: string;
          width: number;
          height: number;
        }[];
      };
      features?: {
        iconName: IconName;
        title: string;
        description: string;
      }[];
      slides: { image: ImageRef }[];
      contactCta?: {
        label: string;
        phone: string;
        avatar?: ImageRef;
        statusOnline?: boolean;
      };
      floatingCta?: Cta;
      discover?: {
        title: string;
        bottomCta?: Cta;
        items: {
          id: string;
          category: "ile" | "hotel" | "experience" | "spot";
          eyebrow: string;
          title: string;
          description: string;
          image: ImageRef;
          imageRatio?: "1x1" | "3x4" | "16x9";
          lightboxImage?: ImageRef;
          cta?: Cta;
        }[];
      };
      background?: string;
    };

export type Destination = {
  slug: string;
  name: string;
  sections: Section[];
};
