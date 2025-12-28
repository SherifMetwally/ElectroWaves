import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Features from "@/components/Features";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import NewsSection from "@/components/NewsSection";
import MarketPositionSection from "@/components/MarketPositionSection";
import CEOSection from "@/components/CEOSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <ServicesSection />
      <IndustriesSection />
      <NewsSection />
      <MarketPositionSection />
      <CEOSection />
      <MissionVisionSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

