export type PostSummary = {
  title: string;
  slug: string;
  image: string | null;
  category: string | null;
  publishedAt: string | null;
  text: string | null;
};

/** GROQ fields shared by the blog list, cards and related posts */
export const POST_SUMMARY_FIELDS = `
  title,
  "slug": slug.current,
  "image": mainImage.asset->url,
  "category": categories[0]->title,
  publishedAt,
  "text": pt::text(body)
`;

export const FALLBACK_IMAGE = "/assets/blog_fallback.png";

export function getExcerpt(text: string | null, max = 160): string {
  const plain = (text ?? "").replace(/\s+/g, " ").trim();
  if (!plain) return "";
  return plain.length > max ? `${plain.slice(0, max - 3).trimEnd()}...` : plain;
}

export function getReadingTime(text: string | null): number {
  const words = (text ?? "").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso: string | null): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dubai",
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}