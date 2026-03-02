"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { H1, H2, H3, P, Small } from "@/components/ui/Type";
import { Button } from "@/components/ui/Button";

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

const leistungen = [
  { nummer: "01", titel: "Trockenbau & Innenausbau", text: "Wände, Decken und Trennwände in Gipskarton- oder Metallständerbauweise. Sauber verarbeitet, termintreu und auf Wunsch mit Dämmung." },
  { nummer: "02", titel: "Manueller Abriss", text: "Kontrollierter Rückbau im Innen- und Außenbereich – selektiv, maschinell oder von Hand. Entsorgung auf Wunsch inklusive." },
  { nummer: "03", titel: "Tiefbau & Leitungen", text: "Abwasser, Strom, Trinkwasser – wir verlegen Leitungen fachgerecht, dokumentiert und nach Norm. Kein Stückwerk, alles aus einer Hand." },
  { nummer: "04", titel: "Parkplatz- & Wegebau", text: "Planung und Bau von Stellflächen und Erschließungswegen. Tragfähiger Unterbau, professionelle Entwässerung, langlebige Oberflächen." },
];

const vorteile = [
  "Innen & Außen aus einer Hand",
  "Festpreisgarantie",
  "Termintreue Umsetzung",
  "Fachgerechte Dokumentation",
  "Entsorgung auf Wunsch",
  "Kein Subunternehmer",
];

function LeistungCard({ item, delay }: { item: typeof leistungen[0]; delay: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="bg-surface-2 p-8 md:p-10"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms` }}>
      <div className="flex items-start gap-6">
        <span className="text-[0.6rem] font-semibold tracking-[0.2em] text-brand-accent/60 uppercase mt-1 flex-shrink-0 w-6">{item.nummer}</span>
        <div><H3 className="mb-3">{item.titel}</H3><P className="text-sm leading-relaxed">{item.text}</P></div>
      </div>
    </div>
  );
}

function VorteilItem({ text, delay }: { text: string; delay: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="bg-surface-2 px-6 py-5 flex items-center gap-3 transition-all duration-500"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(12px)", transitionDelay: `${delay}ms` }}>
      <span className="text-brand-accent text-xs flex-shrink-0">✓</span>
      <Small className="text-[0.8rem]">{text}</Small>
    </div>
  );
}

export default function InnenbBereichPage() {
  const hero = useReveal(0.05);
  const leistungenHeader = useReveal();
  const warumRef = useReveal();
  const ctaRef = useReveal();

  return (
    <main className="bg-surface min-h-screen">

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-24 pb-16 px-6 md:px-10">
        <div className="absolute left-6 md:left-10 top-24 bottom-0 w-px bg-border" />
        <div className="mx-auto max-w-6xl w-full">
          <div className="flex items-center gap-2 mb-10 pl-6">
            <Link href="/" className="text-[0.7rem] text-muted/50 hover:text-muted transition-colors uppercase tracking-widest">Start</Link>
            <span className="text-muted/30 text-[0.7rem]">/</span>
            <Link href="/leistungen" className="text-[0.7rem] text-muted/50 hover:text-muted transition-colors uppercase tracking-widest">Leistungen</Link>
            <span className="text-muted/30 text-[0.7rem]">/</span>
            <span className="text-[0.7rem] text-brand-accent uppercase tracking-widest">Innenbereich</span>
          </div>
          <div ref={hero.ref} className="pl-6 transition-all duration-700"
            style={{ opacity: hero.visible ? 1 : 0, transform: hero.visible ? "none" : "translateY(24px)" }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-brand-accent" />
              <Small className="text-brand-accent uppercase tracking-[0.18em] text-[0.7rem] font-semibold">Leistungsbereich 03</Small>
            </div>
            <H1 className="mb-6 max-w-3xl">
              Innenbereich.<br />
              <em className="not-italic text-brand-accent">Abriss. Ausbau. Fertig.</em>
            </H1>
            <P className="max-w-xl text-[1.05rem] leading-relaxed mb-10">
              Trockenbau, manueller Abriss, Tiefbau und Wegebau –
              auch innen machen wir keine halben Sachen.
              Strukturiert, fachgerecht, zum Festpreis.
            </P>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href="/kontakt">Projekt anfragen</Button>
              <a href="tel:+4915234002234" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                <span className="text-brand-accent">↗</span>+49 152 3400 2234
              </a>
            </div>
          </div>
        </div>
        <span className="pointer-events-none absolute right-8 bottom-0 font-[family-name:var(--font-serif-display)] text-[20vw] leading-none text-white/[0.03] select-none" aria-hidden>03</span>
      </section>

      <div className="border-t border-border mx-6 md:mx-10" />

      {/* LEISTUNGEN */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div ref={leistungenHeader.ref} className="mb-16 transition-all duration-700"
            style={{ opacity: leistungenHeader.visible ? 1 : 0, transform: leistungenHeader.visible ? "none" : "translateY(20px)" }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-brand-accent" />
              <Small className="text-brand-accent uppercase tracking-[0.18em] text-[0.7rem] font-semibold">Was wir machen</Small>
            </div>
            <H2 className="max-w-lg">Unsere Leistungen<br />im Detail.</H2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {leistungen.map((l, i) => <LeistungCard key={l.nummer} item={l} delay={i * 60} />)}
          </div>
        </div>
      </section>

      {/* WARUM WIR */}
      <section className="border-t border-border py-24 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div ref={warumRef.ref} className="transition-all duration-700"
              style={{ opacity: warumRef.visible ? 1 : 0, transform: warumRef.visible ? "none" : "translateY(20px)" }}>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-brand-accent" />
                <Small className="text-brand-accent uppercase tracking-[0.18em] text-[0.7rem] font-semibold">Warum wir</Small>
              </div>
              <H2 className="mb-6">Innen wie außen:<br />Ein Betrieb.</H2>
              <P className="max-w-md leading-relaxed">
                Kein Koordinationsaufwand zwischen verschiedenen Gewerken.
                Wir übernehmen Innen- und Außenarbeiten im selben Projekt –
                ein Ansprechpartner, ein Zeitplan, ein Preis.
              </P>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
              {vorteile.map((v, i) => <VorteilItem key={v} text={v} delay={i * 70} />)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24 md:py-28 px-6 md:px-10">
        <div ref={ctaRef.ref} className="mx-auto max-w-4xl transition-all duration-700"
          style={{ opacity: ctaRef.visible ? 1 : 0, transform: ctaRef.visible ? "none" : "translateY(20px)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-brand-accent" />
                <Small className="text-brand-accent uppercase tracking-[0.18em] text-[0.7rem] font-semibold">Projekt starten</Small>
              </div>
              <H2 className="mb-4">Bereit für Ihr Projekt?</H2>
              <P className="max-w-md">Kostenlose Beratung, direkter Kontakt zum Inhaber. Kein Call-Center. Schnelle Rückmeldung.</P>
            </div>
            <div className="flex flex-col gap-3">
              <Button variant="primary" href="/kontakt">Projekt anfragen</Button>
              <a href="tel:+4915234002234" className="inline-flex items-center justify-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                <span className="text-brand-accent">↗</span>+49 152 3400 2234
              </a>
              <a href="https://wa.me/4915234002234" className="inline-flex items-center justify-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                <span className="text-brand-accent">↗</span>WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}