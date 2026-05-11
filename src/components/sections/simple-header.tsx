import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

export type SimpleHeaderProps = {
  contactCta?: {
    label: string;
    href: string;
    avatar?: { src: string; alt: string };
    statusOnline?: boolean;
  };
  className?: string;
};

export function SimpleHeader({ contactCta, className }: SimpleHeaderProps) {
  return (
    <header
      className={cn(
        "w-full border-b border-border bg-background-subtle",
        className,
      )}
    >
      <div className="flex w-full items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" aria-label="Exuma, accueil" className="flex">
          <Logo className="h-7 w-auto" />
        </Link>

        {contactCta ? (
          <Link
            href={contactCta.href}
            className="relative inline-flex h-10 shrink-0 items-center gap-2 rounded-full border border-border bg-background-subtle pl-1 pr-3 text-[13px] font-medium text-foreground transition-opacity hover:opacity-85"
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
            <span>{contactCta.label}</span>
          </Link>
        ) : null}
      </div>
    </header>
  );
}
