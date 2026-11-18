import { CORE_VALUES } from "@/constants/core-values";

export default function AboutCoreValuesSection() {
  return (
    <section className="bg-light-cream py-16 md:py-24 px-5 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">

        {/* Heading — stays in view on desktop while the list scrolls */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold text-warm-gold">Our principles</p>
            <h2 className="mt-3 font-heading text-[2rem] sm:text-4xl text-forest-green leading-[1.1]">
              Our core values
            </h2>
          </div>
        </div>

        {/* Values list */}
        <ul className="lg:col-span-8 border-t border-forest-green/15">
          {CORE_VALUES.map((value) => (
            <li
              key={value.title}
              className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 py-6 md:py-7 border-b border-forest-green/15"
            >
              <h3 className="sm:col-span-5 font-heading text-xl md:text-[1.4rem] text-forest-green leading-snug">
                {value.title}
              </h3>
              <p className="sm:col-span-7 text-[15px] leading-[1.7] text-charcoal-black/80 sm:pt-0.5">
                {value.desc}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}