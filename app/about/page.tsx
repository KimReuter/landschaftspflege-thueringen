// app/ueber-uns/page.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import QuoteSection from "@/components/sections/about/QuoteSection";
import Hero from "@/components/sections/about/Hero";
import InhaberSection from "@/components/sections/about/InhaberSection";
import WerteSection from "@/components/sections/about/WerteSection";
import TimelineSection from "@/components/sections/about/TimelineSection";
import BildBlock from "@/components/sections/about/Bildblock";
import CtaSection from "@/components/sections/about/CtaSection";

export default function UeberUnsPage() {
  const [loaded, setLoaded] = useState(false);
  const parallaxRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setLoaded(true);

    const update = () => {
      rafRef.current = null;
      if (!parallaxRef.current) return;

      const y = Math.min(window.scrollY * 0.18, 80);
      parallaxRef.current.style.transform = `translate3d(0,${y}px,0) scale(1.06)`;
    };

    const onScroll = () => {
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <main className="bg-surface min-h-screen overflow-x-hidden">
      <Hero loaded={loaded} parallaxRef={parallaxRef} />
      <QuoteSection />
      <InhaberSection />
      <WerteSection />
      <TimelineSection />
      <BildBlock />
      <CtaSection />
    </main>
  );
}
