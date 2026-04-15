import type { Metadata } from "next";
import { Geist_Mono, Hedvig_Letters_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { AgentationToolbar } from "@/components/dev/agentation-toolbar";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hedvigLettersSerif = Hedvig_Letters_Serif({
  variable: "--font-hedvig-letters-serif",
  subsets: ["latin"],
  weight: "400",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://exuma.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Exuma",
    template: "%s | Exuma",
  },
  description: "Exuma — official website.",
  applicationName: "Exuma",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Exuma",
    url: "/",
    title: "Exuma",
    description: "Exuma — official website.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exuma",
    description: "Exuma — official website.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${geistMono.variable} ${hedvigLettersSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('exuma-theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <AgentationToolbar />
      </body>
    </html>
  );
}
