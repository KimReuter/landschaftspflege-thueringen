export type Project = {
  slug: string;
  category: "Landschaftspflege" | "Gartenbau" | "Innenbereich" | "Sonstiges";
  title: string;
  location: string;
  year: string;
  teaser: string;           // Kurzer Text für die Übersicht
  description: string;      // Langer Text für die Detailseite
  coverImage: string;       // Pfad zum Titelbild
  images: string[];         // Weitere Bilder für die Detailseite
  tags: string[];           // z.B. ["Baumfällung", "Kronenpflege"]
};

export const projects: Project[] = [
  {
    slug: "gartenanlage-saalfeld-2024",
    category: "Gartenbau",
    title: "Gartenanlage Saalfeld",
    location: "Saalfeld, Thüringen",
    year: "2024",
    teaser: "Komplette Neuanlage eines Privatgartens mit Pflasterweg, Rollrasen und Hecke.",
    description: `Auf einem 600 m² großen Grundstück in Saalfeld haben wir eine vollständige Gartenanlage neu gestaltet. 
Dazu gehörten der Abriss der alten Betonplatten, der Bau eines neuen Pflasterweges aus Naturstein, 
die Anlage einer Rollrasenfläche sowie das Einpflanzen einer Hainbuchenhecke als Einfriedung.

Besondere Herausforderung war der abfallende Hang im hinteren Bereich, den wir mit einer Natursteinmauer 
terrassiert und bepflanzt haben. Alle Arbeiten wurden innerhalb von zwei Wochen abgeschlossen.`,
    coverImage: "/images/portfolio/gartenanlage-saalfeld/cover.jpg",
    images: [
      "/images/portfolio/gartenanlage-saalfeld/01.jpg",
      "/images/portfolio/gartenanlage-saalfeld/02.jpg",
      "/images/portfolio/gartenanlage-saalfeld/03.jpg",
    ],
    tags: ["Pflasterarbeiten", "Rollrasen", "Heckenpflanzung", "Terrassierung"],
  },
  {
    slug: "baumfaellung-rudolstadt-2024",
    category: "Landschaftspflege",
    title: "Sturmschaden Rudolstadt",
    location: "Rudolstadt, Thüringen",
    year: "2024",
    teaser: "Notfallbeseitigung nach Sturmschaden – drei Bäume, enger Innenhof, zwei Tage.",
    description: `Nach einem starken Sturm wurden wir für die Notfallbeseitigung von drei umgestürzten 
Bäumen in einem engen Innenhof in Rudolstadt beauftragt. Die Situation erforderte den Einsatz 
unserer Klettertechnik, da kein Großgerät Zufahrt hatte.

Alle drei Bäume wurden sicher gefällt, zerkleinert und abtransportiert. Zusätzlich haben wir 
zwei weitere Bäume auf dem Grundstück auf Standsicherheit geprüft und eine vorsorgende 
Kronenpflege durchgeführt. Abschluss der Arbeiten nach zwei Tagen.`,
    coverImage: "/images/portfolio/baumfaellung-rudolstadt/cover.jpg",
    images: [
      "/images/portfolio/baumfaellung-rudolstadt/01.jpg",
      "/images/portfolio/baumfaellung-rudolstadt/02.jpg",
    ],
    tags: ["Notfallservice", "Kletterarbeiten", "Baumfällung", "Kronenpflege"],
  },
  {
    slug: "objektpflege-gewerbeobjekt-2023",
    category: "Landschaftspflege",
    title: "Objektpflege Gewerbepark",
    location: "Unterwellenborn, Thüringen",
    year: "2023",
    teaser: "Dauerauftrag für die laufende Pflege eines Gewerbeparks mit 8.000 m² Außenfläche.",
    description: `Seit 2023 betreuen wir die Außenanlagen eines Gewerbeparks in Unterwellenborn als 
Dauerauftrag. Das umfasst die regelmäßige Rasenpflege, den saisonalen Gehölzschnitt, 
die Pflege der Staudenflächen sowie die Laubbeseitigung im Herbst.

Zusätzlich übernehmen wir den Winterdienst auf den Zuwegen und Stellflächen. 
Ein fester Ansprechpartner, ein Jahresvertrag, planbare Kosten.`,
    coverImage: "/images/portfolio/objektpflege-gewerbe/cover.jpg",
    images: [
      "/images/portfolio/objektpflege-gewerbe/01.jpg",
      "/images/portfolio/objektpflege-gewerbe/02.jpg",
      "/images/portfolio/objektpflege-gewerbe/03.jpg",
    ],
    tags: ["Objektpflege", "Rasenpflege", "Winterdienst", "Dauerauftrag"],
  },
];