"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { H3, Small } from "@/components/ui/Type";
import type { ServiceConfig } from "@/content/services";

// Bilder hier eintragen sobald Franz sie liefert
export const SERVICE_IMAGES: Record<string, string | null> = {
    landschaftspflege: null,
    gartenbau: null,
    innenbereich: null,
    sonstiges: null,
};

export function ServiceCard({ service, delay }: { service: ServiceConfig; delay: number }) {
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
            {/* Hover-Akzentlinie */}
            <div className="absolute top-0 left-0 h-[2px] w-0 bg-brand-accent transition-all duration-500 group-hover:w-full z-10" />

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
                <div className="absolute bottom-3 right-4 text-6xl font-bold text-white/5 leading-none select-none">
                    {service.bigNumber}
                </div>
            </div>

            <div className="flex flex-col flex-1 p-6 md:p-8">
                <span className="text-[0.65rem] font-semibold tracking-[0.22em] text-brand-accent uppercase mb-4 block">
                    {service.leistungsbereichLabel}
                </span>

                <H3 className="mb-1 transition-colors duration-300 group-hover:text-brand-accent">
                    {service.heroTitle.replace("­", "")}
                </H3>
                <p className="text-brand-accent/70 text-sm italic mb-5">{service.heroEmphasis}</p>

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

                <div className="flex items-center gap-2 text-brand-accent text-sm font-medium mt-auto pt-2 border-t border-border">
                    <span>Mehr erfahren</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </div>
            </div>
        </Link>
    );
}
