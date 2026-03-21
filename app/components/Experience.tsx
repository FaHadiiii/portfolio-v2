const experiences = [
  {
    company: "Acme Corp",
    role: "Senior Frontend Engineer",
    type: "Full-time",
    period: "2023 — Now",
    duration: "2 yrs",
    current: true,
    achievements: [
      "Led migration of a legacy React app to Next.js 14 App Router, cutting TTFB by 40%.",
      "Designed and built a shared component library used across 4 product teams.",
      "Introduced Playwright E2E test suite, achieving 80% coverage of critical flows.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Playwright"],
  },
  {
    company: "Startup XYZ",
    role: "Frontend Engineer",
    type: "Full-time",
    period: "2021 — 2023",
    duration: "2 yrs",
    achievements: [
      "Architected the frontend for a real-time trading dashboard handling 10k concurrent users.",
      "Collaborated with design team to build a design token system from scratch.",
      "Mentored a team of 3 junior engineers and led weekly code review sessions.",
    ],
    tags: ["React", "Redux", "GraphQL", "Storybook"],
  },
  {
    company: "Freelance",
    role: "Frontend Consultant",
    type: "Contract",
    period: "2019 — 2021",
    duration: "2 yrs",
    achievements: [
      "Delivered 12+ client projects across e-commerce, SaaS, and portfolio sites.",
      "Specialised in performance audits and Core Web Vitals optimisation.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative">
      {/* Header */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 border-y border-[var(--border)] bg-[var(--background-muted)]/80 backdrop-blur-sm z-20">
        <div className="max-w-3xl mx-auto px-4 py-2.5 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] px-3">
            Experience
          </span>
          <span className="text-[11px] text-[var(--foreground)] bg-[var(--border)]/40 border border-[var(--border)] rounded px-1.5 py-0.5 mr-3">
            {experiences.length} roles
          </span>
        </div>
      </div>

      {/* Column headers */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto grid grid-cols-[110px_1fr] px-3.5 sm:px-6 lg:px-4">
          {["Company", "Role / Achievements"].map((h, i) => (
            <div
              key={h}
              className={`px-3 py-2 text-[9px] font-bold uppercase tracking-[0.08em] text-[var(--muted-foreground)] ${
                i === 0 ? "border-r border-[var(--border)]" : ""
              }`}
            >
              {h}
            </div>
          ))}
        </div>
      </div>

      {/* Rows */}
      {experiences.map((job, i) => (
        <div
          key={i}
          className="w-screen relative left-1/2 -translate-x-1/2 border-b border-[var(--border)] last:border-b-0 group transition-colors duration-100 hover:bg-[var(--background-muted)]"
        >
          <div className="max-w-3xl mx-auto grid grid-cols-[110px_1fr] px-3.5 sm:px-6 lg:px-4">
            {/* Cell 1 — Company */}
            <div className="relative border-r border-[var(--border)] px-3 py-3.5 flex flex-col gap-2">
              {/* Row index */}
              <span className="absolute top-1.5 right-2 text-[8px] font-bold text-[var(--muted-foreground)] opacity-35 tabular-nums tracking-wide">
                {String(i + 1).padStart(2, "0")}
              </span>
              {/* Junction crosshair */}
              <span className="absolute bottom-[-1px] right-[-1px] w-1.5 h-1.5 border-t border-l border-[var(--border)] bg-[var(--background-panel)]" />

              <div className="flex flex-col items-start gap-2">
                {/* Logo */}
                <div className="w-8 h-8 rounded-md bg-[var(--background-panel)] border border-[var(--border)] flex items-center justify-center overflow-hidden"></div>

                {/* Company name */}
                <span className="text-[11px] font-bold text-[var(--foreground)] leading-tight">
                  {job.company}
                </span>
              </div>
            </div>

            {/* Cell 2 — Role + Achievements */}
            <div className="px-3 py-3.5 flex flex-col gap-2">
              {/* Role row */}
              <div className="flex flex-col gap-1 pb-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[var(--foreground)]">
                    {job.role}
                  </span>
                  <span className="text-[10px] font-semibold text-[var(--muted-foreground)] bg-[var(--border-strong)]/40 border border-[var(--border-strong)] rounded px-1.5 py-0.5 flex-shrink-0">
                    {job.type}
                  </span>
                </div>
                {/* Period moved here */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-medium text-[var(--muted-foreground)] tabular-nums">
                    {job.period}
                  </span>
                  <span className="text-[10px] text-[var(--muted-foreground)] opacity-50">
                    •
                  </span>
                  <span className="text-[10px] font-medium text-[var(--muted-foreground)]">
                    {job.duration}
                  </span>
                </div>
              </div>

              {/* Achievements sub-grid */}
              <div className="flex flex-col">
                {job.achievements.map((a, j) => (
                  <div key={j} className="grid grid-cols-[16px_1fr] py-1">
                    <span className="text-[9px] font-bold text-[var(--muted-foreground)] opacity-45 pt-0.5 tabular-nums">
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs text-[var(--muted-foreground)] text-[var(--foreground)] leading-relaxed">
                      {a}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 pt-2">
                {job.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold text-[var(--muted-foreground)] bg-[var(--border-strong)]/40 border border-[var(--border-strong)] rounded px-1.5 py-0.5 cursor-default transition-colors duration-100 hover:text-[var(--foreground)] hover:border-[var(--muted-foreground)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
