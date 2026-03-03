import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/home/hero-section";
import ServicesSection from "@/components/home/services-section";
import FeaturesSection from "@/components/home/features-section";
import OffersSection from "@/components/home/offers-section";
import CtaSection from "@/components/home/cta-section";

export const revalidate = 0;

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <OffersSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
