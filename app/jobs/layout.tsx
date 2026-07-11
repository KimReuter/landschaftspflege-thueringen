import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stellenangebote | Landschaftspflege Eberitsch Thüringen",
  description: "Wir suchen Baumpfleger, Tiefbauer und Landschaftsgärtner in Thüringen. Festanstellung, Firmenwagen, familiäres Team. Jetzt bewerben.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
