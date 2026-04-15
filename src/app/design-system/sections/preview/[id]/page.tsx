"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { definitions } from "@/components/dev/previews/definitions";
import type { ControlValue } from "@/components/dev/controls-popover";

const MSG_READY = "exuma-preview-ready";
const MSG_VALUES = "exuma-preview-values";

export default function PreviewFrame() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const def = definitions.find((d) => d.id === id);
  const [values, setValues] = useState<Record<string, ControlValue>>(
    def?.defaultValues ?? {},
  );

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.data?.type === MSG_VALUES && e.data.id === id) {
        setValues(e.data.values);
      }
    };
    window.addEventListener("message", onMessage);
    window.parent?.postMessage({ type: MSG_READY, id }, "*");
    return () => window.removeEventListener("message", onMessage);
  }, [id]);

  if (!def) {
    return <div className="p-6 text-secondary-foreground">Preview not found: {id}</div>;
  }

  return <>{def.render(values)}</>;
}
