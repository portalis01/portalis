import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, PenTool, ShieldCheck, Star, Eye } from "lucide-react";

export default function AboutHeroSection() {
  return (
    <section className="pt-28 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

        {/* ── LEFT COLUMN ── */}
        <div className="flex flex-col justify-between">

          {/* OUR STORY label */}
          <div className="space-y-8">
            <div>
              <span className="text-warm-gold text-xs uppercase tracking-[0.3em] font-semibold block mb-3">
                OUR STORY
              </span>
              <div className="h-[2px] w-10 bg-warm-gold/60" />
            </div>

            {/* Large Serif Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.5rem] text-forest-green leading-[1.12]">
              Designing <span className="italic font-normal">Spaces.</span>
              <br />
              Enhancing <span className="italic font-normal">Lives.</span>
            </h1>

            {/* Body Copy */}
            <div className="space-y-4 max-w-md">
              <p className="text-charcoal-black text-sm font-normal leading-relaxed">
                At Portalis Interiors, we believe that great design goes
                beyond aesthetics. It shapes the way you live, work,
                and feel every day.
              </p>
              <p className="text-charcoal-black text-sm font-normal leading-relaxed">
                Our approach is rooted in understanding your vision and
                crafting interiors that are timeless, functional, and
                uniquely yours.
              </p>
            </div>

            {/* LEARN MORE link */}
            <Link
              href="/#portfolio"
              className="group inline-flex items-center gap-3 text-forest-green hover:text-warm-gold text-[10px] uppercase tracking-[0.25em] font-semibold pt-2 transition-colors duration-300"
            >
              Learn More
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* ── 3 Value Blocks ── */}
          <div className="space-y-8 pt-12 mt-8 border-t border-forest-green/10">
            {/* Client Focused */}
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full border border-warm-gold/35 flex items-center justify-center text-warm-gold shrink-0">
                <Users size={22} />
              </div>
              <div>
                <h4 className="text-forest-green text-xs uppercase tracking-[0.2em] font-bold mb-1.5">
                  Client Focused
                </h4>
                <p className="text-charcoal-black text-xs font-normal leading-relaxed max-w-xs">
                  We listen, collaborate, and tailor
                  every detail to reflect your
                  lifestyle and goals.
                </p>
              </div>
            </div>

            {/* Thoughtful Design */}
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full border border-warm-gold/35 flex items-center justify-center text-warm-gold shrink-0">
                <PenTool size={22} />
              </div>
              <div>
                <h4 className="text-forest-green text-xs uppercase tracking-[0.2em] font-bold mb-1.5">
                  Thoughtful Design
                </h4>
                <p className="text-charcoal-black text-xs font-normal leading-relaxed max-w-xs">
                  Every space is carefully planned
                  to balance beauty, comfort,
                  and functionality.
                </p>
              </div>
            </div>

            {/* Quality Assured */}
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full border border-warm-gold/35 flex items-center justify-center text-warm-gold shrink-0">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 className="text-forest-green text-xs uppercase tracking-[0.2em] font-bold mb-1.5">
                  Quality Assured
                </h4>
                <p className="text-charcoal-black text-xs font-normal leading-relaxed max-w-xs">
                  We use premium materials and
                  work with skilled craftsmen to
                  deliver excellence.
                </p>
              </div>
            </div>
          </div>

          {/* ── Mission & Vision ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 mt-8 border-t border-forest-green/10">
            {/* Mission */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full border border-warm-gold/30 flex items-center justify-center text-warm-gold shrink-0">
                <Star size={16} />
              </div>
              <div>
                <h5 className="text-forest-green text-[10px] uppercase tracking-[0.2em] font-bold mb-1">
                  Our Mission
                </h5>
                <p className="text-charcoal-black text-[11px] font-normal leading-relaxed">
                  To be the premier partner for spatial transformations across the GCC, recognized for redefining environments through architectural innovation, precision craftsmanship, and a seamless end-to-end approach that sets global benchmarks for quality and execution. By bridging imaginative design with flawless operational delivery, we aim to shape inspiring, sustainable spaces that elevate human experience and stand as timeless landmarks of excellence.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full border border-warm-gold/30 flex items-center justify-center text-warm-gold shrink-0">
                <Eye size={16} />
              </div>
              <div>
                <h5 className="text-forest-green text-[10px] uppercase tracking-[0.2em] font-bold mb-1">
                  Our Vision
                </h5>
                <p className="text-charcoal-black text-[11px] font-normal leading-relaxed">
                  To deliver turnkey, high-end design development and fit-out solutions across the hospitality, corporate, retail, and wellness sectors. We pledge to collaborate closely with our clients to transform their concepts into functional, inspiring, and cost-effective realities, navigating complex regulatory frameworks flawlessly and consistently honouring our commitments to timelines, budget, and environmental sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN — IMAGE GRID ── */}
        <div className="flex flex-col gap-4">
          {/* Row 1: Single large wide image */}
          <div className="relative w-full aspect-[16/9] rounded-[16px] overflow-hidden border border-warm-gold/15 shadow-sm">
            <Image
              src="/assets/extracted_img_p20_1_182.jpeg"
              alt="Lunico Restobar La Mer interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Row 2: 2 images side by side */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden border border-warm-gold/15 shadow-sm">
              <Image
                src="/assets/extracted_img_p23_1_203.jpeg"
                alt="Lekki Restobar Jumeirah interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden border border-warm-gold/15 shadow-sm">
              <Image
                src="/assets/extracted_img_p14_6_965.jpeg"
                alt="Indi16 Business Bay restobar"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>

          {/* Row 3: 3 images side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="relative w-full aspect-[3/2] sm:aspect-[3/4] rounded-[16px] overflow-hidden border border-warm-gold/15 shadow-sm">
              <Image
                src="/assets/extracted_img_p15_4_986.jpeg"
                alt="Nox Citywalk cocktail lounge"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="relative w-full aspect-[3/2] sm:aspect-[3/4] rounded-[16px] overflow-hidden border border-warm-gold/15 shadow-sm">
              <Image
                src="/assets/extracted_img_p13_3_924.jpeg"
                alt="Daikan Citywalk ramen bistro"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="relative w-full aspect-[3/2] sm:aspect-[3/4] rounded-[16px] overflow-hidden border border-warm-gold/15 shadow-sm">
              <Image
                src="/assets/extracted_img_p7_1_375.jpeg"
                alt="Schneider Electric corporate office"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
