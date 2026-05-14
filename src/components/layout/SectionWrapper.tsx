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
  spacing = "default",
}: SectionWrapperProps) {
  const spacingClasses = {
    tight: "py-8 md:py-10 lg:py-12",
    default: "py-8 md:py-10 lg:py-12",
    loose: "py-8 md:py-10 lg:py-12",
  };

  return (
    <section className={cn(spacingClasses[spacing], className)}>
      {children}
    </section>
  );
}
