import { cn } from "@/lib/utils";
import type { ReactNode, ElementType } from "react";

type TypeProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
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
  "font-[family-name:var(--font-serif-display)] text-[clamp(2.25rem,4vw,3.75rem)] leading-[1.1] tracking-[-0.02em] text-foreground"
);

export const H2 = createType(
  "h2",
  "font-[family-name:var(--font-serif-display)] text-[clamp(1.5rem,2.2vw,2.25rem)] leading-[1.25] tracking-[-0.02em] text-foreground"
);

export const H3 = createType(
  "h3",
  "font-[family-name:var(--font-geist-sans)] text-[1.125rem] leading-[1.25] font-semibold text-foreground"
);

export const P = createType(
  "p",
  "font-[family-name:var(--font-geist-sans)] text-[1rem] leading-[1.6] text-muted"
);

export const Small = createType(
  "p",
  "font-[family-name:var(--font-geist-sans)] text-[0.875rem] leading-[1.6] text-muted"
);