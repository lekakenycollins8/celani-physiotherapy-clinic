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
    tight: "py-16 md:py-20 lg:py-24",
    default: "py-[72px] md:py-[96px] lg:py-[120px] xl:py-[160px]",
    loose: "py-[96px] md:py-[120px] lg:py-[160px] xl:py-[200px]",
  };

  return (
    <section className={cn(spacingClasses[spacing], className)}>
      {children}
    </section>
  );
}
