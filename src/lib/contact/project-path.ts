/**
 * Lien du tunnel « Créer votre voyage », sans aucune dépendance au contenu :
 * ce fichier est importé par des composants client (en-tête, pied de page).
 * `project-link.ts` importe le registre ; l'utiliser côté client enverrait
 * tout le contenu du site au navigateur.
 */

/** Le tunnel « Créer votre voyage », partout sur le site. */
export const PROJECT_PATH = "/votre-projet";

/**
 * Le même lien, mais qui dit d'où l'on vient. Le formulaire pré-remplit alors
 * sa première question : quelqu'un qui clique depuis la page Japon n'a pas à
 * réécrire « Japon ». Rien n'est verrouillé, le champ reste modifiable.
 */
export function projectHref(slug?: string | null): string {
  return slug
    ? `${PROJECT_PATH}?destination=${encodeURIComponent(slug)}`
    : PROJECT_PATH;
}
