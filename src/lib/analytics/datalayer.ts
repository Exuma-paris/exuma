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

export function pushDataLayer(payload: DataLayerEvent): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
}
