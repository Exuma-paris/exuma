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

export type MenuItem = { label: string; href: string };

export type MenuGroup = {
  key: MenuGroupKey;
  label: string;
  items: MenuItem[];
};

const companyLinks: MenuItem[] = [
  { label: "À propos d'Exuma", href: "/a-propos" },
  { label: "Notre approche", href: "/approche" },
  { label: "Contactez-nous", href: "/contact" },
  { label: "FAQ", href: "/#faq" },
  { label: "Créer votre voyage", href: "/reserver" },
];

export function getMenuGroups(): MenuGroup[] {
  return [
    {
      key: "continents",
      label: "Continents",
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
      items: Object.values(serviceCategories).map((s) => ({
        label: s.name,
        href: `/services/${s.slug}`,
      })),
    },
    {
      key: "agence",
      label: "Agence",
      items: companyLinks,
    },
  ];
}
