"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const HIDE_PREFIXES = ["/design-system", "/landing"];

export function ConditionalFooter({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (HIDE_PREFIXES.some((prefix) => pathname?.startsWith(prefix))) return null;
  return <>{children}</>;
}
