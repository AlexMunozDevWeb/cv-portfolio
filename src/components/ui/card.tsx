import { cn } from "@/lib/utils";

import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "accent-glow-hover border-surface-border bg-surface-elevated text-foreground rounded-xl border transition-all",
        className
      )}
      {...props}
    />
  );
}
