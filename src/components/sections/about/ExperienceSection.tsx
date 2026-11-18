const STATS = [
  {
    big: "25+",
    label: "Years of experience",
  },
  {
    big: "Guinness World Record",
    label: "Holder for milestone achievements in design & execution excellence.",
  },
  {
    big: "200+",
    label: "Projects delivered",
  },
];

export default function ExperienceSection() {
  return (
    <section className="bg-forest-green text-light-cream py-14 md:py-16 px-5 md:px-12">
      <dl className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0">
        {STATS.map((s, i) => (
          <div
            key={s.big}
            className={`flex flex-col sm:px-8 ${
              i > 0 ? "pt-8 sm:pt-0 border-t sm:border-t-0 sm:border-l border-light-cream/15" : ""
            } ${i === 0 ? "sm:pl-0" : ""}`}
          >
            <dt className="order-2 mt-2 text-[14px] leading-snug text-light-cream/75 max-w-[30ch]">
              {s.label}
            </dt>
            <dd
              className={`order-1 font-heading text-warm-gold leading-none ${
                s.big.length > 6
                  ? "text-[1.6rem] sm:text-[1.75rem] leading-tight"
                  : "text-5xl sm:text-[3.5rem]"
              }`}
            >
              {s.big}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}