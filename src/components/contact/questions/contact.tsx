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
      {/* Prénom et nom séparés : les conversions avancées (Ads, GA4) et le
          CRM les attendent dans deux champs, et un découpage automatique se
          trompe sur les prénoms et noms composés. */}
      <div className="grid grid-cols-2 gap-3">
        <Input
          label="Prénom"
          type="text"
          autoComplete="given-name"
          value={value.firstName}
          onChange={(e) => set("firstName", e.target.value)}
          required
        />
        <Input
          label="Nom"
          type="text"
          autoComplete="family-name"
          value={value.lastName}
          onChange={(e) => set("lastName", e.target.value)}
          required
        />
      </div>
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
    </div>
  );
}
