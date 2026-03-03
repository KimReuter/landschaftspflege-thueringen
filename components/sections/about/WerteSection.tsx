"use client"

import { useReveal } from "@/hooks/useReveal";
import { Small, H2 } from "@/components/ui/Type";
import WertCard from "./WerteCard";
import { WERTE } from "@/content/about/werte";

export default function WerteSection() {
  const { ref, visible } = useReveal();

  return (
    <section className="border-t border-border px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div
          ref={ref}
          className="mb-16 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(20px)",
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-brand-accent" />
            <Small className="text-brand-accent uppercase tracking-[0.18em] text-[0.7rem] font-semibold">
              Wofür wir stehen
            </Small>
          </div>
          <H2 className="max-w-lg">
            Drei Grundsätze.<br />
            Keine Ausnahmen.
          </H2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {WERTE.map((w, i) => (
            <WertCard key={w.nummer} wert={w} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}