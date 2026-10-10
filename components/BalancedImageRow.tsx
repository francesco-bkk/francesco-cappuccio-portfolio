import type { CSSProperties, ReactNode } from "react";

export function BalancedImageRow({ ratios, children, label = "gallery" }: {
  ratios: number[];
  children: ReactNode;
  label?: string;
}) {
  return <div className="grid items-start gap-6 sm:grid-cols-[var(--image-columns)] sm:gap-8"
    style={{ "--image-columns": ratios.map((ratio) => `${ratio}fr`).join(" ") } as CSSProperties}
    data-image-row={label}>{children}</div>;
}
