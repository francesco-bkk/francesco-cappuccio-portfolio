"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, studio } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isCurrent = (href: string) =>
    href === "/work" ? pathname.startsWith("/work") : pathname === href;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-ivory/10 bg-obsidian/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="min-w-0 max-w-[calc(100vw-6rem)] truncate font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ivory transition-colors duration-300 hover:text-stone sm:max-w-none sm:text-sm sm:tracking-[0.14em] lg:text-[15px]"
        >
          {studio.name}
        </Link>

        <nav className="hidden items-center gap-10 sm:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              className={`group relative font-mono text-[11px] uppercase tracking-widest transition-colors duration-300 hover:text-ivory ${
                isCurrent(item.href) ? "text-ivory" : "text-stone"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-ivory transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                  isCurrent(item.href) ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-ivory/15 text-ivory transition-colors duration-300 hover:border-ivory sm:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? (
            <X aria-hidden="true" size={17} strokeWidth={1.5} />
          ) : (
            <Menu aria-hidden="true" size={17} strokeWidth={1.5} />
          )}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className={`grid border-t border-ivory/10 bg-obsidian px-5 transition-[grid-template-rows] duration-300 ease-out sm:hidden ${
          isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-1 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                className={`block border-b border-ivory/10 py-4 font-mono text-xs uppercase tracking-widest transition-colors duration-300 hover:text-ivory ${
                  isCurrent(item.href) ? "text-ivory" : "text-stone"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
