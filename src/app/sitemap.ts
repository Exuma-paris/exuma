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
    // Les pages éditoriales de `src/content/pages` ne passent pas par le
    // registre, donc `allTagged` ne les voit pas : elles se déclarent ici.
    {
      url: `${siteUrl}/professionnels`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/professionnels/family-offices`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/professionnels/entreprises`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/professionnels/dirigeants`,
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
