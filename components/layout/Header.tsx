"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";

const NAV = [
    { href: "/", label: "Start" },
    { href: "/services", label: "Leistungen" },
    { href: "/projects", label: "Referenzen" },
    { href: "/about", label: "Über uns" },
    { href: "/contact", label: "Kontakt" },
];

const SERVICES = [
    { href: "/services/landschaftspflege", label: "Landschaftspflege" },
    { href: "/services/gartenbau", label: "Gartenbau" },
    { href: "/services/innenbereich", label: "Innenbereich" },
    { href: "/services/sonstiges", label: "Sonstige" },
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
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);


    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 1);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => (document.body.style.overflow = "");
    }, [mobileOpen]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMobileOpen(false);
        };
        if (mobileOpen) window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [mobileOpen]);


    useEffect(() => {
        // beim Navigationswechsel wieder schließen
        setMobileServicesOpen(false);
    }, [pathname]);

    const headerClass = useMemo(() => {
        // Top of page: transparent over hero, white text
        // On scroll: anthracite surface + subtle border
        return [
            "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
            scrolled ? "bg-surface-2 shadow-lg shadow-black/20" : "bg-transparent",
        ].join(" ");
    }, [scrolled]);

    return (
        <header className={headerClass}>
            <div className="relative mx-auto max-w-6xl px-4">
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
                            if (item.href === "/services") {
                                return <ServicesDropdown key={item.href} scrolled={scrolled} pathname={pathname} />;
                            }

                            const active = isActive(pathname, item.href);

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={[
                                        "inline-block text-sm font-semibold transition-all duration-200 origin-center will-change-transform",
                                        scrolled ? "text-foreground/90" : "text-white/90",
                                        "hover:text-brand-accent hover:scale-110",
                                        active ? "text-brand-accent" : "",
                                    ].join(" ")}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop CTA (mobile: hidden) */}
                    <div className="hidden md:block">
                        <Button variant="outline" onClick={() => setIsOpen(true)}>
                            Projekt starten 🚀
                        </Button>
                    </div>

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

                    {/* Mobile menu: premium drawer */}
                    <div
                        className={[
                            "md:hidden fixed inset-0 z-40",
                            mobileOpen ? "pointer-events-auto" : "pointer-events-none",
                        ].join(" ")}
                        aria-hidden={!mobileOpen}
                    >
                        {/* Backdrop */}
                        <div
                            onClick={() => setMobileOpen(false)}
                            className={[
                                "absolute inset-0 bg-black/65 transition-opacity duration-200",
                                mobileOpen ? "opacity-100" : "opacity-0",
                            ].join(" ")}
                        />

                        {/* Drawer */}
                        <div
                            className={[
                                "absolute right-0 top-0 h-full w-[86%] max-w-sm",
                                "bg-surface-2 border-l border-border shadow-2xl",
                                "transition-transform duration-300 ease-out",
                                mobileOpen ? "translate-x-0" : "translate-x-full",
                                "pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]",
                            ].join(" ")}
                            role="dialog"
                            aria-modal="true"
                            aria-label="Navigation"
                        >
                            {/* Top bar */}
                            <div className="flex items-center justify-between px-5 h-16 border-b border-border">
                                <div className="flex items-center gap-2">
                                    <div className="h-9 w-9 rounded-md bg-brand-accent" aria-hidden />
                                    <div className="leading-tight">
                                        <div className="text-sm font-semibold text-foreground">Landschaftspflege Thüringen</div>
                                        <div className="text-xs text-muted">Garten- & Landschaftsbau</div>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setMobileOpen(false)}
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground hover:opacity-90 transition"
                                    aria-label="Schließen"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Nav */}
                            <nav className="px-3 pt-3">
                                {NAV.map((item) => {
                                    const active = isActive(pathname, item.href);

                                    // MOBILE: Leistungen mit Submenu
                                    if (item.href === "/services") {
                                        const servicesActive = pathname.startsWith("/services");

                                        return (
                                            <div key={item.href} className="mb-1">
                                                <button
                                                    type="button"
                                                    onClick={() => setMobileServicesOpen((v) => !v)}
                                                    className={[
                                                        "w-full flex items-center justify-between rounded-xl px-4 py-3",
                                                        "text-[15px] font-semibold transition-colors",
                                                        servicesActive ? "text-brand-accent" : "text-foreground/90 hover:text-brand-accent",
                                                    ].join(" ")}
                                                    aria-expanded={mobileServicesOpen}
                                                    aria-controls="mobile-services-submenu"
                                                >
                                                    <span>Leistungen</span>
                                                    <ChevronDown
                                                        className={[
                                                            "h-4 w-4 transition-transform duration-200",
                                                            mobileServicesOpen ? "rotate-180" : "rotate-0",
                                                        ].join(" ")}
                                                        aria-hidden
                                                    />
                                                </button>

                                                {/* Submenu */}
                                                <div
                                                    id="mobile-services-submenu"
                                                    className={[
                                                        "overflow-hidden transition-[max-height,opacity] duration-200",
                                                        mobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                                                    ].join(" ")}
                                                >
                                                    <div className="mt-1 space-y-1 pl-3 border-l border-border ml-4">
                                                        {SERVICES.map((s) => {
                                                            const isItemActive = pathname === s.href;

                                                            return (
                                                                <Link
                                                                    key={s.href}
                                                                    href={s.href}
                                                                    className={[
                                                                        "block rounded-xl px-4 py-2.5",
                                                                        "text-[14px] font-semibold transition-colors",
                                                                        isItemActive
                                                                            ? "text-brand-accent"
                                                                            : "text-foreground/80 hover:text-brand-accent hover:bg-surface",
                                                                    ].join(" ")}
                                                                >
                                                                    {s.label}
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }

                                    // Standard Mobile Item
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={[
                                                "flex items-center justify-between rounded-xl px-4 py-3",
                                                "text-[15px] font-semibold transition-colors",
                                                active ? "text-brand-accent" : "text-foreground/90 hover:text-brand-accent",
                                            ].join(" ")}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}
                            </nav>

                            {/* CTA zone */}
                            <div className="mt-16 px-8 pb-10">
                                <div className="flex gap-4">

                                    <a
                                        href="tel:+4915234002234"
                                        className="flex-1 rounded-full border border-border py-4 text-center text-sm font-semibold text-foreground transition hover:border-brand-accent hover:text-brand-accent"
                                    >
                                        Anrufen
                                    </a>

                                    <a
                                        href="https://wa.me/4915234002234"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 rounded-full bg-brand-accent py-4 text-center text-sm font-semibold text-white shadow-lg shadow-black/30 transition hover:opacity-90"
                                    >
                                        WhatsApp
                                    </a>

                                </div>

                                <div className="mt-6 text-center text-xs text-muted tracking-wide">
                                    Antwort meist innerhalb von 24 Stunden
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </header>

    );
}

function ServicesDropdown({
    scrolled,
    pathname,
}: {
    scrolled: boolean;
    pathname: string;
}) {
    const [open, setOpen] = useState(false);
    const active = pathname.startsWith("/services");

    return (
        <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            {/* Trigger */}
            <button
                type="button"
                onFocus={() => setOpen(true)}
                onBlur={() => setOpen(false)}
                onKeyDown={(e) => {
                    if (e.key === "Escape") setOpen(false);
                }}
                className={[
                    "inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200",
                    "origin-center will-change-transform hover:scale-110",
                    scrolled ? "text-foreground/90" : "text-white/90",
                    "hover:text-brand-accent",
                    active ? "text-brand-accent" : "",
                ].join(" ")}
                aria-haspopup="menu"
                aria-expanded={open}
            >
                Leistungen
                <ChevronDown
                    className={[
                        "h-4 w-4 transition-transform duration-200",
                        open ? "rotate-180" : "rotate-0",
                    ].join(" ")}
                    aria-hidden
                />
            </button>

            {/* Menu */}
            <div
                className={[
                    "absolute left-0 top-full pt-3",
                    open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none",
                    "transition-all duration-150",
                ].join(" ")}
            >
                <div className="w-48 rounded-2xl border border-border bg-surface-2 shadow-2xl shadow-black/30 overflow-hidden">
                    <div className="p-2">
                        {SERVICES.map((s) => {
                            const isItemActive = pathname === s.href;
                            return (
                                <Link
                                    key={s.href}
                                    href={s.href}
                                    className={[
                                        "flex items-center justify-between rounded-xl px-3 py-2.5",
                                        "text-sm font-semibold transition-colors",
                                        isItemActive
                                            ? "text-brand-accent"
                                            : "text-foreground/90 hover:text-brand-accent hover:bg-surface",
                                    ].join(" ")}
                                    onClick={() => setOpen(false)}
                                >
                                    {s.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}