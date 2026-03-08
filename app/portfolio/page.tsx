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

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <main className="bg-surface min-h-screen">

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 md:px-10 overflow-hidden">
        {/* Decorative large text */}
        <span
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 font-[family-name:var(--font-serif-display)] text-[20vw] leading-none text-foreground/[0.025] select-none"
          aria-hidden
        >
          Projekte
        </span>

        <div className="mx-auto max-w-6xl relative">
          <div
            ref={hero.ref}
            className="transition-all duration-700"
            style={{ opacity: hero.visible ? 1 : 0, transform: hero.visible ? "none" : "translateY(20px)" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-brand-accent" />
              <Small className="text-brand-accent uppercase tracking-[0.22em] text-[0.65rem] font-semibold">
                Referenzen & Projekte
              </Small>
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
              <H1 className="max-w-xl">
                Unsere Arbeit.<br />
                <em className="not-italic text-brand-accent">In echten Projekten.</em>
              </H1>
              <div className="md:max-w-xs pb-1">
                <P className="text-[0.95rem] leading-relaxed border-l-2 border-brand-accent/30 pl-4">
                  Keine Hochglanz-Versprechen – echte Projekte, echte Ergebnisse.
                  Aus Thüringen, für Thüringen.
                </P>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="border-t border-border" />
      <section className="sticky top-[72px] z-10 bg-surface/95 backdrop-blur-sm border-b border-border px-6 md:px-10">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center overflow-x-auto scrollbar-none">
            {categories.map((cat) => {
              const count = cat === "Alle"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`relative px-4 py-4 text-[0.7rem] uppercase tracking-[0.15em] font-semibold whitespace-nowrap transition-colors duration-200 ${
                    isActive ? "text-foreground" : "text-muted/40 hover:text-muted/70"
                  }`}
                >
                  {cat}
                  <sup className={`ml-0.5 text-[0.55rem] transition-colors duration-200 ${isActive ? "text-brand-accent" : "text-muted/25"}`}>
                    {count}
                  </sup>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-accent" />
                  )}
                </button>
              );
            })}
          </div>
          <span className="text-[0.65rem] text-muted/25 uppercase tracking-widest hidden md:block shrink-0 pl-6">
            {filtered.length} {filtered.length !== 1 ? "Projekte" : "Projekt"}
          </span>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">

          {filtered.length === 0 && (
            <div className="py-32 text-center">
              <P className="text-muted/30">Keine Projekte in dieser Kategorie.</P>
            </div>
          )}

          {/* Featured – erstes Projekt horizontal */}
          {featured && (
            <FeaturedCard project={featured} />
          )}

          {/* Restliche Projekte – 2er Grid */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border mt-px">
              {rest.map((project, i) => (
                <ProjectCard key={project.slug} project={project} delay={i * 80} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      ref={ref}
      className="group relative flex flex-col md:flex-row bg-surface-2 overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transition: "opacity 0.65s ease, transform 0.65s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Bild links */}
      <div className="relative md:w-[58%] h-72 md:h-[500px] overflow-hidden bg-surface shrink-0">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          className="object-cover transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
          sizes="(max-width: 768px) 100vw, 58vw"
        />
        {/* Overlay zum Content hin */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface-2/60 hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-2/80 via-transparent to-transparent md:hidden" />

        {/* Badges */}
        <div className="absolute top-6 left-6 flex items-center gap-2">
          <span className="text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-brand-accent bg-surface/90 px-3 py-1.5">
            {project.category}
          </span>
          <span className="text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-muted/50 bg-surface/70 px-3 py-1.5">
            Featured
          </span>
        </div>
      </div>

      {/* Content rechts */}
      <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 flex-1">
        <div className="flex items-center gap-3 mb-5">
          <Small className="text-[0.65rem] text-muted/40 uppercase tracking-widest">{project.location}</Small>
          <span className="h-px w-8 bg-border" />
          <Small className="text-[0.65rem] text-muted/40">{project.year}</Small>
        </div>

        <H2 className="mb-5 transition-colors duration-300 group-hover:text-brand-accent">
          {project.title}
        </H2>

        <P className="leading-relaxed mb-7 max-w-md">
          {project.teaser}
        </P>

        <div className="flex flex-wrap gap-1.5 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.6rem] px-2.5 py-1 border border-border text-muted/40 uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-brand-accent text-xs font-semibold uppercase tracking-wider">
          <span>Projekt ansehen</span>
          <span
            className="transition-transform duration-300"
            style={{ transform: hovered ? "translateX(5px)" : "none" }}
          >→</span>
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
        transform: visible ? "none" : "translateY(20px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Bild */}
      <div className="relative h-72 overflow-hidden bg-surface">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-2 via-surface-2/20 to-transparent" />

        {/* Kategorie Badge */}
        <div className="absolute top-5 left-5">
          <span className="text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-brand-accent bg-surface/85 px-2.5 py-1.5">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7 md:p-8">
        <div className="flex items-center gap-3 mb-3">
          <Small className="text-[0.65rem] text-muted/40 uppercase tracking-widest">{project.location}</Small>
          <span className="h-px flex-1 bg-border" />
          <Small className="text-[0.65rem] text-muted/40">{project.year}</Small>
        </div>

        <H3 className="mb-3 transition-colors duration-300 group-hover:text-brand-accent">
          {project.title}
        </H3>

        <P className="text-sm leading-relaxed line-clamp-2 mb-6">
          {project.teaser}
        </P>

        <div className="flex items-center gap-2 text-brand-accent text-xs font-semibold uppercase tracking-wider">
          <span>Ansehen</span>
          <span
            className="transition-transform duration-300"
            style={{ transform: hovered ? "translateX(4px)" : "none" }}
          >→</span>
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
