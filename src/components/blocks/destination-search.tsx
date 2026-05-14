"use client";

import { useId, useRef, useState } from "react";
import { MarkerPin01 as MapPin } from "@untitledui/icons";
import { Button } from "@/components/ui/button";

export function DestinationSearch({
  placeholder = "Où souhaitez-vous partir ?",
  cta = "Planifier mes trajets",
  onSubmit,
  className,
}: {
  placeholder?: string;
  cta?: string;
  onSubmit?: (destination: string) => void;
  className?: string;
}) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(value.trim());
      }}
      className={[
        "flex w-full max-w-120 items-center gap-2 rounded-full border border-transparent bg-background p-1.5 pl-5 shadow-deep transition-[box-shadow,border-color] outline-none has-focus-visible:border-input has-focus-visible:ring-3 has-focus-visible:ring-input/50",
        className ?? "",
      ].join(" ")}
    >
      <label
        htmlFor={inputId}
        onClick={() => inputRef.current?.focus()}
        className="flex flex-1 cursor-text items-center gap-2"
      >
        <MapPin className="size-4 shrink-0 text-secondary-foreground" />
        <input
          id={inputId}
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          aria-label="Destination"
          className="min-w-0 flex-1 bg-transparent text-[13px] text-foreground placeholder:text-secondary-foreground focus:outline-none"
        />
      </label>
      <Button type="submit">{cta}</Button>
    </form>
  );
}
