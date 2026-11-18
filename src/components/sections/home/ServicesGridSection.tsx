"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

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

const EASE = [0.16, 1, 0.3, 1] as const;
const CURTAIN = [0.76, 0, 0.24, 1] as const;
const pad = (n: number) => String(n).padStart(2, "0");
const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export default function ServicesGridSection() {
  const reduceMotion = useReducedMotion();
  const total = SERVICES.length;
  const steps = total - 1;

  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });
  const position = useTransform(scrollYProgress, (v) => v * steps);

  const [active, setActive] = useState(0);
  useMotionValueEvent(position, "change", (v) => {
    if (reduceMotion) return;
    const next = clamp(Math.round(v), 0, steps);
    setActive((prev) => (prev === next ? prev : next));
  });

  const goTo = (i: number) => {
    const target = clamp(i, 0, steps);
    if (reduceMotion) {
      setActive(target);
      return;
    }
    const el = trackRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const distance = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (target / steps) * distance + 2, behavior: "smooth" });
  };

  const current = SERVICES[active];
  const progress = reduceMotion ? active / steps : undefined;

  return (
    <section id="services" aria-label="Our expertise" className="bg-forest-green text-light-cream">
      <div
        ref={trackRef}
        className="relative"
        style={reduceMotion ? undefined : { height: `${total * 60 + 40}vh` }}
      >
        <div
          className={`${
            reduceMotion ? "relative py-20" : "sticky top-0 h-[100svh]"
          } overflow-hidden flex flex-col px-5 md:px-12 pt-24 md:pt-28 pb-6 md:pb-8`}
        >
          <div className="mx-auto flex h-full w-full max-w-7xl flex-col">

            {/* Header */}
            <div className="flex items-start justify-between gap-6">
              <h2 className="text-sm font-semibold text-warm-gold">Our expertise</h2>
              <Link
                href="/services"
                className="text-sm font-semibold underline decoration-warm-gold decoration-2 underline-offset-[6px] hover:text-warm-gold transition-colors"
              >
                See all services
              </Link>
            </div>

            {/* Huge service name — slides up and swaps */}
            <div className="mt-4 md:mt-6 overflow-hidden text-center">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={current.id}
                  aria-live="polite"
                  className="font-heading leading-[0.95] tracking-[-0.03em] text-[clamp(2.4rem,10vw,7.5rem)] md:text-[clamp(3rem,7vw,7.5rem)]"
                  initial={reduceMotion ? false : { y: "105%" }}
                  animate={{ y: "0%" }}
                  exit={reduceMotion ? undefined : { y: "-105%" }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  {current.name}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Centre photo — each new one wipes up over the last */}
            <div className="relative mx-auto mt-5 md:mt-8 w-[84vw] max-w-[620px] md:w-[38vw] aspect-[16/10] max-h-[32svh] md:max-h-[36svh] overflow-hidden">
              {SERVICES.map((s, i) => (
                <motion.div
                  key={s.id}
                  className="absolute inset-0"
                  style={{ zIndex: i }}
                  initial={false}
                  animate={{
                    clipPath: i <= active ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
                  }}
                  transition={{ duration: reduceMotion ? 0 : 0.9, ease: CURTAIN }}
                >
                  <Image
                    src={s.image}
                    alt={i === active ? s.name : ""}
                    fill
                    sizes="(max-width: 767px) 84vw, 38vw"
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>

            {/* Counter + progress + arrows */}
            <div className="mx-auto mt-5 flex w-full max-w-[620px] items-center gap-4">
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                disabled={active === 0}
                aria-label="Previous service"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-light-cream/30 transition-colors hover:bg-light-cream hover:text-forest-green disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-light-cream"
              >
                <ArrowLeft size={15} />
              </button>
              <span className="text-xs tabular-nums text-light-cream/80">{pad(active + 1)}</span>
              <div className="h-px flex-1 bg-light-cream/20">
                <motion.div
                  className="h-px origin-left bg-warm-gold"
                  style={reduceMotion ? { scaleX: progress } : { scaleX: scrollYProgress }}
                />
              </div>
              <span className="text-xs tabular-nums text-light-cream/50">{pad(total)}</span>
              <button
                type="button"
                onClick={() => goTo(active + 1)}
                disabled={active === steps}
                aria-label="Next service"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-light-cream/30 transition-colors hover:bg-light-cream hover:text-forest-green disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-light-cream"
              >
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Description + link */}
            <div className="mx-auto mt-4 md:mt-5 flex min-h-[4.5rem] max-w-[46ch] flex-col items-center text-center">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current.id}
                  className="flex flex-col items-center"
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <p className="text-[14px] md:text-[15px] leading-relaxed text-light-cream/80">
                    {current.line}
                  </p>
                  <Link
                    href={`/services/${current.id}`}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-warm-gold hover:text-light-cream transition-colors"
                  >
                    Explore service <ArrowUpRight size={13} />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* All services as tabs */}
            <nav
              aria-label="Services"
              className="mt-auto -mx-5 md:mx-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <ul className="flex w-max md:w-full gap-5 md:gap-0 md:justify-between border-t border-light-cream/15 px-5 md:px-0 pt-4">
                {SERVICES.map((s, i) => (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => goTo(i)}
                      aria-current={i === active ? "true" : undefined}
                      className={`whitespace-nowrap text-[12px] md:text-[13px] transition-colors ${
                        i === active
                          ? "text-warm-gold font-semibold"
                          : "text-light-cream/55 hover:text-light-cream"
                      }`}
                    >
                      {s.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

          </div>
        </div>
      </div>
    </section>
  );
}