import type { Metadata } from "next";
import Link from "next/link";
import { SimpleHeader } from "@/components/sections/simple-header";
import { Footer } from "@/components/sections/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  EXUMA_MAILTO_HREF,
  EXUMA_EMAIL,
  EXUMA_PHONE,
  EXUMA_TEL_HREF,
} from "@/lib/exuma";

export const metadata: Metadata = {
  title: "Demande envoyée — Exuma",
  description:
    "Votre projet de groupe a bien été reçu. Un interlocuteur vous rappelle sous 24 heures ouvrées.",
  alternates: { canonical: "/professionnels/groupes/merci" },
  robots: { index: false, follow: false },
};

export default function MerciPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background-subtle">
      <SimpleHeader
        contactCta={{
          label: "Contactez-nous",
          phone: EXUMA_PHONE,
          statusOnline: true,
        }}
        logoHref={null}
      />

      <section className="section-px mx-auto flex w-full max-w-layout flex-1 flex-col items-center justify-center py-20">
        <div className="flex max-w-110 flex-col items-center gap-6 text-center">
          <p className="text-eyebrow text-primary">Projet de groupe</p>
          <h1 className="text-h1">Demande envoyée</h1>
          <p className="text-secondary-foreground">
            Un interlocuteur prend connaissance de votre projet et vous
            rappelle dans les 24 heures ouvrées pour le cadrer. Si vous
            préférez ne pas attendre, la ligne est ouverte.
          </p>

          <div className="flex flex-col items-center gap-1">
            <a
              href={EXUMA_TEL_HREF}
              className="font-heading text-h4 text-foreground"
            >
              {EXUMA_PHONE}
            </a>
            <a href={EXUMA_MAILTO_HREF} className="text-secondary-foreground">
              {EXUMA_EMAIL}
            </a>
          </div>

          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/professionnels/entreprises"
              className={cn(buttonVariants({ variant: "secondary" }))}
            >
              Retour à la page entreprises
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
