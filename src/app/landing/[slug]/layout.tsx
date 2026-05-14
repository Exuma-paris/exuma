import type { ReactNode } from "react";
import { destinations } from "@/lib/content/registry";

/**
 * Pre-render only the destinations that have BOTH a landing block and a
 * contactQuestions array — i.e. a complete funnel. Any destination missing
 * either piece won't be in this list, so /landing/<slug>* returns 404.
 *
 * Since this is on the layout, it covers all three nested routes
 * (`page`, `contact`, `merci`) without each needing its own copy.
 */
export function generateStaticParams() {
  return Object.values(destinations)
    .filter((d) => d.landing && d.contactQuestions?.length)
    .map((d) => ({ slug: d.slug }));
}

export default function LandingLayout({ children }: { children: ReactNode }) {
  return children;
}
