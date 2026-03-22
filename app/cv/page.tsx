"use client";

import {
  profileData,
  experiences,
  education,
  skills,
  projects,
  certificates,
} from "@/lib/data";
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Github,
  Printer,
  ChevronLeft,
} from "lucide-react";
import React, { useEffect } from "react";
import Link from "next/link";
import { DashedDivider } from "@/components/ui/dashed-divider";
import { Press_Start_2P } from "next/font/google";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

import Image from "next/image";

export default function CVPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("print") === "true") {
      setTimeout(() => {
        window.print();
      }, 1000);
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className={`min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--primary)] selection:text-[var(--primary-foreground)] ${pixelFont.variable}`}
    >
      {/* UI Elements - Hidden on print */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)] print:hidden">
        <div className="max-w-3xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium tracking-wider text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            <ChevronLeft size={18} />
            Back
          </Link>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-[var(--foreground)] text-[var(--background)] px-3 py-1.5 rounded text-xs font-medium hover:opacity-90 transition-all shadow-sm"
          >
            <Printer size={14} />
            Print CV
          </button>
        </div>
      </div>

      {/* Grid Lines - Match Homepage */}
      <div
        className="fixed top-0 bottom-0 w-px bg-[var(--border)] pointer-events-none z-[60] print:hidden"
        style={{ left: "max(.8rem, calc(50% - 24rem + 1rem))" }}
      />
      <div
        className="fixed top-0 bottom-0 w-px bg-[var(--border)] pointer-events-none z-[60] print:hidden"
        style={{ left: "min(calc(100% - .8rem), calc(50% + 24rem - 1rem))" }}
      />

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-3.5 sm:px-6 lg:px-6 pt-20 pb-20 print:pt-0 print:pb-0 print:max-w-none print:px-0">
        <div className=" border border-[var(--border)] overflow-hidden shadow-xs print:shadow-none print:border-none print:bg-white print:text-black">
          {/* Header Section */}
          <header className="relative px-6 py-10 print:px-0 print:pt-5 print:pb-8 print:border-b-2 print:border-black">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold tracking-tighter text-[var(--foreground)] print:text-black">
                    {profileData.name.toUpperCase()}
                  </h1>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted-foreground)] print:text-gray-600">
                    {profileData.role}
                  </p>
                </div>
                <div className="flex items-center justify-center w-16 h-16 border border-[var(--border)] rounded-full overflow-hidden bg-[var(--background-muted)] print:border-black print:w-20 print:h-20">
                  <Image
                    src="/image/pfp.jpg"
                    alt={profileData.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-[11px] font-medium text-[var(--muted-foreground)] print:text-gray-700">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-2 hover:text-[var(--foreground)] transition-colors"
                >
                  <Mail size={12} /> {profileData.email}
                </a>
                <div className="flex items-center gap-2">
                  <Phone size={12} /> {profileData.phone}
                </div>
                <a
                  href={`https://${profileData.web}`}
                  className="flex items-center gap-2 hover:text-[var(--foreground)] transition-colors"
                >
                  <Globe size={12} /> {profileData.web}
                </a>
                <div className="flex items-center gap-2">
                  <Github size={12} /> github.com/{profileData.github}
                </div>
                <div className="flex items-center gap-2 sm:col-span-2">
                  <MapPin size={12} /> {profileData.location}
                </div>
              </div>
            </div>
          </header>

          <DashedDivider className="print:hidden" />

          {/* Experience Section */}
          <section>
            <div className="px-6 py-3 bg-[var(--background-muted)]/50 border-y border-[var(--border)] print:px-0 print:bg-white print:border-b print:border-t-0 print:border-black">
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--foreground)] print:text-black">
                Experience
              </h2>
            </div>

            <div className="divide-y divide-[var(--border)] print:divide-black">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="px-6 py-8 space-y-4 print:px-0 print:py-6"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1">
                      <h3 className="text-xs font-bold text-[var(--foreground)] print:text-black">
                        {exp.role}
                      </h3>
                      <p className="text-[11px] font-medium text-[var(--muted-foreground)] print:text-gray-700">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right flex flex-col items-end gap-1">
                      <span className="text-[10px] font-bold tabular-nums text-[var(--foreground)] print:text-black">
                        {exp.period}
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 bg-[var(--border)] rounded text-[var(--muted-foreground)] print:border print:border-black print:text-black">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((ach, j) => (
                      <li
                        key={j}
                        className="grid grid-cols-[14px_1fr] text-[11px] leading-relaxed text-[var(--muted-foreground)] print:text-gray-800"
                      >
                        <span className="text-[9px] font-black opacity-30 pt-0.5 tabular-nums print:text-black">
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills & Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] border-t border-[var(--border)] print:block print:border-t-0">
            {/* Left Column: Projects */}
            <section className="md:border-r border-[var(--border)] print:border-r-0">
              <div className="px-6 py-3 bg-[var(--background-muted)]/50 border-b border-[var(--border)] print:px-0 print:bg-white print:border-b print:border-black">
                <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--foreground)] print:text-black">
                  Selected Projects
                </h2>
              </div>
              <div className="divide-y divide-[var(--border)] print:divide-black">
                {projects.slice(0, 4).map((project, i) => (
                  <div key={i} className="px-6 py-6 space-y-3 print:px-0">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xs font-bold text-[var(--foreground)] print:text-black">
                        {project.name}
                      </h3>
                      <span className="text-[9px] font-bold text-[var(--muted-foreground)] opacity-50 print:text-black">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-[var(--muted-foreground)] print:text-gray-800">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-bold text-[var(--muted-foreground)] bg-[var(--background-muted)] border border-[var(--border)] px-1.5 py-0.5 rounded print:border-black print:text-black"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Right Column: Skills & Education */}
            <aside className="divide-y divide-[var(--border)] print:divide-black">
              {/* Skills */}
              <section>
                <div className="px-6 py-3 bg-[var(--background-muted)]/50 border-b border-[var(--border)] print:px-0 print:bg-white print:border-b print:border-black mt-8 md:mt-0 print:mt-10">
                  <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--foreground)] print:text-black">
                    Core Skills
                  </h2>
                </div>
                <div className="px-6 py-6 flex flex-wrap gap-2 print:px-0">
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="text-[10px] font-medium text-[var(--foreground)] border border-[var(--border)] px-2 py-1 bg-[var(--background-muted)] print:border-black print:text-black"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section>
                <div className="px-6 py-3 bg-[var(--background-muted)]/50 border-b border-[var(--border)] print:px-0 print:bg-white print:border-b print:border-black print:mt-10">
                  <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--foreground)] print:text-black">
                    Education
                  </h2>
                </div>
                <div className="px-6 py-6 space-y-6 print:px-0">
                  {education.map((edu, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="text-[11px] font-bold text-[var(--foreground)] leading-tight print:text-black">
                          {edu.degree}
                        </h3>
                      </div>
                      <p className="text-[10px] font-medium text-[var(--muted-foreground)] print:text-gray-700">
                        {edu.institution}
                      </p>
                      <span className="inline-block text-[9px] font-bold text-[var(--muted-foreground)] opacity-50 tabular-nums print:text-black pr-2">
                        {edu.period}
                      </span>
                      <p className="text-[10px] italic text-[var(--muted-foreground)] opacity-80 print:text-gray-600">
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Certificates */}
              <section>
                <div className="px-6 py-3 bg-[var(--background-muted)]/50 border-b border-[var(--border)] print:px-0 print:bg-white print:border-b print:border-black print:mt-10">
                  <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--foreground)] print:text-black">
                    Certificates
                  </h2>
                </div>
                <div className="px-6 py-6 space-y-4 print:px-0">
                  {certificates.map((cert, i) => (
                    <div key={i} className="space-y-0.5">
                      <h3 className="text-[10px] font-bold text-[var(--foreground)] print:text-black leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-[9px] font-medium text-[var(--muted-foreground)] print:text-gray-600">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </aside>
          </div>

          <DashedDivider className="print:hidden" />
        </div>
      </main>

      {/* Global CSS for printing and animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        main {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @media print {
          body {
            background-color: white !important;
            color: black !important;
            margin: 0 !important;
            -webkit-print-color-adjust: exact;
          }
          @page {
            margin: 0; /* This removes the browser's header/footer (date, url, etc.) */
            size: A4;
          }
          /* Add the margin back to the content instead of the page */
          main {
            margin: 15mm !important;
            padding: 0 !important;
            animation: none !important;
          }
          .font-pixel {
            font-family:
              ui-sans-serif,
              system-ui,
              -apple-system,
              BlinkMacSystemFont,
              "Segoe UI",
              Roboto,
              "Helvetica Neue",
              Arial,
              "Noto Sans",
              sans-serif !important;
          }
        }
      `}</style>
    </div>
  );
}
