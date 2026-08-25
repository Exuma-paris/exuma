import Link from "next/link";
import { Header } from "@/components/sections/header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function EntityStubPage({
  name,
  blurb,
}: {
  name: string;
  blurb?: React.ReactNode;
}) {
  return (
    <main className="flex-1">
      <div className="relative">
        <Header />
      </div>
      <section className="section-px mx-auto flex w-full max-w-layout flex-col gap-6 py-32">
        <p className="text-eyebrow text-primary">Bientôt</p>
        <h1 className="text-h1 max-w-180">{name}</h1>
        {blurb ? (
          <p className="max-w-180 text-secondary-foreground">{blurb}</p>
        ) : null}
        <p className="max-w-180 text-secondary-foreground">
          Cette page complète est en préparation. Pour en savoir plus dès
          aujourd&apos;hui, votre travel designer peut vous répondre dans la
          journée.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Contactez-nous
          </Link>
          <Link
            href="/votre-projet"
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            Construire ce voyage
          </Link>
        </div>
      </section>
    </main>
  );
}
