import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronLeft,
  CheckCircle2,
  PhoneCall,
  Mail,
  ArrowRight,
  Compass,
  Settings,
  Gem,
  Layers,
  MessageSquare,
  Pencil,
  ClipboardList,
  Hammer,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES_DETAILS, SERVICE_SLUGS } from "@/constants/services";

/* ───────────────────────── Helpers ───────────────────────── */

const pillarIcons: Record<string, React.ReactNode> = {
  compass: <Compass size={24} />,
  settings: <Settings size={24} />,
  gem: <Gem size={24} />,
  layers: <Layers size={24} />,
};

const processIcons = [
  <MessageSquare key="msg" size={20} />,
  <Pencil key="pen" size={20} />,
  <ClipboardList key="clip" size={20} />,
  <Hammer key="ham" size={20} />,
  <Sparkles key="spark" size={20} />,
];

/* ───────────────────────── Static Params ───────────────────────── */

export async function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

/* ───────────────────────── Page ───────────────────────── */

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const detail = SERVICES_DETAILS[slug];

  if (!detail) {
    notFound();
  }

  const subject = encodeURI(`Inquiry - ${detail.title.replace("\n", " ")}`);
  const messageText = `Hi Portalis Interiors, I'm interested in your ${detail.title.replace("\n", " ")} service. Please provide more details.`;
  const encodedText = encodeURIComponent(messageText);
  const whatsappUrl = `https://wa.me/971555222074?text=${encodedText}`;
  const mailtoUrl = `mailto:info@portalis.ae?subject=${subject}&body=${encodedText}`;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-light-cream text-charcoal-black font-body">

        {/* ════════════════════════════════════════════════════════
            SECTION 1 — HERO (Split: Left Text + Right Image)
            Matches Reference PDF Page 8 layout exactly
        ════════════════════════════════════════════════════════ */}
        <section className="bg-light-cream pt-28 pb-16 px-6 md:px-12 border-b border-forest-green/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Column — Back Link + Title + Tagline */}
            <div className="flex flex-col space-y-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-forest-green/60 hover:text-warm-gold transition-colors duration-300 font-medium w-fit"
              >
                <ChevronLeft size={14} /> Back to Services
              </Link>

              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-forest-green leading-[1.1] whitespace-pre-line">
                {detail.title}
              </h1>

              <p className="text-charcoal-black text-sm sm:text-base font-normal leading-relaxed max-w-lg">
                {detail.tagline}
              </p>

              {/* 4 Icon Pillars Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-forest-green/10 mt-2">
                {detail.pillars.map((pillar, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-full border border-warm-gold/30 flex items-center justify-center text-forest-green">
                      {pillarIcons[pillar.icon] || <Compass size={24} />}
                    </div>
                    <span className="text-[10px] text-forest-green font-medium leading-tight whitespace-pre-line tracking-wide uppercase">
                      {pillar.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column — Large Hero Image */}
            <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-lg border border-warm-gold/15">
              <Image
                src={detail.image}
                alt={detail.title.replace("\n", " ")}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            SECTION 2 — OUR DESIGN PROCESS
            Left: Title + CTA | Right: 5-Step Horizontal Timeline
        ════════════════════════════════════════════════════════ */}
        <section className="bg-white py-20 px-6 md:px-12 border-b border-forest-green/8">
          <div className="max-w-7xl mx-auto">

            {/* Top Row: Title + Button | Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16">
              <div className="lg:col-span-4 flex flex-col space-y-5">
                <h2 className="font-heading text-3xl sm:text-4xl text-forest-green leading-tight">
                  Our Design Process
                </h2>
                <p className="text-charcoal-black text-sm font-normal leading-relaxed">
                  A seamless journey from concept to your dream realization.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-forest-green hover:bg-warm-gold text-white text-[10px] uppercase tracking-[0.2em] font-semibold py-3.5 px-6 transition-all duration-300 w-fit flex items-center gap-2 mt-2"
                >
                  Book a Consultation <ArrowRight size={12} />
                </a>
              </div>

              {/* Horizontal 5-Step Timeline */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-5 gap-0 relative">
                  {detail.process.map((step, idx) => (
                    <div key={step.step} className="flex flex-col items-center text-center relative px-1">
                      {/* Icon Circle */}
                      <div className="w-11 h-11 rounded-full border border-warm-gold/40 flex items-center justify-center text-forest-green bg-light-cream mb-4 relative z-10">
                        {processIcons[idx]}
                      </div>

                      {/* Connecting Arrow (not on last) */}
                      {idx < detail.process.length - 1 && (
                        <div className="absolute top-5 left-[calc(50%+22px)] right-[calc(-50%+22px)] h-[1px] bg-forest-green/15 z-0 hidden lg:block">
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[5px] border-l-forest-green/30 border-y-[3px] border-y-transparent" />
                        </div>
                      )}

                      {/* Step Number */}
                      <span className="text-warm-gold text-[10px] font-semibold tracking-[0.15em] mb-1.5">
                        {step.step}
                      </span>

                      {/* Title */}
                      <h4 className="font-heading text-xs sm:text-sm text-forest-green font-semibold leading-tight mb-2">
                        {step.title}
                      </h4>

                      {/* Description */}
                      <p className="text-charcoal-black/55 text-[10px] font-normal leading-relaxed hidden sm:block">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            SECTION 3 — WHAT'S INCLUDED
        ════════════════════════════════════════════════════════ */}
        <section className="bg-light-cream py-20 px-6 md:px-12 border-b border-forest-green/8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: Title */}
            <div className="lg:col-span-4">
              <h2 className="font-heading text-3xl sm:text-4xl text-forest-green leading-tight">
                What's Included
              </h2>
              <div className="h-[2px] w-10 bg-warm-gold/60 mt-4" />
            </div>

            {/* Right: Checklist Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {detail.whatsIncluded.map((item) => (
                  <div key={item} className="flex items-start gap-3 py-2 border-b border-forest-green/5 last:border-b-0">
                    <CheckCircle2 size={16} className="text-warm-gold mt-0.5 shrink-0" />
                    <span className="text-charcoal-black/80 text-sm font-normal">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* ════════════════════════════════════════════════════════
            SECTION 5 — CTA BANNER (Full Width)
        ════════════════════════════════════════════════════════ */}
        <section className="bg-forest-green py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full border border-warm-gold/30 flex items-center justify-center text-warm-gold shrink-0">
                <Sparkles size={24} />
              </div>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl text-white leading-tight">
                  {detail.ctaHeadline}
                </h3>
                <p className="text-white/85 text-xs sm:text-sm font-normal mt-1">
                  {detail.ctaDescription}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-warm-gold hover:bg-white text-forest-green text-[10px] uppercase tracking-[0.2em] font-semibold py-3.5 px-6 text-center transition-all duration-300 flex items-center justify-center gap-2"
              >
                <PhoneCall size={12} /> Book a Consultation <ArrowRight size={12} />
              </a>
              <a
                href={mailtoUrl}
                className="border border-white/25 hover:border-white text-white text-[10px] uppercase tracking-[0.2em] font-semibold py-3.5 px-6 text-center transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={12} /> Email Us
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
