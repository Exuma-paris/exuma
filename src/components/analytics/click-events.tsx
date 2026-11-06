"use client";

import { useEffect } from "react";
import { pushDataLayer } from "@/lib/analytics/datalayer";
import { ctaEventsFromHref } from "@/lib/analytics/cta-events";

/**
 * Écouteur de clic global, monté une fois dans le layout racine. Reprend le
 * script de l'ancien tunnel Webflow :
 *
 * - un élément qui porte `data-event-button="click_a, click_b"` pousse un
 *   événement par nom listé ;
 * - à défaut, un lien dont la cible est un formulaire, un téléphone ou une
 *   adresse e-mail pousse les événements déduits de son `href`
 *   (voir `ctaEventsFromHref`) ;
 * - chaque événement porte `buttonId` et `buttonText`. `buttonId` vient de
 *   l'attribut `id`, sinon de `data-event-id` (l'emplacement : `header`,
 *   `footer-create`, `landing-hero-create`…), sinon de la zone de la page.
 *
 * En phase de capture, pour partir avant la navigation déclenchée par le lien.
 */
export function ClickEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const tagged = target.closest<HTMLElement>("[data-event-button]");
      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      const element = tagged ?? anchor;
      if (!element) return;

      const names =
        tagged?.dataset.eventButton ??
        ctaEventsFromHref(anchor?.getAttribute("href"));
      if (!names) return;

      const buttonId =
        element.id || element.dataset.eventId || locationOf(element);
      const buttonText = (element.innerText || element.textContent || "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 80);

      for (const name of names.split(",")) {
        const eventName = name.trim();
        if (eventName) pushDataLayer({ event: eventName, buttonId, buttonText });
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}

function locationOf(element: Element): string {
  const scope = element.closest<HTMLElement>(
    "[data-event-location], header, footer, nav, main",
  );
  if (!scope) return "page";
  return scope.dataset.eventLocation ?? scope.tagName.toLowerCase();
}
