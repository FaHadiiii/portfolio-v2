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
    tags: ["React", "Vue.js", "JavaScript", "SCSS"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative rounded-[10px] overflow-hidden border border-[var(--border)] bg-[var(--background)]"
    >

      {/* Panel header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border)] bg-[var(--background-panel)]">
        <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--muted-foreground)]">
          Experience
        </span>
        <span className="text-[9px] font-semibold text-[var(--foreground)] bg-[var(--border)]/40 border border-[var(--border)] rounded px-1.5 py-0.5">
          {experiences.length} roles
        </span>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-[110px_1fr_88px] border-b border-[var(--border)] bg-[var(--background-panel)]/60">
        {["Company", "Role / Achievements", "Period"].map((h, i) => (
          <div
            key={h}
            className={`px-3 py-2 text-[9px] font-bold uppercase tracking-[0.08em] text-[var(--muted-foreground)] ${i < 2 ? "border-r border-[var(--border)]" : ""}`}
          >
            {h}
          </div>
        ))}
      </div>

      {/* Rows */}
      {experiences.map((job, i) => (
        <div
          key={i}
          className="grid grid-cols-[110px_1fr_88px] border-b border-[var(--border)] last:border-b-0 group transition-colors duration-100 hover:bg-[var(--background-muted)]"
        >
          {/* Cell 1 — Company */}
          <div className="relative border-r border-[var(--border)] px-3 py-3.5 flex flex-col gap-2 bg-[var(--background-panel)]/70">
            {/* Row index */}
            <span className="absolute top-1.5 right-2 text-[8px] font-bold text-[var(--muted-foreground)] opacity-35 tabular-nums tracking-wide">
              {String(i + 1).padStart(2, "0")}
            </span>
            {/* Junction crosshair */}
            <span className="absolute bottom-[-1px] right-[-1px] w-1.5 h-1.5 border-t border-l border-[var(--border)] bg-[var(--background-panel)]" />

           <div className="flex flex-col items-start gap-2">
  {/* Logo */}
  <div className="w-8 h-8 rounded-md bg-[var(--background-panel)] border border-[var(--border)] flex items-center justify-center overflow-hidden">
    {/* replace with actual img later */}
    {/* <img src={job.logo} alt={job.company} className="w-full h-full object-contain" /> */}
  </div>

  {/* Company name */}
  <span className="text-[11px] font-bold text-[var(--foreground)] leading-tight">
    {job.company}
  </span>
</div>

            {/* {job.current && (
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                <span className="text-[9px] font-semibold text-emerald-600 dark:text-emerald-400">Current</span>
              </div>
            )} */}
          </div>

          {/* Cell 2 — Role + Achievements */}
          <div className="px-3 py-3.5 flex flex-col gap-2 border-r border-[var(--border)]">
            {/* Role row */}
            <div className="flex items-center justify-between pb-2">
              <span className="text-xs font-bold text-[var(--foreground)]">{job.role}</span>
              <span className="text-[9px] font-semibold text-[var(--muted-foreground)] bg-[var(--border-strong)]/40 border border-[var(--border-strong)] rounded px-1.5 py-0.5 flex-shrink-0">
                {job.type}
              </span>
            </div>

            {/* Achievements sub-grid */}
            <div className="flex flex-col">
              {job.achievements.map((a, j) => (
                <div
                  key={j}
                  className="grid grid-cols-[16px_1fr] py-1"
                >
                  <span className="text-[8px] font-bold text-[var(--muted-foreground)] opacity-45 pt-0.5 tabular-nums">
                    {String(j + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[11px] text-[var(--foreground)] leading-relaxed">{a}</span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 pt-2">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-semibold text-[var(--muted-foreground)] bg-[var(--border-strong)]/40 border border-[var(--border-strong)] rounded px-1.5 py-0.5 cursor-default transition-colors duration-100 hover:text-[var(--foreground)] hover:border-[var(--muted-foreground)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Cell 3 — Period */}
          <div className="px-3 py-3.5 flex flex-col gap-1 justify-start">
            <span className="text-[11px] font-semibold text-[var(--foreground)] tabular-nums">{job.period}</span>
            <span className="text-[9px] text-[var(--muted-foreground)]">{job.duration}</span>
          </div>
        </div>
      ))}
    </section>
  );
}