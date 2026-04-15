"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Agentation = dynamic(
  () => import("agentation").then((m) => m.Agentation),
  { ssr: false, loading: () => null },
);

export function AgentationToolbar() {
  const [mounted, setMounted] = useState(false);
  const [inIframe, setInIframe] = useState(true);

  useEffect(() => {
    setInIframe(window !== window.parent);
    setMounted(true);
  }, []);

  if (process.env.NODE_ENV !== "development") return null;
  if (!mounted || inIframe) return null;
  return <Agentation />;
}
