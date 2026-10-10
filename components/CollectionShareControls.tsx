"use client";

import { useState, useSyncExternalStore } from "react";

const subscribeToShareSupport = () => () => {};
const getShareSupport = () => typeof navigator.share === "function";
const getServerShareSupport = () => false;

type Props = { url: string; title: string; description: string };

export function CollectionShareControls({ url, title, description }: Props) {
  const [copied, setCopied] = useState(false);
  const supportsShare = useSyncExternalStore(subscribeToShareSupport, getShareSupport, getServerShareSupport);
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const linkedIn = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      window.prompt("Copy this link", url);
    }
  }

  return (
    <div className="mt-20 border-t border-ivory/15 pt-7 lg:mt-28">
      <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">Share this collection</p>
      <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ivory">
        <a href={facebook} target="_blank" rel="noopener noreferrer" className="border-b border-ivory pb-2 hover:text-stone" aria-label={`Share ${title} on Facebook`}>Facebook ↗</a>
        <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="border-b border-ivory pb-2 hover:text-stone" aria-label={`Share ${title} on LinkedIn`}>LinkedIn ↗</a>
        <button type="button" onClick={copyLink} className="border-b border-ivory pb-2 text-left hover:text-stone">{copied ? "Link copied" : "Copy link"}</button>
        {supportsShare && (
          <button type="button" onClick={() => void navigator.share({ title, text: description, url }).catch(() => {})} className="border-b border-ivory pb-2 text-left hover:text-stone">More options ↗</button>
        )}
      </div>
      <p className="mt-5 text-xs leading-5 text-stone">Facebook and LinkedIn open a post draft. Copy the link to share it elsewhere.</p>
    </div>
  );
}
