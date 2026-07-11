"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import { Small, H3 } from "@/components/ui/Type";
import { REFERENZEN, type Referenz } from "@/content/referenzen";
import type { SlugType } from "@/content/services/types";

const SERVICE_REFERENZEN: Record<SlugType, string[]> = {
  landschaftspflege: [
    "kletterarbeiten-kronenpflege",
    "baumfaellungen",
    "rodung-entbuschung",
    "koenitz-aussenanlage",
    "pflanzung",
    "wurzelstockentfernung",
  ],
  gartenbau: [
    "landhausmauer-1",
    "holz-senkrecht-zaun",
    "hochbeet-holz",
    "teich-seisla",
    "carports-gartenhauser",
    "spielplatz-schwarza",
  ],
  innenbereich: [
    "pflasterarbeiten-rudolstadt",
    "pflasterarbeiten-koenitz",
    "feuerwehrzufahrt-poessneck",
    "granitpflaster",
    "abwasser-wasser-strom",
    "trockenlegung-keller",
  ],
  sonstiges: [
    "landhausmauer-1",
    "holz-senkrecht-zaun",
    "hochbeet-holz",
    "teich-seisla",
    "carports-gartenhauser",
    "spielplatz-schwarza",
  ],
  innenausbau: [
    "trockenbau",
    "fliesenarbeiten",
    "deckenarbeiten",
    "fussboeden",
  ],
  "sonstige-leistungen": [],
};

const SERVICE_TAG: Record<SlugType, string> = {
  landschaftspflege: "Baumarbeiten",
  gartenbau: "Gartenbau",
  innenbereich: "Tiefbau",
  sonstiges: "Gartenbau",
  innenausbau: "Innenausbau",
  "sonstige-leistungen": "",
};

function ReferenzCard({ referenz }: { referenz: Referenz }) {
  const tag = referenz.tags[0];
  const href = `/referenzen?tag=${encodeURIComponent(tag)}&projekt=${referenz.id}`;
  return (
    <Link
      href={href}
      className="group flex flex-col bg-surface-2 overflow-hidden transition-colors duration-300 hover:bg-[#1f1c17] relative"
    >
      <div className="absolute top-0 left-0 h-[2px] w-0 bg-brand-accent transition-all duration-500 group-hover:w-full" />
      <div className="p-6">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {referenz.tags.map(tag => (
            <span
              key={tag}
              className="text-[0.58rem] font-semibold tracking-[0.18em] uppercase text-brand-accent/70"
            >
              {tag}
            </span>
          ))}
        </div>
        <H3 className="text-sm font-medium mb-4 group-hover:text-brand-accent transition-colors duration-300">
          {referenz.title}
        </H3>
        <div className="flex items-center gap-2 text-brand-accent text-xs font-medium mt-auto pt-4 border-t border-border">
          <span>Projekt ansehen</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
        </div>
      </div>
    </Link>
  );
}

export function ServiceReferenzen({ slug }: { slug: SlugType }) {
  const { ref, visible } = useReveal(0.05);
  const ids = SERVICE_REFERENZEN[slug] ?? [];
  const projekte = ids
    .map(id => REFERENZEN.find(r => r.id === id))
    .filter((r): r is Referenz => r !== undefined);
  const tag = SERVICE_TAG[slug];
  const alleHref = tag ? `/referenzen?tag=${encodeURIComponent(tag)}` : "/referenzen";

  if (projekte.length === 0) return null;

  return (
    <section
      ref={ref}
      className="px-4 md:px-10 py-16 md:py-24"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-brand-accent" />
            <Small className="text-brand-accent uppercase tracking-[0.18em] text-[0.7rem] font-semibold">
              Referenzprojekte
            </Small>
          </div>
          <Link
            href={alleHref}
            className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-muted hover:text-brand-accent transition-colors duration-200"
          >
            Alle Referenzen →
          </Link>
        </div>

        <div className={`grid grid-cols-1 gap-px bg-border ${projekte.length <= 4 ? "sm:grid-cols-2" : "sm:grid-cols-2 md:grid-cols-3"}`}>
          {projekte.map(r => (
            <ReferenzCard key={r.id} referenz={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
