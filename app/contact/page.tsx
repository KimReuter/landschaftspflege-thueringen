import HeroSection from "@/components/sections/contact/HeroSection";
import ContactSection from "@/components/sections/contact/ContactSection";
import MapSection from "@/components/sections/contact/MapSection";

export default function KontaktPage() {
  return (
    <main className="bg-surface min-h-screen overflow-x-hidden">
      <HeroSection />
      <ContactSection />
      <MapSection />
    </main>
  );
}