import type { Metadata } from "next";
import { SectionsWorkbench } from "@/components/dev/sections-workbench";

export const metadata: Metadata = {
  title: "Sections",
  description: "Preview of all reusable sections used across the Exuma site.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function SectionsPreviewPage() {
  return <SectionsWorkbench />;
}
