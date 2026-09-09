import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/sections/placeholder-page";

export const metadata: Metadata = {
  title: "Pourquoi Exuma",
  description:
    "Ce qui distingue Exuma : un interlocuteur unique, joignable avant, pendant et après le voyage.",
  alternates: { canonical: "/approche" },
  // La page est encore vide : on ne la laisse pas entrer dans l'index tant
  // qu'elle n'a pas son contenu. À retirer le jour de la mise en ligne.
  robots: { index: false, follow: true },
};

export default function ApprochePage() {
  return (
    <PlaceholderPage
      eyebrow="Exuma"
      heading="Pourquoi Exuma"
      intro="Cette page est en cours de rédaction. En attendant, nos équipes répondent directement à vos questions."
    />
  );
}
