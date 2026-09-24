import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHeroSection from "@/components/sections/about/AboutHeroSection";
import ExperienceSection from "@/components/sections/about/ExperienceSection";
import AboutCoreValuesSection from "@/components/sections/about/AboutCoreValuesSection";
import AboutCtaSection from "@/components/sections/about/AboutCtaSection";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-light-cream text-charcoal-black font-body">
        <AboutHeroSection />
        <ExperienceSection />
        <AboutCoreValuesSection />
        <AboutCtaSection />
      </main>
      <Footer />
    </>
  );
}
