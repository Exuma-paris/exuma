import type { Metadata } from "next";
import {
  LegalList,
  LegalPage,
  LegalSection,
} from "@/components/sections/legal-page";
import {
  EXUMA_ADDRESS,
  EXUMA_EMAIL,
  EXUMA_LEGAL,
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
      updatedLabel="Mise à jour le 4 novembre 2026"
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
          Le responsable du traitement est la société{" "}
          <strong>{EXUMA_LEGAL.name}</strong>, exerçant sous le nom commercial
          Exuma, dont le siège social est situé {EXUMA_ADDRESS}. Pour toute
          question relative à vos données personnelles, vous pouvez nous écrire
          à <a href={`mailto:${EXUMA_EMAIL}`}>{EXUMA_EMAIL}</a>.
        </p>
      </LegalSection>

      <LegalSection heading="Données collectées">
        <p>
          Nous collectons les données suivantes, lorsque vous remplissez un
          formulaire du site, lorsque vous nous appelez ou nous écrivez, ou au
          fil de la préparation de votre voyage :
        </p>
        <LegalList
          items={[
            <>
              <strong>Données d'identification</strong> : civilité, nom,
              prénom, société, date de naissance, nationalité, ainsi que celles
              des personnes qui voyagent avec vous, y compris les enfants.
            </>,
            <>
              <strong>Coordonnées</strong> : adresse postale, courriel,
              numéro de téléphone.
            </>,
            <>
              <strong>Documents de voyage</strong> : copie de passeport ou de
              pièce d'identité, visas, lorsqu'ils sont nécessaires au voyage.
            </>,
            <>
              <strong>Données relatives au voyage</strong> : destinations
              souhaitées, dates, budget, composition du groupe, préférences.
            </>,
            <>
              <strong>Données de santé</strong> : allergies, régime alimentaire
              ou besoins de mobilité, uniquement si vous nous les communiquez,
              avec votre accord explicite, pour organiser le voyage.
            </>,
            <>
              <strong>Appels téléphoniques</strong> : enregistrement et, le cas
              échéant, transcription de vos échanges avec nos conseillers (voir
              ci-dessous).
            </>,
            <>
              <strong>Données de paiement</strong> : traitées par notre
              prestataire de paiement, jamais conservées par Exuma.
            </>,
            <>
              <strong>Données techniques</strong> : adresse IP, type de
              navigateur, pages visitées (voir notre{" "}
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
              <strong>Réponse à vos demandes, établissement d'un devis et exécution du contrat de voyage</strong> :
              mesures précontractuelles et exécution du contrat (art. 6.1.b RGPD).
            </>,
            <>
              <strong>Conservation de vos documents et préférences</strong> pour
              faciliter vos prochains voyages : consentement (art. 6.1.a), et
              consentement explicite pour les données de santé (art. 9.2.a).
            </>,
            <>
              <strong>Gestion de la relation client</strong>, suivi des
              demandes, service après-vente : intérêt légitime (art. 6.1.f).
            </>,
            <>
              <strong>Enregistrement des appels</strong>, pour la formation des
              conseillers, la qualité du service et le suivi des dossiers :
              intérêt légitime (art. 6.1.f).
            </>,
            <>
              <strong>Envoi d'informations commerciales</strong> sur nos
              voyages et expériences : consentement (art. 6.1.a) ou, pour nos
              clients et des services analogues, intérêt légitime (art. 6.1.f).
              Chaque envoi comporte un lien de désinscription.
            </>,
            <>
              <strong>Respect des obligations légales et fiscales</strong> :
              obligation légale (art. 6.1.c).
            </>,
            <>
              <strong>Mesure d'audience et publicité en ligne</strong>, si elles
              sont activées : consentement recueilli avant tout dépôt de cookie.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection heading="Enregistrement des appels">
        <p>
          Vos appels avec nos conseillers sont susceptibles d'être enregistrés
          et, le cas échéant, transcrits automatiquement, à l'aide de notre
          outil de téléphonie. Vous en êtes informé en début d'appel et vous
          pouvez vous y opposer à tout moment, y compris pendant l'échange,
          sans que cela change la suite donnée à votre demande.
        </p>
        <p>
          L'accès à ces enregistrements est limité aux personnes habilitées.
          Ils ne donnent lieu à aucune décision entièrement automatisée.
        </p>
      </LegalSection>

      <LegalSection heading="Destinataires et transferts">
        <p>
          Vos données sont accessibles aux équipes d'Exuma habilitées à les
          traiter. Elles peuvent être transmises, dans la stricte mesure
          nécessaire, à :
        </p>
        <LegalList
          items={[
            <>
              <strong>nos prestataires de voyage</strong> : compagnies
              aériennes, hôteliers, agences réceptives locales, assureurs ;
            </>,
            <>
              <strong>nos systèmes de réservation</strong> : Amadeus et
              WonderMiles ;
            </>,
            <>
              <strong>nos outils de gestion et de relation client</strong> :
              Viaxoft et Monday ;
            </>,
            <>
              <strong>nos outils de communication</strong> : Brevo pour les
              e-mails, Aircall pour la téléphonie, notre messagerie ;
            </>,
            <>
              <strong>nos prestataires techniques</strong> : prestataire de
              paiement, hébergeur du site ;
            </>,
            <>
              <strong>les autorités</strong> habilitées, lorsque la loi l'exige.
            </>,
          ]}
        />
        <p>
          Nous ne vendons pas vos données et nous ne transmettons pas vos
          demandes à d'autres agences.
        </p>
        <p>
          Lorsque le voyage ou l'un de ces outils l'exige, certaines données
          peuvent être transférées en dehors de l'Union européenne (par exemple
          vers un hôtel hors UE). Ces transferts s'effectuent sur la base des
          garanties prévues par le RGPD : décision d'adéquation de la Commission
          européenne ou clauses contractuelles types, ou lorsqu'ils sont
          nécessaires à l'exécution de votre contrat de voyage.
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
              <strong>Copies de documents de voyage et données de santé</strong> :
              tant que le document est valide et que la relation client se
              poursuit, ce service étant destiné à simplifier vos prochains
              voyages. Vous pouvez en demander la suppression à tout moment.
            </>,
            <>
              <strong>Enregistrements d'appels</strong> : 6 mois maximum.
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
