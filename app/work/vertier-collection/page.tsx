import { ExpandableImage } from "@/components/ExpandableImage";
import { BalancedImageRow } from "@/components/BalancedImageRow";
import imageDimensions from "@/lib/project-image-dimensions.json";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CollectionShareControls } from "@/components/CollectionShareControls";
import { absoluteUrl, imageUrl, siteName } from "@/lib/seo";

import { collectionImages, getImageDescription, imagePageStructuredData, serializeStructuredData } from "@/lib/image-seo";

const title = "Vertier × Francesco Cappuccio";
const description = "A furniture collection for Vertier: MUAY, NEXUM and HINGE explore the balance of softness, volume and exposed structure.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/work/vertier-collection") },
  openGraph: {
    title: `${title} | ${siteName}`,
    description,
    url: absoluteUrl("/work/vertier-collection"),
    images: [{ url: imageUrl("/images/vertier-collection-room.jpg"), width: 1237, height: 1550, alt: "Vertier furniture collection in a studio setting" }]
  },
  twitter: { card: "summary_large_image", title: `${title} | ${siteName}`, description, images: [imageUrl("/images/vertier-collection-room.jpg")] }
};

type CollectionPiece = {
  number: string;
  name: string;
  type: string;
  text: string;
  image: string;
  alt: string;
  href?: string;
  secondaryImage?: string;
  secondaryAlt?: string;
  secondaryWidth?: number;
  secondaryHeight?: number;
  wideSecondary?: boolean;
  tertiaryImage?: string;
  tertiaryAlt?: string;
  tertiaryWidth?: number;
  tertiaryHeight?: number;
};

const pieces: CollectionPiece[] = [
  {
    number: "01",
    name: "MUAY",
    type: "Sofa",
    text: "The silhouette of a Thai boxing glove becomes a generous place to sit. Gathered leather, compressed volumes and soft curves hold strength and comfort in the same form.",
    image: "/images/vertier-collection-seating.jpg",
    alt: "Red leather sofa and seating from the Vertier collection"
  },
  {
    number: "02",
    name: "NEXUM",
    type: "Coffee table",
    text: "A low, fluid surface joins two rounded volumes into one continuous form. Its broad profile gives the seating group a grounded centre.",
    image: "/images/vertier-collection-nexum-top.jpg",
    alt: "Overhead view of the red NEXUM coffee table and its sculptural shadow",
    secondaryImage: "/images/vertier-collection-nexum-isolated.jpg",
    secondaryAlt: "Isolated view of the red NEXUM coffee table's flowing top and paired bases",
    secondaryWidth: 1800,
    secondaryHeight: 1170,
    wideSecondary: true,
    href: "/work/nexum"
  },
  {
    number: "03",
    name: "HINGE",
    type: "Table",
    text: "Folded steel and exposed joints carry a glass top and natural stone. The construction remains visible, turning the table's structural work into its defining detail.",
    image: "/images/vertier-collection-hinge.jpg",
    alt: "HINGE glass and stone table with red chairs",
    secondaryImage: "/images/vertier-collection-hinge-joint.jpg",
    secondaryAlt: "Close view of the HINGE table's exposed joint and folded steel base",
    secondaryWidth: 1383,
    secondaryHeight: 1500,
    tertiaryImage: "/images/vertier-collection-hinge-side.jpg",
    tertiaryAlt: "Side profile of the HINGE table showing its glass edge, exposed joint and folded steel support",
    tertiaryWidth: 1800,
    tertiaryHeight: 1440,
    href: "/work/hinge"
  }
];

export default function VertierCollectionPage() {
  const photograph = (src: string, alt: string, gallery: { src: string; alt: string }[], priority = false) => {
    const [width, height] = (imageDimensions as Record<string, number[]>)[src];
    return <ExpandableImage key={src} src={src} alt={getImageDescription(src, alt)} priority={priority}
      className="" aspectRatio={width / height} imageFit="contain"
      galleryImages={gallery.map(image => ({ ...image, alt: getImageDescription(image.src, image.alt) }))} galleryIndex={gallery.findIndex((image) => image.src === src)}
      sizes="(min-width: 1280px) 1184px, calc(100vw - 40px)" />;
  };
  return (
    <main className="bg-obsidian">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(imagePageStructuredData("/work/vertier-collection/", title, collectionImages)) }} />
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-10 sm:px-8 lg:pb-32">
        <Link href="/work" className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest2 text-stone hover:text-ivory">
          <ArrowLeft size={15} aria-hidden="true" /> All work
        </Link>
        <header className="grid gap-9 border-b border-ivory/15 pb-11 pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:pt-28">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">Furniture collection / Vertier</p>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(4.4rem,10vw,10rem)] font-light leading-[0.78] tracking-[-0.055em] text-ivory">Form in<br /><em>tension.</em></h1>
          </div>
          <div className="max-w-md lg:justify-self-end">
            <p className="font-body text-lg font-light leading-relaxed text-ivory sm:text-xl">Three pieces, one material conversation: the softness of leather, the weight of sculptural volume and the precision of exposed steel.</p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-widest2 text-stone">Designed by Francesco Cappuccio for Vertier</p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-widest2 text-stone">Photography: Vertier</p>
          </div>
        </header>

        <figure className="mt-8">
          {photograph("/images/vertier-collection-room.jpg", "Vertier collection with sculptural red furniture and HINGE table", [{ src: "/images/vertier-collection-room.jpg", alt: "Vertier collection with sculptural red furniture and HINGE table" }], true)}
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-widest2 text-stone">Vertier × Francesco Cappuccio / Collection view</figcaption>
        </figure>

        <div className="grid gap-8 border-b border-ivory/15 py-20 lg:grid-cols-[1fr_1fr] lg:gap-24 lg:py-28">
          <p className="font-display text-5xl font-light leading-[0.95] tracking-tight text-ivory sm:text-7xl">Strength finds<br /><em>its softer side.</em></p>
          <p className="max-w-lg text-base leading-8 text-stone">Developed for Vertier, this collection brings distinct furniture ideas into one visual language. MUAY takes its volume from Thai boxing gloves. The NEXUM coffee table turns two rounded bases and a flowing top into one continuous form. HINGE makes its load-bearing connections part of the composition.</p>
        </div>

        <div className="space-y-24 pt-20 lg:space-y-36 lg:pt-28">
          {pieces.map((piece) => {
            const gallery = [
              { src: piece.image, alt: piece.alt },
              ...(piece.secondaryImage && piece.secondaryAlt ? [{ src: piece.secondaryImage, alt: piece.secondaryAlt }] : []),
              ...(piece.tertiaryImage && piece.tertiaryAlt ? [{ src: piece.tertiaryImage, alt: piece.tertiaryAlt }] : [])
            ];
            const ratios = gallery.map(({ src }) => {
              const [width, height] = (imageDimensions as Record<string, number[]>)[src];
              return width / height;
            });
            return <section key={piece.name} className="space-y-8 lg:space-y-12">
              <div className="grid gap-6 border-t border-ivory/15 pt-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                <div>
                  <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest2 text-stone"><span>{piece.number} / 03</span><span>{piece.type}</span></div>
                  <h2 className="mt-6 font-display text-[clamp(4.2rem,7vw,8rem)] font-light leading-[0.9] tracking-[-0.045em] text-ivory">{piece.name}</h2>
                </div>
                <div className="lg:self-end">
                  <p className="max-w-xl text-base leading-8 text-stone">{piece.text}</p>
                  {piece.href && <Link href={piece.href} className="mt-6 inline-flex w-fit items-center gap-3 border-b border-ivory pb-2 font-mono text-[10px] uppercase tracking-widest2 text-ivory hover:text-stone">Explore the project <ArrowUpRight size={15} aria-hidden="true" /></Link>}
                </div>
              </div>
              <BalancedImageRow ratios={ratios} label={piece.name.toLowerCase()}>
                {gallery.map(({ src, alt }) => photograph(src, alt, gallery))}
              </BalancedImageRow>
              {piece.wideSecondary && <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">01 / Overhead view · 02 / Profile view</p>}
              {piece.tertiaryImage && <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">HINGE / Complete view · Exposed joint · Side profile</p>}
            </section>;
          })}
        </div>

        <CollectionShareControls url={absoluteUrl("/work/vertier-collection")} title={title} description={description} />

        <footer className="mt-24 grid gap-8 border-t border-ivory/15 pt-8 lg:mt-36 lg:grid-cols-2">
          <div><p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">Collaboration</p><p className="mt-5 font-display text-4xl font-light text-ivory sm:text-5xl">Francesco Cappuccio × Vertier</p></div>
          <Link href="/work" className="inline-flex w-fit items-center gap-3 self-end border-b border-ivory pb-2 font-mono text-[10px] uppercase tracking-widest2 text-ivory lg:justify-self-end">Return to all work <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </footer>
      </div>
    </main>
  );
}
