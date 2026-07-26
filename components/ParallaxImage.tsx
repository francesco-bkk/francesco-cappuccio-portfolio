"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type ParallaxImageProps = {
  src: string;
  hoverSrc?: string;
  alt: string;
  hoverAlt?: string;
  sizes?: string;
  priority?: boolean;
  className: string;
  imageClassName?: string;
  hoverImageClassName?: string;
  imagePosition?: string;
  hoverImagePosition?: string;
  strength?: number;
};

export function ParallaxImage({
  src,
  hoverSrc,
  alt,
  hoverAlt,
  sizes,
  priority = false,
  className,
  imageClassName = "",
  hoverImageClassName = "",
  imagePosition = "50% 50%",
  hoverImagePosition = imagePosition,
  strength = 22
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageLayerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    const updateParallax = () => {
      const container = containerRef.current;
      const imageLayer = imageLayerRef.current;

      if (!container || !imageLayer) {
        frameRef.current = undefined;
        return;
      }

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
      const progress = Math.max(-1, Math.min(1, centerOffset / viewportHeight));
      const y = progress * -strength;

      imageLayer.style.transform = `translate3d(0, ${y}px, 0) scale(1.08)`;
      frameRef.current = undefined;
    };

    const requestUpdate = () => {
      if (frameRef.current === undefined) {
        frameRef.current = window.requestAnimationFrame(updateParallax);
      }
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (frameRef.current !== undefined) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [strength]);

  return (
    <div ref={containerRef} className={className}>
      <div
        ref={imageLayerRef}
        className="absolute inset-0 scale-[1.08] will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          style={{ objectPosition: imagePosition }}
          className={`object-cover ${imageClassName}`}
        />
        {hoverSrc ? (
          <Image
            src={hoverSrc}
            alt={hoverAlt ?? alt}
            fill
            priority={priority}
            sizes={sizes}
            style={{ objectPosition: hoverImagePosition }}
            className={`object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 group-focus-visible:opacity-100 ${hoverImageClassName}`}
          />
        ) : null}
      </div>
    </div>
  );
}
