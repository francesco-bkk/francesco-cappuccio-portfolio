"use client";

import { useState } from "react";

type ProjectShareControlsProps = {
  projectTitle: string;
  facebookShareHref: string;
  linkedInShareHref: string;
  facebookPost: string;
};

type CopyStatus = "idle" | "copied" | "manual";

export function ProjectShareControls({
  projectTitle,
  facebookShareHref,
  linkedInShareHref,
  facebookPost
}: ProjectShareControlsProps) {
  const [isFacebookCaptionVisible, setIsFacebookCaptionVisible] = useState(false);
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");

  const prepareFacebookCaption = () => {
    setIsFacebookCaptionVisible(true);

    if (!navigator.clipboard?.writeText) {
      setCopyStatus("manual");
      return;
    }

    void navigator.clipboard
      .writeText(facebookPost)
      .then(() => setCopyStatus("copied"))
      .catch(() => setCopyStatus("manual"));
  };

  return (
    <div className="grid gap-4 border-t border-ivory/10 pt-7">
      <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">Share</p>
      <div className="flex flex-wrap gap-x-7 gap-y-4">
        <a
          href={facebookShareHref}
          target="_blank"
          rel="noreferrer"
          onClick={prepareFacebookCaption}
          className="group inline-flex w-fit items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ivory transition-colors hover:text-stone"
          aria-label={`Post ${projectTitle} to Facebook`}
        >
          <span className="flex h-8 w-8 items-center justify-center border border-ivory/30 text-[10px] transition-colors group-hover:border-stone">
            FB
          </span>
          <span>Post</span>
        </a>
        <a
          href={linkedInShareHref}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex w-fit items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ivory transition-colors hover:text-stone"
          aria-label={`Post ${projectTitle} to LinkedIn`}
        >
          <span className="flex h-8 w-8 items-center justify-center border border-ivory/30 text-[10px] transition-colors group-hover:border-stone">
            IN
          </span>
          <span>Post</span>
        </a>
      </div>
      {isFacebookCaptionVisible ? (
        <div className="grid gap-3 border-t border-ivory/10 pt-5" role="status" aria-live="polite">
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">Facebook caption</p>
          <p className="text-sm leading-6 text-stone">
            {copyStatus === "copied"
              ? "Caption copied. Paste it into Facebook, then revise before publishing."
              : "Copy the caption below, then paste it into Facebook."}
          </p>
          <textarea
            readOnly
            value={facebookPost}
            aria-label={`Facebook caption for ${projectTitle}`}
            className="min-h-48 w-full resize-y border border-ivory/20 bg-ivory/5 px-4 py-3 text-sm leading-6 text-ivory outline-none transition-colors focus:border-stone"
          />
          <button
            type="button"
            onClick={prepareFacebookCaption}
            className="w-fit border-b border-ivory/30 pb-1 font-mono text-[10px] uppercase tracking-widest2 text-ivory transition-colors hover:border-stone hover:text-stone focus-visible:border-stone focus-visible:text-stone focus-visible:outline-none"
          >
            Copy caption
          </button>
        </div>
      ) : null}
    </div>
  );
}
