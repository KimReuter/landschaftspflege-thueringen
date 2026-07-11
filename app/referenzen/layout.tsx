import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referenzen | Landschaftspflege Eberitsch Thüringen",
  description: "Abgeschlossene Projekte aus Baumpflege, Gartenbau, Tiefbau und Innenausbau – sauber ausgeführt, termingerecht, zum Festpreis.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
