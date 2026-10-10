import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ExpandableImage } from "@/components/ExpandableImage";
import { ProjectShareControls } from "@/components/ProjectShareControls";
import type { Project } from "@/lib/content";

export function PavilionProjectLayout({ project, facebookShareHref, linkedInShareHref }: {
  project: Project;
  facebookShareHref: string;
  linkedInShareHref: string;
}) {
  const hero = project.image;
  const entrance = "/images/pavilion-crown-7.png";
  const sources = [hero, project.image, ...(project.detailImages ?? [])]
    .filter((src, index, all) => all.indexOf(src) === index);
  const gallery = sources.map((src, index) => ({ src, alt: index === 0
    ? "The Pavilion Crown — illuminated glass facade detail"
    : `${project.title} — project photograph ${index + 1}` }));
  const portraits = new Set([4, 5, 6, 8].map((number) => `/images/pavilion-crown-${number}.png`));
  const photograph = (src: string, priority = false) => {
    const index = sources.indexOf(src);
    const aspect = portraits.has(src) ? "aspect-[2/3]" : src.endsWith("gallery-1.jpg")
      ? "aspect-[2400/1536]" : src.endsWith("gallery-4.jpg")
      ? "aspect-[2400/1586]" : src.includes("gallery-") ? "aspect-[2400/1602]" : "aspect-[3/2]";
    return <ExpandableImage key={src} src={src} alt={gallery[index].alt} priority={priority}
      className={aspect} imageFit="contain" sizes="(min-width: 1280px) 1216px, calc(100vw - 40px)"
      galleryImages={gallery} galleryIndex={index} />;
  };
  const details = project.details;

  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8" data-pavilion-layout>
      <Link href="/work" className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-stone hover:text-ivory">
        <ArrowLeft aria-hidden="true" size={16} strokeWidth={1.5} />Back to Portfolio
      </Link>
      <header className="mb-10 mt-12 sm:mb-12">
        <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">{project.eyebrow}</p>
        <h1 className="mt-5 font-body text-4xl font-light leading-tight text-ivory sm:text-5xl lg:text-6xl">{project.title}</h1>
      </header>
      {photograph(hero, true)}
      <div className="my-12 grid gap-10 border-b border-ivory/10 pb-12 lg:my-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:pb-16">
        <div>
          <dl className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
            {details?.meta?.map((item) => <div key={item.label}>
              <dt className="font-mono text-[10px] uppercase tracking-widest2 text-stone">{item.label}</dt>
              <dd className="mt-2 text-sm leading-6 text-ivory">{item.value}</dd>
            </div>)}
          </dl>
          {details?.awardLogo && <div className="mt-8" data-project-awards>
            <Image src={details.awardLogo} alt={`${project.title} award logo`} width={1280} height={720}
              className="h-24 w-auto max-w-full bg-white object-contain" data-award-logo />
          </div>}
        </div>
        <div className="grid content-start gap-6 text-base leading-7 text-stone">
          {details?.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {details?.brand && <p className="font-mono text-xs uppercase tracking-widest">Brand: <a
            href={details.brandHref} target="_blank" rel="noreferrer" className="text-ivory underline underline-offset-4">{details.brand}</a></p>}
          {details?.links?.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer"
            className="text-sm text-ivory underline decoration-ivory/25 underline-offset-4 hover:decoration-ivory">
            <span className="mr-3 font-mono text-[10px] uppercase tracking-widest2 text-stone">{link.label}</span>{link.text}
          </a>)}
        </div>
      </div>
      <div className="grid gap-6 sm:gap-8" aria-label="Project photographs">
        {photograph(entrance)}
        <div className="grid items-start gap-6 sm:grid-cols-2 sm:gap-8">
          {sources.filter((src) => portraits.has(src)).map((src) => photograph(src))}
        </div>
        {photograph("/images/pavilion-crown-2.png")}
        {photograph("/images/pavilion-crown-3.png")}
        <div className="grid items-start gap-6 sm:grid-cols-2 sm:gap-8">
          {sources.filter((src) => src.includes("gallery-")).map((src) => photograph(src))}
        </div>
      </div>
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
