"use client"

import { useReveal } from "@/hooks/useReveal";
import { Small, H2 } from "@/components/ui/Type";
import { TIMELINE } from "@/content/about/timeline";
import TimelineItem from "./TimelineItem";

export default function TimelineSection() {
  const { ref, visible } = useReveal();

  return (
    <section className="border-t border-border px-6 md:px-10 py-24 md:py-32 bg-surface-2">
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
              Geschichte
            </Small>
          </div>
          <H2 className="max-w-lg">
            15 Jahre.<br />
            Schritt für Schritt.
          </H2>
        </div>

        <div className="relative">
          <div className="absolute left-[5.5rem] md:left-[7rem] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-0">
            {TIMELINE.map((item, i) => (
              <TimelineItem key={item.year} item={item} delay={i * 80} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}