import { HomeHero } from "@/components/sections/HomeHero";
import "./globals.css";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CtaBand } from "@/components/sections/CtaBand";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <HomeHero />
        <ServicesSection />
        <WhyUsSection />
        <StatsSection />
        <CtaBand />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}