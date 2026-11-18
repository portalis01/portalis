"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const SERVICES = [
  {
    id: "design-development",
    name: "Design development",
    line: "Plans, 3D visuals and material specifications ready for site.",
    image: "/assets/extracted_img_p5_1_351.jpeg",
  },
  {
    id: "turnkey-projects",
    name: "Turnkey projects",
    line: "One team responsible from first drawing to handover.",
    image: "/assets/extracted_img_p7_1_375.jpeg",
  },
  {
    id: "corporate-interiors",
    name: "Corporate interiors",
    line: "Offices planned for focus, acoustics and the way your team works.",
    image: "/assets/extracted_img_p6_1_361.jpeg",
  },
  {
    id: "mep-systems",
    name: "MEP systems",
    line: "AC, lighting, power and plumbing coordinated with the design.",
    image: "/assets/extracted_img_p8_1_384.jpeg",
  },
  {
    id: "fb-hospitality",
    name: "F&B and hospitality",
    line: "Restaurants, cafés and lounges built to work as hard as they look.",
    image: "/assets/extracted_img_p9_1_393.jpeg",
  },
  {
    id: "retail-wellness",
    name: "Retail and wellness",
    line: "Shops, salons, spas and clinics, from storefront to treatment room.",
    image: "/assets/extracted_img_p10_1_403.jpeg",
  },
  {
    id: "joinery-services",
    name: "Joinery services",
    line: "Bespoke woodwork, panelling and furniture made to fit the room.",
    image: "/assets/extracted_img_p11_1_411.jpeg",
  },
  {
    id: "approvals-compliance",
    name: "Approvals and compliance",
    line: "Permits and authority approvals handled, so opening day isn't held up.",
    image: "/assets/extracted_img_p12_1_420.jpeg",
  },
];

export default function ServicesGridSection() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="bg-forest-green text-light-cream py-20 md:py-24 px-5 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <h2 className="font-heading text-[2rem] sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
              Our expertise
            </h2>
            <p className="mt-4 max-w-[46ch] text-[15px] leading-[1.7] text-light-cream/75">
              We fit out restaurants, shops and offices across the UAE, and handle every stage
              in between so you deal with one team.
            </p>
          </div>
          <Link
            href="/services"
            className="self-start md:self-auto shrink-0 text-sm font-semibold underline decoration-warm-gold decoration-2 underline-offset-[6px] hover:text-warm-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warm-gold"
          >
            See all services
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Service list — names appear one after another, once */}
          <ul className="lg:col-span-6 border-t border-light-cream/15 lg:border-t-0">
            {SERVICES.map((s, i) => {
              const isActive = i === active;
              return (
                <motion.li
                  key={s.id}
                  className="border-b border-light-cream/15 lg:border-b-0"
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={`/services/${s.id}`}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group flex items-center gap-4 py-4 lg:py-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warm-gold"
                  >
                    {/* Phone: small thumbnail */}
                    <span className="relative w-20 h-14 shrink-0 overflow-hidden lg:hidden">
                      <Image src={s.image} alt="" fill className="object-cover" sizes="80px" />
                    </span>

                    {/* Desktop: gold marker slides out for the active service */}
                    <span
                      aria-hidden="true"
                      className={`hidden lg:block h-[2px] shrink-0 bg-warm-gold transition-all duration-500 ease-out motion-reduce:transition-none ${
                        isActive ? "w-8" : "w-0"
                      }`}
                    />

                    <span className="flex flex-col">
                      <span
                        className={`font-heading text-lg sm:text-xl lg:text-[1.9rem] leading-tight transition-colors duration-500 ${
                          isActive ? "lg:text-light-cream" : "lg:text-light-cream/45"
                        } group-hover:text-light-cream`}
                      >
                        {s.name}
                      </span>
                      {/* Phone: one line under the name */}
                      <span className="mt-1 text-[13px] leading-snug text-light-cream/70 lg:hidden">
                        {s.line}
                      </span>
                    </span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          {/* Desktop: large photo — fades in and settles from a slight zoom */}
          <div className="hidden lg:block lg:col-span-6 lg:sticky lg:top-28">
            <div className="relative aspect-[4/3] overflow-hidden">
              {SERVICES.map((s, i) => (
                <Image
                  key={s.id}
                  src={s.image}
                  alt={i === active ? s.name : ""}
                  fill
                  className={`object-cover transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
                    i === active ? "opacity-100 scale-100" : "opacity-0 scale-[1.06] motion-reduce:scale-100"
                  }`}
                  sizes="45vw"
                />
              ))}
            </div>

            {/* Description fades up when the service changes */}
            <div className="mt-4 min-h-[3rem]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  className="text-[15px] leading-relaxed text-light-cream/80"
                  initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {SERVICES[active].line}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}