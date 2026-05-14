"use client";

import { Select } from "@base-ui/react/select";
import { ChevronDown } from "@untitledui/icons";
import { cn } from "@/lib/utils";

export type Country = {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
};

export const COUNTRIES: Country[] = [
  { code: "FR", name: "France", dialCode: "+33", flag: "🇫🇷" },
  { code: "BE", name: "Belgique", dialCode: "+32", flag: "🇧🇪" },
  { code: "CH", name: "Suisse", dialCode: "+41", flag: "🇨🇭" },
  { code: "LU", name: "Luxembourg", dialCode: "+352", flag: "🇱🇺" },
  { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦" },
  { code: "DE", name: "Allemagne", dialCode: "+49", flag: "🇩🇪" },
  { code: "ES", name: "Espagne", dialCode: "+34", flag: "🇪🇸" },
  { code: "IT", name: "Italie", dialCode: "+39", flag: "🇮🇹" },
  { code: "PT", name: "Portugal", dialCode: "+351", flag: "🇵🇹" },
  { code: "NL", name: "Pays-Bas", dialCode: "+31", flag: "🇳🇱" },
  { code: "GB", name: "Royaume-Uni", dialCode: "+44", flag: "🇬🇧" },
  { code: "US", name: "États-Unis", dialCode: "+1", flag: "🇺🇸" },
];

export function findCountry(code: string): Country {
  return COUNTRIES.find((c) => c.code === code) ?? COUNTRIES[0];
}

export type PhoneCountrySelectProps = {
  value: string;
  onChange: (code: string) => void;
  disabled?: boolean;
};

export function PhoneCountrySelect({
  value,
  onChange,
  disabled,
}: PhoneCountrySelectProps) {
  const safeValue = value ?? "FR";
  const country = findCountry(safeValue);
  return (
    <Select.Root
      value={safeValue}
      onValueChange={(next) => onChange(next as string)}
      disabled={disabled}
    >
      <Select.Trigger
        aria-label="Indicatif pays"
        className="group flex h-full cursor-pointer items-center gap-1.5 px-3 outline-none focus-visible:bg-background-soft disabled:cursor-not-allowed"
      >
        <span aria-hidden className="text-[15px] leading-none">
          {country.flag}
        </span>
        <ChevronDown
          className="size-3 text-[#888684] transition-transform group-data-popup-open:rotate-180"
        />
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner sideOffset={6} align="start" alignItemWithTrigger={false}>
          <Select.Popup
            className={cn(
              "max-h-80 min-w-64 overflow-y-auto rounded-xl border border-border bg-background py-1 shadow-deep",
              "data-open:animate-in data-closed:animate-out",
            )}
          >
            <Select.List>
              {COUNTRIES.map((c) => (
                <Select.Item
                  key={c.code}
                  value={c.code}
                  className="flex cursor-pointer items-center gap-3 px-3 py-2 text-[14px] leading-5 outline-none data-highlighted:bg-background-soft"
                >
                  <span aria-hidden className="text-[15px] leading-none">
                    {c.flag}
                  </span>
                  <Select.ItemText className="flex-1 text-foreground">
                    {c.name}
                  </Select.ItemText>
                  <span className="text-secondary-foreground">{c.dialCode}</span>
                </Select.Item>
              ))}
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}
