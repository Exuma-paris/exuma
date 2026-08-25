import type { ReactNode } from "react";
import {
  continents,
  serviceCategories,
  themes,
} from "@/lib/content/registry";

export type MenuGroupKey =
  | "continents"
  | "themes"
  | "conciergerie"
  | "agence";

export type MenuItem = {
  label: string;
  href: string;
  /** Short promise shown under the label when the group renders as cards. */
  description?: ReactNode;
};

export type MenuGroup = {
  key: MenuGroupKey;
  label: string;
  items: MenuItem[];
  /** Optional lead-in shown above the items, with a link to the group's index. */
  intro?: { text: string; cta?: MenuItem };
};

const companyLinks: MenuItem[] = [
  { label: "Pourquoi Exuma", href: "/approche" },
  { label: "À propos d'Exuma", href: "/a-propos" },
  { label: "FAQ", href: "/#faq" },
];

/** Discreet B2B entry, pinned under a rule at the root of the menu. It is a
 * distinct audience, not a category of the B2C catalogue, so it never sits as
 * a peer of Destinations / Thématiques. */
export const proLink: MenuItem = {
  label: "Professionnels & family offices",
  href: "/professionnels",
};

/** Pinned in the menu footer: the header CTAs are `hidden md:inline-flex`,
 * so on mobile these are the only conversion paths on the whole site. */
export const menuCtas: { contact: MenuItem; primary: MenuItem } = {
  contact: { label: "Contactez-nous", href: "/contact" },
  primary: { label: "Créer votre voyage", href: "/votre-projet" },
};

export function getMenuGroups(): MenuGroup[] {
  return [
    {
      key: "continents",
      label: "Destinations",
      items: Object.values(continents).map((c) => ({
        label: c.name,
        href: `/continents/${c.slug}`,
      })),
    },
    {
      key: "themes",
      label: "Thématiques",
      items: Object.values(themes).map((t) => ({
        label: t.name,
        href: `/themes/${t.slug}`,
      })),
    },
    {
      key: "conciergerie",
      label: "Conciergerie",
      intro: {
        text: "Ce qui réussit un voyage tient rarement à l'itinéraire, mais à tout ce qui l'entoure. Nos pôles de services couvrent ce périmètre, de la préparation au retour.",
        cta: { label: "Voir tous nos services", href: "/services" },
      },
      items: Object.values(serviceCategories).map((s) => ({
        label: s.name,
        href: `/services/${s.slug}`,
        description: s.blurb,
      })),
    },
    {
      key: "agence",
      label: "Exuma",
      items: companyLinks,
    },
  ];
}
