import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground rounded-2xl",
        "border border-border shadow-sm",
        "p-6 md:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
