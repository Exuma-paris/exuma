import { notFound } from "next/navigation";
import { Header } from "@/components/sections/header";
import { renderSection } from "@/components/destination/render-section";
import { serviceCategories, services } from "@/lib/content/registry";
import { getServicesByCategory } from "@/lib/content/queries";

export function generateStaticParams() {
  return [
    ...Object.keys(serviceCategories).map((slug) => ({ slug })),
    ...Object.keys(services).map((slug) => ({ slug })),
  ];
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = serviceCategories[slug];
  const service = services[slug];

  if (!category && !service) notFound();

  const entity = category ?? service!;
  const [hero, ...rest] = entity.sections;
  const childServices = category ? getServicesByCategory(category.slug) : [];

  return (
    <main className="flex-1">
      <div className="relative">
        <Header />
        {hero && renderSection(hero, "hero")}
      </div>
      {rest.map((section, i) => renderSection(section, String(i + 1)))}

      {childServices.length > 0 ? (
        <section className="section-px mx-auto flex w-full max-w-layout flex-col gap-8 py-20">
          <h2 className="text-h2">Nos prestations</h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {childServices.map((s) => (
              <li key={s.slug}>
                <a
                  href={`/services/${s.slug}`}
                  className="block border border-border p-6 transition hover:bg-background-soft"
                >
                  <p className="text-h3">{s.name}</p>
                  {s.blurb ? (
                    <p className="mt-2 text-secondary-foreground">{s.blurb}</p>
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
