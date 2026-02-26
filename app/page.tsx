import { HomeHero } from "@/components/sections/HomeHero";
import "./globals.css";
import { Header } from "@/components/layout/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <HomeHero />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}