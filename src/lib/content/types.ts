import type { ReactNode } from "react";
import type { ImageRef, Section } from "@/lib/destination/types";
import type { Question } from "@/lib/contact/types";

export type { ImageRef, Section } from "@/lib/destination/types";

export type EntityKind =
  | "continent"
  | "destination"
  | "theme"
  | "subtheme"
  | "experience"
  | "serviceCategory"
  | "service"
  | "accommodation";

type EntityBase = {
  slug: string;
  name: string;
  blurb?: ReactNode;
  keywords?: string[];
  sections: Section[];
};

export type Continent = EntityBase & {
  heroImage?: ImageRef;
  destinationSlugs?: string[];
};

export type Destination = EntityBase & {
  country?: string;
  continentSlug?: string;
  themeSlugs?: string[];
  accommodationSlugs?: string[];
  metaTitle?: string;
  metaDescription?: string;
  /**
   * Pre-formatted French genitive of the destination name, used wherever the
   * site needs to write "<something> <genitive>" — most commonly:
   *   - "Spécialiste de la Polynésie" (post-form thank-you)
   *   - "Voyage en/au/à <destination>" (page titles)
   * Examples per article:
   *   - feminine + consonant: "de la Polynésie", "de la Corse"
   *   - feminine + vowel:    "de l'Italie"
   *   - masculine:           "du Maroc", "du Brésil"
   *   - city / no article:   "de Paris", "de Marrakech", "de Rome"
   * The destination author writes this once because French grammar can't be
   * derived from the name alone.
   */
  genitive: string;
  /**
   * Question list for the destination's contact / quotation funnel. Optional —
   * destinations without a landing flow simply omit it (the route at
   * `/landing/<slug>/contact` won't render). Each entry is a typed `Question`
   * (`boolean`, `single`, `multi`, `calendar`, or `contact`); see
   * `src/lib/contact/types.ts` for the shape per type.
   */
  contactQuestions?: Question[];
  /**
   * Marketing landing-page content for `/landing/<slug>`. Optional — only set
   * for destinations with a paid-traffic / brand-led acquisition funnel.
   * When present, the dynamic route at `/landing/[slug]` pre-renders this
   * destination at build time via `generateStaticParams`. When omitted, the
   * route returns 404. Pairs with `contactQuestions` for the full funnel.
   */
  landing?: DestinationLanding;
};

export type DestinationLanding = {
  /** Hero eyebrow above the H1 (e.g. "Voyage de luxe en Polynésie"). */
  heroEyebrow: string;
  /** Hero H1 — the brand pitch line (e.g. "Vivez l'inaccessible"). */
  heroHeading: string;
  /** Hero paragraph below the H1. */
  heroDescription: string;
  /** Hero carousel slides (2-8 atmospheric images of the destination). */
  slides: { image: ImageRef }[];
  /** Optional rating block under the brand card. */
  rating?: { score: number; label: string };
  /** Floating "discover" pill label (default "Découvrir <destination>"). */
  floatingCtaLabel?: string;
  /** SEO `<title>` + `<meta description>` for the landing page. */
  metaTitle: string;
  metaDescription: string;
};

export type Theme = EntityBase & {
  intent?: string;
  subthemeSlugs?: string[];
};

export type Subtheme = EntityBase & {
  themeSlug: string;
  experienceSlugs?: string[];
};

export type Experience = EntityBase & {
  heroImage?: ImageRef;
  destinationSlugs?: string[];
  themeSlugs?: string[];
  subthemeSlugs?: string[];
  collaborateurSlug?: string;
  metaTitle?: string;
  metaDescription?: string;
};

export type ServiceCategory = EntityBase & {
  serviceSlugs?: string[];
};

export type Service = EntityBase & {
  categorySlug: string;
};

export type Accommodation = EntityBase & {
  heroImage?: ImageRef;
  /** A hotel typically sits in one destination but may serve more than one
   * (border properties, hotel chains, multi-island lodges). Mirrors
   * `Experience.destinationSlugs` so both entities share one mental model. */
  destinationSlugs?: string[];
  metaTitle?: string;
  metaDescription?: string;
};

export type Collaborateur = EntityBase & {
  role?: string;
  /** Full-shot portrait (250×300, person sitting in chair). */
  image: ImageRef;
  /** Square zoom on the face (300×300). Used for header avatars, chips, etc. */
  profileImage?: ImageRef;
};

export type EntityByKind = {
  continent: Continent;
  destination: Destination;
  theme: Theme;
  subtheme: Subtheme;
  experience: Experience;
  serviceCategory: ServiceCategory;
  service: Service;
  accommodation: Accommodation;
};

export type Tagged<K extends EntityKind = EntityKind> = {
  kind: K;
  entity: EntityByKind[K];
};

export type AnyTagged = {
  [K in EntityKind]: Tagged<K>;
}[EntityKind];

export const entityRoute: Record<EntityKind, (slug: string) => string> = {
  continent: (s) => `/continents/${s}`,
  destination: (s) => `/destinations/${s}`,
  theme: (s) => `/themes/${s}`,
  subtheme: (s) => `/themes/${s}`,
  experience: (s) => `/experiences/${s}`,
  serviceCategory: (s) => `/services/${s}`,
  service: (s) => `/services/${s}`,
  accommodation: (s) => `/hebergements/${s}`,
};

export function taggedHref(t: AnyTagged): string {
  return entityRoute[t.kind](t.entity.slug);
}
