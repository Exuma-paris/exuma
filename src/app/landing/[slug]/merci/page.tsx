import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SimpleHeader } from "@/components/sections/simple-header";
import { FaqSection } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { deriveDiscoverItems } from "@/lib/landing/inspiration";
import {
  getDestinationFaq,
  getDestinationSpecialist,
} from "@/lib/content/queries";
import { destinations } from "@/lib/content/registry";
import { EXUMA_PHONE } from "@/lib/exuma";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations[slug];
  return {
    title: destination
      ? `Demande envoyée — ${destination.name} — Exuma`
      : "Demande envoyée — Exuma",
    description:
      "Votre demande de devis a bien été reçue. Un travel designer Exuma vous contactera sous 24 heures.",
    alternates: { canonical: `/landing/${slug}/merci` },
    robots: { index: false, follow: false },
  };
}

const STAMP_EDGE_STYLE: CSSProperties = {
  WebkitMaskImage: `radial-gradient(circle 6px at 14px 0, transparent 6px, black 6.5px), radial-gradient(circle 6px at 14px 12px, transparent 6px, black 6.5px), linear-gradient(black, black)`,
  WebkitMaskSize: `28px 12px, 28px 12px, 100% calc(100% - 12px)`,
  WebkitMaskRepeat: `repeat-x, repeat-x, no-repeat`,
  WebkitMaskPosition: `0 0, 0 100%, 0 6px`,
  maskImage: `radial-gradient(circle 6px at 14px 0, transparent 6px, black 6.5px), radial-gradient(circle 6px at 14px 12px, transparent 6px, black 6.5px), linear-gradient(black, black)`,
  maskSize: `28px 12px, 28px 12px, 100% calc(100% - 12px)`,
  maskRepeat: `repeat-x, repeat-x, no-repeat`,
  maskPosition: `0 0, 0 100%, 0 6px`,
  boxShadow:
    "0 0 12px 0 rgba(54, 46, 38, 0.05), 0 0 4px 0 rgba(94, 50, 6, 0.05)",
};

const ASPECT_RATIO: Record<string, string> = {
  "3x4": "3 / 4",
  "1x1": "1 / 1",
  "16x9": "16 / 9",
};

/**
 * CheckCircle filled with the accent gradient + soft drop shadow.
 * Reproduces the Figma fill stack as an SVG <linearGradient>.
 */
function CheckCircleAccent({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
      style={{
        filter: "drop-shadow(0 0.571px 1.143px rgba(167, 127, 85, 0.19))",
      }}
    >
      <defs>
        <linearGradient
          id="check-circle-accent-grad"
          x1="50%"
          y1="100%"
          x2="35%"
          y2="0%"
        >
          <stop offset="22.36%" stopColor="#A57B50" />
          <stop offset="71.63%" stopColor="#B79573" />
        </linearGradient>
      </defs>
      <path
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1Z"
        fill="url(#check-circle-accent-grad)"
      />
      <path
        d="M17.207 9.707a1 1 0 0 0-1.414-1.414L10.5 13.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l6-6Z"
        fill="white"
      />
    </svg>
  );
}

function SpecialistLabel({ name, role }: { name: string; role?: string }) {
  return (
    <div className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 bg-linear-to-t from-black/70 via-black/30 to-transparent px-4 pt-8 pb-4 text-white">
      <p className="font-heading text-[16px] leading-6">{name}</p>
      {role ? <p className="text-[14px] leading-5">{role}</p> : null}
    </div>
  );
}

export default async function MerciPage({ params }: Props) {
  const { slug } = await params;
  const destination = destinations[slug];
  if (!destination?.landing) notFound();

  const items = deriveDiscoverItems(slug);
  const faq = getDestinationFaq(slug);
  const specialist = getDestinationSpecialist(slug);
  const specialistAvatar = specialist?.profileImage ?? specialist?.image;

  const specialistRole = `Spécialiste ${destination.genitive}`;
  const confirmationBody = `Un de nos conseillers voyage Exuma, expert en ${destination.name}, vous contactera dans les 24 heures pour discuter plus en détail de votre projet.`;

  const headerContactCta = {
    label: "Contactez-nous",
    phone: EXUMA_PHONE,
    avatar: specialistAvatar,
    statusOnline: true,
  };

  return (
    <main className="min-h-screen bg-background-subtle">
      <SimpleHeader contactCta={headerContactCta} logoHref={null} />

      {/* Confirmation hero */}
      <section className="section-px mx-auto w-full max-w-layout pt-12 pb-20 md:pt-20 md:pb-30">
        <div className="relative">
          {/* Card with stamp edges */}
          <div
            className="bg-background px-8 py-12 md:py-12 lg:px-20"
            style={STAMP_EDGE_STYLE}
          >
            <div className="mx-auto flex max-w-110 flex-col items-center gap-6 text-center lg:mx-0 lg:max-w-105">
              <CheckCircleAccent className="size-12" />
              <div className="flex flex-col gap-3">
                <p className="text-eyebrow text-primary">Demande de devis</p>
                <h1 className="text-h1">Demande envoyée</h1>
                <p className="text-secondary-foreground">{confirmationBody}</p>
              </div>
              <Link
                href="#inspirations"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Découvrir les inspirations
              </Link>
              {specialist ? (
                <div className="relative mt-2 aspect-303/365 w-full max-w-70 overflow-hidden bg-muted shadow-deep lg:hidden">
                  <Image
                    src={specialist.image.src}
                    alt={specialist.image.alt}
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                  <SpecialistLabel
                    name={specialist.name}
                    role={specialistRole}
                  />
                </div>
              ) : null}
            </div>
          </div>

          {/* Specialist photo overlay — desktop only. */}
          {specialist ? (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden items-center px-8 py-8 lg:flex"
            >
              <div className="relative aspect-303/365 max-h-full w-[clamp(220px,24vw,300px)] overflow-hidden bg-muted shadow-deep">
                <Image
                  src={specialist.image.src}
                  alt={specialist.image.alt}
                  fill
                  sizes="(min-width: 1280px) 300px, 24vw"
                  className="object-cover"
                />
                <SpecialistLabel
                  name={specialist.name}
                  role={specialistRole}
                />
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* Inspirations grid */}
      {items.length > 0 ? (
        <section
          id="inspirations"
          className="section-px mx-auto w-full max-w-layout scroll-mt-20 pb-20 md:pb-30"
        >
          <div className="mb-10 flex flex-col gap-3 border-t border-border pt-10">
            <p className="text-eyebrow text-primary">Récapitulatif</p>
            <h2 className="text-h2 max-w-110">
              Quelques inspirations en lien avec vos réponses
            </h2>
          </div>
          <div className="gap-5 sm:columns-2 lg:columns-3">
            {items.map((item) => (
              <article key={item.id} className="mb-5 break-inside-avoid">
                <div
                  className="relative w-full overflow-hidden bg-muted"
                  style={{
                    aspectRatio:
                      ASPECT_RATIO[item.imageRatio ?? "3x4"] ?? "3 / 4",
                  }}
                >
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 pt-4">
                  <p className="text-eyebrow text-primary">{item.eyebrow}</p>
                  <h3 className="text-h4 text-foreground">{item.title}</h3>
                  <p className="text-[14px] leading-[1.6] text-secondary-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {faq ? <FaqSection {...faq} background="bg-background" /> : null}

      <Footer />
    </main>
  );
}
