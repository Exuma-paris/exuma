import { notFound } from "next/navigation";
import { Header } from "@/components/sections/header";
import { renderSection } from "@/components/destination/render-section";
import { themes } from "@/lib/content/registry";
import {
  getExperiencesByTheme,
  getSubthemesByTheme,
} from "@/lib/content/queries";

export function generateStaticParams() {
  return Object.keys(themes).map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const theme = themes[slug];
  if (!theme) notFound();

  const subs = getSubthemesByTheme(slug);
  const exps = getExperiencesByTheme(slug);
  const [hero, ...rest] = theme.sections;

  return (
    <main className="flex-1">
      <div className="relative">
        <Header />
        {hero && renderSection(hero, "hero")}
      </div>
      {rest.map((section, i) => renderSection(section, String(i + 1)))}

      {subs.length > 0 ? (
        <section className="section-px mx-auto flex w-full max-w-layout flex-col gap-8 py-20">
          <h2 className="text-h2">Sous-thématiques</h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subs.map((s) => (
              <li
                key={s.slug}
                className="border border-border p-6"
              >
                <p className="text-h3">{s.name}</p>
                {s.blurb ? (
                  <p className="mt-2 text-secondary-foreground">{s.blurb}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {exps.length > 0 ? (
        <section className="section-px mx-auto flex w-full max-w-layout flex-col gap-8 py-20">
          <h2 className="text-h2">Expériences signatures</h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {exps.map((e) => (
              <li key={e.slug}>
                <a
                  href={`/experiences/${e.slug}`}
                  className="block border border-border p-6 transition hover:bg-background-soft"
                >
                  <p className="text-h3">{e.name}</p>
                  {e.blurb ? (
                    <p className="mt-2 text-secondary-foreground">{e.blurb}</p>
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
