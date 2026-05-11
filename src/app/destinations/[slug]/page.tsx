import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DestinationPage } from "@/components/destination/destination-page";
import { destinations } from "@/lib/content/registry";
import {
  buildMetaDescription,
  buildMetaTitle,
  destinationPath,
  pickHeroImage,
} from "@/lib/destination/seo";

export function generateStaticParams() {
  return Object.keys(destinations).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations[slug];
  if (!destination) return {};

  const title = buildMetaTitle(destination);
  const description = buildMetaDescription(destination);
  const url = destinationPath(destination.slug);
  const hero = pickHeroImage(destination);

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
  const destination = destinations[slug];
  if (!destination) notFound();
  return <DestinationPage destination={destination} />;
}
