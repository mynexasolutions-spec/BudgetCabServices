import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "success" | "outline";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const variants = {
    primary: "bg-amber-500/10 text-amber-400 border border-amber-500/30",
    secondary: "bg-zinc-800 text-zinc-300 border border-zinc-700",
    success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
    outline: "border border-zinc-700 text-zinc-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
