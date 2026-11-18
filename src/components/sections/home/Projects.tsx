"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/types/portfolio";
import { getProjectSlug } from "@/lib/projects";

interface ProjectsProps {
  projects: PortfolioProject[];
}

const pad = (n: number) => String(n).padStart(2, "0");
const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

/* Phone vs desktop: changes how far cards travel and tilt */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isMobile;
}

/* ─────────────────────────────────────────
   One floating 3D card
───────────────────────────────────────── */
function FloatingCard({
  project,
  index,
  position,
  priority,
  isMobile,
}: {
  project: PortfolioProject;
  index: number;
  position: MotionValue<number>;
  priority: boolean;
  isMobile: boolean;
}) {
  // Phones: cards travel further and tilt more, with less depth
  const travel = isMobile ? 92 : 58; // vw
  const tilt = isMobile ? 38 : 32; // degrees
  const depth = isMobile ? 300 : 420; // px

  // distance from the active card: 0 = centre, -1 = previous, +1 = next
  const d = useTransform(position, (p) => index - p);

  const x = useTransform(d, (v) => `${v * travel}vw`);
  const rotateY = useTransform(d, (v) => clamp(-v * tilt, -55, 55));
  const z = useTransform(d, (v) => -Math.abs(v) * depth);
  const opacity = useTransform(d, (v) => {
    const a = Math.abs(v);
    if (a < 0.9) return 1;
    if (a > 1.6) return 0;
    return 1 - (a - 0.9) / 0.7;
  });
  const shade = useTransform(d, (v) => Math.min(Math.abs(v), 1) * 0.55);
  const zIndex = useTransform(d, (v) => 100 - Math.round(Math.abs(v) * 10));

  return (
    <motion.div
      style={{ x, rotateY, z, opacity, zIndex }}
      className="absolute inset-0 m-auto w-[84vw] h-[105vw] max-h-[52svh] md:w-[62vw] md:h-[38.75vw] md:max-h-[60vh] will-change-transform"
    >
      <Link
        href={`/projects/${getProjectSlug(project)}`}
        aria-label={`View ${project.title}`}
        tabIndex={-1}
        className="group relative block h-full w-full overflow-hidden rounded-sm ring-1 ring-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]"
      >
        <Image
          src={project.src}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 767px) 84vw, 62vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
        <motion.div
          style={{ opacity: shade }}
          className="pointer-events-none absolute inset-0 bg-black"
        />
      </Link>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Simple swipe carousel (reduced motion only)
───────────────────────────────────────── */
function SwipeProjects({ projects }: ProjectsProps) {
  const total = projects.length;

  return (
    <div className="bg-forest-green py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="text-sm font-semibold text-warm-gold">Our Work</p>
        <h2 className="mt-3 font-heading text-3xl sm:text-4xl md:text-5xl leading-tight text-white">
          Our Projects
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
          A selection of refined spaces we have designed, approved, and brought to life in the UAE.
        </p>
      </div>

      <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 md:px-12 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {projects.map((project, i) => (
          <Link
            key={project.id}
            href={`/projects/${getProjectSlug(project)}`}
            className="group w-[82vw] max-w-[420px] shrink-0 snap-center"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm ring-1 ring-white/10">
              <Image
                src={project.src}
                alt={project.title}
                fill
                sizes="(max-width: 767px) 82vw, 420px"
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-xs tabular-nums text-white/60">
                {pad(i + 1)} / {pad(total)}
              </span>
              <h3 className="font-heading text-xl leading-snug text-white">{project.title}</h3>
            </div>
            <p className="mt-1 text-xs text-warm-gold">{project.category}</p>
          </Link>
        ))}
      </div>

      <div className="mx-auto mt-8 max-w-7xl px-6 md:px-12">
        <Link
          href="/projects"
          className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-forest-green"
        >
          View all projects
        </Link>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Section
───────────────────────────────────────── */
export default function Projects({ projects }: ProjectsProps) {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const trackRef = useRef<HTMLDivElement>(null);
  const total = projects.length;
  const steps = Math.max(total - 1, 1);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });
  const position = useTransform(scrollYProgress, (v) => v * steps);

  const [active, setActive] = useState(0);
  useMotionValueEvent(position, "change", (v) => {
    const next = clamp(Math.round(v), 0, total - 1);
    setActive((prev) => (prev === next ? prev : next));
  });

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const target = clamp(i, 0, total - 1);
    const top = el.getBoundingClientRect().top + window.scrollY;
    const distance = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (target / steps) * distance + 2, behavior: "smooth" });
  };

  if (total === 0) return null;

  if (reduceMotion) {
    return (
      <section id="projects" aria-label="Our projects">
        <SwipeProjects projects={projects} />
      </section>
    );
  }

  const current = projects[active];

  return (
    <section id="projects" aria-label="Our projects">
      <div
        ref={trackRef}
        className="relative bg-forest-green"
        style={{ height: `${total * (isMobile ? 85 : 100)}svh` }}
      >
        <div className="sticky top-0 h-[100svh] overflow-hidden">
          {/* Depth: darker edges, soft light in the centre */}
          <div className="pointer-events-none absolute inset-0 bg-black/45" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_65%)]" />

          {/* Header */}
          <div className="absolute inset-x-0 top-0 z-[200] mx-auto flex max-w-7xl items-start justify-between gap-6 px-6 pt-24 md:px-12 md:pt-28">
            <div>
              <p className="text-sm font-semibold text-warm-gold">Our Work</p>
              <h2 className="mt-1 md:mt-2 font-heading text-3xl md:text-4xl lg:text-5xl leading-tight text-white">
                Our Projects
              </h2>
            </div>
            <div className="flex flex-col items-end gap-3 pt-1 md:pt-2">
              <p className="hidden md:block max-w-xs text-right text-sm leading-relaxed text-white/70">
                A selection of refined spaces we have designed, approved, and brought to life in the UAE.
              </p>
              <Link
                href="/projects"
                className="text-sm font-semibold text-white underline decoration-warm-gold underline-offset-4 transition-colors hover:text-warm-gold"
              >
                View all
                <span className="hidden md:inline"> projects</span>
              </Link>
            </div>
          </div>

          {/* 3D stage */}
          <div
            className="absolute inset-0 pt-6 md:pt-16"
            style={{ perspective: isMobile ? "1100px" : "1600px" }}
          >
            <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
              {projects.map((project, i) => (
                <FloatingCard
                  key={project.id}
                  project={project}
                  index={i}
                  position={position}
                  priority={i === 0}
                  isMobile={isMobile}
                />
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="absolute inset-x-0 bottom-0 z-[200] bg-gradient-to-t from-black/70 to-transparent">
            <div className="mx-auto max-w-7xl px-6 pb-6 pt-12 md:px-12 md:pb-10 md:pt-16">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
                <div className="flex items-baseline gap-4 md:gap-5 min-w-0">
                  <span className="shrink-0 text-xs md:text-sm tabular-nums text-white/70">
                    {pad(active + 1)} / {pad(total)}
                  </span>
                  <div className="min-w-0">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={current?.id}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -18 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <h3 className="truncate font-heading text-2xl md:text-3xl lg:text-4xl text-white">
                          {current?.title}
                        </h3>
                        <p className="mt-1 text-xs md:text-sm text-warm-gold">{current?.category}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    onClick={() => goTo(active - 1)}
                    disabled={active === 0}
                    aria-label="Previous project"
                    className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white hover:text-forest-green disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(active + 1)}
                    disabled={active === total - 1}
                    aria-label="Next project"
                    className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white hover:text-forest-green disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
                  >
                    <ArrowRight size={16} />
                  </button>
                  {current && (
                    <Link
                      href={`/projects/${getProjectSlug(current)}`}
                      className="ml-auto md:ml-2 inline-flex h-10 md:h-12 items-center gap-2 rounded-full bg-warm-gold px-5 md:px-6 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-forest-green"
                    >
                      View project <ArrowUpRight size={14} />
                    </Link>
                  )}
                </div>
              </div>

              {/* Progress line */}
              <div className="mt-4 md:mt-6 h-px w-full bg-white/15">
                <motion.div
                  style={{ scaleX: scrollYProgress }}
                  className="h-px origin-left bg-warm-gold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}