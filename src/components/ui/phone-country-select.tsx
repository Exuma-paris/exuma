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

/** Les pays francophones proches d'abord, puis le reste par ordre alphabétique. */
export const COUNTRIES: Country[] = [
  { code: "FR", name: "France", dialCode: "+33", flag: "🇫🇷" },
  { code: "BE", name: "Belgique", dialCode: "+32", flag: "🇧🇪" },
  { code: "CH", name: "Suisse", dialCode: "+41", flag: "🇨🇭" },
  { code: "LU", name: "Luxembourg", dialCode: "+352", flag: "🇱🇺" },
  { code: "MC", name: "Monaco", dialCode: "+377", flag: "🇲🇨" },
  { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦" },
  { code: "ZA", name: "Afrique du Sud", dialCode: "+27", flag: "🇿🇦" },
  { code: "DZ", name: "Algérie", dialCode: "+213", flag: "🇩🇿" },
  { code: "DE", name: "Allemagne", dialCode: "+49", flag: "🇩🇪" },
  { code: "AD", name: "Andorre", dialCode: "+376", flag: "🇦🇩" },
  { code: "SA", name: "Arabie saoudite", dialCode: "+966", flag: "🇸🇦" },
  { code: "AU", name: "Australie", dialCode: "+61", flag: "🇦🇺" },
  { code: "AT", name: "Autriche", dialCode: "+43", flag: "🇦🇹" },
  { code: "BR", name: "Brésil", dialCode: "+55", flag: "🇧🇷" },
  { code: "CN", name: "Chine", dialCode: "+86", flag: "🇨🇳" },
  { code: "CI", name: "Côte d'Ivoire", dialCode: "+225", flag: "🇨🇮" },
  { code: "DK", name: "Danemark", dialCode: "+45", flag: "🇩🇰" },
  { code: "AE", name: "Émirats arabes unis", dialCode: "+971", flag: "🇦🇪" },
  { code: "ES", name: "Espagne", dialCode: "+34", flag: "🇪🇸" },
  { code: "US", name: "États-Unis", dialCode: "+1", flag: "🇺🇸" },
  { code: "GR", name: "Grèce", dialCode: "+30", flag: "🇬🇷" },
  { code: "GP", name: "Guadeloupe", dialCode: "+590", flag: "🇬🇵" },
  { code: "HK", name: "Hong Kong", dialCode: "+852", flag: "🇭🇰" },
  { code: "IN", name: "Inde", dialCode: "+91", flag: "🇮🇳" },
  { code: "IE", name: "Irlande", dialCode: "+353", flag: "🇮🇪" },
  { code: "IL", name: "Israël", dialCode: "+972", flag: "🇮🇱" },
  { code: "IT", name: "Italie", dialCode: "+39", flag: "🇮🇹" },
  { code: "JP", name: "Japon", dialCode: "+81", flag: "🇯🇵" },
  { code: "RE", name: "La Réunion", dialCode: "+262", flag: "🇷🇪" },
  { code: "LB", name: "Liban", dialCode: "+961", flag: "🇱🇧" },
  { code: "MA", name: "Maroc", dialCode: "+212", flag: "🇲🇦" },
  { code: "MQ", name: "Martinique", dialCode: "+596", flag: "🇲🇶" },
  { code: "MU", name: "Maurice", dialCode: "+230", flag: "🇲🇺" },
  { code: "MX", name: "Mexique", dialCode: "+52", flag: "🇲🇽" },
  { code: "NO", name: "Norvège", dialCode: "+47", flag: "🇳🇴" },
  { code: "NC", name: "Nouvelle-Calédonie", dialCode: "+687", flag: "🇳🇨" },
  { code: "NZ", name: "Nouvelle-Zélande", dialCode: "+64", flag: "🇳🇿" },
  { code: "NL", name: "Pays-Bas", dialCode: "+31", flag: "🇳🇱" },
  { code: "PL", name: "Pologne", dialCode: "+48", flag: "🇵🇱" },
  { code: "PF", name: "Polynésie française", dialCode: "+689", flag: "🇵🇫" },
  { code: "PT", name: "Portugal", dialCode: "+351", flag: "🇵🇹" },
  { code: "QA", name: "Qatar", dialCode: "+974", flag: "🇶🇦" },
  { code: "GB", name: "Royaume-Uni", dialCode: "+44", flag: "🇬🇧" },
  { code: "SN", name: "Sénégal", dialCode: "+221", flag: "🇸🇳" },
  { code: "SG", name: "Singapour", dialCode: "+65", flag: "🇸🇬" },
  { code: "SE", name: "Suède", dialCode: "+46", flag: "🇸🇪" },
  { code: "TN", name: "Tunisie", dialCode: "+216", flag: "🇹🇳" },
  { code: "TR", name: "Turquie", dialCode: "+90", flag: "🇹🇷" },
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
