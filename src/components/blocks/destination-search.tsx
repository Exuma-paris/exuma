"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
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
      <MapPin className="size-4 shrink-0 text-secondary-foreground" />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        aria-label="Destination"
        className="min-w-0 flex-1 bg-transparent text-[13px] text-foreground placeholder:text-secondary-foreground focus:outline-none"
      />
      <Button type="submit">{cta}</Button>
    </form>
  );
}
