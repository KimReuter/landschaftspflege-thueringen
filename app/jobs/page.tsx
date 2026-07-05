"use client";

import { useEffect, useRef, useState } from "react";
import { CtaBand } from "@/components/sections/start/CtaBand";
import { H1, H2, H3, P, Small } from "@/components/ui/Type";

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

const ANGEBOT_STANDARD = [
  "ab 2.400 € netto",
  "Firmenwagen",
  "Hochwertige Arbeitsbekleidung",
  "Moderne Maschinen und Arbeitsgeräte",
  "Ganzjährige Beschäftigung",
  "Bezahlte Weiterbildungsmöglichkeiten",
  "Unbefristeter Arbeitsvertrag",
  "Familiäres Team",
];

const STELLEN = [
  {
    titel: "Baumpfleger / Baumkletterer (m/w/d)",
    art: "Vollzeit · Festanstellung",
    ort: "Thüringen",
    aufgaben: [
      "Baumpflegearbeiten mit Hubarbeitsbühnen",
      "Motorsägenschein",
      "SKT A/B (SKT 1 & 2)",
      "LKW-Führerschein CE",
      "Bedienung von Häckslern und Seilwinden",
      "Bedienung von John Deere Traktoren",
      "Baumfällungen",
      "Problembaumfällungen",
      "Kronenpflege",
      "Objektpflege",
      "Hecken- und Gehölzschnitt",
      "Rasenpflege und Mäharbeiten",
      "Allgemeine Pflege von Außenanlagen",
    ],
    angebot: ANGEBOT_STANDARD,
  },
  {
    titel: "Tiefbauer / Kanalbauer / Zaunbauer (m/w/d)",
    art: "Vollzeit · Festanstellung",
    ort: "Thüringen",
    aufgaben: [
      "Pflasterarbeiten",
      "Zaunbau",
      "Verlegung von Abwasser- und Entwässerungsleitungen",
      "Drainagearbeiten",
      "Fundamentarbeiten",
      "Baggerarbeiten mit 5- und 15-Tonnen-Baggern",
      "Arbeiten mit Radladern",
      "LKW-Führerschein",
      "Unterstützung bei der saisonalen Objektpflege",
      "Rasenpflege und Mäharbeiten während der Sommersaison",
      "Unterstützung bei Häckslerarbeiten und allgemeinen Baumpflegearbeiten während der Wintersaison",
    ],
    angebot: ANGEBOT_STANDARD,
  },
  {
    titel: "Landschaftsgärtner / Allrounder (m/w/d)",
    art: "Vollzeit · Festanstellung",
    ort: "Thüringen",
    aufgaben: [
      "Garten- und Landschaftsbau",
      "Pflasterarbeiten",
      "Zaunbau",
      "Baggerarbeiten",
      "Hecken- und Gehölzpflege",
      "Baumpflege",
      "Rollrasen",
      "Pflanzarbeiten",
      "Unkrautbeseitigung und Beetpflege",
      "Maschinenbedienung",
    ],
    angebot: [
      "ab 2.100 € netto",
      "Firmenwagen",
      "Hochwertige Arbeitsbekleidung",
      "Moderne Maschinen",
      "Ganzjährige Beschäftigung",
      "Keine Montage",
      "Unbefristeter Arbeitsvertrag",
    ],
  },
];

function StelleCard({ stelle }: { stelle: typeof STELLEN[0] }) {
  const card = useReveal();
  const aufgaben = useReveal();
  const angebot = useReveal();

  return (
    <div
      ref={card.ref}
      style={{
        opacity: card.visible ? 1 : 0,
        transform: card.visible ? "none" : "translateY(24px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
      className="bg-surface-2 border border-border rounded-2xl p-8 md:p-12 mb-10"
    >
      <div className="mb-8">
        <H2 className="mb-3">{stelle.titel}</H2>
        <div className="flex flex-wrap gap-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-accent border border-brand-accent/30 rounded-full px-3 py-1">
            {stelle.art}
          </span>
          <span className="text-xs font-semibold tracking-widest uppercase text-muted border border-border rounded-full px-3 py-1">
            {stelle.ort}
          </span>
        </div>
      </div>

      {/* Aufgaben */}
      <div
        ref={aufgaben.ref}
        style={{
          opacity: aufgaben.visible ? 1 : 0,
          transform: aufgaben.visible ? "none" : "translateY(16px)",
          transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
        }}
        className="mb-10"
      >
        <H3 className="mb-5">Deine Aufgaben</H3>
        <ul className="space-y-3">
          {stelle.aufgaben.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-[0.6rem] h-px w-5 bg-brand-accent flex-shrink-0" />
              <P className="text-sm leading-relaxed">{item}</P>
            </li>
          ))}
        </ul>
      </div>

      {/* Angebot */}
      <div
        ref={angebot.ref}
        style={{
          opacity: angebot.visible ? 1 : 0,
          transform: angebot.visible ? "none" : "translateY(16px)",
          transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
        }}
        className="mb-10"
      >
        <H3 className="mb-5">Wir bieten dir</H3>
        <ul className="space-y-3">
          {stelle.angebot.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-[0.6rem] h-px w-5 bg-brand-accent flex-shrink-0" />
              <P className={`text-sm leading-relaxed${i === 0 ? " font-semibold" : ""}`}>{item}</P>
            </li>
          ))}
        </ul>
      </div>

      {/* Bewerbung */}
      <div className="border-t border-border pt-8">
        <H3 className="mb-3">Interesse?</H3>
        <P className="text-sm leading-relaxed mb-5">
          Melde dich einfach per WhatsApp oder ruf direkt an – kein langes
          Bewerbungsverfahren, kein Aufwand.
        </P>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/4915234002234"
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Per WhatsApp melden
          </a>
          <a
            href="tel:+4915234002234"
            className="flex-1 inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-brand-accent hover:text-brand-accent"
          >
            Anrufen
          </a>
        </div>
      </div>
    </div>
  );
}

export default function JobsPage() {
  const hero = useReveal();

  return (
    <main className="bg-surface min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="pt-36 pb-20 px-4 md:px-10 border-b border-border">
        <div className="mx-auto max-w-6xl">
          <div
            ref={hero.ref}
            style={{
              opacity: hero.visible ? 1 : 0,
              transform: hero.visible ? "none" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-brand-accent" />
              <Small className="text-brand-accent uppercase tracking-[0.18em] text-[0.7rem] font-semibold">
                Karriere
              </Small>
            </div>
            <H1 className="mb-6 max-w-2xl">
              Mitarbeiter<br />gesucht.
            </H1>
            <P className="max-w-xl text-base leading-relaxed">
              Wir sind ein wachsender Familienbetrieb aus Thüringen und suchen
              zuverlässige Fachkräfte, die mit uns anpacken – draußen, mit Qualität,
              und ohne Umwege.
            </P>
          </div>
        </div>
      </section>

      {/* Stellen */}
      <section className="py-20 px-4 md:px-10">
        <div className="mx-auto max-w-6xl">
          {STELLEN.map((s) => (
            <StelleCard key={s.titel} stelle={s} />
          ))}
        </div>
      </section>

      <CtaBand label="Lieber ein Projekt anfragen?" />
    </main>
  );
}
