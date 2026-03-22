// app/components/about.tsx (Server Component)
import { BackgroundBeams } from "@/components/ui/background-beams";
import {
  ContributionGraph,
  ContributionGraphActivity,
  ContributionGraphFooter,
  ContributionGraphHeader,
  ContributionGraphLabel,
  ContributionGraphLegend,
  ContributionGraphLegendItem,
} from "@/components/kibo-ui/contribution-graph";

import { aboutBullets, profileData } from "@/lib/data";

async function getContributions() {
  const username = profileData.github;
  const url = new URL(
    `/v4/${username}`,
    "https://github-contributions-api.jogruber.de",
  );
  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 },
    });
    const data = await response.json();
    const currentYear = new Date().getFullYear();
    const total = data.total[currentYear] || 0;
    return { contributions: data.contributions, total };
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    return { contributions: [], total: 0 };
  }
}

export default async function About() {
  const { contributions, total } = await getContributions();
  const currentYear = new Date().getFullYear().toString();
  const filteredContributions =
    contributions?.filter((c: any) => c.date.startsWith(currentYear)) || [];

  const bullets = aboutBullets;

  return (
    <section id="about" className="relative pb-4">
      {/* Header */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 border-y border-[var(--border)] bg-[var(--background-muted)]/80 backdrop-blur-sm z-20">
        <div className="max-w-3xl mx-auto px-4 py-2.5 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] px-3.5">
            About Me
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-3.5 sm:px-6 lg:px-3.5 mt-4 relative">
        {/* Bullets Section with BackgroundBeams */}
        <div className="relative p-1 rounded-md overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <BackgroundBeams className="absolute inset-0" />
          </div>

          <div className="relative z-10">
            {bullets.map((text, i) => (
              <div
                key={i}
                className="grid grid-cols-[16px_1fr] gap-2 px-1 py-2 items-start hover:bg-[var(--background-muted)]/50 transition-colors duration-100 rounded-md"
              >
                <span className="text-[9px] font-bold text-[var(--muted-foreground)] opacity-40 pt-0.5 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-xs text-[var(--foreground)] leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="relative left-1/2 -translate-x-1/2 w-screen h-px bg-[var(--border)] mt-4 mb-2" />

        {/* GitHub Contribution Graph */}
        <div className="relative z-10 lg:pl-3">
          <ContributionGraph
            data={filteredContributions}
            blockSize={10}
            blockMargin={3}
            fontSize={12}
          >
            <ContributionGraphHeader></ContributionGraphHeader>
            <ContributionGraphActivity />
            <ContributionGraphFooter>
              <ContributionGraphLabel>
                {total} contributions in {currentYear}
              </ContributionGraphLabel>
              <ContributionGraphLegend>
                {[0, 1, 2, 3, 4].map((level) => (
                  <ContributionGraphLegendItem
                    key={level}
                    level={level as 0 | 1 | 2 | 3 | 4}
                  />
                ))}
              </ContributionGraphLegend>
            </ContributionGraphFooter>
          </ContributionGraph>
        </div>
      </div>

      <div className="absolute bottom-0 w-screen left-1/2 -translate-x-1/2 border-b border-[var(--border)]" />
    </section>
  );
}
