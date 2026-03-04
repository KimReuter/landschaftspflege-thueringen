"use client"

import { useReveal } from "@/hooks/useReveal";
import { WERTE } from "@/content/about/werte";
import { H3, P } from "@/components/ui/Type";

export default function WertCard({
  wert,
  delay,
}: {
  wert: (typeof WERTE)[number];
  delay: number;
}) {
  const { ref, visible } = useReveal(0.1);

  return (
    <div
      ref={ref}
      className="group relative bg-surface-2 p-10 md:p-12 flex flex-col overflow-hidden transition-colors duration-300 hover:bg-[#1f1c17]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Akzentlinie oben */}
      <div className="absolute top-0 left-0 h-[2px] w-0 bg-brand-accent transition-all duration-500 group-hover:w-full" />

      <div className="transition-transform duration-300 group-hover:scale-[1.03] origin-top-left">
        <div
          className="font-[family-name:var(--font-serif-display)] text-[3.5rem] leading-none text-brand-accent/15 mb-6 select-none transition-colors duration-300 group-hover:text-brand-accent/30"
          aria-hidden
        >
          {wert.nummer}
        </div>
        <H3 className="mb-4 text-[1.2rem] transition-colors duration-300 group-hover:text-brand-accent">{wert.titel}</H3>
        <P className="text-sm leading-relaxed flex-1">{wert.text}</P>
        <div className="mt-8 h-px w-8 bg-brand-accent/40 transition-all duration-300 group-hover:w-16 group-hover:bg-brand-accent" />
      </div>
    </div>
  );
}