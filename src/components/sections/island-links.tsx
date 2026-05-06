import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type IslandLinksProps = {
  eyebrow?: string;
  heading: string;
  links: { label: string; href: string }[];
  background?: string;
};

export function IslandLinksSection({
  eyebrow,
  heading,
  links,
  background,
}: IslandLinksProps) {
  return (
    <div className={cn("w-full", background)}>
      <section className="section-px mx-auto flex w-full max-w-layout flex-col gap-8 py-30">
        <div className="flex flex-col gap-3">
          {eyebrow ? (
            <p className="text-eyebrow text-primary">{eyebrow}</p>
          ) : null}
          <h2 className="text-h2 max-w-180">{heading}</h2>
        </div>
        <ul className="flex flex-wrap gap-2">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-[13px] text-secondary-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                {link.label}
                <ArrowRight className="size-3 opacity-50" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
