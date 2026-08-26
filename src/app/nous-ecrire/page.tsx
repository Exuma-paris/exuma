import type { Metadata } from "next";
import { ContactFlow } from "@/components/contact/contact-flow";
import { getGeneralEnquiryQuestions } from "@/lib/contact/general-enquiry-questions";
import { EXUMA_PHONE } from "@/lib/exuma";

export const metadata: Metadata = {
  title: "Nous écrire — Exuma",
  description:
    "Une envie, une question, un besoin précis : écrivez-nous. Un interlocuteur Exuma vous répond sous 24 heures ouvrées.",
  alternates: { canonical: "/nous-ecrire" },
};

export default function NousEcrirePage() {
  return (
    <ContactFlow
      questions={getGeneralEnquiryQuestions()}
      contactCta={{
        label: "Contactez-nous",
        phone: EXUMA_PHONE,
        statusOnline: true,
      }}
      submitRedirect="/nous-ecrire/merci"
    />
  );
}
