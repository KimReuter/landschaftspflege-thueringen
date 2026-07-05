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
    images: [
      "/images/referenzen/Baumpflege 01/Kletterarbeiten und Kronenpflege.jpg",
      "/images/referenzen/Baumpflege 01/Kronenpflege .JPG",
      "/images/referenzen/Baumpflege 01/Kronenpflege.jpg",
    ],
  },
  {
    id: "baumfaellungen",
    title: "Baumfällungen",
    tags: ["Baumarbeiten"],
    subtag: "Baumfällungen",
    images: [
      "/images/referenzen/Baumpflege 01/Baumfällungen.jpg",
      "/images/referenzen/Baumpflege 01/Baumfällungen 1.jpg",
      "/images/referenzen/Baumpflege 01/Baumfällung 3.jpg",
      "/images/referenzen/Baumpflege 01/Baumfällungen 4.jpg",
      "/images/referenzen/Baumpflege 01/Baumfällungen 5.jpg",
      "/images/referenzen/Baumpflege 01/Baumfällungen (1).jpg",
      "/images/referenzen/Baumpflege 01/Foto 02.07.26, 09 41 13.jpg",
      "/images/referenzen/Baumpflege 01/Foto 02.07.26, 09 43 44.jpg",
      "/images/referenzen/Baumpflege 01/Foto 02.07.26, 09 44 32.jpg",
      "/images/referenzen/Baumpflege 01/Foto 02.07.26, 09 45 26.jpg",
      "/images/referenzen/Baumpflege 01/Foto 02.07.26, 09 47 11.jpg",
    ],
  },
  {
    id: "wurzelstockentfernung",
    title: "Wurzelstockentfernung mit Stuppenfräse",
    tags: ["Baumarbeiten"],
    subtag: "Wurzelstockentfernung mit Stuppenfräse",
    images: [
      "/images/referenzen/Baumpflege 01/Wurzelstockentfernung mit Stuppenfräse.jpg",
    ],
  },
  {
    id: "rodung-entbuschung",
    title: "Rodung & Entbuschung",
    tags: ["Baumarbeiten"],
    subtag: "Rodung & Entbuschung",
    images: [
      "/images/referenzen/Baumpflege 01/Entbuschung Rodung mit Forstmulcher Raupe.jpg",
      "/images/referenzen/Baumpflege 01/Entbuschung Rodung mit Forstraupe.JPG",
      "/images/referenzen/Baumpflege 01/Entbuschung Rodung mit Traktor und Häcksler.JPG",
    ],
  },
  {
    id: "obstbaumschnitt",
    title: "Obstbaumschnitt",
    tags: ["Baumarbeiten"],
    subtag: "Obstbaumschnitt",
    images: [
      "/images/referenzen/Baumpflege 01/Obstbaumschnitt/Obstbaumschnitt 1 Meura.JPG",
      "/images/referenzen/Baumpflege 01/Obstbaumschnitt/Obstbaumschnitt 2 Meura.JPG",
      "/images/referenzen/Baumpflege 01/Obstbaumschnitt/Obstbaumschnitt Altbaumschnitt.jpg",
      "/images/referenzen/Baumpflege 01/Obstbaumschnitt/Obstbaumschnitt Jungbaum 1.jpg",
      "/images/referenzen/Baumpflege 01/Obstbaumschnitt/Obstbaumschnitt Jungbaum 2.jpg",
    ],
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
