"use client"

import { useReveal } from "@/hooks/useReveal";
import Image from "next/image";
import { Small, H2, P } from "@/components/ui/Type";

export default function InhaberSection() {
  const { ref, visible } = useReveal(0.08);

  return (
    <section className="border-t border-border px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(24px)",
          }}
        >
          {/* Image */}
          <div className="relative h-[520px] lg:h-auto overflow-hidden bg-surface-2">
            <Image
              src="/images/ueber-uns/inhaber.jpg"
              alt="Franz Eberitsch – Inhaber"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-[0.6rem] font-semibold tracking-[0.2em] text-brand-accent uppercase bg-surface/80 px-3 py-1.5">
                Franz Eberitsch · Inhaber
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="bg-surface-2 p-10 md:p-14 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-7">
              <span className="h-px w-8 bg-brand-accent" />
              <Small className="text-brand-accent uppercase tracking-[0.18em] text-[0.7rem] font-semibold">
                Der Mensch dahinter
              </Small>
            </div>

            <H2 className="mb-8 leading-snug">
              Kein Büro.<br />
              Kein Callcenter.<br />
              Ich bin dabei.
            </H2>

            <div className="space-y-4 mb-10">
              <P className="leading-relaxed">
                Ich bin Franz Eberitsch – geboren und aufgewachsen in Thüringen.
                2010 habe ich den Betrieb gegründet, weil ich eine simple Überzeugung hatte:
                Handwerk funktioniert dann, wenn derjenige der zusagt auch der ist, der ausführt.
              </P>
              <P className="leading-relaxed">
                Auf jeder Baustelle bin ich persönlich dabei oder direkt erreichbar.
                Keine Weitergabe an Subunternehmer. Keine Überraschungen beim Endpreis.
                Das ist keine Marketing-Aussage – das ist wie wir arbeiten.
              </P>
              <P className="leading-relaxed">
                Über 15 Jahre, hunderte Projekte, tausende Stunden draußen.
                Ich kenne jeden Hang in der Region und weiß, was funktioniert.
              </P>
            </div>

            <div className="flex flex-col gap-2 pt-8">
              <Small className="text-muted/40 text-[0.7rem] uppercase tracking-widest mb-1">
                Direkt erreichbar
              </Small>
              <a
                href="tel:+4915234002234"
                className="flex items-center gap-2 text-foreground hover:text-brand-accent transition-colors text-sm font-medium"
              >
                <span className="text-brand-accent text-xs">↗</span>+49 152 3400 2234
              </a>
              <a
                href="mailto:franz.eberitsch@web.de"
                className="flex items-center gap-2 text-foreground hover:text-brand-accent transition-colors text-sm font-medium"
              >
                <span className="text-brand-accent text-xs">↗</span>franz.eberitsch@web.de
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}