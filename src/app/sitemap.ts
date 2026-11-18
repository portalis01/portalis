import type { MetadataRoute } from "next";
import { SERVICE_SLUGS } from "@/constants/services";
import { getAllProjectSlugs } from "@/lib/projects";
import { client } from "@/sanity/lib/client";

const SITE_URL = "https://portalis.ae";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: now, priority: 0.8 },
    { url: `${SITE_URL}/services`, lastModified: now, priority: 0.9 },
    { url: `${SITE_URL}/projects`, lastModified: now, priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: now, priority: 0.7 },
    ...SERVICE_SLUGS.map((slug) => ({
      url: `${SITE_URL}/services/${slug}`,
      lastModified: now,
      priority: 0.8,
    })),
    ...getAllProjectSlugs().map((slug) => ({
      url: `${SITE_URL}/projects/${slug}`,
      lastModified: now,
      priority: 0.8,
    })),
  ];

  try {
    const posts: { slug: string; updatedAt: string }[] = await client.fetch(
      `*[_type == "post" && defined(slug.current)]{ "slug": slug.current, "updatedAt": _updatedAt }`
    );
    posts.forEach((p) =>
      pages.push({
        url: `${SITE_URL}/blog/${p.slug}`,
        lastModified: new Date(p.updatedAt),
        priority: 0.6,
      })
    );
  } catch {}

  return pages;
}