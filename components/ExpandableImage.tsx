"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ParallaxImage } from "@/components/ParallaxImage";

type GalleryImage = {
  src: string;
  alt: string;
};

type ExpandableImageProps = {
  src: string;
  hoverSrc?: string;
  alt: string;
  hoverAlt?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imagePosition?: string;
  hoverImagePosition?: string;
  imageFit?: "cover" | "contain";
  galleryImages?: GalleryImage[];
  galleryIndex?: number;
  hoverGalleryIndex?: number;
};

export function ExpandableImage({
  src,
  hoverSrc,
  alt,
  hoverAlt,
  priority = false,
  sizes = "(min-width: 640px) 50vw, 100vw",
  className = "aspect-[4/5]",
  imagePosition,
  hoverImagePosition,
  imageFit,
  galleryImages,
  galleryIndex = 0,
  hoverGalleryIndex
}: ExpandableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHoverImageActive, setIsHoverImageActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(galleryIndex);
  const touchStartX = useRef<number | null>(null);
  const images = galleryImages?.length ? galleryImages : [{ src, alt }];
  const activeImage = images[activeIndex] ?? images[0];
  const hasMultipleImages = images.length > 1;

  const openExpandedImage = () => {
    const shouldOpenHoverImage = Boolean(hoverSrc && isHoverImageActive);
    setActiveIndex(shouldOpenHoverImage ? (hoverGalleryIndex ?? galleryIndex) : galleryIndex);
    setIsOpen(true);
  };

  const showPreviousImage = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const showNextImage = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
      if (event.key === "ArrowLeft" && hasMultipleImages) {
        setActiveIndex((current) => (current - 1 + images.length) % images.length);
      }
      if (event.key === "ArrowRight" && hasMultipleImages) {
        setActiveIndex((current) => (current + 1) % images.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasMultipleImages, images.length, isOpen]);

  return (
    <>
      <button
        type="button"
        onMouseEnter={() => setIsHoverImageActive(true)}
        onMouseLeave={() => setIsHoverImageActive(false)}
        onFocus={() => setIsHoverImageActive(true)}
        onBlur={() => setIsHoverImageActive(false)}
        onClick={openExpandedImage}
        className={`group relative w-full overflow-hidden bg-panel text-left ${className}`}
        aria-label={`Open larger view of ${alt}`}
      >
        <ParallaxImage
          src={src}
          hoverSrc={hoverSrc}
          alt={alt}
          hoverAlt={hoverAlt}
          priority={priority}
          sizes={sizes}
          className="absolute inset-0"
          imagePosition={imagePosition}
          hoverImagePosition={hoverImagePosition}
          fit={imageFit}
          imageClassName={
            hoverSrc
              ? "grayscale contrast-[0.96]"
              : "grayscale contrast-[0.96] transition duration-500 group-hover:grayscale-[70%]"
          }
        />
        <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center bg-surface/80 text-ivory opacity-0 backdrop-blur transition group-hover:opacity-100">
          <Maximize2 aria-hidden="true" size={17} strokeWidth={1.5} />
        </span>
        <span className="absolute inset-x-0 bottom-0 bg-surface/80 p-4 font-mono text-[10px] uppercase tracking-widest text-ivory opacity-0 transition group-hover:opacity-100">
          Click to enlarge
        </span>
      </button>

      {isOpen
        ? createPortal(
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-surface/95 p-4 backdrop-blur-sm sm:p-8"
              role="dialog"
              aria-modal="true"
              aria-label={`Image gallery for ${alt}`}
              onTouchStart={(event) => {
                touchStartX.current = event.touches[0]?.clientX ?? null;
              }}
              onTouchEnd={(event) => {
                if (touchStartX.current === null || !hasMultipleImages) {
                  return;
                }

                const distance = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
                touchStartX.current = null;

                if (Math.abs(distance) < 45) {
                  return;
                }

                if (distance > 0) {
                  showPreviousImage();
                } else {
                  showNextImage();
                }
              }}
            >
              <button
                className="absolute inset-0 cursor-zoom-out"
                type="button"
                aria-label="Close image preview"
                onClick={() => setIsOpen(false)}
              />
              <div className="relative z-10 h-[82vh] w-[calc(100vw-6rem)] sm:h-[88vh] sm:w-[calc(100vw-12rem)]">
                <Image
                  key={activeImage.src}
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="(min-width: 640px) calc(100vw - 12rem), calc(100vw - 6rem)"
                  className="object-contain"
                />
              </div>
              {hasMultipleImages ? (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    className="absolute left-3 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-ivory/25 bg-surface/85 text-ivory transition hover:border-ivory hover:bg-ivory hover:text-obsidian sm:left-6"
                    aria-label="Show previous image"
                  >
                    <ChevronLeft aria-hidden="true" size={24} strokeWidth={1.5} />
                  </button>
                  <button
                    type="button"
                    onClick={showNextImage}
                    className="absolute right-3 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-ivory/25 bg-surface/85 text-ivory transition hover:border-ivory hover:bg-ivory hover:text-obsidian sm:right-6"
                    aria-label="Show next image"
                  >
                    <ChevronRight aria-hidden="true" size={24} strokeWidth={1.5} />
                  </button>
                  <p
                    className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 bg-surface/85 px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-ivory sm:bottom-6"
                    aria-live="polite"
                  >
                    {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                  </p>
                </>
              ) : null}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center border border-ivory/20 bg-surface text-ivory transition hover:border-ivory hover:bg-ivory hover:text-obsidian"
                aria-label="Close image preview"
              >
                <X aria-hidden="true" size={20} strokeWidth={1.5} />
              </button>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
