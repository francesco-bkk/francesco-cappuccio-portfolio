import type { MetadataRoute } from "next";
import { projects, featuredProjects, awards } from "@/lib/content";
import { absoluteUrl, imageUrl } from "@/lib/seo";

import { collectionImages, profileImages, getProjectImageSources } from "@/lib/image-seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      images: Array.from(new Set(["/images/pavilion-crown-1.png", ...featuredProjects.flatMap(project => [project.image, ...(project.hoverImage ? [project.hoverImage] : [])]), "/images/vertier-collection-room.jpg", "/images/project3.jpg", profileImages[0], ...awards.map(award => award.logo)])).map(imageUrl)
    },
    {
      url: absoluteUrl("/work"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: Array.from(new Set(projects.flatMap(project => [project.image, ...(project.hoverImage ? [project.hoverImage] : [])]))).map(imageUrl)
    },
    {
      url: absoluteUrl("/work/vertier-collection"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      images: collectionImages.map(imageUrl)
    },
    {
      url: absoluteUrl("/about"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [...profileImages, ...awards.map(award => award.logo)].map(imageUrl)
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7
    },
    {
      url: absoluteUrl("/privacy"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2
    },
    {
      url: absoluteUrl("/terms"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2
    },
    ...projects.map((project) => ({
      url: absoluteUrl(`/work/${project.slug}/`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: project.featured ? 0.85 : 0.75,
      images: Array.from(new Set([
        ...getProjectImageSources(project),
        ...(project.details?.awardLogos?.map(award => award.src) ?? []),
        ...(project.details?.awardLogo ? [project.details.awardLogo] : []),
        ...(project.details?.clientLogo ? [project.details.clientLogo.src] : [])
      ])).map(imageUrl)
    }))
  ];
}
