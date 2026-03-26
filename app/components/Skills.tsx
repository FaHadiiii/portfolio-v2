"use client";

import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="overflow-hidden relative">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Left/Right fading gradients for a premium look */}
      {/* <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" /> */}

      {/* Auto-scrolling container */}
      <div className="flex w-max animate-marquee">
        {[...skills, ...skills].map((skill, index) => (
          <span
            key={`${skill.name}-${index}`}
            className="flex justify-center items-center gap-2.5 text-xs font-medium border-r border-[var(--border)] px-6 py-6 cursor-default transition-all duration-300 hover:bg-[var(--background-muted)] flex-shrink-0"
          >
            <img
              src={`https://cdn.simpleicons.org/${skill.slug}`}
              alt={skill.name}
              className={`w-6 lg:h-6 object-contain ${
                skill.invertDark ? "dark:invert" : ""
              }`}
            />
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
