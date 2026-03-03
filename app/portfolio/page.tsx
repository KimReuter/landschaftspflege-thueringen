"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { H1, H2, H3, P, Small } from "@/components/ui/Type";
import { projects, type Project } from "@/lib/portfolio-data";

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

const categories = ["Alle", "Landschaftspflege", "Gartenbau", "Innenbereich", "Sonstiges"] as const;

export default function PortfolioPage() {
  const hero = useReveal(0.05);
  const [active, setActive] = useState<string>("Alle");

  const filtered = active === "Alle"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <main className="bg-surface min-h-screen">

      {/* HERO */}
      <section className="relative pt-24 pb-16 px-6 md:px-10 border-b border-border">
        <div className="absolute left-6 md:left-10 top-24 bottom-0 w-px bg-border" />
        <div className="mx-auto max-w-6xl">
          <div
            ref={hero.ref}
            className="pl-6 transition-all duration-700"
            style={{ opacity: hero.visible ? 1 : 0, transform: hero.visible ? "none" : "translateY(24px)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-brand-accent" />
              <Small className="text-brand-accent uppercase tracking-[0.18em] text-[0.7rem] font-semibold">
                Referenzen
              </Small>
            </div>
            <H1 className="mb-6 max-w-2xl">
              Projekte.<br />
              <em className="not-italic text-brand-accent">Ausgeführt. Abgeschlossen.</em>
            </H1>
            <P className="max-w-lg text-[1.05rem] leading-relaxed">
              Keine Hochglanz-Versprechen – echte Projekte, echte Ergebnisse.
              Hier sehen Sie, was wir in Thüringen gebaut, gepflegt und gestaltet haben.
            </P>
          </div>
        </div>
        {/* Hintergrund-Zahl */}
        <span className="pointer-events-none absolute right-8 bottom-0 font-[family-name:var(--font-serif-display)] text-[18vw] leading-none text-white/[0.025] select-none" aria-hidden>
          {String(projects.length).padStart(2, "0")}
        </span>
      </section>

      {/* FILTER */}
      <section className="px-6 md:px-10 py-8 border-b border-border">
        <div className="mx-auto max-w-6xl flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.15em] font-semibold border transition-all duration-200 ${
                active === cat
                  ? "border-brand-accent text-brand-accent bg-brand-accent/10"
                  : "border-border text-muted/50 hover:border-muted/40 hover:text-muted"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-[0.7rem] text-muted/30 uppercase tracking-widest self-center">
            {filtered.length} Projekt{filtered.length !== 1 ? "e" : ""}
          </span>
        </div>
      </section>

      {/* GRID */}
      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} delay={i * 60} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      ref={ref}
      className="group relative block bg-surface-2 overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Bild */}
      <div className="relative h-56 overflow-hidden bg-surface">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-2/90 via-surface-2/20 to-transparent" />
        {/* Kategorie Badge */}
        <div className="absolute top-4 left-4">
          <span className="text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-brand-accent bg-surface/80 px-2 py-1">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-7">
        <div className="flex items-center gap-3 mb-3">
          <Small className="text-[0.65rem] text-muted/40 uppercase tracking-widest">{project.location}</Small>
          <span className="h-px flex-1 bg-border" />
          <Small className="text-[0.65rem] text-muted/40">{project.year}</Small>
        </div>

        <H3 className="mb-2 transition-colors duration-300 group-hover:text-brand-accent">
          {project.title}
        </H3>

        <P className="text-sm leading-relaxed line-clamp-2 mb-5">
          {project.teaser}
        </P>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[0.6rem] px-2 py-0.5 border border-border text-muted/50 uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-brand-accent text-xs font-semibold uppercase tracking-wider">
          <span>Projekt ansehen</span>
          <span className="transition-transform duration-300" style={{ transform: hovered ? "translateX(4px)" : "none" }}>
            →
          </span>
        </div>
      </div>

      {/* Hover accent line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-brand-accent transition-all duration-500"
        style={{ width: hovered ? "100%" : "0%" }}
      />
    </Link>
  );
}