<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Content architecture

All page content (destinations, continents, themes, subthemes, experiences, services, accommodations) lives in `src/content/<kind>/<slug>.tsx` and is exposed through a central registry. Pages under `src/app/` are thin shells that read from the registry. Do not co-locate page data inside `src/app/`.

## Entity kinds and routes

| Kind              | Folder                            | Route                  |
|-------------------|-----------------------------------|------------------------|
| Continent         | `src/content/continents/`         | `/continents/[slug]`   |
| Destination       | `src/content/destinations/`       | `/destinations/[slug]` |
| Theme             | `src/content/themes/`             | `/themes/[slug]`       |
| Subtheme          | `src/content/subthemes/`          | `/themes/[slug]`       |
| Experience        | `src/content/experiences/`        | `/experiences/[slug]`  |
| ServiceCategory   | `src/content/service-categories/` | `/services/[slug]`     |
| Service           | `src/content/services/`           | `/services/[slug]`     |
| Accommodation     | `src/content/accommodations/`     | `/hebergements/[slug]` |

URLs are flat slugs except continents (which sit at `/continents/<slug>`). Routes are plural; never re-introduce `/destination/<slug>` (singular).

## Registry & queries

- Types: `src/lib/content/types.ts` — every entity extends `{ slug, name, sections, blurb?, keywords? }`. References between entities are **slug strings** (`continentSlug`, `themeSlugs`, etc.), never object pointers — this maps 1:1 to Sanity references.
- Registry: `src/lib/content/registry.ts` — explicitly imports each content file and exposes typed `Record<string, T>` maps plus `allTagged` for cross-entity work.
- Queries: `src/lib/content/queries.ts` — `getDestinationsByContinent`, `getExperiencesByTheme`, `getServicesByCategory`, `getAccommodationsByDestination`, `getRelatedDestinations`, `searchContent`. Add new helpers here, not inside pages.
- The `Section` discriminated union (`src/lib/destination/types.ts`, re-exported from `src/lib/content/types.ts`) is the source of truth for page sections. Add a new section type by extending the union, then adding a case in `src/components/destination/render-section.tsx`.

## Adding new content

1. Create `src/content/<kind>/<slug>.tsx` exporting a typed entity (e.g. `export const destination: Destination = {...}`).
2. Add the import + array entry to `src/lib/content/registry.ts`. This is the only place that knows about the file.
3. Don't write a per-slug page file — the dynamic `[slug]` route picks it up automatically via `generateStaticParams`.

## Search, sitemap, navigation

These are all driven by the registry — never hardcode entity lists in them.

- Site search: `src/components/blocks/site-search.tsx` reads `allTagged` and groups by entity kind.
- Sitemap: `src/app/sitemap.ts` iterates `allTagged`.
- When building menus or related-content blocks, query the registry instead of inlining links.

## Sanity migration

The structure is designed to map cleanly to Sanity later: each entity file → one document, each `Section` variant → one block schema, slug-string refs → Sanity references. Keep that mapping intact — don't introduce object-pointer references between entities, and keep section data serializable (no React components in section field values, except `ReactNode` content already supported by `tips`/`faq`).
