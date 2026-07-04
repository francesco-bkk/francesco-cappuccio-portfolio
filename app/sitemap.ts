import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: absoluteUrl("/work"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9
    },
    ...projects.map((project) => ({
      url: absoluteUrl(`/work/${project.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: project.featured ? 0.85 : 0.75
    }))
  ];
}
