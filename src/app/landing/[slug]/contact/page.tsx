"use client";

import { notFound, useParams } from "next/navigation";
import { ContactFlow } from "@/components/contact/contact-flow";
import { EXUMA_PHONE } from "@/lib/exuma";
import { getDestinationSpecialist } from "@/lib/content/queries";
import { destinations } from "@/lib/content/registry";

// TODO: move testimonial onto destination data when we have real per-destination
// quotes. For now uses the destination's first hero image as a placeholder visual.
function buildTestimonial(slug: string, destinationName: string) {
  return {
    image: {
      src: `/destination/${slug}/hero-2.png`,
      alt: `Voyage en ${destinationName}`,
    },
    rating: 5,
    quote: "« Le meilleur voyage de ma vie »",
    attribution:
      "Exuma nous a organisé un voyage incroyable, c'est complètement fou.",
  };
}

export default function ContactFlowPage() {
  const { slug } = useParams<{ slug: string }>();
  const destination = destinations[slug];

  // 404 if the destination doesn't exist or doesn't have a contact funnel.
  if (!destination?.contactQuestions?.length) notFound();

  const specialist = getDestinationSpecialist(slug);
  const specialistAvatar = specialist?.profileImage ?? specialist?.image;

  return (
    <ContactFlow
      questions={destination.contactQuestions}
      contactCta={{
        label: "Contactez-nous",
        phone: EXUMA_PHONE,
        avatar: specialistAvatar,
        statusOnline: true,
      }}
      aside={buildTestimonial(slug, destination.name)}
      submitRedirect={`/landing/${slug}/merci`}
    />
  );
}
