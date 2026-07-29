import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-mono text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold hover:shadow-[0_0_20px_rgba(76,215,246,0.35)] hover:opacity-95",
        secondary:
          "border border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(76,215,246,0.15)]",
        outline:
          "border border-outline-variant/40 text-on-surface-variant hover:border-primary hover:text-primary hover:bg-surface-container-high",
        ghost:
          "text-on-surface-variant hover:text-primary hover:bg-surface-container-high",
        tertiary:
          "text-primary font-mono underline underline-offset-4 hover:opacity-80 p-0 h-auto",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-md",
        lg: "h-13 px-8 py-3 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
