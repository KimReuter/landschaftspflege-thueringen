"use client"

import { H3, P } from "@/components/ui/Type";
import { TIMELINE } from "@/content/about/timeline";
import { useReveal } from "@/hooks/useReveal";

export default function TimelineItem({
  item,
  delay,
  isLast,
}: {
  item: (typeof TIMELINE)[number];
  delay: number;
  isLast: boolean;
}) {
  const { ref, visible } = useReveal(0.15);

  return (
    <div
      ref={ref}
      className="relative flex gap-8 md:gap-14 group cursor-default"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateX(-16px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {/* Jahr */}
      <div className="w-16 md:w-24 flex-shrink-0 text-right pt-1">
        <span
          className={[
            "font-[family-name:var(--font-serif-display)] text-[1.15rem] leading-none tracking-tight transition-colors duration-300",
            isLast
              ? "text-brand-accent"
              : "text-muted/50 group-hover:text-brand-accent",
          ].join(" ")}
        >
          {item.year}
        </span>
      </div>

      {/* Dot */}
      <div className="relative flex-shrink-0 mt-1.5 flex flex-col items-center">
        <div
          className={[
            "w-3 h-3 rounded-full border-2 transition-all duration-400 z-10",
            isLast
              ? "border-brand-accent bg-brand-accent shadow-[0_0_10px_rgba(171,86,27,0.5)]"
              : "border-muted/30 bg-surface-2 group-hover:border-brand-accent group-hover:bg-brand-accent/20",
          ].join(" ")}
        />
      </div>

      {/* Inhalt */}
      <div className={["flex-1 pb-10", isLast ? "" : ""].join(" ")}>
        <H3
          className={[
            "mb-2 text-[1rem] transition-colors duration-300",
            isLast ? "text-brand-accent" : "group-hover:text-brand-accent",
          ].join(" ")}
        >
          {item.title}
        </H3>
        <P className="text-sm leading-relaxed max-w-xl">{item.text}</P>
      </div>
    </div>
  );
}
