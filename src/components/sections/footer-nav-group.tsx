"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "@untitledui/icons";
import type { ReactNode } from "react";

/**
 * Un groupe de liens du pied de page. Repliable en dessous de `md`, ouvert et
 * sans affordance au-dessus.
 *
 * Pourquoi un `<details>` plutôt qu'un accordéon React : les 22 liens doivent
 * rester dans le HTML servi, pour les moteurs comme pour un visiteur sans JS.
 * Le repli n'est qu'un confort d'affichage, il ne conditionne pas le contenu.
 *
 * Le rendu serveur sort le bloc ouvert : sur mobile il est sous la ligne de
 * flottaison, personne ne voit la fermeture à l'hydratation, alors qu'un rendu
 * fermé ferait clignoter tout le pied de page sur les écrans larges.
 */
export function FooterNavGroup({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => {
      if (ref.current) ref.current.open = mq.matches;
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <details
      ref={ref}
      open
      className="group border-b border-background/10 last:border-b-0 md:border-0"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 md:cursor-default md:py-0 [&::-webkit-details-marker]:hidden">
        <span className="text-eyebrow text-background/60">{label}</span>
        <ChevronDown
          className="size-4 shrink-0 text-background/60 transition-transform group-open:rotate-180 md:hidden"
          aria-hidden
        />
      </summary>
      <div className="pb-5 md:pb-0 md:pt-4">{children}</div>
    </details>
  );
}
