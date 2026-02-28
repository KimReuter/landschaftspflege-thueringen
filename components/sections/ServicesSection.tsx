"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { H2, H3, P, Small } from "@/components/ui/Type";

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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

const services = [
  {
    number: "01",
    title: "Landschaftspflege",
    short: "Baumpflege, Entbuschung, Objektpflege – sauber ausgeführt, termintreu.",
    items: [
      "Baumfällung & Kronenpflege",
      "Rodung & Entbuschung",
      "Forstmulchen an Steilhängen",
      "Objektpflege für Firmen",
    ],
    href: "/leistungen/landschaftspflege",
  },
  {
    number: "02",
    title: "Gartenbau",
    short: "Von der Planung bis zur Pflanzung – individuell, durchdacht, dauerhaft.",
    items: [
      "Gartengestaltung & Neuanlage",
      "Pflanzungen & Rasenarbeiten",
      "Wege & Pflasterarbeiten",
      "Zaunbau & Einfriedung",
    ],
    href: "/leistungen/gartenbau",
  },
  {
    number: "03",
    title: "Innenbereich",
    short: "Trockenbau, Abriss und Innenausbau – alles aus einer Hand.",
    items: [
      "Trockenbau & Innenausbau",
      "Manueller Abriss",
      "Tiefbau & Leitungen",
      "Parkplatz- & Wegebau",
    ],
    href: "/leistungen/innenbereich",
  },
  {
    number: "04",
    title: "Sonstige Leistungen",
    short: "Holzbau, Carports, Schutzhütten – was auch immer das Projekt verlangt.",
    items: [
      "Carports & Gartenhäuser",
      "Schutzhütten & Stallungen",
      "Winterdienst",
      "Notfallservice bei Sturmschäden",
    ],
    href: "/leistungen/sonstiges",
  },
];

function ServiceCard({
  service,
  delay,
}: {
  service: (typeof services)[0];
  delay: number;
}) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Link
      href={service.href}
      ref={ref}
      className="group relative block bg-surface-2 overflow-hidden transition-colors duration-300 hover:bg-[#1f1c17]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 h-[2px] w-0 bg-brand-accent transition-all duration-500 group-hover:w-full" />

      <div className="p-8 md:p-10">
        <span className="text-[0.65rem] font-semibold tracking-[0.22em] text-brand-accent uppercase mb-6 block">
          {service.number}
        </span>

        <H3 className="mb-3 transition-colors duration-300 group-hover:text-brand-accent">
          {service.title}
        </H3>

        <P className="text-sm mb-6 leading-relaxed">
          {service.short}
        </P>

        <ul className="space-y-1.5 mb-8">
          {service.items.map((item) => (
            <li key={item} className="flex items-center gap-2.5">
              <span className="h-px w-4 bg-brand-accent/50 flex-shrink-0" />
              <Small className="text-[0.8rem]">{item}</Small>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 text-brand-accent text-sm font-medium">
          <span>Mehr erfahren</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ServicesSection() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="leistungen"
      className="bg-surface py-24 md:py-32 px-6 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div
          ref={ref}
          className="mb-16 flex flex-col gap-4 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(20px)",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}