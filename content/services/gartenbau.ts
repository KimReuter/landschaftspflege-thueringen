import type { ServiceConfig } from "./types";

export const gartenbau: ServiceConfig = {
  slug: "gartenbau",
  breadcrumbLabel: "Grünflächenpflege",
  leistungsbereichLabel: "Leistungsbereich 02",
  heroTitle: "Grünflächen­pflege.",
  heroEmphasis: "Gepflegt. Zuverlässig.",
  heroIntro:
    "Von der Objektpflege bis zur Rasenmahd –\nwir halten Grünflächen dauerhaft in Ordnung.\nEin Ansprechpartner. Festpreis. Erledigt.",
  bigNumber: "02",

  leistungen: [
    {
      nummer: "01",
      titel: "Objektpflege als Dauerauftrag",
      text: "Regelmäßige Pflege von Außenanlagen für Firmen, Wohnanlagen und öffentliche Auftraggeber. Verlässlich, saisonal abgestimmt, ein fester Ansprechpartner.",
    },
    {
      nummer: "02",
      titel: "Heckenschnitte",
      text: "Fachgerechter Schnitt von Hecken und Formgehölzen. Sauber ausgeführt, termingerecht und mit Abtransport des Schnittguts auf Wunsch.",
    },
    {
      nummer: "03",
      titel: "Rasenmahd",
      text: "Regelmäßige Mahd privater und gewerblicher Rasenflächen. Zuverlässig, saisonal planbar und mit eigenem Maschinenpark.",
    },
    {
      nummer: "04",
      titel: "Rodung und Entbuschung",
      text: "Flächenhafte Rodung und Entbuschung – auch an Steilhängen mit Raupe und Forstmulcher. Saubere Ergebnisse, effizient ausgeführt.",
    },
    {
      nummer: "05",
      titel: "Rasen & Rasenpflege",
      text: "Neuanlage von Saatflächen und Rollrasen sowie laufende Pflege bestehender Rasenflächen. Sauber ausgeführt, saisonal planbar.",
    },
    {
      nummer: "06",
      titel: "Pflanzungen",
      text: "Standortgerechte Auswahl und fachgerechte Pflanzung von Gehölzen, Stauden und Hecken. Abgestimmt auf Bodenbeschaffenheit, Klima und Kundenwunsch.",
    },
  ],

  vorteile: [
    "Objektpflege als Dauerauftrag",
    "Festpreisgarantie",
    "Eigener Maschinenpark",
    "Termintreue Umsetzung",
    "Lokale Expertise seit 2019",
    "Kein Subunternehmer",
  ],

  warumHeadline: "Verlässlich.\nJede Saison.",
  warumText:
    "Ausgebildete Fachkräfte, moderner Maschinenpark und über 8 Jahre Erfahrung in Thüringen.\nKein Subunternehmer. Kein Versprechen ohne Deckung.",

  gallery: [
    "/images/services/gartenbau/bild1.jpg",
    "/images/services/gartenbau/bild2.jpg",
    "/images/services/gartenbau/bild3.jpg",
    "/images/services/gartenbau/bild4.jpg",
    "/images/services/gartenbau/bild5.jpg",
    "/images/services/gartenbau/bild6.jpg",
  ],
};
