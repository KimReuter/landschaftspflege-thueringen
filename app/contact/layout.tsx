import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Landschaftspflege Eberitsch Thüringen",
  description: "Jetzt Projekt anfragen – kostenlos und unverbindlich. Direkt zum Inhaber, kein Callcenter. Angebot zum Festpreis.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
