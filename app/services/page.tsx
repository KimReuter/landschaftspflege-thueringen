"use client";

import { useEffect, useRef, useState } from "react";
import { H2, P, Small } from "@/components/ui/Type";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/sections/service/ServiceCard";
import { StatsSection } from "@/components/sections/start/StatsSection";
import {
    landschaftspflege,
    gartenbau,
    innenbereich,
    sonstiges,
} from "@/content/services";
import type { ServiceConfig } from "@/content/services";

const ALL_SERVICES: ServiceConfig[] = [landschaftspflege, gartenbau, innenbereich, sonstiges];

function useReveal(threshold = 0.1) {
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

export default function ServicesPage() {
    const hero = useReveal(0.05);
    const cta = useReveal(0.1);

    return (
        <main>
            {/* Hero */}
            <section className="bg-surface pt-32 pb-20 px-4 md:px-10">
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
                                Leistungen
                            </Small>
                        </div>

                        <H2 className="max-w-2xl mb-6">
                            Vier Bereiche.<br />
                            Ein verlässlicher Partner.
                        </H2>

                        <P className="max-w-xl text-base leading-relaxed">
                            Landschaftspflege, Gartenbau, Innenausbau und mehr –
                            strukturiert geplant, handwerklich sauber ausgeführt.
                            Kein Subunternehmer. Festpreis. Termintreu.
                        </P>
                    </div>
                </div>
            </section>

            {/* Service Grid */}
            <section className="bg-surface pb-0 px-4 md:px-10">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
                        {ALL_SERVICES.map((s, i) => (
                            <ServiceCard key={s.slug} service={s} delay={i * 90} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats mit Hochzähl-Animation */}
            <div className="mt-16">
                <StatsSection />
            </div>

            {/* CTA */}
            <section className="bg-surface py-24 px-4 md:px-10">
                <div
                    ref={cta.ref}
                    className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-end md:justify-between gap-8"
                    style={{
                        opacity: cta.visible ? 1 : 0,
                        transform: cta.visible ? "none" : "translateY(20px)",
                        transition: "opacity 0.7s ease, transform 0.7s ease",
                    }}
                >
                    <div>
                        <H2 className="mb-4">
                            Projekt anfragen.<br />
                            <span className="text-brand-accent">Wir melden uns.</span>
                        </H2>
                        <P className="max-w-lg">
                            Schildern Sie uns kurz Ihr Vorhaben – wir erstellen ein
                            unverbindliches Angebot zum Festpreis.
                        </P>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0">
                        <Button variant="primary" href="/contact">
                            ANFRAGE STELLEN
                        </Button>
                        <Button variant="outline" href="tel:+4915234002234">
                            ANRUFEN
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
