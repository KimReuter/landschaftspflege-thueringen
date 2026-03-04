"use client";

import { useEffect, useRef, useState } from "react";
import { H2, P, Small } from "@/components/ui/Type";
import { ServiceCard } from "@/components/sections/service/ServiceCard";
import { StatsSection } from "@/components/sections/start/StatsSection";
import { CtaBand } from "@/components/sections/start/CtaBand";
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

            <CtaBand
                label="Projekt starten"
                headline={<>Projekt anfragen.<br /><em className="not-italic text-brand-accent">Wir melden uns.</em></>}
                subtext="Schildern Sie uns kurz Ihr Vorhaben – wir erstellen ein unverbindliches Angebot zum Festpreis."
                primaryLabel="Anfrage stellen"
            />
        </main>
    );
}
