import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/sections/header";
import { renderSection } from "@/components/destination/render-section";
import { EntityStubPage } from "@/components/destination/entity-stub-page";
import { experiences } from "@/lib/content/registry";
import {
  buildMetaDescription,
  buildMetaTitle,
  experiencePath,
  experienceJsonLdScripts,
  pickHeroImage,
} from "@/lib/experience/seo";

export function generateStaticParams() {
  return Object.keys(experiences).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const experience = experiences[slug];
  if (!experience) return {};

  const title = buildMetaTitle(experience);
  const description = buildMetaDescription(experience);
  const url = experiencePath(experience.slug);
  const hero = pickHeroImage(experience);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      ...(hero ? { images: [{ url: hero.src, alt: hero.alt }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(hero ? { images: [hero.src] } : {}),
    },
  };
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
  const scripts = experienceJsonLdScripts(experience);
  const headerTheme = hero?.type === "heroImageBackground" ? "dark" : "light";

  return (
    <main className="flex-1">
      {scripts.map((schema, i) => (
        <script
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="relative">
        <Header theme={headerTheme} />
        {hero && renderSection(hero, "hero")}
      </div>
      {rest.map((section, i) => renderSection(section, String(i + 1)))}
    </main>
  );
}
