import type { Metadata } from "next";
import {
  LegalList,
  LegalPage,
  LegalSection,
} from "@/components/sections/legal-page";
import {
  EXUMA_ADDRESS,
  EXUMA_EMAIL,
  EXUMA_PHONE,
} from "@/lib/exuma";

export const metadata: Metadata = {
  title: "Mentions légales — Exuma",
  description:
    "Mentions légales d'Exuma, agence de voyage de luxe : éditeur, hébergeur, propriété intellectuelle.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      eyebrow="Informations légales"
      heading="Mentions légales"
      updatedLabel="Mise à jour le 14 mai 2026"
    >
      <LegalSection heading="Éditeur du site">
        <p>
          Le présent site <strong>exuma.paris</strong> est édité par la société{" "}
          <strong>Exuma</strong>, dont les coordonnées sont les suivantes :
        </p>
        <LegalList
          items={[
            <>Forme juridique : <em>[à compléter — SAS, SARL, etc.]</em></>,
            <>Capital social : <em>[à compléter]</em> €</>,
            <>Siège social : {EXUMA_ADDRESS}</>,
            <>RCS : <em>[à compléter — RCS Paris n°]</em></>,
            <>SIREN : <em>[à compléter]</em></>,
            <>SIRET : <em>[à compléter]</em></>,
            <>N° TVA intracommunautaire : <em>[à compléter — FR…]</em></>,
            <>
              Immatriculation Atout France :{" "}
              <em>[à compléter — IM075…]</em>
            </>,
            <>
              Garant financier : <em>[à compléter — APST / Groupama Assurance-Crédit]</em>
            </>,
            <>
              Assurance responsabilité civile professionnelle :{" "}
              <em>[à compléter — assureur, n° de police]</em>
            </>,
            <>
              Téléphone :{" "}
              <a href={`tel:${EXUMA_PHONE.replace(/\s/g, "")}`}>{EXUMA_PHONE}</a>
            </>,
            <>
              Courriel : <a href={`mailto:${EXUMA_EMAIL}`}>{EXUMA_EMAIL}</a>
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection heading="Directeur de la publication">
        <p>
          <em>[à compléter — nom et qualité du directeur de la publication]</em>
        </p>
      </LegalSection>

      <LegalSection heading="Hébergement">
        <p>
          Le site est hébergé par <em>[à compléter — nom de l'hébergeur]</em>,{" "}
          <em>[adresse]</em>, <em>[téléphone]</em>.
        </p>
      </LegalSection>

      <LegalSection heading="Propriété intellectuelle">
        <p>
          L'ensemble des éléments composant le site exuma.paris (textes,
          images, photographies, logos, marques, vidéos, mise en page, base
          de données) est la propriété exclusive d'Exuma ou de ses partenaires.
          Toute reproduction, représentation, modification, publication ou
          adaptation, totale ou partielle, par quelque procédé que ce soit, est
          interdite sans l'autorisation écrite préalable d'Exuma, sauf exceptions
          prévues par la loi.
        </p>
        <p>
          Toute utilisation non autorisée du site ou de l'un de ses éléments
          engage la responsabilité de l'utilisateur et est susceptible de
          poursuites au titre de la contrefaçon (articles L.335-2 et suivants
          du Code de la propriété intellectuelle).
        </p>
      </LegalSection>

      <LegalSection heading="Données personnelles">
        <p>
          Le traitement des données personnelles collectées sur ce site est
          décrit dans notre{" "}
          <a href="/confidentialite">politique de confidentialité</a>. Pour
          toute demande relative à vos données personnelles, vous pouvez nous
          écrire à <a href={`mailto:${EXUMA_EMAIL}`}>{EXUMA_EMAIL}</a>.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies">
        <p>
          Pour en savoir plus sur l'utilisation des cookies sur ce site,
          consultez notre <a href="/cookies">page dédiée à la gestion des
          cookies</a>.
        </p>
      </LegalSection>

      <LegalSection heading="Loi applicable et juridiction">
        <p>
          Le présent site est soumis au droit français. En cas de litige, et
          après tentative de recherche d'une solution amiable, compétence
          expresse est attribuée aux tribunaux français.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
