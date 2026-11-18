import Image from "next/image";
import Link from "next/link";
import {
  FALLBACK_IMAGE,
  formatDate,
  getExcerpt,
  getReadingTime,
  type PostSummary,
} from "@/lib/blog";

export function PostMeta({
  category,
  publishedAt,
  text,
  author,
}: {
  category: string | null;
  publishedAt: string | null;
  text: string | null;
  author?: string;
}) {
  const date = formatDate(publishedAt);
  const minutes = getReadingTime(text);

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
      {category && (
        <span className="font-semibold text-forest-green">{category}</span>
      )}
      {author && <span className="text-charcoal-black/60">By {author}</span>}
      {date && publishedAt && (
        <time dateTime={publishedAt} className="text-charcoal-black/60">
          {date}
        </time>
      )}
      <span className="text-charcoal-black/60">{minutes} min read</span>
    </div>
  );
}

export default function PostCard({ post }: { post: PostSummary }) {
  const excerpt = getExcerpt(post.text, 130);

  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-forest-green/5">
        <Image
          src={post.image ?? FALLBACK_IMAGE}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-5">
        <PostMeta
          category={post.category}
          publishedAt={post.publishedAt}
          text={post.text}
        />
        <h3 className="mt-3 font-heading text-xl text-forest-green leading-snug transition-colors duration-300 group-hover:text-warm-gold">
          {post.title}
        </h3>
        {excerpt && (
          <p className="mt-2 text-sm leading-relaxed text-charcoal-black/70 line-clamp-2">
            {excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}