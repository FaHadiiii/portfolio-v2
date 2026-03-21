import { BackgroundBeams } from "@/components/ui/background-beams";

const bullets = [
  "Software Developer turning ideas into pixel-perfect apps.",
  "Flutter, React, and modern web tech — crafting smooth, delightful experiences.",
  "Obsessed with clean UI, smart design systems, and seamless UX.",
  "Crafting scalable, polished, and user-focused products.",
];

export default function About() {
  return (
    <section id="about" className="relative pb-4">
      {/* Header */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 border-y border-[var(--border)] bg-[var(--background-muted)]/80 backdrop-blur-sm z-20">
        <div className="max-w-3xl mx-auto px-4 py-2.5 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] px-3.5">
            About Me
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-3.5 sm:px-6 lg:px-3.5 mt-4 relative">
        {/* Strictly bounded beams for this content section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-md z-0">
          <BackgroundBeams className="absolute inset-0" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {bullets.map((text, i) => (
            <div
              key={i}
              className="grid grid-cols-[16px_1fr] gap-2 px-1 py-2 items-start hover:bg-[var(--background-muted)]/50 transition-colors duration-100 rounded-md"
            >
              <span className="text-[9px] font-bold text-[var(--muted-foreground)] opacity-40 pt-0.5 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-xs text-[var(--foreground)] leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Full-width bottom border */}
      <div className="absolute bottom-0 w-screen left-1/2 -translate-x-1/2 border-b border-[var(--border)]" />
    </section>
  );
}
