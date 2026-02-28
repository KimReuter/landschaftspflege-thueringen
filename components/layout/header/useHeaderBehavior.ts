"use client";

import { useEffect, useState } from "react";

export function useHeaderBehavior(pathname: string, mobileOpen: boolean, closeMobile: () => void) {
  const [scrolled, setScrolled] = useState(false);

  // Scroll -> scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 1);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Route change -> close mobile
  useEffect(() => {
    closeMobile();
  }, [pathname, closeMobile]);

  // Body lock
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // ESC -> close mobile
  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen, closeMobile]);

  return { scrolled };
}