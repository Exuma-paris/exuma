import { notFound } from "next/navigation";
import { Header } from "@/components/sections/header";
import { renderSection } from "@/components/destination/render-section";
import { continents } from "@/lib/content/registry";
import { getDestinationsByContinent } from "@/lib/content/queries";

export function generateStaticParams() {
  return Object.keys(continents).map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const continent = continents[slug];
  if (!continent) notFound();

  const dests = getDestinationsByContinent(slug);
  const [hero, ...rest] = continent.sections;

  return (
    <main className="flex-1">
      <div className="relative">
        <Header />
        {hero && renderSection(hero, "hero")}
      </div>
      {rest.map((section, i) => renderSection(section, String(i + 1)))}

      {dests.length > 0 ? (
        <section className="section-px mx-auto flex w-full max-w-layout flex-col gap-8 py-20">
          <h2 className="text-h2">Destinations en {continent.name}</h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dests.map((d) => (
              <li key={d.slug}>
                <a
                  href={`/destinations/${d.slug}`}
                  className="block border border-border p-6 transition hover:bg-background-soft"
                >
                  <p className="text-h3">{d.name}</p>
                  {d.blurb ? (
                    <p className="mt-2 text-secondary-foreground">{d.blurb}</p>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
