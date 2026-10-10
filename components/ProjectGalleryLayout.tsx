import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ExpandableImage } from "@/components/ExpandableImage";
import { BalancedImageRow } from "@/components/BalancedImageRow";
import { ProjectShareControls } from "@/components/ProjectShareControls";
import { getImageDescription, getProjectImageCredits, getProjectImageSources } from "@/lib/image-seo";
import type { Project } from "@/lib/content";
import imageDimensions from "@/lib/project-image-dimensions.json";

export function ProjectGalleryLayout({ project, facebookShareHref, linkedInShareHref, awards }: {
  project: Project;
  facebookShareHref: string;
  linkedInShareHref: string;
  awards: { src: string; title: string; href?: string; width: number; height: number }[];
}) {
  const hero = project.image;
  const entrance = "/images/pavilion-crown-7.png";
  const sources = getProjectImageSources(project);
  const gallery = sources.map(src => ({ src, alt: getImageDescription(src, project.title) }));
  const portraits = new Set([4, 5, 6, 8].map((number) => `/images/pavilion-crown-${number}.png`));
  const photograph = (src: string, priority = false, opening = false) => {
    const index = sources.indexOf(src);
    const [width, height] = (imageDimensions as Record<string, number[]>)[src] ?? [4, 5];
    return <ExpandableImage key={src} src={src} alt={gallery[index].alt} priority={priority || opening}
      className="" aspectRatio={width / height} imageFit="contain"
      hoverSrc={priority ? project.hoverImage : undefined}
      hoverAlt={project.hoverImage ? getImageDescription(project.hoverImage, project.title) : undefined}
      hoverGalleryIndex={project.hoverImage ? sources.indexOf(project.hoverImage) : undefined}
      imagePosition={priority ? project.imagePosition : undefined}
      hoverImagePosition={priority ? project.hoverImagePosition : undefined}
      sizes="(min-width: 1280px) 1216px, calc(100vw - 40px)"
      galleryImages={gallery} galleryIndex={index} />;
  };
  // Weight columns by the original proportions so every image in a row has
  // the same height, without cropping or stretching its source photograph.
  const imageRow = (images: string[], opening = false, label?: string) => {
    const ratios = images.map((src) => {
      const [width, height] = (imageDimensions as Record<string, number[]>)[src] ?? [4, 5];
      return width / height;
    });
    return <BalancedImageRow key={images.join("-")} ratios={ratios} label={label}>
      {images.map((src, index) => photograph(src, opening && index === 0, opening))}
    </BalancedImageRow>;
  };
  const details = project.details;
  const imageCredits = getProjectImageCredits(project);
  const pairedOpening = !["damansara", "framed"].includes(project.slug) && sources.length > 1;
  const openingCount = sources.length === 3 ? 3 : 2;
  const [heroWidth, heroHeight] = (imageDimensions as Record<string, number[]>)[hero] ?? [4, 5];
  const remaining = pairedOpening ? sources.slice(openingCount) : sources.filter((src) => src !== hero);
  const galleryRows: string[][] = [];
  for (let index = 0; index < remaining.length;) {
    const count = remaining.length - index === 3 ? 3 : 2;
    galleryRows.push(remaining.slice(index, index + count));
    index += count;
  }
  const hasFacts = Boolean(details?.meta?.length || awards.length || details?.clientLogo);

  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8" data-project-gallery-layout data-lighting-layout={project.category === "lighting" || project.additionalCategories?.includes("lighting") ? "" : undefined} data-pavilion-layout={project.slug === "damansara" ? "" : undefined}>
      <Link href="/work" className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-stone hover:text-ivory">
        <ArrowLeft aria-hidden="true" size={16} strokeWidth={1.5} />Back to Portfolio
      </Link>
      <header className="mb-10 mt-12 sm:mb-12">
        <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">{project.eyebrow}</p>
        <h1 className="mt-5 font-body text-4xl font-light leading-tight text-ivory sm:text-5xl lg:text-6xl">{project.title}</h1>
      </header>
      {pairedOpening ? imageRow(sources.slice(0, openingCount), true, "opening")
        : <div className={heroHeight > heroWidth ? "mx-auto max-w-[620px]" : ""}>{photograph(hero, true)}</div>}
      <div className={`my-12 grid gap-10 border-b border-ivory/10 pb-12 lg:my-16 lg:gap-20 lg:pb-16 ${hasFacts ? "lg:grid-cols-[0.8fr_1.2fr]" : ""}`}>
        {hasFacts ? <div>
          <dl className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
            {[...imageCredits, ...(details?.meta ?? [])].map((item) => <div key={item.label}>
              <dt className="font-mono text-[10px] uppercase tracking-widest2 text-stone">{item.label}</dt>
              <dd className="mt-2 text-sm leading-6 text-ivory">{item.value}</dd>
            </div>)}
          </dl>
          {awards.length > 0 && <div className="mt-8 flex flex-wrap items-center gap-4" data-project-awards>
            {awards.map((award) => {
              const logo = <Image src={award.src} alt={award.title} width={award.width} height={award.height}
                className={`${details?.awardLogoSize === "compact" ? "h-[4.2rem] sm:h-[4.9rem]" : "h-24 sm:h-28"} w-auto max-w-full bg-white object-contain`} data-award-logo />;
              return award.href ? <a key={award.src} href={award.href} target="_blank" rel="noreferrer" className="max-w-full" aria-label={`View ${award.title}`}>{logo}</a>
                : <div key={award.src} className="max-w-full">{logo}</div>;
            })}
          </div>}
          {details?.clientLogo && <div className="mt-8">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-widest2 text-stone">Client / Sponsor</p>
            {details.clientLogo.href ? <a href={details.clientLogo.href} target="_blank" rel="noreferrer"><Image src={details.clientLogo.src} alt={details.clientLogo.title} width={600} height={600} className="h-24 w-auto object-contain" /></a>
              : <Image src={details.clientLogo.src} alt={details.clientLogo.title} width={600} height={600} className="h-24 w-auto object-contain" />}
          </div>}
        </div> : null}
        <div className="grid max-w-3xl content-start gap-6 text-base leading-7 text-stone">
          {!hasFacts && imageCredits.map(item => <p key={item.label} className="font-mono text-[10px] uppercase tracking-widest2">{item.label}: {item.value}</p>)}
          {details?.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {!details && <p>{project.summary}</p>}
          {details?.features?.map((feature) => <div key={feature.title}>
            <h2 className="font-body text-xl font-light text-ivory">{feature.title}</h2>
            <p className="mt-3">{feature.body}</p>
          </div>)}
          {details?.brand && <p className="font-mono text-xs uppercase tracking-widest">Brand: <a
            href={details.brandHref} target="_blank" rel="noreferrer" className="text-ivory underline underline-offset-4">{details.brand}</a></p>}
          {details?.links?.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer"
            className="text-sm text-ivory underline decoration-ivory/25 underline-offset-4 hover:decoration-ivory">
            <span className="mr-3 font-mono text-[10px] uppercase tracking-widest2 text-stone">{link.label}</span>{link.text}
          </a>)}
        </div>
      </div>
      {(project.slug === "damansara" || project.slug === "framed" || remaining.length > 0) && <div className="grid gap-6 sm:gap-8" aria-label="Project photographs">
        {project.slug === "damansara" ? <>
        {photograph(entrance)}
        <div className="grid items-start gap-6 sm:grid-cols-2 sm:gap-8">
          {sources.filter((src) => portraits.has(src)).map((src) => photograph(src))}
        </div>
        {photograph("/images/pavilion-crown-2.png")}
        {photograph("/images/pavilion-crown-3.png")}
        <div className="grid items-start gap-6 sm:grid-cols-2 sm:gap-8">
          {sources.filter((src) => src.includes("gallery-")).map((src) => photograph(src))}
        </div>
        </> : project.slug === "framed" ? <>
          {imageRow(["/images/framed-8.png", "/images/framed-9.png"], false, "framed-installation")}
          <section className="mt-6 border-t border-ivory/10 pt-8 sm:mt-10 sm:pt-10" aria-labelledby="making-framed">
            <h2 id="making-framed" className="mb-6 font-mono text-[10px] uppercase tracking-widest2 text-stone">Making Framed</h2>
            <div className="grid gap-6 sm:gap-8" data-framed-making>
              {imageRow([2, 3, 4].map((number) => `/images/framed-${number}.png`), false, "framed-making")}
              {imageRow([6, 7, 5].map((number) => `/images/framed-${number}.png`), false, "framed-closing")}
            </div>
          </section>
        </> : galleryRows.map((row) => imageRow(row))}
      </div>}
      {details?.video && <section className="mt-14 border-t border-ivory/10 pt-10 sm:mt-20 sm:pt-12">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-mono text-[10px] uppercase tracking-widest2 text-stone">{details.video.label}</h2>
          <a href={details.video.href} target="_blank" rel="noreferrer" className="font-mono text-[10px] uppercase tracking-widest text-ivory underline underline-offset-4">Watch on YouTube</a>
        </div>
        <div className="relative aspect-video overflow-hidden bg-panel">
          <iframe src={details.video.embedUrl} title={details.video.title} loading="lazy"
            className="absolute inset-0 h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        </div>
      </section>}
      <div className="mt-12 border-t border-ivory/10 pt-8">
        <ProjectShareControls projectTitle={project.title} facebookShareHref={facebookShareHref}
          linkedInShareHref={linkedInShareHref} facebookPost={project.facebookPost} />
      </div>
    </section>
  );
}
