import { cn } from "@/lib/utils";
import type { ElementType } from "react";

type TypeProps<T extends ElementType> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
};

function createType<T extends ElementType>(defaultTag: T, baseClass: string) {
  return function TypeComponent({ as, children, className }: TypeProps<T>) {
    const Tag = (as ?? defaultTag) as ElementType;
    return <Tag className={cn(baseClass, className)}>{children}</Tag>;
  };
}

export const H1 = createType(
  "h1",
  "font-[var(--font-serif)] text-[var(--text-h1)] leading-[var(--lh-tight)] tracking-[var(--track-tight)] text-foreground"
);

export const H2 = createType(
  "h2",
  "font-[var(--font-serif)] text-[var(--text-h2)] leading-[var(--lh-snug)] tracking-[var(--track-tight)] text-foreground"
);

export const H3 = createType(
  "h3",
  "font-[var(--font-sans)] text-[var(--text-h3)] leading-[var(--lh-snug)] font-semibold text-foreground"
);

export const P = createType(
  "p",
  "font-[var(--font-sans)] text-[var(--text-body)] leading-[var(--lh-normal)] text-muted"
);

export const Small = createType(
  "p",
  "font-[var(--font-sans)] text-[var(--text-small)] leading-[var(--lh-normal)] text-muted"
);