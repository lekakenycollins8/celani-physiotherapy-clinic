import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({ 
  children, 
  className, 
  as = "h2" 
}: SectionHeadingProps) {
  const HeadingTag = as;
  
  const headingStyles = {
    h1: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
    h2: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
    h3: "text-2xl md:text-3xl lg:text-4xl"
  };

  return (
    <HeadingTag
      className={cn(
        "font-heading font-bold text-foreground",
        "leading-tight",
        headingStyles[as],
        className
      )}
    >
      {children}
    </HeadingTag>
  );
}
