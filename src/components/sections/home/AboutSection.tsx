import Image from "next/image";
import Link from "next/link";

const facts = [
  { term: "Based in", detail: "Ajman, working across the UAE" },
  { term: "We fit out", detail: "Restaurants, cafés, retail and offices" },
  { term: "Approvals", detail: "Dubai Municipality and other UAE authorities, handled for you" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-light-cream py-20 lg:py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Text */}
        <div className="lg:col-span-7 lg:pt-4">
          <p className="text-sm font-semibold text-warm-gold">About us</p>

          <h2 className="mt-4 font-heading text-[1.9rem] sm:text-[2.3rem] lg:text-[2.6rem] leading-[1.18] text-forest-green max-w-[22ch]">
            We take a space from first drawing to handover: design, approvals, MEP and joinery under one team.
          </h2>

          <p className="mt-8 max-w-[58ch] text-[15px] leading-[1.75] text-charcoal-black/85">
            Portalis was founded a decade ago, built on our founder&apos;s long career in UAE
            interiors. That experience shows in the details clients never have to think about:
            approvals cleared early, services coordinated before the ceiling closes, and joinery
            made to fit the room it&apos;s built for.
          </p>

          <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 border-t border-forest-green/15 pt-8">
            {facts.map((fact) => (
              <div key={fact.term}>
                <dt className="text-[13px] font-semibold text-forest-green">{fact.term}</dt>
                <dd className="mt-1.5 text-[13px] leading-relaxed text-charcoal-black/75">{fact.detail}</dd>
              </div>
            ))}
          </dl>

          <Link
            href="/about"
            className="mt-10 inline-block text-sm font-semibold text-forest-green underline decoration-warm-gold decoration-2 underline-offset-[6px] hover:decoration-forest-green transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest-green"
          >
            Read our story
          </Link>
        </div>

        {/* Project photo + 25 years panel */}
        <figure className="lg:col-span-5">
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/projects/shade-citywalk/img1.webp"
                alt="Interior of Shade at City Walk, Dubai, fitted out by Portalis"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* 25 years — overlaps the photo corner on larger screens */}
            <div className="bg-forest-green text-light-cream px-7 py-7 sm:absolute sm:-left-10 sm:bottom-10 sm:w-[15.5rem] shadow-[0_18px_40px_-20px_rgba(31,59,52,0.6)]">
              <p className="font-heading text-[4.5rem] leading-none text-warm-gold">
                25<span className="text-[3rem] align-top">+</span>
              </p>
              <p className="mt-3 text-[15px] leading-snug">
                years of fit-out experience in the UAE
              </p>
            </div>
          </div>

          <figcaption className="mt-3 text-[13px] text-charcoal-black/65">
            Shade, City Walk, Dubai
          </figcaption>
        </figure>

      </div>
    </section>
  );
}