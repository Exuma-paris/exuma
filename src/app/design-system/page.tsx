import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Stars01 as Sparkles } from "@untitledui/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { IconPillButton } from "@/components/ui/icon-pill-button";
import { SelectTileDemo } from "@/components/dev/select-tile-demo";
import { StepProgress } from "@/components/ui/step-progress";
import { Indicator, type IndicatorVariant } from "@/components/ui/indicator";
import { BlockSelectDemo } from "@/components/dev/block-select-demo";
import { PhoneInputDemo } from "@/components/dev/phone-input-demo";
import { EXUMA_PHONE } from "@/lib/exuma";
import { SimpleHeader } from "@/components/sections/simple-header";
import { cn } from "@/lib/utils";
import { TextBlock } from "@/components/blocks/text-block";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Logo } from "@/components/ui/logo";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Design System",
  description: "Internal design system reference for the Exuma website.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

const colorTokens = [
  { name: "background", fg: "foreground" },
  { name: "background-subtle", fg: "foreground" },
  { name: "background-soft", fg: "foreground" },
  { name: "foreground", fg: "background" },
  { name: "card", fg: "card-foreground" },
  { name: "card-foreground", fg: "card" },
  { name: "popover", fg: "popover-foreground" },
  { name: "popover-foreground", fg: "popover" },
  { name: "primary", fg: "primary-foreground" },
  { name: "primary-foreground", fg: "primary" },
  { name: "secondary", fg: "secondary-foreground" },
  { name: "secondary-foreground", fg: "secondary" },
  { name: "muted", fg: "muted-foreground" },
  { name: "muted-foreground", fg: "muted" },
  { name: "accent", fg: "accent-foreground" },
  { name: "accent-foreground", fg: "accent" },
  { name: "destructive", fg: "background" },
  { name: "border", fg: "foreground" },
  { name: "input", fg: "foreground" },
  { name: "ring", fg: "background" },
  { name: "chart-1", fg: "foreground" },
  { name: "chart-2", fg: "foreground" },
  { name: "chart-3", fg: "background" },
  { name: "chart-4", fg: "background" },
  { name: "chart-5", fg: "background" },
] as const;

function ColorPalette({
  mode,
  className,
}: {
  mode: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={`${mode === "dark" ? "dark " : ""}rounded-lg border border-border bg-background p-4 ${className ?? ""}`}
    >
      <p className="text-eyebrow mb-3 text-muted-foreground">{mode}</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {colorTokens.map((token) => (
          <div
            key={token.name}
            className="flex h-16 flex-col justify-between rounded-md border border-border p-2 text-xs"
            style={{
              background: `var(--${token.name})`,
              color: `var(--${token.fg})`,
            }}
          >
            <span className="font-medium">{token.name}</span>
            <span className="font-mono opacity-70">--{token.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <header className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {description ? (
          <p className="text-sm text-muted-foreground">{description}</p>
        ) : null}
      </header>
      <Card>
        <CardContent className="space-y-6 pt-6">{children}</CardContent>
      </Card>
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="mx-auto w-full max-w-4xl space-y-12 p-8">
      <header className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="text-eyebrow text-muted-foreground">
            Internal reference
          </p>
          <h1 className="text-h1">Exuma Design System</h1>
          <p className="text-muted-foreground">
            Base building blocks used across the Exuma website. This page is
            not indexed by search engines.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/design-system/sections"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            View sections
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <Separator />

      <Section
        title="Logo"
        description="Uses currentColor for solids and --background as a 70% tint overlay so it adapts to light and dark."
      >
        <div className="flex flex-wrap items-center gap-8">
          <Logo />
          <Logo className="text-primary" />
          <div className="dark rounded-md bg-background p-4 text-foreground">
            <Logo />
          </div>
        </div>
      </Section>

      <Section
        title="Colors"
        description="Theme tokens — light and dark variants side by side."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <ColorPalette mode="light" />
          <ColorPalette mode="dark" />
        </div>
      </Section>

      <Section
        title="Eyebrow"
        description="Small uppercase label used above titles and in navigation."
      >
        <p className="text-eyebrow">Introducing Exuma</p>
        <p className="font-mono text-xs text-muted-foreground">
          Instrument Sans / 11 / lh 20 / tr 1.5px / uppercase
        </p>
      </Section>

      <Section
        title="Headings"
        description="Fluid type scale — values interpolate between 375px and 1280px viewports."
      >
        {(
          [
            {
              tag: "h1" as const,
              cls: "text-h1",
              spec: "36 → 44 / lh 32 → 48 / tr -0.5 → -2",
            },
            {
              tag: "h2" as const,
              cls: "text-h2",
              spec: "28 → 32 / lh 32 → 40 / tr -0.5 → -1",
            },
            {
              tag: "h3" as const,
              cls: "text-h3",
              spec: "20 → 24 / lh 24 → 28 / tr -0.5",
            },
            {
              tag: "h4" as const,
              cls: "text-h4",
              spec: "20 / lh 24 / tr -0.5",
            },
            {
              tag: "h5" as const,
              cls: "text-h5",
              spec: "16 / lh 20 / tr -0.25",
            },
          ] as const
        ).map(({ tag: Tag, cls, spec }) => (
          <div key={cls} className="space-y-1">
            <Tag className={cls}>
              {Tag.toUpperCase()} — The quick brown fox
            </Tag>
            <p className="font-mono text-xs text-muted-foreground">{spec}</p>
          </div>
        ))}
      </Section>

      <Section
        title="Paragraphs"
        description="Body copy, lead text, small text and muted variants."
      >
        <p className="text-lg leading-8">
          Lead paragraph — Exuma is a placeholder for the client&apos;s brand
          story. This text demonstrates the lead size used on landing sections
          and hero areas of the site.
        </p>
        <p className="leading-7">
          Default paragraph — Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-sm text-muted-foreground">
          Small muted — Used for metadata, captions and helper copy across
          forms and cards.
        </p>
      </Section>

      <Section
        title="Buttons"
        description="Shadcn button variants and sizes."
      >
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
      </Section>

      <Section
        title="Icon pill button"
        description="Pill CTA with a circular icon container on the right. Renders as <Link> when href is provided, otherwise as <button>. Default icon is Lucide Plus; pass any icon via the icon prop."
      >
        <div className="rounded-md bg-background-soft p-8">
          <div className="flex flex-wrap items-center gap-4">
            <IconPillButton href="/destinations/polynesie">
              Découvrir la Polynésie
            </IconPillButton>
            <IconPillButton href="/destinations/marrakech" icon={<ArrowRight />}>
              Voir Marrakech
            </IconPillButton>
            <IconPillButton href="/votre-projet" icon={<Sparkles />}>
              Créer votre voyage
            </IconPillButton>
          </div>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          py-1.5 pl-4 pr-1.5 · gap-3 · bubble size-7 · icon size-4 stroke-1.5 · shadow-deep · rounded-full · cursor-pointer
        </p>
      </Section>

      <Section
        title="Simple header"
        description="Reduced header used on landing pages. Logo on the left, single 'Contactez-nous' pill on the right with optional travel-designer avatar and online-status dot. No menu or search; the landing page funnels everything through the floating CTA and contact pill."
      >
        <div className="overflow-hidden rounded-md border border-border">
          <SimpleHeader
            contactCta={{
              label: "Contactez-nous",
              phone: EXUMA_PHONE,
              avatar: {
                src: "/destination/polynesie/hero-1.png",
                alt: "Stéphane, votre travel designer",
              },
              statusOnline: true,
            }}
          />
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          py-4 px-10 · bg-background-subtle · border-b border-border · pill: h-10 · pl-1 pr-3 · avatar size-8 · status dot size-2 bg-[#33b06f] · contact pill is a `tel:` anchor — label crossfades to the phone number on hover (grid overlay = no layout shift)
        </p>
      </Section>

      <Section
        title="Step progress"
        description="Segmented horizontal progress indicator. Used at the top of multi-step flows (questionnaire, booking funnel). The active segment is 32px wide, the inactive segments are 16px wide; pass step (1-based) and total."
      >
        <div className="flex flex-col gap-6 rounded-md bg-background-soft p-8">
          <StepProgress step={1} total={9} />
          <StepProgress step={3} total={9} />
          <StepProgress step={9} total={9} />
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          h-0.5 · gap-1 · active w-8 bg-foreground · inactive w-4 bg-border · transition-all
        </p>
      </Section>

      <Section
        title="Select tile"
        description="Tile-shaped multi-select toggle. Renders as a button with a label and a checkbox indicator. Selected state: bold dark border + soft warm shadow + filled checkmark. Click any tile to toggle (interactive demo)."
      >
        <div className="rounded-md bg-background-soft p-8">
          <SelectTileDemo />
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          p-4 · rounded-xl · checkbox size-5 · outline-based frame (no layout shift) · unselected: 1px var(--border) · selected: 2px var(--foreground) + warm shadow
        </p>
      </Section>

      <Section
        title="Block select"
        description="Vertical card-shaped option tile. Stacks a 15px title over a 12px subtitle, centred. Optional Indicator badge sits in the top-right corner. Selected state uses a 2px foreground outline + warm shadow (same outline-trick as Select tile — no layout shift between states). Designed for compact grid pickers like a month-of-travel selector. Click any tile to select (interactive demo)."
      >
        <div className="rounded-md bg-background-soft p-8">
          <BlockSelectDemo />
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          w-30 (120px) · rounded-xl · py-4 · title 15px · subtitle 12px text-secondary-foreground · unselected: 1px var(--background-soft) · selected: 2px var(--foreground) + warm shadow · indicator: absolute top-1 right-1 (selected) / top-[5px] right-[5px] (default)
        </p>
      </Section>

      <Section
        title="Indicator"
        description="Compact icon badge used inside calendar tiles (and similar dense surfaces). Six variants: four mood faces (good, happy-max, neutral, sad) and two weather glyphs (sunny, rainy). Weather variants render inside a soft beige pill; mood faces render as a bare colored icon."
      >
        <div className="flex flex-wrap items-center gap-6 rounded-md bg-background p-8">
          {(
            [
              "happy-max",
              "good",
              "neutral",
              "sad",
              "sunny",
              "rainy",
            ] as IndicatorVariant[]
          ).map((variant) => (
            <div
              key={variant}
              className="flex flex-col items-center gap-2 text-xs text-muted-foreground"
            >
              <Indicator variant={variant} />
              <span className="font-mono">{variant}</span>
            </div>
          ))}
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          inline-flex · rounded-full · mood: size-4 lucide outline · weather: size-3 + bg-background-soft p-1 pill · colors: #33B06F good/happy-max · text-secondary-foreground neutral · #FF5864 sad · #F59E0C sunny · #3D8FE6 rainy
        </p>
      </Section>

      <Section
        title="Inputs"
        description="Packed text input — 56px tall with a floating label that shrinks to the top when the field is focused or filled. Outlined style only (the Plain bg-soft variant is intentionally not implemented yet). Border-thickness changes are done with `outline` (no layout shift between states). Helper text and error message slots sit below; error renders a red dot + message."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Input label="Nom complet" />
          <Input label="Email" type="email" defaultValue="jane@exuma.com" />
          <Input label="Téléphone" type="tel" helperText="Pour vous joindre rapidement." />
          <Input label="Champ requis" error="This field is required" />
          <Input label="Désactivé" disabled />
          <Input label="Avec valeur" defaultValue="Mon voyage de noces" />
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="ds-message">Message</Label>
            <Textarea id="ds-message" placeholder="Write something..." />
          </div>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          h-14 · rounded-xl · label centered (15px) when empty + unfocused → animates to top-2 (12px) when focused or filled · default outline 1px #eae5de · focus 2px var(--foreground) · error 2px #ff9ba2 · helper/error text 12px below
        </p>

        <div className="mt-6 flex flex-col gap-2">
          <p className="text-eyebrow text-muted-foreground">Leading slot · phone</p>
          <PhoneInputDemo />
          <p className="font-mono text-xs text-muted-foreground">
            Input now accepts a `leading?: ReactNode` slot — sits left of the text area with a right border separator. Used here with `PhoneCountrySelect` (flag + chevron + dropdown of countries with dial codes).
          </p>
        </div>
      </Section>

      <Section
        title="Text block"
        description="Eyebrow, heading, paragraph and CTA — 24px gap, left or centered."
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-md border border-border p-6">
            <TextBlock
              align="left"
              eyebrow="Align left"
              heading="A clear statement"
              paragraph="Supporting copy that explains the idea in one or two sentences."
              cta={<Button>Learn more</Button>}
            />
          </div>
          <div className="rounded-md border border-border p-6">
            <TextBlock
              align="center"
              eyebrow="Align center"
              heading="A clear statement"
              paragraph="Supporting copy that explains the idea in one or two sentences."
              cta={<Button>Learn more</Button>}
            />
          </div>
        </div>
      </Section>

      <Section
        title="Card"
        description="Container used to group related content."
      >
        <Card>
          <CardHeader>
            <CardTitle>Card title</CardTitle>
            <CardDescription>
              Supporting description for this card component.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Cards are the primary surface for grouping content blocks on the
              site.
            </p>
          </CardContent>
        </Card>
      </Section>
    </main>
  );
}
