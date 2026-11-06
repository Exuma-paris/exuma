"use client";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { PhoneCountrySelect } from "@/components/ui/phone-country-select";
import type {
  ContactAnswer,
  ContactQuestion,
} from "@/lib/contact/types";

export type ContactQuestionProps = {
  question: ContactQuestion;
  value: ContactAnswer;
  onChange: (next: ContactAnswer) => void;
};

export function ContactQuestionView({
  question,
  value,
  onChange,
}: ContactQuestionProps) {
  const set = <K extends keyof ContactAnswer>(key: K, next: ContactAnswer[K]) =>
    onChange({ ...value, [key]: next });

  return (
    <div className="flex flex-col gap-3">
      <Input
        label="Nom complet"
        type="text"
        autoComplete="name"
        value={value.name}
        onChange={(e) => set("name", e.target.value)}
        required
      />
      {question.withCompany ? (
        // Facultatif, mais présenté comme les autres champs : le signaler
        // reviendrait à inviter à le sauter.
        <Input
          label={question.companyLabel ?? "Société"}
          type="text"
          autoComplete="organization"
          value={value.company}
          onChange={(e) => set("company", e.target.value)}
        />
      ) : null}
      <Input
        label="Email"
        type="email"
        autoComplete="email"
        value={value.email}
        onChange={(e) => set("email", e.target.value)}
        required
      />
      <Input
        label="Téléphone"
        type="tel"
        autoComplete="tel"
        value={value.phone}
        onChange={(e) => set("phone", e.target.value)}
        leading={
          <PhoneCountrySelect
            value={value.phoneCountry}
            onChange={(code) => set("phoneCountry", code)}
          />
        }
        required
      />
      <Checkbox
        checked={value.marketingConsent}
        onChange={(next) => set("marketingConsent", next)}
        label={
          question.marketingConsentLabel ??
          "J'accepte d'être recontacté par Exuma pour discuter de mon projet de voyage."
        }
      />
      <p className="text-[13px] leading-5 text-secondary-foreground">
        Vos réponses servent à traiter votre demande et sont réservées aux
        équipes d&apos;Exuma. Pour connaître vos droits, consultez notre{" "}
        <a
          href="/confidentialite"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          politique de confidentialité
        </a>
        .
      </p>
    </div>
  );
}
