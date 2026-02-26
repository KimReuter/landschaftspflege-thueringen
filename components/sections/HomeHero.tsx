"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { H1, P } from "@/components/ui/Type";
import { Button } from "@/components/ui/Button";

export function HomeHero() {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      rafRef.current = null;

      // sanfter Parallax
      const y = Math.min(window.scrollY * 0.25, 120);

      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(0, ${y}px, 0) scale(1.08)`;
      }
    };

    const onScroll = () => {
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      className="
        relative w-full min-h-[100svh] overflow-hidden
        -mt-16 pt-16
        bg-black
      "
    >
      {/* Background Layer */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/images/landschaftspflege/objektpflege.jpg"
          alt="Garten- und Landschaftsbau in Thüringen"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl items-center px-4">
        <div className="max-w-3xl">
          <H1 className="text-white">
            Garten- & Landschaftsbau in Thüringen
          </H1>

          <P className="mt-6 text-white/85">
            Von professioneller Landschaftspflege bis zur kompletten
            Neugestaltung – zuverlässig, termintreu und alles aus einer Hand.
          </P>

          <div className="mt-10">
            <Button variant="primary">
              Projekt starten
            </Button>
          </div>
        </div>
      </div>

      {/* Subtiler Fade nach unten (verhindert harte Kante) */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}