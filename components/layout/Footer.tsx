import Link from "next/link";

const MENU = [
  { href: "/", label: "Start" },
  { href: "/services", label: "Leistungen" },
  { href: "/projects", label: "Referenzen" },
  { href: "/about", label: "Über uns" },
  { href: "/contact", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand / Kurzprofil */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-brand-accent" aria-hidden />
              <div className="leading-tight">
                <div className="text-base font-bold text-foreground">Landschaftspflege Thüringen</div>
                <div className="text-sm text-muted">Garten- & Landschaftsbau</div>
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-muted">
              Zuverlässige Ausführung im Garten- & Landschaftsbau – von der ersten Beratung bis zur sauberen
              Übergabe. Regional. Transparent. Termintreu.
            </p>
          </div>

          {/* Adresse */}
          <div>
            <div className="text-sm font-bold tracking-wide text-foreground">ADRESSE</div>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <div className="font-semibold text-foreground/90">Franz Eberitsch</div>
                <div>Rote-Berg-Str. 21</div>
                <div>07333 Unterwellenborn | OT Kamsdorf</div>
                <div>Deutschland</div>
              </li>
              <li className="pt-2">
                <div className="text-foreground/90 font-semibold">Telefon:</div>
                <a className="hover:text-foreground" href="tel:+4915234002234">
                  +49 152 34002234
                </a>
              </li>
              <li>
                <div className="text-foreground/90 font-semibold">E-Mail:</div>
                <a className="hover:text-foreground" href="mailto:franz.eberitsch@web.de">
                  franz.eberitsch@web.de
                </a>
              </li>
            </ul>
          </div>

          {/* Menü */}
          <div>
            <div className="text-sm font-bold tracking-wide text-foreground">MENÜ</div>
            <ul className="mt-5 space-y-2 text-sm">
              {MENU.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted hover:text-brand-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Anfrage / CTA */}
          <div>
            <div className="text-sm font-bold tracking-wide text-foreground">ANFRAGE</div>
            <p className="mt-5 text-sm leading-6 text-muted">
              Sie möchten Ihr Projekt professionell umsetzen lassen? Sprechen Sie direkt mit uns – wir melden
              uns zeitnah zurück.
            </p>

            <div className="mt-6">
              {/* Später ersetzen wir das durch: openModal() */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-brand-accent px-6 py-3 text-sm font-bold text-foreground hover:bg-brand-accent hover:text-white transition-colors"
              >
                ANFRAGE STELLEN
              </Link>

              {/* Optional: sekundärer Kanal */}
              <div className="mt-4 text-sm text-muted">
                oder direkt{" "}
                <a className="font-semibold text-foreground hover:text-brand-accent" href="tel:+4915234002234">
                  anrufen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border bg-surface-2/60">
        <div className="mx-auto max-w-6xl px-4 py-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-muted">
            © {new Date().getFullYear()} Landschaftspflege Thüringen – alle Rechte vorbehalten.
          </div>

          <div className="flex items-center gap-6 text-xs">
            <Link href="/privacy" className="text-muted hover:text-foreground transition-colors">
              Datenschutz
            </Link>
            <Link href="/imprint" className="text-muted hover:text-foreground transition-colors">
              Impressum
            </Link>

            {/* Back-to-top (simple, ohne JS) */}
            <a
              href="#top"
              className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted hover:text-foreground hover:border-brand-accent transition-colors"
              aria-label="Nach oben"
              title="Nach oben"
            >
              ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}