import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Honors", href: "#honors" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-0">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-xs text-[var(--foreground)]">
          © {new Date().getFullYear()} AFH
        </span>
        <nav className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 px-12 sm:px-0">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
