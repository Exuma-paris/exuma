import type { Section } from "@/lib/destination/types";

/**
 * Retire les témoignages qui ne sont pas marqués `verified: true`, et le bloc
 * entier quand il n'en reste aucun. Tant qu'Exuma n'a pas fourni de
 * témoignages réels et autorisés, rien ne s'affiche : un avis inventé publié
 * est une pratique commerciale trompeuse.
 */
export function withVerifiedTestimonials<T extends Section>(sections: T[]): T[] {
  return sections.flatMap((section) => {
    if (section.type !== "testimonials") return [section];
    const testimonials = section.testimonials.filter((t) => t.verified);
    if (testimonials.length === 0) return [];
    return [{ ...section, testimonials } as T];
  });
}
