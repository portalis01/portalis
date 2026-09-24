import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCtaSection() {
  return (
    <section className="bg-forest-green py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="font-heading text-2xl sm:text-3xl text-white leading-tight">
            Let&apos;s Build Something Beautiful Together
          </h3>
          <p className="text-white/85 text-sm font-normal mt-2 max-w-lg">
            Whether it&apos;s a luxury residence, a buzzing restaurant, or a modern workspace — we bring your vision to life.
          </p>
        </div>
        <Link
          href="/#contact"
          className="bg-warm-gold hover:bg-white text-forest-green text-[10px] uppercase tracking-[0.2em] font-semibold py-4 px-8 transition-all duration-300 flex items-center gap-2 shrink-0"
        >
          Start Your Project <ArrowRight size={12} />
        </Link>
      </div>
    </section>
  );
}
