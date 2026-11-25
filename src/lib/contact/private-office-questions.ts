import type { Question } from "@/lib/contact/types";
import { sourceQuestion } from "@/lib/contact/pro-profile";

const EYEBROW = "Votre Private Office";

/**
 * Le formulaire de `/private-office/contact`. Il sert de premier brief :
 * pour qui, quoi, à quel rythme, avant l'échange avec Ludivine. Aucune
 * question de budget : le forfait se construit après l'échange.
 *
 * Chaque identifiant part dans le dataLayer (`beneficiaire`, `perimetre`,
 * `frequence`, `has_message`, `source`, `canal`) : prévenir Mathieu à chaque
 * question ajoutée, retirée ou renommée.
 */
export function getPrivateOfficeQuestions(): Question[] {
  return [
    {
      id: "beneficiaire",
      type: "single",
      eyebrow: EYEBROW,
      heading: "Pour qui souhaitez-vous un Private Office\u00a0?",
      description:
        "Un même Private Office peut suivre une personne, sa famille et ses associés.",
      options: [
        { id: "moi", label: "Pour moi" },
        { id: "famille", label: "Pour ma famille" },
        { id: "dirigeant-associes", label: "Pour un dirigeant ou des associés" },
        { id: "clients", label: "Pour mes clients" },
      ],
    },
    {
      id: "perimetre",
      type: "multi",
      eyebrow: EYEBROW,
      heading: "Que souhaitez-vous nous confier\u00a0?",
      description: "Plusieurs réponses possibles.",
      min: 1,
      options: [
        { id: "deplacements-pro", label: "Les déplacements professionnels" },
        { id: "voyages-prives", label: "Les voyages privés" },
        { id: "conciergerie", label: "La conciergerie et la vie quotidienne" },
        { id: "evenements", label: "Les événements et les célébrations" },
        {
          id: "services-singuliers",
          label: "Des services singuliers : jet, hélicoptère, lieux privatisés",
        },
      ],
    },
    {
      id: "frequence",
      type: "single",
      eyebrow: EYEBROW,
      heading: "À quel rythme\u00a0?",
      options: [
        { id: "mensuel", label: "Plusieurs déplacements par mois" },
        { id: "trimestriel", label: "Quelques déplacements par trimestre" },
        {
          id: "ponctuel",
          label: "Surtout de la conciergerie, ponctuellement",
        },
        { id: "ne-sait-pas", label: "Je ne sais pas encore" },
      ],
    },
    {
      id: "message",
      type: "text",
      eyebrow: EYEBROW,
      heading: "Avez-vous envie de préciser votre besoin dès à présent\u00a0?",
      description:
        "Facultatif. Ce que vous ne voulez plus avoir à porter, une échéance qui approche, ceux qui vous entourent.",
      placeholder:
        "Par exemple : trois déplacements par mois entre Paris, Londres et Genève, et les vacances de la famille à organiser.",
      rows: 5,
    },
    sourceQuestion(EYEBROW),
    {
      id: "canal",
      type: "single",
      eyebrow: EYEBROW,
      heading: "Comment préférez-vous être recontacté\u00a0?",
      options: [
        { id: "telephone", label: "Par téléphone" },
        { id: "whatsapp", label: "Sur WhatsApp" },
        { id: "email", label: "Par e-mail" },
      ],
    },
    {
      id: "contact",
      type: "contact",
      withCompany: true,
      eyebrow: "Dernière étape",
      heading: "Comment vous joindre\u00a0?",
      description:
        "Ce que vous nous écrivez reste entre nous. Ludivine vous répond sous 24 heures ouvrées.",
      marketingConsentLabel:
        "J'accepte d'être recontacté par Exuma au sujet de cette demande.",
    },
  ];
}
