import { CORE_VALUES } from "@/constants/core-values";

export default function AboutCoreValuesSection() {
  return (
    <section className="bg-light-cream py-20 px-6 md:px-12 border-b border-forest-green/8">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16 space-y-4">
          <span className="text-warm-gold text-xs uppercase tracking-[0.3em] font-semibold block">
            Our Principles
          </span>
          <div className="h-[1px] w-8 bg-warm-gold/60 mx-auto" />
          <h2 className="font-heading text-3xl sm:text-4xl text-forest-green">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_VALUES.map((value, idx) => {
            const IconComponent = value.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-warm-gold/15 p-8 flex flex-col space-y-4 transition-all duration-300 hover:shadow-md hover:border-warm-gold/40 group"
              >
                <div className="w-12 h-12 rounded-full border border-warm-gold/30 flex items-center justify-center text-warm-gold group-hover:bg-warm-gold group-hover:text-white transition-all duration-300 shrink-0">
                  <IconComponent size={22} />
                </div>
                <h4 className="font-heading text-base text-forest-green font-semibold group-hover:text-warm-gold transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-charcoal-black text-xs font-normal leading-relaxed">
                  {value.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
