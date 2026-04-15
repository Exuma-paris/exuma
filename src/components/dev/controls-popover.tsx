"use client";

import { useEffect, useRef, useState } from "react";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type SwatchOption = {
  label: string;
  value: string;
  color: string;
};

export type PreviewControl =
  | {
      key: string;
      type: "select";
      label: string;
      options: { label: string; value: string }[];
    }
  | {
      key: string;
      type: "swatch";
      label: string;
      options: SwatchOption[];
    }
  | {
      key: string;
      type: "number";
      label: string;
      min?: number;
      max?: number;
    }
  | { key: string; type: "boolean"; label: string };

export type ControlValue = string | number | boolean;

export function ControlsPopover({
  controls,
  values,
  onChange,
}: {
  controls: PreviewControl[];
  values: Record<string, ControlValue>;
  onChange: (key: string, value: ControlValue) => void;
}) {
  const [open, setOpen] = useState(false);
  const popRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (!popRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  if (!controls.length) return null;

  return (
    <div className="relative" ref={popRef}>
      <Button
        variant="outline"
        className="aspect-square border-0 px-0 shadow-deep"
        aria-label="Modifier les propriétés"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <Pencil />
      </Button>
      <div
        className={cn(
          "absolute top-full right-0 z-100 mt-2 flex w-80 flex-col gap-3 border border-border bg-background p-4 shadow-deep transition-opacity",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        role="dialog"
        aria-label="Propriétés"
      >
        {controls.map((ctrl) => (
          <ControlInput
            key={ctrl.key}
            control={ctrl}
            value={values[ctrl.key]}
            onChange={(v) => onChange(ctrl.key, v)}
          />
        ))}
      </div>
    </div>
  );
}

function ControlInput({
  control,
  value,
  onChange,
}: {
  control: PreviewControl;
  value: ControlValue | undefined;
  onChange: (v: ControlValue) => void;
}) {
  const inputBase =
    "w-28 rounded-md border border-border bg-background px-2 py-1 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

  const Row = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center justify-between gap-3">
      <span className="shrink-0 text-xs text-secondary-foreground">
        {control.label}
      </span>
      {children}
    </div>
  );

  if (control.type === "swatch") {
    return (
      <Row>
        <div className="flex items-center gap-2">
          {control.options.map((o) => {
            const active = String(value ?? "") === o.value;
            return (
              <button
                key={o.value}
                type="button"
                onClick={() => onChange(o.value)}
                title={o.label}
                aria-label={o.label}
                aria-pressed={active}
                className={cn(
                  "size-6 cursor-pointer rounded-full border border-border transition-shadow",
                  active &&
                    "ring-2 ring-foreground ring-offset-2 ring-offset-background",
                  o.color,
                )}
              />
            );
          })}
        </div>
      </Row>
    );
  }

  if (control.type === "select") {
    return (
      <Row>
        <select
          value={String(value ?? "")}
          onChange={(e) => onChange(e.target.value)}
          className={inputBase}
        >
          {control.options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </Row>
    );
  }

  if (control.type === "number") {
    return (
      <Row>
        <input
          type="number"
          value={Number(value ?? 0)}
          min={control.min}
          max={control.max}
          onChange={(e) => onChange(Number(e.target.value))}
          className={inputBase}
        />
      </Row>
    );
  }

  return (
    <Row>
      <input
        type="checkbox"
        checked={Boolean(value)}
        onChange={(e) => onChange(e.target.checked)}
      />
    </Row>
  );
}
