"use client";

import {
  useId,
  useState,
  type ComponentProps,
  type FocusEvent,
  type ChangeEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export type InputProps = Omit<
  ComponentProps<"input">,
  "placeholder" | "size"
> & {
  label: string;
  error?: string;
  helperText?: string;
  leading?: ReactNode;
};

export function Input({
  label,
  error,
  helperText,
  leading,
  className,
  id,
  value,
  defaultValue,
  onChange,
  onFocus,
  onBlur,
  disabled,
  ...rest
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const [focused, setFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(
    defaultValue !== undefined ? String(defaultValue) : "",
  );
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;
  const hasValue = String(currentValue ?? "").length > 0;
  const isFloating = focused || hasValue;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternalValue(e.target.value);
    onChange?.(e);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    onBlur?.(e);
  };

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <div
        className={cn(
          "relative flex h-14 overflow-hidden rounded-xl bg-background transition-colors",
          disabled && "opacity-50",
        )}
        style={{
          outline: error
            ? "2px solid #ff9ba2"
            : focused
              ? "2px solid var(--foreground)"
              : "1px solid #eae5de",
          outlineOffset: error || focused ? "-2px" : "-1px",
        }}
      >
        {leading ? (
          <div className="flex shrink-0 items-center border-r border-[#eae5de]">
            {leading}
          </div>
        ) : null}
        <div className="relative min-w-0 flex-1">
          <label
            htmlFor={inputId}
            className={cn(
              "pointer-events-none absolute left-3 cursor-text text-[#888684] transition-all duration-150",
              isFloating
                ? "top-2 text-[12px] leading-4"
                : "top-1/2 -translate-y-1/2 text-[15px] leading-6",
            )}
          >
            {label}
          </label>
          <input
            id={inputId}
            value={isControlled ? value : undefined}
            defaultValue={isControlled ? undefined : defaultValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            className="absolute inset-0 w-full bg-transparent px-3 pt-6 pb-2 text-[15px] leading-6 text-foreground outline-none disabled:cursor-not-allowed"
            {...rest}
          />
        </div>
      </div>
      {error ? (
        <div className="flex items-center gap-1.5 text-[12px] leading-4 text-foreground">
          <span
            aria-hidden
            className="inline-block size-3 shrink-0 rounded-full bg-[#FF5864]"
          />
          <span>{error}</span>
        </div>
      ) : helperText ? (
        <p className="text-[12px] leading-4 text-[#888684]">{helperText}</p>
      ) : null}
    </div>
  );
}
