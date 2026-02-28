import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "secondary";
  className?: string;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, href, onClick, variant = "primary", className }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200";

    const variants = {
      primary:
        "bg-brand-accent text-white hover:opacity-90",
      outline:
        "border-2 border-brand-accent text-foreground hover:bg-brand-accent hover:text-white",
      secondary:
        "border border-border bg-surface text-foreground hover:border-brand-accent hover:text-brand-accent",

    };

    const styles = cn(base, variants[variant], className);

    if (href) {
      return (
        <Link href={href} className={styles}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} onClick={onClick} className={styles}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";