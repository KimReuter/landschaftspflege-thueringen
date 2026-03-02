import { HomeHero } from "@/components/sections/start/HomeHero";
import "./globals.css";
import { ServicesSection } from "@/components/sections/start/ServicesSection";
import { WhyUsSection } from "@/components/sections/start/WhyUsSection";
import { StatsSection } from "@/components/sections/start/StatsSection";
import { CtaBand } from "@/components/sections/start/CtaBand";

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