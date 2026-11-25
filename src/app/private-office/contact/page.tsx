import type { Metadata } from "next";
import { ContactFlow } from "@/components/contact/contact-flow";
import { getPrivateOfficeQuestions } from "@/lib/contact/private-office-questions";
import { EXUMA_PHONE } from "@/lib/exuma";

export const metadata: Metadata = {
  title: "Parler de votre Private Office",
  description:
    "Quelques questions pour préparer l'échange : pour qui, quoi, à quel rythme. Ludivine vous répond sous 24 heures ouvrées.",
  alternates: { canonical: "/private-office/contact" },
};

export default function PrivateOfficeContactPage() {
  return (
    <ContactFlow
      questions={getPrivateOfficeQuestions()}
      // Nom du formulaire dans le dataLayer et dans Make : prévenir Mathieu
      // et la personne qui gère Make avant de le changer.
      product="private-office"
      contactCta={{
        label: "Contactez-nous",
        phone: EXUMA_PHONE,
        statusOnline: true,
      }}
      submitRedirect="/private-office/contact/merci"
    />
  );
}
