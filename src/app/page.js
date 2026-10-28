import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";
import ClientReviews from "@/components/ClientReviews";
import OrangeMarqueeBanner from "@/components/OrangeMarqueeBanner";
import BrandsSection from "@/components/BrandsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import WhyCRO from "@/components/WhyCRO";
import OurProcess from "@/components/OurProcess";
import ReadyToBuild from "@/components/ReadyToBuild";
import Footer from "@/components/Footer";
import FloatingContactWidget from "@/components/FloatingContactWidget";
import ConsultationModal from "@/components/ConsultationModal";

export default function Home() {
  return (
    <div className="page-wrapper">
      {/* 1. Header with Navbar */}
      <Navbar />

      {/* 2. Main Content Area in exact requested sequence */}
      <main id="main-content" className="main-content">
        <HeroSection />
        <FeaturedCaseStudy />
        <ClientReviews />
        <OrangeMarqueeBanner />
        <ServicesSection />
        <WhyCRO />
        <OurProcess />
        <PortfolioSection />
        <BrandsSection />
        <ReadyToBuild />
      </main>

      {/* 3. Premium Orange Footer */}
      <Footer />

      {/* 4. Floating Quick Contact Widget (Call + WhatsApp) */}
      <FloatingContactWidget />

      {/* 5. Global Consultation Lead Form Popup Modal */}
      <ConsultationModal />
    </div>
  );
}
