"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAV, isActive } from "./nav-data";
import { useHeaderBehavior } from "./useHeaderBehavior";
import { ServicesDropdown } from "./ServicesDropdown";
import { MobileNav } from "./MobileNav";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const { scrolled } = useHeaderBehavior(pathname, mobileOpen, closeMobile);

  const headerClass = useMemo(
    () =>
      [
        "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
        scrolled ? "bg-surface-2 shadow-lg shadow-black/20" : "bg-transparent",
      ].join(" "),
    [scrolled]
  );

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

          {/* Desktop CTA */}
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
              "h-10 w-10",
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

          {/* Mobile drawer */}
          <div
            className={["md:hidden fixed inset-0 z-40", mobileOpen ? "pointer-events-auto" : "pointer-events-none"].join(" ")}
            aria-hidden={!mobileOpen}
          >
            <div
              onClick={closeMobile}
              className={[
                "absolute inset-0 bg-black/65 transition-opacity duration-200",
                mobileOpen ? "opacity-100" : "opacity-0",
              ].join(" ")}
            />

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
                  onClick={closeMobile}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground hover:opacity-90 transition"
                  aria-label="Schließen"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <MobileNav pathname={pathname} />

              {/* Bottom CTA (nur 2 Buttons) */}
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