import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "yellow" | "green";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const baseStyles = "px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide";
  
  const variants = {
    default: "bg-neutral-200 text-neutral-800",
    yellow: "bg-accent-yellow text-neutral-900",
    green: "bg-primary-light text-white",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

