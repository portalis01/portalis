import Counter from "@/components/ui/Counter";

export default function ExperienceSection() {
  return (
    <section className="bg-forest-green py-20 px-6 md:px-12 border-t border-b border-warm-gold/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 items-center text-center">

        {/* Years of Experience */}
        <div className="flex flex-col items-center gap-3">
          <span className="font-heading text-5xl sm:text-6xl text-warm-gold font-semibold">
            <Counter value={25} suffix="+" />
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white font-normal">
            Years of Experience
          </span>
        </div>

        {/* Guinness Record */}
        <div className="flex flex-col items-center gap-3 border-x border-warm-gold/20 py-4 hidden sm:flex">
          <div className="w-14 h-14 rounded-full border border-warm-gold/40 flex items-center justify-center">
            <svg className="w-7 h-7 text-warm-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.896m5.25-6.624V2.721" />
            </svg>
          </div>
          <span className="text-warm-gold text-xs uppercase tracking-[0.2em] font-semibold">
            Guinness World Record
          </span>
          <span className="text-white/85 text-[11px] font-normal leading-relaxed max-w-xs">
            Holder for milestone achievements in design & execution excellence.
          </span>
        </div>

        {/* Projects Delivered */}
        <div className="flex flex-col items-center gap-3">
          <span className="font-heading text-5xl sm:text-6xl text-warm-gold font-semibold">
            <Counter value={200} suffix="+" />
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white font-normal">
            Projects Delivered
          </span>
        </div>

      </div>
    </section>
  );
}
