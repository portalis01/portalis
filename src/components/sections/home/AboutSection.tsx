"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const facts = [
  { term: "Based in", detail: "Ajman, working across the UAE" },
  { term: "We fit out", detail: "Restaurants, cafés, retail and offices" },
  { term: "Approvals", detail: "Dubai Municipality and other UAE authorities, handled for you" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

/* Arc along the top of the arch (viewBox 0 0 1000 1000, circle centre 500,500, r 465) */
const ARC_PATH = "M 97.3 267.5 A 465 465 0 0 1 902.7 267.5";

/* 25+ counter: counts 0 → 25 once when it comes into view */
function YearsCounter({ reduceMotion }: { reduceMotion: boolean | null }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(25); // 25 in the HTML for Google

  useEffect(() => {
    if (reduceMotion) return;
    setValue(0);
  }, [reduceMotion]);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(0, 25, {
      duration: 1.4,
      ease: EASE,
      delay: 0.4,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduceMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  );
}

/* ─────────────────────────────────────────
   Arch intro: cream arch rises over a full-screen photo
───────────────────────────────────────── */
function ArchIntro() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // Arch rises from below the screen until its top sits near the top
  const archY = useTransform(scrollYProgress, [0, 0.75], ["100vh", "12vh"]);
  // Photo settles from a slight zoom
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
  // Curved title fades in as the arch arrives
  const titleOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);

  return (
    <div ref={trackRef} className="relative h-[220vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* Full-screen project photo */}
        <motion.div className="absolute inset-0" style={{ scale: photoScale }}>
          <Image
            src="/projects/labrioche-waters-edge/DSC_0007.webp"
            alt="La Brioche at Water's Edge, fitted out by Portalis Interiors"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/15" />
        </motion.div>

        {/* The arch */}
        <motion.div
          style={{ y: archY }}
          className="absolute left-1/2 top-0 -ml-[125vw] w-[250vw] aspect-square rounded-full bg-light-cream"
        >
          {/* "About us" curved along the top of the arch */}
          <motion.svg
            style={{ opacity: titleOpacity }}
            viewBox="0 0 1000 1000"
            className="absolute inset-0 h-full w-full overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <path id="portalis-arch-arc" d={ARC_PATH} />
            </defs>
            <text className="fill-forest-green font-heading text-[34px] md:text-[17px] tracking-[0.02em]">
              <textPath href="#portalis-arch-arc" startOffset="50%" textAnchor="middle">
                About us
              </textPath>
            </text>
          </motion.svg>
        </motion.div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Section
───────────────────────────────────────── */
export default function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="bg-light-cream">
      {!reduceMotion && <ArchIntro />}

      {/* Content rises up inside the arch, right under the curved title */}
      <div
        className={`relative z-10 px-6 md:px-12 pb-20 lg:pb-24 ${
          reduceMotion ? "pt-20" : "-mt-[62vh] md:-mt-[60vh]"
        }`}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Text */}
          <div className="lg:col-span-7 lg:pt-4">
            {reduceMotion && (
              <p className="text-sm font-semibold text-warm-gold">About us</p>
            )}

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

              <motion.div
                className="bg-forest-green text-light-cream px-7 py-7 sm:absolute sm:-left-10 sm:bottom-10 sm:w-[15.5rem] shadow-[0_18px_40px_-20px_rgba(31,59,52,0.6)]"
                initial={reduceMotion ? false : { opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
              >
                <p className="font-heading text-[4.5rem] leading-none text-warm-gold">
                  <YearsCounter reduceMotion={reduceMotion} />
                  <span className="text-[3rem] align-top">+</span>
                </p>
                <p className="mt-3 text-[15px] leading-snug">
                  years of fit-out experience in the UAE
                </p>
              </motion.div>
            </div>

            <figcaption className="mt-3 text-[13px] text-charcoal-black/65">
              Shade, City Walk, Dubai
            </figcaption>
          </figure>

        </div>
      </div>
    </section>
  );
}