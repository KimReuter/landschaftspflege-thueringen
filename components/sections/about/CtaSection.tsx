"use client"

import { useReveal } from "@/hooks/useReveal";
import { Small, P, H2 } from "@/components/ui/Type";
import { Button } from "@/components/ui/Button";

export default function CtaSection() {
  const { ref, visible } = useReveal();

  return (
    <section className="border-t border-border px-6 md:px-10 py-24 md:py-32">
      <div
        ref={ref}
        className="mx-auto max-w-4xl transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(20px)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-brand-accent" />
              <Small className="text-brand-accent uppercase tracking-[0.18em] text-[0.7rem] font-semibold">
                Lernen Sie uns kennen
              </Small>
            </div>
            <H2 className="mb-5">
              Überzeugen Sie sich selbst.<br />
              <em className="not-italic text-brand-accent">Kostenlos.</em>
            </H2>
            <P className="max-w-md leading-relaxed">
              Kein Formular-Chaos. Kein Callcenter.
              Sie rufen an oder schreiben – ich melde mich.
              Persönlich. Direkt. Ohne Umwege.
            </P>
          </div>

          <div className="flex flex-col gap-3 min-w-[200px]">
            {/* IMPORTANT: Dein Button unterstützt kein `as` – nur `href`. */}
            <Button variant="primary" href="/contact">
              Gespräch starten
            </Button>

            <a
              href="tel:+4915234002234"
              className="inline-flex items-center justify-center gap-2 text-sm text-white/60 hover:text-white transition-colors py-1"
            >
              <span className="text-brand-accent">↗</span>+49 152 3400 2234
            </a>

            <a
              href="https://wa.me/4915234002234"
              className="inline-flex items-center justify-center gap-2 text-sm text-white/60 hover:text-white transition-colors py-1"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-brand-accent">↗</span>WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}