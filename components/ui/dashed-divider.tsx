import { cn } from "@/lib/utils";

export function DashedDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative left-1/2 -translate-x-1/2 h-10 border-y border-[var(--border)] w-screen opacity-60",
        className
      )}
      style={{
        backgroundImage: `repeating-linear-gradient(
          140deg,
          var(--border) 0,
          var(--border) 1px,
          transparent 1px,
          transparent 8px
        )`,
      }}
    />
  );
}
