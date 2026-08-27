/**
 * Exuma brand-level constants. Single source of truth for contact info —
 * shared across the header, footer, landing pages, structured-data emitter,
 * and the design-system demo. Edit the value here and it propagates everywhere.
 */

export const EXUMA_PHONE = "+33 1 47 53 89 21";
export const EXUMA_EMAIL = "contact@exuma.paris";
export const EXUMA_ADDRESS = "73 rue de Courcelles, 75008 Paris";
export const EXUMA_HOURS = "Lundi au vendredi, 9h–19h. Visites sur rendez-vous.";

/** Pre-built `tel:` href with whitespace stripped. */
export const EXUMA_TEL_HREF = `tel:${EXUMA_PHONE.replace(/\s/g, "")}`;

/** Pre-built `mailto:` href. */
export const EXUMA_MAILTO_HREF = `mailto:${EXUMA_EMAIL}`;

/**
 * Adresse éclatée pour les données structurées (schema.org PostalAddress).
 * `EXUMA_ADDRESS` reste la version affichée ; ces champs-ci existent parce
 * qu'un moteur ne sait pas découper une chaîne libre en rue / code postal.
 */
export const EXUMA_POSTAL_ADDRESS = {
  streetAddress: "73 rue de Courcelles",
  postalCode: "75008",
  addressLocality: "Paris",
  addressCountry: "FR",
} as const;

/** Comptes sociaux officiels, dans l'ordre d'affichage du pied de page. */
export const EXUMA_SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/exuma_paris/",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/exumafr/",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/exumaparis/",
  },
] as const;
