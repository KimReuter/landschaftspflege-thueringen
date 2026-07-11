import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns | Landschaftspflege Eberitsch Thüringen",
  description: "Seit 2018 in Thüringen. Franz Eberitsch und sein Team stehen für ehrliches Handwerk, Festpreise und persönlichen Kontakt – ohne Callcenter.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
