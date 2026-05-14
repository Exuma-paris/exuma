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
