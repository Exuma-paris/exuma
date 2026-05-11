"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type SelectTileProps = {
  label: string;
  selected?: boolean;
  onToggle?: () => void;
  disabled?: boolean;
  className?: string;
};

export function SelectTile({
  label,
  selected = false,
  onToggle,
  disabled = false,
  className,
}: SelectTileProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={disabled}
      aria-pressed={selected}
      style={{
        outline: selected
          ? "2px solid var(--foreground)"
          : "1px solid var(--border)",
        outlineOffset: selected ? "-2px" : "-1px",
      }}
      className={cn(
        "group/select-tile flex w-full items-center gap-4 rounded-xl bg-background p-4 text-left text-[15px] leading-6 text-foreground transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50",
        !disabled && "cursor-pointer",
        selected &&
          "shadow-[0_6px_12px_0_rgba(156,103,36,0.05),0_2px_6px_0_rgba(73,48,17,0.06)]",
        className,
      )}
    >
      <span className="flex-1">{label}</span>
      <span
        aria-hidden
        className={cn(
          "flex size-5 shrink-0 items-center justify-center rounded-[5px] transition-colors",
          selected
            ? "bg-foreground text-background"
            : "border border-border bg-background",
        )}
      >
        {selected ? (
          <Check className="size-3.5" strokeWidth={2.5} />
        ) : null}
      </span>
    </button>
  );
}
