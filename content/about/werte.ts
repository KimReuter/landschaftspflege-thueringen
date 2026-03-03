export type Wert = {
  nummer: string;
  titel: string;
  text: string;
};

export const WERTE: readonly Wert[] = [
  {
    nummer: "01",
    titel: "Klarheit",
    text: "Kein Kleingedrucktes. Kein Nachkalkulieren. Was wir zusagen, gilt – schriftlich und mündlich.",
  },
  {
    nummer: "02",
    titel: "Handwerk",
    text: "Kein Subunternehmer. Unsere eigenen Leute führen aus, was besprochen wurde. Punkt.",
  },
  {
    nummer: "03",
    titel: "Region",
    text: "Verwurzelt in Thüringen. Kurze Wege, lokale Kenntnis, ein Ansprechpartner der antwortet.",
  },
];