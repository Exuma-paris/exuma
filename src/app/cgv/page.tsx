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
  title: "Conditions générales de vente — Exuma",
  description:
    "Conditions générales de vente d'Exuma, agence de voyage de luxe : réservation, paiement, modification, annulation, responsabilité.",
  alternates: { canonical: "/cgv" },
};

export default function CgvPage() {
  return (
    <LegalPage
      eyebrow="Informations légales"
      heading="Conditions générales de vente"
      updatedLabel="Mise à jour le 14 mai 2026"
    >
      <LegalSection heading="Préambule">
        <p>
          Les présentes conditions générales de vente (ci-après « CGV »)
          régissent les relations contractuelles entre la société{" "}
          <strong>Exuma</strong>, immatriculée au RCS de Paris sous le numéro{" "}
          <em>[à compléter]</em>, dont le siège social est situé{" "}
          {EXUMA_ADDRESS}, immatriculée Atout France sous le numéro{" "}
          <em>[à compléter — IM075…]</em>, et toute personne physique ou
          morale (ci-après le « Client ») souhaitant réserver un voyage,
          séjour ou prestation auprès d'Exuma.
        </p>
        <p>
          Les présentes CGV sont conformes aux dispositions du Code du
          tourisme, notamment ses articles L.211-1 et suivants et R.211-3 à
          R.211-13 qui sont reproduits en fin de document.
        </p>
      </LegalSection>

      <LegalSection heading="1. Réservation">
        <p>
          Toute réservation suppose la consultation et l'acceptation pleine et
          entière des présentes CGV ainsi que des conditions particulières
          remises au Client avec son devis. La réservation devient ferme à
          réception du contrat signé et du versement de l'acompte prévu.
        </p>
        <p>
          Les informations contenues dans les supports de présentation d'Exuma
          (site internet, devis, brochures) ont une valeur indicative. Seules
          les informations figurant au contrat de voyage individuel ont une
          valeur contractuelle.
        </p>
      </LegalSection>

      <LegalSection heading="2. Prix">
        <p>
          Les prix sont exprimés en euros toutes taxes comprises. Ils sont
          établis sur la base des tarifs et taux de change en vigueur à la
          date du devis. Conformément à l'article L.211-12 du Code du tourisme,
          ils peuvent être révisés à la hausse comme à la baisse jusqu'à 20
          jours avant le départ pour tenir compte des variations du coût des
          transports (notamment du carburant), des redevances et taxes
          afférentes aux services offerts, ou des taux de change.
        </p>
      </LegalSection>

      <LegalSection heading="3. Modalités de paiement">
        <p>
          Sauf conditions particulières, le Client verse un acompte de 30 % du
          prix total à la signature du contrat. Le solde est dû au plus tard{" "}
          <em>[à compléter — délai en jours]</em> jours avant la date de
          départ. Toute réservation à moins de{" "}
          <em>[à compléter]</em> jours du départ donne lieu au règlement
          intégral du prix.
        </p>
        <p>
          Le défaut de paiement aux dates convenues entraîne, après mise en
          demeure restée sans effet, l'annulation de la réservation aux torts
          du Client et l'application des frais d'annulation prévus à
          l'article 5.
        </p>
      </LegalSection>

      <LegalSection heading="4. Modification du fait du Client">
        <p>
          Toute demande de modification d'une réservation confirmée (dates,
          itinéraire, nombre de participants, prestations) doit être adressée
          par écrit à Exuma. Les modifications sont soumises à la disponibilité
          des prestataires et peuvent entraîner des frais variables, qui
          seront communiqués au Client avant validation.
        </p>
      </LegalSection>

      <LegalSection heading="5. Annulation du fait du Client">
        <p>
          Toute annulation doit être notifiée à Exuma par écrit. La date de
          réception de cette notification fait foi pour le calcul des frais
          d'annulation, qui sont les suivants :
        </p>
        <LegalList
          items={[
            <>
              Plus de 60 jours avant le départ :{" "}
              <em>[à compléter — % du prix total]</em>
            </>,
            <>De 60 à 31 jours avant le départ : <em>[à compléter]</em></>,
            <>De 30 à 21 jours avant le départ : <em>[à compléter]</em></>,
            <>De 20 à 8 jours avant le départ : <em>[à compléter]</em></>,
            <>Moins de 8 jours avant le départ : 100 % du prix total</>,
          ]}
        />
        <p>
          Certaines prestations (vols secs, hébergements à conditions
          particulières) peuvent faire l'objet de barèmes spécifiques
          communiqués au moment du devis.
        </p>
      </LegalSection>

      <LegalSection heading="6. Annulation ou modification du fait d'Exuma">
        <p>
          Conformément aux articles L.211-13 et L.211-14 du Code du tourisme,
          Exuma se réserve la faculté d'annuler ou de modifier le voyage en
          cas de force majeure, pour des raisons tenant à la sécurité du
          Client, ou si le nombre minimum de participants n'est pas atteint.
          Le Client en est informé dans les meilleurs délais et peut soit
          accepter la modification, soit obtenir le remboursement intégral
          des sommes versées sans pouvoir prétendre à une indemnité.
        </p>
      </LegalSection>

      <LegalSection heading="7. Cession du contrat">
        <p>
          Conformément à l'article L.211-11 du Code du tourisme, le Client
          peut céder son contrat à un tiers remplissant les mêmes conditions,
          tant que ce contrat n'a produit aucun effet et jusqu'à 7 jours avant
          le début du voyage. Le cédant et le cessionnaire sont solidairement
          responsables du paiement du solde du prix et des frais de cession.
        </p>
      </LegalSection>

      <LegalSection heading="8. Documents de voyage et formalités">
        <p>
          Les ressortissants français sont informés des formalités
          administratives et sanitaires applicables avant la signature du
          contrat. Il appartient au Client de vérifier la validité de ses
          documents (passeport, visa, carnet de vaccination) et de se
          conformer aux exigences en vigueur. Les non-ressortissants français
          doivent se renseigner auprès des autorités compétentes de leur pays
          de résidence.
        </p>
      </LegalSection>

      <LegalSection heading="9. Assurances">
        <p>
          Le prix des voyages ne comprend pas l'assurance assistance,
          rapatriement et annulation. Exuma propose, en option, une assurance
          adaptée au voyage envisagé. Le Client est libre de souscrire
          l'assurance de son choix. À défaut, il déclare assumer personnellement
          les conséquences des risques non couverts.
        </p>
      </LegalSection>

      <LegalSection heading="10. Responsabilité">
        <p>
          Exuma est responsable de plein droit à l'égard du Client de la bonne
          exécution des obligations résultant du contrat, conformément à
          l'article L.211-16 du Code du tourisme. Cette responsabilité ne
          s'applique pas lorsque l'inexécution ou la mauvaise exécution est
          imputable soit au Client, soit au fait imprévisible et insurmontable
          d'un tiers étranger à la fourniture des prestations, soit à un cas
          de force majeure.
        </p>
      </LegalSection>

      <LegalSection heading="11. Réclamations et médiation">
        <p>
          Toute réclamation relative à un voyage doit être adressée par
          courrier recommandé avec accusé de réception à Exuma —{" "}
          {EXUMA_ADDRESS} — dans un délai de 30 jours suivant la fin du
          voyage. À défaut d'une réponse satisfaisante dans un délai de 60
          jours, le Client peut saisir le Médiateur du Tourisme et du Voyage
          (MTV) :{" "}
          <a href="https://www.mtv.travel" target="_blank" rel="noreferrer">
            www.mtv.travel
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="12. Données personnelles">
        <p>
          Les données personnelles collectées dans le cadre de la réservation
          sont traitées conformément à notre{" "}
          <a href="/confidentialite">politique de confidentialité</a>. Pour
          toute question, écrivez-nous à{" "}
          <a href={`mailto:${EXUMA_EMAIL}`}>{EXUMA_EMAIL}</a>.
        </p>
      </LegalSection>

      <LegalSection heading="13. Loi applicable et juridiction">
        <p>
          Les présentes CGV sont régies par le droit français. En cas de
          litige, et après échec d'une tentative de résolution amiable,
          compétence est attribuée aux tribunaux français.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Pour toute question relative aux présentes CGV, vous pouvez nous
          joindre par courrier à {EXUMA_ADDRESS}, par téléphone au{" "}
          <a href={`tel:${EXUMA_PHONE.replace(/\s/g, "")}`}>{EXUMA_PHONE}</a>{" "}
          ou par courriel à{" "}
          <a href={`mailto:${EXUMA_EMAIL}`}>{EXUMA_EMAIL}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
