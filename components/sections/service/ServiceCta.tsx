"use client";

import { CtaBand } from "@/components/sections/start/CtaBand";
import type { ServiceConfig } from "@/content/services";

export function ServiceCta({ config }: { config: ServiceConfig }) {
  return (
    <CtaBand
      label="Projekt starten"
      headline={
        <>
          Interesse an{" "}
          <em className="not-italic text-brand-accent">{config.breadcrumbLabel}?</em>
        </>
      }
      subtext="Kostenlose Ersteinschätzung, direkter Kontakt zum Inhaber – kein Call-Center, keine langen Wartezeiten."
      primaryLabel="Anfrage stellen"
    />
  );
}
