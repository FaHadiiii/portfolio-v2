import Image from "next/image";

const experiences = [
  {
    company: "ForthNorth Technologies Sdn. Bhd.",
    logo: "/logo/fnt.webp",
    role: "Software Engineer (Mobile)",
    type: "Contract",
    period: "2025 — Present",
    duration: "1+ year",
    current: true,
    achievements: [
      "Built an offshore crew management mobile app from scratch.",
      "Maintained and enhanced an e-commerce agent management app.",
      "Developed a customer-facing e-commerce mobile application.",
      "Designed and prototyped system UI and UX.",
      "Managed deployments to the App Store and Google Play Store.",
    ],
    tags: ["Flutter", "Dart", "Figma", "Firebase", "Git"],
  },
  {
    company: "Todak Digitech Sdn. Bhd.",
    logo: "/logo/tdk.png",
    role: "Software Developer Intern",
    type: "Internship",
    period: "2024 — 2025",
    duration: "6 months",
    achievements: [
      "Refactored a mobile app to improve code quality and maintainability.",
      "Contributed to the development of an internal student management system.",
      "Built and maintained websites using WordPress.",
    ],
    tags: ["Flutter", "Dart", "WordPress", "Laravel", "Git"],
  },
  {
    company: "JPN Terengganu",
    logo: "/logo/jpnt.png",
    role: "IT Intern",
    type: "Internship",
    period: "2021 — 2022",
    duration: "6 months",
    achievements: [
      "Provided technical support for hardware and software issues.",
      "Assisted in system setup, configuration, and maintenance.",
      "Developed a data dashboard for IT operations and analytics.",
    ],
    tags: ["Power BI", "Excel", "Google Apps Script"],
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
                <div className="h-8 w-8 flex items-center justify-center overflow-hidden">
                  <Image
                    src={job.logo}
                    alt={job.company}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>

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
