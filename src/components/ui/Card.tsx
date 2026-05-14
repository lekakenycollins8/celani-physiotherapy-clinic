import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

export function Card({ children, className, interactive = false }: CardProps) {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground rounded-2xl",
        "border border-border",
        "p-6 md:p-8",
        interactive && [
          "transition-all duration-300",
          "hover:border-primary/30 hover:shadow-md hover:-translate-y-1",
          "cursor-pointer",
        ],
        !interactive && "shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
