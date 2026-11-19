import { getServiceLineup } from "@/lib/content/service-lineup";
import { continents, themes } from "@/lib/content/registry";

import {
  companyLinks,
  type MenuGroup,
} from "@/lib/content/menu-links";

export {
  menuCtas,
  proLink,
  type MenuGroup,
  type MenuGroupKey,
  type MenuItem,
} from "@/lib/content/menu-links";

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
      label: "Expériences",
      items: Object.values(themes).map((t) => ({
        label: t.name,
        href: `/themes/${t.slug}`,
      })),
    },
    {
      key: "conciergerie",
      label: "Services & conciergerie",
      intro: {
        text: "Ce qui réussit un voyage tient rarement à l'itinéraire, mais à tout ce qui l'entoure. Nos pôles de services couvrent ce périmètre, de la préparation au retour.",
        cta: { label: "Voir tous nos services", href: "/services" },
      },
      // Même liste et même ordre que la grille /services.
      items: getServiceLineup().map((s) => ({
        label: s.name,
        href: s.href,
        description: s.description,
      })),
    },
    {
      key: "agence",
      label: "La maison",
      items: companyLinks,
    },
  ];
}
