import { notFound } from "next/navigation";
import { Header } from "@/components/sections/header";
import { renderSection } from "@/components/destination/render-section";
import { EntityStubPage } from "@/components/destination/entity-stub-page";
import { experiences } from "@/lib/content/registry";

export function generateStaticParams() {
  return Object.keys(experiences).map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const experience = experiences[slug];
  if (!experience) notFound();

  if (experience.sections.length === 0) {
    return <EntityStubPage name={experience.name} blurb={experience.blurb} />;
  }

  const [hero, ...rest] = experience.sections;

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
