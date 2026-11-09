"use client";

import { useEffect, useRef } from "react";
import { pushDataLayer } from "@/lib/analytics/datalayer";

/**
 * `form.view_first` : l'affichage de la page qui ouvre un tunnel (la landing
 * d'une destination). Les écrans du formulaire lui-même sont poussés par
 * `ContactFlow`, de `form.view_second` à `form.view_last`.
 */
export function FormViewFirst({ product }: { product: string }) {
  const sent = useRef(false);
  useEffect(() => {
    if (sent.current) return;
    sent.current = true;
    pushDataLayer({ event: "form.view_first", product });
  }, [product]);
  return null;
}
