import Link from "next/link";
import { navigation, socialLinks, studio } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-surface text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-[1.15fr_auto_1fr] md:gap-16 lg:py-16">
        <div>
          <p className="font-mono text-[11px] font-medium uppercase tracking-widest2 text-ivory">{studio.name}</p>
          <p className="mt-5 max-w-xs text-sm leading-6 text-stone">{studio.address}</p>
        </div>

        <div className="flex gap-6 md:justify-center">
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
          <Link
            href="/privacy"
            className="font-mono text-[11px] uppercase tracking-widest text-stone transition-colors duration-300 hover:text-ivory"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="font-mono text-[11px] uppercase tracking-widest text-stone transition-colors duration-300 hover:text-ivory"
          >
            Terms
          </Link>
          <span className="basis-full font-mono text-[11px] tracking-widest text-stone/60 md:text-right">
            {studio.copyright}
          </span>
        </div>
      </div>
    </footer>
  );
}
