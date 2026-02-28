"use client";
import { useEffect, useRef, useState } from "react";
import { H2, P, Small } from "@/components/ui/Type";
import { Button } from "@/components/ui/Button";

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, visible };
}

export function CtaBand() {
  const { ref, visible } = useReveal();

  return (
    <section className="bg-surface py-24 md:py-32 px-6 md:px-10 border-t border-border">
      <div
        ref={ref}
        className="mx-auto max-w-4xl text-center transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(20px)",
        }}
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-8 bg-brand-accent" />
          <Small className="text-brand-accent uppercase tracking-[0.18em] text-[0.7rem] font-semibold">
            Projekt starten
          </Small>
          <span className="h-px w-8 bg-brand-accent" />
        </div>

        <H2 className="mb-5">Bereit für Ihr Projekt?</H2>

        <P className="max-w-md mx-auto mb-10">
          Kostenlose Beratung, schnelle Rückmeldung – direkt vom Betriebsinhaber.
        </P>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Button rendert bei href automatisch ein Link */}
          <Button variant="primary" href="/kontakt">
            Projekt anfragen
          </Button>

          <a
            href="tel:+4915234002234"
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            <span className="text-brand-accent">↗</span>
            +49 152 3400 2234
          </a>

          <a
            href="https://wa.me/4915234002234"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            <span className="text-brand-accent">↗</span>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}