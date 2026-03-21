"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-[70] flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background-muted)]/80 backdrop-blur-md text-[var(--foreground)] shadow-lg transition-all duration-300 hover:bg-[var(--background)] hover:scale-110",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-12 opacity-0 pointer-events-none",
      )}
      aria-label="Scroll to top"
    >
      <ChevronUp size={16} strokeWidth={2.5} />
    </button>
  );
}
