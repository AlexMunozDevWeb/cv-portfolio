import { cn } from "@/lib/utils";

import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "accent-glow-hover rounded-xl border border-surface-border bg-surface-elevated text-foreground transition-all",
        className
      )}
      {...props}
    />
  );
}
