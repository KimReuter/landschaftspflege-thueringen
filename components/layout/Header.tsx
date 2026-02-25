"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import {
    Button

} from "../ui/Button";
const NAV = [
    { href: "/", label: "Start" },
    { href: "/services", label: "Leistungen" },
    { href: "/projects", label: "Referenzen" },
    { href: "/about", label: "Über uns" },
    { href: "/contact", label: "Kontakt" },
];

function isActive(pathname: string, href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
}

export function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 1);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    const headerClass = useMemo(() => {
        // Top of page: transparent over hero, white text
        // On scroll: anthracite surface + subtle border
        return [
            "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
            scrolled ? "bg-surface/95 backdrop-blur border-b border-border" : "bg-transparent",
        ].join(" ");
    }, [scrolled]);

    return (
        <header className={headerClass}>
            <div className="mx-auto max-w-6xl px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Brand */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="h-9 w-9 rounded-md bg-brand-accent" aria-hidden />
                        <div className="leading-tight">
                            <div className={`text-sm font-semibold ${scrolled ? "text-foreground" : "text-white"}`}>
                                Landschaftspflege Thüringen
                            </div>
                            <div className={`text-xs ${scrolled ? "text-muted" : "text-white/80"}`}>
                                Garten- & Landschaftsbau
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV.map((item) => {
                            const active = isActive(pathname, item.href);
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={[
                                        "inline-block text-sm font-semibold transition-transform duration-200 origin-center will-change-transform",
                                        scrolled ? "text-foreground/90" : "text-white/90",
                                        "hover:text-brand-accent hover:scale-115",
                                        active ? "text-brand-accent" : "",
                                    ].join(" ")}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* CTAs */}
                    <Button variant="outline" onClick={() => setIsOpen(true)}>
                        Projekt starten 🚀
                    </Button>

                    {/* Mobile toggle */}
                    <button
                        type="button"
                        className={[
                            "md:hidden inline-flex items-center justify-center rounded-lg border transition",
                            "h-10 w-10", // fixes size so it doesn't jump
                            scrolled
                                ? "border-border text-foreground bg-surface-2 hover:opacity-90"
                                : "border-white/20 text-white bg-white/10 hover:bg-white/15",
                        ].join(" ")}
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-expanded={mobileOpen}
                        aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
                    >
                        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>

                </div>

                {/* Mobile menu */}
                {mobileOpen && (
                    <div className="md:hidden pb-4">
                        <div className={["rounded-xl border p-3", scrolled ? "bg-surface-2 border-border" : "bg-surface/70 border-white/10"].join(" ")}>
                            <div className="flex flex-col gap-2">
                                {NAV.map((item) => {
                                    const active = isActive(pathname, item.href);
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={[
                                                "rounded-lg px-3 py-2 text-sm font-semibold",
                                                active ? "text-brand-accent" : scrolled ? "text-foreground" : "text-white",
                                                scrolled ? "hover:bg-surface" : "hover:bg-white/10",
                                            ].join(" ")}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}
                                <div className="mt-2 flex gap-2">
                                    <a
                                        href="tel:+4915234002234"
                                        className="flex-1 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-semibold text-foreground text-center hover:opacity-90"
                                    >
                                        Anrufen
                                    </a>
                                    <a
                                        href="https://wa.me/4915234002234"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 rounded-lg bg-brand-accent px-3 py-2 text-sm font-semibold text-white text-center hover:opacity-90"
                                    >
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}