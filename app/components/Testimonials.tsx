"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Engineering Manager",
    company: "Acme Corp",
    quote:
      "Hadi may be early in his career, but his attention to detail and commitment to clean, reliable code stands out. Always eager to learn, he quickly becomes a valuable contributor to any mobile project.",
    avatar: "https://robohash.org/sarah1.png?size=50x50",
  },
  {
    name: "James Liu",
    role: "Product Designer",
    company: "Startup XYZ",
    quote:
      "Hadi has a natural talent for turning designs into seamless mobile experiences. His ability to translate UI/UX concepts into working apps is impressive for someone just starting his career.",
    avatar: "https://robohash.org/james1.png?size=50x50",
  },
  {
    name: "Ahmad Rizky",
    role: "Tech Lead",
    company: "Tech Hub",
    quote:
      "Even with just over a year of experience, Hadi approaches technical challenges with curiosity and clarity. He consistently delivers thoughtful, maintainable solutions for complex problems.",
    avatar: "https://robohash.org/ahmad1.png?size=50x50",
  },
  {
    name: "Emily Watson",
    role: "CEO",
    company: "NextGen Solutions",
    quote:
      "Hadi joined us for a mobile feature rollout and exceeded expectations. His drive, adaptability, and focus on quality make him a rising star in mobile development.",
    avatar: "https://robohash.org/emily1.png?size=50x50",
  },
];

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

function TestimonialCard({ t }: { t: any }) {
  return (
    <Card className="bg-transparent relative rounded-none shadow-none w-[320px] shrink-0 hover:bg-[var(--background)]/50 transition-colors duration-200 overflow-visible">
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
          <div className="flex items-baseline justify-between w-full">
            <CardTitle className="text-sm font-bold text-[var(--foreground)]">
              {t.name}
            </CardTitle>
          </div>
          <span className="text-[10px] font-medium text-[var(--muted-foreground)] border-l-2 pl-2 border-[var(--border-strong)] mt-0.5">
            {t.role} @ {t.company}
          </span>
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
  const row1 = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];
  const row2 = [...testimonials].reverse();
  const fullRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section className="relative py-8 overflow-hidden">
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
          animation: marquee-left 45s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 45s linear infinite;
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
          {row1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
        <div className="flex w-max animate-marquee-right gap-6 px-3">
          {fullRow2.map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
