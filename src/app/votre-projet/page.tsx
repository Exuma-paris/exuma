import type { Metadata } from "next";
import { ContactFlow } from "@/components/contact/contact-flow";
import { getGeneralContactQuestions } from "@/lib/contact/general-questions";
import { prefilledDestinationAnswers } from "@/lib/contact/project-link";
import { EXUMA_PHONE } from "@/lib/exuma";

export const metadata: Metadata = {
  title: "Créer votre voyage — Exuma",
  description:
    "Confiez-nous votre projet de voyage. Quelques questions, puis un travel designer Exuma vous rappelle pour en parler.",
  alternates: { canonical: "/votre-projet" },
};

export default async function VotreProjetPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // `?destination=<slug>` : posé par les liens des pages destination. La
  // première question arrive alors déjà remplie, et reste modifiable.
  const raw = (await searchParams).destination;
  const slug = Array.isArray(raw) ? raw[0] : raw;

  return (
    <ContactFlow
      questions={getGeneralContactQuestions()}
      contactCta={{
        label: "Contactez-nous",
        phone: EXUMA_PHONE,
        statusOnline: true,
      }}
      initialAnswers={prefilledDestinationAnswers(slug)}
      submitRedirect="/votre-projet/merci"
    />
  );
}
