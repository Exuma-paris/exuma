import Script from "next/script";

/**
 * Google Tag Manager, chargé depuis le serveur de mesure d'Exuma (Taggrs,
 * `sst.exuma.paris`) et non depuis `googletagmanager.com` : même conteneur,
 * servi en première partie. Ces deux valeurs sont publiques, elles figurent
 * dans le HTML de chaque page ; c'est l'expert tracking qui les fournit.
 */
const TAGGRS_HOST = "https://sst.exuma.paris";
const TAGGRS_LOADER_ID = "fdd5ywsibl";

/**
 * L'injection reste commandée par `NEXT_PUBLIC_GTM_ID` (identifiant du
 * conteneur). Vide en local et sur les previews Vercel : rien n'est injecté,
 * et les événements poussés dans `window.dataLayer` restent lisibles dans la
 * console pour vérification.
 */
const RAW_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";
export const GTM_ID = /^GTM-[A-Z0-9]+$/.test(RAW_ID) ? RAW_ID : null;

/** Snippet Taggrs, à placer dans le `<head>`. */
export function GoogleTagManager() {
  if (!GTM_ID) return null;
  return (
    <Script
      id="gtm"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='${TAGGRS_HOST}/'+i+'.js';f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${TAGGRS_LOADER_ID}');`,
      }}
    />
  );
}

/** Repli sans JavaScript, à placer en tout début de `<body>`. */
export function GoogleTagManagerNoScript() {
  if (!GTM_ID) return null;
  return (
    <noscript>
      <iframe
        src={`${TAGGRS_HOST}/${TAGGRS_LOADER_ID}.html`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
