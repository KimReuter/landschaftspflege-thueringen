import type { ServiceConfig } from "./types";

export const gartenbau: ServiceConfig = {
  slug: "gartenbau",
  breadcrumbLabel: "Gartenbau",
  leistungsbereichLabel: "Leistungsbereich 02",
  heroTitle: "Gartenbau.",
  heroEmphasis: "Von der Idee bis zur Fertigstellung.",
  heroIntro:
    "Gartengestaltung, Pflasterarbeiten, Zaunbau, Pflanzungen –\nstrukturiert geplant und handwerklich sauber ausgeführt.\nAlles aus einer Hand, zum Festpreis.",
  bigNumber: "02",

  leistungen: [
    {
      nummer: "01",
      titel: "Gartengestaltung & Neuanlage",
      text: "Von der Planung bis zur Fertigstellung: Wir gestalten Gärten, die zum Grundstück, zur Architektur und zum Nutzer passen. Strukturiert, dauerhaft, ohne Kompromisse.",
    },
    {
      nummer: "02",
      titel: "Pflanzungen",
      text: "Standortgerechte Auswahl und fachgerechte Pflanzung von Gehölzen, Stauden und Hecken. Abgestimmt auf Bodenbeschaffenheit, Klima und Kundenwunsch.",
    },
    {
      nummer: "03",
      titel: "Rasen & Rasenpflege",
      text: "Neuanlage von Saatflächen und Rollrasen sowie laufende Pflege bestehender Rasenflächen. Sauber ausgeführt, saisonal planbar.",
    },
    {
      nummer: "04",
      titel: "Wege & Pflasterarbeiten",
      text: "Einfahrten, Gartenwege und Terrassen in Beton-, Naturstein- oder Klinkeroptik. Solide Unterbauung, präzise Verlegung, langfristig stabil.",
    },
    {
      nummer: "05",
      titel: "Zaunbau & Einfriedung",
      text: "Stabmatten-, Maschendraht- oder Senkrechtzaun – wir beraten, liefern und bauen. Passend zum Grundstück und im Festpreis.",
    },
    {
      nummer: "06",
      titel: "Gartenpflege als Dauerauftrag",
      text: "Regelmäßige Betreuung privater Gärten: Schnitt, Pflege, Unkraut, Laub. Zuverlässig, saisonal abgestimmt, ein fester Ansprechpartner.",
    },
  ],

  vorteile: [
    "Planung & Ausführung aus einer Hand",
    "Festpreisgarantie",
    "Termintreue Umsetzung",
    "Lokale Expertise seit 2010",
    "Natürliche, standortgerechte Pflanzung",
    "Kein Subunternehmer",
  ],

  warumHeadline: "Handwerk.\nNicht Bastelarbeit.",
  warumText:
    "Strukturierte Ausführung, verlässliche Kommunikation und ein Ergebnis,\ndas auch in zehn Jahren noch gut aussieht.",

  // Weitere Bilder hier eintragen wenn Franz sie liefert
  gallery: [
    "/images/services/gartenbau/pflasterarbeiten.jpg",
    "/images/services/gartenbau/parkplatzbau.jpg",
    "/images/services/gartenbau/zaunbau.jpg",
  ],
};