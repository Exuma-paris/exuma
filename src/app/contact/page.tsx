import type { Metadata } from "next";
import { Mail01 as Mail, MarkerPin01 as MapPin, Phone } from "@untitledui/icons";
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

      <LegalSection heading="Construire votre voyage">
        <p>
          Pour entamer la préparation d'un voyage sur mesure, le plus simple
          est de nous appeler ou de nous écrire. Un travel designer vous
          recontacte dans la journée pour cadrer votre projet.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
