"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { PhoneCountrySelect } from "@/components/ui/phone-country-select";
import {
  isValidEmail,
  isValidPhone,
  type CallSlot,
  type ContactAnswer,
  type ContactPreference,
  type ContactQuestion,
} from "@/lib/contact/types";
import { cn } from "@/lib/utils";

export type ContactQuestionProps = {
  question: ContactQuestion;
  value: ContactAnswer;
  onChange: (next: ContactAnswer) => void;
};

const PREFERENCES: { id: ContactPreference; label: string }[] = [
  { id: "phone", label: "Téléphone" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "email", label: "E-mail" },
];

const SLOTS: { id: CallSlot; label: string }[] = [
  { id: "morning", label: "Matin" },
  { id: "afternoon", label: "Après-midi" },
  { id: "evening", label: "Soir" },
];

/** Une rangée de pastilles à choix unique, plus légère que les tuiles. */
function Pills<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { id: T; label: string }[];
  value: T | null;
  onChange: (next: T) => void;
}) {
  return (
    <div className="flex flex-col gap-2 px-1">
      <p className="text-[13px] text-secondary-foreground">{label}</p>
      <div role="group" aria-label={label} className="flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = value === option.id;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option.id)}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2 text-[13px] transition-colors",
                selected
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-foreground hover:border-foreground/40",
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function ContactQuestionView({
  question,
  value,
  onChange,
}: ContactQuestionProps) {
  const set = <K extends keyof ContactAnswer>(key: K, next: ContactAnswer[K]) =>
    onChange({ ...value, [key]: next });

  // Les messages n'apparaissent qu'après avoir quitté le champ : corriger
  // quelqu'un pendant qu'il tape est désagréable, le laisser dans le flou
  // devant un bouton gris l'est aussi.
  const [touched, setTouched] = useState<{ email?: boolean; phone?: boolean }>({});
  const touch = (field: "email" | "phone") =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const emailError =
    touched.email && value.email.trim() && !isValidEmail(value.email)
      ? "Vérifiez l'adresse e-mail, elle semble incomplète."
      : undefined;
  const phoneError =
    touched.phone && value.phone.trim() && !isValidPhone(value.phone)
      ? "Ce numéro semble trop court."
      : undefined;

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
        onBlur={() => touch("email")}
        error={emailError}
        required
      />
      <Input
        label="Téléphone"
        type="tel"
        autoComplete="tel"
        value={value.phone}
        onChange={(e) => set("phone", e.target.value)}
        onBlur={() => touch("phone")}
        error={phoneError}
        leading={
          <PhoneCountrySelect
            value={value.phoneCountry}
            onChange={(code) => set("phoneCountry", code)}
          />
        }
        required
      />

      {/* Par où revenir, et quand : la promesse est un rappel sous 24 heures,
          autant qu'il tombe au bon moment. Le créneau reste facultatif. */}
      <Pills
        label="Comment préférez-vous être contacté ?"
        options={PREFERENCES}
        value={value.contactPreference}
        onChange={(next) => set("contactPreference", next)}
      />
      {value.contactPreference !== "email" ? (
        <Pills
          label="À quel moment, de préférence ?"
          options={SLOTS}
          value={value.callSlot}
          onChange={(next) =>
            set("callSlot", value.callSlot === next ? null : next)
          }
        />
      ) : null}

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
