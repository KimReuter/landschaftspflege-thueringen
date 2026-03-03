"use client";

import { useEffect, useState } from "react";
import { H1, P, Small } from "@/components/ui/Type";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <section className="relative pt-24 pb-16 px-6 md:px-10 border-b border-border overflow-hidden">
      <div className="absolute left-6 md:left-10 top-0 bottom-0 w-px bg-border" />

      <span
        className="pointer-events-none absolute right-[-1vw] top-1/2 -translate-y-1/2 font-[family-name:var(--font-serif-display)] select-none leading-none text-white/[0.025]"
        style={{ fontSize: "22vw" }}
        aria-hidden
      >
        Hi.
      </span>

      <div className="mx-auto max-w-6xl pl-6">
        <div
          className="transition-all duration-700"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(24px)",
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-brand-accent" />
            <Small className="text-brand-accent uppercase tracking-[0.18em] font-semibold">
              Kontakt
            </Small>
          </div>

          <H1 className="mb-6 max-w-2xl">
            Sprechen wir.<br />
            <em className="not-italic text-brand-accent">
              Direkt. Kostenlos.
            </em>
          </H1>

          <P className="max-w-lg leading-relaxed">
            Kein Formular-Labyrinth. Kein Callcenter.
            Schreiben Sie uns oder rufen Sie an –
            Sie erreichen direkt den Inhaber.
          </P>
        </div>
      </div>
    </section>
  );
}