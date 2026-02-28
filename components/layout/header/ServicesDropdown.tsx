"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SERVICES } from "./nav-data";

export function ServicesDropdown({ scrolled, pathname }: { scrolled: boolean; pathname: string }) {
  const [open, setOpen] = useState(false);
  const active = pathname.startsWith("/services");

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
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
        <ChevronDown className={["h-4 w-4 transition-transform duration-200", open ? "rotate-180" : ""].join(" ")} />
      </button>

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
                    "block rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors",
                    isItemActive ? "text-brand-accent" : "text-foreground/90 hover:text-brand-accent hover:bg-surface",
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