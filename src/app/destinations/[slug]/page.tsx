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
import { DEFAULT_SHARE_IMAGE } from "@/lib/site-url";

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
      images: [{ url: (hero ?? DEFAULT_SHARE_IMAGE).src, alt: (hero ?? DEFAULT_SHARE_IMAGE).alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [(hero ?? DEFAULT_SHARE_IMAGE).src],
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
