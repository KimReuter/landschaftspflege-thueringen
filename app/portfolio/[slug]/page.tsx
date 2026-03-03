import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/portfolio-data";
import { H1, H2, P, Small } from "@/components/ui/Type";
import { Button } from "@/components/ui/Button";

// Statische Pfade für Next.js
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <main className="bg-surface min-h-screen">

      {/* HERO – Cover-Bild */}
      <section className="relative h-[65vh] min-h-[400px] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/60 to-transparent" />

        {/* Breadcrumb oben */}
        <div className="absolute top-24 left-6 md:left-10 flex items-center gap-2">
          <Link href="/" className="text-[0.7rem] text-white/40 hover:text-white/70 transition-colors uppercase tracking-widest">Start</Link>
          <span className="text-white/20 text-[0.7rem]">/</span>
          <Link href="/portfolio" className="text-[0.7rem] text-white/40 hover:text-white/70 transition-colors uppercase tracking-widest">Portfolio</Link>
          <span className="text-white/20 text-[0.7rem]">/</span>
          <span className="text-[0.7rem] text-brand-accent uppercase tracking-widest">{project.title}</span>
        </div>

        {/* Titel unten links */}
        <div className="absolute bottom-10 left-6 md:left-10 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-brand-accent" />
            <Small className="text-brand-accent uppercase tracking-[0.18em] text-[0.7rem] font-semibold">
              {project.category}
            </Small>
          </div>
          <H1 className="text-white">{project.title}</H1>
          <div className="flex items-center gap-4 mt-4">
            <Small className="text-white/50 text-[0.7rem] uppercase tracking-widest">{project.location}</Small>
            <span className="h-px w-4 bg-white/20" />
            <Small className="text-white/50 text-[0.7rem]">{project.year}</Small>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">

            {/* Links – Text & Galerie */}
            <div>
              {/* Projektbeschreibung */}
              <div className="mb-14">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-brand-accent" />
                  <Small className="text-brand-accent uppercase tracking-[0.18em] text-[0.7rem] font-semibold">
                    Projektbeschreibung
                  </Small>
                </div>
                <div className="space-y-4 max-w-2xl">
                  {project.description.trim().split("\n\n").map((para, i) => (
                    <P key={i} className="leading-relaxed">{para.trim()}</P>
                  ))}
                </div>
              </div>

              {/* Bildergalerie */}
              {project.images.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="h-px w-8 bg-brand-accent" />
                    <Small className="text-brand-accent uppercase tracking-[0.18em] text-[0.7rem] font-semibold">
                      Fotodokumentation
                    </Small>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
                    {project.images.map((src, i) => (
                      <div
                        key={i}
                        className={`relative overflow-hidden bg-surface-2 ${
                          i === 0 && project.images.length % 2 !== 0
                            ? "sm:col-span-2 h-72"
                            : "h-56"
                        }`}
                      >
                        <Image
                          src={src}
                          alt={`${project.title} – Bild ${i + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Rechts – Meta-Info Sidebar */}
            <aside className="space-y-px">
              {/* Projektinfos */}
              <div className="bg-surface-2 p-6">
                <Small className="text-brand-accent uppercase tracking-[0.15em] text-[0.65rem] font-semibold mb-4 block">
                  Projektinfos
                </Small>
                <div className="space-y-4">
                  {[
                    { label: "Kategorie", value: project.category },
                    { label: "Standort", value: project.location },
                    { label: "Jahr", value: project.year },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <Small className="text-[0.65rem] text-muted/40 uppercase tracking-widest block mb-0.5">{label}</Small>
                      <Small className="text-[0.85rem] text-foreground">{value}</Small>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-surface-2 p-6">
                <Small className="text-brand-accent uppercase tracking-[0.15em] text-[0.65rem] font-semibold mb-4 block">
                  Leistungen
                </Small>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[0.6rem] px-2 py-1 border border-border text-muted/60 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-surface-2 p-6">
                <Small className="text-brand-accent uppercase tracking-[0.15em] text-[0.65rem] font-semibold mb-3 block">
                  Ähnliches Projekt?
                </Small>
                <P className="text-sm mb-4 leading-relaxed">
                  Sprechen Sie uns an – kostenlose Beratung, direkt vom Inhaber.
                </P>
                <div className="flex flex-col gap-2">
                  <Button variant="primary" href="/kontakt">
                    Anfrage stellen
                  </Button>
                  <a href="tel:+4915234002234" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors py-1">
                    <span className="text-brand-accent text-xs">↗</span>
                    +49 152 3400 2234
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* WEITERE PROJEKTE */}
      {others.length > 0 && (
        <section className="border-t border-border px-6 md:px-10 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px w-8 bg-brand-accent" />
              <Small className="text-brand-accent uppercase tracking-[0.18em] text-[0.7rem] font-semibold">
                Weitere Projekte
              </Small>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/portfolio/${p.slug}`}
                  className="group relative bg-surface-2 overflow-hidden block"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-2/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <Small className="text-brand-accent text-[0.65rem] uppercase tracking-widest mb-2 block">{p.category}</Small>
                    <H2 className="text-[1.1rem] group-hover:text-brand-accent transition-colors duration-300">{p.title}</H2>
                    <P className="text-sm mt-2 line-clamp-1">{p.teaser}</P>
                  </div>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-accent transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/portfolio" className="text-sm text-white/40 hover:text-white transition-colors underline underline-offset-4">
                Alle Projekte ansehen
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}