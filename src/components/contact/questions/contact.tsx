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
