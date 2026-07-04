"use client";

import { useEffect, useRef } from "react";

const hoverSelector = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "label",
  "h1",
  "h2",
  "h3",
  "p",
  "span",
  "li",
  "dt",
  "dd"
].join(",");

export function CursorSpotlight() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | undefined>(undefined);
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const supportsPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!supportsPointer || prefersReducedMotion) {
      return;
    }

    document.body.classList.add("has-custom-cursor");

    const moveCursor = () => {
      if (!cursorRef.current) {
        return;
      }

      const { x, y } = positionRef.current;
      cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      frameRef.current = undefined;
    };

    const handlePointerMove = (event: PointerEvent) => {
      positionRef.current = { x: event.clientX, y: event.clientY };
      cursorRef.current?.classList.add("is-visible");

      const target = event.target instanceof Element ? event.target : null;
      cursorRef.current?.classList.toggle("is-inverting", Boolean(target?.closest(hoverSelector)));

      if (frameRef.current === undefined) {
        frameRef.current = window.requestAnimationFrame(moveCursor);
      }
    };

    const handlePointerLeave = () => {
      cursorRef.current?.classList.remove("is-visible", "is-inverting");
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);

      if (frameRef.current !== undefined) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return <div ref={cursorRef} aria-hidden="true" className="cursor-spotlight" />;
}
