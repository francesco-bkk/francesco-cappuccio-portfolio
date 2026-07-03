"use client";

import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ExpandableImageProps = {
  src: string;
  alt: string;
};

export function ExpandableImage({ src, alt }: ExpandableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative aspect-[4/5] w-full overflow-hidden bg-panel text-left"
        aria-label={`Open larger view of ${alt}`}
      >
        <Image src={src} alt={alt} fill className="object-cover grayscale contrast-[0.96] transition duration-500 group-hover:grayscale-[70%]" />
        <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center bg-surface/80 text-ivory opacity-0 backdrop-blur transition group-hover:opacity-100">
          <Maximize2 aria-hidden="true" size={17} strokeWidth={1.5} />
        </span>
        <span className="absolute inset-x-0 bottom-0 bg-surface/80 p-4 font-mono text-[10px] uppercase tracking-widest text-ivory opacity-0 transition group-hover:opacity-100">
          Click to enlarge
        </span>
      </button>

      {isOpen && isMounted
        ? createPortal(
            <div
              className="fixed inset-0 z-50 overflow-y-auto bg-surface/95 p-4 backdrop-blur-sm sm:p-8"
              role="dialog"
              aria-modal="true"
              aria-label={alt}
            >
              <button
                className="absolute inset-0 cursor-zoom-out"
                type="button"
                aria-label="Close image preview"
                onClick={() => setIsOpen(false)}
              />
              <div className="relative z-10 flex min-h-full items-center justify-center">
                <img
                  src={src}
                  alt={alt}
                  className="block max-h-[88vh] max-w-[92vw] object-contain shadow-sm"
                />
              </div>
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
