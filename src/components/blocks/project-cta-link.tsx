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

export function ProjectCtaLink({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const href = useProjectHref();
  return (
    <Link href={href} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}
