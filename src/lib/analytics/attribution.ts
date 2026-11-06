/**
 * Origine de la visite, capturée sur la première page vue de la session et
 * jointe à chaque demande envoyée (`form.submit` et, demain, le payload de
 * l'endpoint). Remplace les champs cachés `source` / `gclid` / `url` du
 * formulaire Webflow : ici le formulaire n'est pas un `<form>` HTML, les
 * valeurs sont donc lues à l'arrivée et gardées en `sessionStorage` jusqu'à
 * l'envoi, même si le visiteur navigue entre-temps.
 */

const STORAGE_KEY = "exuma-attribution";

const URL_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "msclkid",
] as const;

export type Attribution = Partial<Record<(typeof URL_PARAMS)[number], string>> & {
  /** URL complète de la première page vue (le `url` du Webflow). */
  landing_url?: string;
  /** Référent externe de la première page vue, s'il y en a un. */
  referrer?: string;
};

/** À appeler une fois au chargement : ne fait rien si la session en a déjà une. */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const params = new URLSearchParams(window.location.search);
    const data: Attribution = { landing_url: window.location.href.slice(0, 500) };

    const referrer = document.referrer;
    if (referrer && !referrer.startsWith(window.location.origin)) {
      data.referrer = referrer.slice(0, 300);
    }
    for (const name of URL_PARAMS) {
      const value = params.get(name);
      if (value) data[name] = value.slice(0, 200);
    }

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Stockage indisponible (navigation privée, données bloquées) : la demande
    // partira sans origine, ce n'est pas bloquant.
  }
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}
