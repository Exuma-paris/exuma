import type { Metadata } from "next";
import Link from "next/link";
import { Mail01 as Mail, MarkerPin01 as MapPin, Phone } from "@untitledui/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  LegalPage,
  LegalSection,
} from "@/components/sections/legal-page";
import {
  EXUMA_ADDRESS,
  EXUMA_EMAIL,
  EXUMA_HOURS,
  EXUMA_PHONE,
} from "@/lib/exuma";

export const metadata: Metadata = {
  title: "Contact — Exuma",
  description:
    "Joindre l'équipe Exuma : téléphone, courriel, adresse. Lundi au vendredi, 9h–19h.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <LegalPage
      eyebrow="Nous joindre"
      heading="Contact"
    >
      <LegalSection heading="Coordonnées">
        <ul className="flex flex-col gap-4">
          <li className="flex items-start gap-3">
            <Phone className="mt-1 size-5 shrink-0 text-primary" aria-hidden />
            <div>
              <p className="text-sm text-secondary-foreground">Téléphone</p>
              <a
                href={`tel:${EXUMA_PHONE.replace(/\s/g, "")}`}
                className="text-foreground"
              >
                {EXUMA_PHONE}
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Mail className="mt-1 size-5 shrink-0 text-primary" aria-hidden />
            <div>
              <p className="text-sm text-secondary-foreground">Courriel</p>
              <a href={`mailto:${EXUMA_EMAIL}`} className="text-foreground">
                {EXUMA_EMAIL}
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="mt-1 size-5 shrink-0 text-primary" aria-hidden />
            <div>
              <p className="text-sm text-secondary-foreground">Adresse</p>
              <address className="not-italic text-foreground">
                {EXUMA_ADDRESS}
              </address>
            </div>
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="Horaires">
        <p>{EXUMA_HOURS}</p>
      </LegalSection>

      <LegalSection heading="Nous écrire">
        <p>
          Si vous préférez l&apos;écrit, trois questions suffisent : ce que vous
          avez en tête, comment vous nous avez connus, et comment vous joindre.
          Un interlocuteur vous répond dans les 24 heures ouvrées.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/nous-ecrire"
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Nous écrire
          </Link>
          <Link
            href="/votre-projet"
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            Créer votre voyage
          </Link>
        </div>
      </LegalSection>
    </LegalPage>
  );
}
