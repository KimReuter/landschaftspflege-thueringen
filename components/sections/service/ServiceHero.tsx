"use client";

import Link from "next/link";
import { H1, P, Small } from "@/components/ui/Type";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/hooks/useReveal";
import type { ServiceConfig } from "@/content/services";

export function ServiceHero({ config }: { config: ServiceConfig }) {
  const hero = useReveal<HTMLDivElement>(0.05);

  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-24 pb-16 px-6 md:px-10">
      <div className="absolute left-6 md:left-10 top-24 bottom-0 w-px bg-border" />

      <div className="mx-auto max-w-6xl w-full">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-10 pl-6">
          <Link
            href="/"
            className="text-[0.7rem] text-muted/50 hover:text-muted transition-colors uppercase tracking-widest"
          >
            Start
          </Link>
          <span className="text-muted/30 text-[0.7rem]">/</span>
          <Link
            href="/services"
            className="text-[0.7rem] text-muted/50 hover:text-muted transition-colors uppercase tracking-widest"
          >
            Leistungen
          </Link>
          <span className="text-muted/30 text-[0.7rem]">/</span>
          <span className="text-[0.7rem] text-brand-accent uppercase tracking-widest">
            {config.breadcrumbLabel}
          </span>
        </div>

        {/* Hero content */}
        <div
          ref={hero.ref}
          className="pl-6 transition-all duration-700"
          style={{
            opacity: hero.visible ? 1 : 0,
            transform: hero.visible ? "none" : "translateY(24px)",
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-brand-accent" />
            <Small className="text-brand-accent uppercase tracking-[0.18em] text-[0.7rem] font-semibold">
              {config.leistungsbereichLabel}
            </Small>
          </div>

          <H1 className="mb-6 max-w-3xl">
            {config.heroTitle}
            <br />
            <em className="not-italic text-brand-accent">{config.heroEmphasis}</em>
          </H1>

          <P className="max-w-xl text-[1.05rem] leading-relaxed mb-10 whitespace-pre-line">
            {config.heroIntro}
          </P>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" href="/contact">
              Projekt anfragen
            </Button>

            <a
              href="tel:+4915234002234"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <span className="text-brand-accent">↗</span>+49 152 3400 2234
            </a>
          </div>
        </div>
      </div>

      <span
        className="pointer-events-none absolute right-8 bottom-0 font-[family-name:var(--font-serif-display)] text-[20vw] leading-none text-white/[0.03] select-none"
        aria-hidden
      >
        {config.bigNumber}
      </span>
    </section>
  );
}