import Link from "next/link";
import { navigation, socialLinks, studio } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-surface text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.1fr_0.8fr_1.1fr]">
        <div>
          <p className="font-mono text-[11px] font-medium uppercase tracking-widest2 text-ivory">{studio.name}</p>
          <p className="mt-5 max-w-xs text-sm leading-6 text-stone">{studio.address}</p>
        </div>

        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] uppercase tracking-widest text-stone transition-colors duration-300 hover:text-ivory"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap items-start gap-x-8 gap-y-4 md:justify-end">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-widest text-stone transition-colors duration-300 hover:text-ivory"
            >
              {item.label}
            </Link>
          ))}
          <span className="basis-full font-mono text-[11px] tracking-widest text-stone/60 md:text-right">
            {studio.copyright}
          </span>
        </div>
      </div>
    </footer>
  );
}
