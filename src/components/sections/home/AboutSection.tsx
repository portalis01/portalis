"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, PenTool, ShieldCheck, Leaf } from "lucide-react";
import Counter from "@/components/ui/Counter";

const aboutFeatures = [
  {
    icon: Users,
    title: "CLIENT FOCUSED",
    desc: "We listen, collaborate, and tailor every detail to reflect your lifestyle and goals.",
  },
  {
    icon: PenTool,
    title: "THOUGHTFUL DESIGN",
    desc: "Every space is carefully planned to balance beauty, comfort, and functionality.",
  },
  {
    icon: ShieldCheck,
    title: "QUALITY ASSURED",
    desc: "We use premium materials and work with skilled craftsmen to deliver excellence.",
  },
  {
    icon: Leaf,
    title: "SUSTAINABLE APPROACH",
    desc: "We prioritize sustainable choices that create beautiful, responsible spaces.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-light-cream">
      <div className="max-w-7xl mx-auto">

        {/* About Story & Oval Image Cluster Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column Story */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <span className="text-warm-gold text-xs uppercase tracking-[0.25em] font-semibold">
              ABOUT US
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl text-forest-green leading-tight">
              Designing Spaces.<br />Enhancing Lives.
            </h2>

            <div className="text-charcoal-black text-sm font-normal leading-relaxed">
              <div className="float-left border border-warm-gold/50 p-4 bg-white shadow-sm flex flex-col items-center justify-center text-center w-28 h-24 mr-6 mb-4">
                <span className="font-heading text-3xl text-forest-green font-semibold">
                  <Counter value={25} suffix="+" />
                </span>
                <span className="text-[8px] uppercase tracking-widest text-warm-gold mt-1 font-normal leading-tight font-body">YEARS OF<br />EXPERIENCE</span>
              </div>
              <p className="mb-4">
                At Portalis, we bring a legacy of craftsmanship and expertise to every project. Although our company was founded a decade ago, our roots run deeper—our founder brings over years of experience in the UAE&apos;s dynamic interior design industry. This wealth of knowledge, combined with our team&apos;s dedication, enables us to create innovative, functional, and cost-effective solutions that truly transform spaces.
              </p>
              <p>
                This wealth of knowledge, combined with our team&apos;s dedication, enables us to create innovative, functional, and cost-effective solutions that truly transform spaces.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/#portfolio"
                className="circle-reveal-btn border border-warm-gold/50 px-6 py-3 text-[10px] uppercase tracking-[0.25em] text-warm-gold hover:text-white hover:border-white font-medium transition-colors duration-300 inline-flex items-center gap-3 w-fit"
              >
                Learn More
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* 4 Core Features */}
            <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-forest-green/10">
              {aboutFeatures.map((feature) => {
                const IconComp = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-full border border-warm-gold/30 flex items-center justify-center text-warm-gold shrink-0 bg-white shadow-sm">
                      <IconComp size={14} />
                    </div>
                    <div>
                      <h5 className="text-forest-green text-[9px] uppercase tracking-[0.15em] font-bold mb-1">
                        {feature.title}
                      </h5>
                      <p className="text-charcoal-black text-[10px] font-normal leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column Oval Image Cluster */}
          <div className="lg:col-span-6 relative w-full h-[380px] sm:h-[480px] lg:h-[660px] max-w-[340px] sm:max-w-[440px] lg:max-w-[620px] mx-auto lg:mx-0">
            {/* Oval 1 (upper-left) */}
            <div className="absolute left-0 top-0 w-[185px] h-[240px] sm:w-[240px] sm:h-[310px] lg:w-[350px] lg:h-[460px] rounded-[50%] overflow-hidden border border-warm-gold/25 shadow-md z-10">
              <Image
                src="/assets/extracted_img_p20_1_182.jpeg"
                alt="Lunico Restobar La Mer"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 240px, 350px"
              />
            </div>

            {/* Oval 2 (upper-right) */}
            <div className="absolute right-0 top-4 sm:top-6 lg:top-8 w-[145px] h-[180px] sm:w-[185px] sm:h-[230px] lg:w-[280px] lg:h-[350px] rounded-[50%] overflow-hidden border border-warm-gold/25 shadow-md z-10">
              <Image
                src="/assets/extracted_img_p23_1_203.jpeg"
                alt="Lekki Restobar Jumeirah"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 185px, 280px"
              />
            </div>

            {/* Oval 3 (bottom-left) */}
            <div className="absolute left-[30px] sm:left-[60px] lg:left-[90px] bottom-0 w-[160px] h-[200px] sm:w-[210px] sm:h-[260px] lg:w-[300px] lg:h-[390px] rounded-[50%] overflow-hidden border border-warm-gold/25 shadow-md z-20">
              <Image
                src="/assets/extracted_img_p7_1_375.jpeg"
                alt="Schneider Electric Office"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 210px, 300px"
              />
            </div>

            {/* Oval 4 (bottom-right): Tagline circle */}
            <div className="absolute right-2 sm:right-2 lg:right-4 bottom-4 sm:bottom-4 lg:bottom-6 w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] lg:w-[190px] lg:h-[190px] rounded-full bg-forest-green border border-warm-gold/20 flex flex-col justify-center p-2.5 sm:p-4 lg:p-6 text-center text-white shadow-md z-30">
              <span className="text-[8px] sm:text-[9px] lg:text-[11px] text-warm-gold uppercase tracking-[0.15em] font-semibold block mb-0.5 sm:mb-1 lg:mb-2">PORTALIS</span>
              <p className="text-[8px] sm:text-[9px] lg:text-[11px] font-normal leading-relaxed tracking-wider">
                Timeless design.<br />
                Meaningful spaces.<br />
                Inspired living.
              </p>
              <div className="w-6 sm:w-6 lg:w-8 h-[1px] bg-warm-gold/50 mx-auto mt-1 sm:mt-1 lg:mt-2" />
            </div>
          </div>
        </div>

        {/* Mission & Vision Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-20 pt-16 border-t border-forest-green/10 relative">
          {/* Mission Column */}
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-full bg-forest-green flex items-center justify-center text-warm-gold shrink-0 shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-3.42-3.485L12 10.5M3 15V8.25m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-3.42-3.485L12 3.75M3 8.25v6.75" />
              </svg>
            </div>
            <div>
              <h4 className="text-warm-gold text-[11px] uppercase tracking-[0.25em] font-semibold mb-2">OUR MISSION</h4>
              <p className="text-charcoal-black text-[12px] font-normal leading-relaxed">
                To be the premier partner for spatial transformations across the GCC, recognized for redefining environments through architectural innovation, precision craftsmanship, and a seamless end-to-end approach that sets global benchmarks for quality and execution. By bridging imaginative design with flawless operational delivery, we aim to shape inspiring, sustainable spaces that elevate human experience and stand as timeless landmarks of excellence.
              </p>
            </div>
          </div>

          {/* Vision Column */}
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-full bg-forest-green flex items-center justify-center text-warm-gold shrink-0 shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.43 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-warm-gold text-[11px] uppercase tracking-[0.25em] font-semibold mb-2">OUR VISION</h4>
              <p className="text-charcoal-black text-[12px] font-normal leading-relaxed">
                To deliver turnkey, high-end design development and fit-out solutions across the hospitality, corporate, retail, and wellness sectors. We pledge to collaborate closely with our clients to transform their concepts into functional, inspiring, and cost-effective realities, navigating complex regulatory frameworks flawlessly and consistently honouring our commitments to timelines, budget, and environmental sustainability.
              </p>
            </div>
          </div>

          {/* Gold Leaf Illustration */}
          <div className="absolute right-0 -bottom-6 pointer-events-none opacity-20 hidden md:block">
            <svg className="w-36 h-36 text-warm-gold" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 100 100">
              <path d="M50 90 C50 60, 30 30, 20 10" />
              <path d="M50 90 C50 60, 70 30, 80 10" />
              <path d="M50 90 L50 20" />
              <path d="M50 70 Q35 55 25 50" />
              <path d="M50 70 Q65 55 75 50" />
              <path d="M50 50 Q30 35 20 30" />
              <path d="M50 50 Q70 35 80 30" />
              <path d="M50 30 Q35 20 25 15" />
              <path d="M50 30 Q65 20 75 15" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
