This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deployment performance

- Next.js 16.2's experimental `turbopackFileSystemCacheForBuild` reuses compilation
  work between builds. Keep Vercel's build cache enabled. The first build populates
  the cache; compare a subsequent content-only build to measure the benefit.
- The largest PNG photographs (over 8 MB) have been converted to WebP at quality
  96, matching the existing image generator. Their pixel dimensions are preserved.
  `optimized-image-paths.json` maps their old URLs to the new files; Next.js serves
  permanent redirects for existing links and cached pages. New source references
  should use the WebP URL directly. Do not regenerate these photos as large PNGs.
- Measure cloning, compilation, page generation and output deployment separately.
  A build cache does not avoid cloning or transferring public assets. Vercel's Git
  integration fetches recent history, so replaced binaries can still affect clone
  time for several commits. Do not rewrite shared Git history to remove them.
- All existing pages remain prerendered. Content lives in the repository, so text
  edits still require a deployment; this patch does not introduce CMS revalidation.

To check compilation caching locally, run `npm run build` twice without deleting
`.next`. For an editorial-change check, edit a content file and build again. Verify
the rendered text as well as the timings. On Vercel, compare successive deployments
of the same branch with the build cache enabled, rather than a cold build alone.
