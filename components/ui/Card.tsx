import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  const hoverStyles = hover
    ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    : "";

  return (
    <div
      className={`bg-gradient-to-br from-primary-dark/50 via-primary/30 to-primary-dark/50 rounded-2xl shadow-md overflow-hidden border border-white/10 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}

