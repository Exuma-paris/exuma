import type { Metadata } from "next";
import Image from "next/image";
import { collaborateurs } from "@/lib/content/registry";

export const metadata: Metadata = {
  title: "Équipe — vérification des portraits",
  description: "Page interne de vérification des portraits Exuma.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function EquipePage() {
  const team = Object.values(collaborateurs).sort((a, b) =>
    a.name.localeCompare(b.name, "fr"),
  );

  return (
    <main className="min-h-screen bg-background-subtle px-6 py-12 md:px-10">
      <div className="mx-auto max-w-layout">
        <header className="mb-10 flex flex-col gap-2">
          <p className="text-eyebrow text-primary">Vérification interne</p>
          <h1 className="text-h1">Équipe Exuma</h1>
          <p className="text-secondary-foreground">
            {team.length} membres. Pour chacun : portrait <code className="font-mono text-xs">chair</code> (250×300) et zoom visage <code className="font-mono text-xs">profile</code> (300×300).
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.slug}
              className="flex flex-col gap-4 rounded-xl border border-border bg-background p-5"
            >
              <div className="flex items-start gap-4">
                <div className="relative h-45 w-37.5 shrink-0 overflow-hidden bg-muted">
                  <Image
                    src={member.image.src}
                    alt={member.image.alt}
                    fill
                    sizes="150px"
                    className="object-cover"
                  />
                </div>

                {member.profileImage ? (
                  <div className="relative size-37.5 shrink-0 overflow-hidden rounded-full bg-muted">
                    <Image
                      src={member.profileImage.src}
                      alt={member.profileImage.alt}
                      fill
                      sizes="150px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex size-37.5 shrink-0 items-center justify-center rounded-full border border-dashed border-border text-[12px] text-muted-foreground">
                    no profile
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <h2 className="text-h4 text-foreground">{member.name}</h2>
                {member.role ? (
                  <p className="text-[14px] text-secondary-foreground">
                    {member.role}
                  </p>
                ) : null}
                <p className="font-mono text-[11px] text-muted-foreground">
                  slug · {member.slug}
                </p>
                <p className="font-mono text-[11px] text-muted-foreground">
                  chair · {member.image.src.replace("/collaborateurs/", "")}
                </p>
                {member.profileImage ? (
                  <p className="font-mono text-[11px] text-muted-foreground">
                    profile ·{" "}
                    {member.profileImage.src.replace("/collaborateurs/", "")}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
