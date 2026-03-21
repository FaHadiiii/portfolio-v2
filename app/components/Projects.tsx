import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    name: "BolaJom",
    description:
      "Building a platform to streamline football venue booking while helping players organise matches and connect within the community.",
    tags: [
      "Express.js",
      "MySQL",
      "Flutter",
      "Figma",
      "Redis",
      "Meilisearch",
      "Firebase",
      "Docker",
    ],
    href: "",
    status: "Ongoing",
    logo: "/logo/bolajom.png",
  },
  {
    name: "e-Portfolio",
    description:
      "Interactive portfolio website built with Next.js and Tailwind CSS. Showcasing projects, skills, and experience with a focus on clean design.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "",
    status: "Live",
    logo: "/logo/portfolio.png",
  },
  {
    name: "OptimaBank: Loyalty Reward",
    description:
      "Developed as part of a certificate requirement for Khazanah Nasional. The primary responsibility involved building the backend using Express.js and MySQL, ensuring secure and efficient data handling for user rewards and transactions.",
    tags: ["Express.js", "MySQL", "React", "Render", "Figma"],
    href: "",
    status: "Archived",
    logo: "/logo/optima.png",
  },
  {
    name: "Hustl: Job Hunting Tracker",
    description:
      "Hustl is a mobile application developed with Flutter. The objective is to help job seekers to organize their job applications and enhance thir experience with AI Insights.",
    tags: ["Flutter", "Dart", "AppScript", "GCP"],
    href: "",
    status: "Archived",
    logo: "/logo/hustl.jpg",
  },
  {
    name: "Childcare Digital Book",
    description:
      "Childcare digital book is a mobile application developed as my bachelor's final year project with aim to help digitalize childcare and infants medical checkup.",
    tags: ["Flutterflow", "Firebase", "GCP"],
    href: "",
    status: "Archived",
    logo: "/logo/childcare.jpeg",
  },
  {
    name: "ARJirim",
    description:
      "ARJIrim is a mobile application developed as my diplomas's final year project. Developed using Unity 3D and Vuforia AR Engine aim to help standard fourth graders to learn matter topic interactively.",
    tags: ["Unity 3D", "Vuforia", "C#"],
    href: "",
    status: "Archived",
    logo: "/logo/arjirim.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative">
      {/* Header */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 border-b border-[var(--border)] bg-[var(--background-muted)]/80 backdrop-blur-sm z-20">
        <div className="max-w-3xl mx-auto px-4 py-2.5 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] px-3">
            Projects
          </span>
          <span className="text-[11px] text-[var(--foreground)] bg-[var(--border)]/40 border border-[var(--border)] rounded px-1.5 py-0.5 mr-3">
            {projects.length} built
          </span>
        </div>
      </div>

      {/* Column headers */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto grid grid-cols-[1fr_110px] px-3.5 sm:px-6 lg:px-4">
          <div className="px-3 py-2 text-[9px] font-bold uppercase tracking-[0.08em] text-[var(--muted-foreground)] border-r border-[var(--border)]">
            About
          </div>
          <div className="px-3 py-2 text-[9px] font-bold uppercase tracking-[0.08em] text-[var(--muted-foreground)] text-center">
            Status
          </div>
        </div>
      </div>

      {/* Rows */}
      {projects.map((project, i) => (
        <a
          key={i}
          href={project.href}
          className="block w-screen relative left-1/2 -translate-x-1/2 border-b border-[var(--border)] last:border-b-0 group transition-colors duration-100 hover:bg-[var(--background-muted)]"
        >
          <div className="max-w-3xl mx-auto grid grid-cols-[1fr_110px] px-3.5 sm:px-6 lg:px-4">
            {/* Project info */}
            <div className="relative border-r border-[var(--border)] px-3 py-3.5 flex flex-col gap-3">
              {/* Row index */}
              <span className="absolute top-1.5 right-2 text-[8px] font-bold text-[var(--muted-foreground)] opacity-35 tabular-nums tracking-wide">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Junction crosshair */}
              <span className="absolute bottom-[-1px] right-[-1px] w-1.5 h-1.5 border-t border-l border-[var(--border)] bg-[var(--background-panel)]" />

              {/* Logo + Text */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                {/* Project Logo */}
                <div className="h-8 w-8 flex overflow-hidden">
                  <Image
                    src={project.logo}
                    alt={project.name}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>

                {/* Project text */}
                <div className="flex flex-col gap-1 w-full sm:pr-6  sm:text-left">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-bold text-[var(--foreground)] transition-colors duration-150 group-hover:text-[var(--muted-foreground)]">
                      {project.name}
                    </span>
                    <ArrowUpRight
                      size={13}
                      className="text-[var(--muted-foreground)] opacity-50 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </div>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 pt-1 sm:ml-10 sm:justify-start">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold text-[var(--muted-foreground)] bg-[var(--border-strong)]/40 border border-[var(--border-strong)] rounded px-1.5 py-0.5 transition-colors duration-100 hover:text-[var(--foreground)] hover:border-[var(--muted-foreground)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="px-3 py-3.5 flex items-start justify-center pt-4">
              <Badge
                variant="outline"
                className="truncate max-w-full text-[10px] font-semibold bg-[var(--background-panel)]/60 text-[var(--muted-foreground)] py-0.5 px-2"
              >
                {project.status}
              </Badge>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
}
