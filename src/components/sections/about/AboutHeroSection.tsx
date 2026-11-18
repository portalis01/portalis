import Image from "next/image";
import Link from "next/link";

const VALUES = [
  {
    title: "Client focused",
    desc: "We listen, collaborate, and tailor every detail to reflect your lifestyle and goals.",
  },
  {
    title: "Thoughtful design",
    desc: "Every space is carefully planned to balance beauty, comfort, and functionality.",
  },
  {
    title: "Quality assured",
    desc: "We use premium materials and work with skilled craftsmen to deliver excellence.",
  },
];

const STRIP_IMAGES = [
  { src: "/assets/extracted_img_p23_1_203.jpeg", alt: "Lekki Restobar Jumeirah interior" },
  { src: "/assets/extracted_img_p14_6_965.jpeg", alt: "Indi16 Business Bay restobar" },
  { src: "/assets/extracted_img_p15_4_986.jpeg", alt: "Nox Citywalk cocktail lounge" },
  { src: "/assets/extracted_img_p13_3_924.jpeg", alt: "Daikan Citywalk ramen bistro" },
  { src: "/assets/extracted_img_p7_1_375.jpeg", alt: "Schneider Electric corporate office" },
];

export default function AboutHeroSection() {
  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-20 px-5 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* ═══ Intro: text left, main photo right ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <p className="text-sm font-semibold text-warm-gold">Our story</p>

            <h1 className="mt-4 font-heading text-[2.2rem] sm:text-5xl lg:text-[3.25rem] text-forest-green leading-[1.08]">
              Designing Spaces.
              <br />
              Enhancing Lives.
            </h1>

            <div className="mt-6 space-y-4 max-w-[52ch]">
              <p className="text-[15px] leading-[1.75] text-charcoal-black/85">
                At Portalis Interiors, we believe that great design goes beyond aesthetics. It
                shapes the way you live, work, and feel every day.
              </p>
              <p className="text-[15px] leading-[1.75] text-charcoal-black/85">
                Our approach is rooted in understanding your vision and crafting interiors that
                are timeless, functional, and uniquely yours.
              </p>
            </div>

            <Link
              href="/projects"
              className="mt-8 inline-block text-sm font-semibold text-forest-green underline decoration-warm-gold decoration-2 underline-offset-[6px] hover:decoration-forest-green transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest-green"
            >
              Learn more
            </Link>
          </div>

          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src="/assets/extracted_img_p20_1_182.jpeg"
                alt="Lunico Restobar La Mer interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* ═══ Photo strip ═══ */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-3 md:gap-4">
          {STRIP_IMAGES.map((img, i) => (
            <div
              key={img.src}
              className={`relative aspect-[4/5] overflow-hidden ${i === 4 ? "hidden sm:block" : ""}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 20vw"
              />
            </div>
          ))}
        </div>

        {/* ═══ Values ═══ */}
        <div className="mt-16 md:mt-20 pt-10 border-t border-forest-green/15 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {VALUES.map((v) => (
            <div key={v.title}>
              <h2 className="font-heading text-xl text-forest-green">{v.title}</h2>
              <p className="mt-2 text-[14px] leading-relaxed text-charcoal-black/75 max-w-[34ch]">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ═══ Mission & Vision ═══ */}
        <div className="mt-14 md:mt-16 pt-10 border-t border-forest-green/15 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h2 className="font-heading text-2xl sm:text-[1.75rem] text-forest-green">Our mission</h2>
            <p className="mt-4 text-[15px] leading-[1.75] text-charcoal-black/85 max-w-[60ch]">
              To be the premier partner for spatial transformations across the GCC, recognized for
              redefining environments through architectural innovation, precision craftsmanship,
              and a seamless end-to-end approach that sets global benchmarks for quality and
              execution. By bridging imaginative design with flawless operational delivery, we aim
              to shape inspiring, sustainable spaces that elevate human experience and stand as
              timeless landmarks of excellence.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl sm:text-[1.75rem] text-forest-green">Our vision</h2>
            <p className="mt-4 text-[15px] leading-[1.75] text-charcoal-black/85 max-w-[60ch]">
              To deliver turnkey, high-end design development and fit-out solutions across the
              hospitality, corporate, retail, and wellness sectors. We pledge to collaborate
              closely with our clients to transform their concepts into functional, inspiring, and
              cost-effective realities, navigating complex regulatory frameworks flawlessly and
              consistently honouring our commitments to timelines, budget, and environmental
              sustainability.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}