import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionDescriptionProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function SectionDescription({ children, className, size = "md" }: SectionDescriptionProps) {
  return (
    <p
      className={cn(
        "text-muted-foreground leading-[1.7]",
        size === "sm" && "text-sm md:text-base",
        size === "md" && "text-base md:text-lg",
        size === "lg" && "text-lg md:text-xl",
        className
      )}
    >
      {children}
    </p>
  );
}
