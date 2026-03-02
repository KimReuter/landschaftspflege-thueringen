"use client";

import { H2, H3, P, Small } from "@/components/ui/Type";
import { useReveal } from "@/hooks/useReveal";
import type { LeistungItem } from "@/content/services";

function LeistungCard({ item, delay }: { item: LeistungItem; delay: number }) {
  const card = useReveal<HTMLDivElement>(0.1);

  return (
    <div
      ref={card.ref}
      className="bg-surface-2 p-8 md:p-10"
      style={{
        opacity: card.visible ? 1 : 0,
        transform: card.visible ? "none" : "translateY(20px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      <div className="flex items-start gap-6">
        <span className="text-[0.6rem] font-semibold tracking-[0.2em] text-brand-accent/60 uppercase mt-1 flex-shrink-0 w-6">
          {item.nummer}
        </span>

        <div>
          <H3 className="mb-3">{item.titel}</H3>
          <P className="text-sm leading-relaxed">{item.text}</P>
        </div>
      </div>
    </div>
  );
}

export function ServiceLeistungen({ leistungen }: { leistungen: LeistungItem[] }) {
  const header = useReveal<HTMLDivElement>();

  return (
    <section className="py-24 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div
          ref={header.ref}
          className="mb-16 transition-all duration-700"
          style={{
            opacity: header.visible ? 1 : 0,
            transform: header.visible ? "none" : "translateY(20px)",
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-brand-accent" />
            <Small className="text-brand-accent uppercase tracking-[0.18em] text-[0.7rem] font-semibold">
              Was wir machen
            </Small>
          </div>

          <H2 className="max-w-lg">
            Unsere Leistungen
            <br />
            im Detail.
          </H2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {leistungen.map((l, i) => (
            <LeistungCard key={l.nummer} item={l} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}