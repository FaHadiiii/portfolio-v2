"use client";

import { motion } from "motion/react";
import { TagList } from "@/components/ui/tag-list";
import { GraduationCap } from "lucide-react";

import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative bg-transparent">
      {/* Section Header */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 border-b border-[var(--border)] bg-[var(--background-muted)]/80 backdrop-blur-sm z-20">
        <div className="max-w-3xl mx-auto px-4 py-2.5 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] px-3.5">
            Education
          </span>
          <span className="text-[11px] text-[var(--foreground)] bg-[var(--border)]/40 border border-[var(--border)] rounded px-1.5 py-0.5 mr-3">
            {education.length} Milestones
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-8 pb-10 relative">
        {/* Vertical Dashed Timeline Line */}
        <div className="absolute left-[26px] top-0 bottom-0 w-px border-l border-dashed border-[var(--border)]" />

        <div className="flex flex-col gap-10">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-12 pr-4 sm:pr-6 lg:pr-4 group/item"
            >
              <div className="absolute left-[20px] top-1.5 h-3 w-3 bg-[var(--background)] border-2 border-[var(--border-strong)] rotate-45 z-10 group-hover/item:bg-[var(--foreground)] group-hover/item:border-[var(--foreground)] group-hover/item:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.05)]" />

              <div className="flex flex-col gap-4">
                {/* Period & Institution Info */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-medium uppercase text-[var(--muted-foreground)] bg-[var(--background-muted)] border border-[var(--border)] px-2 py-0.5 rounded-sm">
                      {edu.period}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-[var(--border)] to-transparent opacity-50" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-[var(--foreground)] leading-tight tracking-tight group-hover/item:text-[var(--primary)] transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-medium text-[var(--muted-foreground)]">
                      <GraduationCap size={13} className="opacity-70" />
                      <span>{edu.institution}</span>
                    </div>
                  </div>
                </div>

                {/* Brief Overview */}
                <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed italic opacity-90 max-w-2xl">
                  {edu.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2.5 mt-1">
                  {edu.achievements.map((a, j) => (
                    <div
                      key={j}
                      className="grid grid-cols-[18px_1fr] items-start gap-1"
                    >
                      <span className="text-[9px] font-bold text-[var(--muted-foreground)] opacity-40 pt-1 tabular-nums">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <p className="text-xs text-[var(--foreground)] opacity-95 leading-relaxed">
                        {a}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tags / Specialized Skills */}
                <TagList tags={edu.tags} className="mt-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle bottom fade to join next section */}
      <div className="absolute bottom-0 left-0 right-0 h-15 bg-gradient-to-t from-[var(--background-muted)] to-transparent pointer-events-none" />
    </section>
  );
}
