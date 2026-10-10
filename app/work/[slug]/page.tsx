import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectGalleryLayout } from "@/components/ProjectGalleryLayout";
import { getProject, projects } from "@/lib/content";
import { absoluteUrl, imageUrl, siteName } from "@/lib/seo";
import { getImageDescription, getImageStructuredData, getProjectImageSources, getProjectSearchMetadata, serializeStructuredData } from "@/lib/image-seo";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const awardLogoDimensions: Record<string, { width: number; height: number }> = {
  "/images/awards/archiproducts-awards-winner.jpg": { width: 2400, height: 981 },
  "/images/awards/scacco-matto-epda-2023.png": { width: 570, height: 494 },
  "/images/awards/scacco-matto-a-design-award-2023-silver.png": {
    width: 1200,
    height: 1800
  },
  "/images/awards/scacco-matto-taipei-design-award-2023.jpeg": {
    width: 1240,
    height: 760
  },
  "/images/awards/european-product-design-award-2019-gold.png": {
    width: 2700,
    height: 2400
  },
  "/images/awards/lit-lighting-design-awards-2023-winner.png": {
    width: 1280,
    height: 720
  },
  "/images/awards/lit-lighting-design-awards-2025-winner.jpg": {
    width: 633,
    height: 362
  },
  "/images/awards/muse-design-awards.png": { width: 464, height: 233 },
  "/images/awards/red-dot-award.jpg": { width: 461, height: 356 }
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project"
    };
  }

  const search = getProjectSearchMetadata(project);
  const seoTitle = search.title;
  const shareImage = project.shareImage ?? project.image;
  const shareImageData = getImageStructuredData(shareImage);
  const shareImageDimensions = { width: shareImageData.width ?? 1200, height: shareImageData.height ?? 1500 };

  return {
    title: seoTitle,
    description: search.description,
    alternates: {
      canonical: absoluteUrl(`/work/${project.slug}/`)
    },
    openGraph: {
      type: "article",
      title: `${seoTitle} | ${siteName}`,
      description: search.description,
      url: absoluteUrl(`/work/${project.slug}/`),
      images: [
        {
          url: imageUrl(shareImage),
          width: shareImageDimensions.width,
          height: shareImageDimensions.height,
          alt: getImageDescription(shareImage, project.title)
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${seoTitle} | ${siteName}`,
      description: search.description,
      images: [imageUrl(shareImage)]
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const awardLogos: {
    src: string;
    title: string;
    href?: string;
  }[] =
    project.details?.awardLogos ??
    (project.details?.awardLogo
      ? [
          {
            src: project.details.awardLogo,
            title: `${project.title} award logo`
          }
        ]
      : []);
  const projectImages = getProjectImageSources(project).map(getImageStructuredData);
  const search = getProjectSearchMetadata(project);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: search.description,
    mainEntityOfPage: absoluteUrl(`/work/${project.slug}/`),
    url: absoluteUrl(`/work/${project.slug}/`),
    image: projectImages,
    creator: {
      "@type": "Person",
      name: "Francesco Cappuccio"
    },
    publisher: {
      "@type": "Person",
      name: siteName,
      url: absoluteUrl("/")
    }
  };
  const facebookShareHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    absoluteUrl(`/work/${project.slug}`)
  )}`;
  const linkedInShareHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    absoluteUrl(`/work/${project.slug}`)
  )}`;

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeStructuredData(structuredData) }}
      />
      <ProjectGalleryLayout project={project}
        awards={awardLogos.map((award) => ({ ...award, ...(awardLogoDimensions[award.src] ?? { width: 1600, height: 900 }) }))}
        facebookShareHref={facebookShareHref} linkedInShareHref={linkedInShareHref} />
    </main>
  );
}
