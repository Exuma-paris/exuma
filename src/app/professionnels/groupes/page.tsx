import type { Metadata } from "next";
import { ContactFlow } from "@/components/contact/contact-flow";
import { getGroupeQuestions } from "@/lib/contact/groupe-questions";
import { EXUMA_PHONE } from "@/lib/exuma";

export const metadata: Metadata = {
  title: "Parler d'un projet de groupe — Exuma",
  description:
    "Séminaires, incentives, conventions : confiez-nous le déplacement de vos équipes. Réponse sous 24 heures ouvrées.",
  alternates: { canonical: "/professionnels/groupes" },
};

export default function GroupesPage() {
  return (
    <ContactFlow
      questions={getGroupeQuestions()}
      contactCta={{
        label: "Contactez-nous",
        phone: EXUMA_PHONE,
        statusOnline: true,
      }}
      submitRedirect="/professionnels/groupes/merci"
    />
  );
}
