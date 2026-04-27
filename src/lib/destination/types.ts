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
  | "languages";

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
    };

export type Destination = {
  slug: string;
  name: string;
  sections: Section[];
};
