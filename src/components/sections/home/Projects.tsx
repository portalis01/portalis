import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "@/types/portfolio";
import { getProjectSlug } from "@/lib/projects";

interface ProjectsProps {
  projects: PortfolioProject[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-white border-t border-b border-warm-gold/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16">
          <div>
            <span className="text-forest-green text-xs uppercase tracking-[0.3em] block mb-4">
              Our Work
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-tight text-forest-green">
              Our Projects
            </h2>
          </div>
          <p className="text-charcoal-black text-xs font-normal max-w-sm mt-4 lg:mt-0 leading-relaxed">
            A selection of refined spaces we have designed, approved, and brought to life in the UAE.
          </p>
        </div>

        {/* Project cards — each opens its own project page */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${getProjectSlug(project)}`}
              className="group border border-warm-gold/20 overflow-hidden flex flex-col justify-between aspect-[0.85] bg-light-cream hover:border-forest-green/40 transition-all duration-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-green"
            >
              <div className="relative flex-1 overflow-hidden aspect-[4/3] border-b border-warm-gold/10">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="p-6 bg-white flex flex-col space-y-2">
                <span className="text-[9px] uppercase tracking-[0.2em] text-warm-gold font-semibold">
                  {project.category}
                </span>
                <h3 className="font-heading text-lg text-forest-green leading-snug group-hover:text-warm-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-charcoal-black text-xs font-normal leading-relaxed line-clamp-2">
                  {project.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View all projects */}
        <div className="flex justify-center mt-12">
          <Link
            href="/projects"
            className="rounded-full border border-forest-green/40 hover:bg-forest-green hover:text-white text-forest-green text-xs uppercase tracking-[0.2em] font-semibold py-4 px-10 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-green"
          >
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
}