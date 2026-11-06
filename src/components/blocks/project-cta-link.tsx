"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { projectHref } from "@/lib/contact/project-link";

/**
 * Lien vers « Créer votre voyage » qui emmène la destination lue. Sur
 * `/destinations/japon`, le formulaire s'ouvre avec le Japon déjà renseigné ;
 * ailleurs, c'est le lien habituel. Client parce qu'il lit l'URL courante :
 * les blocs globaux (en-tête, pied de page) sont rendus une fois pour tout
 * le site et ne connaissent pas la page qui les affiche.
 */
export function useProjectHref(): string {
  const pathname = usePathname();
  return projectHref(pathname?.match(/^\/destinations\/([^/]+)/)?.[1]);
}

/**
 * Le libellé suit la page : une page qui parle d'un lieu ou d'une envie vend
 * un voyage à créer, une page qui parle de la maison invite à le lui confier,
 * et l'espace professionnels mène à son propre formulaire.
 */
const HOUSE_PAGES = /^\/(approche|a-propos|services)(\/|$)/;

function useProjectCta(): { label: string; href: string } {
  const pathname = usePathname() ?? "";
  const href = useProjectHref();
  if (/^\/professionnels(\/|$)/.test(pathname)) {
    return {
      label: "Confiez-nous vos déplacements",
      href: "/professionnels/contact",
    };
  }
  if (pathname === "/" || HOUSE_PAGES.test(pathname)) {
    return { label: "Confiez-nous votre projet", href };
  }
  return { label: "Créer votre voyage", href };
}

/** Le bouton complet, libellé compris, pour les blocs présents sur tout le site. */
export function ContextualProjectCta({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  const { label, href } = useProjectCta();
  return (
    <Link href={href} onClick={onClick} className={className}>
      {label}
    </Link>
  );
}
