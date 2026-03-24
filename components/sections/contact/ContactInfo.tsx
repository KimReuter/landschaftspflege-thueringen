"use client";

import { Small, H3 } from "@/components/ui/Type";
import { useReveal } from "@/hooks/useReveal";
import { CONTACT_INFOS, OEFFNUNGSZEITEN } from "@/content/contact/kontakt";

export default function ContactInfo() {
  const { ref, visible } = useReveal(0.08);

  return (
    <div
      ref={ref}
      className="bg-surface-2 p-10 md:p-12 flex flex-col gap-10 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
      }}
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-brand-accent" />
          <Small className="text-brand-accent uppercase tracking-[0.18em] font-semibold">
            So erreichen Sie uns
          </Small>
        </div>

        <H3>
          Franz Eberitsch<br />
          <span className="text-muted font-normal text-base">
            Garten- & Landschaftsbau
          </span>
        </H3>
      </div>

      <div className="space-y-px bg-border">
        {CONTACT_INFOS.map((info) => (
          <div key={info.label} className="bg-surface-2 p-5">
            <Small className="uppercase tracking-widest text-muted/40 block mb-1">
              {info.label}
            </Small>

            {info.href ? (
              <a
                href={info.href}
                className="text-foreground hover:text-brand-accent transition-colors font-medium block mb-0.5"
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  info.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {info.value}
              </a>
            ) : (
              <span className="text-foreground font-medium block mb-0.5">
                {info.value}
              </span>
            )}

            <Small className="text-muted/50">
              {info.sub}
            </Small>
          </div>
        ))}
      </div>

      <div>
        <Small className="uppercase tracking-widest text-muted/40 block mb-3">
          Erreichbarkeit
        </Small>

        <div className="space-y-2">
          {OEFFNUNGSZEITEN.map(({ tag, zeit }) => (
            <div
              key={tag}
              className="flex items-center justify-between"
            >
              <Small className="text-muted/60">{tag}</Small>
              <Small
                className={
                  zeit === "24/7"
                    ? "text-brand-accent font-semibold"
                    : ""
                }
              >
                {zeit}
              </Small>
            </div>
          ))}
        </div>
        <Small className="text-muted/40 mt-3 block">
          Termine auch außerhalb der Zeiten nach Absprache möglich.
        </Small>
      </div>
    </div>
  );
}