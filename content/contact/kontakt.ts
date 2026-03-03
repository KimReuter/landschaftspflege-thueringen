export const CONTACT_INFOS = [
  {
    label: "Telefon",
    value: "+49 152 3400 2234",
    href: "tel:+4915234002234",
    sub: "Mo–Fr · 7:00 – 18:00 Uhr",
  },
  {
    label: "WhatsApp",
    value: "Nachricht schreiben",
    href: "https://wa.me/4915234002234",
    sub: "Schnelle Antwort garantiert",
  },
  {
    label: "E-Mail",
    value: "franz.eberitsch@web.de",
    href: "mailto:franz.eberitsch@web.de",
    sub: "Antwort innerhalb 24h",
  },
  {
    label: "Adresse",
    value: "Rote-Berg-Str. 21",
    href: null,
    sub: "07333 Unterwellenborn, Thüringen",
  },
] as const;

export const OEFFNUNGSZEITEN = [
  { tag: "Montag – Freitag", zeit: "07:00 – 18:00" },
  { tag: "Samstag", zeit: "08:00 – 13:00" },
  { tag: "Notfallservice", zeit: "24/7" },
] as const;

export const LEISTUNGEN = [
  "Bitte wählen...",
  "Landschaftspflege",
  "Baumarbeiten / Baumpflege",
  "Rodung & Entbuschung",
  "Gartenbau / Gartengestaltung",
  "Pflasterarbeiten",
  "Zaunbau",
  "Trockenbau / Innenausbau",
  "Tiefbau",
  "Winterdienst",
  "Sonstiges",
] as const;

export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.847!2d11.4302271!3d50.6441287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1570f78fb59cb%3A0x9d1e1ca6d2da43ac!2sRotebergstra%C3%9Fe%2021%2C%2007334%20Unterwellenborn!5e0!3m2!1sde!2sde!4v1700000000000";