import type { Metadata, Viewport } from "next";
import { Geist_Mono, Hedvig_Letters_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { AgentationToolbar } from "@/components/dev/agentation-toolbar";
import { Footer } from "@/components/sections/footer";
import { ConditionalFooter } from "@/components/sections/conditional-footer";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const hedvigLettersSerif = Hedvig_Letters_Serif({
  variable: "--font-hedvig-letters-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://exuma.example.com";

const siteDescription =
  "Exuma est une conciergerie de voyage. Un travel designer dédié conçoit, organise et veille sur chaque séjour, partout dans le monde.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Exuma | Conciergerie de Voyage Sur-Mesure",
    template: "%s | Exuma",
  },
  description: siteDescription,
  applicationName: "Exuma",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Exuma",
    url: "/",
    title: "Exuma | Conciergerie de Voyage Sur-Mesure",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Exuma | Conciergerie de Voyage Sur-Mesure",
    description: siteDescription,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcf8f3" },
    { media: "(prefers-color-scheme: dark)", color: "#252525" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${instrumentSans.variable} ${geistMono.variable} ${hedvigLettersSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Inline theme-detection — runs before first paint to avoid FOUC.
            Must be a raw <script>, not next/script (which forces deferred
            injection in app router). React doesn't re-execute this on
            hydration; it runs once when the browser parses the SSR HTML.

            Light is the default, and the OS `prefers-color-scheme` is
            deliberately NOT followed. The site's photography is graded for the
            warm light palette, and <ThemeToggle> is not mounted on the public
            pages — so a visitor whose machine is in dark mode used to land on
            the dark theme with no way back. Dark now applies only when the
            visitor has explicitly chosen it. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('exuma-theme')==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <ConditionalFooter>
          <Footer />
        </ConditionalFooter>
        <AgentationToolbar />
      </body>
    </html>
  );
}
