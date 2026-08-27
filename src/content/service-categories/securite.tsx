import type { ServiceCategory } from "@/lib/content/types";
import { EXUMA_TEL_HREF } from "@/lib/exuma";

/**
 * Quatrième catégorie produite, sur le gabarit de `mobilite.tsx` dans sa
 * variante sans référent :
 *
 *   hero > textColumns > featureRows > tips > infoGrid > faq > finalCta
 *
 * Deux garde-fous propres à cette catégorie, plus stricts qu'ailleurs :
 *
 *   1. La maison n'est PAS une société de sécurité. Elle missionne et vérifie
 *      des prestataires agréés. La page le dit explicitement dans la rangée 01
 *      et dans la FAQ, pour qu'aucun lecteur ne s'y trompe.
 *   2. Aucun avis médical n'est donné. La page réunit ce qu'exigent les
 *      autorités et oriente vers un médecin ou un centre de vaccinations
 *      internationales, sans jamais se substituer à eux.
 *
 * Le stub promettait « assistance 24/7 », standard déjà banni sur
 * `/professionnels`, et « protection sur-mesure, disponibilité continue ».
 * L'assistance est désormais décrite comme calibrée et convenue à l'avance.
 *
 * Arbitrages communs aux autres catégories :
 *   - Pas de page fille par prestation, d'où l'absence de `serviceSlugs`.
 *   - Registre B2C, porte B2B au seul `secondaryCta` du `finalCta`.
 *   - Aucun `testimonials` tant qu'aucun verbatim réel n'a été recueilli.
 *
 * Images : hero et rangées 02, 03, 04 produits. La rangée 01 garde
 * `hero-1.png`, l'ancien visuel du hero (arbitrage Rémi : on ne change pas),
 * qui ne fait donc plus doublon depuis que l'ouverture a la sienne.
 * Traçabilité dans `references/service/securite/SOURCES.md`.
 */

export const serviceCategory: ServiceCategory = {
  slug: "securite",
  name: "Sécurité & sérénité",
  blurb:
    "Prestataires de protection vérifiés, prise en charge des imprévus, assistance convenue à l'avance et exigences sanitaires à jour.",
  keywords: [
    "sécurité",
    "protection",
    "imprévus",
    "assistance",
    "santé",
    "vaccins",
    "assurance",
    "rapatriement",
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Sécurité & sérénité",
      heading: "Un voyage se prépare aussi sur ce qui pourrait mal tourner",
      description:
        "Ce qu'exige le pays où vous allez, ce que couvre réellement votre assurance, qui intervient si un problème survient et à quel numéro. Nous réunissons tout cela avant votre départ.",
      images: [
        {
          // La berline reste en rangée 01, où elle illustre la prestation
          // qu'elle nomme. L'ouverture montre la situation que la page traite :
          // vous êtes loin, il est tard, et la question est de savoir qui
          // décroche.
          src: "/service/securite/hero-nuit.png",
          alt: "Chambre d'hôtel la nuit, fenêtre ouverte sur une ville éclairée",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-background-soft",
      eyebrow: "Ce que vous y gagnez",
      heading: "Vous n'avez pas à improviser depuis l'étranger",
      columns: [
        "La plupart des voyages se déroulent sans incident. Ceux qui dérapent ne dérapent presque jamais là où on les attendait : un vol annulé se règle, une entorse la veille d'un trek beaucoup moins, et une pharmacie fermée un jour férié encore moins.",
        "Nous préparons donc ce qui n'arrivera probablement pas. Les contacts utiles sur place, les cliniques habituées aux patients étrangers, ce que couvre vraiment votre carte bancaire, et le numéro qui décroche quand le vôtre ne suffit plus.",
        "Et si quelque chose arrive, vous n'avez qu'un appel à passer. C'est nous qui parlons à l'assurance, à la clinique, à la compagnie et au consulat, pas vous depuis une chambre d'hôtel à trois heures du matin.",
      ],
      cta: { label: "Préparer votre prochain départ", href: "/contact" },
    },

    {
      type: "featureRows",
      eyebrow: "Nos prestations",
      heading: "Ce que nous préparons, et ce que nous déclenchons",
      description:
        "Quatre volets qui se combinent selon la destination et le voyage. Aucun n'est imposé, tous se décident avec vous.",
      items: [
        {
          title: "Sécurité rapprochée",
          paragraphs: [
            "Quand le déplacement le demande, nous missionnons une société de protection sur place : chauffeur formé, agent en tenue discrète, véhicule adapté. Disons-le clairement, nous ne sommes pas une société de sécurité : nous choisissons celle qui intervient et nous en répondons devant vous.",
            "Nous vérifions ce qui se vérifie : l'autorisation d'exercer dans le pays concerné, l'agrément CNAPS pour la France, l'assurance responsabilité civile de la société et ses références sur des missions comparables.",
            "Le dispositif est proportionné et discuté. Dans la plupart des cas, un chauffeur qui connaît la ville et un itinéraire choisi suffisent, et c'est ce que nous vous dirons plutôt que de vous vendre davantage.",
          ],
          image: {
            // TODO image : /service/securite/protection.png, une berline et son
            // chauffeur attendant devant une entrée, vue de loin, aucun visage,
            // rien qui ressemble à une escorte armée. Cadrage paysage.
            src: "/service/securite/hero-1.png",
            alt: "Véhicule et chauffeur attendant devant une entrée",
          },
        },
        {
          title: "Gestion des imprévus",
          paragraphs: [
            "Vol annulé, bagage perdu, passeport volé, hospitalisation, décès d'un proche resté en France. Ces situations ne se préparent pas, elles se traitent, et elles se traitent mieux à deux qu'à distance et seul.",
            "Vous appelez le numéro convenu avant le départ. Nous prenons le relais auprès de la compagnie, de l'hôtel, du consulat ou de l'assurance, et nous vous rappelons avec ce qui est fait et ce qui reste à faire.",
            "Nous reprenons ensuite le reste du voyage : les nuits à décaler, les prestations à annuler, les correspondances à refaire. Vous n'avez pas à défaire vous-même un séjour depuis l'étranger.",
          ],
          image: {
            // Shooting Exuma par Jules Despretz, image n°130, recadrée en 3:4.
            // Coupe par le bas, ce qui emporte le filigrane du photographe.
            src: "/service/securite/imprevus-3x4.png",
            alt: "Conseiller Exuma traitant un dossier à son poste",
          },
        },
        {
          title: "Assistance pendant le voyage",
          paragraphs: [
            "Nous convenons avec vous, avant le départ, du mode de contact qui correspond à ce voyage précis : un numéro, une personne, et les plages sur lesquelles elle répond. Aucun dispositif standard ne vous est imposé.",
            "Pour les destinations lointaines, ce fonctionnement peut se caler sur votre fuseau horaire plutôt que sur le nôtre. Cela se demande au moment de l'organisation : un décalage de dix heures rend inutile une assistance ouverte aux seules heures de Paris.",
            "Vous recevez avant le départ un document unique : les contacts utiles sur place, ceux de vos prestataires et les nôtres. Une seule feuille, à garder sur soi et à laisser à quelqu'un en France.",
          ],
          image: {
            // Shooting Jules Despretz n°18, bande 16:9 hors filigrane, sur
            // laquelle la feuille de contacts a été ajoutée par édition.
            src: "/service/securite/assistance.png",
            alt: "Feuille de contacts posée près du clavier, un matin de départ",
          },
        },
        {
          title: "Veille sanitaire et formalités de santé",
          paragraphs: [
            "Vaccins exigés ou recommandés, traitement antipaludique, certificats à présenter à l'entrée, restrictions en cours. Nous réunissons ce qu'exigent les autorités du pays et ce que recommandent les sources officielles, et nous vous le transmettons assez tôt pour que vous puissiez agir.",
            "Nous ne donnons aucun avis médical, et c'est important : la décision revient à votre médecin ou à un centre de vaccinations internationales. Notre rôle est de vous dire ce qui est demandé, à quelle échéance, et vers qui vous tourner.",
            "Nous pouvons aussi examiner ce que couvre votre assurance ou votre carte bancaire pour ce voyage précis. Ce n'est pas automatique et l'examen peut être facturé, mais il vaut souvent le détour : rapatriement, frais médicaux et activités sportives font l'objet d'exclusions que presque personne ne lit avant de partir.",
          ],
          image: {
            // Rangée paire, donc cadrage portrait.
            src: "/service/securite/sanitaire-3x4.png",
            alt: "Trousse de pharmacie de voyage ouverte sur une table, passeport fermé à côté",
          },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Quand la situation se complique",
      heading: "Ce que 35 ans de pratique nous ont appris",
      description:
        "Quatre situations que nous avons déjà traitées, et la façon dont elles se déroulent quand elles sont préparées.",
      items: [
        {
          title: "L'hospitalisation à l'étranger",
          cardEyebrow: "Cas vécu",
          modalEyebrow: "Quand la situation se complique",
          shortDescription:
            "Le premier réflexe n'est pas de rapatrier. C'est de savoir où aller, et qui paie.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Un accident ou un malaise à l&apos;étranger pose trois questions
                en même temps : où être soigné correctement, qui avance les
                frais, et faut-il rentrer. Elles ne se traitent pas dans cet
                ordre par hasard.
              </p>
              <h4 className="font-medium">Ce que nous faisons :</h4>
              <p>
                Nous joignons l&apos;assisteur de votre contrat, qui est le seul
                à pouvoir engager la prise en charge, et nous restons dans la
                boucle jusqu&apos;à ce qu&apos;elle soit confirmée. En parallèle,
                nous identifions l&apos;établissement adapté plutôt que le plus
                proche.
              </p>
              <p>
                Le rapatriement est une décision médicale, prise par les
                médecins de l&apos;assisteur, jamais par nous. Ce que nous
                pouvons faire, c&apos;est que personne n&apos;attende une
                réponse et que la famille en France soit tenue au courant.
              </p>
            </div>
          ),
        },
        {
          title: "Le passeport volé un dimanche",
          cardEyebrow: "Cas vécu",
          modalEyebrow: "Quand la situation se complique",
          shortDescription:
            "La déclaration se fait sur place, mais le reste du voyage peut se refaire pendant ce temps.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Un passeport volé impose une déclaration de vol locale puis un
                laissez-passer consulaire. Ces deux étapes vous demandent, et
                aucune ne se délègue. Le reste, si.
              </p>
              <h4 className="font-medium">Ce que nous prenons en charge :</h4>
              <p>
                La prise de rendez-vous au consulat dès son ouverture, les
                justificatifs à réunir, et surtout la reprise du voyage : le vol
                du retour à décaler, les nuits supplémentaires, les prestations
                à annuler ou reporter.
              </p>
              <p>
                C&apos;est aussi la raison pour laquelle nous vous demandons une
                copie de vos documents avant le départ. Elle fait gagner une
                journée entière au consulat.
              </p>
            </div>
          ),
        },
        {
          title: "La destination qui se dégrade pendant le séjour",
          cardEyebrow: "Cas vécu",
          modalEyebrow: "Quand la situation se complique",
          shortDescription:
            "La question n'est pas de paniquer ni d'ignorer, c'est de savoir qui décide et sur quelle source.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Manifestations, épisode climatique, tension politique : la
                situation peut changer après votre arrivée. L&apos;information
                qui circule alors est abondante et rarement fiable.
              </p>
              <h4 className="font-medium">Sur quoi nous nous appuyons :</h4>
              <p>
                Les avis aux voyageurs du ministère de l&apos;Europe et des
                Affaires étrangères, les consignes des autorités locales, et ce
                que nous disent nos prestataires sur place, qui y vivent.
              </p>
              <p>
                Nous vous appelons avec ces éléments et une recommandation
                claire : rester, changer de zone, ou avancer le retour. La
                décision reste la vôtre, et nous appliquons ce que vous
                choisissez.
              </p>
            </div>
          ),
        },
        {
          title: "L'assurance qui ne couvre pas ce qu'on croyait",
          cardEyebrow: "Cas vécu",
          modalEyebrow: "Quand la situation se complique",
          shortDescription:
            "Les exclusions se lisent avant, pas au moment où l'on en a besoin.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Beaucoup de voyageurs comptent sur l&apos;assurance de leur carte
                bancaire. Elle couvre souvent moins qu&apos;on ne le croit :
                plafonds bas, durée de séjour limitée, sports exclus, et
                conditions liées au paiement du voyage avec cette carte.
              </p>
              <h4 className="font-medium">Ce que nous pouvons regarder :</h4>
              <p>
                Sur demande, le plafond de frais médicaux, la couverture du
                rapatriement, la durée maximale du séjour, les activités exclues
                et les conditions d&apos;âge. Cet examen n&apos;est pas
                automatique et peut être facturé.
              </p>
              <p>
                Quand une garantie manque, nous pouvons souscrire un contrat
                dans le cadre du voyage que nous organisons. Nous vous demandons
                systématiquement votre accord avant : il serait absurde de vous
                faire payer deux fois une couverture que vous détenez déjà.
              </p>
            </div>
          ),
        },
      ],
    },

    {
      type: "infoGrid",
      theme: "dark",
      eyebrow: "Nos engagements",
      heading: "Ce sur quoi vous pouvez compter, d'un départ à l'autre",
      items: [
        {
          iconName: "badgeCheck",
          title: "Nous vérifions les autorisations d'exercer",
          description:
            "Agrément dans le pays d'intervention, CNAPS en France, assurance responsabilité civile de la société missionnée. Vérifiés avant la mission, pas après.",
        },
        {
          iconName: "fileText",
          title: "Une seule feuille à garder sur soi",
          description:
            "Contacts sur place, prestataires, assisteur et nos propres coordonnées, réunis sur un document unique remis avant le départ.",
        },
        {
          iconName: "clock",
          title: "Une assistance calibrée sur votre voyage",
          description:
            "Vous convenez à l'avance du numéro, de la personne et des plages où elle répond, calées sur votre fuseau horaire. Aucun standard ne vous est imposé.",
        },
        {
          iconName: "syringe",
          title: "Des exigences sanitaires sourcées",
          description:
            "Ce que demandent les autorités du pays, transmis assez tôt pour agir. La décision médicale revient à votre médecin, jamais à nous.",
        },
      ],
    },

    {
      type: "faq",
      eyebrow: "Questions fréquentes",
      heading: "Ce que l'on nous demande sur ce volet du voyage",
      contact: {
        // Les espaces font partie des chaînes : le composant concatène sans
        // séparateur, comme sur les pages destination.
        prefix: "Une question qui n'est pas ici ? ",
        label: "Appelez-nous",
        href: EXUMA_TEL_HREF,
        suffix: ", nous y répondrons directement.",
      },
      items: [
        {
          question: "Êtes-vous une société de sécurité ?",
          answer: (
            <p>
              Non, et c&apos;est une distinction importante. Nous missionnons des
              sociétés de protection agréées et nous vérifions leur autorisation
              d&apos;exercer, leur assurance et leurs références. Nous restons
              votre interlocuteur pendant la mission, mais l&apos;intervention
              est assurée par des professionnels dont c&apos;est le métier.
            </p>
          ),
        },
        {
          question:
            "Faut-il une protection rapprochée pour voyager avec vous ?",
          answer: (
            <p>
              Presque jamais. La très grande majorité des voyages que nous
              organisons n&apos;en demandent aucune. Quand la question se pose,
              le dispositif se discute et se dimensionne avec vous : un chauffeur
              qui connaît la ville et un itinéraire choisi suffisent le plus
              souvent.
            </p>
          ),
        },
        {
          question: "Que couvre exactement votre assistance pendant le voyage ?",
          answer: (
            <p>
              Nous prenons le relais auprès des compagnies, des hôtels, des
              prestataires, du consulat et de votre assisteur, et nous
              reconstruisons le voyage quand un incident le déplace. Nous ne
              sommes en revanche ni un assisteur, ni un service médical : ces
              rôles reviennent à votre contrat d&apos;assurance et aux médecins.
            </p>
          ),
        },
        {
          question: "Donnez-vous des conseils médicaux ou vaccinaux ?",
          answer: (
            <p>
              Non. Nous vous transmettons ce qu&apos;exigent les autorités du
              pays et ce que recommandent les sources officielles, avec les
              délais à respecter, puis nous vous orientons vers votre médecin ou
              un centre de vaccinations internationales. La prescription leur
              revient.
            </p>
          ),
        },
        {
          question: "Souscrivez-vous une assurance voyage pour nous ?",
          answer: (
            <p>
              Oui, nous pouvons en souscrire une dans le cadre du voyage que nous
              organisons. Nous vous demandons systématiquement votre accord avant
              de le faire, pour éviter les doublons : votre carte bancaire ou un
              contrat que vous détenez déjà couvre parfois une partie de ce que
              nous proposerions. Nous regardons donc d&apos;abord ce dont vous
              disposez.
            </p>
          ),
        },
        {
          question: "Que se passe-t-il si la situation se dégrade sur place ?",
          answer: (
            <p>
              Nous vous appelons avec les avis aux voyageurs du ministère de
              l&apos;Europe et des Affaires étrangères, les consignes locales et
              ce que nous rapportent nos prestataires sur place, puis une
              recommandation claire. La décision de rester, de changer de zone ou
              d&apos;avancer le retour vous appartient, et nous appliquons ce que
              vous choisissez.
            </p>
          ),
        },
      ],
    },

    {
      type: "finalCta",
      eyebrow: "Prendre contact",
      heading: "Nos services vous intéressent ? Prenons contact.",
      primaryCta: { label: "Contacter Exuma", href: EXUMA_TEL_HREF },
      // Porte B2B : unique passerelle vers /professionnels sur cette page.
      secondaryCta: {
        label: "Vous organisez pour d'autres",
        href: "/professionnels",
      },
    },
  ],
};
