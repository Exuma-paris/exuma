import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/header";
import { buttonVariants } from "@/components/ui/button";
import { continents } from "@/lib/content/registry";
import { entityRoute } from "@/lib/content/types";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

/**
 * Page 404 du site. Elle remplace la page par défaut de Next, qui laissait le
 * visiteur (et les robots) sans aucun lien pour repartir : on renvoie vers
 * l'accueil, le formulaire de projet et les continents, d'où partent toutes
 * les destinations.
 */
export default function NotFound() {
  const continentLinks = Object.values(continents).map((continent) => ({
    href: entityRoute.continent(continent.slug),
    label: continent.name,
  }));

  return (
    <main className="flex flex-1 flex-col bg-background-subtle">
      <div className="relative">
        <Header />
      </div>

      <section className="section-px mx-auto flex w-full max-w-layout flex-1 flex-col items-center justify-center pt-40 pb-24">
        <div className="flex max-w-140 flex-col items-center gap-6 text-center">
          <p className="text-eyebrow text-primary">Erreur 404</p>
          <h1 className="text-h1">Cette page n&apos;existe pas</h1>
          <p className="text-secondary-foreground">
            L&apos;adresse a peut-être changé, ou la page n&apos;est plus en
            ligne. Repartez de l&apos;accueil, parcourez nos destinations par
            continent, ou confiez-nous directement votre projet.
          </p>

          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <Link href="/" className={cn(buttonVariants({ variant: "secondary" }))}>
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/votre-projet"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Parler de votre projet
            </Link>
          </div>

          <nav aria-label="Destinations par continent" className="mt-6">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {continentLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground underline decoration-1 underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </main>
  );
}
