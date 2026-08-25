import type { Metadata } from "next";
import { ContactFlow } from "@/components/contact/contact-flow";
import { getGeneralContactQuestions } from "@/lib/contact/general-questions";
import { EXUMA_PHONE } from "@/lib/exuma";

export const metadata: Metadata = {
  title: "Créer votre voyage — Exuma",
  description:
    "Confiez-nous votre projet de voyage. Quelques questions, puis un travel designer Exuma vous rappelle pour en parler.",
  alternates: { canonical: "/votre-projet" },
};

export default function VotreProjetPage() {
  return (
    <ContactFlow
      questions={getGeneralContactQuestions()}
      contactCta={{
        label: "Contactez-nous",
        phone: EXUMA_PHONE,
        statusOnline: true,
      }}
      submitRedirect="/votre-projet/merci"
    />
  );
}
