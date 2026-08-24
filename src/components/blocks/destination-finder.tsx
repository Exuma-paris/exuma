"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  MarkerPin01 as MapPin,
  SearchLg as Search,
} from "@untitledui/icons";
import { buttonVariants } from "@/components/ui/button";
import type { FinderEntry } from "@/lib/content/destination-finder";
import { cn } from "@/lib/utils";

const strip = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

function Card({ entry }: { entry: FinderEntry }) {
  return (
    <Link
      href={`/destinations/${entry.slug}`}
      className="group/dest relative flex aspect-4/5 flex-col justify-end overflow-hidden bg-foreground text-background outline-offset-2 focus-visible:outline-2 focus-visible:outline-foreground"
    >
      {entry.image ? (
        <>
          <Image
            src={entry.image.src}
            alt={entry.image.alt}
            fill
            sizes="(min-width: 1024px) 20vw, 45vw"
            className="object-cover transition-transform duration-500 ease-out group-hover/dest:scale-[1.04]"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 30%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0) 85%)",
            }}
          />
        </>
      ) : (
        // 43 des 51 fiches n'ont pas encore d'image : plutôt qu'un bloc gris,
        // une tuile typographique qui assume le vide.
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-br from-foreground to-foreground/85"
        />
      )}

      <div className="relative flex flex-col gap-0.5 p-4">
        <span className="font-heading text-[17px] leading-tight [text-shadow:0_1px_3px_rgba(0,0,0,0.35)]">
          {entry.name}
        </span>
        {entry.continent ? (
          <span className="text-[12px] opacity-70">{entry.continent}</span>
        ) : null}
      </div>
    </Link>
  );
}

/**
 * Dernière tuile de la grille. Elle occupe la case laissée libre par le compte
 * de destinations et referme la rangée, plutôt que de laisser un vide en coin.
 */
function CtaCard() {
  return (
    <Link
      href="/votre-projet"
      className="group/cta flex aspect-4/5 flex-col justify-between border border-border bg-background-subtle p-4 transition-colors hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
    >
      <ArrowUpRight className="size-5 text-primary transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
      <span className="flex flex-col gap-1">
        <span className="font-heading text-[17px] leading-tight text-foreground">
          Dites-nous où
        </span>
        <span className="text-[12px] leading-snug text-secondary-foreground">
          Nous construisons le reste.
        </span>
      </span>
    </Link>
  );
}

export function DestinationFinder({
  entries,
  suggestions = 5,
}: {
  entries: FinderEntry[];
  /** Nombre de destinations montrées tant que rien n'est saisi. */
  suggestions?: number;
}) {
  const [query, setQuery] = useState("");

  // Les fiches illustrées d'abord : ce sont elles qui donnent envie de cliquer.
  const featured = useMemo(
    () => entries.filter((e) => e.image).slice(0, suggestions),
    [entries, suggestions],
  );

  const results = useMemo(() => {
    const q = strip(query);
    if (!q) return null;
    return entries
      .filter((e) =>
        [e.name, ...e.aliases].some((n) => strip(n).includes(q)),
      )
      .sort((a, b) => Number(Boolean(b.image)) - Number(Boolean(a.image)));
  }, [entries, query]);

  const shown = results ?? featured;

  return (
    <div className="flex flex-col gap-8">
      <div className="mx-auto flex w-full max-w-140 flex-col gap-2">
        <div className="flex h-14 items-center gap-3 rounded-full bg-background px-5 shadow-deep transition-shadow focus-within:ring-3 focus-within:ring-ring/40">
          <Search className="size-5 shrink-0 text-secondary-foreground" aria-hidden />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Un pays, une île, une ville…"
            aria-label="Chercher une destination"
            className="min-w-0 flex-1 bg-transparent text-[15px] text-foreground placeholder:text-secondary-foreground focus:outline-none"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="shrink-0 text-[13px] text-secondary-foreground transition-colors hover:text-foreground"
            >
              Effacer
            </button>
          ) : null}
        </div>
        <p aria-live="polite" className="px-5 text-[13px] text-secondary-foreground">
          {results === null
            ? `${entries.length} destinations, un seul interlocuteur.`
            : results.length > 0
              ? `${results.length} destination${results.length > 1 ? "s" : ""} ${results.length > 1 ? "correspondent" : "correspond"}.`
              : "Nous n'avons pas encore de page pour cette destination."}
        </p>
      </div>

      {shown.length > 0 ? (
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {shown.slice(0, 11).map((entry) => (
            <li key={entry.slug}>
              <Card entry={entry} />
            </li>
          ))}
          <li>
            <CtaCard />
          </li>
        </ul>
      ) : (
        // Une conciergerie ne répond pas « aucun résultat » : elle propose d'en
        // parler. L'absence de page ne veut pas dire l'absence de savoir-faire.
        <div className="mx-auto flex max-w-140 flex-col items-center gap-4 border border-border px-6 py-10 text-center">
          <MapPin className="size-5 text-primary" aria-hidden />
          <p className="text-secondary-foreground">
            Nous y allons quand même. Dites-nous où, nous construisons le reste.
          </p>
          <Link
            href="/votre-projet"
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            Créer votre voyage
          </Link>
        </div>
      )}
    </div>
  );
}
