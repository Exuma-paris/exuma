import type { Metadata } from "next";
import {
  LegalList,
  LegalPage,
  LegalSection,
} from "@/components/sections/legal-page";
import { EXUMA_EMAIL } from "@/lib/exuma";

export const metadata: Metadata = {
  title: "Gestion des cookies",
  description:
    "Quels cookies sont déposés sur exuma.paris, à quoi ils servent, et comment les paramétrer.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Données personnelles"
      heading="Gestion des cookies"
      updatedLabel="Mise à jour le 4 novembre 2026"
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
          À la date de cette mise à jour, le site exuma.paris ne dépose aucun
          cookie de mesure d'audience ni aucun cookie publicitaire.
        </p>
        <LegalList
          items={[
            <>
              <strong>Réglages d'affichage</strong> : une préférence d'affichage
              peut être enregistrée dans votre navigateur. Elle ne vous identifie
              pas et ne nécessite pas votre consentement.
            </>,
            <>
              <strong>Cartes</strong> : les cartes des pages destinations
              chargent leurs fonds depuis OpenFreeMap, qui reçoit à cette
              occasion votre adresse IP.
            </>,
            <>
              <strong>Vidéos</strong> : les vidéos YouTube ne sont chargées que
              si vous les lancez, en mode de confidentialité renforcée. YouTube
              applique alors sa propre politique.
            </>,
          ]}
        />
        <p>
          Si nous activons des outils de mesure d'audience ou de publicité en
          ligne, votre accord vous sera demandé au préalable par un bandeau, et
          la liste détaillée des cookies (nom, finalité, durée, émetteur) sera
          publiée sur cette page.
        </p>
      </LegalSection>

      <LegalSection heading="Vos choix">
        <p>
          Dès que des cookies non strictement nécessaires seront utilisés, un
          bandeau vous permettra de les accepter ou de les refuser lors de votre
          première visite, et de modifier ce choix à tout moment.
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
          Refuser les cookies n'empêche pas la navigation sur le site, mais
          peut dégrader certaines fonctionnalités, comme l'affichage des
          vidéos.
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
