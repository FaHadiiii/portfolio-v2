import { cn } from "@/lib/utils";

interface TagListProps {
  tags?: string[];
  className?: string;
  tagClassName?: string;
}

export function TagList({ tags, className, tagClassName }: TagListProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {tags.map((tag) => (
        <span
          key={tag}
          className={cn(
            "text-[10px] font-medium text-[var(--muted-foreground)] bg-[var(--border)]/40 border border-[var(--border)] rounded px-1.5 py-0.5 transition-colors duration-150 hover:text-[var(--foreground)] hover:border-[var(--muted-foreground)] cursor-default",
            tagClassName
          )}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
