"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { NAV, SERVICES, isActive } from "./nav-data";

export function MobileNav({ pathname }: { pathname: string }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setServicesOpen(false);
  }, [pathname]);

  return (
    <nav className="px-3 pt-3">
      {NAV.map((item) => {
        const active = isActive(pathname, item.href);

        if (item.href === "/services") {
          const servicesActive = pathname.startsWith("/services");

          return (
            <div key={item.href} className="mb-1">
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                className={[
                  "w-full flex items-center justify-between rounded-xl px-4 py-3",
                  "text-[15px] font-semibold transition-colors",
                  servicesActive ? "text-brand-accent" : "text-foreground/90 hover:text-brand-accent",
                ].join(" ")}
                aria-expanded={servicesOpen}
                aria-controls="mobile-services-submenu"
              >
                <span>Leistungen</span>
                <ChevronDown className={["h-4 w-4 transition-transform duration-200", servicesOpen ? "rotate-180" : ""].join(" ")} />
              </button>

              <div
                id="mobile-services-submenu"
                className={[
                  "overflow-hidden transition-[max-height,opacity] duration-200",
                  servicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
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
                          "block rounded-xl px-4 py-2.5 text-[14px] font-semibold transition-colors",
                          isItemActive ? "text-brand-accent" : "text-foreground/80 hover:text-brand-accent hover:bg-surface",
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
  );
}