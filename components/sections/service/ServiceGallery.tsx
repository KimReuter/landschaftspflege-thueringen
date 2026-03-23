"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { Small } from "@/components/ui/Type";

export function ServiceGallery({ images }: { images: string[] }) {
  const { ref, visible } = useReveal(0.05);

  if (images.length === 0) return null;

  return (
    <section
      ref={ref}
      className="px-4 md:px-10 py-16 md:py-24"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-10">
          <span className="h-px w-8 bg-brand-accent" />
          <Small className="text-brand-accent uppercase tracking-[0.18em] text-[0.7rem] font-semibold">
            Fotodokumentation
          </Small>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
          {images.map((src, i) => (
            <div
              key={i}
              className={`relative overflow-hidden bg-surface-2 ${
                i === 0 && images.length > 2 ? "col-span-2 h-72 md:h-96" : "h-56 md:h-64"
              }`}
            >
              <Image
                src={src}
                alt={`Referenzbild ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
