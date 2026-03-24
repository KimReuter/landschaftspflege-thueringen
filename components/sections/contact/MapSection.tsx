"use client";

import { useState } from "react";
import { Small } from "@/components/ui/Type";
import { useReveal } from "@/hooks/useReveal";
import { GOOGLE_MAPS_EMBED_URL } from "@/content/contact/kontakt";

export default function MapSection() {
  const { ref, visible } = useReveal(0.05);
  const [accepted, setAccepted] = useState(false);

  return (
    <section
      ref={ref}
      className="border-t border-border transition-all duration-700"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div className="px-6 md:px-10 py-5 border-b border-border bg-surface-2 flex items-center gap-6">
        <span className="h-px w-8 bg-brand-accent" />
        <Small className="text-brand-accent uppercase tracking-[0.18em] font-semibold">
          Standort
        </Small>
      </div>

      <div className="relative h-[480px] w-full bg-surface-2 flex items-center justify-center">
        {accepted ? (
          <iframe
            src={GOOGLE_MAPS_EMBED_URL}
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "grayscale(100%) invert(92%) contrast(83%)",
            }}
            loading="lazy"
            title="Standort"
          />
        ) : (
          <div className="text-center px-6 max-w-sm">
            <div className="text-3xl mb-4">📍</div>
            <p className="text-sm text-muted mb-2 leading-relaxed">
              Rote-Berg-Str. 21, 07333 Unterwellenborn
            </p>
            <p className="text-xs text-muted/50 mb-6 leading-relaxed">
              Durch das Laden der Karte werden Daten an Google übertragen.
              Weitere Infos in unserer{" "}
              <a href="/privacy" className="underline hover:text-foreground transition-colors">
                Datenschutzerklärung
              </a>
              .
            </p>
            <button
              onClick={() => setAccepted(true)}
              className="inline-flex items-center justify-center rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Karte laden
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
