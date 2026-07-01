export const NAV = [
  { href: "/", label: "Start" },
  { href: "/services", label: "Leistungen" },
  { href: "/about", label: "Über uns" },
  { href: "/jobs", label: "Jobs" },
  { href: "/contact", label: "Kontakt" },
] as const;

export const SERVICES = [
  { href: "/services/landschaftspflege", label: "Baumarbeiten" },
  { href: "/services/gartenbau", label: "Grünflächenpflege" },
  { href: "/services/innenbereich", label: "Tiefbau" },
  { href: "/services/sonstiges", label: "Gartenbau" },
  { href: "/services/innenausbau", label: "Innenausbau" },
  { href: "/services/sonstige-leistungen", label: "Sonstige Leistungen" },
] as const;

export function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}