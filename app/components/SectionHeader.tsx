import { navLinks } from "@/lib/data";

interface SectionHeaderProps {
  index: number;
  title: string;
}

export default function SectionHeader({ index, title }: SectionHeaderProps) {
  const formattedIndex = index.toString().padStart(2, "0");
  const totalSections = navLinks.length.toString().padStart(2, "0");

  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2 border-y border-[var(--border)] bg-[var(--background-muted)]/80 backdrop-blur-sm z-20">
      <div className="max-w-3xl mx-auto px-4 py-5 flex items-center justify-between">
        <div className="flex items-center">
          {/* Left border accent */}
          <div className="w-[2px] h-5 bg-[var(--foreground)] mr-4" />

          <span className="font-mono text-xs tracking-widest text-[var(--muted-foreground)]">
            <span className="text-[var(--foreground-muted)]">[</span>
            <span className="text-[var(--foreground)] font-semibold">
              {" "}
              {formattedIndex}
            </span>
            <span className="px-1">/</span>
            <span className="font-medium">{totalSections} </span>
            <span className="text-[var(--foreground-muted)]">]</span>
            <span className="px-2">·</span>
            <span className="uppercase text-[var(--foreground-muted)]">
              {title}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
