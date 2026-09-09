import type { Metadata } from "next";
import { ContactFlow } from "@/components/contact/contact-flow";
import { getEngagementQuestions } from "@/lib/contact/engagement-questions";
import { proInitialAnswers } from "@/lib/contact/pro-profile";
import { EXUMA_PHONE } from "@/lib/exuma";

export const metadata: Metadata = {
  title: "Recevoir notre engagement écrit — Exuma",
  description:
    "Recevez par écrit les engagements de confidentialité d'Exuma : périmètre, circulation de l'information, accord à signer.",
  alternates: { canonical: "/professionnels/engagement" },
};

export default async function EngagementPage({
  searchParams,
}: {
  searchParams: Promise<{ profil?: string }>;
}) {
  // La page d'origine dit déjà à quel titre le visiteur écrit : on lui évite
  // de le retaper. Une valeur inconnue est ignorée, jamais devinée.
  const { profil } = await searchParams;

  return (
    <ContactFlow
      questions={getEngagementQuestions()}
      initialAnswers={proInitialAnswers(profil)}
      contactCta={{
        label: "Contactez-nous",
        phone: EXUMA_PHONE,
        statusOnline: true,
      }}
      submitRedirect="/professionnels/engagement/merci"
    />
  );
}
