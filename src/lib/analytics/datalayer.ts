/**
 * Point d'entrée unique vers le dataLayer de Google Tag Manager.
 *
 * Le vocabulaire (noms d'événements et de paramètres) est celui de l'ancien
 * tunnel Webflow, pour que le conteneur GTM existant continue de fonctionner
 * sans être reconfiguré : `form.view_<écran>`, `form.submit`, `click_*`.
 * Voir le plan de tag pour la liste complète.
 */

export type DataLayerEvent = { event: string } & Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

/**
 * Clés poussées par les événements `form.*` depuis le dernier chargement de
 * page. GTM garde en mémoire chaque clé poussée tant que la page n'est pas
 * rechargée ; ce registre vit exactement aussi longtemps, et se remplit tout
 * seul : une question ajoutée à un formulaire n'a rien à déclarer ici.
 */
const formKeys = new Set<string>();

export function pushDataLayer(payload: DataLayerEvent): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  if (payload.event.startsWith("form.")) {
    for (const key of Object.keys(payload)) {
      if (key !== "event") formKeys.add(key);
    }
  }
  window.dataLayer.push(payload);
}

/**
 * À appeler à l'ouverture d'un formulaire, avant son premier `form.view_*` :
 * remet à `undefined` tout ce que les formulaires précédents ont poussé. Le
 * site navigue sans rechargement ; sans cela, les réponses d'un formulaire se
 * retrouvent sur les événements du suivant.
 */
export function resetFormDataLayer(): void {
  if (typeof window === "undefined" || formKeys.size === 0) return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(
    Object.fromEntries([...formKeys].map((key) => [key, undefined])),
  );
  formKeys.clear();
}
