"use client";

import { H2, P, Small } from "@/components/ui/Type";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/hooks/useReveal";

interface CtaBandProps {
  label?: string;
  headline?: React.ReactNode;
  subtext?: string;
  primaryLabel?: string;
}

export function CtaBand({
  label = "Projekt starten",
  headline = <>Überzeugen Sie sich selbst.<br /><em className="not-italic text-brand-accent">Kostenlos.</em></>,
  subtext = "Kein Formular-Chaos. Kein Callcenter. Sie rufen an oder schreiben – ich melde mich. Persönlich. Direkt. Ohne Umwege.",
  primaryLabel = "Gespräch starten",
}: CtaBandProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="bg-surface py-8 md:py-20 px-6 md:px-10">
      <div
        ref={ref}
        className="mx-auto max-w-6xl transition-all duration-700"
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
                {label}
              </Small>
            </div>
            <H2 className="mb-5">{headline}</H2>
            <P className="max-w-md leading-relaxed">{subtext}</P>
          </div>

          <div className="flex flex-col gap-3 min-w-[200px]">
            <Button variant="primary" href="/contact">
              {primaryLabel}
            </Button>
            <a
              href="tel:+4915234002234"
              className="inline-flex items-center justify-center gap-2 text-sm text-muted hover:text-foreground transition-colors py-1"
            >
              <span className="text-brand-accent">↗</span>+49 152 34002234
            </a>
            <a
              href="https://wa.me/4915234002234"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm text-muted hover:text-foreground transition-colors py-1"
            >
              <span className="text-brand-accent">↗</span>WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
