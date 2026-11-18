import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import PostCard, { PostMeta } from "@/components/blog/PostCard";
import {
  FALLBACK_IMAGE,
  POST_SUMMARY_FIELDS,
  getExcerpt,
  type PostSummary,
} from "@/lib/blog";

// Refresh the list from Sanity every 5 minutes
export const revalidate = 300;

async function getPosts(): Promise<PostSummary[]> {
  try {
    return await client.fetch(
      `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) { ${POST_SUMMARY_FIELDS} }`
    );
  } catch (err) {
    console.error("Error fetching Sanity posts:", err);
    return [];
  }
}

export default async function BlogListingPage() {
  const posts = await getPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-light-cream text-charcoal-black font-body pt-28 md:pt-32 pb-24">
        {/* ── Header ── */}
        <header className="px-6 md:px-12 max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-forest-green">
            Insights &amp; trends
          </p>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl md:text-[3.5rem] text-forest-green leading-tight">
            The Portalis Journal
          </h1>
          <p className="mt-4 max-w-xl text-[15px] sm:text-base leading-relaxed text-charcoal-black/70">
            Expert insights on luxury interior architecture, custom joinery,
            turnkey fit-outs, and regulatory clearances in Dubai.
          </p>
        </header>

        {!featured ? (
          <section className="px-6 md:px-12 max-w-7xl mx-auto mt-16 border-t border-forest-green/10 pt-16">
            <p className="text-[15px] text-charcoal-black/70">
              No articles published yet. Check back soon for insights.
            </p>
          </section>
        ) : (
          <>
            {/* ── Latest article ── */}
            <section
              aria-label="Latest article"
              className="px-6 md:px-12 max-w-7xl mx-auto mt-12 md:mt-16 border-t border-forest-green/10 pt-12 md:pt-16"
            >
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                <div className="relative lg:col-span-7 aspect-[4/3] overflow-hidden rounded-md bg-forest-green/5">
                  <Image
                    src={featured.image ?? FALLBACK_IMAGE}
                    alt=""
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="lg:col-span-5">
                  <PostMeta
                    category={featured.category}
                    publishedAt={featured.publishedAt}
                    text={featured.text}
                  />
                  <h2 className="mt-4 font-heading text-3xl md:text-4xl text-forest-green leading-tight transition-colors duration-300 group-hover:text-warm-gold">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-charcoal-black/70">
                    {getExcerpt(featured.text, 220)}
                  </p>
                  <span className="mt-8 inline-flex items-center rounded-full bg-forest-green px-6 py-3 text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-warm-gold">
                    Read article
                  </span>
                </div>
              </Link>
            </section>

            {/* ── More articles ── */}
            {rest.length > 0 && (
              <section className="px-6 md:px-12 max-w-7xl mx-auto mt-20 md:mt-24">
                <h2 className="font-heading text-2xl md:text-3xl text-forest-green">
                  More articles
                </h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                  {rest.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </main>

      <Footer />
    </>
  );
}