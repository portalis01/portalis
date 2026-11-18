import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/sections/projects/ProjectGallery";
import { PORTFOLIO_PROJECTS } from "@/constants/portfolio";
import { getAllProjectSlugs, getProjectBySlug, getProjectSlug } from "@/lib/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = `${project.title} Interior Fit-Out`;
  return {
    title,
    description: project.desc,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: { title, description: project.desc, images: [project.src] },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  // Similar projects: same category first, then the rest — 3 in total, never the current one
  const others = PORTFOLIO_PROJECTS.filter((p) => p.id !== project.id);
  const similar = [
    ...others.filter((p) => p.category === project.category),
    ...others.filter((p) => p.category !== project.category),
  ].slice(0, 3);

  const whatsappText = encodeURIComponent(
    `Hi Portalis Interiors, I saw the ${project.title} project and would like to discuss a similar space.`
  );

  // Breadcrumb data for Google (Home › Projects › Project)
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://portalis.ae/" },
      { "@type": "ListItem", position: 2, name: "Projects", item: "https://portalis.ae/projects" },
      { "@type": "ListItem", position: 3, name: project.title, item: `https://portalis.ae/projects/${slug}` },
    ],
  };

  const pillBase =
    "rounded-full text-[10px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.18em] font-semibold py-2.5 px-5 sm:py-3 sm:px-7 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-green";

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-light-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        />

        {/* ═══ Header: text left, cover photo right (stacked on phones) ═══ */}
        <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-5 md:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <Link
                href="/projects"
                className="text-[13px] text-charcoal-black/65 underline decoration-warm-gold underline-offset-4 hover:text-forest-green"
              >
                All projects
              </Link>

              <p className="mt-6 text-[13px] font-semibold text-warm-gold">{project.category}</p>
              <h1 className="mt-2 font-heading text-[2rem] sm:text-4xl lg:text-[2.6rem] leading-[1.12] text-forest-green">
                {project.title}
              </h1>
              <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.7] text-charcoal-black/85">
                {project.desc}
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                <a
                  href={`https://wa.me/971555222074?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${pillBase} bg-forest-green text-light-cream hover:bg-warm-gold hover:text-forest-green`}
                >
                  WhatsApp us
                </a>
                <Link
                  href="/#contact"
                  className={`${pillBase} border border-forest-green/40 text-forest-green hover:bg-forest-green hover:text-light-cream`}
                >
                  Book consultation
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.src}
                  alt={`${project.title} interior by Portalis Interiors`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ Project photos ═══ */}
        <section className="pb-14 md:pb-20 px-5 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-xl sm:text-2xl text-forest-green mb-5 md:mb-6">
              Project photos
            </h2>
            <ProjectGallery project={project} />
          </div>
        </section>

        {/* ═══ Similar projects ═══ */}
        <section className="py-14 md:py-20 px-5 md:px-12 bg-white border-t border-warm-gold/15">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between gap-4 mb-6 md:mb-8">
              <h2 className="font-heading text-xl sm:text-2xl text-forest-green">Similar projects</h2>
              <Link
                href="/projects"
                className="text-[13px] font-semibold text-forest-green underline decoration-warm-gold underline-offset-4 hover:decoration-forest-green shrink-0"
              >
                View all
              </Link>
            </div>

            {/* Phones: swipe sideways · Desktop: 3 columns */}
            <ul className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-5 px-5 md:mx-0 md:px-0 pb-2">
              {similar.map((p) => (
                <li key={p.id} className="snap-start shrink-0 w-[78%] sm:w-[45%] md:w-auto">
                  <Link
                    href={`/projects/${getProjectSlug(p)}`}
                    className="group flex flex-col h-full border border-warm-gold/20 bg-light-cream hover:border-forest-green/40 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-green"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={p.src}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 78vw, 33vw"
                      />
                    </div>
                    <div className="p-4 md:p-5 flex flex-col gap-1.5">
                      <span className="text-xs font-semibold text-warm-gold">{p.category}</span>
                      <h3 className="font-heading text-lg text-forest-green leading-snug group-hover:underline decoration-warm-gold underline-offset-4">
                        {p.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed text-charcoal-black/75 line-clamp-2">{p.desc}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}