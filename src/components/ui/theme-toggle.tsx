"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Theme = "light" | "dark";
const STORAGE_KEY = "exuma-theme";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Must match the inline detection script in src/app/layout.tsx: light is the
    // default and the OS preference is not followed, so dark applies only when
    // the visitor has explicitly chosen it. Diverging here would let hydration
    // re-apply dark on any page where this toggle is mounted.
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const initial: Theme = stored === "dark" ? "dark" : "light";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <Button variant="outline" size="sm" onClick={toggle}>
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </Button>
  );
}
