"use client"

import Image from "next/image";
import { Small, P, H1 } from "@/components/ui/Type";

export default function Hero({
  loaded,
  parallaxRef,
}: {
  loaded: boolean;
  parallaxRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
      {/* Parallax image */}
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/ueber-uns/hero.jpg"
          alt="Franz Eberitsch bei der Arbeit"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-surface/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-surface/70 via-transparent to-transparent" />

      {/* Noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl w-full px-6 md:px-10 pb-20 pt-32">
        <div
          className="transition-all duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(32px)",
          }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-brand-accent" />
            <Small className="text-brand-accent uppercase tracking-[0.2em] text-[0.7rem] font-semibold">
              Über uns · seit 2010
            </Small>
          </div>

          <H1 className="text-white max-w-2xl mb-8 leading-[1.05]">
            Ein Betrieb.<br />
            Ein Wort.<br />
            <em className="not-italic text-brand-accent">Thüringen.</em>
          </H1>

          <div
            className="transition-all duration-1000 delay-300"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "none" : "translateY(16px)",
            }}
          >
            <div className="h-px w-12 bg-white/20 mb-6" />
            <P className="text-white/70 max-w-md text-[1.05rem] leading-relaxed">
              Gegründet aus Überzeugung, nicht aus Kalkulation.
              Wir machen das, was wir können – und nichts anderes.
            </P>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-700"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        <span className="text-[0.6rem] text-white/30 uppercase tracking-[0.2em]">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}