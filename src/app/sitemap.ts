import type { MetadataRoute } from "next";
import { allTagged } from "@/lib/content/registry";
import { entityRoute } from "@/lib/content/types";
import { STUB_KINDS, isStubEntity } from "@/lib/content/seo";
import { SITE_URL } from "@/lib/site-url";

const siteUrl = SITE_URL;

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
      url: `${siteUrl}/professionnels/plateforme`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/professionnels/seminaires`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/professionnels/dirigeants`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Pages institutionnelles et formulaires d'entrée : hors registre aussi.
    {
      url: `${siteUrl}/a-propos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/approche`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/votre-projet`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/nous-ecrire`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/professionnels/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/professionnels/groupes`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Les sous-familles d'expérience sont un paramétrage interne : elles n'ont
  // pas de page à elles, `entityRoute` les renverrait sur une URL en 404.
  const dynamicEntries: MetadataRoute.Sitemap = allTagged
    .filter(({ kind }) => kind !== "subtheme")
    // Les fiches encore vides sont en noindex : les déclarer ici enverrait
    // aux moteurs des pages qu'on leur demande par ailleurs d'ignorer.
    .filter(
      ({ kind, entity }) =>
        !(STUB_KINDS as readonly string[]).includes(kind) ||
        !isStubEntity(entity),
    )
    .map(({ kind, entity }) => ({
      url: `${siteUrl}${entityRoute[kind](entity.slug)}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticEntries, ...dynamicEntries];
}
