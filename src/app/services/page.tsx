import Link from "next/link";
import { Header } from "@/components/sections/header";
import { serviceCategories } from "@/lib/content/registry";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Page() {
  const cats = Object.values(serviceCategories);

  return (
    <main className="flex-1">
      <Header />
      <section className="section-px mx-auto flex w-full max-w-layout flex-col gap-12 py-20">
        <header className="flex flex-col gap-3">
          <p className="text-eyebrow text-primary">Services</p>
          <h1 className="text-h1 max-w-180">Logistique, conciergerie et accès privilégiés</h1>
          <p className="max-w-180 text-secondary-foreground">
            Cinq univers de services pensés pour rendre invisible la complexité
            du voyage : mobilité, expériences, conciergerie, sécurité,
            ingénierie.
          </p>
        </header>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cats.map((c) => (
            <li key={c.slug}>
              <a
                href={`/services/${c.slug}`}
                className="block border border-border p-6 transition hover:bg-background-soft"
              >
                <p className="text-h3">{c.name}</p>
                {c.blurb ? (
                  <p className="mt-2 text-secondary-foreground">{c.blurb}</p>
                ) : null}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-start gap-4 border-t border-border pt-10">
          <p className="text-h3 max-w-140">
            Une question sur l&apos;un de ces services ? Écrivez-nous
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/nous-ecrire"
              className={cn(buttonVariants({ variant: "default" }))}
            >
              Nous écrire
            </Link>
            <Link
              href="/votre-projet"
              className={cn(buttonVariants({ variant: "secondary" }))}
            >
              Créer votre voyage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
