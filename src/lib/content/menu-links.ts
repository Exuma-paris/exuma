import type { ReactNode } from "react";

// Liens et types du menu, sans dépendance au registre de contenu : ce fichier
// est importé par des composants client (menu, recherche). Y importer le
// registre enverrait tout le contenu du site au navigateur.

export type MenuGroupKey = "continents" | "themes" | "conciergerie" | "agence";

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

export const companyLinks: MenuItem[] = [
  { label: "Pourquoi Exuma", href: "/approche" },
  { label: "À propos d'Exuma", href: "/a-propos" },
  { label: "FAQ", href: "/#faq" },
];

/** B2B entry, pinned at the root of the menu as a dark card. It is a distinct
 * audience, not a category of the B2C catalogue, so it sits apart from
 * Destinations / Expériences, but with the same weight. */
export const proLink: MenuItem & { eyebrow: string } = {
  eyebrow: "Espace dédié",
  label: "Professionnels & family offices",
  href: "/professionnels",
  description:
    "Entreprises, dirigeants et family offices : un interlocuteur unique pour tous vos déplacements.",
};

/** Pinned in the menu footer: the header CTAs are `hidden md:inline-flex`,
 * so on mobile these are the only conversion paths on the whole site.
 * « Contactez-nous » ouvre le formulaire court (trois écrans) plutôt que la
 * page de coordonnées : la demande arrive écrite et se mesure. */
export const menuCtas: { contact: MenuItem; primary: MenuItem } = {
  contact: { label: "Contactez-nous", href: "/nous-ecrire" },
  primary: { label: "Créer votre voyage", href: "/votre-projet" },
};
