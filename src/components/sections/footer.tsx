import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import {
  continents,
  serviceCategories,
  themes,
} from "@/lib/content/registry";
import { cn } from "@/lib/utils";

const tagline =
  "Agence de voyage de luxe sur-mesure. Itinéraires confidentiels, conciergerie privée et accès privilégiés à travers le monde.";

const contact = {
  email: "contact@exuma.paris",
  phone: "+33 1 00 00 00 00",
  address: "Paris, France",
};

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Conditions générales de vente", href: "/cgv" },
  { label: "Politique de confidentialité", href: "/confidentialite" },
  { label: "Gestion des cookies", href: "/cookies" },
];

const companyLinks = [
  { label: "À propos d'Exuma", href: "/a-propos" },
  { label: "Notre approche", href: "/approche" },
  { label: "Contactez-nous", href: "/contact" },
  { label: "FAQ", href: "/#faq" },
  { label: "Créer votre voyage", href: "/reserver" },
];

const certifications = [
  {
    src: "/logos/logo-iata.png",
    alt: "IATA — International Air Transport Association",
    width: 96,
    height: 48,
  },
  {
    src: "/logos/logo-les-entreprises-du-voyage.png",
    alt: "Les Entreprises du Voyage",
    width: 160,
    height: 48,
  },
  {
    src: "/logos/logo-takumians.png",
    alt: "Takumians — Member Travel Designer",
    width: 160,
    height: 48,
  },
];

function organizationJsonLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Exuma",
    description: tagline,
    url: siteUrl,
    email: contact.email,
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
  };
}

export function Footer({ className }: { className?: string }) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://exuma.example.com";

  const continentList = Object.values(continents);
  const themeList = Object.values(themes);
  const serviceList = Object.values(serviceCategories);

  return (
    <footer
      role="contentinfo"
      className={cn(
        "mt-auto w-full bg-foreground text-background",
        className,
      )}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd(siteUrl)),
        }}
      />

      <div className="section-px mx-auto w-full max-w-layout py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Link href="/" aria-label="Exuma, accueil" className="inline-flex">
              <Logo className="h-8 w-auto text-background" />
            </Link>
            <p className="max-w-80 text-background/70">{tagline}</p>

            <address className="not-italic">
              <ul className="flex flex-col gap-3 text-background/80">
                <li className="flex items-center gap-3">
                  <Mail className="size-4 shrink-0" aria-hidden />
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-background"
                  >
                    {contact.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0" aria-hidden />
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="hover:text-background"
                  >
                    {contact.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="size-4 shrink-0" aria-hidden />
                  <span>{contact.address}</span>
                </li>
              </ul>
            </address>

            <div className="flex flex-col gap-4 border-t border-background/10 pt-6">
              <p className="text-eyebrow text-background/60">
                Agence recommandée par
              </p>
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-4">
                {certifications.map((c) => (
                  <li key={c.src}>
                    <Image
                      src={c.src}
                      alt={c.alt}
                      width={c.width}
                      height={c.height}
                      style={{ height: "2.5rem", width: "auto" }}
                      className="object-contain brightness-0 invert"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <nav
            aria-label="Continents"
            className="flex flex-col gap-4 lg:col-span-2"
          >
            <p className="text-eyebrow text-background/60">Continents</p>
            <ul className="flex flex-col gap-2">
              {continentList.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/continents/${c.slug}`}
                    className="text-background/80 hover:text-background"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            aria-label="Thématiques de voyage"
            className="flex flex-col gap-4 lg:col-span-2"
          >
            <p className="text-eyebrow text-background/60">Thématiques</p>
            <ul className="flex flex-col gap-2">
              {themeList.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/themes/${t.slug}`}
                    className="text-background/80 hover:text-background"
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            aria-label="Conciergerie"
            className="flex flex-col gap-4 lg:col-span-2"
          >
            <p className="text-eyebrow text-background/60">Conciergerie</p>
            <ul className="flex flex-col gap-2">
              {serviceList.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-background/80 hover:text-background"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            aria-label="Agence"
            className="flex flex-col gap-4 lg:col-span-2"
          >
            <p className="text-eyebrow text-background/60">Agence</p>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-background/80 hover:text-background"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      </div>

      <div className="border-t border-background/10">
        <div className="section-px mx-auto flex w-full max-w-layout flex-col gap-4 py-6 text-xs text-background/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Exuma, Agence de voyage de luxe.
            Tous droits réservés.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-background">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
