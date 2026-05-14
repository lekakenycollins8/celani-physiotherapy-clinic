import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface EyebrowLabelProps {
  children: ReactNode;
  className?: string;
}

export function EyebrowLabel({ children, className }: EyebrowLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2",
        "text-xs font-semibold uppercase tracking-widest text-primary",
        className
      )}
    >
      <span className="inline-block w-4 h-px bg-accent" aria-hidden="true" />
      {children}
    </span>
  );
}
