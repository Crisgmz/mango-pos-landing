import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogosStrip from "@/components/LogosStrip";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import FiscalSection from "@/components/FiscalSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <LogosStrip />
      <FeaturesSection />
      <BenefitsSection />
      <FiscalSection />
      <PricingSection />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
