import type { ReactNode } from "react";
import { Header } from "@/components/sections/header";
import { cn } from "@/lib/utils";

export type LegalPageProps = {
  eyebrow: string;
  heading: string;
  /** Last-updated date as displayed (e.g. "Mise à jour le 14 mai 2026"). */
  updatedLabel?: string;
  /**
   * Body content. Wrap your sections with the `prose` styles below by using
   * the headings/paragraphs/lists from this component's MDX-like helpers,
   * or pass raw JSX — the wrapper applies sensible vertical rhythm via
   * `space-y-*` on direct children.
   */
  children: ReactNode;
  className?: string;
};

export function LegalPage({
  eyebrow,
  heading,
  updatedLabel,
  children,
  className,
}: LegalPageProps) {
  return (
    <main className={cn("relative flex-1 bg-background-subtle", className)}>
      <Header />

      <article className="section-px mx-auto w-full max-w-2xl pt-32 pb-16 md:pt-40 md:pb-24">
        <header className="mb-12 flex flex-col gap-3">
          <p className="text-eyebrow text-primary">{eyebrow}</p>
          <h1 className="text-h1">{heading}</h1>
          {updatedLabel ? (
            <p className="text-sm text-secondary-foreground">{updatedLabel}</p>
          ) : null}
        </header>

        <div className="flex flex-col gap-10 text-foreground">{children}</div>
      </article>
    </main>
  );
}

/**
 * Section block inside a LegalPage body. Renders an h2 + a vertical stack of
 * children (paragraphs, lists, nested headings) with the right rhythm.
 */
export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-h3">{heading}</h2>
      <div className="flex flex-col gap-3 text-base leading-7 text-secondary-foreground [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-2 [&_strong]:font-medium [&_strong]:text-foreground">
        {children}
      </div>
    </section>
  );
}

/** Bulleted list with consistent indentation + spacing. */
export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="ml-6 list-disc space-y-1.5">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
