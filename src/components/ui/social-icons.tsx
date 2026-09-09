import type { SVGProps } from "react";

/**
 * Icônes de marque au trait, absentes de `@untitledui/icons` (qui ne fournit
 * aucun logo tiers). Dessinées au même gabarit que les icônes du pied de page
 * — 24×24, `currentColor`, trait de 1,75 — pour qu'elles s'alignent avec
 * l'enveloppe, le téléphone et l'épingle.
 */
const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M18 2.5h-3a5 5 0 0 0-5 5v3H7v4h3v7h4v-7h3l1-4h-4v-3a1 1 0 0 1 1-1h3v-4Z" />
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M16 8.5a5.5 5.5 0 0 1 5.5 5.5v7h-4v-7a1.5 1.5 0 0 0-3 0v7h-4v-12h4v1.2A5.47 5.47 0 0 1 16 8.5Z" />
      <rect x="2.5" y="9.5" width="4" height="12" />
      <circle cx="4.5" cy="4.5" r="2" />
    </svg>
  );
}

export const socialIcons = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  LinkedIn: LinkedInIcon,
} as const;
