"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/analytics/attribution";

/** Mémorise l'origine de la visite dès la première page, voir `attribution.ts`. */
export function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
