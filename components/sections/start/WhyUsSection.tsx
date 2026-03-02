"use client";
import { useEffect, useRef, useState } from "react";
import { H2, H3, P, Small } from "@/components/ui/Type";
import { Button } from "@/components/ui/Button";

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

const reasons = [
  {
    icon: "◈",
    title: "Festpreisgarantie",
    text: "Keine Nachkalkulation. Keine bösen Überraschungen. Was vereinbart wird, gilt.",
  },
  {
    icon: "◉",
    title: "Termintreu",
    text: "Projekte werden gestartet und fertiggestellt – wann zugesagt, nicht irgendwann.",
  },
  {
    icon: "◐",
    title: "Alles aus einer Hand",
    text: "Landschaftspflege, Gartenbau, Innenausbau – ein Betrieb, ein Ansprechpartner.",
  },
  {
    icon: "◇",
    title: "Regional seit 2010",
    text: "Verwurzelt in Thüringen. Kurze Wege, lokale Kenntnis, direkte Kommunikation.",
  },
];

function ReasonCard({
  reason,
  delay,
}: {
  reason: (typeof reasons)[0];
  delay: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className="bg-surface-2 p-7 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <span className="text-brand-accent text-xl block mb-4">{reason.icon}</span>
      <H3 className="mb-2">{reason.title}</H3>
      <P className="text-sm leading-relaxed">{reason.text}</P>
    </div>
  );
}

export function WhyUsSection() {
  const { ref, visible } = useReveal();
  return (
    <section className="bg-surface py-24 md:py-32 px-6 md:px-10 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
          <div
            ref={ref}
            className="transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-brand-accent" />
              <Small className="text-brand-accent uppercase tracking-[0.18em] text-[0.7rem] font-semibold">
                Warum wir
              </Small>
            </div>
            <H2 className="mb-6">
              Zuverlässig.<br />Direkt.<br />Vor Ort.
            </H2>
            <P className="mb-8 max-w-sm">
              Wir versprechen keine Wunderdinge –
              wir liefern saubere Ergebnisse, pünktlich und zum vereinbarten Preis.
            </P>
            <Button variant="secondary" href="/kontakt">
              Kostenloses Gespräch →
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
            {reasons.map((r, i) => (
              <ReasonCard key={r.title} reason={r} delay={i * 90} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}