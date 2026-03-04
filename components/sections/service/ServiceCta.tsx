"use client";

import Link from "next/link";
import { H2, Small } from "@/components/ui/Type";
import { useReveal } from "@/hooks/useReveal";
import type { ServiceConfig } from "@/content/services";

export function ServiceCta({ config }: { config: ServiceConfig }) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="bg-surface border-t border-border py-24 md:py-28 px-4 md:px-10">
      <div
        ref={ref}
        className="mx-auto max-w-5xl"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-brand-accent" />
          <Small className="text-brand-accent uppercase tracking-[0.18em] text-[0.7rem] font-semibold">
            Projekt starten
          </Small>
        </div>

        {/* Headline */}
        <H2 className="mb-3 max-w-xl">
          Interesse an{" "}
          <span className="text-brand-accent">{config.breadcrumbLabel}?</span>
        </H2>
        <p className="text-muted text-sm mb-12 max-w-md leading-relaxed">
          Kostenlose Ersteinschätzung, direkter Kontakt zum Inhaber –
          kein Call-Center, keine langen Wartezeiten.
        </p>

        {/* Kontakt-Kacheln */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border">

          {/* Anrufen */}
          <a
            href="tel:+4915234002234"
            className="group flex flex-col gap-3 bg-surface-2 p-7 hover:bg-[#1f1c17] transition-colors duration-200"
          >
            <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-brand-accent uppercase">
              01 — Anrufen
            </span>
            <span className="text-lg font-semibold text-foreground group-hover:text-brand-accent transition-colors duration-200">
              +49 152 34002234
            </span>
            <span className="text-xs text-muted/60">Mo–Fr, 07:00–18:00 Uhr</span>
            <span className="mt-auto text-brand-accent text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/4915234002234"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col gap-3 bg-surface-2 p-7 hover:bg-[#1f1c17] transition-colors duration-200"
          >
            <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-brand-accent uppercase">
              02 — WhatsApp
            </span>
            <span className="text-lg font-semibold text-foreground group-hover:text-brand-accent transition-colors duration-200">
              Nachricht schreiben
            </span>
            <span className="text-xs text-muted/60">Antwort meist innerhalb 24 h</span>
            <span className="mt-auto text-brand-accent text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>

          {/* Kontaktformular */}
          <Link
            href="/contact"
            className="group flex flex-col gap-3 bg-surface-2 p-7 hover:bg-[#1f1c17] transition-colors duration-200"
          >
            <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-brand-accent uppercase">
              03 — Anfrage stellen
            </span>
            <span className="text-lg font-semibold text-foreground group-hover:text-brand-accent transition-colors duration-200">
              Kontaktformular
            </span>
            <span className="text-xs text-muted/60">Unverbindlich & kostenlos</span>
            <span className="mt-auto text-brand-accent text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>

        </div>
      </div>
    </section>
  );
}
