import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PORTFOLIO_PROJECTS, GALLERY_CAROUSEL_IMAGES } from "@/constants/portfolio";
import { getProjectSlug } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Interior Fit-Out Projects in Dubai and Abu Dhabi",
  description:
    "Restaurants, cafés and retail spaces fitted out by Portalis Interiors across Dubai and Abu Dhabi, from design and approvals to joinery and handover.",
  alternates: { canonical: "/projects" },
};

const cardClass =
  "group flex flex-col h-full border border-warm-gold/20 bg-white hover:border-forest-green/40 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-green";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-light-cream">
        {/* Page header */}
        <section className="pt-36 pb-14 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <p className="text-sm font-semibold text-warm-gold">Projects</p>
            <h1 className="mt-4 font-heading text-4xl sm:text-5xl text-forest-green leading-tight">
              Our Projects
            </h1>
            <p className="mt-5 max-w-[60ch] text-[15px] leading-[1.75] text-charcoal-black/85">
              Restaurants, cafés and retail spaces we have designed, taken through approvals
              and built across Dubai and Abu Dhabi.
            </p>
          </div>
        </section>

        {/* Projects + gallery photos, one grid */}
        <section className="pb-24 px-6 md:px-12">
          <ul className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Project cards */}
            {PORTFOLIO_PROJECTS.map((project) => (
              <li key={`project-${project.id}`}>
                <Link href={`/projects/${getProjectSlug(project)}`} className={cardClass}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.src}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-2">
                    <span className="text-xs font-semibold text-warm-gold">{project.category}</span>
                    <h2 className="font-heading text-xl text-forest-green leading-snug group-hover:underline decoration-warm-gold underline-offset-4">
                      {project.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-charcoal-black/75">{project.desc}</p>
                  </div>
                </Link>
              </li>
            ))}

            {/* Gallery photo cards — each opens the project it belongs to */}
            {GALLERY_CAROUSEL_IMAGES.map((photo) => (
              <li key={`gallery-${photo.num}`}>
                <Link href={`/projects/${photo.src.split("/")[2]}`} className={cardClass}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-2">
                    <span className="text-xs font-semibold text-warm-gold">{photo.label}</span>
                    <h2 className="font-heading text-xl text-forest-green leading-snug group-hover:underline decoration-warm-gold underline-offset-4">
                      {photo.alt}
                    </h2>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}