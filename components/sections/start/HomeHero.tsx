"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { H1, P } from "@/components/ui/Type";
import { Button } from "@/components/ui/Button";

const IMAGES = [
  { src: "/images/bannerbilder/Individuelle Pflanzungen 1 .jpg", alt: "Individuelle Pflanzungen" },
  { src: "/images/bannerbilder/Entbuschung mit Forstmulcher Raupe 2 .jpg", alt: "Entbuschung mit Forstmulcher" },
  { src: "/images/bannerbilder/Kletterarbeiten und Kronenpflege 3 .jpg", alt: "Kletterarbeiten und Kronenpflege" },
  { src: "/images/bannerbilder/Parkplatzbau 7.jpg", alt: "Parkplatzbau" },
  { src: "/images/bannerbilder/Zaunbau 5.jpeg", alt: "Zaunbau" },
  { src: "/images/bannerbilder/Trockenbau 10.jpg", alt: "Trockenbau" },
];

const SLIDE_DURATION = 5000;  // 5s sichtbar
const FADE_DURATION  = 1500;  // 1.5s Überblendung

export function HomeHero() {
  const bgRef  = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [loaded, setLoaded]   = useState(false);
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState<number | null>(null);
  const [fading, setFading]   = useState(false);

  // Parallax
  useEffect(() => {
    setLoaded(true);
    const update = () => {
      rafRef.current = null;
      const y = Math.min(window.scrollY * 0.25, 120);
      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(0, ${y}px, 0) scale(1.08)`;
      }
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

  // Slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => {
        const next = (c + 1) % IMAGES.length;
        setPrev(c);
        setFading(true);
        setTimeout(() => {
          setPrev(null);
          setFading(false);
        }, FADE_DURATION);
        return next;
      });
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden -mt-16 pt-16 bg-surface">

      {/* Slideshow Hintergrund */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">

        {/* Vorheriges Bild – faded aus */}
        {prev !== null && (
          <Image
            key={`prev-${prev}`}
            src={IMAGES[prev].src}
            alt={IMAGES[prev].alt}
            fill
            className="object-cover"
            sizes="100vw"
            style={{
              opacity: fading ? 0 : 1,
              transition: `opacity ${FADE_DURATION}ms ease-in-out`,
            }}
          />
        )}

        {/* Aktuelles Bild – faded ein */}
        <Image
          key={`current-${current}`}
          src={IMAGES[current].src}
          alt={IMAGES[current].alt}
          fill
          priority={current === 0}
          className="object-cover"
          sizes="100vw"
          style={{
            opacity: fading ? 1 : 1,
            transition: `opacity ${FADE_DURATION}ms ease-in-out`,
          }}
        />
      </div>

      {/* Overlay – links dunkler, rechts transparenter */}
      <div className="absolute inset-0 bg-gradient-to-r from-surface/80 via-surface/50 to-transparent/10" />
      {/* Boden-Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />

      {/* Körnung für Tiefe */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundSize: "200px 200px" }}
      />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl items-center px-6 md:px-10">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <div
            className="mb-6 inline-flex items-center gap-2 transition-all duration-700"
            style={{ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(12px)" }}
          >
            <span className="h-px w-8 bg-brand-accent" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brand-accent">
              Thüringen · seit 2020
            </span>
          </div>

          {/* Heading */}
          <div
            className="transition-all duration-700 delay-100"
            style={{ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(16px)" }}
          >
            <H1 className="text-white">
              Garten- &<br />Landschaftsbau<br />
              <em className="not-italic text-brand-accent">in Thüringen</em>
            </H1>
          </div>

          {/* Divider */}
          <div
            className="my-6 h-px w-16 bg-white/20 transition-all duration-700 delay-200"
            style={{ opacity: loaded ? 1 : 0 }}
          />

          {/* Text */}
          <div
            className="transition-all duration-700 delay-300"
            style={{ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(12px)" }}
          >
            <P className="text-white/75 text-[1.05rem] leading-relaxed">
              Von professioneller Landschaftspflege bis zur kompletten
              Neugestaltung – <br />zuverlässig, termintreu und alles aus einer Hand.
            </P>
          </div>

          {/* CTA */}
          <div
            className="mt-10 flex items-center gap-4 transition-all duration-700 delay-500"
            style={{ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(12px)" }}
          >
            <Button variant="primary" href="/contact">Projekt starten</Button>
            <a href="#leistungen" className="text-sm text-white/60 hover:text-white/90 transition-colors underline underline-offset-4">
              Leistungen ansehen
            </a>
          </div>

          {/* Trust-Badges */}
          <div
            className="mt-14 flex items-center gap-6 transition-all duration-700 delay-700"
            style={{ opacity: loaded ? 1 : 0 }}
          >
            {["Kostenlose Beratung", "Festpreisgarantie", "Lokaler Betrieb"].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <span className="text-brand-accent text-xs">✓</span>
                <span className="text-[0.7rem] text-white/50 uppercase tracking-wider">{item}</span>
              </div>
            ))}
          </div>

          {/* Slide-Indikatoren */}
          <div className="mt-10 flex items-center gap-2" style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.7s ease 0.9s" }}>
            {IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => { setPrev(current); setCurrent(i); setFading(true); setTimeout(() => { setPrev(null); setFading(false); }, FADE_DURATION); }}
                className="h-[2px] rounded-full transition-all duration-500"
                style={{
                  width: i === current ? "2rem" : "0.75rem",
                  backgroundColor: i === current ? "var(--color-brand-accent, #4a7c59)" : "rgba(255,255,255,0.3)",
                }}
                aria-label={`Bild ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-surface" />
    </section>
  );
}
