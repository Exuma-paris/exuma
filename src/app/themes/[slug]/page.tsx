import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/sections/header";
import { renderSection } from "@/components/destination/render-section";
import { themes } from "@/lib/content/registry";
import { getThemeBlocks } from "@/lib/content/queries";

export function generateStaticParams() {
  return Object.keys(themes).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const theme = themes[slug];
  if (!theme) return {};

  // Le gabarit du layout ajoute déjà « | Exuma ».
  const title = theme.metaTitle ?? theme.name;
  const description =
    theme.metaDescription ??
    (typeof theme.blurb === "string" ? theme.blurb : undefined);
  const url = `/themes/${theme.slug}`;
  const hero = theme.sections.find((s) => s.type === "hero")?.images?.[0];

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
  const theme = themes[slug];
  if (!theme) notFound();

  const [hero, ...rest] = theme.sections;
  // Les blocs de sous-familles s'intercalent avant la dernière section de la
  // page (le bloc de contact), qui doit rester en bas.
  const blocks = getThemeBlocks(slug);
  const closing = rest.length > 0 ? rest[rest.length - 1] : undefined;
  const intro = rest.slice(0, Math.max(rest.length - 1, 0));

  return (
    <main className="flex-1">
      <div className="relative">
        <Header />
        {hero && renderSection(hero, "hero")}
      </div>
      {intro.map((section, i) => renderSection(section, `intro-${i}`))}
      {blocks.map((section, i) => renderSection(section, `block-${i}`))}
      {closing ? renderSection(closing, "closing") : null}
    </main>
  );
}
