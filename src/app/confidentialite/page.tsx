import type { Metadata } from "next";
import {
  LegalList,
  LegalPage,
  LegalSection,
} from "@/components/sections/legal-page";
import {
  EXUMA_ADDRESS,
  EXUMA_EMAIL,
} from "@/lib/exuma";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Exuma",
  description:
    "Comment Exuma collecte, utilise et protège vos données personnelles, et comment exercer vos droits au titre du RGPD.",
  alternates: { canonical: "/confidentialite" },
};

export default function ConfidentialitePage() {
  return (
    <LegalPage
      eyebrow="Données personnelles"
      heading="Politique de confidentialité"
      updatedLabel="Mise à jour le 14 mai 2026"
    >
      <LegalSection heading="Préambule">
        <p>
          Exuma accorde une importance particulière à la protection de votre
          vie privée. La présente politique de confidentialité décrit la
          manière dont nous collectons, utilisons et protégeons les données
          personnelles que vous nous communiquez via le site exuma.paris ou
          dans le cadre de la préparation et de la réalisation de votre voyage.
        </p>
        <p>
          Elle est conforme au Règlement (UE) 2016/679 du 27 avril 2016
          (« RGPD ») et à la loi n°78-17 du 6 janvier 1978 modifiée dite
          « Informatique et Libertés ».
        </p>
      </LegalSection>

      <LegalSection heading="Responsable du traitement">
        <p>
          Le responsable du traitement est la société <strong>Exuma</strong>,
          dont le siège social est situé {EXUMA_ADDRESS}. Pour toute question
          relative à vos données personnelles, vous pouvez nous écrire à{" "}
          <a href={`mailto:${EXUMA_EMAIL}`}>{EXUMA_EMAIL}</a>.
        </p>
        <p>
          <em>
            [à compléter — coordonnées du Délégué à la protection des données
            (DPO) si désigné]
          </em>
        </p>
      </LegalSection>

      <LegalSection heading="Données collectées">
        <p>
          Nous collectons les données suivantes, selon le contexte :
        </p>
        <LegalList
          items={[
            <>
              <strong>Données d'identification</strong> : civilité, nom,
              prénom, date de naissance, nationalité.
            </>,
            <>
              <strong>Coordonnées</strong> : adresse postale, courriel,
              numéro de téléphone.
            </>,
            <>
              <strong>Données relatives au voyage</strong> : destinations
              souhaitées, dates, composition du groupe, préférences,
              contraintes alimentaires ou médicales communiquées
              volontairement.
            </>,
            <>
              <strong>Données de paiement</strong> : traitées par notre
              prestataire de paiement, jamais conservées par Exuma.
            </>,
            <>
              <strong>Données techniques</strong> : adresse IP, type de
              navigateur, pages visitées, durée de visite (voir notre{" "}
              <a href="/cookies">page cookies</a>).
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection heading="Finalités et bases légales">
        <p>
          Vos données sont traitées pour les finalités suivantes :
        </p>
        <LegalList
          items={[
            <>
              <strong>Établissement d'un devis et exécution du contrat de voyage</strong> —
              base légale : exécution du contrat (art. 6.1.b RGPD).
            </>,
            <>
              <strong>Gestion de la relation client</strong>, suivi des
              demandes, service après-vente — base légale : intérêt légitime
              (art. 6.1.f).
            </>,
            <>
              <strong>Envoi d'informations commerciales</strong> sur nos
              voyages et expériences — base légale : consentement (art. 6.1.a),
              révocable à tout moment.
            </>,
            <>
              <strong>Respect des obligations légales et fiscales</strong> —
              base légale : obligation légale (art. 6.1.c).
            </>,
            <>
              <strong>Mesure d'audience et amélioration du site</strong> —
              base légale : consentement pour les cookies non strictement
              nécessaires.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection heading="Destinataires et transferts">
        <p>
          Vos données sont accessibles aux équipes d'Exuma habilitées à les
          traiter. Elles peuvent être transmises, dans la stricte mesure
          nécessaire à l'exécution de votre voyage, à nos prestataires :
          compagnies aériennes, hôteliers, agences réceptives locales,
          prestataires de paiement, hébergeur du site.
        </p>
        <p>
          Lorsque le voyage l'exige, certaines données peuvent être transférées
          en dehors de l'Union européenne (par exemple vers un hôtel hors UE).
          Ces transferts s'effectuent sur la base des garanties prévues par
          le RGPD : décision d'adéquation de la Commission européenne ou
          clauses contractuelles types.
        </p>
      </LegalSection>

      <LegalSection heading="Durée de conservation">
        <p>
          Vos données sont conservées le temps strictement nécessaire aux
          finalités pour lesquelles elles ont été collectées :
        </p>
        <LegalList
          items={[
            <>
              <strong>Prospects</strong> : 3 ans à compter du dernier contact
              de votre part.
            </>,
            <>
              <strong>Clients</strong> : pendant toute la durée de la relation
              contractuelle, puis 5 ans à compter de la fin de cette relation
              (durée de prescription en matière commerciale).
            </>,
            <>
              <strong>Documents comptables et fiscaux</strong> : 10 ans
              conformément aux obligations légales.
            </>,
            <>
              <strong>Données de connexion</strong> : 13 mois maximum.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection heading="Vos droits">
        <p>
          Conformément au RGPD, vous disposez des droits suivants sur vos
          données :
        </p>
        <LegalList
          items={[
            <>droit d'accès et droit à une copie de vos données ;</>,
            <>droit de rectification des données inexactes ou incomplètes ;</>,
            <>droit à l'effacement (« droit à l'oubli ») ;</>,
            <>droit à la limitation du traitement ;</>,
            <>droit à la portabilité de vos données ;</>,
            <>droit d'opposition au traitement, notamment à des fins de prospection ;</>,
            <>droit de retirer votre consentement à tout moment ;</>,
            <>
              droit de définir des directives relatives au sort de vos données
              après votre décès.
            </>,
          ]}
        />
        <p>
          Pour exercer ces droits, écrivez-nous à{" "}
          <a href={`mailto:${EXUMA_EMAIL}`}>{EXUMA_EMAIL}</a> ou par courrier
          à {EXUMA_ADDRESS}, en joignant un justificatif d'identité. Nous
          répondons dans un délai d'un mois à compter de la réception de la
          demande.
        </p>
        <p>
          Si vous estimez, après nous avoir contactés, que vos droits ne sont
          pas respectés, vous pouvez introduire une réclamation auprès de la
          Commission Nationale de l'Informatique et des Libertés (CNIL) :{" "}
          <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">
            www.cnil.fr
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="Sécurité">
        <p>
          Exuma met en œuvre les mesures techniques et organisationnelles
          appropriées pour préserver la sécurité, la confidentialité et
          l'intégrité de vos données et empêcher qu'elles soient déformées,
          endommagées ou que des tiers non autorisés y aient accès.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies">
        <p>
          Pour en savoir plus sur les cookies déposés sur ce site et sur la
          manière de les paramétrer, consultez notre{" "}
          <a href="/cookies">page dédiée à la gestion des cookies</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
