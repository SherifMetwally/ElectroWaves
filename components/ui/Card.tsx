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
      className={`bg-white rounded-2xl shadow-md overflow-hidden ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}

