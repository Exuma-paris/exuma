"use client";

import { useEffect, useRef, useState } from "react";
import { Monitor, Tablet, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ControlsPopover,
  type ControlValue,
} from "@/components/dev/controls-popover";
import { definitions } from "@/components/dev/previews/definitions";

type Device = "desktop" | "tablet" | "mobile";

const devices: {
  id: Device;
  label: string;
  Icon: typeof Monitor;
  width: string;
}[] = [
  { id: "desktop", label: "Desktop", Icon: Monitor, width: "100%" },
  { id: "tablet", label: "Tablet", Icon: Tablet, width: "768px" },
  { id: "mobile", label: "Mobile", Icon: Smartphone, width: "393px" },
];

const MSG_READY = "exuma-preview-ready";
const MSG_VALUES = "exuma-preview-values";

export function SectionsWorkbench() {
  const [activeId, setActiveId] = useState(definitions[0].id);
  const [device, setDevice] = useState<Device>("desktop");
  const [valuesMap, setValuesMap] = useState<
    Record<string, Record<string, ControlValue>>
  >(() =>
    Object.fromEntries(definitions.map((d) => [d.id, { ...d.defaultValues }])),
  );
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const activeDef =
    definitions.find((d) => d.id === activeId) ?? definitions[0];
  const activeValues = valuesMap[activeId];
  const currentDevice = devices.find((d) => d.id === device) ?? devices[0];

  const postValues = () => {
    iframeRef.current?.contentWindow?.postMessage(
      { type: MSG_VALUES, id: activeId, values: activeValues },
      "*",
    );
  };

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.data?.type === MSG_READY && e.data.id === activeId) {
        postValues();
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId, activeValues]);

  useEffect(() => {
    postValues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeValues]);

  const handleChange = (key: string, value: ControlValue) => {
    setValuesMap((prev) => ({
      ...prev,
      [activeId]: { ...prev[activeId], [key]: value },
    }));
  };

  return (
    <div className="flex min-h-screen w-full">
      <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col gap-2 border-r border-border bg-background-subtle p-6">
        <p className="text-eyebrow mb-2 text-muted-foreground">Sections</p>
        <nav aria-label="Sections" className="flex flex-col gap-1">
          {definitions.map((entry) => {
            const isActive = entry.id === activeId;
            return (
              <button
                key={entry.id}
                type="button"
                onClick={() => setActiveId(entry.id)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex cursor-pointer items-center rounded-md px-3 py-2 text-left text-[13px] transition-colors",
                  isActive
                    ? "bg-foreground/5 font-medium text-foreground"
                    : "text-secondary-foreground hover:bg-foreground/2 hover:text-foreground",
                )}
              >
                {entry.label}
              </button>
            );
          })}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="sticky top-0 z-50 flex items-center justify-between gap-4 border-b border-border bg-background-subtle/90 px-6 py-4 backdrop-blur">
          <h2 className="text-h4">{activeDef.label}</h2>
          <div className="flex items-center gap-3">
            <ControlsPopover
              controls={activeDef.controls}
              values={activeValues}
              onChange={handleChange}
            />
            <div className="flex items-center gap-1 rounded-full border border-border bg-background p-1">
              {devices.map((d) => {
                const isActive = d.id === device;
                return (
                  <Button
                    key={d.id}
                    variant="ghost"
                    size="sm"
                    onClick={() => setDevice(d.id)}
                    aria-label={d.label}
                    aria-pressed={isActive}
                    className={cn(
                      "aspect-square px-0",
                      isActive && "bg-foreground/5 text-foreground",
                    )}
                  >
                    <d.Icon className="size-4" />
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <iframe
            ref={iframeRef}
            key={activeId}
            src={`/design-system/sections/preview/${activeId}`}
            title={activeDef.label}
            className="mx-auto block h-[calc(100vh-9rem)] w-full border border-border bg-background transition-[max-width] duration-300 ease-out"
            style={{ maxWidth: currentDevice.width }}
          />
        </div>
      </div>
    </div>
  );
}
