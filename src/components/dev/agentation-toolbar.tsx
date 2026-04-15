"use client";

import { useEffect, useState } from "react";
import { Agentation } from "agentation";

export function AgentationToolbar() {
  const [inIframe, setInIframe] = useState(true);

  useEffect(() => {
    setInIframe(window !== window.parent);
  }, []);

  if (process.env.NODE_ENV !== "development") return null;
  if (inIframe) return null;
  return <Agentation />;
}
