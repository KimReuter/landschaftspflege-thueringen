import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leistungen | Landschaftspflege Eberitsch Thüringen",
  description: "Baumpflege, Gartenbau, Tiefbau, Innenausbau und mehr – alles aus einer Hand, direkt vom Inhaber, zum Festpreis in Thüringen.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
