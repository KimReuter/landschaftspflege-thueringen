"use client";

import { H2, P, Small } from "@/components/ui/Type";
import { useReveal } from "@/hooks/useReveal";

function VorteilItem({ text, delay }: { text: string; delay: number }) {
  const item = useReveal<HTMLDivElement>(0.1);

  return (
    <div
      ref={item.ref}
      className="bg-surface-2 px-6 py-5 flex items-center gap-3 transition-all duration-500"
      style={{
        opacity: item.visible ? 1 : 0,
        transform: item.visible ? "none" : "translateY(12px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <span className="text-brand-accent text-xs flex-shrink-0">✓</span>
      <Small className="text-[0.8rem]">{text}</Small>
    </div>
  );
}

function nlToBr(text: string) {
  return text.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      {i < text.split("\n").length - 1 && <br />}
    </span>
  ));
}

export function ServiceVorteile({
  headline,
  text,
  vorteile,
}: {
  headline: string;
  text: string;
  vorteile: string[];
}) {
  const block = useReveal<HTMLDivElement>();

  return (
    <section className="border-t border-border py-24 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            ref={block.ref}
            className="transition-all duration-700"
            style={{
              opacity: block.visible ? 1 : 0,
              transform: block.visible ? "none" : "translateY(20px)",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-brand-accent" />
              <Small className="text-brand-accent uppercase tracking-[0.18em] text-[0.7rem] font-semibold">
                Warum wir
              </Small>
            </div>

            <H2 className="mb-6">{nlToBr(headline)}</H2>

            <P className="max-w-md leading-relaxed whitespace-pre-line">{text}</P>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
            {vorteile.map((v, i) => (
              <VorteilItem key={v} text={v} delay={i * 70} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}