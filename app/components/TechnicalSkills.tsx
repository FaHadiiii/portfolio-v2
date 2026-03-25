"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { technicalSkills } from "@/lib/data";
import { Terminal, Copy, Check, ChevronRight } from "lucide-react";
import { EncryptedText } from "@/components/ui/encrypted-text";
import FallingText from "@/components/FallingText";

export default function TechnicalSkills() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeCategory = technicalSkills[activeTab];

  // Flatten skills for badges
  const flattenedSkills = activeCategory.skills.flatMap((s) =>
    s.split(",").map((t) => t.trim()),
  );

  const handleCopy = () => {
    const jsonString = JSON.stringify(
      {
        category: activeCategory.category,
        skills: activeCategory.skills,
      },
      null,
      2,
    );
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="technical-skills" className="relative group">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      {/* Section Header */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 border-y border-[var(--border)] bg-[var(--background-muted)]/80 backdrop-blur-sm z-20">
        <div className="max-w-3xl mx-auto px-4 py-2.5 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] px-3.5">
            Technical Skills
          </span>
          <span className="text-[11px] text-[var(--foreground)] bg-[var(--border)]/40 border border-[var(--border)] rounded px-1.5 py-0.5 mr-3">
            {technicalSkills.length} Categories
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden"
        >
          {/* Editor Top Bar */}
          <div className="flex flex-col border-b border-[var(--border)] bg-[var(--background-muted)]/40">
            {/* Window Controls & Title */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border)]/50">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] opacity-80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] opacity-80" />
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-medium text-[var(--muted-foreground)] opacity-60 uppercase tracking-widest">
                <Terminal size={10} />
                skills.json — ~/portfolio
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1 rounded text-[10px] font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--border)]/30 transition-all active:scale-95"
              >
                {copied ? (
                  <Check size={12} className="text-green-500" />
                ) : (
                  <Copy size={12} />
                )}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Tabs */}
            <div className="flex items-center justify-between overflow-x-auto no-scrollbar scroll-smooth">
              <div className="flex">
                {technicalSkills.map((category, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`relative px-4 py-3 text-[11px] font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-2 ${
                      activeTab === i
                        ? "text-[var(--foreground)] bg-[var(--background-panel)] border-x border-[var(--border)] first:border-l-0"
                        : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--background-muted)]/60 border-x border-transparent"
                    }`}
                  >
                    <span
                      className={`w-1 h-1 rounded-full ${activeTab === i ? "bg-[var(--foreground)]" : "bg-transparent"}`}
                    />
                    {category.category}
                    {activeTab === i && (
                      <motion.div
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--foreground)]"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Editor Content Area */}
          <div className="relative p-6 sm:p-8 min-h-[350px] font-mono grid grid-cols-1 md:grid-cols-[1.5fr_0.5fr] gap-4">
            {/* Background Line Numbers Decor */}
            <div className="absolute left-4 top-8 flex flex-col gap-3 text-[10px] text-[var(--muted-foreground)] opacity-10 select-none pointer-events-none">
              {Array.from({ length: 15 }).map((_, i) => (
                <span key={i}>{String(i + 1).padStart(2, "0")}</span>
              ))}
            </div>

            <div className="flex gap-2 overflow-hidden">
              {/* JSON View */}
              <div className="flex-1 text-[13px] leading-relaxed overflow-x-auto ml-8 sm:ml-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-0.5 ml-8"
                  >
                    <div className="text-[var(--muted-foreground)] opacity-50">
                      {"{"}
                    </div>
                    <div className="pl-4 flex flex-wrap gap-x-2">
                      <span className="text-[#9cdcfe]">"category"</span>
                      <span className="text-[var(--muted-foreground)] opacity-50">
                        :
                      </span>
                      <span className="text-[#ce9178]">
                        <EncryptedText
                          text={`"${activeCategory.category}"`}
                          revealDelayMs={25}
                          className="text-[#ce9178]"
                          charset="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
                        />
                      </span>
                      <span className="text-[var(--muted-foreground)] opacity-50">
                        ,
                      </span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[#9cdcfe]">"skills"</span>
                      <span className="text-[var(--muted-foreground)] opacity-50">
                        : [
                      </span>
                      <div className="pl-4 space-y-0.5">
                        {activeCategory.skills.map((skillGroup, i) => (
                          <div key={i} className="flex flex-wrap gap-x-1">
                            <span className="text-[#ce9178]">
                              <EncryptedText
                                text={`"${skillGroup}"`}
                                revealDelayMs={12}
                                className="text-[#ce9178]"
                              />
                            </span>
                            {i < activeCategory.skills.length - 1 && (
                              <span className="text-[var(--muted-foreground)] opacity-50">
                                ,
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                      <span className="text-[var(--muted-foreground)] opacity-50">
                        ]
                      </span>
                    </div>
                    <div className="text-[var(--muted-foreground)] opacity-50">
                      {"}"}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right: Falling Skills */}
            <div className="relative border-l border-[var(--border)]/30 min-h-[300px] overflow-hidden hidden md:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0"
                >
                  <FallingText
                    text={flattenedSkills.join(" ")}
                    trigger="hover"
                    gravity={0.6}
                    fontSize="11px"
                    className="h-full"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Decor */}
            <div className="absolute bottom-4 right-6 flex items-center gap-2 text-[10px] font-mono text-[var(--muted-foreground)] opacity-20">
              <ChevronRight size={10} />
              <span>UTF-8</span>
              <span className="ml-2">JSON</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
