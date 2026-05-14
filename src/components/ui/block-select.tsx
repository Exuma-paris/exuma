"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BlockSelectProps = {
  title: string;
  subtitle?: string;
  selected?: boolean;
  onToggle?: () => void;
  disabled?: boolean;
  indicator?: ReactNode;
  className?: string;
};

export function BlockSelect({
  title,
  subtitle,
  selected = false,
  onToggle,
  disabled = false,
  indicator,
  className,
}: BlockSelectProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={disabled}
      aria-pressed={selected}
      style={{
        outline: selected
          ? "2px solid var(--foreground)"
          : "1px solid var(--background-soft)",
        outlineOffset: selected ? "-2px" : "-1px",
      }}
      className={cn(
        "relative flex w-30 flex-col items-center justify-center gap-0.5 rounded-xl bg-background py-4 text-foreground transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50",
        !disabled && "cursor-pointer",
        selected &&
          "shadow-[0_6px_12px_0_rgba(156,103,36,0.05),0_2px_6px_0_rgba(73,48,17,0.06)]",
        className,
      )}
    >
      <span className="text-[15px] leading-6">{title}</span>
      {subtitle ? (
        <span className="text-[12px] leading-4 text-secondary-foreground">
          {subtitle}
        </span>
      ) : null}
      {indicator ? (
        <span
          className={cn(
            "pointer-events-none absolute",
            selected ? "top-1 right-1" : "top-[5px] right-[5px]",
          )}
        >
          {indicator}
        </span>
      ) : null}
    </button>
  );
}
