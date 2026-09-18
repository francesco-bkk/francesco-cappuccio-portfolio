import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CollectionShareControls } from "@/components/CollectionShareControls";
import { absoluteUrl, imageUrl, siteName } from "@/lib/seo";

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
  return (
    <main className="bg-obsidian">
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
          </div>
        </header>

        <figure className="mt-8">
          <div className="relative aspect-[4/5] overflow-hidden bg-panel sm:aspect-[16/11]">
            <Image src="/images/vertier-collection-room.jpg" alt="Vertier collection with sculptural red furniture and HINGE table" fill priority sizes="(min-width: 1280px) 1184px, 100vw" className="object-cover object-center" />
          </div>
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-widest2 text-stone">Vertier × Francesco Cappuccio / Collection view</figcaption>
        </figure>

        <div className="grid gap-8 border-b border-ivory/15 py-20 lg:grid-cols-[1fr_1fr] lg:gap-24 lg:py-28">
          <p className="font-display text-5xl font-light leading-[0.95] tracking-tight text-ivory sm:text-7xl">Strength finds<br /><em>its softer side.</em></p>
          <p className="max-w-lg text-base leading-8 text-stone">Developed for Vertier, this collection brings distinct furniture ideas into one visual language. MUAY takes its volume from Thai boxing gloves. The NEXUM coffee table turns two rounded bases and a flowing top into one continuous form. HINGE makes its load-bearing connections part of the composition.</p>
        </div>

        <div className="space-y-24 pt-20 lg:space-y-36 lg:pt-28">
          {pieces.map((piece, index) => (
            <section key={piece.name} className={`grid items-start gap-8 lg:gap-x-16 ${piece.wideSecondary ? "lg:grid-cols-[0.8fr_1.2fr] lg:gap-y-16" : "lg:grid-cols-2 lg:gap-y-10"}`}>
              <div className={`space-y-5 ${index % 2 ? "lg:order-2" : ""}`}>
                <div className={`relative overflow-hidden bg-panel ${piece.wideSecondary ? "aspect-[3/2]" : "aspect-[4/5]"}`}>
                  <Image src={piece.image} alt={piece.alt} fill sizes={piece.wideSecondary ? "(min-width: 1024px) 680px, 100vw" : "(min-width: 1024px) 560px, 100vw"} className="object-cover" />
                </div>
                {piece.wideSecondary && <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">01 / Overhead view</p>}
                {!piece.wideSecondary && piece.secondaryImage && piece.secondaryAlt && piece.secondaryWidth && piece.secondaryHeight && (
                  <Image src={piece.secondaryImage} alt={piece.secondaryAlt} width={piece.secondaryWidth} height={piece.secondaryHeight} sizes="(min-width: 1024px) 560px, 100vw" className="h-auto w-full bg-panel" />
                )}
              </div>
              <div className={`flex flex-col border-t border-ivory/15 pt-5 lg:pt-8 ${piece.tertiaryImage ? "h-full lg:self-stretch" : "lg:sticky lg:top-28 lg:self-start"} ${index % 2 ? "lg:order-1" : ""}`}>
                <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest2 text-stone"><span>{piece.number} / 03</span><span>{piece.type}</span></div>
                <h2 className="mt-14 font-display text-[clamp(4.2rem,7vw,8rem)] font-light leading-[0.9] tracking-[-0.045em] text-ivory lg:mt-24">{piece.name}</h2>
                <p className="mt-8 max-w-md text-base leading-8 text-stone">{piece.text}</p>
                {piece.href && <Link href={piece.href} className="mt-8 inline-flex w-fit items-center gap-3 border-b border-ivory pb-2 font-mono text-[10px] uppercase tracking-widest2 text-ivory hover:text-stone">Explore the project <ArrowUpRight size={15} aria-hidden="true" /></Link>}
                {piece.tertiaryImage && piece.tertiaryAlt && piece.tertiaryWidth && piece.tertiaryHeight && (
                  <figure className="mt-12 lg:mt-auto lg:pt-16">
                    <Image src={piece.tertiaryImage} alt={piece.tertiaryAlt} width={piece.tertiaryWidth} height={piece.tertiaryHeight} sizes="(min-width: 1024px) 560px, 100vw" className="h-auto w-full bg-panel" />
                    <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-widest2 text-stone">Side profile / HINGE</figcaption>
                  </figure>
                )}
              </div>
              {piece.wideSecondary && piece.secondaryImage && piece.secondaryAlt && piece.secondaryWidth && piece.secondaryHeight && (
                <div className="grid gap-8 lg:order-3 lg:col-span-2 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
                  <Image src={piece.secondaryImage} alt={piece.secondaryAlt} width={piece.secondaryWidth} height={piece.secondaryHeight} sizes="(min-width: 1024px) 650px, 100vw" className="h-auto w-full bg-panel" />
                  <div className="border-t border-ivory/15 pt-5 font-mono text-[10px] uppercase tracking-widest2 text-stone lg:pt-8">02 / Profile view</div>
                </div>
              )}
            </section>
          ))}
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
