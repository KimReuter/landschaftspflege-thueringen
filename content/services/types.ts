export type LeistungItem = {
  nummer: string;
  titel: string;
  text: string;
};

export type SlugType = "landschaftspflege" | "gartenbau" | "innenbereich" | "sonstiges" | "innenausbau" | "sonstige-leistungen";

export type ServiceConfig = {
  slug: SlugType;
  breadcrumbLabel: string;
  leistungsbereichLabel: string; // z.B. "Leistungsbereich 02"
  heroTitle: string; // erste Zeile (z.B. "Gartenbau.")
  heroEmphasis: string; // kursiv/farbig (z.B. "Von der Idee bis zur Fertigstellung.")
  heroIntro: string;
  bigNumber: "01" | "02" | "03" | "04" | "05" | "06";
  warumHeadline: string; // inkl. <br/> im Component via \n
  warumText: string;
  leistungen: LeistungItem[];
  vorteile: string[];
  gallery?: string[]; // Bildpfade für die Fotogalerie auf der Unterseite
};