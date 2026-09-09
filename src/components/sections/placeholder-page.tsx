import Link from "next/link";
import { Header } from "@/components/sections/header";
import { menuCtas } from "@/lib/content/menu-groups";

/**
 * Gabarit des pages dont le contenu reste à écrire. Elles existent parce
 * qu'elles sont déjà liées depuis le menu et le pied de page : sans elles, le
 * visiteur tombe sur une 404. Ce n'est pas une section de page au sens du
 * catalogue — c'est une coquille temporaire, à remplacer par les vraies
 * sections dès que la copie est prête.
 */
export function PlaceholderPage({
  eyebrow,
  heading,
  intro,
}: {
  eyebrow: string;
  heading: string;
  intro: string;
}) {
  return (
    <main className="relative flex-1 bg-background-subtle">
      <Header />

      <section className="section-px mx-auto flex w-full max-w-2xl flex-col gap-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <p className="text-eyebrow text-primary">{eyebrow}</p>
        <h1 className="text-h1">{heading}</h1>
        <p className="text-base leading-7 text-secondary-foreground">{intro}</p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Link
            href={menuCtas.primary.href}
            className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-[13px] tracking-wide text-background transition-opacity hover:opacity-75"
          >
            {menuCtas.primary.label}
          </Link>
          <Link
            href={menuCtas.contact.href}
            className="inline-flex items-center rounded-full border border-foreground/20 px-6 py-3 text-[13px] tracking-wide text-foreground transition-colors hover:border-foreground/50"
          >
            {menuCtas.contact.label}
          </Link>
        </div>
      </section>
    </main>
  );
}
