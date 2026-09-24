import { CORE_VALUES } from "@/constants/core-values";

export default function CoreValuesSection() {
  return (
    <section className="bg-forest-green py-24 px-6 md:px-12 border-t border-b border-warm-gold/20 relative overflow-hidden">
      {/* Subtle gold line pattern background */}
      <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center">
        <svg className="w-full h-full text-warm-gold" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.12">
          <line x1="0" y1="20" x2="100" y2="20" />
          <line x1="0" y1="50" x2="100" y2="50" />
          <line x1="0" y1="80" x2="100" y2="80" />
          <line x1="25" y1="0" x2="25" y2="100" />
          <line x1="50" y1="0" x2="50" y2="100" />
          <line x1="75" y1="0" x2="75" y2="100" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <span className="text-warm-gold text-xs uppercase tracking-[0.3em] font-semibold block">
            OUR PRINCIPLES
          </span>
          <div className="h-[1px] w-8 bg-warm-gold/60 mx-auto" />
          <h2 className="font-heading text-3xl sm:text-5xl text-white">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_VALUES.map((value, idx) => {
            const IconComp = value.icon;
            return (
              <div
                key={idx}
                className="border border-warm-gold/25 p-10 bg-forest-green/20 backdrop-blur-md flex flex-col space-y-6 transition-all duration-500 hover:bg-white/[0.04] hover:border-warm-gold/70 group rounded-[20px] shadow-sm hover:shadow-md"
              >
                {/* Gold Ring Icon */}
                <div className="p-4 border border-warm-gold/30 text-warm-gold w-fit rounded-full group-hover:bg-warm-gold group-hover:text-forest-green group-hover:scale-110 transition-all duration-500 ease-out shrink-0">
                  <IconComp size={22} />
                </div>

                {/* Header and gold rule */}
                <div className="space-y-3">
                  <h4 className="font-heading text-xl text-white group-hover:text-warm-gold transition-colors duration-300">
                    {value.title}
                  </h4>
                  <div className="w-8 h-[1px] bg-warm-gold/50 group-hover:w-16 group-hover:bg-warm-gold transition-all duration-500" />
                </div>

                {/* Description */}
                <p className="text-white/95 text-xs font-normal leading-relaxed">
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
