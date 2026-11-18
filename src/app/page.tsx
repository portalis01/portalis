"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/home/HeroSection";
import AboutSection from "@/components/sections/home/AboutSection";
import CoreValuesSection from "@/components/sections/home/CoreValuesSection";
import ServicesGridSection from "@/components/sections/home/ServicesGridSection";
import Projects from "@/components/sections/home/Projects";
import ContactSection from "@/components/sections/home/ContactSection";
import { PORTFOLIO_PROJECTS } from "@/constants/portfolio";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 w-full bg-light-cream">
        <HeroSection />
        <Projects projects={PORTFOLIO_PROJECTS} />
        <AboutSection />
        <ServicesGridSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}