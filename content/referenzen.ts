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
  Grünflächenpflege: [
    "Objektpflege & Heckenschnitte",
    "Pflanzungen",
  ],
  Tiefbau: [
    "Pflasterarbeiten aller Art",
    "Abwasser / Wasser / Strom",
    "Trockenlegung Keller",
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
      "/images/referenzen/Baumpflege 01/Kronenpflege .jpg",
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
      "/images/referenzen/Baumpflege 01/Entbuschung Rodung mit Forstraupe.jpg",
      "/images/referenzen/Baumpflege 01/Entbuschung Rodung mit Traktor und Häcksler.jpg",
    ],
  },
  {
    id: "obstbaumschnitt",
    title: "Obstbaumschnitt",
    tags: ["Baumarbeiten"],
    subtag: "Obstbaumschnitt",
    images: [
      "/images/referenzen/Baumpflege 01/Obstbaumschnitt/Obstbaumschnitt 1 Meura.jpg",
      "/images/referenzen/Baumpflege 01/Obstbaumschnitt/Obstbaumschnitt 2 Meura.jpg",
      "/images/referenzen/Baumpflege 01/Obstbaumschnitt/Obstbaumschnitt Altbaumschnitt.jpg",
      "/images/referenzen/Baumpflege 01/Obstbaumschnitt/Obstbaumschnitt Jungbaum 1.jpg",
      "/images/referenzen/Baumpflege 01/Obstbaumschnitt/Obstbaumschnitt Jungbaum 2.jpg",
    ],
  },
  {
    id: "pflasterarbeiten-rudolstadt",
    title: "Pflasterarbeiten Rudolstadt Mücke",
    tags: ["Tiefbau"],
    subtag: "Pflasterarbeiten aller Art",
    images: PH(6),
  },
  {
    id: "pflasterarbeiten-koenitz",
    title: "Pflasterarbeiten Könitz",
    tags: ["Tiefbau"],
    subtag: "Pflasterarbeiten aller Art",
    images: PH(6),
  },
  {
    id: "drainage-pflaster-poessneck",
    title: "Drainage Pflaster Pößneck",
    tags: ["Tiefbau"],
    subtag: "Pflasterarbeiten aller Art",
    images: PH(6),
  },
  {
    id: "feuerwehrzufahrt-poessneck",
    title: "Feuerwehrzufahrt Pößneck",
    tags: ["Tiefbau"],
    subtag: "Pflasterarbeiten aller Art",
    images: PH(6),
  },
  {
    id: "rasengitter-beton",
    title: "Rasengitter Beton",
    tags: ["Tiefbau"],
    subtag: "Pflasterarbeiten aller Art",
    images: PH(5),
  },
  {
    id: "gasstation-schmiedefeld",
    title: "Beton-Pflaster Gasstation Schmiedefeld",
    tags: ["Tiefbau"],
    subtag: "Pflasterarbeiten aller Art",
    images: PH(5),
  },
  {
    id: "granitpflaster",
    title: "Granitpflaster Katzensteig",
    tags: ["Tiefbau"],
    subtag: "Pflasterarbeiten aller Art",
    images: PH(6),
  },
  {
    id: "abwasser-wasser-strom",
    title: "Abwasser / Wasser / Strom",
    tags: ["Tiefbau"],
    subtag: "Abwasser / Wasser / Strom",
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
    title: "Objektpflege & Heckenschnitte",
    tags: ["Grünflächenpflege"],
    subtag: "Objektpflege & Heckenschnitte",
    images: [
      "/images/referenzen/Grünflächenpflege 02/Objektpflege.jpeg",
      "/images/referenzen/Grünflächenpflege 02/Heckenschnitte.jpg",
      "/images/referenzen/Grünflächenpflege 02/Objektpflege Heckenschnitte.jpg",
    ],
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
    subtag: "Pflanzungen",
    images: [
      "/images/referenzen/Grünflächenpflege 02/Pflanzung/Baumpflanzung 1.jpg",
      "/images/referenzen/Grünflächenpflege 02/Pflanzung/Baumpflanzung 2.jpg",
      "/images/referenzen/Grünflächenpflege 02/Pflanzung/CNIA1516.jpg",
      "/images/referenzen/Grünflächenpflege 02/Pflanzung/Foto 12.12.25, 11 45 58.jpg",
      "/images/referenzen/Grünflächenpflege 02/Pflanzung/QQJG0859.jpg",
      "/images/referenzen/Grünflächenpflege 02/Pflanzung/Strauch-Pflanzung 3.jpg",
    ],
  },
  {
    id: "teich-seisla",
    title: "Teich Seisla",
    tags: ["Gartenbau"],
    images: PH(6),
  },
  {
    id: "trockenlegung-keller",
    title: "Trockenlegung Keller",
    tags: ["Tiefbau"],
    subtag: "Trockenlegung Keller",
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
