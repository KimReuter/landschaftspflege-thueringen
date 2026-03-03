"use client"

import { Small } from "@/components/ui/Type";
import { useReveal } from "@/hooks/useReveal";

export default function QuoteSection() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section className="border-t border-border px-6 md:px-10 py-24 md:py-36">
      <div className="mx-auto max-w-5xl">
        <div
          ref={ref}
          className="transition-all duration-1000"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(32px)",
          }}
        >
          <div
            className="font-[family-name:var(--font-serif-display)] text-[8rem] leading-none text-brand-accent/20 mb-[-2rem] select-none"
            aria-hidden
          >
            "
          </div>

          <blockquote className="font-[family-name:var(--font-serif-display)] text-[clamp(1.6rem,3.5vw,3rem)] leading-[1.2] tracking-[-0.02em] text-foreground max-w-4xl">
            Wir sind kein Konzern. Wir sind Menschen, die morgens aufstehen und ihre Arbeit ernst nehmen.
            Das sieht man am Ergebnis.
          </blockquote>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-8 bg-brand-accent" />
            <Small className="text-brand-accent text-[0.7rem] uppercase tracking-[0.18em] font-semibold">
              Franz Eberitsch, Inhaber
            </Small>
          </div>
        </div>
      </div>
    </section>
  );
}