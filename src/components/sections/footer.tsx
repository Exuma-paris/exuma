import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Mail01 as Mail,
  MarkerPin01 as MapPin,
  Phone,
} from "@untitledui/icons";
import { Logo } from "@/components/ui/logo";
import { socialIcons } from "@/components/ui/social-icons";
import { FooterNavGroup } from "@/components/sections/footer-nav-group";
import { getMenuGroups, menuCtas, proLink } from "@/lib/content/menu-groups";
import {
  EXUMA_ADDRESS,
  EXUMA_EMAIL,
  EXUMA_PHONE,
  EXUMA_POSTAL_ADDRESS,
  EXUMA_SOCIALS,
} from "@/lib/exuma";
import { cn } from "@/lib/utils";

const tagline =
  "Agence de voyage de luxe sur-mesure. Itinéraires confidentiels, conciergerie privée et accès privilégiés à travers le monde.";

const contact = {
  email: EXUMA_EMAIL,
  phone: EXUMA_PHONE,
  address: EXUMA_ADDRESS,
};

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Conditions générales de vente", href: "/cgv" },
  { label: "Politique de confidentialité", href: "/confidentialite" },
  { label: "Gestion des cookies", href: "/cookies" },
];

const certifications = [
  {
    src: "/logos/logo-iata.png",
    alt: "IATA — International Air Transport Association",
    width: 320,
    height: 160,
  },
  {
    src: "/logos/logo-les-entreprises-du-voyage.png",
    alt: "Les Entreprises du Voyage",
    width: 320,
    height: 160,
  },
  {
    src: "/logos/logo-takumians.png",
    alt: "Takumians — Member Travel Designer",
    width: 320,
    height: 160,
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
      ...EXUMA_POSTAL_ADDRESS,
    },
    // `sameAs` est ce qui permet à un moteur de rattacher les comptes sociaux
    // à la fiche de la maison plutôt que de les traiter comme trois entités.
    sameAs: EXUMA_SOCIALS.map((s) => s.href),
  };
}

/**
 * Bande pleine largeur du pied de page, séparée de la précédente par un filet.
 *
 * Le filet est piloté par `divider` et non par un `first:` : le premier enfant
 * du `<footer>` est le bloc JSON-LD, donc la première bande n'est jamais
 * `:first-child` et se retrouvait soulignée en haut du pied de page.
 */
function Band({
  children,
  className,
  divider = true,
}: {
  children: React.ReactNode;
  className?: string;
  divider?: boolean;
}) {
  return (
    <div className={cn(divider && "border-t border-background/10")}>
      <div
        className={cn(
          "section-px mx-auto w-full max-w-layout",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function Footer({ className }: { className?: string }) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://exuma.example.com";

  // Same source as the burger menu, so a label or link renamed there can
  // never leave the footer showing the old wording.
  const groups = getMenuGroups();

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

      {/* Le footer ferme chaque page du site : les deux mêmes CTA que l'en-tête
          y sont repris, sinon la dernière chose que voit le visiteur est une
          liste de liens sans issue. */}
      <Band
        divider={false}
        className="flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between md:py-12"
      >
        <div className="flex flex-col gap-4">
          <Link href="/" aria-label="Exuma, accueil" className="inline-flex">
            <Logo className="h-8 w-auto text-background" />
          </Link>
          <p className="max-w-md text-background/70">{tagline}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={menuCtas.primary.href}
            className="inline-flex items-center rounded-full bg-background px-6 py-3 text-[13px] tracking-wide text-foreground transition-opacity hover:opacity-80"
          >
            {menuCtas.primary.label}
          </Link>
          <Link
            href={menuCtas.contact.href}
            className="inline-flex items-center rounded-full border border-background/25 px-6 py-3 text-[13px] tracking-wide text-background transition-colors hover:border-background/60"
          >
            {menuCtas.contact.label}
          </Link>
        </div>
      </Band>

      {/* Audience distincte du catalogue grand public, et pas une mention
          légale : elle a sa propre bande, pas une ligne perdue en bas de page. */}
      <Band>
        <Link
          href={proLink.href}
          className="group flex flex-col gap-3 py-7 md:flex-row md:items-center md:justify-between md:gap-8"
        >
          <span className="flex flex-col gap-1.5">
            <span className="text-eyebrow text-background/60">
              Espace professionnels
            </span>
            <span className="text-lg text-background">{proLink.label}</span>
          </span>
          <span className="inline-flex items-center gap-2 text-[13px] tracking-wide text-background/70 transition-colors group-hover:text-background">
            Découvrir l&apos;offre B2B
            <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </Band>

      {/* Au-dessus de md, quatre colonnes sur toute la largeur : à 127px, la
          moitié des libellés du site ("Ingénierie du voyage & support global")
          passaient sur deux ou trois lignes et se confondaient avec le lien
          suivant. En dessous, une seule colonne pleine largeur et des groupes
          repliés, sinon les 22 liens font à eux seuls deux écrans de haut. */}
      <Band className="grid grid-cols-1 gap-x-8 py-4 md:grid-cols-4 md:py-12">
        {groups.map((group) => (
          <nav key={group.key} aria-label={group.label}>
            <FooterNavGroup label={group.label}>
              <ul className="flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-block leading-snug text-background/80 transition-colors hover:text-background"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterNavGroup>
          </nav>
        ))}
      </Band>

      <Band className="flex flex-col gap-8 py-8 lg:flex-row lg:items-center lg:justify-between">
        <address className="not-italic">
          <ul className="flex flex-col gap-3 text-background/80 md:flex-row md:flex-wrap md:items-center md:gap-x-8">
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0" aria-hidden />
              <a
                href={`mailto:${contact.email}`}
                className="transition-colors hover:text-background"
              >
                {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0" aria-hidden />
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-background"
              >
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 shrink-0" aria-hidden />
              <span>{contact.address}</span>
            </li>
          </ul>
          <ul className="mt-6 flex items-center gap-3">
            {EXUMA_SOCIALS.map((social) => {
              const Icon = socialIcons[social.name];
              return (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Exuma sur ${social.name}`}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-background/20 text-background/70 transition-colors hover:border-background/50 hover:text-background"
                  >
                    <Icon className="size-[18px]" />
                  </a>
                </li>
              );
            })}
          </ul>
        </address>

        <div className="flex flex-col gap-4 lg:items-end">
          <p className="text-eyebrow text-background/60">Membre et accrédité</p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {certifications.map((c) => (
              <li key={c.src}>
                <Image
                  src={c.src}
                  alt={c.alt}
                  width={c.width}
                  height={c.height}
                  style={{ height: "2.25rem", width: "auto" }}
                  className="object-contain opacity-80 brightness-0 invert"
                />
              </li>
            ))}
          </ul>
        </div>
      </Band>

      <Band className="flex flex-col gap-4 py-6 text-xs text-background/60 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Exuma, Agence de voyage de luxe. Tous
          droits réservés.
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {legalLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="transition-colors hover:text-background"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </Band>
    </footer>
  );
}
