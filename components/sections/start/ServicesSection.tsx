"use client";

import { useEffect, useRef, useState } from "react";
import { H2, P, Small } from "@/components/ui/Type";
import { ServiceCard } from "@/components/sections/service/ServiceCard";
import {
  landschaftspflege,
  gartenbau,
  innenbereich,
  sonstiges,
} from "@/content/services";
import type { ServiceConfig } from "@/content/services";

const ALL_SERVICES: ServiceConfig[] = [landschaftspflege, gartenbau, innenbereich, sonstiges];

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

export function ServicesSection() {
  const { ref, visible } = useReveal();

  return (
    <section id="leistungen" className="bg-surface py-14 md:py-32 px-4 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div
          ref={ref}
          className="mb-16 flex flex-col gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-brand-accent" />
            <Small className="text-brand-accent uppercase tracking-[0.18em] text-[0.7rem] font-semibold">
              Leistungen
            </Small>
          </div>

          <H2 className="max-w-xl">
            Vier Bereiche.<br />Ein verlässlicher Partner.
          </H2>

          <P className="max-w-lg">
            Klar strukturiert, direkt ausgeführt – ohne Umwege, ohne Überraschungen.
          </P>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
          {ALL_SERVICES.map((s, i) => (
            <ServiceCard key={s.slug} service={s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
