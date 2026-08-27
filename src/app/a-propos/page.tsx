import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/sections/placeholder-page";

export const metadata: Metadata = {
  title: "À propos d'Exuma",
  description:
    "L'histoire d'Exuma, conciergerie de voyage depuis 1991, et les équipes qui la font vivre.",
  alternates: { canonical: "/a-propos" },
  // La page est encore vide : on ne la laisse pas entrer dans l'index tant
  // qu'elle n'a pas son contenu. À retirer le jour de la mise en ligne.
  robots: { index: false, follow: true },
};

export default function AProposPage() {
  return (
    <PlaceholderPage
      eyebrow="Exuma"
      heading="À propos d'Exuma"
      intro="Cette page est en cours de rédaction. En attendant, nos équipes répondent directement à vos questions."
    />
  );
}
