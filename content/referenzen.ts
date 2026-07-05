export type LeistungsbereichTag =
  | "Baumarbeiten"
  | "Grünflächenpflege"
  | "Tiefbau"
  | "Gartenbau"
  | "Innenausbau"
  | "Sonstige Leistungen";

export interface Referenz {
  id: string;
  title: string;
  tags: LeistungsbereichTag[];
  subtag?: string;
  images: string[];
}

export const SUBTAGS: Partial<Record<LeistungsbereichTag, string[]>> = {
  Baumarbeiten: [
    "Kletterarbeiten & Kronenpflege",
    "Baumfällungen",
    "Wurzelstockentfernung mit Stuppenfräse",
    "Rodung & Entbuschung",
    "Obstbaumschnitt",
  ],
};

const PH = (n: number) => Array.from({ length: n }, (_, i) => `/images/referenzen/placeholder.jpg`);

export const REFERENZEN: Referenz[] = [
  {
    id: "kletterarbeiten-kronenpflege",
    title: "Kletterarbeiten & Kronenpflege",
    tags: ["Baumarbeiten"],
    subtag: "Kletterarbeiten & Kronenpflege",
    images: PH(3),
  },
  {
    id: "baumfaellungen",
    title: "Baumfällungen",
    tags: ["Baumarbeiten"],
    subtag: "Baumfällungen",
    images: PH(6),
  },
  {
    id: "wurzelstockentfernung",
    title: "Wurzelstockentfernung mit Stuppenfräse",
    tags: ["Baumarbeiten"],
    subtag: "Wurzelstockentfernung mit Stuppenfräse",
    images: PH(1),
  },
  {
    id: "rodung-entbuschung",
    title: "Rodung & Entbuschung",
    tags: ["Baumarbeiten"],
    subtag: "Rodung & Entbuschung",
    images: PH(2),
  },
  {
    id: "obstbaumschnitt",
    title: "Obstbaumschnitt",
    tags: ["Baumarbeiten"],
    subtag: "Obstbaumschnitt",
    images: PH(5),
  },
  {
    id: "feuerwehrzufahrt-poessneck",
    title: "Feuerwehrzufahrt Pößneck",
    tags: ["Tiefbau"],
    images: PH(6),
  },
  {
    id: "parkplatz-poessneck",
    title: "Parkplatzbau Pößneck",
    tags: ["Tiefbau", "Gartenbau"],
    images: PH(6),
  },
  {
    id: "baustelle-rudolstadt",
    title: "Baustelle Rudolstadt",
    tags: ["Tiefbau"],
    images: PH(6),
  },
  {
    id: "granitpflaster",
    title: "Granitpflaster",
    tags: ["Tiefbau"],
    images: PH(6),
  },
  {
    id: "hochbeet-1",
    title: "Hochbeet (Holz)",
    tags: ["Gartenbau"],
    images: PH(6),
  },
  {
    id: "hochbeet-2-stein",
    title: "Hochbeet (Stein)",
    tags: ["Gartenbau"],
    images: PH(4),
  },
  {
    id: "innenausbau",
    title: "Innenausbau",
    tags: ["Innenausbau"],
    images: PH(6),
  },
  {
    id: "kammmolchgewaesser",
    title: "Kammmolchgewässer",
    tags: ["Gartenbau"],
    images: PH(6),
  },
  {
    id: "koenitz-aussenanlage",
    title: "Außenanlage Könitz",
    tags: ["Grünflächenpflege", "Gartenbau"],
    images: PH(6),
  },
  {
    id: "l-steinmauer",
    title: "L-Steinmauer",
    tags: ["Gartenbau"],
    images: PH(6),
  },
  {
    id: "mauerbau",
    title: "Mauerbau",
    tags: ["Gartenbau"],
    images: PH(6),
  },
  {
    id: "pflanzung",
    title: "Pflanzungen",
    tags: ["Grünflächenpflege"],
    images: PH(3),
  },
  {
    id: "pflaster-vorwerk",
    title: "Pflaster Vorwerk Gasstation",
    tags: ["Tiefbau"],
    images: PH(5),
  },
  {
    id: "rasengitter",
    title: "Rasengitter",
    tags: ["Gartenbau"],
    images: PH(5),
  },
  {
    id: "teich-seisla",
    title: "Teich Seisla",
    tags: ["Gartenbau"],
    images: PH(6),
  },
  {
    id: "trockenlegung-keller",
    title: "Trockenlegung Keller Pößneck",
    tags: ["Tiefbau"],
    images: PH(6),
  },
];

export const ALL_TAGS: LeistungsbereichTag[] = [
  "Baumarbeiten",
  "Grünflächenpflege",
  "Tiefbau",
  "Gartenbau",
  "Innenausbau",
];
