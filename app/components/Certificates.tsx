"use client";

import { motion } from "motion/react";
import { ArrowUpRight, GraduationCap, Award, BadgeCheck } from "lucide-react";

import { certificates as certificatesData } from "@/lib/data";

const iconMap = {
  graduation: (
    <GraduationCap
      size={18}
      className="text-[var(--muted-foreground)] opacity-80"
    />
  ),
  award: (
    <Award size={18} className="text-[var(--muted-foreground)] opacity-80" />
  ),
};

const fallbackIconMap = {
  graduation: <GraduationCap size={16} />,
  award: <Award size={18} />,
};

const certificates = certificatesData.map((cert) => ({
  ...cert,
  icon: iconMap[cert.iconType as keyof typeof iconMap],
  fallbackIcon: fallbackIconMap[cert.iconType as keyof typeof fallbackIconMap],
}));

import SectionHeader from "./SectionHeader";

export default function Certificates() {
  return (
    <section id="honors" className="relative bg-transparent">
      <SectionHeader index={6} title="Honors" />

      <div className="max-w-3xl mx-auto relative group">
        {/* Row Header - Minimal spacing */}
        <div className="flex flex-col">
          {certificates.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group/row relative w-screen left-1/2 -translate-x-1/2 border-b border-[var(--border)] hover:bg-[var(--background-muted)]/50 transition-colors duration-200"
            >
              <div className="max-w-3xl mx-auto px-6.5 py-5 flex items-center gap-6 relative">
                {/* Left Vertical Line (Internal to max-w-3xl) */}
                <div className="absolute left-[43px] top-0 bottom-0 w-px border-l border-dashed border-[var(--border)] z-0" />

                {/* Left Icon Column */}
                <div className="relative z-10 w-9 h-9 flex items-center justify-center bg-[var(--background-panel)] border border-[var(--border)] rounded-sm group-hover/row:border-[var(--border-strong)] transition-colors">
                  {cert.icon}
                </div>

                {/* Content Column */}
                <div className="flex-1 flex flex-col gap-1 relative z-10">
                  <h3 className="text-xs font-semibold text-[var(--foreground)] tracking-tight">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-[var(--muted-foreground)] font-medium">
                    <span>@{cert.issuer}</span>
                    <span className="opacity-30">|</span>
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Right Arrow Column */}
                <div className="relative z-10 pr-2">
                  <ArrowUpRight
                    size={14}
                    className="text-[var(--muted-foreground)] opacity-40 group-hover/row:opacity-100 group-hover/row:translate-x-0.5 group-hover/row:-translate-y-0.5 transition-all"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
