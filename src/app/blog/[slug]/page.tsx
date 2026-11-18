import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import PostCard, { PostMeta } from "@/components/blog/PostCard";
import {
  FALLBACK_IMAGE,
  POST_SUMMARY_FIELDS,
  slugify,
  type PostSummary,
} from "@/lib/blog";

export const revalidate = 300;

const SITE_URL = "https://portalis.ae";
const WHATSAPP_NUMBER = "971555222074";

/* ───────── Types & helpers ───────── */

type Block = {
  _type: string;
  _key?: string;
  style?: string;
  children?: { text?: string }[];
};

type Post = PostSummary & {
  body: Block[] | null;
  authorName: string | null;
  updatedAt: string | null;
};

const blockText = (block: Block) =>
  (block.children ?? []).map((c) => c.text ?? "").join("");

const portableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset) return null;
      return (
        <figure className="relative w-full aspect-[16/9] my-10 overflow-hidden rounded-md bg-forest-green/5">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || ""}
            fill
            sizes="(max-width: 1024px) 100vw, 720px"
            className="object-cover"
          />
        </figure>
      );
    },
  },
  block: {
    h2: ({ children, value }: { children?: React.ReactNode; value: Block }) => (
      <h2 id={slugify(blockText(value))} className="scroll-mt-28">
        {children}
      </h2>
    ),
  },
};

/* ───────── Static params ───────── */

export async function generateStaticParams() {
  try {
    const posts = await client.fetch(
      `*[_type == "post" && defined(slug.current)] { "slug": slug.current }`
    );
    return posts.map((post: { slug: string }) => ({ slug: post.slug }));
  } catch (err) {
    console.error("Error fetching static params slugs from Sanity:", err);
    return [];
  }
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

/* ───────── SEO ───────── */

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const meta = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        title,
        "image": mainImage.asset->url,
        "text": pt::text(body)
      }`,
      { slug }
    );
    if (!meta?.title) return {};

    const plain = (meta.text || "").replace(/\s+/g, " ").trim();
    const description =
      plain.length > 155 ? `${plain.slice(0, 152).trimEnd()}...` : plain || undefined;

    return {
      title: { absolute: `${meta.title} | Portalis Interiors` },
      description,
      alternates: { canonical: `/blog/${slug}` },
      openGraph: {
        type: "article",
        title: meta.title,
        description,
        images: meta.image ? [meta.image] : undefined,
      },
    };
  } catch {
    return {};
  }
}

/* ───────── Page ───────── */

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;

  let post: Post | null = null;
  try {
    post = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        ${POST_SUMMARY_FIELDS},
        body,
        "authorName": author->name,
        "updatedAt": _updatedAt
      }`,
      { slug }
    );
  } catch (err) {
    console.error("Error fetching Sanity post details:", err);
  }

  if (!post) notFound();

  let related: PostSummary[] = [];
  try {
    related = await client.fetch(
      `*[_type == "post" && defined(slug.current) && slug.current != $slug] | order(publishedAt desc)[0...3] { ${POST_SUMMARY_FIELDS} }`,
      { slug }
    );
  } catch (err) {
    console.error("Error fetching related posts from Sanity:", err);
  }

  const author = post.authorName || "Portalis Interiors team";
  const body = post.body ?? [];

  // "In this article" list from the H2 headings in the body
  const toc = body
    .filter((b) => b._type === "block" && b.style === "h2")
    .map((b) => ({ text: blockText(b), id: slugify(blockText(b)) }))
    .filter((item) => item.text);
  const showToc = toc.length >= 2;

  const url = `${SITE_URL}/blog/${post.slug}`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Portalis, I read "${post.title}" and would like to discuss a fit-out.`
  )}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.image ? [post.image] : undefined,
    datePublished: post.publishedAt ?? undefined,
    dateModified: post.updatedAt ?? post.publishedAt ?? undefined,
    author: post.authorName
      ? { "@type": "Person", name: post.authorName }
      : { "@type": "Organization", name: "Portalis Interiors" },
    publisher: {
      "@type": "Organization",
      name: "Portalis Interiors LLC",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/apple-touch-icon.png` },
    },
    mainEntityOfPage: url,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const TocList = () => (
    <ol className="space-y-3 text-sm">
      {toc.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="text-charcoal-black/70 leading-snug transition-colors hover:text-forest-green"
          >
            {item.text}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main className="min-h-screen bg-light-cream text-charcoal-black font-body pt-28 md:pt-32 pb-24">
        <article>
          {/* ── Header ── */}
          <header className="px-6 md:px-12 max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-xs text-charcoal-black/60">
                <li>
                  <Link href="/" className="hover:text-forest-green transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/blog" className="hover:text-forest-green transition-colors">
                    Blog
                  </Link>
                </li>
              </ol>
            </nav>

            <h1 className="mt-6 font-heading text-3xl sm:text-4xl md:text-5xl text-forest-green leading-[1.15]">
              {post.title}
            </h1>

            <div className="mt-6 border-y border-forest-green/10 py-4">
              <PostMeta
                category={post.category}
                publishedAt={post.publishedAt}
                text={post.text}
                author={author}
              />
            </div>
          </header>

          {/* ── Cover image ── */}
          <div className="px-6 md:px-12 max-w-6xl mx-auto mt-10">
            <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-forest-green/5">
              <Image
                src={post.image ?? FALLBACK_IMAGE}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1152px"
                className="object-cover"
              />
            </div>
          </div>

          {/* ── Body + contents ── */}
          <div className="px-6 md:px-12 max-w-6xl mx-auto mt-12 lg:mt-16 grid lg:grid-cols-12 gap-10">
            {showToc && (
              <aside className="lg:col-span-3">
                {/* Mobile: tap to open */}
                <details className="lg:hidden rounded-md border border-forest-green/15 bg-white px-5 py-4">
                  <summary className="cursor-pointer text-sm font-semibold text-forest-green">
                    In this article
                  </summary>
                  <div className="mt-4">
                    <TocList />
                  </div>
                </details>

                {/* Desktop: sticky list */}
                <nav aria-label="In this article" className="hidden lg:block lg:sticky lg:top-28">
                  <p className="text-sm font-semibold text-forest-green mb-4">
                    In this article
                  </p>
                  <TocList />
                </nav>
              </aside>
            )}

            <div
              className={
                showToc ? "lg:col-span-8 lg:col-start-5" : "lg:col-span-8 lg:col-start-3"
              }
            >
              <div className="blog-content-rich max-w-[68ch]">
                <PortableText value={body as any} components={portableTextComponents as any} />
              </div>

              {/* ── Enquiry box ── */}
              <aside className="mt-16 rounded-md bg-forest-green px-6 py-8 sm:px-10 sm:py-10 text-white">
                <h2 className="font-heading text-2xl sm:text-3xl leading-tight">
                  Planning a fit-out?
                </h2>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/80">
                  Tell us about your space and we&apos;ll arrange a consultation.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-warm-gold px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-forest-green"
                  >
                    WhatsApp us
                  </a>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-xs font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-forest-green"
                  >
                    Book consultation
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </article>

        {/* ── Related articles ── */}
        {related.length > 0 && (
          <section className="px-6 md:px-12 max-w-6xl mx-auto mt-24 border-t border-forest-green/10 pt-16">
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-heading text-2xl md:text-3xl text-forest-green">
                Related articles
              </h2>
              <Link
                href="/blog"
                className="shrink-0 text-sm font-semibold text-forest-green hover:text-warm-gold transition-colors"
              >
                All articles
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {related.map((item) => (
                <PostCard key={item.slug} post={item} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}