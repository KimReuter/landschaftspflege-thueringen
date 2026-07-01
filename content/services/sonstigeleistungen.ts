import type { ServiceConfig } from "./types";

export const sonstigeleistungen: ServiceConfig = {
  slug: "sonstige-leistungen",
  breadcrumbLabel: "Sonstige Leistungen",
  leistungsbereichLabel: "Leistungsbereich 06",
  heroTitle: "Sonstige Leistungen.",
  heroEmphasis: "Was das Projekt braucht.",
  heroIntro:
    "Brennholz, Winterdienst, Holzprodukte und mehr –\nwas gebraucht wird, wird erledigt.\nSolide, direkt, zum Festpreis.",
  bigNumber: "06",

  leistungen: [
    {
      nummer: "01",
      titel: "Brennholzverkauf",
      text: "Ofenfertiges Brennholz aus regionaler Produktion. Trocken, gespalten und auf Wunsch frei Haus geliefert.",
    },
    {
      nummer: "02",
      titel: "Winterdienst",
      text: "Zuverlässiger Räum- und Streudienst für Firmen und Privatkunden. Vertragsbasiert, pünktlich, mit eigenem Maschinenpark.",
    },
    {
      nummer: "03",
      titel: "Holzprodukte aus Lärche",
      text: "Hochwertige Holzprodukte aus heimischer Lärche – langlebig, witterungsbeständig und regional produziert.",
    },
    {
      nummer: "04",
      titel: "Verkauf von Mutterboden",
      text: "Hochwertiger Mutterboden für Garten, Rasenflächen und Bepflanzungen. Lose oder im Big Bag, auf Wunsch geliefert.",
    },
    {
      nummer: "05",
      titel: "Dachrinnenreinigung",
      text: "Professionelle Reinigung von Dachrinnen und Fallrohren. Schnell, sauber und mit Kontrolle auf Schäden.",
    },
  ],

  vorteile: [
    "Regionale Produkte",
    "Festpreisgarantie",
    "Eigener Maschinenpark",
    "Termintreue Umsetzung",
    "Lieferung auf Wunsch",
    "Kein Subunternehmer",
  ],

  warumHeadline: "Kein Job zu klein.\nKein Job zu groß.",
  warumText:
    "Egal ob Brennholz, Winterdienst oder Dachrinnenreinigung –\nwir nehmen jedes Projekt ernst.\nStrukturiert, direkt, zum vereinbarten Preis.",

  gallery: [
    "/images/services/sonstige-leistungen/bild1.jpg",
    "/images/services/sonstige-leistungen/bild2.jpg",
    "/images/services/sonstige-leistungen/bild3.jpg",
    "/images/services/sonstige-leistungen/bild4.jpg",
    "/images/services/sonstige-leistungen/bild5.jpg",
    "/images/services/sonstige-leistungen/bild6.jpg",
  ],
};
