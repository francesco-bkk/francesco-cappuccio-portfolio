import Link from "next/link";
import { Menu } from "lucide-react";
import { navigation, studio } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ivory/10 bg-obsidian/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-mono text-[11px] font-medium uppercase tracking-widest2 text-ivory transition-colors duration-300 hover:text-stone sm:text-xs"
        >
          {studio.name}
        </Link>

        <nav className="hidden items-center gap-10 sm:flex">
          {navigation.map((item) => (
            <Link
          key={item.href}
          href={item.href}
              className="group relative font-mono text-[11px] uppercase tracking-widest text-stone transition-colors duration-300 hover:text-ivory"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-ivory transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <button
          className="inline-flex h-10 w-10 items-center justify-center border border-ivory/15 text-ivory transition-colors duration-300 hover:border-ivory sm:hidden"
          aria-label="Open menu"
        >
          <Menu aria-hidden="true" size={17} strokeWidth={1.5} />
        </button>
      </div>
    </header>
  );
}
