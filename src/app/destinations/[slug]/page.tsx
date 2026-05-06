import { notFound } from "next/navigation";
import { DestinationPage } from "@/components/destination/destination-page";
import { destinations } from "@/lib/content/registry";

export function generateStaticParams() {
  return Object.keys(destinations).map((slug) => ({ slug }));
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
