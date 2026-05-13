import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export function Button({ 
  variant = "primary", 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
        variant === "primary" && [
          "bg-primary text-primary-foreground hover:bg-primary/90",
          "shadow-sm hover:shadow-md hover:-translate-y-0.5"
        ],
        variant === "secondary" && [
          "bg-transparent border border-border text-foreground",
          "hover:bg-muted/50 hover:border-accent"
        ],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
