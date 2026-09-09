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
- The `Section` discriminated union (`src/lib/destination/types.ts`, re-exported from `src/lib/content/types.ts`) is the source of truth for page sections. See **Page sections — reuse before creating** below before adding any new section type.

## Page sections — reuse before creating

**Rule: do NOT invent a new section type for a page. Reuse — or compose — an existing one.** Pages are built by picking from the catalog below. A new `Section` variant is a design-system change, not a page change, and is rarely the right answer.

Before you (human or LLM) add a new variant to the `Section` union or a new file under `src/components/sections/`, you MUST:

1. Re-read the catalog below and the union in `src/lib/destination/types.ts`. Most layout needs are already covered — pick the closest match and adjust its data.
2. If nothing fits exactly, propose to the user the closest existing section(s) and how to use them, and explain *why* they fall short. Reusing a slightly-imperfect existing section beats a new one-off.
3. Only if the user **explicitly approves** may you create a new variant — and then follow the full path: extend the union in `src/lib/destination/types.ts`, add a case in `src/components/destination/render-section.tsx`, add the component under `src/components/sections/`, and add an entry to the catalog below.

When asked to build or edit a page, lead with the existing sections — surface this catalog so contributors who don't know these exist are guided to them.

### Catalog of existing sections (source of truth: the `Section` union)

| `type` | Use it for |
|---|---|
| `hero` | Full-bleed page hero: heading + rotating image carousel |
| `heroLanding` | Landing-page hero: CTA, optional rating + partner logos |
| `heroImageBackground` | Hero with rotating background images and overlaid text |
| `textColumns` | Heading + multi-column prose, optional CTA |
| `fullImage` | Single full-width image band |
| `textImagesSplit` | Prose paragraphs beside a two-image stack (light/dark) |
| `featureCards` | Grid of image cards (title/description), optional per-card link |
| `imageDuoWithText` | Two side-by-side images paired with a text column |
| `bento` | Bento grid of image/dark tone cards |
| `placesMap` | Interactive map with pinned places (image + coordinates) |
| `infoGrid` | Icon + title + description grid (practical info) |
| `tips` | Clickable tip cards that open a modal with rich content |
| `testimonials` | Quote cards with author photo/role |
| `spotsList` | Simple titled list of spots/highlights |
| `islandLinks` | Labelled link list for cross-navigation |
| `imageTrio` | Three-image band with optional heading/description |
| `finalCta` | Closing CTA band (primary + optional secondary) |
| `specialistSpotlight` | Featured collaborateur quote + partner logos + feature list |
| `faq` | Accordion Q&A with optional contact line |
| `entityList` | Auto-rendered list of experiences/accommodations/destinations by slug |
| `gallery` | Auto-scrolling image gallery |
| `featureShowcase` | Alternating feature items (image + rich detail) |
| `featureRows` | 3 to 6 standalone rows (image + title + paragraphs), all readable without interaction; image side and crop alternate |

Keep this table in sync with the `Section` union — they must always match.

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
