import { TagList } from "@/components/ui/tag-list";
import Image from "next/image";
import { experiences } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <SectionHeader index={2} title="Experience" />

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
                    <span className="text-xs text-[var(--foreground)] leading-relaxed">
                      {a}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <TagList tags={job.tags} className="pt-2" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
