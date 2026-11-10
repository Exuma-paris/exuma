import type { Metadata } from "next";

/**
 * La page du formulaire est un composant client : elle ne peut pas exporter
 * de métadonnées. Sans ce layout, elle héritait du titre et de l'URL canonique
 * de l'accueil tout en restant indexable. Un formulaire d'entrée de campagne
 * n'a rien à faire dans l'index, comme les pages « merci » qui le suivent.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: "Votre projet de voyage",
    alternates: { canonical: `/landing/${slug}/contact` },
    robots: { index: false, follow: false },
  };
}

export default function LandingContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
