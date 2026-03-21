import {
  Github,
  Linkedin,
  Twitter,
  Youtube,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

const socials = [
  { name: "GitHub", icon: Github, href: "https://github.com/FaHadiiii" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/fakhrulhadi/",
  },
];

export default function SocialLinks() {
  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 border-t border-[var(--border)]  mt-4">
      {/* Icon grid */}
      <div className="max-w-3xl mx-auto px-3.5 sm:px-6 lg:px-4">
        <div className="grid grid-cols-2">
          {socials.map(({ name, icon: Icon, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-row items-center justify-between py-4 px-4 sm:px-6 border-r border-[var(--border)] last:border-r-0 transition-colors duration-200 group-hover:text-[var(--muted-foreground)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-[var(--background-panel)] border border-[var(--border)] flex items-center justify-center transition-colors duration-200 ">
                  <Icon
                    size={14}
                    className="text-[var(--muted-foreground)] "
                    strokeWidth={1.75}
                  />
                </div>
                <span className="text-xs text-[var(--foreground)] ">
                  {name}
                </span>
              </div>
              <ArrowUpRight
                size={13}
                className="text-[var(--muted-foreground)] transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />{" "}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
