import type { Metadata } from "next";
import {
  LegalList,
  LegalPage,
  LegalSection,
} from "@/components/sections/legal-page";
import { EXUMA_EMAIL } from "@/lib/exuma";

export const metadata: Metadata = {
  title: "Gestion des cookies — Exuma",
  description:
    "Quels cookies sont déposés sur exuma.paris, à quoi ils servent, et comment les paramétrer.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Données personnelles"
      heading="Gestion des cookies"
      updatedLabel="Mise à jour le 14 mai 2026"
    >
      <LegalSection heading="Qu'est-ce qu'un cookie ?">
        <p>
          Un cookie est un petit fichier texte déposé sur votre terminal
          (ordinateur, tablette, mobile) lorsque vous visitez un site
          internet. Il permet au site de reconnaître votre navigateur et de
          conserver certaines informations vous concernant — préférences de
          langue, panier en cours, état de connexion, statistiques de visite.
        </p>
        <p>
          L'utilisation des cookies est encadrée par l'article 82 de la loi
          « Informatique et Libertés » et les recommandations de la
          Commission Nationale de l'Informatique et des Libertés (CNIL).
        </p>
      </LegalSection>

      <LegalSection heading="Cookies utilisés sur exuma.paris">
        <p>
          Le site exuma.paris utilise les catégories de cookies suivantes :
        </p>
        <LegalList
          items={[
            <>
              <strong>Cookies strictement nécessaires</strong> — indispensables
              au fonctionnement du site (gestion de la session, sécurité,
              équilibrage de charge). Ils ne nécessitent pas votre consentement.
            </>,
            <>
              <strong>Cookies de mesure d'audience</strong> — nous permettent
              de comprendre l'utilisation du site et d'en améliorer le
              fonctionnement. <em>[à compléter — préciser les outils utilisés
              : Google Analytics, Plausible, Matomo, etc., et leur configuration
              en mode anonymisé]</em>
            </>,
            <>
              <strong>Cookies tiers</strong> — déposés par des services
              externes intégrés au site (cartes, vidéos, réseaux sociaux).{" "}
              <em>[à compléter — lister les services tiers réellement utilisés
              : Mapbox, YouTube, Vimeo, etc.]</em>
            </>,
          ]}
        />
        <p>
          <em>
            [à compléter — tableau détaillé des cookies (nom, finalité, durée
            de conservation, émetteur) lorsque la liste sera arrêtée. La CNIL
            recommande de tenir cette liste à jour à la disposition des
            utilisateurs.]
          </em>
        </p>
      </LegalSection>

      <LegalSection heading="Vos choix">
        <p>
          Lors de votre première visite, un bandeau d'information vous permet
          d'accepter ou de refuser le dépôt des cookies non strictement
          nécessaires. Vous pouvez à tout moment modifier vos préférences via{" "}
          <em>[à compléter — lien ou bouton vers le module de gestion des
          consentements]</em>.
        </p>
        <p>
          Vous pouvez également configurer votre navigateur pour qu'il vous
          informe du dépôt des cookies, vous laisse le choix de les accepter
          ou de les refuser, ou les supprime automatiquement à la fermeture.
          Les modalités de paramétrage diffèrent selon le navigateur :
        </p>
        <LegalList
          items={[
            <a href="https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox-ordinateur" target="_blank" rel="noreferrer">Mozilla Firefox</a>,
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer">Google Chrome</a>,
            <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer">Apple Safari</a>,
            <a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noreferrer">Microsoft Edge</a>,
          ]}
        />
        <p>
          Le refus des cookies de mesure d'audience et des cookies tiers
          n'empêche pas la navigation sur le site. Le refus des cookies
          strictement nécessaires peut, en revanche, dégrader certaines
          fonctionnalités.
        </p>
      </LegalSection>

      <LegalSection heading="Durée de conservation">
        <p>
          Conformément aux recommandations de la CNIL, les cookies déposés
          avec votre consentement ont une durée de vie maximale de 13 mois.
          À l'expiration de ce délai, votre consentement vous est de nouveau
          demandé.
        </p>
      </LegalSection>

      <LegalSection heading="Plus d'informations">
        <p>
          Pour en savoir plus sur les cookies et la protection de vos
          données personnelles, vous pouvez consulter le site de la CNIL :{" "}
          <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">
            www.cnil.fr
          </a>
          .
        </p>
        <p>
          Pour toute question relative aux cookies, écrivez-nous à{" "}
          <a href={`mailto:${EXUMA_EMAIL}`}>{EXUMA_EMAIL}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
