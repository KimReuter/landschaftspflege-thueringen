"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { H2, H3, P, Small } from "@/components/ui/Type";
import { Button } from "@/components/ui/Button";
import { StatsSection } from "@/components/sections/start/StatsSection";
import {
    landschaftspflege,
    gartenbau,
    innenbereich,
    sonstiges,
} from "@/content/services";
import type { ServiceConfig } from "@/content/services";

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

// Hier trägst du später die Bilder ein die Franz liefert
const SERVICE_IMAGES: Record<string, string | null> = {
    landschaftspflege: null,
    gartenbau: null,
    innenbereich: null,
    sonstiges: null,
};

function ServiceCard({ service, delay }: { service: ServiceConfig; delay: number }) {
    const cardRef = useRef<HTMLAnchorElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
            { threshold: 0.08 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    const topLeistungen = service.leistungen.slice(0, 4);
    const imageSrc = SERVICE_IMAGES[service.slug];

    return (
        <Link
            href={`/services/${service.slug}`}
            ref={cardRef}
            className="group relative flex flex-col bg-surface-2 overflow-hidden transition-colors duration-300 hover:bg-[#1f1c17]"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(28px)",
                transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
            }}
        >
            {/* Accent top line */}
            <div className="absolute top-0 left-0 h-[2px] w-0 bg-brand-accent transition-all duration-500 group-hover:w-full" />

            {/* Bild-Bereich */}
            <div className="relative w-full aspect-[16/7] bg-surface overflow-hidden">
                {imageSrc ? (
                    <Image
                        src={imageSrc}
                        alt={service.breadcrumbLabel}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center border-b border-border">
                        <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-muted/30 uppercase">
                            Bild folgt
                        </span>
                    </div>
                )}
                {/* Nummer Overlay */}
                <div className="absolute bottom-3 right-4 text-6xl font-bold text-white/5 leading-none select-none">
                    {service.bigNumber}
                </div>
            </div>

            <div className="flex flex-col flex-1 p-6 md:p-8">
                {/* Label */}
                <span className="text-[0.65rem] font-semibold tracking-[0.22em] text-brand-accent uppercase mb-4 block">
                    {service.leistungsbereichLabel}
                </span>

                {/* Title */}
                <H3 className="mb-1 transition-colors duration-300 group-hover:text-brand-accent">
                    {service.heroTitle.replace("­", "")}
                </H3>
                <p className="text-brand-accent/70 text-sm italic mb-5">{service.heroEmphasis}</p>

                {/* Leistungen Liste */}
                <ul className="space-y-2 mb-6 flex-1">
                    {topLeistungen.map((item) => (
                        <li key={item.nummer} className="flex items-start gap-2.5">
                            <span className="mt-[0.55rem] h-px w-4 bg-brand-accent/50 flex-shrink-0" />
                            <Small className="text-[0.8rem] leading-snug">{item.titel}</Small>
                        </li>
                    ))}
                    {service.leistungen.length > 4 && (
                        <li className="flex items-start gap-2.5">
                            <span className="mt-[0.55rem] h-px w-4 bg-brand-accent/20 flex-shrink-0" />
                            <Small className="text-[0.75rem] text-muted/50 italic">
                                +{service.leistungen.length - 4} weitere Leistungen
                            </Small>
                        </li>
                    )}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-2 text-brand-accent text-sm font-medium mt-auto pt-2 border-t border-border">
                    <span>Leistungsbereich ansehen</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </div>
            </div>
        </Link>
    );
}

const ALL_SERVICES: ServiceConfig[] = [landschaftspflege, gartenbau, innenbereich, sonstiges];

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

            {/* Stats mit Hochzähl-Animation (bestehende Komponente) */}
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
