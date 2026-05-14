import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md",
        secondary:
          "bg-transparent border border-border text-foreground hover:bg-muted/50 hover:border-accent/60 hover:-translate-y-0.5",
        ghost:
          "bg-transparent text-foreground hover:bg-muted/50",
        link:
          "text-primary underline-offset-4 hover:underline p-0 rounded-none",
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md",
        outline:
          "bg-transparent border border-border text-foreground hover:bg-muted/50 hover:border-accent/60",
        destructive:
          "bg-red-50 text-red-600 hover:bg-red-100 border border-red-200",
      },
      size: {
        sm: "px-4 py-2 text-sm gap-1.5",
        md: "px-6 py-3 text-sm gap-2",
        lg: "px-8 py-4 text-base gap-2.5",
        default: "px-6 py-3 text-sm gap-2",
        icon: "w-10 h-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  children?: ReactNode;
}

function Button({ variant, size, href, className, children, ...props }: ButtonProps) {
  const styles = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}

export { Button, buttonVariants };
