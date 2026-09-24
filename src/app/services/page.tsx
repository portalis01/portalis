"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES_LIST } from "@/constants/services";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-light-cream text-charcoal-black font-body pt-28 pb-20 overflow-hidden">
        
        {/* Page Header */}
        <section className="px-6 md:px-12 mb-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-warm-gold text-xs uppercase tracking-[0.3em] font-semibold block mb-3">
              OUR EXPERTISE
            </span>
            <div className="h-[2px] w-10 bg-warm-gold/60 mb-6" />
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.5rem] text-forest-green leading-tight">
              Our Services
            </h1>
            <p className="text-charcoal-black text-sm sm:text-base font-normal leading-relaxed max-w-2xl mt-4">
              We deliver high-end, bespoke interior fit-out and design solutions. From creative development to technical execution and authority compliance, our specialized services guarantee perfection.
            </p>
          </motion.div>
        </section>

        {/* Services Alternating Grid List */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto space-y-16 md:space-y-32">
          {SERVICES_LIST.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 70, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-16 border-t border-forest-green/10 first:border-t-0 first:pt-0"
              >
                {/* Image Box */}
                <div
                  className={`lg:col-span-6 relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-warm-gold/15 shadow-md ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-[1.03] transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Text Content Box */}
                <div
                  className={`lg:col-span-6 flex flex-col space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <span className="text-warm-gold text-[10px] uppercase tracking-[0.25em] font-semibold">
                    Service {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-heading text-2xl sm:text-4xl text-forest-green leading-snug">
                    {service.title}
                  </h2>
                  <p className="text-charcoal-black text-sm font-normal leading-relaxed">
                    {service.description}
                  </p>

                  {/* Included Items checklist */}
                  <div className="space-y-3 pt-2">
                    <span className="text-[10px] uppercase tracking-wider text-warm-gold font-semibold block">
                      Key Highlights
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.whatsIncluded.map((item, key) => (
                        <div key={key} className="flex items-center gap-2 text-xs text-charcoal-black">
                          <CheckCircle2 size={14} className="text-warm-gold shrink-0" />
                          <span className="font-normal">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explore Button */}
                  <div className="pt-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="circle-reveal-btn border border-warm-gold/50 px-6 py-2.5 text-[10px] uppercase tracking-[0.25em] text-warm-gold hover:text-white hover:border-warm-gold font-medium transition-colors duration-300 inline-flex items-center gap-3 w-fit"
                    >
                      Explore Service Details
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </section>

      </main>

      <Footer />
    </>
  );
}
