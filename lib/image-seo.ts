import imageRegistry from "@/lib/image-metadata.json";
import projectSearchMetadata from "@/lib/project-search-metadata.json";
import type { Project } from "@/lib/content";
import { absoluteUrl, imageUrl } from "@/lib/seo";

type ImageMetadata = {
  description: string;
  width: number;
  height: number;
  creator?: string;
  creatorType?: "Person" | "Organization";
  creditText?: string;
  copyrightNotice?: string;
};

const registry = imageRegistry as Record<string, ImageMetadata>;
const searchMetadata: Record<string, { title: string; description: string }> = projectSearchMetadata;

export function getImageDescription(src: string, fallback: string) {
  return registry[src]?.description ?? fallback;
}

export function getImageStructuredData(src: string) {
  const record = registry[src];
  return {
    "@type": "ImageObject",
    "@id": `${imageUrl(src)}#image`,
    contentUrl: imageUrl(src),
    ...(record ? {
      description: record.description,
      width: record.width,
      height: record.height,
      ...(record.creditText ? { creditText: record.creditText } : {}),
      ...(record.copyrightNotice ? { copyrightNotice: record.copyrightNotice } : {}),
      ...(record.creator ? { creator: {
        "@type": record.creatorType ?? "Person",
        name: record.creator,
        ...(record.creator === "Francesco Cappuccio" ? { url: absoluteUrl("/") } : {})
      } } : {})
    } : {})
  };
}

export function getProjectImageSources(project: Project) {
  if (project.slug === "framed") {
    return [1, 8, 9, 2, 3, 4, 6, 7, 5].map(number => `/images/framed-${number}.png`);
  }
  return Array.from(new Set([
    project.image,
    ...(project.hoverImage ? [project.hoverImage] : []),
    ...(project.detailImages ?? [
      `/images/${project.slug}-detail-1.jpg`, `/images/${project.slug}-detail-2.jpg`
    ])
  ]));
}

export function getProjectSearchMetadata(project: Project) {
  return searchMetadata[project.slug] ?? { title: project.seoTitle ?? project.title, description: project.summary };
}

export function getProjectImageCredits(project: Project) {
  if (project.slug === "scacco-matto") return [{ label: "Design", value: "Francesco Cappuccio" }];
  if (["nexum", "hinge"].includes(project.slug)) return [
    { label: "Design", value: "Francesco Cappuccio" },
    { label: "Images", value: "Vertier" }
  ];
  if (project.details?.meta?.some(item => item.label.toLowerCase() === "design & images")) return [];
  if (project.slug === "amsterdam") return [{ label: "Design & project images", value: "Francesco Cappuccio" }];
  if (project.details?.meta?.some(item => ["designer", "artists"].includes(item.label.toLowerCase()))) {
    return [{ label: "Images", value: "Francesco Cappuccio" }];
  }
  return [{ label: "Design & images", value: "Francesco Cappuccio" }];
}

export const collectionImages = Object.keys(registry).filter(src => src.startsWith("/images/vertier-collection-"));
export const profileImages = ["/images/studio-portrait.jpg", "/images/francesco-at-work.jpg"];

export function imagePageStructuredData(route: string, name: string, sources: string[]) {
  const images = Array.from(new Set(sources)).map(getImageStructuredData);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(route)}#webpage`,
    url: absoluteUrl(route),
    name,
    ...(images.length ? { primaryImageOfPage: images[0], image: images } : {})
  };
}

export function serializeStructuredData(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
