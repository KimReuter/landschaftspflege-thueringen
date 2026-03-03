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
      className="bg-surface-2 p-10 md:p-12 flex flex-col transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        className="font-[family-name:var(--font-serif-display)] text-[3.5rem] leading-none text-brand-accent/15 mb-6 select-none"
        aria-hidden
      >
        {wert.nummer}
      </div>
      <H3 className="mb-4 text-[1.2rem]">{wert.titel}</H3>
      <P className="text-sm leading-relaxed flex-1">{wert.text}</P>
      <div className="mt-8 h-px w-8 bg-brand-accent/40" />
    </div>
  );
}