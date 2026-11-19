import { getNavIndex } from "@/lib/content/nav-index";
import { HeaderClient, type HeaderProps } from "./header-client";

/**
 * En-tête du site. Composant serveur : il prépare la liste légère du menu et
 * de la recherche (`getNavIndex`) et la passe à la partie interactive, pour
 * que le contenu complet du site ne parte jamais dans le navigateur.
 */
export function Header(props: HeaderProps) {
  return <HeaderClient {...props} nav={getNavIndex()} />;
}
