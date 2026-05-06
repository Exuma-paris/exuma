import { notFound } from "next/navigation";
import { Header } from "@/components/sections/header";
import { renderSection } from "@/components/destination/render-section";
import { EntityStubPage } from "@/components/destination/entity-stub-page";
import { accommodations } from "@/lib/content/registry";

export function generateStaticParams() {
  return Object.keys(accommodations).map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const accommodation = accommodations[slug];
  if (!accommodation) notFound();

  if (accommodation.sections.length === 0) {
    return (
      <EntityStubPage
        name={accommodation.name}
        blurb={accommodation.blurb}
      />
    );
  }

  const [hero, ...rest] = accommodation.sections;

  return (
    <main className="flex-1">
      <div className="relative">
        <Header />
        {hero && renderSection(hero, "hero")}
      </div>
      {rest.map((section, i) => renderSection(section, String(i + 1)))}
    </main>
  );
}
