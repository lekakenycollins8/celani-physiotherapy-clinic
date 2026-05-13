import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  spacing?: "default" | "tight" | "loose";
}

export function SectionWrapper({ 
  children, 
  className,
  spacing = "default" 
}: SectionWrapperProps) {
  const spacingClasses = {
    tight: "py-16 md:py-20 lg:py-24",
    default: "py-18 md:py-24 lg:py-28 xl:py-32",
    loose: "py-20 md:py-28 lg:py-32 xl:py-40"
  };

  return (
    <section className={cn(spacingClasses[spacing], className)}>
      {children}
    </section>
  );
}
