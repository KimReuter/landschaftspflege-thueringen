"use client";

import { Small } from "@/components/ui/Type";
import { useReveal } from "@/hooks/useReveal";
import { GOOGLE_MAPS_EMBED_URL } from "@/content/contact/kontakt";

export default function MapSection() {
  const { ref, visible } = useReveal(0.05);

  return (
    <section
      ref={ref}
      className="border-t border-border transition-all duration-700"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div className="px-6 md:px-10 py-5 border-b border-border bg-surface-2 flex items-center gap-6">
        <span className="h-px w-8 bg-brand-accent" />
        <Small className="text-brand-accent uppercase tracking-[0.18em] font-semibold">
          Standort
        </Small>
      </div>

      <div className="relative h-[480px] w-full">
        <iframe
          src={GOOGLE_MAPS_EMBED_URL}
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter:
              "grayscale(100%) invert(92%) contrast(83%)",
          }}
          loading="lazy"
          title="Standort"
        />
      </div>
    </section>
  );
}