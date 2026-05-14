import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

const stripWhitespace = (s: string) => s.replace(/\s/g, "");

export type SimpleHeaderProps = {
  contactCta?: {
    /** Displayed by default. Crossfades to `phone` on hover. */
    label: string;
    /** Displayed on hover. Also used to build the `tel:` href (whitespace stripped). */
    phone: string;
    avatar?: { src: string; alt: string };
    statusOnline?: boolean;
  };
  /**
   * Where the logo links to. Defaults to `/`.
   * Pass `null` to render the logo as a non-clickable element — useful in
   * funnel flows (landing → contact → merci) where the logo shouldn't yank
   * the user out of the funnel by sending them to the marketing root.
   */
  logoHref?: string | null;
  className?: string;
};

export function SimpleHeader({
  contactCta,
  logoHref = "/",
  className,
}: SimpleHeaderProps) {
  const logo = <Logo className="h-7 w-auto" />;
  return (
    <header
      className={cn(
        "w-full border-b border-border bg-background-subtle",
        className,
      )}
    >
      <div className="flex w-full items-center justify-between px-6 py-4 md:px-10">
        {logoHref === null ? (
          <span aria-label="Exuma" className="flex">
            {logo}
          </span>
        ) : (
          <Link href={logoHref} aria-label="Exuma, accueil" className="flex">
            {logo}
          </Link>
        )}

        {contactCta ? (
          <a
            href={`tel:${stripWhitespace(contactCta.phone)}`}
            aria-label={`${contactCta.label} — ${contactCta.phone}`}
            className="group relative inline-flex h-10 shrink-0 items-center gap-2 rounded-full border border-border bg-background-subtle pl-1 pr-3 text-[13px] font-medium text-foreground transition-opacity hover:opacity-85"
          >
            {contactCta.avatar ? (
              <span className="relative size-8 shrink-0 overflow-hidden rounded-full bg-background">
                <Image
                  src={contactCta.avatar.src}
                  alt={contactCta.avatar.alt}
                  fill
                  sizes="32px"
                  className="object-cover"
                />
                {contactCta.statusOnline ? (
                  <span
                    aria-hidden
                    className="absolute right-0 bottom-0 size-2 rounded-full border-2 border-background-subtle bg-[#33b06f]"
                  />
                ) : null}
              </span>
            ) : null}
            {/* Vertical-slide overlay: label sits visible, phone is parked
                one row below. On hover the inner stack translates up by one
                row, swapping them. Outer span has fixed h-6 + overflow-hidden
                so only one row is visible at a time. Width = max of the two
                strings (flex-col children share max width), no horizontal
                layout shift. */}
            <span className="relative flex h-6 items-start overflow-hidden">
              <span className="flex flex-col items-start transition-transform duration-200 ease-out group-hover:-translate-y-6">
                <span aria-hidden className="flex h-6 items-center">
                  {contactCta.label}
                </span>
                <span
                  aria-hidden
                  className="flex h-6 items-center whitespace-nowrap"
                >
                  {contactCta.phone}
                </span>
              </span>
            </span>
          </a>
        ) : null}
      </div>
    </header>
  );
}
