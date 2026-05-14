import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface EyebrowLabelProps {
  children: ReactNode;
  className?: string;
  lineColor?: string;
}

export function EyebrowLabel({ children, className, lineColor = "bg-accent" }: EyebrowLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2",
        "text-xs font-semibold uppercase tracking-widest text-primary",
        className
      )}
    >
      <span className={cn("inline-block w-4 h-px", lineColor)} aria-hidden="true" />
      {children}
    </span>
  );
}
