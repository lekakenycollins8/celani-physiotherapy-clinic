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
    h1: "text-[40px] md:text-5xl lg:text-6xl xl:text-[72px] leading-none tracking-tight",
    h2: "text-3xl md:text-4xl lg:text-[52px] leading-tight tracking-tight",
    h3: "text-2xl md:text-3xl lg:text-4xl leading-snug"
  };

  return (
    <HeadingTag
      className={cn(
        "font-heading font-bold text-foreground",
        headingStyles[as],
        className
      )}
    >
      {children}
    </HeadingTag>
  );
}
