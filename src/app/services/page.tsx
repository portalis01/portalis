import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES_LIST } from "@/constants/services";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-light-cream text-charcoal-black font-body pt-28 md:pt-32 pb-20 md:pb-28">

        {/* Page Header */}
        <section className="px-5 md:px-12 mb-14 md:mb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold text-warm-gold">Our expertise</p>
              <h1 className="mt-4 font-heading text-[2.4rem] sm:text-5xl lg:text-[3.6rem] text-forest-green leading-[1.05]">
                Our Services
              </h1>
            </div>
            <p className="lg:col-span-5 text-[15px] leading-[1.75] text-charcoal-black/80 max-w-[52ch]">
              We deliver high-end, bespoke interior fit-out and design solutions. From creative
              development to technical execution and authority compliance, our specialized services
              guarantee perfection.
            </p>
          </div>
        </section>

        {/* Services — alternating rows */}
        <section className="px-5 md:px-12">
          <div className="max-w-6xl mx-auto">
            {SERVICES_LIST.map((service, idx) => {
              const isEven = idx % 2 === 0;
              const number = String(idx + 1).padStart(2, "0");

              return (
                <article
                  key={service.slug}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center py-12 md:py-20 border-t border-forest-green/15 first:border-t-0 first:pt-0"
                >
                  {/* Image */}
                  <Link
                    href={`/services/${service.slug}`}
                    tabIndex={-1}
                    aria-hidden="true"
                    className={`group lg:col-span-7 relative w-full aspect-[4/3] overflow-hidden ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </Link>

                  {/* Text */}
                  <div
                    className={`lg:col-span-5 flex flex-col ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <span className="font-heading text-[2.5rem] leading-none text-warm-gold/80">
                      {number}
                    </span>

                    <h2 className="mt-5 font-heading text-[1.9rem] sm:text-[2.3rem] text-forest-green leading-[1.12]">
                      {service.title}
                    </h2>

                    <p className="mt-4 text-[15px] leading-[1.75] text-charcoal-black/80">
                      {service.description}
                    </p>

                    {/* Included items */}
                    <div className="mt-7 pt-6 border-t border-forest-green/15">
                      <p className="text-[13px] font-semibold text-forest-green">Includes</p>
                      <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                        {service.whatsIncluded.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-[14px] leading-snug text-charcoal-black/80">
                            <span aria-hidden="true" className="mt-[0.6em] h-px w-3 shrink-0 bg-warm-gold" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-8 self-start rounded-full border border-forest-green/40 hover:bg-forest-green hover:text-light-cream text-forest-green text-[11px] uppercase tracking-[0.18em] font-semibold py-3 px-7 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-green"
                    >
                      Explore service
                      <span className="sr-only">: {service.title}</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}