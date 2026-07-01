"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { H2, H3, P, Small } from "@/components/ui/Type";
import { REFERENZEN, ALL_TAGS, type LeistungsbereichTag, type Referenz } from "@/content/referenzen";

const TAG_COLORS: Record<LeistungsbereichTag, string> = {
  Baumarbeiten: "#3d6b4f",
  Grünflächenpflege: "#4a7c59",
  Tiefbau: "#5a6b7a",
  Gartenbau: "#6b7a4a",
  Innenausbau: "#7a6b5a",
  "Sonstige Leistungen": "#6b5a7a",
};

function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
}

interface LightboxProps {
  referenz: Referenz;
  startIndex: number;
  onClose: () => void;
}

function Lightbox({ referenz, startIndex, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(startIndex);
  const [entering, setEntering] = useState(false);

  useEffect(() => {
    setEntering(false);
    requestAnimationFrame(() => setEntering(true));
  }, []);

  const prev = useCallback(() => {
    setCurrent(c => (c - 1 + referenz.images.length) % referenz.images.length);
  }, [referenz.images.length]);

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % referenz.images.length);
  }, [referenz.images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col"
      style={{
        background: "rgba(10, 9, 8, 0.97)",
        opacity: entering ? 1 : 0,
        transition: "opacity 0.35s ease",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/8 flex-shrink-0">
        <div>
          <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-brand-accent uppercase">
            {referenz.tags.join(" · ")}
          </span>
          <h2 className="text-white text-base font-medium mt-0.5">{referenz.title}</h2>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-white/30 text-sm tabular-nums">
            {current + 1} / {referenz.images.length}
          </span>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors text-2xl leading-none"
            aria-label="Schließen"
          >
            ×
          </button>
        </div>
      </div>

      {/* Image area */}
      <div className="flex-1 relative flex items-center justify-center min-h-0 px-12 py-6">
        {/* Prev */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition-colors text-2xl"
          aria-label="Vorheriges Bild"
        >
          ←
        </button>

        {/* Image */}
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              key={current}
              src={referenz.images[current]}
              alt={`${referenz.title} – Bild ${current + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 90vw"
              priority
            />
          </div>
        </div>

        {/* Next */}
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition-colors text-2xl"
          aria-label="Nächstes Bild"
        >
          →
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="flex-shrink-0 px-6 pb-5 pt-3 border-t border-white/8">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {referenz.images.map((src, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="relative flex-shrink-0 w-14 h-10 overflow-hidden transition-opacity duration-200"
              style={{ opacity: i === current ? 1 : 0.35 }}
              aria-label={`Bild ${i + 1}`}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="56px"
              />
              {i === current && (
                <div className="absolute inset-0 ring-1 ring-brand-accent ring-inset" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  referenz: Referenz;
  delay: number;
  onOpen: (r: Referenz) => void;
}

function ProjectCard({ referenz, delay, onOpen }: ProjectCardProps) {
  const { ref, visible } = useReveal();
  const coverImage = referenz.images[0];

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      <button
        onClick={() => onOpen(referenz)}
        className="group w-full text-left relative bg-surface-2 overflow-hidden block"
        aria-label={`${referenz.title} ansehen`}
      >
        {/* Accent top line on hover */}
        <div className="absolute top-0 left-0 h-[2px] w-0 bg-brand-accent transition-all duration-500 group-hover:w-full z-10" />

        {/* Cover image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface">
          {coverImage && (
            <Image
              src={coverImage}
              alt={referenz.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-surface/0 group-hover:bg-surface/30 transition-colors duration-500" />

          {/* Image count badge */}
          <div className="absolute bottom-3 right-3 bg-surface/80 backdrop-blur-sm px-2 py-1 text-[0.6rem] font-semibold tracking-wider text-white/60 uppercase">
            {referenz.images.length} Fotos
          </div>

          {/* Reveal icon */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <span className="text-white text-lg">↗</span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {referenz.tags.map(tag => (
              <span
                key={tag}
                className="text-[0.58rem] font-semibold tracking-[0.18em] uppercase px-2 py-0.5"
                style={{ color: TAG_COLORS[tag], background: `${TAG_COLORS[tag]}18` }}
              >
                {tag}
              </span>
            ))}
          </div>
          <H3 className="text-sm font-medium group-hover:text-brand-accent transition-colors duration-300">
            {referenz.title}
          </H3>
        </div>
      </button>
    </div>
  );
}

export default function ReferenzenPage() {
  const [activeTag, setActiveTag] = useState<LeistungsbereichTag | null>(null);
  const [lightbox, setLightbox] = useState<{ referenz: Referenz; index: number } | null>(null);
  const hero = useReveal(0.05);

  const filtered = activeTag
    ? REFERENZEN.filter(r => r.tags.includes(activeTag))
    : REFERENZEN;

  return (
    <main className="bg-surface min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 md:px-10">
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
                Referenzen
              </Small>
            </div>
            <H2 className="max-w-2xl mb-6">
              Projekte.<br />
              <span className="text-brand-accent">Aus der Praxis.</span>
            </H2>
            <P className="max-w-xl text-base leading-relaxed">
              Ein Auszug aus unseren abgeschlossenen Projekten –
              von der Baumpflege bis zum Innenausbau.
            </P>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="px-4 md:px-10 pb-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className="px-4 py-2 text-[0.68rem] font-semibold tracking-[0.15em] uppercase transition-all duration-200 border"
              style={{
                borderColor: activeTag === null ? "var(--color-brand-accent, #4a7c59)" : "var(--color-border)",
                color: activeTag === null ? "var(--color-brand-accent, #4a7c59)" : "var(--color-muted)",
                background: activeTag === null ? "var(--color-brand-accent, #4a7c59)10" : "transparent",
              }}
            >
              Alle ({REFERENZEN.length})
            </button>
            {ALL_TAGS.map(tag => {
              const count = REFERENZEN.filter(r => r.tags.includes(tag)).length;
              if (count === 0) return null;
              const isActive = activeTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setActiveTag(isActive ? null : tag)}
                  className="px-4 py-2 text-[0.68rem] font-semibold tracking-[0.15em] uppercase transition-all duration-200 border"
                  style={{
                    borderColor: isActive ? TAG_COLORS[tag] : "var(--color-border)",
                    color: isActive ? TAG_COLORS[tag] : "var(--color-muted)",
                    background: isActive ? `${TAG_COLORS[tag]}15` : "transparent",
                  }}
                >
                  {tag} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 md:px-10 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {filtered.map((r, i) => (
              <ProjectCard
                key={r.id}
                referenz={r}
                delay={Math.min(i, 5) * 70}
                onOpen={(ref) => setLightbox({ referenz: ref, index: 0 })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          referenz={lightbox.referenz}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </main>
  );
}
