"use client"

import { H3, P } from "@/components/ui/Type";
import { TIMELINE } from "@/content/about/timeline";
import { useReveal } from "@/hooks/useReveal";

export default function TimelineItem({
  item,
  delay,
}: {
  item: (typeof TIMELINE)[number];
  delay: number;
}) {
  const { ref, visible } = useReveal(0.15);

  const isLast = item.year === "2024";

  return (
    <div
      ref={ref}
      className="relative flex gap-8 md:gap-12 py-8 transition-all duration-700 group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateX(-16px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="w-16 md:w-20 flex-shrink-0 text-right pt-0.5">
        <span
          className={`font-[family-name:var(--font-serif-display)] text-[1.1rem] leading-none tracking-tight ${
            isLast ? "text-brand-accent" : "text-muted/40"
          }`}
        >
          {item.year}
        </span>
      </div>

      <div className="relative flex-shrink-0 mt-1.5">
        <div
          className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-500 ${
            isLast
              ? "border-brand-accent bg-brand-accent"
              : "border-border bg-surface group-hover:border-brand-accent"
          }`}
        />
      </div>

      <div className="pb-8 border-b border-border/40 flex-1 last:border-0">
        <H3 className="mb-2 text-[1rem]">{item.title}</H3>
        <P className="text-sm leading-relaxed max-w-xl">{item.text}</P>
      </div>
    </div>
  );
}