"use client"

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { Small } from "@/components/ui/Type";

export default function BildBlock() {
  const { ref, visible } = useReveal(0.06);

  return (
    <section
      ref={ref}
      className="border-t border-border transition-all duration-1000"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-px bg-border">
        <div className="relative col-span-2 row-span-2 h-[420px] md:h-auto overflow-hidden bg-surface-2">
          <Image
            src="/images/ueber-uns/individuelle_pflanzungen.jpg"
            alt="Das Team bei der Arbeit"
            fill
            className="object-cover hover:scale-105 transition-transform duration-1000"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/50 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-[0.6rem] font-semibold tracking-[0.2em] text-white/60 uppercase">
              Team · Thüringen
            </span>
          </div>
        </div>

        <div className="relative h-48 md:h-auto overflow-hidden bg-surface-2">
          <Image
            src="/images/services/landschaftspflege/bild4.jpg"
            alt="Maschinen im Einsatz"
            fill
            className="object-cover hover:scale-105 transition-transform duration-1000"
            sizes="25vw"
          />
        </div>

        <div className="relative h-48 md:h-auto overflow-hidden bg-surface-2">
          <Image
            src="/images/services/landschaftspflege/bild5.jpg"
            alt="Projekt in Ausführung"
            fill
            className="object-cover hover:scale-105 transition-transform duration-1000"
            sizes="25vw"
          />
        </div>

        <div className="relative h-48 md:h-auto overflow-hidden bg-brand-primary col-span-2 flex items-center justify-center p-10">
          <div className="text-center">
            <div className="font-[family-name:var(--font-serif-display)] text-[clamp(2.5rem,5vw,4rem)] text-white leading-none mb-3">
              500+
            </div>
            <Small className="text-white/40 uppercase tracking-[0.2em] text-[0.65rem]">
              Abgeschlossene Projekte
            </Small>
          </div>
        </div>
      </div>
    </section>
  );
}