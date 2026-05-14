"use client";

import { Check } from "@untitledui/icons";
import { cn } from "@/lib/utils";

export type CheckboxProps = {
  label: React.ReactNode;
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  className?: string;
};

export function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  className,
}: CheckboxProps) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-start gap-3 text-[14px] leading-[1.5] text-secondary-foreground",
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
    >
      <span
        className={cn(
          "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-[5px] border transition-colors",
          checked
            ? "border-foreground bg-foreground text-background"
            : "border-border bg-background",
        )}
        aria-hidden
      >
        {checked ? <Check className="size-3.5" strokeWidth={2.5} /> : null}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
        className="sr-only"
      />
      <span className="flex-1">{label}</span>
    </label>
  );
}
