import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "DevFlow",
    description: "Open-source developer task board with real-time collaboration, keyboard shortcuts, and a compact data-dense UI built for speed.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    href: "#",
    status: "Live",
  },
  {
    name: "TokenKit",
    description: "Design token management CLI — sync tokens between Figma, CSS variables, and Tailwind config with a single command.",
    tags: ["Node.js", "Figma API", "CLI"],
    href: "#",
    status: "Archived",
  },
  {
    name: "PerfLens",
    description: "Browser extension for real-time Core Web Vitals monitoring overlaid directly on any website during development.",
    tags: ["Chrome Extension", "JavaScript", "WebVitals"],
    href: "#",
    status: "Archived",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative rounded-[10px] overflow-hidden border border-[var(--border)] bg-[var(--background)]"
    >

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border)] bg-[var(--background-panel)]">
        <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--muted-foreground)]">
          Projects
        </span>
        <span className="text-[9px] font-semibold text-[var(--foreground)] bg-[var(--border-strong)]/40 border border-[var(--border-strong)] rounded px-1.5 py-0.5">
          {projects.length}
        </span>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-[1fr_80px] border-b border-[var(--border)] bg-[var(--background-panel)]/60">
        <div className="px-4 py-2 text-[9px] font-bold uppercase tracking-[0.08em] text-[var(--muted-foreground)] border-r border-[var(--border)]">
          About
        </div>
        <div className="px-4 py-2 text-[9px] font-bold uppercase tracking-[0.08em] text-[var(--muted-foreground)]">
          Status
        </div>
      </div>

      {/* Rows */}
      {projects.map((project, i) => (
        <a
          key={i}
          href={project.href}
          className="grid grid-cols-[1fr_80px] border-b border-[var(--border)] last:border-b-0 group transition-colors duration-100 hover:bg-[var(--background-muted)]"
        >
          {/* Project info */}
          <div className="px-4 py-3.5 flex flex-col gap-2 border-r border-[var(--border)]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[var(--foreground)] group-hover:text-[var(--muted-foreground)] transition-colors">
                {project.name}
              </span>
              <ArrowUpRight
                size={13}
                className="text-[var(--muted-foreground)] transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </div>
            <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-semibold text-[var(--muted-foreground)] bg-[var(--border-strong)]/40 border border-[var(--border-strong)] rounded px-1.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="px-3 py-3.5 flex items-start justify-center pt-4 overflow-hidden">
            <Badge variant="outline" className="truncate max-w-full text-[9px] font-semibold">
              {project.status}
            </Badge>
          </div>
        </a>
      ))}
    </section>
  );
}