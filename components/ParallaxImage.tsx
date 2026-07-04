"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type ParallaxImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className: string;
  imageClassName?: string;
  strength?: number;
};

export function ParallaxImage({
  src,
  alt,
  sizes,
  priority = false,
  className,
  imageClassName = "",
  strength = 22
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    const updateParallax = () => {
      const container = containerRef.current;
      const image = imageRef.current;

      if (!container || !image) {
        frameRef.current = undefined;
        return;
      }

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
      const progress = Math.max(-1, Math.min(1, centerOffset / viewportHeight));
      const y = progress * -strength;

      image.style.transform = `translate3d(0, ${y}px, 0) scale(1.08)`;
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
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`scale-[1.08] object-cover will-change-transform ${imageClassName}`}
      />
    </div>
  );
}
