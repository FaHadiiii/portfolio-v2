"use client";

import Link from "next/link";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { Press_Start_2P } from "next/font/google";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetId = id === "skills" ? "technical-skills" : id;
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 64; // header h-12 (48px) + mt-4 (16px) or just enough space
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update URL hash without jumping
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <header
      className={`${pixelFont.variable} sticky top-0 z-50 mt-4 border-y border-[var(--border)] bg-[var(--background-muted)]/80 backdrop-blur-md`}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
        {/* Logo — only visible after scroll */}
        <Link
          href="/"
          className={`text-sm text-[var(--foreground)] hover:text-[var(--muted-foreground)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-strong)] focus-visible:ring-offset-2 rounded pl-1 ${
            scrolled
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-2 pointer-events-none"
          }`}
          style={{ fontFamily: "var(--font-pixel)" }}
        >
          AFH
        </Link>

        {/* Nav links + theme toggle */}
        <nav className="flex items-center gap-1">
          {navLinks.map((item) => (
            <Link
              key={item}
              href={`#${item === "Skills" ? "technical-skills" : item.toLowerCase()}`}
              onClick={(e) => handleScroll(e, item.toLowerCase())}
              className="hidden sm:block text-xs font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] px-2.5 py-1.5 rounded-md transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-strong)] focus-visible:ring-offset-2"
            >
              {item}
            </Link>
          ))}

          {/* Divider — desktop only */}
          <span className="hidden sm:block w-px h-4 bg-[var(--border)] mx-1.5" />

          {/* ThemeSwitcher — always visible */}
          <div className="flex items-center">
            <ThemeSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
