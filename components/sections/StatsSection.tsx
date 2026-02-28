"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { Small } from "@/components/ui/Type";

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
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

const stats = [
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "500+", label: "Projekte abgeschlossen" },
  { value: "100%", label: "Festpreisgarantie" },
  { value: "1", label: "Ansprechpartner" },
];

function parseStatValue(input: string) {
  const trimmed = input.trim();
  const hasPlus = trimmed.includes("+");
  const hasPercent = trimmed.includes("%");

  const numeric = parseInt(trimmed.replace(/[^\d]/g, ""), 10) || 0;

  // Reihenfolge wie im Original: z.B. "15+" oder "100%"
  const suffix = hasPercent ? "%" : hasPlus ? "+" : "";

  return { numeric, suffix };
}

function useCountUp(target: number, start: boolean, durationMs = 900) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let raf = 0;
    const t0 = performance.now();

    const tick = (t: number) => {
      const p = Math.min((t - t0) / durationMs, 1);

      // Ease-out: schnell am Anfang, sanft zum Ende
      const eased = 1 - Math.pow(1 - p, 3);

      setValue(Math.round(eased * target));

      if (p < 1) raf = requestAnimationFrame(tick);
    };

    setValue(0);
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [target, start, durationMs]);

  return value;
}

export function StatsSection() {
  const { ref, visible } = useReveal();

  const parsed = useMemo(() => stats.map((s) => parseStatValue(s.value)), []);

  return (
    <section className="bg-brand-primary py-16 md:py-20 px-6 md:px-10">
      <div
        ref={ref}
        className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(16px)",
        }}
      >
        {stats.map((s, i) => {
          const { numeric, suffix } = parsed[i];

          // leicht gestaffelt (premium feel)
          const delayMs = i * 90;
          const [start, setStart] = useState(false);

          useEffect(() => {
            if (!visible) return;
            const t = window.setTimeout(() => setStart(true), delayMs);
            return () => window.clearTimeout(t);
          }, [visible, delayMs]);

          const animated = useCountUp(numeric, start, 850);

          return (
            <div
              key={s.label}
              className="bg-brand-primary px-8 py-10 text-center"
            >
              <div className="font-[family-name:var(--font-serif-display)] text-[clamp(2rem,4vw,3rem)] text-white leading-none tracking-tight mb-2 tabular-nums">
                {animated}
                {suffix}
              </div>

              <Small className="text-white/50 uppercase tracking-widest text-[0.65rem]">
                {s.label}
              </Small>
            </div>
          );
        })}
      </div>
    </section>
  );
}