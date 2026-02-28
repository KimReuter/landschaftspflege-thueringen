export const NAV = [
  { href: "/", label: "Start" },
  { href: "/services", label: "Leistungen" },
  { href: "/projects", label: "Referenzen" },
  { href: "/about", label: "Über uns" },
  { href: "/contact", label: "Kontakt" },
] as const;

export const SERVICES = [
  { href: "/services/landschaftspflege", label: "Landschaftspflege" },
  { href: "/services/gartenbau", label: "Gartenbau" },
  { href: "/services/innenbereich", label: "Innenbereich" },
  { href: "/services/sonstiges", label: "Sonstige" },
] as const;

export function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}