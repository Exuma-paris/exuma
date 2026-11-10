import type { Metadata } from "next";
import { entityMetadata, isStubEntity, stubRobots } from "@/lib/content/seo";
import { notFound } from "next/navigation";
import { Header } from "@/components/sections/header";
import { renderSection } from "@/components/destination/render-section";
import { EntityStubPage } from "@/components/destination/entity-stub-page";
import { cruiseLines } from "@/lib/content/registry";
import { applyBackgroundRhythm } from "@/lib/content/background-rhythm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cruiseLine = cruiseLines[slug];
  if (!cruiseLine) return {};
  const metadata = entityMetadata(
    cruiseLine,
    `/croisieres/${slug}`,
    `${cruiseLine.name}, à bord avec Exuma : cabine, itinéraire et séjour à terre réservés et suivis par votre conseiller.`,
  );
  return isStubEntity(cruiseLine) ? { ...metadata, robots: stubRobots } : metadata;
}

export function generateStaticParams() {
  return Object.keys(cruiseLines).map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cruiseLine = cruiseLines[slug];
  if (!cruiseLine) notFound();

  if (cruiseLine.sections.length === 0) {
    return (
      <EntityStubPage
        name={cruiseLine.name}
        blurb={cruiseLine.blurb}
      />
    );
  }

  const [hero, ...rest] = applyBackgroundRhythm(cruiseLine.sections);
  const headerTheme = hero?.type === "heroImageBackground" ? "dark" : "light";

  return (
    <main className="flex-1">
      <div className="relative">
        <Header theme={headerTheme} />
        {hero && renderSection(hero, "hero")}
      </div>
      {rest.map((section, i) => renderSection(section, String(i + 1)))}
    </main>
  );
}
