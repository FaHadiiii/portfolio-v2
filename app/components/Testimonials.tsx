"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Lock } from "lucide-react";

const Icon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    strokeWidth="1"
    stroke="currentColor"
    className={cn(
      "text-[var(--border-strong)] size-6 absolute z-10",
      className,
    )}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);

const Icons = () => (
  <>
    <Icon className="-top-3 -left-3" />
    <Icon className="-top-3 -right-3" />
    <Icon className="-bottom-3 -left-3" />
    <Icon className="-bottom-3 -right-3" />
  </>
);

interface Testimonial {
  name: string;
  role?: string;
  company?: string;
  quote: string;
  avatar: string;
  linkedin?: string;
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const hasLinkedin = !!t.linkedin;

  return (
    <Card className="bg-transparent relative rounded-none shadow-none w-[320px] shrink-0 hover:bg-[var(--background)]/50 transition-colors duration-200 overflow-visible group">
      <Icons />
      <CardHeader className="p-5 pb-3 flex flex-row items-center gap-3.5 space-y-0">
        <div className="w-10 h-10 rounded-full bg-[var(--border-strong)]/40 border border-[var(--border-strong)] flex items-center justify-center flex-shrink-0 overflow-hidden">
          <img
            src={t.avatar}
            alt={t.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1.5 min-w-0">
            {hasLinkedin ? (
              <a
                href={t.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 group/link max-w-full"
              >
                <CardTitle className="text-sm font-bold text-[var(--foreground)] truncate group-hover/link:text-primary transition-colors">
                  {t.name}
                </CardTitle>
                <ArrowUpRight className="size-3.5 text-[var(--muted-foreground)] group-hover/link:text-primary transition-colors shrink-0" />
              </a>
            ) : (
              <div className="flex items-center gap-1 max-w-full">
                <CardTitle className="text-sm font-bold text-[var(--foreground)] truncate">
                  {t.name}
                </CardTitle>
                <Lock className="size-3 text-[var(--muted-foreground)] opacity-50 shrink-0" />
              </div>
            )}
          </div>
          {t.role || t.company ? (
            <span className="text-[10px] font-medium text-[var(--muted-foreground)] border-l-2 pl-2 border-[var(--border-strong)] mt-0.5">
              {t.role && t.company
                ? `${t.role} @ ${t.company}`
                : t.role || t.company}
            </span>
          ) : (
            <span className="text-[10px] font-medium text-[var(--muted-foreground)] mt-0.5">
              -
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <p className="text-xs text-[var(--muted-foreground)] leading-relaxed italic opacity-80">
          "{t.quote}"
        </p>
      </CardContent>
    </Card>
  );
}

export default function Testimonials() {
  const midpoint = Math.ceil(testimonials.length / 2);
  const firstHalf = testimonials.slice(0, midpoint);
  const secondHalf = testimonials.slice(midpoint);

  const row1 = [...firstHalf, ...firstHalf, ...firstHalf, ...firstHalf];
  const row2 = [...secondHalf, ...secondHalf, ...secondHalf, ...secondHalf];

  return (
    <section id="testimonials" className="relative py-8 overflow-hidden">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(calc(-50% - 12px)); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          animation: marquee-left 100s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 100s linear infinite;
        }
        .animate-marquee-left:hover, .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Fading gradients */}
      {/* <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--background)] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-20 pointer-events-none" /> */}

      {/* Header */}
      {/* <div className="mb-8 relative z-10 flex flex-col items-center gap-1">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--foreground)]">
          Testimonials
        </span>
        <span className="text-[10px] font-medium text-[var(--muted-foreground)] opacity-70">
          What others say about my work
        </span>
      </div> */}

      <div className="flex flex-col gap-8">
        <div className="flex w-max animate-marquee-left gap-6 px-3">
          {row1.map((t: Testimonial, i: number) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
        <div className="flex w-max animate-marquee-right gap-6 px-3">
          {row2.map((t: Testimonial, i: number) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
