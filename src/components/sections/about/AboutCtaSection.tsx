import Link from "next/link";

export default function AboutCtaSection() {
  return (
    <section className="bg-forest-green text-light-cream py-14 md:py-16 px-5 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
        <div>
          <h2 className="font-heading text-[1.75rem] sm:text-3xl leading-tight">
            Let&apos;s Build Something Beautiful Together
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-light-cream/80 max-w-[52ch]">
            Whether it&apos;s a luxury residence, a buzzing restaurant, or a modern workspace, we
            bring your vision to life.
          </p>
        </div>

        <Link
          href="/#contact"
          className="self-start md:self-auto shrink-0 rounded-full bg-warm-gold hover:bg-light-cream text-forest-green text-[11px] uppercase tracking-[0.18em] font-semibold py-3.5 px-8 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warm-gold"
        >
          Start Your Project
        </Link>
      </div>
    </section>
  );
}