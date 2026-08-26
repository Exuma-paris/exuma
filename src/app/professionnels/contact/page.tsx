import type { Metadata } from "next";
import { ContactFlow } from "@/components/contact/contact-flow";
import { getLudivineQuestions } from "@/lib/contact/ludivine-questions";
import { proInitialAnswers } from "@/lib/contact/pro-profile";
import { EXUMA_PHONE } from "@/lib/exuma";

export const metadata: Metadata = {
  title: "Écrire à Ludivine — Exuma",
  description:
    "Écrivez à Ludivine, votre interlocutrice pour les family offices, les entreprises et les dirigeants. Réponse sous 24 heures ouvrées.",
  alternates: { canonical: "/professionnels/contact" },
};

export default async function ContactProPage({
  searchParams,
}: {
  searchParams: Promise<{ profil?: string }>;
}) {
  // La page d'origine dit déjà à quel titre le visiteur écrit : on lui évite
  // de le retaper. Une valeur inconnue est ignorée, jamais devinée.
  const { profil } = await searchParams;

  return (
    <ContactFlow
      questions={getLudivineQuestions()}
      initialAnswers={proInitialAnswers(profil)}
      contactCta={{
        label: "Contactez-nous",
        phone: EXUMA_PHONE,
        statusOnline: true,
      }}
      submitRedirect="/professionnels/contact/merci"
    />
  );
}
