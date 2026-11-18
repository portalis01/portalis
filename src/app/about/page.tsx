import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHeroSection from "@/components/sections/about/AboutHeroSection";
import ExperienceSection from "@/components/sections/about/ExperienceSection";
import AboutCoreValuesSection from "@/components/sections/about/AboutCoreValuesSection";
import AboutCtaSection from "@/components/sections/about/AboutCtaSection";

export const metadata: Metadata = {
  title: "About Us: Interior Fit-Out Company in Ajman, UAE",
  description:
    "Meet Portalis Interiors, an Ajman-based fit-out company delivering restaurants, cafés, retail and office interiors across the UAE, from design to handover.",
  alternates: { canonical: "/about" },
};

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