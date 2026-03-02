"use client";

import { H2, P, Small } from "@/components/ui/Type";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/hooks/useReveal";

export function ServiceCta() {
  const cta = useReveal<HTMLDivElement>();

  return (
    <section className="border-t border-border py-24 md:py-28 px-6 md:px-10">
      <div
        ref={cta.ref}
        className="mx-auto max-w-4xl transition-all duration-700"
        style={{
          opacity: cta.visible ? 1 : 0,
          transform: cta.visible ? "none" : "translateY(20px)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-brand-accent" />
              <Small className="text-brand-accent uppercase tracking-[0.18em] text-[0.7rem] font-semibold">
                Projekt starten
              </Small>
            </div>

            <H2 className="mb-4">Bereit für Ihr Projekt?</H2>
            <P className="max-w-md">
              Kostenlose Beratung, direkter Kontakt zum Inhaber. Kein Call-Center. Schnelle Rückmeldung.
            </P>
          </div>

          <div className="flex flex-col gap-3">
            <Button variant="primary" href="/kontakt">
              Projekt anfragen
            </Button>

            <a
              href="tel:+4915234002234"
              className="inline-flex items-center justify-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <span className="text-brand-accent">↗</span>+49 152 3400 2234
            </a>

            <a
              href="https://wa.me/4915234002234"
              className="inline-flex items-center justify-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <span className="text-brand-accent">↗</span>WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}