import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "DevFlow",
    description:
      "Open-source developer task board with real-time collaboration, keyboard shortcuts, and a compact data-dense UI built for speed.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    href: "#",
    status: "Live",
  },
  {
    name: "TokenKit",
    description:
      "Design token management CLI — sync tokens between Figma, CSS variables, and Tailwind config with a single command.",
    tags: ["Node.js", "Figma API", "CLI"],
    href: "#",
    status: "Archived",
  },
  {
    name: "PerfLens",
    description:
      "Browser extension for real-time Core Web Vitals monitoring overlaid directly on any website during development.",
    tags: ["Chrome Extension", "JavaScript", "WebVitals"],
    href: "#",
    status: "Archived",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative">
      {/* Header */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 border-b border-[var(--border)] bg-[var(--background-muted)]/80 backdrop-blur-sm z-20">
        <div className="max-w-3xl mx-auto px-4 py-2.5 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] px-3.5">
            Projects
          </span>
          <span className="text-[11px] text-[var(--foreground)] bg-[var(--border)]/40 border border-[var(--border)] rounded px-1.5 py-0.5 mr-3">
            {projects.length} built
          </span>
        </div>
      </div>

      {/* Column headers */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto grid grid-cols-[1fr_110px] px-3.5 sm:px-6 lg:px-4">
          <div className="px-3 py-2 text-[9px] font-bold uppercase tracking-[0.08em] text-[var(--muted-foreground)] border-r border-[var(--border)]">
            About
          </div>
          <div className="px-3 py-2 text-[9px] font-bold uppercase tracking-[0.08em] text-[var(--muted-foreground)] text-center">
            Status
          </div>
        </div>
      </div>

      {/* Rows */}
      {projects.map((project, i) => (
        <a
          key={i}
          href={project.href}
          className="block w-screen relative left-1/2 -translate-x-1/2 border-b border-[var(--border)] last:border-b-0 group transition-colors duration-100 hover:bg-[var(--background-muted)]"
        >
          <div className="max-w-3xl mx-auto grid grid-cols-[1fr_110px] px-3.5 sm:px-6 lg:px-4">
            {/* Project info */}
            <div className="relative border-r border-[var(--border)] px-3 py-3.5 flex flex-col gap-3">
              {/* Row index */}
              <span className="absolute top-1.5 right-2 text-[8px] font-bold text-[var(--muted-foreground)] opacity-35 tabular-nums tracking-wide">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Junction crosshair */}
              <span className="absolute bottom-[-1px] right-[-1px] w-1.5 h-1.5 border-t border-l border-[var(--border)] bg-[var(--background-panel)]" />

              <div className="flex items-start gap-3">
                {/* Project Logo Placeholder */}
                <div className="w-8 h-8 rounded-md bg-[var(--background-panel)] border border-[var(--border)] flex items-center justify-center overflow-hidden flex-shrink-0 transition-colors">
                  <span className="text-[10px] font-bold text-[var(--muted-foreground)] opacity-40 uppercase">
                    {project.name.substring(0, 2)}
                  </span>
                </div>

                <div className="flex flex-col gap-1 w-full pr-6">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-bold text-[var(--foreground)] transition-colors duration-150 group-hover:text-[var(--muted-foreground)]">
                      {project.name}
                    </span>
                    <ArrowUpRight
                      size={13}
                      className="text-[var(--muted-foreground)] opacity-50 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </div>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 pt-1 ml-11">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold text-[var(--muted-foreground)] bg-[var(--border-strong)]/40 border border-[var(--border-strong)] rounded px-1.5 py-0.5 transition-colors duration-100 hover:text-[var(--foreground)] hover:border-[var(--muted-foreground)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="px-3 py-3.5 flex items-start justify-center pt-4">
              <Badge
                variant="outline"
                className="truncate max-w-full text-[10px] font-semibold bg-[var(--background-panel)]/60 text-[var(--muted-foreground)] py-0.5 px-2"
              >
                {project.status}
              </Badge>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
}
