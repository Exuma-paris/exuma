import type { MetadataRoute } from "next";
import { allTagged } from "@/lib/content/registry";
import { entityRoute } from "@/lib/content/types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://exuma.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const dynamicEntries: MetadataRoute.Sitemap = allTagged.map(
    ({ kind, entity }) => ({
      url: `${siteUrl}${entityRoute[kind](entity.slug)}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  return [...staticEntries, ...dynamicEntries];
}
